// ============================================================================
// Translation Service — Instant Free Google Translate & Fallback AI Engine
// ============================================================================

import { StorageService } from './storage-service.js';
import { GeminiService } from './gemini-service.js';

export const TranslationService = {
  /**
   * Translate text (words or sentences) from English to Vietnamese.
   * Priority: Google Translate GTX (Free API) -> MyMemory -> Gemini AI
   */
  async translateText(text, from = 'auto', to = 'vi') {
    if (!text || !text.trim()) return '';

    const cleanText = text.trim();

    // 1. Try Google Translate GTX Free API (Fastest, No API Key Required)
    try {
      const gtxUrl = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${from}&tl=${to}&dt=t&q=${encodeURIComponent(cleanText)}`;
      const res = await fetch(gtxUrl);
      if (res.ok) {
        const data = await res.json();
        if (data && data[0] && Array.isArray(data[0])) {
          const translatedParts = data[0].map(item => item[0]).filter(Boolean);
          const result = translatedParts.join(' ').trim();
          if (result && !result.toLowerCase().includes('mymemory')) {
            return result;
          }
        }
      }
    } catch (err) {
      console.warn('[TranslationService] Google GTX failed, falling back:', err);
    }

    // 2. Try MyMemory API as fallback
    try {
      const myMemoryUrl = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(cleanText)}&langpair=${from === 'auto' ? 'en' : from}|${to}`;
      const res = await fetch(myMemoryUrl);
      if (res.ok) {
        const data = await res.json();
        if (data && data.responseData && data.responseData.translatedText) {
          const trans = data.responseData.translatedText.trim();
          if (trans && !trans.toUpperCase().includes('MYMEMORY WARNING')) {
            return trans;
          }
        }
      }
    } catch (err) {
      console.warn('[TranslationService] MyMemory failed:', err);
    }

    // 3. Try Gemini AI if API Key is configured
    try {
      const apiKey = StorageService.getApiKey();
      if (apiKey) {
        const prompt = `Translate the following English text to natural Vietnamese. Return ONLY the translated Vietnamese text without any explanations or quotes:\n"${cleanText}"`;
        const aiTranslation = await GeminiService.callAPI(prompt);
        if (typeof aiTranslation === 'string' && aiTranslation.trim()) {
          return aiTranslation.trim();
        }
      }
    } catch (err) {
      console.warn('[TranslationService] Gemini AI translation failed:', err);
    }

    return cleanText; // Fallback to original text if all failed
  },

  /**
   * Translate array of English sentences to Vietnamese
   */
  async translateSentences(sentences) {
    if (!Array.isArray(sentences) || sentences.length === 0) return [];
    return Promise.all(sentences.map(async (s) => {
      const vi = await this.translateText(s);
      return { en: s, vi: vi || s };
    }));
  },

  /**
   * Generate realistic bilingual subtitles for YouTube video based on title and description
   */
  async generateBilingualSubtitlesForVideo(videoTitle, videoDesc = '', durationStr = '06:15') {
    // Parse duration into seconds
    let totalSeconds = 360;
    if (durationStr && durationStr.includes(':')) {
      const parts = durationStr.split(':').map(Number);
      if (parts.length === 2) totalSeconds = parts[0] * 60 + parts[1];
      else if (parts.length === 3) totalSeconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
    }

    // Clean title and description
    const cleanTitle = (videoTitle || 'YouTube Video').replace(/[\r\n]+/g, ' ').trim();
    const cleanDesc = (videoDesc || '').replace(/https?:\/\/\S+/g, '').replace(/[\r\n]+/g, ' ').trim();

    // Extract sentences from title and description
    const rawLines = [];
    if (cleanTitle) rawLines.push(cleanTitle);

    if (cleanDesc) {
      const descSentences = cleanDesc.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 12);
      descSentences.forEach(s => {
        if (rawLines.length < 8 && !rawLines.includes(s.trim())) {
          rawLines.push(s.trim());
        }
      });
    }

    // Add contextual default lines if necessary
    if (rawLines.length < 4) {
      rawLines.push(`Welcome to this video: "${cleanTitle}".`);
      rawLines.push(`Listen carefully and practice shadowing sentence by sentence.`);
      rawLines.push(`Improve your English listening and vocabulary skills every day.`);
    }

    // Distribute timestamps evenly across video duration
    const numLines = Math.min(rawLines.length, 8);
    const lineDuration = Math.max(5, Math.floor(totalSeconds / numLines));

    const subtitles = [];

    for (let i = 0; i < numLines; i++) {
      const start = i * lineDuration;
      const end = (i === numLines - 1) ? totalSeconds : (i + 1) * lineDuration;
      const enText = rawLines[i];
      const viText = await this.translateText(enText, 'en', 'vi');

      subtitles.push({
        start: start,
        end: end,
        en: enText,
        vi: viText || enText
      });
    }

    return subtitles;
  }
};
