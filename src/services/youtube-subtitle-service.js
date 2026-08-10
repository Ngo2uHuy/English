// ============================================================================
// YouTube Subtitle Service — Real Live Caption Extractor & Sentence Synthesizer
// ============================================================================

import { TranslationService } from './translation-service.js';

export const YouTubeSubtitleService = {
  /**
   * Fetch real YouTube video captions, parse into clean sentence objects with timestamps & Vietnamese translations.
   */
  async fetchAndProcessSubtitles(videoId, videoTitle = '', videoDesc = '', durationStr = '06:15') {
    if (!videoId) {
      return await TranslationService.generateBilingualSubtitlesForVideo(videoTitle, videoDesc, durationStr);
    }

    try {
      // 1. Try to fetch real timed text XML from YouTube timedtext API endpoints
      const realTimedTextXml = await this.fetchRawTimedTextXml(videoId);

      if (realTimedTextXml) {
        const parsedLines = this.parseTimedTextXmlToSentences(realTimedTextXml);
        if (parsedLines && parsedLines.length > 0) {
          // Translate each sentence to Vietnamese using TranslationService
          const bilingualSubs = await Promise.all(
            parsedLines.map(async (line) => {
              const vi = await TranslationService.translateText(line.en, 'en', 'vi');
              return {
                start: line.start,
                end: line.end,
                en: line.en,
                vi: vi || line.en
              };
            })
          );

          if (bilingualSubs.length > 0) {
            return bilingualSubs;
          }
        }
      }
    } catch (err) {
      console.warn('[YouTubeSubtitleService] Real transcript fetch error, using fallback:', err);
    }

    // 2. Fallback to smart subtitle synthesis based on video title & description
    return await TranslationService.generateBilingualSubtitlesForVideo(videoTitle, videoDesc, durationStr);
  },

  /**
   * Fetch raw XML timed text for YouTube video using multiple endpoints & CORS proxies
   */
  async fetchRawTimedTextXml(videoId) {
    const directUrls = [
      `https://video.google.com/timedtext?lang=en&v=${videoId}`,
      `https://video.google.com/timedtext?v=${videoId}&type=track&lang=en&name=`,
      `https://video.google.com/timedtext?lang=en-US&v=${videoId}`
    ];

    const corsProxies = [
      `https://corsproxy.io/?`,
      `https://api.allorigins.win/raw?url=`
    ];

    // Method A: Direct timedtext endpoints
    for (const targetUrl of directUrls) {
      try {
        const res = await fetch(targetUrl);
        if (res.ok) {
          const text = await res.text();
          if (text && text.includes('<transcript>') && text.includes('<text')) {
            return text;
          }
        }
      } catch (e) {
        // Try next
      }
    }

    // Method B: Timedtext via CORS Proxies
    for (const targetUrl of directUrls) {
      for (const proxy of corsProxies) {
        try {
          const res = await fetch(`${proxy}${encodeURIComponent(targetUrl)}`);
          if (res.ok) {
            const text = await res.text();
            if (text && text.includes('<transcript>') && text.includes('<text')) {
              return text;
            }
          }
        } catch (e) {
          // Try next
        }
      }
    }

    // Method C: Scrape player page for captionTracks baseUrl via CORS proxy
    for (const proxy of corsProxies) {
      try {
        const pageUrl = `${proxy}${encodeURIComponent(`https://www.youtube.com/watch?v=${videoId}`)}`;
        const res = await fetch(pageUrl);
        if (res.ok) {
          const html = await res.text();
          const match = html.match(/"captionTracks"\s*:\s*(\[.*?\])/);
          if (match && match[1]) {
            const tracks = JSON.parse(match[1]);
            const enTrack = tracks.find(t => t.languageCode === 'en' || t.vssId?.includes('en')) || tracks[0];
            if (enTrack && enTrack.baseUrl) {
              const subRes = await fetch(`${proxy}${encodeURIComponent(enTrack.baseUrl)}`);
              if (subRes.ok) {
                const xmlText = await subRes.text();
                if (xmlText && xmlText.includes('<text')) {
                  return xmlText;
                }
              }
            }
          }
        }
      } catch (e) {
        // Try next
      }
    }

    return null;
  },

  /**
   * Parse YouTube timedtext XML string into logical sentence chunks with start & end times
   */
  parseTimedTextXmlToSentences(xmlString) {
    if (!xmlString) return [];

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const textNodes = Array.from(xmlDoc.querySelectorAll('text'));

    if (textNodes.length === 0) return [];

    const rawFragments = textNodes.map(node => {
      const start = parseFloat(node.getAttribute('start') || '0');
      const dur = parseFloat(node.getAttribute('dur') || '3');
      let text = node.textContent || '';
      // Decode HTML entities
      text = text.replace(/&amp;/g, '&')
                 .replace(/&lt;/g, '<')
                 .replace(/&gt;/g, '>')
                 .replace(/&quot;/g, '"')
                 .replace(/&#39;/g, "'")
                 .replace(/[\r\n]+/g, ' ')
                 .trim();
      return { start, dur, end: Math.round((start + dur) * 10) / 10, text };
    }).filter(f => f.text.length > 0);

    // Combine fragments into full sentences
    const sentences = [];
    let currentSentence = [];
    let sentenceStart = 0;
    let sentenceEnd = 0;

    for (let i = 0; i < rawFragments.length; i++) {
      const frag = rawFragments[i];

      if (currentSentence.length === 0) {
        sentenceStart = frag.start;
      }

      currentSentence.push(frag.text);
      sentenceEnd = frag.end;

      const combinedText = currentSentence.join(' ');
      const isEndOfSentence = /[.!?]$/.test(frag.text) || combinedText.length >= 90 || i === rawFragments.length - 1;

      if (isEndOfSentence) {
        sentences.push({
          start: Math.floor(sentenceStart),
          end: Math.ceil(sentenceEnd),
          en: combinedText.replace(/\s+/g, ' ').trim()
        });
        currentSentence = [];
      }
    }

    return sentences.slice(0, 30); // Limit to top 30 sentence lines for fast learning
  }
};
