// ==========================================================================
// Camera Document Scanner & AI Translator Studio
// ==========================================================================

import { GeminiService } from '../services/gemini-service.js';
import { SoundService } from '../services/sound-service.js';
import { showToast } from '../components/toast.js';

let mediaStream = null;
let currentFacingMode = 'environment';
let capturedImageData = null;

export function renderScanPage() {
  const container = document.getElementById('page-container');
  if (!container) return;

  container.innerHTML = `
    <div class="studio-header animate-fade-in mb-lg">
      <div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
          <span class="badge badge-indigo">Vision AI Studio</span>
          <span class="badge badge-emerald">OCR & Translation</span>
        </div>
        <h1>Camera AI Document Scanner & Translator 📷</h1>
        <p class="section-subtitle">Quét tài liệu từ camera hoặc file ảnh, tự động trích xuất văn bản & dịch sang tiếng Anh chuẩn xác.</p>
      </div>
      <div style="display:flex;gap:10px;">
        <button class="btn btn-secondary btn-sm" id="btn-samples">📄 Mẫu Tài Liệu Dùng Thử</button>
      </div>
    </div>

    <div class="workspace-layout animate-fade-in">
      <!-- Left Panel: Camera Viewfinder & Image Input -->
      <div class="card p-lg flex-col gap-md">
        <div class="scan-viewfinder-container" id="viewfinder-box">
          <video id="camera-video" autoplay playsinline muted class="scan-video"></video>
          <canvas id="camera-canvas" style="display:none;"></canvas>
          <img id="image-preview" class="scan-preview-img" style="display:none;" alt="Captured Document" />

          <div class="scan-overlay-grid" id="scan-grid-overlay">
            <div class="scan-line"></div>
            <div class="viewfinder-corner top-left"></div>
            <div class="viewfinder-corner top-right"></div>
            <div class="viewfinder-corner bottom-left"></div>
            <div class="viewfinder-corner bottom-right"></div>
            <div class="viewfinder-hint">⚡ Hướng máy ảnh vào đoạn văn bản để quét</div>
          </div>
        </div>

        <div class="scan-controls-bar">
          <button class="btn btn-primary btn-lg flex-1" id="btn-capture-photo">
            📸 Chụp Ảnh Tài Liệu
          </button>
          <button class="icon-btn" id="btn-switch-cam" title="Đổi máy ảnh trước/sau">🔄</button>
          <label class="btn btn-secondary" style="margin:0;cursor:pointer;" title="Tải ảnh từ máy">
            📁 Chọn Ảnh
            <input type="file" id="file-upload-input" accept="image/*" style="display:none;" />
          </label>
        </div>

        <div id="captured-actions-bar" style="display:none;" class="flex-center gap-sm">
          <button class="btn btn-primary btn-lg flex-1" id="btn-start-scan">
            ⚡ Trích Xuất & Dịch Tiếng Anh
          </button>
          <button class="btn btn-secondary" id="btn-retake-photo">📸 Chụp Lại</button>
        </div>
      </div>

      <!-- Right Panel: OCR Translation Results Studio -->
      <div class="card p-lg flex-col gap-md" id="scan-result-card">
        <div class="flex-between align-center border-b pb-sm mb-xs">
          <h3 style="font-size:1.15rem;display:flex;align-items:center;gap:8px;">
            <span>🌐 Kết Quả Dịch Tiếng Anh</span>
          </h3>
          <button class="btn btn-outline btn-sm" id="btn-read-full-tts" style="display:none;">
            🔊 Đọc Tiếng Anh
          </button>
        </div>

        <div id="scan-result-body">
          <div class="empty-state-card text-center p-xl">
            <div style="font-size:3rem;margin-bottom:12px;">📷</div>
            <h4 style="margin-bottom:6px;">Chưa Có Kết Quả Quét</h4>
            <p style="font-size:0.88rem;color:var(--text-secondary);">Chụp ảnh tài liệu từ máy ảnh hoặc mở file ảnh để bắt đầu trích xuất & dịch thuật AI.</p>
          </div>
        </div>
      </div>
    </div>
  `;

  // Start Camera Stream
  startCameraStream();

  // Attach Event Listeners
  document.getElementById('btn-capture-photo')?.addEventListener('click', capturePhoto);
  document.getElementById('btn-switch-cam')?.addEventListener('click', switchCamera);
  document.getElementById('file-upload-input')?.addEventListener('change', handleFileUpload);
  document.getElementById('btn-retake-photo')?.addEventListener('click', retakePhoto);
  document.getElementById('btn-start-scan')?.addEventListener('click', executeDocumentOCRAndTranslate);
  document.getElementById('btn-samples')?.addEventListener('click', loadSampleDocument);
}

async function startCameraStream() {
  const video = document.getElementById('camera-video');
  if (!video) return;

  if (mediaStream) {
    mediaStream.getTracks().forEach(track => track.stop());
  }

  try {
    mediaStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: currentFacingMode, width: { ideal: 1280 }, height: { ideal: 720 } }
    });
    video.srcObject = mediaStream;
    video.style.display = 'block';
    const preview = document.getElementById('image-preview');
    if (preview) preview.style.display = 'none';
  } catch (err) {
    console.warn('Unable to access live camera stream, switching to file upload mode:', err);
    showToast('Không thể mở camera thiết bị. Bạn có thể tải file ảnh tài liệu để dịch.', 'info');
  }
}

function switchCamera() {
  currentFacingMode = currentFacingMode === 'environment' ? 'user' : 'environment';
  startCameraStream();
}

function capturePhoto() {
  const video = document.getElementById('camera-video');
  const canvas = document.getElementById('camera-canvas');
  const preview = document.getElementById('image-preview');
  if (!video || !canvas || !preview) return;

  canvas.width = video.videoWidth || 640;
  canvas.height = video.videoHeight || 480;

  const ctx = canvas.getContext('2d');
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  capturedImageData = canvas.toDataURL('image/jpeg', 0.88);
  preview.src = capturedImageData;
  preview.style.display = 'block';
  video.style.display = 'none';

  document.getElementById('scan-grid-overlay')?.classList.add('captured');
  document.querySelector('.scan-controls-bar').style.display = 'none';
  document.getElementById('captured-actions-bar').style.display = 'flex';

  SoundService.playCorrect();
}

function retakePhoto() {
  capturedImageData = null;
  const preview = document.getElementById('image-preview');
  const video = document.getElementById('camera-video');
  if (preview) preview.style.display = 'none';
  if (video) video.style.display = 'block';

  document.getElementById('scan-grid-overlay')?.classList.remove('captured');
  document.querySelector('.scan-controls-bar').style.display = 'flex';
  document.getElementById('captured-actions-bar').style.display = 'none';
  startCameraStream();
}

function handleFileUpload(e) {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    capturedImageData = event.target.result;
    const preview = document.getElementById('image-preview');
    const video = document.getElementById('camera-video');
    if (preview) {
      preview.src = capturedImageData;
      preview.style.display = 'block';
    }
    if (video) video.style.display = 'none';

    document.getElementById('scan-grid-overlay')?.classList.add('captured');
    document.querySelector('.scan-controls-bar').style.display = 'none';
    document.getElementById('captured-actions-bar').style.display = 'flex';
  };
  reader.readAsDataURL(file);
}

function loadSampleDocument() {
  const sampleCanvas = document.createElement('canvas');
  sampleCanvas.width = 600;
  sampleCanvas.height = 400;
  const ctx = sampleCanvas.getContext('2d');
  ctx.fillStyle = '#0f172a';
  ctx.fillRect(0, 0, 600, 400);
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 22px sans-serif';
  ctx.fillText('Hành Trình Học Ngữ Pháp Tiếng Anh', 40, 60);
  ctx.font = '16px sans-serif';
  ctx.fillStyle = '#cbd5e1';
  ctx.fillText('Việc làm chủ cấu trúc câu giúp bạn trình bày ý tưởng', 40, 110);
  ctx.fillText('một cách tự tin, logic và đạt điểm cao trong các kỳ thi.', 40, 140);
  ctx.fillText('Hãy rèn luyện kỹ năng đọc và ghi nhớ từ vựng hằng ngày.', 40, 170);

  capturedImageData = sampleCanvas.toDataURL('image/jpeg');
  const preview = document.getElementById('image-preview');
  const video = document.getElementById('camera-video');
  if (preview) {
    preview.src = capturedImageData;
    preview.style.display = 'block';
  }
  if (video) video.style.display = 'none';

  document.getElementById('scan-grid-overlay')?.classList.add('captured');
  document.querySelector('.scan-controls-bar').style.display = 'none';
  document.getElementById('captured-actions-bar').style.display = 'flex';

  showToast('Đã tải ảnh tài liệu mẫu thành công!', 'success');
}

async function executeDocumentOCRAndTranslate() {
  if (!capturedImageData) {
    showToast('Vui lòng chụp ảnh hoặc chọn ảnh tài liệu trước!', 'warning');
    return;
  }

  const resultBody = document.getElementById('scan-result-body');
  if (resultBody) {
    resultBody.innerHTML = `
      <div class="flex-center p-xl flex-col gap-md">
        <div class="spinner"></div>
        <p style="font-weight:600;color:var(--color-primary);">Đang quét OCR & Dịch thuật AI sang Tiếng Anh...</p>
      </div>
    `;
  }

  try {
    const result = await GeminiService.scanAndTranslateDocument(capturedImageData);
    renderTranslationResult(result);
    showToast('Đã trích xuất & dịch tài liệu sang Tiếng Anh thành công!', 'success');
  } catch (err) {
    console.error('Scan OCR error:', err);
    if (resultBody) {
      resultBody.innerHTML = `
        <div class="p-lg text-center" style="color:var(--color-rose);">
          <h4>Đã Xảy Ra Lỗi Khi Quét</h4>
          <p style="font-size:0.88rem;margin-top:6px;">${err.message || 'Không thể đọc nội dung ảnh.'}</p>
        </div>
      `;
    }
  }
}

function renderTranslationResult(res) {
  const resultBody = document.getElementById('scan-result-body');
  const readFullBtn = document.getElementById('btn-read-full-tts');
  if (!resultBody) return;

  if (readFullBtn) {
    readFullBtn.style.display = 'inline-flex';
    readFullBtn.onclick = () => SoundService.speak(res.englishTranslation);
  }

  resultBody.innerHTML = `
    <!-- Tabs Header -->
    <div class="tabs mb-md" id="scan-result-tabs">
      <button class="tab-btn active" data-tab="tab-alignments">📖 Dịch Theo Câu</button>
      <button class="tab-btn" data-tab="tab-fulltext">📄 Toàn Bộ Văn Bản</button>
      <button class="tab-btn" data-tab="tab-vocab">🔤 Từ Vựng (${res.keyVocabulary?.length || 0})</button>
      <button class="tab-btn" data-tab="tab-notes">💡 Cấu Trúc Ngữ Pháp</button>
    </div>

    <!-- Tab 1: Sentence Alignments -->
    <div class="tab-content active" id="tab-alignments">
      <div class="flex-col gap-sm">
        ${(res.sentenceAlignments || []).map((pair, idx) => `
          <div class="card p-md border-subtle flex-col gap-xs align-pair-card">
            <div style="font-size:0.88rem;color:var(--text-secondary);display:flex;align-items:center;gap:6px;">
              <span class="badge badge-neutral" style="font-size:0.65rem;">#${idx + 1} Gốc</span>
              <span>${pair.original}</span>
            </div>
            <div style="font-size:0.95rem;font-weight:700;color:var(--text-primary);display:flex;align-items:center;justify-content:space-between;gap:8px;">
              <span>🇬🇧 ${pair.english}</span>
              <button class="icon-btn btn-sm btn-tts-pair" data-text="${pair.english.replace(/"/g, '&quot;')}" title="Đọc phát âm câu này">🔊</button>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Tab 2: Full Text Split View -->
    <div class="tab-content" id="tab-fulltext">
      <div class="flex-col gap-md">
        <div>
          <label class="form-label">Văn Bản Gốc (Đã Quét OCR):</label>
          <div class="reading-passage" style="font-size:0.92rem;padding:16px;background:var(--bg-secondary);">
            ${res.originalText.replace(/\n/g, '<br/>')}
          </div>
        </div>
        <div>
          <label class="form-label" style="color:var(--color-primary);">Bản Dịch Tiếng Anh Chuẩn Xác:</label>
          <div class="reading-passage" style="font-size:0.96rem;font-weight:600;padding:16px;border-color:var(--color-primary);">
            ${res.englishTranslation.replace(/\n/g, '<br/>')}
          </div>
        </div>
      </div>
    </div>

    <!-- Tab 3: Vocabulary List -->
    <div class="tab-content" id="tab-vocab">
      <div class="grid-2-cols gap-sm">
        ${(res.keyVocabulary || []).map(v => `
          <div class="card p-sm flex-col gap-2xs">
            <div class="flex-between align-center">
              <span style="font-weight:800;font-size:1.05rem;color:var(--color-primary);">${v.word}</span>
              <button class="icon-btn btn-sm btn-tts-vocab" data-word="${v.word}">🔊</button>
            </div>
            <span class="ipa-text">${v.ipa || ''}</span>
            <span style="font-weight:600;font-size:0.85rem;">🇻🇳 ${v.meaning}</span>
            ${v.example ? `<p style="font-size:0.78rem;font-style:italic;margin-top:4px;color:var(--text-tertiary);">"${v.example}"</p>` : ''}
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Tab 4: Grammar Breakdown Notes -->
    <div class="tab-content" id="tab-notes">
      <div class="card p-md border-subtle" style="background:var(--bg-secondary);">
        <h4 style="margin-bottom:8px;color:var(--color-accent);">📌 Phân Tích Cấu Trúc Ngữ Pháp:</h4>
        <p style="font-size:0.92rem;line-height:1.6;">${res.grammarNotes || 'Không có ghi chú thêm.'}</p>
      </div>
    </div>
  `;

  // Bind Tab Button Switchers
  const tabs = document.querySelectorAll('#scan-result-tabs .tab-btn');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('#scan-result-body .tab-content').forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetTab = document.getElementById(btn.dataset.tab);
      if (targetTab) targetTab.classList.add('active');
    });
  });

  // Bind Pair TTS
  document.querySelectorAll('.btn-tts-pair').forEach(btn => {
    btn.addEventListener('click', () => SoundService.speak(btn.dataset.text));
  });

  // Bind Vocab TTS
  document.querySelectorAll('.btn-tts-vocab').forEach(btn => {
    btn.addEventListener('click', () => SoundService.speak(btn.dataset.word));
  });
}
