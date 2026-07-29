// ==========================================================================
// YouTube Dual-Subtitle Interactive Learning Studio Page
// ==========================================================================

import { YOUTUBE_CATEGORIES, YOUTUBE_VIDEOS, getYouTubeVideoById, extractYouTubeId } from '../data/youtube-data.js';
import { StorageService } from '../services/storage-service.js';
import { GeminiService } from '../services/gemini-service.js';
import { IpaService } from '../services/ipa-service.js';
import { showToast } from '../components/toast.js';

let currentVideo = YOUTUBE_VIDEOS[0];
let activeSubtitleIdx = 0;
let player = null;
let timeCheckInterval = null;
let isLoopingLine = false;
let currentSpeed = 1;
let selectedCategory = 'all';

export function renderYouTubePage(preselectedVideoId = null) {
  const container = document.getElementById('page-container');
  if (!container) return;

  if (preselectedVideoId) {
    currentVideo = getYouTubeVideoById(preselectedVideoId);
  }

  container.innerHTML = `
    <!-- Header -->
    <div class="section-header mb-lg">
      <div class="section-title-group">
        <span class="section-label">Interactive Dual-Subtitle Studio</span>
        <h1>YouTube Video Learning</h1>
      </div>
      <p class="section-subtitle">Watch authentic English videos with line-by-line bilingual subtitles, instant word lookup & shadowing loop.</p>
    </div>

    <!-- Custom URL Input & Video Picker Bar -->
    <div class="card mb-lg" style="padding: 18px 24px; position:relative; z-index:10;">
      <div style="display:flex;gap:14px;align-items:center;flex-wrap:wrap;">
        <div style="flex:1;min-width:280px;position:relative;">
          <input type="text" id="youtube-url-input" class="input-field" tabindex="1" autocomplete="off" spellcheck="false" placeholder="Paste any YouTube URL or Video ID here..." style="position:relative;z-index:11;" />
        </div>
        <button class="btn btn-primary" id="load-yt-btn" tabindex="2">
          ▶️ Load Video
        </button>
        <button class="btn btn-secondary" id="ai-generate-subs-btn" title="Generate AI Subtitles with Gemini" tabindex="3">
          ✨ Auto-Sub with AI
        </button>
      </div>
    </div>

    <!-- Main Studio Split Layout -->
    <div class="workspace-layout" style="grid-template-columns: 1fr 420px; align-items: start;">
      
      <!-- Left: YouTube Player & Controls -->
      <div style="display:flex;flex-direction:column;gap:18px;">
        
        <!-- Video Container -->
        <div class="card" style="padding:0;overflow:hidden;background:#000;border-radius:var(--radius-xl);position:relative;">
          <div class="youtube-player-frame-wrapper" style="position:relative;padding-top:56.25%;width:100%;">
            <iframe 
              id="yt-player-iframe"
              src="https://www.youtube.com/embed/${currentVideo.youtubeId}?enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}&rel=0&autoplay=0"
              title="${currentVideo.title}"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style="position:absolute;top:0;left:0;width:100%;height:100%;border:none;"
            ></iframe>
          </div>
        </div>

        <!-- Custom Player Control Bar -->
        <div class="card" style="padding:16px 22px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px;">
          
          <div style="display:flex;align-items:center;gap:10px;">
            <button class="btn btn-secondary btn-sm" id="prev-line-btn" title="Previous Subtitle Line (←)">
              ⏮️ Prev Line
            </button>
            <button class="btn btn-primary btn-sm" id="replay-line-btn" title="Replay Current Sentence (R)">
              🔁 Replay Line
            </button>
            <button class="btn btn-secondary btn-sm" id="next-line-btn" title="Next Subtitle Line (→)">
              Next Line ⏭️
            </button>
          </div>

          <div style="display:flex;align-items:center;gap:10px;">
            <button class="btn btn-outline btn-sm ${isLoopingLine ? 'btn-active-loop' : ''}" id="loop-toggle-btn">
              ${isLoopingLine ? '🔂 Line Loop: ON' : '🔁 Line Loop: OFF'}
            </button>
            <select class="input-field" id="speed-select" style="width:100px;padding:6px 10px;font-size:0.85rem;">
              <option value="0.75">0.75x Speed</option>
              <option value="1" selected>1.0x Speed</option>
              <option value="1.25">1.25x Speed</option>
              <option value="1.5">1.5x Speed</option>
            </select>
          </div>

        </div>

        <!-- Active Sentence Focus Card -->
        <div class="card" style="border-left: 4px solid var(--color-primary); background: var(--bg-card);">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
            <span class="badge badge-indigo">🎯 Current Sentence Focus</span>
            <span style="font-size:0.8rem;color:var(--text-tertiary);" id="current-time-badge">00:00 / ${currentVideo.duration}</span>
          </div>
          <div id="active-sentence-en" style="font-size:1.15rem;font-weight:700;line-height:1.5;color:var(--text-primary);margin-bottom:6px;">
            ${currentVideo.subtitles[0]?.en || 'Select or start playing video...'}
          </div>
          <div id="active-sentence-vi" style="font-size:0.95rem;color:var(--text-secondary);font-weight:500;">
            ${currentVideo.subtitles[0]?.vi || ''}
          </div>
        </div>

      </div>

      <!-- Right: Subtitle Stream & Transcript -->
      <div class="card" style="padding:20px;height:calc(100vh - 180px);max-height:720px;display:flex;flex-direction:column;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;padding-bottom:12px;border-bottom:1px solid var(--border-subtle);">
          <div style="font-family:var(--font-display);font-weight:800;font-size:1.05rem;">📜 Interactive Transcript</div>
          <span class="badge badge-neutral" id="subs-count-badge">${currentVideo.subtitles.length} Sentences</span>
        </div>

        <!-- Scrollable Subtitles List -->
        <div id="subtitles-stream" style="flex:1;overflow-y:auto;padding-right:6px;display:flex;flex-direction:column;gap:10px;">
          ${renderSubtitleStreamHtml(currentVideo.subtitles)}
        </div>
      </div>

    </div>

    <!-- Curated Videos Library Carousel -->
    <div style="margin-top:40px;">
      <div class="section-header" style="margin-bottom:16px;">
        <div>
          <h2 style="font-size:1.4rem;">📚 Recommended Learning Videos</h2>
          <p class="section-subtitle">Hand-picked native videos with verified dual subtitles</p>
        </div>
        <div class="filter-pills" id="category-filter-pills">
          ${YOUTUBE_CATEGORIES.map(c => `
            <button class="filter-pill ${selectedCategory === c.id ? 'active' : ''}" data-cat="${c.id}">
              ${c.icon} ${c.name}
            </button>
          `).join('')}
        </div>
      </div>

      <div class="lessons-grid" id="curated-videos-grid">
        ${renderCuratedVideosGridHtml(selectedCategory)}
      </div>
    </div>

    <!-- Word Lookup Modal -->
    <div class="modal-backdrop" id="word-modal" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.6);backdrop-filter:blur(4px);z-index:999;align-items:center;justify-content:center;">
      <div class="card" style="max-width:440px;width:90%;padding:28px;position:relative;animation:slideUp 0.2s ease;">
        <button id="close-word-modal" style="position:absolute;top:16px;right:16px;background:none;border:none;color:var(--text-tertiary);font-size:1.4rem;cursor:pointer;">&times;</button>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
          <span style="font-size:1.8rem;" id="modal-word-text">Word</span>
          <button class="icon-btn" id="modal-speech-btn" title="Pronounce Word">🔊</button>
        </div>
        <div style="font-size:0.9rem;color:var(--color-primary);font-weight:600;margin-bottom:12px;" id="modal-phonetic">/phonetic/</div>
        <div style="background:var(--bg-secondary);padding:14px;border-radius:var(--radius-md);margin-bottom:16px;">
          <div style="font-size:0.85rem;color:var(--text-tertiary);margin-bottom:4px;">Vietnamese Meaning:</div>
          <div style="font-size:1.05rem;font-weight:700;color:var(--text-primary);" id="modal-meaning">Nghĩa tiếng Việt...</div>
        </div>
        <div style="display:flex;gap:10px;">
          <button class="btn btn-primary btn-sm" id="save-vocab-btn" style="flex:1;">
            💾 Save to Vocabulary Notebook
          </button>
        </div>
      </div>
    </div>
  `;

  // Attach Event Handlers
  attachYouTubeStudioEvents();
  setupYouTubeIframeApiTracker();
}

function renderSubtitleStreamHtml(subtitles) {
  return subtitles.map((sub, idx) => `
    <div class="subtitle-line-item ${idx === 0 ? 'active' : ''}" data-idx="${idx}" data-start="${sub.start}" data-end="${sub.end}" style="padding:12px 14px;border-radius:var(--radius-md);background:var(--bg-secondary);border:1px solid var(--border-subtle);cursor:pointer;transition:all var(--transition-fast);">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
        <span style="font-size:0.75rem;font-weight:700;color:var(--color-primary);">${formatTime(sub.start)} - ${formatTime(sub.end)}</span>
        <button class="icon-btn play-line-btn" data-idx="${idx}" style="width:26px;height:26px;font-size:0.7rem;" title="Play sentence">▶️</button>
      </div>
      <div class="sub-en-text" style="font-weight:600;font-size:0.94rem;line-height:1.5;color:var(--text-primary);margin-bottom:4px;">
        ${wrapWordsWithSpans(sub.en)}
      </div>
      <div class="sub-vi-text" style="font-size:0.84rem;color:var(--text-secondary);">
        ${sub.vi}
      </div>
    </div>
  `).join('');
}

function wrapWordsWithSpans(text) {
  if (!text) return '';
  const words = text.split(/\s+/);
  return words.map(w => {
    const cleanWord = w.replace(/[^a-zA-Z0-9']/g, '');
    return `<span class="interactive-sub-word" data-word="${cleanWord}">${w}</span>`;
  }).join(' ');
}

function renderCuratedVideosGridHtml(cat) {
  const filtered = cat === 'all' ? YOUTUBE_VIDEOS : YOUTUBE_VIDEOS.filter(v => v.category === cat);
  return filtered.map(v => `
    <div class="lesson-card yt-video-card" data-id="${v.id}" style="height:auto;cursor:pointer;">
      <div style="position:relative;border-radius:var(--radius-lg);overflow:hidden;margin-bottom:14px;aspect-ratio:16/9;">
        <img src="${v.thumbnail}" alt="${v.title}" style="width:100%;height:100%;object-fit:cover;" />
        <span class="badge badge-indigo" style="position:absolute;bottom:8px;right:8px;background:rgba(0,0,0,0.85);color:#fff;">${v.duration}</span>
        <span class="badge badge-emerald" style="position:absolute;top:8px;left:8px;">${v.level}</span>
      </div>
      <div style="font-size:0.8rem;color:var(--color-primary);font-weight:700;margin-bottom:4px;">${v.channel}</div>
      <h3 style="font-size:1.05rem;line-height:1.4;margin-bottom:6px;">${v.title}</h3>
      <p style="font-size:0.84rem;color:var(--text-secondary);line-clamp:2;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
        ${v.description}
      </p>
    </div>
  `).join('');
}

function attachYouTubeStudioEvents() {
  // Load custom YouTube URL
  const urlInput = document.getElementById('youtube-url-input');
  const loadBtn = document.getElementById('load-yt-btn');

  if (loadBtn) loadBtn.addEventListener('click', loadCustomYouTubeUrl);

  if (urlInput) {
    // Force focus on click — blur iframe first
    urlInput.addEventListener('click', () => {
      try { document.getElementById('yt-player-iframe')?.blur(); } catch(e) {}
      urlInput.focus();
    });

    // Keyboard: Enter to load
    urlInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        loadCustomYouTubeUrl();
      }
    });

    // Handle paste event explicitly
    urlInput.addEventListener('paste', (e) => {
      // Let the paste complete, then auto-load after a short delay
      setTimeout(() => {
        const val = urlInput.value.trim();
        if (val && val.length > 5) {
          loadCustomYouTubeUrl();
        }
      }, 150);
    });
  }

  // AI Auto Subtitles
  document.getElementById('ai-generate-subs-btn')?.addEventListener('click', generateAiSubtitles);

  // Category filter
  document.querySelectorAll('#category-filter-pills .filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#category-filter-pills .filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedCategory = btn.dataset.cat;
      const grid = document.getElementById('curated-videos-grid');
      if (grid) grid.innerHTML = renderCuratedVideosGridHtml(selectedCategory);
      attachVideoCardClickHandlers();
    });
  });

  attachVideoCardClickHandlers();

  // Subtitle line item click to seek
  document.querySelectorAll('.subtitle-line-item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.classList.contains('interactive-sub-word')) {
        handleWordClick(e.target.dataset.word);
        return;
      }
      const idx = parseInt(item.dataset.idx, 10);
      seekToSubtitleIndex(idx);
    });
  });

  // Controls
  document.getElementById('replay-line-btn')?.addEventListener('click', () => {
    seekToSubtitleIndex(activeSubtitleIdx);
  });

  document.getElementById('prev-line-btn')?.addEventListener('click', () => {
    if (activeSubtitleIdx > 0) seekToSubtitleIndex(activeSubtitleIdx - 1);
  });

  document.getElementById('next-line-btn')?.addEventListener('click', () => {
    if (activeSubtitleIdx < currentVideo.subtitles.length - 1) seekToSubtitleIndex(activeSubtitleIdx + 1);
  });

  document.getElementById('loop-toggle-btn')?.addEventListener('click', () => {
    isLoopingLine = !isLoopingLine;
    const btn = document.getElementById('loop-toggle-btn');
    if (btn) {
      btn.classList.toggle('btn-active-loop', isLoopingLine);
      btn.innerHTML = isLoopingLine ? '🔂 Line Loop: ON' : '🔁 Line Loop: OFF';
    }
    showToast(isLoopingLine ? '🔂 Sentence Loop Enabled for Shadowing' : '🔁 Normal Playback');
  });

  document.getElementById('speed-select')?.addEventListener('change', (e) => {
    currentSpeed = parseFloat(e.target.value);
    sendIframeCommand('setPlaybackRate', [currentSpeed]);
  });

  // Modal close
  document.getElementById('close-word-modal')?.addEventListener('click', () => {
    const modal = document.getElementById('word-modal');
    if (modal) modal.style.display = 'none';
  });
}

function attachVideoCardClickHandlers() {
  document.querySelectorAll('.yt-video-card').forEach(card => {
    card.addEventListener('click', () => {
      const vid = card.dataset.id;
      renderYouTubePage(vid);
    });
  });
}

function seekToSubtitleIndex(idx) {
  if (!currentVideo.subtitles[idx]) return;
  activeSubtitleIdx = idx;
  const sub = currentVideo.subtitles[idx];
  
  sendIframeCommand('seekTo', [sub.start, true]);
  sendIframeCommand('playVideo', []);

  updateActiveSubtitleUI(idx);
}

function updateActiveSubtitleUI(idx) {
  activeSubtitleIdx = idx;
  const sub = currentVideo.subtitles[idx];
  if (!sub) return;

  // Highlight line in stream
  document.querySelectorAll('.subtitle-line-item').forEach((el, i) => {
    if (i === idx) {
      el.classList.add('active');
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      el.classList.remove('active');
    }
  });

  // Update Focus Card
  const enEl = document.getElementById('active-sentence-en');
  const viEl = document.getElementById('active-sentence-vi');
  const badgeEl = document.getElementById('current-time-badge');

  if (enEl) enEl.innerHTML = wrapWordsWithSpans(sub.en);
  if (viEl) viEl.textContent = sub.vi;
  if (badgeEl) badgeEl.textContent = `${formatTime(sub.start)} / ${currentVideo.duration}`;

  // Re-attach word click handler in focus card
  enEl?.querySelectorAll('.interactive-sub-word').forEach(w => {
    w.addEventListener('click', () => handleWordClick(w.dataset.word));
  });
}

function setupYouTubeIframeApiTracker() {
  if (timeCheckInterval) clearInterval(timeCheckInterval);

  // Poll video status every 300ms using postMessage
  timeCheckInterval = setInterval(() => {
    sendIframeCommand('getCurrentTime', []);
  }, 300);

  window.removeEventListener('message', handleIframeMessage);
  window.addEventListener('message', handleIframeMessage);
}

function handleIframeMessage(e) {
  try {
    const data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
    if (data.event === 'infoDelivery' && data.info && typeof data.info.currentTime === 'number') {
      const currTime = data.info.currentTime;
      syncSubtitleWithTime(currTime);
    }
  } catch (err) {
    // Ignore unrelated window messages
  }
}

function syncSubtitleWithTime(time) {
  const subs = currentVideo.subtitles;
  if (!subs || subs.length === 0) return;

  const currentSub = subs[activeSubtitleIdx];
  
  // Check if line loop is active
  if (isLoopingLine && currentSub) {
    if (time >= currentSub.end) {
      sendIframeCommand('seekTo', [currentSub.start, true]);
      return;
    }
  }

  // Find index of subtitle for current timestamp
  const foundIdx = subs.findIndex(s => time >= s.start && time < s.end);
  if (foundIdx !== -1 && foundIdx !== activeSubtitleIdx) {
    updateActiveSubtitleUI(foundIdx);
  }
}

function sendIframeCommand(func, args) {
  const iframe = document.getElementById('yt-player-iframe');
  if (!iframe || !iframe.contentWindow) return;
  iframe.contentWindow.postMessage(JSON.stringify({
    event: 'command',
    func: func,
    args: args || []
  }), '*');
}

function loadCustomYouTubeUrl() {
  const input = document.getElementById('youtube-url-input');
  const val = input ? input.value : '';
  const ytId = extractYouTubeId(val);

  if (!ytId) {
    showToast('⚠️ Please enter a valid YouTube URL or Video ID');
    return;
  }

  currentVideo = {
    id: ytId,
    youtubeId: ytId,
    title: 'Custom YouTube Video (' + ytId + ')',
    channel: 'YouTube Video',
    category: 'custom',
    level: 'Custom',
    duration: '10:00',
    thumbnail: `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`,
    description: 'Custom loaded YouTube video with automatic bilingual transcript support.',
    subtitles: [
      { start: 0, end: 10, en: "Welcome to this YouTube video! Click 'Auto-Sub with AI' to generate full subtitles.", vi: "Chào mừng bạn đến với video YouTube này! Nhấp 'Auto-Sub with AI' để tạo phụ đề tự động." },
      { start: 10, end: 20, en: "You can click any line in the transcript to jump to that timestamp.", vi: "Bạn có thể nhấp vào bất kỳ dòng nào trong bản phiên âm để nhảy đến mốc thời gian đó." },
      { start: 20, end: 30, en: "Practice shadowing by repeating key sentences over and over.", vi: "Luyện tập shadowing bằng cách lặp đi lặp lại các câu quan trọng." }
    ]
  };

  renderYouTubePage(ytId);
  showToast('🎬 Loaded YouTube Video: ' + ytId);
}

async function generateAiSubtitles() {
  const apiKey = StorageService.getApiKey();
  if (!apiKey) {
    showToast('⚠️ Free API Key needed in Settings for AI Auto-Subbing');
    return;
  }

  showToast('🤖 AI is generating bilingual subtitles...');

  try {
    const prompt = `Generate a 6-sentence bilingual English & Vietnamese subtitle array for YouTube video "${currentVideo.title}".
Return strictly a JSON array of objects with fields: start (number seconds), end (number seconds), en (English sentence), vi (Vietnamese translation). Format:
[
  {"start": 0, "end": 5, "en": "Example English line", "vi": "Ví dụ tiếng Việt"}
]`;

    const parsedSubs = await GeminiService.callAPI(prompt);

    if (Array.isArray(parsedSubs) && parsedSubs.length > 0) {
      currentVideo.subtitles = parsedSubs;
      const stream = document.getElementById('subtitles-stream');
      if (stream) stream.innerHTML = renderSubtitleStreamHtml(parsedSubs);
      updateActiveSubtitleUI(0);
      showToast('✨ AI Subtitles Generated Successfully!');
    }
  } catch (err) {
    console.error('AI Subtitle generation failed:', err);
    showToast('⚠️ AI Subtitle generation failed. Used fallback transcript.');
  }
}

function handleWordClick(word) {
  if (!word) return;
  const modal = document.getElementById('word-modal');
  const wordText = document.getElementById('modal-word-text');
  const phonetic = document.getElementById('modal-phonetic');
  const meaning = document.getElementById('modal-meaning');
  const saveBtn = document.getElementById('save-vocab-btn');
  const speechBtn = document.getElementById('modal-speech-btn');

  if (wordText) wordText.textContent = word;
  if (phonetic) phonetic.textContent = IpaService.getIPA(word);
  if (meaning) meaning.textContent = `Nghĩa tiếng Việt của "${word}" (Bấm để tra cứu nhanh & lưu vào từ điển)`;

  if (speechBtn) {
    speechBtn.onclick = () => {
      const utter = new SpeechSynthesisUtterance(word);
      utter.lang = 'en-US';
      window.speechSynthesis.speak(utter);
    };
  }

  if (saveBtn) {
    saveBtn.onclick = () => {
      StorageService.saveWord({ word, definition: `Meaning of ${word}`, example: currentVideo.subtitles[activeSubtitleIdx]?.en || '' });
      showToast(`💾 Saved "${word}" to Vocabulary Notebook!`);
      if (modal) modal.style.display = 'none';
    };
  }

  if (modal) {
    modal.style.display = 'flex';
  }
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}
