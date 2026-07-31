// ==========================================================================
// Listening Practice Page — Modern Dictation & Soundwave Workspace
// ==========================================================================

import { StorageService } from '../services/storage-service.js';
import { GeminiService } from '../services/gemini-service.js';
import { renderLifeTopicsSelectOptions } from '../data/life-topics-data.js';
import { LISTENING_EXERCISES } from '../data/skills-exercises-data.js';

let currentPassage = null;
let currentMode = 'dictation'; // 'dictation' | 'shadowing' | 'quiz'
let currentRate = 1.0;
let isPlaying = false;

export function renderListeningPage() {
  const container = document.getElementById('page-container');
  if (!container) return;

  container.innerHTML = `
    <div class="section-header" style="margin-bottom: 20px;">
      <div class="section-title-group">
        <span class="section-label">Audio Laboratory</span>
        <h1>Listening Mastery Studio</h1>
      </div>
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
        <select id="listening-preset-select" class="input-field" style="max-width:280px;padding:8px 12px;font-size:0.85rem;border-color:var(--color-primary);">
          <option value="">📚 Kho 250+ Bài tập Nghe (Data Bank)</option>
          ${LISTENING_EXERCISES.map(ex => `<option value="${ex.id}">🎧 ${ex.title} (${ex.level})</option>`).join('')}
        </select>
        <select id="listening-topic-select" class="input-field" style="max-width:220px;padding:8px 12px;font-size:0.85rem;">
          ${renderLifeTopicsSelectOptions('Daily Routine & Home Life')}
        </select>
        <select id="listening-level-select" class="input-field" style="max-width:130px;padding:8px 12px;font-size:0.85rem;">
          <option value="A2">A2 Elementary</option>
          <option value="B1" selected>B1 Intermediate</option>
          <option value="B2">B2 Upper-Int</option>
          <option value="C1">C1 Advanced</option>
        </select>
        <button id="btn-generate-listening" class="btn btn-primary btn-sm">
          <svg class="svg-icon" viewBox="0 0 24 24"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
          New Passage
        </button>
      </div>
    </div>

    <!-- Mode Filter Pills -->
    <div class="filter-pills" style="margin-bottom:24px;display:inline-flex;">
      <button class="filter-pill active" data-mode="dictation">Dictation Practice</button>
      <button class="filter-pill" data-mode="shadowing">Shadowing Sync</button>
      <button class="filter-pill" data-mode="quiz">Comprehension Quiz</button>
    </div>

    <!-- Main Workspace Canvas -->
    <div id="listening-workspace">
      <div class="card" style="text-align:center;padding:48px;">
        <div style="font-size:0.9rem;color:var(--text-secondary);">Loading listening passage...</div>
      </div>
    </div>
  `;

  // Bind Events
  document.getElementById('btn-generate-listening')?.addEventListener('click', loadNewPassage);
  document.getElementById('listening-preset-select')?.addEventListener('change', (e) => {
    const selectedId = e.target.value;
    if (selectedId) {
      const preset = LISTENING_EXERCISES.find(ex => ex.id === selectedId);
      if (preset) {
        stopAudio();
        currentPassage = preset;
        StorageService.saveListeningSession(currentPassage, preset.topic, preset.level);
        renderCurrentMode();
      }
    }
  });

  container.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      container.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentMode = e.target.dataset.mode;
      renderCurrentMode();
    });
  });

  const savedSession = StorageService.getListeningSession();
  if (savedSession && savedSession.passage) {
    currentPassage = savedSession.passage;
    const topicSel = document.getElementById('listening-topic-select');
    const levelSel = document.getElementById('listening-level-select');
    if (topicSel && savedSession.topic) topicSel.value = savedSession.topic;
    if (levelSel && savedSession.level) levelSel.value = savedSession.level;
    renderCurrentMode();
  } else {
    loadNewPassage();
  }
}

async function loadNewPassage() {
  const topic = document.getElementById('listening-topic-select')?.value || 'Daily Life';
  const level = document.getElementById('listening-level-select')?.value || 'B1';
  const workspace = document.getElementById('listening-workspace');

  if (workspace) {
    workspace.innerHTML = `
      <div class="card" style="text-align:center;padding:48px;">
        <div style="font-size:0.9rem;color:var(--text-secondary);">Generating passage for <strong>${topic} (${level})</strong>...</div>
      </div>
    `;
  }

  stopAudio();
  currentPassage = await GeminiService.generateListeningPassage(topic, level);
  StorageService.saveListeningSession(currentPassage, topic, level);
  renderCurrentMode();
}

function stopAudio() {
  window.speechSynthesis?.cancel();
  isPlaying = false;
}

function renderCurrentMode() {
  const workspace = document.getElementById('listening-workspace');
  if (!workspace || !currentPassage) return;

  if (currentMode === 'dictation') {
    renderDictationMode(workspace);
  } else if (currentMode === 'shadowing') {
    renderShadowingMode(workspace);
  } else if (currentMode === 'quiz') {
    renderQuizMode(workspace);
  }
}

function renderDictationMode(workspace) {
  workspace.innerHTML = `
    <div class="workspace-single">
      <!-- Audio Player Toolbar -->
      <div class="audio-player-card">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:14px;">
            <button id="btn-play-audio" class="btn btn-primary" style="width:48px;height:48px;border-radius:50%;padding:0;">
              ▶
            </button>
            <div>
              <div style="font-weight:700;font-size:1.05rem;">${currentPassage.title}</div>
              <div style="font-size:0.8rem;color:var(--text-tertiary);">${currentPassage.level} • Native Speech Speed</div>
            </div>
          </div>

          <div class="audio-visualizer" id="visualizer-bars">
            <div class="visualizer-bar"></div>
            <div class="visualizer-bar"></div>
            <div class="visualizer-bar"></div>
            <div class="visualizer-bar"></div>
            <div class="visualizer-bar"></div>
          </div>

          <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:0.8rem;color:var(--text-secondary);font-weight:600;">Speed:</span>
            <button class="btn btn-sm btn-secondary rate-btn ${currentRate === 0.75 ? 'btn-primary' : ''}" data-rate="0.75">0.75x</button>
            <button class="btn btn-sm btn-secondary rate-btn ${currentRate === 1.0 ? 'btn-primary' : ''}" data-rate="1.0">1.0x</button>
            <button class="btn btn-sm btn-secondary rate-btn ${currentRate === 1.25 ? 'btn-primary' : ''}" data-rate="1.25">1.25x</button>
          </div>
        </div>
      </div>

      <!-- Dictation Input Workspace -->
      <div class="card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
          <h3 style="font-size:1.1rem;">Write down what you hear</h3>
          <span style="font-size:0.8rem;color:var(--text-tertiary);">Listen carefully and transcribe the audio</span>
        </div>
        <textarea id="dictation-input" class="input-field" rows="5" placeholder="Type the spoken English text here..." style="resize:vertical;font-size:1rem;line-height:1.6;margin-bottom:16px;"></textarea>

        <div style="display:flex;align-items:center;justify-content:space-between;">
          <button id="btn-check-dictation" class="btn btn-primary">Check Transcription</button>
          <button id="btn-reveal-transcript" class="btn btn-secondary btn-sm">Reveal Full Transcript</button>
        </div>

        <div id="dictation-result" style="margin-top:20px;display:none;"></div>
      </div>
    </div>
  `;

  // Bind audio controls
  document.getElementById('btn-play-audio')?.addEventListener('click', toggleAudio);
  
  workspace.querySelectorAll('.rate-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      workspace.querySelectorAll('.rate-btn').forEach(b => b.classList.remove('btn-primary'));
      e.target.classList.add('btn-primary');
      currentRate = parseFloat(e.target.dataset.rate);
    });
  });

  document.getElementById('btn-check-dictation')?.addEventListener('click', checkDictation);
  document.getElementById('btn-reveal-transcript')?.addEventListener('click', () => {
    const res = document.getElementById('dictation-result');
    if (res) {
      res.style.display = 'block';
      res.innerHTML = `
        <div style="padding:16px;background:var(--bg-secondary);border-radius:var(--radius-md);border:1px solid var(--border-subtle);">
          <div style="font-size:0.78rem;font-weight:700;color:var(--color-primary);text-transform:uppercase;margin-bottom:6px;">Official Transcript</div>
          <p style="font-size:0.95rem;color:var(--text-primary);">${currentPassage.transcript}</p>
        </div>
      `;
    }
  });
}

function toggleAudio() {
  const btn = document.getElementById('btn-play-audio');
  const viz = document.getElementById('visualizer-bars');

  if (isPlaying) {
    stopAudio();
    if (btn) btn.textContent = '▶';
    viz?.classList.remove('playing');
  } else {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(currentPassage.transcript);
      utterance.rate = currentRate;
      utterance.lang = 'en-US';

      utterance.onend = () => {
        isPlaying = false;
        if (btn) btn.textContent = '▶';
        viz?.classList.remove('playing');
      };

      window.speechSynthesis.speak(utterance);
      isPlaying = true;
      if (btn) btn.textContent = '⏸';
      viz?.classList.add('playing');
    }
  }
}

function checkDictation() {
  const userText = document.getElementById('dictation-input')?.value || '';
  const resultDiv = document.getElementById('dictation-result');
  if (!resultDiv || !currentPassage) return;

  const targetWords = currentPassage.transcript.trim().split(/\s+/);
  const userWords = userText.trim().split(/\s+/);

  let correctCount = 0;
  targetWords.forEach((word, idx) => {
    if (userWords[idx] && userWords[idx].toLowerCase().replace(/[^a-z0-9]/g, '') === word.toLowerCase().replace(/[^a-z0-9]/g, '')) {
      correctCount++;
    }
  });

  const accuracy = Math.round((correctCount / targetWords.length) * 100);
  StorageService.recordSkillScore('listening', accuracy);

  resultDiv.style.display = 'block';
  resultDiv.innerHTML = `
    <div style="padding:20px;background:var(--bg-secondary);border-radius:var(--radius-lg);border:1px solid var(--border-subtle);">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
        <span style="font-weight:700;font-size:1.1rem;">Transcription Accuracy</span>
        <span class="badge ${accuracy >= 80 ? 'badge-emerald' : 'badge-amber'}" style="font-size:0.9rem;">${accuracy}% Accuracy</span>
      </div>
      <div class="progress-bar-track" style="margin-bottom:14px;">
        <div class="progress-bar-fill ${accuracy >= 80 ? 'emerald' : 'amber'}" style="width:${accuracy}%;"></div>
      </div>
      <div style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:10px;">Target Passage:</div>
      <p style="font-size:0.95rem;color:var(--text-primary);line-height:1.6;">${currentPassage.transcript}</p>
    </div>
  `;
}

function renderShadowingMode(workspace) {
  workspace.innerHTML = `
    <div class="workspace-single">
      <div class="card">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
          <div>
            <h3 style="font-size:1.1rem;">Shadowing Audio Sync</h3>
            <p style="font-size:0.85rem;color:var(--text-secondary);">Listen and repeat simultaneously to match native intonation & rhythm.</p>
          </div>
          <button id="btn-play-shadow" class="btn btn-primary">▶ Play Audio & Shadow</button>
        </div>

        <div style="padding:24px;background:var(--bg-secondary);border-radius:var(--radius-lg);border:1px solid var(--border-subtle);margin-bottom:20px;">
          <p style="font-size:1.1rem;line-height:1.8;color:var(--text-primary);">${currentPassage.transcript}</p>
        </div>

        <div style="font-size:0.85rem;color:var(--text-tertiary);">
          Tip: Speak out loud right as you hear the words. Focus on stress patterns and liaison.
        </div>
      </div>
    </div>
  `;

  document.getElementById('btn-play-shadow')?.addEventListener('click', toggleAudio);
}

function renderQuizMode(workspace) {
  if (!currentPassage.questions || currentPassage.questions.length === 0) {
    workspace.innerHTML = `<div class="card"><p>No questions available for this passage.</p></div>`;
    return;
  }

  workspace.innerHTML = `
    <div class="exercise-container">
      <div class="quiz-card">
        <div style="font-size:0.8rem;font-weight:700;color:var(--color-primary);text-transform:uppercase;margin-bottom:6px;">Comprehension Quiz</div>
        <h3 class="quiz-question-title">${currentPassage.questions[0].question}</h3>

        <div class="options-list">
          ${currentPassage.questions[0].options.map((opt, i) => `
            <button class="option-button quiz-option" data-index="${i}">
              <span class="option-index">${String.fromCharCode(65 + i)}</span>
              <span>${opt}</span>
            </button>
          `).join('')}
        </div>

        <button id="btn-submit-quiz" class="btn btn-primary" style="width:100%;">Submit Answer</button>
        <div id="quiz-feedback" style="margin-top:16px;display:none;"></div>
      </div>
    </div>
  `;

  let selectedIdx = null;
  workspace.querySelectorAll('.quiz-option').forEach(btn => {
    btn.addEventListener('click', (e) => {
      workspace.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedIdx = parseInt(btn.dataset.index);
    });
  });

  document.getElementById('btn-submit-quiz')?.addEventListener('click', () => {
    if (selectedIdx === null) return;
    const correctIdx = currentPassage.questions[0].correctAnswer;
    const isCorrect = selectedIdx === correctIdx;
    const fb = document.getElementById('quiz-feedback');

    if (fb) {
      fb.style.display = 'block';
      fb.innerHTML = `
        <div style="padding:16px;background:${isCorrect ? 'var(--color-secondary-light)' : 'var(--color-rose-light)'};border-radius:var(--radius-md);color:${isCorrect ? 'var(--color-secondary)' : 'var(--color-rose)'};font-weight:600;">
          ${isCorrect ? '✓ Correct Answer!' : '✕ Incorrect. The correct answer is ' + String.fromCharCode(65 + correctIdx)}
        </div>
      `;
    }
  });
}
