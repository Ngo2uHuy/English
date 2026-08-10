// ==========================================================================
// YouTube Dual-Subtitle Interactive Learning Studio Page
// Primary Focus: Extracting videos from YouTube Channels (e.g. @bbclearningenglish)
// ==========================================================================

import { YOUTUBE_CATEGORIES, YOUTUBE_VIDEOS, POPULAR_YOUTUBERS, getYouTubeVideoById, extractYouTubeId, extractChannelQuery } from '../data/youtube-data.js';
import { ChannelCrawlerService } from '../services/channel-crawler-service.js';
import { YouTubeSubtitleService } from '../services/youtube-subtitle-service.js';
import { StorageService } from '../services/storage-service.js';
import { GeminiService } from '../services/gemini-service.js';
import { TranslationService } from '../services/translation-service.js';
import { IpaService } from '../services/ipa-service.js';
import { DictionaryService } from '../services/dictionary-service.js';
import { showToast } from '../components/toast.js';

let currentVideo = YOUTUBE_VIDEOS[2]; // Default to BBC Learning English video
let activeSubtitleIdx = 0;
let timeCheckInterval = null;
let isLoopingLine = false;
let currentSpeed = 1;
let crawledChannelVideos = [];
let crawledChannelPage = 1;
let currentCrawledQuery = 'https://www.youtube.com/@bbclearningenglish';

export function renderYouTubePage(preselectedVideoId = null) {
  const container = document.getElementById('page-container');
  if (!container) return;

  if (preselectedVideoId) {
    currentVideo = getYouTubeVideoById(preselectedVideoId);
  }

  container.innerHTML = `
    <!-- Page Header -->
    <div class="section-header mb-lg">
      <div class="section-title-group">
        <span class="badge badge-emerald" style="margin-bottom:8px;">📺 Channel Video Extractor & Interactive Dual-Subtitle Studio</span>
        <h1 style="font-size:2.2rem;font-weight:800;">Học Tiếng Anh Qua Kênh YouTube</h1>
      </div>
      <p class="section-subtitle" style="font-size:1.05rem;max-width:800px;">
        Nhập link trang Channel YouTube (Ví dụ: <strong>https://www.youtube.com/@bbclearningenglish</strong>) để trích xuất danh sách video học tiếng Anh thực tế với phụ đề song ngữ, tra từ điển tức thì và tạo AI Auto-Sub.
      </p>
    </div>

    <!-- Channel Link & Video Search Bar -->
    <div class="card mb-lg" style="padding:22px 28px; background: var(--bg-tertiary); border: 2px solid var(--color-primary-light, #6366f1); border-radius: var(--radius-xl); box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.15); position:relative; z-index:10;">
      <div style="font-weight:700;font-size:0.95rem;margin-bottom:10px;color:var(--text-primary);display:flex;align-items:center;gap:8px;">
        <span>🔗 Nhập Link Kênh YouTube hoặc Video URL:</span>
        <span style="font-weight:normal;font-size:0.8rem;color:var(--text-tertiary);">(Hỗ trợ handle @, link /channel/, link /videos hoặc ID video)</span>
      </div>

      <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;">
        <div style="flex:1;min-width:320px;position:relative;">
          <input 
            type="text" 
            id="youtube-url-input" 
            class="input-field" 
            tabindex="1" 
            autocomplete="off" 
            spellcheck="false" 
            placeholder="Ví dụ: https://www.youtube.com/@bbclearningenglish" 
            value="${currentCrawledQuery}"
            style="width:100%;padding:14px 18px;font-size:1rem;font-weight:600;border-radius:var(--radius-lg);" 
          />
        </div>
        <button class="btn btn-primary" id="btn-crawl-channel" tabindex="2" style="padding:14px 24px;font-weight:700;">
          🔍 Trích Xuất Video Kênh
        </button>
        <button class="btn btn-secondary" id="ai-generate-subs-btn" title="Generate AI Subtitles with Gemini" tabindex="3" style="padding:14px 20px;">
          ✨ Auto-Sub với AI
        </button>
      </div>

      <!-- Quick Preset Channel Pills -->
      <div style="margin-top:16px;padding-top:14px;border-top:1px dashed var(--border-subtle);">
        <div style="font-size:0.82rem;font-weight:700;color:var(--text-secondary);margin-bottom:8px;">
          🔥 Các Kênh Học Tiếng Anh Nổi Tiếng (Bấm để tải video nhanh):
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${POPULAR_YOUTUBERS.map(c => `
            <button class="btn btn-secondary btn-sm channel-preset-btn" data-url="${c.url}" data-handle="${c.handle}" style="font-size:0.82rem;padding:6px 12px;border-radius:var(--radius-full);">
              ${c.icon} ${c.name}
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Main Studio Split Layout (Player + Transcript) -->
    <div class="workspace-layout mb-xl" style="grid-template-columns: 1fr 420px; align-items: start; gap:24px;">
      
      <!-- Left Column: Video Player & Subtitle Controls -->
      <div style="display:flex;flex-direction:column;gap:18px;">
        
        <!-- Video Container -->
        <div class="card" style="padding:0;overflow:hidden;background:#000;border-radius:var(--radius-xl);position:relative;box-shadow:var(--shadow-lg);">
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

        <!-- Player Controls Bar -->
        <div class="card" style="padding:16px 22px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:14px;">
          <div style="display:flex;align-items:center;gap:10px;">
            <button class="btn btn-secondary btn-sm" id="prev-line-btn" title="Câu Trước">
              ⏮️ Câu Trước
            </button>
            <button class="btn btn-primary btn-sm" id="replay-line-btn" title="Lặp Lại Câu Này">
              🔁 Phát Lại Câu
            </button>
            <button class="btn btn-secondary btn-sm" id="next-line-btn" title="Câu Kế Tiếp">
              Câu Sau ⏭️
            </button>
          </div>

          <div style="display:flex;align-items:center;gap:10px;">
            <button class="btn btn-outline btn-sm ${isLoopingLine ? 'btn-active-loop' : ''}" id="loop-toggle-btn">
              ${isLoopingLine ? '🔂 Loop Câu: BẬT' : '🔁 Loop Câu: TẮT'}
            </button>
            <select class="input-field" id="speed-select" style="width:105px;padding:6px 10px;font-size:0.85rem;">
              <option value="0.75">Tốc độ 0.75x</option>
              <option value="1" selected>Tốc độ 1.0x</option>
              <option value="1.25">Tốc độ 1.25x</option>
              <option value="1.5">Tốc độ 1.5x</option>
            </select>
          </div>
        </div>

        <!-- Active Sentence Focus Card -->
        <div class="card" style="border-left: 4px solid var(--color-primary); background: var(--bg-card); padding:20px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
            <span class="badge badge-indigo">🎯 Focus Sentence</span>
            <span style="font-size:0.8rem;color:var(--text-tertiary);" id="current-time-badge">00:00 / ${currentVideo.duration}</span>
          </div>
          <div id="active-sentence-en" style="font-size:1.2rem;font-weight:700;line-height:1.5;color:var(--text-primary);margin-bottom:8px;">
            ${currentVideo.subtitles[0]?.en || 'Select a video from channel list to start learning...'}
          </div>
          <div id="active-sentence-vi" style="font-size:1rem;color:var(--text-secondary);font-weight:500;">
            ${currentVideo.subtitles[0]?.vi || ''}
          </div>
        </div>

      </div>

      <!-- Right Column: Interactive Subtitles & Sentence Extraction Studio -->
      <div class="card" style="padding:20px;height:calc(100vh - 180px);max-height:780px;display:flex;flex-direction:column;">
        <div style="margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid var(--border-subtle);">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;flex-wrap:wrap;gap:8px;">
            <div>
              <div style="font-family:var(--font-display);font-weight:800;font-size:1.1rem;display:flex;align-items:center;gap:6px;">
                <span>📜 Lọc & Trích Xuất Câu Lời Video</span>
              </div>
              <div style="font-size:0.78rem;color:var(--text-tertiary);">Trích xuất lời thoại video thành từng câu để học</div>
            </div>
            <span class="badge badge-indigo" id="subs-count-badge">${currentVideo.subtitles.length} Sentences</span>
          </div>

          <!-- Sentence Extraction & Search Toolbar -->
          <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-top:10px;">
            <button class="btn btn-primary btn-sm" id="btn-extract-transcript" style="font-size:0.8rem;padding:7px 14px;font-weight:700;background:linear-gradient(135deg, var(--color-primary), #4f46e5);">
              ⚡ Trích Xuất Lời Video
            </button>
            <input 
              type="text" 
              id="search-sub-input" 
              class="input-field" 
              placeholder="🔍 Lọc từ / tìm câu học..." 
              style="flex:1;min-width:130px;padding:6px 10px;font-size:0.82rem;"
            />
          </div>

          <!-- Sentence Length Filter Pills -->
          <div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap;align-items:center;">
            <span style="font-size:0.75rem;font-weight:700;color:var(--text-tertiary);">Bộ lọc câu:</span>
            <button class="btn btn-secondary btn-sm sub-filter-pill active" data-filter="all" style="font-size:0.75rem;padding:3px 10px;border-radius:var(--radius-full);">
              Tất cả
            </button>
            <button class="btn btn-secondary btn-sm sub-filter-pill" data-filter="short" style="font-size:0.75rem;padding:3px 10px;border-radius:var(--radius-full);">
              ⚡ Câu ngắn (&le;10 từ)
            </button>
            <button class="btn btn-secondary btn-sm sub-filter-pill" data-filter="long" style="font-size:0.75rem;padding:3px 10px;border-radius:var(--radius-full);">
              📖 Câu dài (&gt;10 từ)
            </button>
          </div>
        </div>

        <!-- Scrollable Subtitles Stream -->
        <div id="subtitles-stream" style="flex:1;overflow-y:auto;padding-right:6px;display:flex;flex-direction:column;gap:10px;">
          ${renderSubtitleStreamHtml(currentVideo.subtitles)}
        </div>
      </div>

    </div>

    <!-- YouTuber Channel Videos Grid Result Section -->
    <div class="card mb-lg" style="padding:24px;border:1.5px solid var(--border-color);background:var(--bg-secondary);">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;flex-wrap:wrap;gap:10px;">
        <div>
          <h2 style="font-size:1.4rem;margin:0;display:flex;align-items:center;gap:10px;">
            <span>📺 Video Từ Kênh YouTube:</span>
            <span id="crawled-channel-title-display" style="color:var(--color-primary);font-weight:800;">BBC Learning English</span>
          </h2>
          <p style="font-size:0.88rem;color:var(--text-secondary);margin-top:4px;" id="crawled-channel-desc-display">
            Các video học tiếng Anh thực tế trích xuất trực tiếp từ link trang kênh.
          </p>
        </div>
        <div style="display:flex;gap:8px;align-items:center;">
          <span class="badge badge-emerald" id="live-status-badge">⚡ Real Live Channel Videos</span>
          <span class="badge badge-indigo" id="crawled-count-badge">Loading...</span>
        </div>
      </div>

      <!-- Crawled YouTuber Videos Grid Container -->
      <div id="crawled-channel-result">
        <div style="text-align:center;padding:36px;color:var(--text-secondary);">
          <div class="spinner" style="margin:0 auto 12px;"></div>
          <div>Đang trích xuất dữ liệu video thực tế từ kênh YouTube...</div>
        </div>
      </div>
    </div>

    <!-- Word Lookup Modal -->
    <div class="modal-backdrop" id="word-modal" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.6);backdrop-filter:blur(4px);z-index:999;align-items:center;justify-content:center;">
      <div class="card" style="max-width:440px;width:90%;padding:28px;position:relative;animation:slideUp 0.2s ease;">
        <button id="close-word-modal" style="position:absolute;top:16px;right:16px;background:none;border:none;color:var(--text-tertiary);font-size:1.4rem;cursor:pointer;">&times;</button>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
          <span style="font-size:1.8rem;font-weight:800;" id="modal-word-text">Word</span>
          <button class="icon-btn" id="modal-speech-btn" title="Phát Âm Từ">🔊</button>
        </div>
        <div style="font-size:0.9rem;color:var(--color-primary);font-weight:600;margin-bottom:12px;" id="modal-phonetic">/phonetic/</div>
        <div style="background:var(--bg-secondary);padding:14px;border-radius:var(--radius-md);margin-bottom:16px;">
          <div style="font-size:0.85rem;color:var(--text-tertiary);margin-bottom:4px;">Nghĩa Tiếng Việt:</div>
          <div style="font-size:1.05rem;font-weight:700;color:var(--text-primary);" id="modal-meaning">Đang tìm kiếm...</div>
        </div>
        <div style="display:flex;gap:10px;">
          <button class="btn btn-primary btn-sm" id="save-vocab-btn" style="flex:1;">
            💾 Lưu Vào Sổ Từ Vựng
          </button>
        </div>
      </div>
    </div>
  `;

  // Attach Event Handlers
  attachYouTubeStudioEvents();
  setupYouTubeIframeApiTracker();

  // Auto-crawl initial channel (@bbclearningenglish or preselected query)
  handleCrawlChannel(currentCrawledQuery);
}

function renderSubtitleStreamHtml(subtitles) {
  if (!subtitles || subtitles.length === 0) {
    return `<div style="padding:24px;text-align:center;color:var(--text-tertiary);">Chưa có phụ đề. Bấm <strong>⚡ Trích Xuất Lời Video</strong> hoặc <strong>✨ Auto-Sub với AI</strong> để tạo danh sách câu học.</div>`;
  }
  return subtitles.map((sub, idx) => `
    <div class="subtitle-line-item ${idx === 0 ? 'active' : ''}" data-idx="${idx}" data-start="${sub.start}" data-end="${sub.end}" style="padding:14px;border-radius:var(--radius-md);background:var(--bg-secondary);border:1px solid var(--border-subtle);cursor:pointer;transition:all var(--transition-fast);position:relative;">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;flex-wrap:wrap;gap:4px;">
        <span class="badge badge-indigo" style="font-size:0.72rem;padding:2px 6px;">⏱️ ${formatTime(sub.start)} - ${formatTime(sub.end)}</span>
        <div style="display:flex;gap:4px;align-items:center;">
          <button class="icon-btn play-line-btn" data-idx="${idx}" style="width:26px;height:26px;font-size:0.72rem;" title="Phát câu này trên Video">▶️</button>
          <button class="icon-btn loop-line-btn" data-idx="${idx}" style="width:26px;height:26px;font-size:0.72rem;" title="Lặp câu này để luyện Shadowing">🔁</button>
          <button class="icon-btn tts-line-btn" data-idx="${idx}" style="width:26px;height:26px;font-size:0.72rem;" title="Đọc phát âm câu">🔊</button>
          <button class="icon-btn save-sentence-btn" data-idx="${idx}" style="width:26px;height:26px;font-size:0.72rem;" title="Lưu câu này vào sổ từ vựng / câu học">💾</button>
        </div>
      </div>
      <div class="sub-en-text" style="font-weight:600;font-size:0.96rem;line-height:1.5;color:var(--text-primary);margin-bottom:4px;">
        ${wrapWordsWithSpans(sub.en)}
      </div>
      <div class="sub-vi-text" style="font-size:0.86rem;color:var(--text-secondary);font-weight:500;">
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

function attachYouTubeStudioEvents() {
  const inputEl = document.getElementById('youtube-url-input');
  const crawlBtn = document.getElementById('btn-crawl-channel');

  if (crawlBtn) {
    crawlBtn.addEventListener('click', () => {
      const val = inputEl ? inputEl.value.trim() : '';
      if (val) handleInputUrlOrChannel(val);
    });
  }

  if (inputEl) {
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const val = inputEl.value.trim();
        if (val) handleInputUrlOrChannel(val);
      }
    });

    inputEl.addEventListener('paste', () => {
      setTimeout(() => {
        const val = inputEl.value.trim();
        if (val) handleInputUrlOrChannel(val);
      }, 150);
    });
  }

  // AI Auto Subtitles button
  document.getElementById('ai-generate-subs-btn')?.addEventListener('click', generateAiSubtitles);

  // Real Transcript Extraction Button
  document.getElementById('btn-extract-transcript')?.addEventListener('click', extractRealTranscriptFromVideo);

  // Sentence Search & Filters
  const searchInput = document.getElementById('search-sub-input');
  if (searchInput) {
    searchInput.addEventListener('input', () => filterAndSearchSubtitles());
  }

  document.querySelectorAll('.sub-filter-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      document.querySelectorAll('.sub-filter-pill').forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
      filterAndSearchSubtitles();
    });
  });

  // Quick Preset Channels
  document.querySelectorAll('.channel-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const url = btn.dataset.url;
      if (inputEl) inputEl.value = url;
      handleCrawlChannel(url);
    });
  });

  // Subtitle Stream Actions Delegate
  bindSubtitleStreamItemEvents();

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
      btn.innerHTML = isLoopingLine ? '🔂 Loop Câu: BẬT' : '🔁 Loop Câu: TẮT';
    }
    showToast(isLoopingLine ? '🔂 Đã bật lặp câu để luyện Shadowing' : '🔁 Chế độ phát bình thường');
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

function bindSubtitleStreamItemEvents() {
  const stream = document.getElementById('subtitles-stream');
  if (!stream) return;

  stream.querySelectorAll('.subtitle-line-item').forEach(item => {
    item.addEventListener('click', (e) => {
      // Interactive word lookup
      if (e.target.classList.contains('interactive-sub-word')) {
        handleWordClick(e.target.dataset.word);
        return;
      }
      
      const idx = parseInt(item.dataset.idx, 10);

      // Play sentence button
      if (e.target.classList.contains('play-line-btn') || e.target.closest('.play-line-btn')) {
        e.stopPropagation();
        seekToSubtitleIndex(idx);
        return;
      }

      // Loop sentence button
      if (e.target.classList.contains('loop-line-btn') || e.target.closest('.loop-line-btn')) {
        e.stopPropagation();
        isLoopingLine = true;
        const btn = document.getElementById('loop-toggle-btn');
        if (btn) {
          btn.classList.add('btn-active-loop');
          btn.innerHTML = '🔂 Loop Câu: BẬT';
        }
        seekToSubtitleIndex(idx);
        showToast('🔂 Đã bật lặp lại câu này để luyện Shadowing');
        return;
      }

      // TTS audio button
      if (e.target.classList.contains('tts-line-btn') || e.target.closest('.tts-line-btn')) {
        e.stopPropagation();
        const sub = currentVideo.subtitles[idx];
        if (sub && sub.en) {
          DictionaryService.speakWord(sub.en);
        }
        return;
      }

      // Save sentence to Notebook
      if (e.target.classList.contains('save-sentence-btn') || e.target.closest('.save-sentence-btn')) {
        e.stopPropagation();
        const sub = currentVideo.subtitles[idx];
        if (sub) {
          StorageService.saveWord({
            word: sub.en.slice(0, 30) + '...',
            ipa: `[Timestamp ${formatTime(sub.start)}]`,
            definition: sub.vi,
            enDefinition: sub.en,
            example: `Video: ${currentVideo.title}`
          });
          showToast(`💾 Đã lưu câu "${sub.en.slice(0, 25)}..." vào Sổ Học!`);
        }
        return;
      }

      // Default click on line -> seek to timestamp
      seekToSubtitleIndex(idx);
    });
  });
}

async function extractRealTranscriptFromVideo() {
  const extractBtn = document.getElementById('btn-extract-transcript');
  if (extractBtn) extractBtn.innerHTML = '⚡ Đang lọc lời thoại...';

  showToast('🔍 Đang trích xuất lời thoại thực tế từ video YouTube...');

  try {
    const realSubs = await YouTubeSubtitleService.fetchAndProcessSubtitles(
      currentVideo.youtubeId || currentVideo.id,
      currentVideo.title,
      currentVideo.description,
      currentVideo.duration
    );

    if (Array.isArray(realSubs) && realSubs.length > 0) {
      currentVideo.subtitles = realSubs;
      const stream = document.getElementById('subtitles-stream');
      if (stream) stream.innerHTML = renderSubtitleStreamHtml(realSubs);
      bindSubtitleStreamItemEvents();

      const badgeCount = document.getElementById('subs-count-badge');
      if (badgeCount) badgeCount.textContent = `${realSubs.length} Sentences`;

      updateActiveSubtitleUI(0);
      showToast(`✅ Đã trích xuất thành công ${realSubs.length} câu lời thoại từ video!`);
    } else {
      showToast('⚠️ Không tìm thấy phụ đề chuẩn từ video. Hệ thống đã tự tạo bản dịch mẫu.');
    }
  } catch (err) {
    console.error('Extract real transcript error:', err);
    showToast('⚠️ Lỗi khi trích xuất lời video: ' + err.message);
  } finally {
    if (extractBtn) extractBtn.innerHTML = '⚡ Trích Xuất Lời Video';
  }
}

function filterAndSearchSubtitles() {
  const query = document.getElementById('search-sub-input')?.value.toLowerCase().trim() || '';
  const activePill = document.querySelector('.sub-filter-pill.active');
  const filterType = activePill ? activePill.dataset.filter : 'all';

  const subs = currentVideo.subtitles || [];
  const filtered = subs.filter(sub => {
    const wordCount = sub.en ? sub.en.split(/\s+/).length : 0;
    
    // Check length filter
    if (filterType === 'short' && wordCount > 10) return false;
    if (filterType === 'long' && wordCount <= 10) return false;

    // Check search query
    if (query) {
      const matchEn = sub.en && sub.en.toLowerCase().includes(query);
      const matchVi = sub.vi && sub.vi.toLowerCase().includes(query);
      if (!matchEn && !matchVi) return false;
    }

    return true;
  });

  const stream = document.getElementById('subtitles-stream');
  if (stream) {
    stream.innerHTML = renderSubtitleStreamHtml(filtered);
    bindSubtitleStreamItemEvents();
  }

  const badgeCount = document.getElementById('subs-count-badge');
  if (badgeCount) badgeCount.textContent = `${filtered.length}/${subs.length} Sentences`;
}

function handleInputUrlOrChannel(inputStr) {
  // If it's a direct video link like watch?v=...
  const ytId = extractYouTubeId(inputStr);
  if (ytId && !inputStr.includes('@') && !inputStr.includes('/channel/') && !inputStr.includes('/c/')) {
    loadDirectVideoId(ytId);
    return;
  }

  // Otherwise treat as YouTube channel URL / handle
  handleCrawlChannel(inputStr);
}

async function loadDirectVideoId(ytId) {
  currentVideo = {
    id: ytId,
    youtubeId: ytId,
    title: 'YouTube Video (' + ytId + ')',
    channel: 'YouTube Video',
    category: 'custom',
    level: 'Custom',
    duration: '10:00',
    thumbnail: `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`,
    description: 'Video YouTube tải trực tiếp từ URL.',
    subtitles: []
  };

  const iframe = document.getElementById('yt-player-iframe');
  if (iframe) {
    iframe.src = `https://www.youtube.com/embed/${ytId}?enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}&rel=0&autoplay=1`;
  }

  const stream = document.getElementById('subtitles-stream');
  if (stream) stream.innerHTML = renderSubtitleStreamHtml(currentVideo.subtitles);
  
  updateActiveSubtitleUI(0);
  showToast(`🎬 Đã nạp trực tiếp video: ${ytId}`);
}

async function handleCrawlChannel(customQuery = null, isLoadMore = false) {
  const rawQuery = customQuery || currentCrawledQuery;
  const query = extractChannelQuery(rawQuery);
  const resultBox = document.getElementById('crawled-channel-result');
  const countBadge = document.getElementById('crawled-count-badge');
  const titleDisplay = document.getElementById('crawled-channel-title-display');

  if (!query) {
    showToast('⚠️ Vui lòng nhập link trang Channel YouTube (Ví dụ: https://www.youtube.com/@bbclearningenglish)');
    return;
  }

  if (!isLoadMore) {
    crawledChannelPage = 1;
    currentCrawledQuery = rawQuery;
    crawledChannelVideos = [];
  } else {
    crawledChannelPage++;
  }

  if (resultBox && !isLoadMore) {
    resultBox.innerHTML = `
      <div style="text-align:center;padding:36px;color:var(--text-secondary);">
        <div class="spinner" style="margin:0 auto 12px;"></div>
        <div>Đang kết nối live trích xuất danh sách video từ kênh <strong>${query}</strong>...</div>
      </div>
    `;
  }

  try {
    const channelData = await ChannelCrawlerService.crawlChannel(query, crawledChannelPage);
    const newVideos = channelData.videos || [];

    if (!isLoadMore) {
      crawledChannelVideos = newVideos;
    } else {
      newVideos.forEach(v => {
        if (!crawledChannelVideos.some(existing => existing.id === v.id || existing.youtubeId === v.youtubeId)) {
          crawledChannelVideos.push(v);
        }
      });
    }

    if (titleDisplay) titleDisplay.textContent = channelData.channelName || query;
    if (countBadge) countBadge.textContent = `${crawledChannelVideos.length} Videos Loaded`;

    if (!resultBox) return;

    if (crawledChannelVideos.length === 0) {
      resultBox.innerHTML = `
        <div style="text-align:center;padding:24px;color:var(--color-warning);">
          ⚠️ Không tìm thấy video phù hợp từ kênh "${query}". Hãy thử chọn các kênh gợi ý phía trên.
        </div>
      `;
      return;
    }

    resultBox.innerHTML = `
      <div class="lessons-grid" id="crawled-channel-grid">
        ${crawledChannelVideos.map(v => `
          <div class="lesson-card yt-crawled-card ${v.youtubeId === currentVideo.youtubeId ? 'active-playing-card' : ''}" data-id="${v.id}" data-ytid="${v.youtubeId}" style="height:auto;cursor:pointer;position:relative;">
            <div style="position:relative;border-radius:var(--radius-lg);overflow:hidden;margin-bottom:12px;aspect-ratio:16/9;background:#000;">
              <img src="${v.thumbnail || `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`}" alt="${v.title}" style="width:100%;height:100%;object-fit:cover;" />
              <span class="badge badge-indigo" style="position:absolute;bottom:8px;right:8px;background:rgba(0,0,0,0.85);color:#fff;">${v.duration || '06:15'}</span>
              <span class="badge badge-emerald" style="position:absolute;top:8px;left:8px;">${v.level || 'Real Live'}</span>
            </div>
            <div style="font-size:0.8rem;color:var(--color-primary);font-weight:700;margin-bottom:4px;">${v.channel || query}</div>
            <h3 style="font-size:1rem;line-height:1.4;margin-bottom:6px;font-weight:700;">${v.title}</h3>
            <p style="font-size:0.82rem;color:var(--text-secondary);line-clamp:2;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">
              ${v.description || 'Video thực tế từ kênh YouTube với phụ đề song ngữ.'}
            </p>
          </div>
        `).join('')}
      </div>

      <div style="text-align:center;margin-top:24px;">
        <button class="btn btn-primary btn-lg" id="btn-load-more-crawled" style="padding:12px 32px;font-weight:700;">
          ➕ Tải Thêm Video Từ Kênh ${channelData.channelName || query}
        </button>
      </div>
    `;

    // Automatically set top video to first video if current video is default
    if (!isLoadMore && crawledChannelVideos.length > 0) {
      const topVid = crawledChannelVideos[0];
      if (topVid && topVid.youtubeId !== currentVideo.youtubeId) {
        selectVideoFromChannel(topVid);
      }
    }

    // Attach click events to video cards
    resultBox.querySelectorAll('.yt-crawled-card').forEach(card => {
      card.addEventListener('click', () => {
        const vid = card.dataset.ytid || card.dataset.id;
        const matched = crawledChannelVideos.find(item => item.id === card.dataset.id || item.youtubeId === vid);
        if (matched) {
          selectVideoFromChannel(matched);
        }
      });
    });

    // Attach load more
    document.getElementById('btn-load-more-crawled')?.addEventListener('click', () => {
      const loadBtn = document.getElementById('btn-load-more-crawled');
      if (loadBtn) loadBtn.innerHTML = '🔄 Đang tải thêm video mới...';
      handleCrawlChannel(currentCrawledQuery, true);
    });

    showToast(isLoadMore ? `➕ Đã nạp thêm video từ kênh: ${query}` : `✅ Đã trích xuất ${crawledChannelVideos.length} video thực tế từ kênh: ${query}`);
  } catch (err) {
    if (resultBox && !isLoadMore) {
      resultBox.innerHTML = `
        <div style="text-align:center;padding:24px;color:var(--color-danger);">
          ❌ Lỗi khi trích xuất kênh: ${err.message}
        </div>
      `;
    }
  }
}

async function selectVideoFromChannel(videoObj) {
  currentVideo = videoObj;
  const iframe = document.getElementById('yt-player-iframe');
  if (iframe) {
    iframe.src = `https://www.youtube.com/embed/${videoObj.youtubeId}?enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}&rel=0&autoplay=1`;
  }

  const stream = document.getElementById('subtitles-stream');
  if (stream) stream.innerHTML = renderSubtitleStreamHtml(videoObj.subtitles);

  const badgeCount = document.getElementById('subs-count-badge');
  if (badgeCount) badgeCount.textContent = `${videoObj.subtitles.length} Sentences`;

  updateActiveSubtitleUI(0);
  
  // Highlight active video card
  document.querySelectorAll('.yt-crawled-card').forEach(c => {
    if (c.dataset.ytid === videoObj.youtubeId || c.dataset.id === videoObj.id) {
      c.style.border = '2px solid var(--color-primary)';
    } else {
      c.style.border = 'none';
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelector('.main-content')?.scrollTo({ top: 0, behavior: 'smooth' });
  showToast(`🎬 Đã phát: ${videoObj.title}`);

  // If subtitles are dummy/placeholder template, automatically translate & generate line-by-line bilingual subs!
  const isPlaceholder = !videoObj.subtitles || videoObj.subtitles.some(s => s.en?.includes("Click 'Auto-Sub with AI'") || s.vi?.includes("Đang phát video thực tế"));
  if (isPlaceholder) {
    try {
      const realSubs = await TranslationService.generateBilingualSubtitlesForVideo(videoObj.title, videoObj.description, videoObj.duration);
      if (realSubs && realSubs.length > 0) {
        currentVideo.subtitles = realSubs;
        if (stream) stream.innerHTML = renderSubtitleStreamHtml(realSubs);
        if (badgeCount) badgeCount.textContent = `${realSubs.length} Sentences`;
        updateActiveSubtitleUI(0);
        showToast('🌐 Đã tự động tạo & dịch phụ đề song ngữ cho video!');
      }
    } catch (err) {
      console.warn('Auto translation of subtitles failed:', err);
    }
  }
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
  
  if (isLoopingLine && currentSub) {
    if (time >= currentSub.end) {
      sendIframeCommand('seekTo', [currentSub.start, true]);
      return;
    }
  }

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

async function generateAiSubtitles() {
  const apiKey = StorageService.getApiKey();
  showToast('🌐 Đang tạo phụ đề song ngữ Anh - Việt...');

  // 1. Try Gemini AI if API Key is configured
  if (apiKey) {
    try {
      const prompt = `Generate a 6-sentence bilingual English & Vietnamese subtitle array for YouTube video "${currentVideo.title}". Description: "${currentVideo.description || ''}".
Return strictly a JSON array of objects with fields: start (number seconds), end (number seconds), en (English sentence), vi (Vietnamese translation). Format:
[
  {"start": 0, "end": 5, "en": "Example English line", "vi": "Ví dụ tiếng Việt"}
]`;

      const parsedSubs = await GeminiService.callAPI(prompt);

      if (Array.isArray(parsedSubs) && parsedSubs.length > 0) {
        currentVideo.subtitles = parsedSubs;
        const stream = document.getElementById('subtitles-stream');
        if (stream) stream.innerHTML = renderSubtitleStreamHtml(parsedSubs);
        const badgeCount = document.getElementById('subs-count-badge');
        if (badgeCount) badgeCount.textContent = `${parsedSubs.length} Sentences`;
        updateActiveSubtitleUI(0);
        showToast('✨ Đã tạo xong phụ đề song ngữ bằng AI (Gemini)!');
        return;
      }
    } catch (err) {
      console.warn('Gemini AI Subtitle generation failed, falling back to TranslationService:', err);
    }
  }

  // 2. Fallback to TranslationService (Free Google Translate Engine)
  try {
    const generatedSubs = await TranslationService.generateBilingualSubtitlesForVideo(
      currentVideo.title,
      currentVideo.description,
      currentVideo.duration
    );

    if (Array.isArray(generatedSubs) && generatedSubs.length > 0) {
      currentVideo.subtitles = generatedSubs;
      const stream = document.getElementById('subtitles-stream');
      if (stream) stream.innerHTML = renderSubtitleStreamHtml(generatedSubs);
      const badgeCount = document.getElementById('subs-count-badge');
      if (badgeCount) badgeCount.textContent = `${generatedSubs.length} Sentences`;
      updateActiveSubtitleUI(0);
      showToast('🌐 Đã tự động tạo & dịch phụ đề song ngữ Anh - Việt thành công!');
    }
  } catch (err) {
    console.error('TranslationService Subtitle generation failed:', err);
    showToast('⚠️ Lỗi khi tự động dịch phụ đề. Vui lòng kiểm tra lại kết nối mạng.');
  }
}

async function handleWordClick(word) {
  if (!word) return;
  const modal = document.getElementById('word-modal');
  const wordText = document.getElementById('modal-word-text');
  const phonetic = document.getElementById('modal-phonetic');
  const meaning = document.getElementById('modal-meaning');
  const saveBtn = document.getElementById('save-vocab-btn');
  const speechBtn = document.getElementById('modal-speech-btn');

  const cleanWord = String(word).toLowerCase().replace(/[^a-z0-9'-]/gi, '').trim();

  if (wordText) wordText.textContent = cleanWord;
  if (phonetic) phonetic.textContent = IpaService.getIPA(cleanWord);
  if (meaning) meaning.textContent = 'Đang tìm nghĩa Tiếng Việt...';
  if (modal) modal.style.display = 'flex';

  const info = await DictionaryService.lookupWord(cleanWord);
  if (!info) return;

  if (wordText) wordText.textContent = info.word;
  if (phonetic) phonetic.textContent = `${info.partOfSpeech ? info.partOfSpeech.toUpperCase() + ' • ' : ''}${info.ipa}`;
  if (meaning) {
    meaning.innerHTML = `
      <div style="color:var(--color-success, #10b981);font-weight:700;font-size:1.1rem;margin-bottom:4px;">${info.vietnamese}</div>
      ${info.definition ? `<div style="font-size:0.85rem;color:var(--text-secondary);font-weight:normal;">${info.definition}</div>` : ''}
    `;
  }

  if (speechBtn) {
    speechBtn.onclick = () => {
      DictionaryService.speakWord(info.word, info.audioUrl);
    };
  }

  if (saveBtn) {
    saveBtn.onclick = () => {
      StorageService.saveWord({
        word: info.word,
        ipa: info.ipa,
        definition: info.vietnamese,
        enDefinition: info.definition,
        example: currentVideo?.subtitles?.[activeSubtitleIdx]?.en || info.example || ''
      });
      showToast(`💾 Đã lưu từ "${info.word}" (${info.vietnamese}) vào Notebook!`);
      if (modal) modal.style.display = 'none';
    };
  }
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}
