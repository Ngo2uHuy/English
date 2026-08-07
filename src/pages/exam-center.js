// ==========================================================================
// Exam Center Page — Authentic TOEIC & IELTS Mock Exam Room & Simulator
// ==========================================================================

import { ExamEngineService } from '../services/exam-engine-service.js';
import { StorageService } from '../services/storage-service.js';
import { SoundService } from '../services/sound-service.js';

let activeExamSession = null;
let timerInterval = null;
let timeRemainingSeconds = 0;
let userAnswers = {};
let flaggedQuestions = new Set();
let currentSectionIndex = 0;

export function renderExamCenterPage() {
  const container = document.getElementById('page-container');
  if (!container) return;

  if (activeExamSession) {
    renderActiveExamRoom(container);
  } else {
    renderExamHub(container);
  }
}

// ---------------------------------------------------------------------------
// 1. EXAM HUB VIEW — Selection Cards & History
// ---------------------------------------------------------------------------
function renderExamHub(container) {
  const history = ExamEngineService.getExamHistory();
  const { toeic, ielts } = ExamEngineService.getAvailableExams();

  container.innerHTML = `
    <div class="section-header" style="margin-bottom: 24px;">
      <div class="section-title-group">
        <span class="section-label">Standardized Assessment Laboratory</span>
        <h1>Trung Tâm Thi Thử TOEIC & IELTS</h1>
      </div>
    </div>

    <!-- Exam Hero Banner -->
    <div class="card" style="margin-bottom:28px;background:linear-gradient(135deg, rgba(79,70,229,0.12), rgba(147,51,234,0.06));border-color:var(--color-primary-light);padding:28px;">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px;">
        <div style="max-width:650px;">
          <div style="display:inline-block;padding:4px 10px;background:var(--color-primary);color:#fff;font-size:0.75rem;font-weight:700;border-radius:20px;margin-bottom:8px;text-transform:uppercase;letter-spacing:0.5px;">Official Exam Simulator</div>
          <h2 style="font-size:1.5rem;margin-bottom:8px;">Hệ Thống Phân Tích & Thi Thử Chuẩn Quốc Tế</h2>
          <p style="font-size:0.92rem;color:var(--text-secondary);line-height:1.6;margin:0;">Luyện thi mô phỏng 100% dạng đề thật TOEIC (7 Parts) và IELTS (4 Skills). Đồng hồ đếm ngược áp lực thời gian thực, bảng quy đổi điểm TOEIC 10-990 & IELTS Band 1.0-9.0 chuẩn tổ chức IIG & British Council.</p>
        </div>
        <div style="text-align:right;">
          <div style="font-size:2rem;font-weight:800;color:var(--color-primary);">${history.length}</div>
          <div style="font-size:0.8rem;color:var(--text-secondary);">Bài thi đã hoàn thành</div>
        </div>
      </div>
    </div>

    <!-- Exam Category Tabs -->
    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:24px;margin-bottom:32px;">
      
      <!-- TOEIC Card -->
      <div class="card" style="display:flex;flex-direction:column;justify-content:space-between;border-top:4px solid #3b82f6;">
        <div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
            <span class="badge badge-indigo" style="font-size:0.85rem;">📘 TOEIC Listening & Reading</span>
            <span style="font-size:0.8rem;color:var(--text-secondary);">IIG Format</span>
          </div>
          <h3 style="font-size:1.25rem;margin-bottom:8px;">Đề Thi Thử TOEIC Full 7 Parts</h3>
          <p style="font-size:0.88rem;color:var(--text-secondary);line-height:1.5;margin-bottom:16px;">Gồm đầy đủ Part 1 (Hình ảnh), Part 2 (Hỏi đáp), Part 3 (Hội thoại), Part 4 (Bài nói), Part 5 (Điền câu), Part 6 (Điền đoạn) & Part 7 (Đọc hiểu single/double).</p>
          <div style="display:flex;gap:12px;font-size:0.8rem;color:var(--text-secondary);margin-bottom:16px;">
            <span>⏱️ 45 - 120 Phút</span>
            <span>📊 Thang điểm 10 - 990</span>
          </div>
        </div>
        <div class="flex-col gap-sm">
          <label class="form-label" for="select-toeic-paper">Chọn Bộ Đề TOEIC (Kho 20 Đề):</label>
          <select id="select-toeic-paper" class="input-field">
            ${toeic.map((paper, idx) => `
              <option value="${paper.id}">${idx + 1}. ${paper.title} (${paper.timeLimitMinutes}p)</option>
            `).join('')}
          </select>
          <button class="btn btn-primary" id="btn-start-toeic-selected" style="width:100%;">
            🚀 Bắt Đầu Làm Đề TOEIC Đã Chọn
          </button>
        </div>
      </div>

      <!-- IELTS Card -->
      <div class="card" style="display:flex;flex-direction:column;justify-content:space-between;border-top:4px solid #ec4899;">
        <div>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
            <span class="badge badge-rose" style="font-size:0.85rem;">📕 IELTS Academic & General</span>
            <span style="font-size:0.8rem;color:var(--text-secondary);">BC / IDP Format</span>
          </div>
          <h3 style="font-size:1.25rem;margin-bottom:8px;">Đề Thi Thử IELTS Full 4 Kỹ Năng</h3>
          <p style="font-size:0.88rem;color:var(--text-secondary);line-height:1.5;margin-bottom:16px;">Listening Sec 1-4, Reading Passage 1-3 (True/False/Not Given, Headings), Writing Task 1 & 2 kèm bài mẫu Band 8+ và Speaking Cue Card.</p>
          <div style="display:flex;gap:12px;font-size:0.8rem;color:var(--text-secondary);margin-bottom:16px;">
            <span>⏱️ 165 Phút</span>
            <span>🏆 Thang điểm Band 1.0 - 9.0</span>
          </div>
        </div>
        <div class="flex-col gap-sm">
          <label class="form-label" for="select-ielts-paper">Chọn Bộ Đề IELTS (Kho Đề Thi):</label>
          <select id="select-ielts-paper" class="input-field">
            ${ielts.map((paper, idx) => `
              <option value="${paper.id}">${idx + 1}. ${paper.title} (${paper.timeLimitMinutes}p)</option>
            `).join('')}
          </select>
          <button class="btn btn-primary" id="btn-start-ielts-selected" style="width:100%;background:var(--color-rose);">
            🚀 Bắt Đầu Làm Đề IELTS Đã Chọn
          </button>
        </div>
      </div>

    </div>

    <!-- Past Exam History Table -->
    <div class="card">
      <h3 style="font-size:1.15rem;margin-bottom:16px;">📜 Lịch Sử Thi Thử & Kết Quả Đã Lưu</h3>
      ${history.length === 0 ? `
        <div style="text-align:center;padding:32px;color:var(--text-secondary);">
          Bạn chưa làm bài thi thử nào. Hãy bấm "Bắt Đầu Làm Đề" phía trên để trải nghiệm không gian thi thật!
        </div>
      ` : `
        <div style="overflow-x:auto;">
          <table style="width:100%;border-collapse:collapse;font-size:0.9rem;">
            <thead>
              <tr style="border-bottom:2px solid var(--border-subtle);text-align:left;color:var(--text-secondary);">
                <th style="padding:10px;">Ngày Thi</th>
                <th style="padding:10px;">Tên Đề Thi</th>
                <th style="padding:10px;">Loại Đề</th>
                <th style="padding:10px;">Điểm Số / Band</th>
                <th style="padding:10px;">Trình Độ CEFR</th>
              </tr>
            </thead>
            <tbody>
              ${history.map(h => `
                <tr style="border-bottom:1px solid var(--border-subtle);">
                  <td style="padding:12px 10px;">${new Date(h.timestamp).toLocaleDateString()} ${new Date(h.timestamp).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</td>
                  <td style="padding:12px 10px;font-weight:600;">${h.title}</td>
                  <td style="padding:12px 10px;"><span class="badge ${h.type === 'toeic' ? 'badge-indigo' : 'badge-rose'}">${h.type.toUpperCase()}</span></td>
                  <td style="padding:12px 10px;font-weight:700;color:var(--color-primary);">${h.scoreDisplay}</td>
                  <td style="padding:12px 10px;"><span class="badge badge-emerald">${h.cefr}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `}
    </div>
  `;

  // Bind Start Exam Buttons
  document.getElementById('btn-start-toeic-selected')?.addEventListener('click', () => {
    const selectedId = document.getElementById('select-toeic-paper')?.value;
    if (selectedId) startExamSession(selectedId);
  });

  document.getElementById('btn-start-ielts-selected')?.addEventListener('click', () => {
    const selectedId = document.getElementById('select-ielts-paper')?.value;
    if (selectedId) startExamSession(selectedId);
  });

  container.querySelectorAll('.btn-start-exam').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const examId = e.currentTarget.dataset.examId;
      startExamSession(examId);
    });
  });
}

// ---------------------------------------------------------------------------
// 2. EXAM SESSION INITIALIZATION & TIMER
// ---------------------------------------------------------------------------
function startExamSession(examId) {
  const match = ExamEngineService.getExamById(examId);
  if (!match) return;

  activeExamSession = match;
  userAnswers = {};
  flaggedQuestions = new Set();
  currentSectionIndex = 0;
  timeRemainingSeconds = match.paper.timeLimitMinutes * 60;

  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeRemainingSeconds--;
    updateTimerDisplay();
    if (timeRemainingSeconds <= 0) {
      clearInterval(timerInterval);
      alert('⏰ Đã hết thời gian làm bài! Hệ thống đang tự động chấm điểm bài làm của bạn.');
      submitAndEvaluateExam();
    }
  }, 1000);

  renderExamCenterPage();
}

function updateTimerDisplay() {
  const timerEl = document.getElementById('exam-live-timer');
  if (!timerEl) return;

  const mins = Math.floor(timeRemainingSeconds / 60);
  const secs = timeRemainingSeconds % 60;
  timerEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  
  if (timeRemainingSeconds < 300) {
    timerEl.style.color = 'var(--color-rose)';
    timerEl.style.fontWeight = '800';
  }
}

// ---------------------------------------------------------------------------
// 3. ACTIVE EXAM ROOM SIMULATOR
// ---------------------------------------------------------------------------
function renderActiveExamRoom(container) {
  const paper = activeExamSession.paper;
  const isToeic = activeExamSession.type === 'toeic';

  container.innerHTML = `
    <!-- Top Fixed Exam Header Bar -->
    <div style="background:var(--bg-card);border:1px solid var(--border-subtle);border-radius:var(--radius-lg);padding:14px 20px;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;box-shadow:var(--shadow-sm);">
      <div>
        <div style="font-size:0.75rem;font-weight:700;color:var(--color-primary);text-transform:uppercase;">Official Exam Room</div>
        <h2 style="font-size:1.15rem;margin:2px 0 0 0;">${paper.title}</h2>
      </div>

      <div style="display:flex;align-items:center;gap:20px;">
        <div style="text-align:center;background:var(--bg-secondary);padding:6px 16px;border-radius:var(--radius-md);border:1px solid var(--border-subtle);">
          <div style="font-size:0.7rem;color:var(--text-secondary);text-transform:uppercase;">Thời gian còn lại</div>
          <div id="exam-live-timer" style="font-size:1.25rem;font-family:monospace;font-weight:700;color:var(--color-primary);">--:--</div>
        </div>

        <button id="btn-submit-exam" class="btn btn-emerald" style="padding:10px 20px;">
          ✅ Nộp Bài Thi & Chấm Điểm
        </button>
      </div>
    </div>

    <!-- Exam Content Grid -->
    <div style="display:grid;grid-template-columns: 1fr 300px;gap:20px;align-items:start;">
      
      <!-- Main Question & Content Workspace -->
      <div id="exam-questions-workspace">
        ${isToeic ? renderToeicWorkspaceHTML(paper) : renderIeltsWorkspaceHTML(paper)}
      </div>

      <!-- Right Question Navigation Palette -->
      <div class="card" style="position:sticky;top:20px;">
        <h4 style="font-size:0.95rem;margin-bottom:12px;">📌 Bảng Danh Sách Câu Hỏi</h4>
        <div style="display:flex;gap:8px;font-size:0.75rem;margin-bottom:14px;color:var(--text-secondary);">
          <span>🟢 Đã trả lời</span>
          <span>⚪ Chưa trả lời</span>
          <span>🚩 Đánh dấu</span>
        </div>
        <div id="question-palette-grid" style="display:grid;grid-template-columns:repeat(5, 1fr);gap:8px;">
          ${renderPaletteGridHTML(paper, isToeic)}
        </div>
      </div>

    </div>
  `;

  bindExamRoomEvents(container);
  updateTimerDisplay();
}

function renderToeicWorkspaceHTML(paper) {
  const listeningParts = paper.listeningSection?.parts || [];
  const readingParts = paper.readingSection?.parts || [];

  return `
    <div class="filter-pills" style="margin-bottom:16px;">
      <button class="filter-pill ${currentSectionIndex === 0 ? 'active' : ''}" data-section-idx="0">🎧 Listening Section (${paper.listeningSection.totalQuestions}Q)</button>
      <button class="filter-pill ${currentSectionIndex === 1 ? 'active' : ''}" data-section-idx="1">📖 Reading Section (${paper.readingSection.totalQuestions}Q)</button>
    </div>

    <div class="card" style="padding:24px;">
      ${currentSectionIndex === 0 ? renderToeicListeningPartsHTML(listeningParts) : renderToeicReadingPartsHTML(readingParts)}
    </div>
  `;
}

function renderToeicListeningPartsHTML(parts) {
  return parts.map(p => `
    <div style="margin-bottom:32px;">
      <div style="padding:10px 14px;background:var(--bg-secondary);border-radius:var(--radius-md);margin-bottom:16px;border-left:4px solid var(--color-primary);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
        <div>
          <h4 style="font-size:1.05rem;margin:0 0 4px 0;color:var(--color-primary);">${p.name}</h4>
          <p style="font-size:0.85rem;color:var(--text-secondary);margin:0;">${p.instruction}</p>
        </div>
        ${p.transcript ? `
          <button class="btn btn-primary btn-sm btn-play-exam-audio" data-text="${encodeURIComponent(p.transcript)}" style="padding:8px 16px;font-weight:700;">
            ▶ Phát Âm Bài Nghe (${p.name})
          </button>
        ` : ''}
      </div>

      ${p.transcript ? `
        <div style="padding:14px;background:var(--bg-secondary);border-radius:var(--radius-md);margin-bottom:16px;font-size:0.9rem;line-height:1.6;border:1px solid var(--border-subtle);">
          <strong>🎧 Audio Script:</strong><br>${p.transcript.replace(/\n/g, '<br>')}
        </div>
      ` : ''}

      ${p.questions.map(q => `
        <div style="margin-bottom:20px;padding-bottom:16px;border-bottom:1px dashed var(--border-subtle);" id="q-card-${q.id}">
          ${q.imageDescription ? `<div style="padding:8px 12px;background:var(--bg-tertiary);border-radius:6px;font-size:0.85rem;margin-bottom:10px;font-style:italic;">📷 ${q.imageDescription}</div>` : ''}
          ${q.audioText ? `
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;flex-wrap:wrap;">
              <span style="font-weight:600;">🔊 Audio Question: "${q.audioText}"</span>
              <button class="btn btn-secondary btn-sm btn-play-exam-audio" data-text="${encodeURIComponent(q.audioText)}" style="padding:4px 12px;font-size:0.8rem;border-radius:20px;">
                🔊 Nghe Câu Hỏi
              </button>
            </div>
          ` : ''}
          ${q.question ? `<div style="font-weight:600;margin-bottom:8px;">${q.question}</div>` : ''}

          <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px;">
            ${q.options.map(opt => {
              const isChecked = userAnswers[q.id] === opt;
              return `
                <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:var(--bg-secondary);border-radius:var(--radius-sm);cursor:pointer;border:1px solid ${isChecked ? 'var(--color-primary)' : 'var(--border-subtle)'};">
                  <input type="radio" name="opt-${q.id}" value="${opt}" ${isChecked ? 'checked' : ''} class="exam-radio-input" data-qid="${q.id}">
                  <span style="font-size:0.9rem;">${opt}</span>
                </label>
              `;
            }).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

function renderToeicReadingPartsHTML(parts) {
  return parts.map(p => `
    <div style="margin-bottom:32px;">
      <div style="padding:10px 14px;background:var(--bg-secondary);border-radius:var(--radius-md);margin-bottom:16px;border-left:4px solid #3b82f6;">
        <h4 style="font-size:1.05rem;margin:0 0 4px 0;color:#3b82f6;">${p.name}</h4>
        <p style="font-size:0.85rem;color:var(--text-secondary);margin:0;">${p.instruction}</p>
      </div>

      ${p.passage ? `
        <div style="padding:18px;background:var(--bg-secondary);border-radius:var(--radius-md);margin-bottom:20px;font-size:0.92rem;line-height:1.65;white-space:pre-line;border:1px solid var(--border-subtle);font-family:serif;">
          ${p.passage}
        </div>
      ` : ''}

      ${p.questions.map(q => `
        <div style="margin-bottom:20px;padding-bottom:16px;border-bottom:1px dashed var(--border-subtle);" id="q-card-${q.id}">
          ${q.sentence ? `<div style="font-weight:600;margin-bottom:8px;">${q.sentence}</div>` : ''}
          ${q.question ? `<div style="font-weight:600;margin-bottom:8px;">${q.question}</div>` : ''}

          <div style="display:flex;flex-direction:column;gap:8px;margin-top:8px;">
            ${q.options.map(opt => {
              const isChecked = userAnswers[q.id] === opt;
              return `
                <label style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:var(--bg-secondary);border-radius:var(--radius-sm);cursor:pointer;border:1px solid ${isChecked ? 'var(--color-primary)' : 'var(--border-subtle)'};">
                  <input type="radio" name="opt-${q.id}" value="${opt}" ${isChecked ? 'checked' : ''} class="exam-radio-input" data-qid="${q.id}">
                  <span style="font-size:0.9rem;">${opt}</span>
                </label>
              `;
            }).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

function renderIeltsWorkspaceHTML(paper) {
  return `
    <div class="filter-pills" style="margin-bottom:16px;">
      <button class="filter-pill ${currentSectionIndex === 0 ? 'active' : ''}" data-section-idx="0">🎧 Listening</button>
      <button class="filter-pill ${currentSectionIndex === 1 ? 'active' : ''}" data-section-idx="1">📖 Reading Dual View</button>
      <button class="filter-pill ${currentSectionIndex === 2 ? 'active' : ''}" data-section-idx="2">✍️ Writing Tasks</button>
      <button class="filter-pill ${currentSectionIndex === 3 ? 'active' : ''}" data-section-idx="3">🗣️ Speaking Interview</button>
    </div>

    <div class="card" style="padding:24px;">
      ${currentSectionIndex === 0 ? renderIeltsListeningHTML(paper.listeningSection) : ''}
      ${currentSectionIndex === 1 ? renderIeltsReadingHTML(paper.readingSection) : ''}
      ${currentSectionIndex === 2 ? renderIeltsWritingHTML(paper.writingSection) : ''}
      ${currentSectionIndex === 3 ? renderIeltsSpeakingHTML(paper.speakingSection) : ''}
    </div>
  `;
}

function renderIeltsListeningHTML(sec) {
  return sec.sections.map(s => `
    <div style="margin-bottom:28px;">
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:10px;">
        <div>
          <h4 style="font-size:1.1rem;color:var(--color-rose);margin:0 0 4px 0;">${s.name}</h4>
          <p style="font-size:0.85rem;color:var(--text-secondary);margin:0;">Context: ${s.context}</p>
        </div>
        ${s.transcript ? `
          <button class="btn btn-primary btn-sm btn-play-exam-audio" data-text="${encodeURIComponent(s.transcript)}" style="background:var(--color-rose);padding:8px 16px;font-weight:700;">
            ▶ Phát Âm Bài Nghe (${s.name})
          </button>
        ` : ''}
      </div>
      
      <div style="padding:14px;background:var(--bg-secondary);border-radius:var(--radius-md);margin-bottom:16px;font-size:0.88rem;line-height:1.6;border:1px solid var(--border-subtle);">
        <strong>🎧 Audio Transcript:</strong><br>${s.transcript.replace(/\n/g, '<br>')}
      </div>

      ${s.questions.map(q => `
        <div style="margin-bottom:16px;" id="q-card-${q.id}">
          <div style="font-weight:600;margin-bottom:8px;">${q.question}</div>
          <div style="display:flex;flex-direction:column;gap:6px;">
            ${q.options.map(opt => `
              <label style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:var(--bg-secondary);border-radius:6px;cursor:pointer;">
                <input type="radio" name="opt-${q.id}" value="${opt}" ${userAnswers[q.id] === opt ? 'checked' : ''} class="exam-radio-input" data-qid="${q.id}">
                <span style="font-size:0.9rem;">${opt}</span>
              </label>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `).join('');
}

function renderIeltsReadingHTML(sec) {
  return sec.passages.map(p => `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;" id="ielts-split-reader">
      <!-- Left Passage Column -->
      <div style="padding:16px;background:var(--bg-secondary);border-radius:var(--radius-md);max-height:550px;overflow-y:auto;font-size:0.9rem;line-height:1.65;white-space:pre-line;border:1px solid var(--border-subtle);font-family:serif;">
        <h3 style="font-size:1.1rem;margin-bottom:10px;font-family:sans-serif;">${p.title}</h3>
        ${p.passageText}
      </div>

      <!-- Right Questions Column -->
      <div style="max-height:550px;overflow-y:auto;padding-right:8px;">
        <h4 style="font-size:1rem;margin-bottom:12px;">Reading Questions (True/False/Not Given)</h4>
        ${p.questions.map(q => `
          <div style="margin-bottom:16px;padding:12px;background:var(--bg-secondary);border-radius:8px;border:1px solid var(--border-subtle);" id="q-card-${q.id}">
            <div style="font-weight:600;font-size:0.88rem;margin-bottom:8px;">${q.question}</div>
            <div style="display:flex;gap:12px;">
              ${q.options.map(opt => `
                <label style="display:flex;align-items:center;gap:6px;font-size:0.82rem;cursor:pointer;">
                  <input type="radio" name="opt-${q.id}" value="${opt}" ${userAnswers[q.id] === opt ? 'checked' : ''} class="exam-radio-input" data-qid="${q.id}">
                  ${opt}
                </label>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderIeltsWritingHTML(sec) {
  return sec.tasks.map(t => `
    <div style="margin-bottom:32px;">
      <span class="badge badge-rose" style="margin-bottom:8px;">${t.type}</span>
      <h4 style="font-size:1.1rem;margin-bottom:8px;">${t.title}</h4>
      <p style="font-size:0.9rem;color:var(--text-secondary);white-space:pre-line;margin-bottom:12px;">${t.prompt}</p>

      <textarea id="writing-input-${t.taskNumber}" class="input-field" style="width:100%;height:160px;padding:12px;font-size:0.95rem;margin-bottom:10px;" placeholder="Write your response here (Minimum ${t.minWords} words)..."></textarea>
      
      <details style="margin-top:8px;">
        <summary style="cursor:pointer;font-size:0.85rem;color:var(--color-primary);font-weight:600;">💡 Xem Bài Viết Mẫu Band 8.0+</summary>
        <div style="padding:14px;background:var(--bg-secondary);border-radius:8px;margin-top:8px;font-size:0.88rem;line-height:1.6;white-space:pre-line;">
          ${t.modelEssayBand8}
        </div>
      </details>
    </div>
  `).join('');
}

function renderIeltsSpeakingHTML(sec) {
  return sec.parts.map(p => `
    <div style="margin-bottom:24px;">
      <h4 style="font-size:1.05rem;color:var(--color-rose);margin-bottom:8px;">${p.title}</h4>
      ${p.questions ? `
        <ul style="padding-left:20px;font-size:0.9rem;color:var(--text-secondary);">
          ${p.questions.map(q => `<li>${q}</li>`).join('')}
        </ul>
      ` : ''}
      ${p.cueCard ? `
        <div style="padding:14px;background:var(--bg-secondary);border-radius:8px;font-size:0.9rem;white-space:pre-line;">
          ${p.cueCard}
        </div>
      ` : ''}
    </div>
  `).join('');
}

function renderPaletteGridHTML(paper, isToeic) {
  const allQIds = [];

  if (isToeic) {
    paper.listeningSection.parts.forEach(p => p.questions.forEach(q => allQIds.push(q.id)));
    paper.readingSection.parts.forEach(p => p.questions.forEach(q => allQIds.push(q.id)));
  } else {
    paper.listeningSection.sections.forEach(s => s.questions.forEach(q => allQIds.push(q.id)));
    paper.readingSection.passages.forEach(p => p.questions.forEach(q => allQIds.push(q.id)));
  }

  return allQIds.map((qid, idx) => {
    const isAnswered = !!userAnswers[qid];
    const isFlagged = flaggedQuestions.has(qid);
    return `
      <button class="btn btn-sm palette-btn" style="padding:6px;font-size:0.75rem;background:${isAnswered ? 'var(--color-emerald)' : isFlagged ? 'var(--color-amber)' : 'var(--bg-secondary)'};color:${isAnswered || isFlagged ? '#fff' : 'var(--text-primary)'};border:1px solid var(--border-subtle);" data-qid="${qid}">
        ${idx + 1}
      </button>
    `;
  }).join('');
}

function bindExamRoomEvents(container) {
  // Exam Audio Play Buttons
  container.querySelectorAll('.btn-play-exam-audio').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const rawText = decodeURIComponent(e.currentTarget.dataset.text || '');
      if (!rawText) return;

      if (btn.classList.contains('playing')) {
        SoundService.stopSpeech();
        btn.classList.remove('playing');
        btn.innerHTML = btn.dataset.origHtml || '▶ Phát Âm Bài Nghe';
      } else {
        // Stop any other currently playing exam audio
        container.querySelectorAll('.btn-play-exam-audio').forEach(b => {
          if (b.classList.contains('playing')) {
            b.classList.remove('playing');
            b.innerHTML = b.dataset.origHtml || '▶ Phát Âm Bài Nghe';
          }
        });

        btn.dataset.origHtml = btn.innerHTML;
        btn.classList.add('playing');
        btn.innerHTML = '⏸ Tạm Dừng';

        SoundService.speakText(rawText, {
          rate: 0.95,
          onStart: () => {
            btn.classList.add('playing');
            btn.innerHTML = '⏸ Tạm Dừng';
          },
          onEnd: () => {
            btn.classList.remove('playing');
            btn.innerHTML = btn.dataset.origHtml || '▶ Phát Âm Bài Nghe';
          },
          onError: () => {
            btn.classList.remove('playing');
            btn.innerHTML = btn.dataset.origHtml || '▶ Phát Âm Bài Nghe';
          }
        });
      }
    });
  });

  // Section filter pill click
  container.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      currentSectionIndex = parseInt(e.currentTarget.dataset.sectionIdx, 10);
      renderExamCenterPage();
    });
  });

  // Radio option selection
  container.querySelectorAll('.exam-radio-input').forEach(input => {
    input.addEventListener('change', (e) => {
      const qid = e.currentTarget.dataset.qid;
      userAnswers[qid] = e.currentTarget.value;
      renderExamCenterPage();
    });
  });

  // Submit Exam button
  document.getElementById('btn-submit-exam')?.addEventListener('click', () => {
    if (confirm('Bạn có chắc chắn muốn nộp bài thi và nhận kết quả chấm điểm?')) {
      if (timerInterval) clearInterval(timerInterval);
      submitAndEvaluateExam();
    }
  });
}

// ---------------------------------------------------------------------------
// 4. SCORE EVALUATION & RESULT DISPLAY
// ---------------------------------------------------------------------------
function submitAndEvaluateExam() {
  const paper = activeExamSession.paper;
  const isToeic = activeExamSession.type === 'toeic';

  let totalQuestions = 0;
  let correctCount = 0;
  let listeningCorrect = 0;
  let readingCorrect = 0;

  if (isToeic) {
    paper.listeningSection.parts.forEach(p => {
      p.questions.forEach(q => {
        totalQuestions++;
        if (userAnswers[q.id] === q.answer) {
          correctCount++;
          listeningCorrect++;
        }
      });
    });

    paper.readingSection.parts.forEach(p => {
      p.questions.forEach(q => {
        totalQuestions++;
        if (userAnswers[q.id] === q.answer) {
          correctCount++;
          readingCorrect++;
        }
      });
    });

    const scaled = ExamEngineService.calculateToeicScore(listeningCorrect, readingCorrect, paper.listeningSection.totalQuestions, paper.readingSection.totalQuestions);

    const result = {
      title: paper.title,
      type: 'toeic',
      scoreDisplay: `${scaled.totalScore} / 990`,
      cefr: scaled.proficiencyCEFR,
      details: scaled
    };

    ExamEngineService.saveExamResult(result);
    renderToeicResultView(result, paper);
  } else {
    paper.listeningSection.sections.forEach(s => {
      s.questions.forEach(q => {
        totalQuestions++;
        if (userAnswers[q.id] === q.answer) correctCount++;
      });
    });
    paper.readingSection.passages.forEach(p => {
      p.questions.forEach(q => {
        totalQuestions++;
        if (userAnswers[q.id] === q.answer) correctCount++;
      });
    });

    const ieltsEval = ExamEngineService.calculateIeltsBand(correctCount, totalQuestions);

    const result = {
      title: paper.title,
      type: 'ielts',
      scoreDisplay: `Band ${ieltsEval.band}`,
      cefr: ieltsEval.CEFR,
      details: ieltsEval
    };

    ExamEngineService.saveExamResult(result);
    renderIeltsResultView(result, paper);
  }

  activeExamSession = null;
}

function renderToeicResultView(result, paper) {
  const container = document.getElementById('page-container');
  if (!container) return;

  container.innerHTML = `
    <div class="card" style="text-align:center;padding:36px;margin-bottom:24px;">
      <div style="font-size:0.8rem;font-weight:700;color:var(--color-primary);text-transform:uppercase;">Official Result Certificate</div>
      <h2 style="font-size:1.8rem;margin:8px 0;">Điểm Thi Thử TOEIC: <span style="color:var(--color-primary);">${result.scoreDisplay}</span></h2>
      <div class="badge badge-emerald" style="font-size:1rem;padding:6px 16px;margin-bottom:16px;">Trình độ CEFR: ${result.cefr} — ${result.details.levelLabel}</div>

      <div style="display:flex;justify-content:center;gap:24px;margin-top:20px;">
        <div style="padding:16px 28px;background:var(--bg-secondary);border-radius:var(--radius-md);border:1px solid var(--border-subtle);">
          <div style="font-size:0.8rem;color:var(--text-secondary);">Listening Score</div>
          <div style="font-size:1.5rem;font-weight:800;color:#3b82f6;">${result.details.listeningScaled} / 495</div>
        </div>
        <div style="padding:16px 28px;background:var(--bg-secondary);border-radius:var(--radius-md);border:1px solid var(--border-subtle);">
          <div style="font-size:0.8rem;color:var(--text-secondary);">Reading Score</div>
          <div style="font-size:1.5rem;font-weight:800;color:#8b5cf6;">${result.details.readingScaled} / 495</div>
        </div>
      </div>

      <button id="btn-back-to-hub" class="btn btn-primary" style="margin-top:24px;">
        🏠 Trở Về Danh Sách Đề Thi
      </button>
    </div>
  `;

  document.getElementById('btn-back-to-hub')?.addEventListener('click', () => {
    renderExamCenterPage();
  });
}

function renderIeltsResultView(result, paper) {
  const container = document.getElementById('page-container');
  if (!container) return;

  container.innerHTML = `
    <div class="card" style="text-align:center;padding:36px;margin-bottom:24px;">
      <div style="font-size:0.8rem;font-weight:700;color:var(--color-rose);text-transform:uppercase;">Official IELTS Band Descriptor</div>
      <h2 style="font-size:1.8rem;margin:8px 0;">Kết Quả Thi Thử IELTS: <span style="color:var(--color-rose);">${result.scoreDisplay}</span></h2>
      <div class="badge badge-emerald" style="font-size:1rem;padding:6px 16px;margin-bottom:16px;">Trình độ CEFR: ${result.cefr}</div>

      <button id="btn-back-to-hub" class="btn btn-primary" style="margin-top:24px;">
        🏠 Trở Về Danh Sách Đề Thi
      </button>
    </div>
  `;

  document.getElementById('btn-back-to-hub')?.addEventListener('click', () => {
    renderExamCenterPage();
  });
}
