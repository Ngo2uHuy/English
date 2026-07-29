// ==========================================================================
// Speaking Practice Page — Modern AI Voice Studio
// ==========================================================================

import { StorageService } from '../services/storage-service.js';
import { GeminiService } from '../services/gemini-service.js';
import { IpaService } from '../services/ipa-service.js';
import { renderLifeTopicsSelectOptions } from '../data/life-topics-data.js';

let currentPrompt = null;
let currentMode = 'pronunciation'; // 'pronunciation' | 'cuecard' | 'roleplay'
let recognition = null;
let isRecording = false;

export function renderSpeakingPage() {
  const container = document.getElementById('page-container');
  if (!container) return;

  container.innerHTML = `
    <div class="section-header" style="margin-bottom: 20px;">
      <div class="section-title-group">
        <span class="section-label">Speech Laboratory</span>
        <h1>Speaking Studio</h1>
      </div>
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
        <select id="speaking-topic-select" class="input-field" style="max-width:280px;padding:8px 12px;font-size:0.85rem;">
          ${renderLifeTopicsSelectOptions('Family & Relationships')}
        </select>
        <button id="btn-generate-speaking" class="btn btn-primary btn-sm">New Prompt</button>
      </div>
    </div>

    <!-- Filter Mode Pills -->
    <div class="filter-pills" style="margin-bottom:24px;display:inline-flex;">
      <button class="filter-pill active" data-mode="pronunciation">Pronunciation & Rhythm</button>
      <button class="filter-pill" data-mode="cuecard">IELTS Cue Card</button>
      <button class="filter-pill" data-mode="roleplay">AI Oral Practice</button>
    </div>

    <div id="speaking-workspace">
      <div class="card" style="text-align:center;padding:48px;">
        <div style="font-size:0.9rem;color:var(--text-secondary);">Preparing speaking prompt...</div>
      </div>
    </div>
  `;

  document.getElementById('btn-generate-speaking')?.addEventListener('click', loadNewTopic);

  container.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
      container.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentMode = e.target.dataset.mode;
      renderCurrentMode();
    });
  });

  initSpeechRecognition();

  const savedSession = StorageService.getSpeakingSession();
  if (savedSession && savedSession.prompt) {
    currentPrompt = savedSession.prompt;
    const topicSel = document.getElementById('speaking-topic-select');
    if (topicSel && savedSession.topic) topicSel.value = savedSession.topic;
    renderCurrentMode();
  } else {
    loadNewTopic();
  }
}

function initSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
  }
}

async function loadNewTopic() {
  const topic = document.getElementById('speaking-topic-select')?.value || 'Self Introduction';
  const workspace = document.getElementById('speaking-workspace');

  if (workspace) {
    workspace.innerHTML = `
      <div class="card" style="text-align:center;padding:48px;">
        <div style="font-size:0.9rem;color:var(--text-secondary);">Generating speaking topic for <strong>${topic}</strong>...</div>
      </div>
    `;
  }

  currentPrompt = await GeminiService.generateSpeakingPrompt(topic);
  StorageService.saveSpeakingSession(currentPrompt, topic);
  renderCurrentMode();
}

function renderCurrentMode() {
  const workspace = document.getElementById('speaking-workspace');
  if (!workspace || !currentPrompt) return;

  if (currentMode === 'pronunciation') {
    renderPronunciationMode(workspace);
  } else if (currentMode === 'cuecard') {
    renderCueCardMode(workspace);
  } else if (currentMode === 'roleplay') {
    renderRoleplayMode(workspace);
  }
}

function renderPronunciationMode(workspace) {
  const targetText = currentPrompt.title || currentPrompt.topic;
  workspace.innerHTML = `
    <div class="workspace-single">
      <div class="card">
        <div style="font-size:0.8rem;font-weight:700;color:var(--color-primary);text-transform:uppercase;margin-bottom:6px;">Target Sentence</div>
        <h3 style="font-size:1.25rem;line-height:1.6;margin-bottom:6px;color:var(--text-primary);">${targetText}</h3>
        <div class="ipa-badge" style="font-size:0.95rem;padding:4px 12px;margin-bottom:20px;display:inline-block;">🗣 Phên âm IPA: ${IpaService.getIPA(targetText)}</div>

        <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px;">
          <button id="btn-record-mic" class="btn btn-primary" style="padding:12px 24px;">
            🎙️ Start Recording
          </button>
          <button id="btn-listen-native" class="btn btn-secondary">
            🔊 Native Model Audio
          </button>
        </div>

        <div id="recording-transcript" style="padding:16px;background:var(--bg-secondary);border-radius:var(--radius-md);border:1px solid var(--border-subtle);min-height:72px;font-size:0.95rem;color:var(--text-secondary);">
          Click "Start Recording" and speak the sentence out loud...
        </div>

        <div id="speech-analysis" style="margin-top:20px;display:none;"></div>
      </div>
    </div>
  `;

  document.getElementById('btn-record-mic')?.addEventListener('click', toggleRecording);
  document.getElementById('btn-listen-native')?.addEventListener('click', () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const text = currentPrompt.title || currentPrompt.topic;
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = 'en-US';
      window.speechSynthesis.speak(utt);
    }
  });
}

function toggleRecording() {
  const btn = document.getElementById('btn-record-mic');
  const tx = document.getElementById('recording-transcript');

  if (isRecording) {
    recognition?.stop();
    isRecording = false;
    if (btn) btn.innerHTML = '🎙️ Start Recording';
    analyzeSpeechResult();
  } else {
    if (!recognition) {
      alert('Speech Recognition API is not supported in your browser.');
      return;
    }
    tx.textContent = 'Listening... Speak now...';
    recognition.onresult = (e) => {
      let currentTx = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        currentTx += e.results[i][0].transcript;
      }
      if (tx) tx.textContent = currentTx;
    };
    recognition.start();
    isRecording = true;
    if (btn) btn.innerHTML = '⏹ Stop & Evaluate';
  }
}

function analyzeSpeechResult() {
  const spokenText = document.getElementById('recording-transcript')?.textContent || '';
  const targetText = currentPrompt.title || currentPrompt.topic;
  const analysisDiv = document.getElementById('speech-analysis');

  if (!analysisDiv) return;

  const targetWords = targetText.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(/\s+/);
  const spokenWords = spokenText.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(/\s+/);

  let matchCount = 0;
  targetWords.forEach(w => {
    if (spokenWords.includes(w)) matchCount++;
  });

  const score = Math.min(100, Math.round((matchCount / Math.max(1, targetWords.length)) * 100));
  StorageService.recordSkillScore('speaking', score);

  analysisDiv.style.display = 'block';
  analysisDiv.innerHTML = `
    <div style="padding:20px;background:var(--bg-secondary);border-radius:var(--radius-lg);border:1px solid var(--border-subtle);">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
        <span style="font-weight:700;">Fluency & Pronunciation Score</span>
        <span class="badge ${score >= 75 ? 'badge-emerald' : 'badge-amber'}" style="font-size:0.9rem;">${score}% Accuracy</span>
      </div>
      <div class="progress-bar-track">
        <div class="progress-bar-fill ${score >= 75 ? 'emerald' : 'amber'}" style="width:${score}%;"></div>
      </div>
    </div>
  `;
}

function renderCueCardMode(workspace) {
  workspace.innerHTML = `
    <div class="card">
      <div class="badge badge-rose" style="margin-bottom:12px;">IELTS Speaking Part 2</div>
      <h3 style="font-size:1.3rem;margin-bottom:12px;">${currentPrompt.title || currentPrompt.topic}</h3>
      <div style="padding:16px;background:var(--bg-secondary);border-radius:var(--radius-md);margin-bottom:20px;">
        <p style="font-weight:600;margin-bottom:8px;">You should say:</p>
        <div style="padding-left:10px;color:var(--text-secondary);font-size:0.92rem;white-space:pre-line;">
          ${currentPrompt.cueCard || 'Discuss the topic.'}
        </div>
      </div>
      <button id="btn-record-mic" class="btn btn-primary">🎙️ Start 2-Minute Speech</button>
    </div>
  `;
}

function renderRoleplayMode(workspace) {
  workspace.innerHTML = `
    <div class="card">
      <h3 style="font-size:1.15rem;margin-bottom:12px;">AI Oral Scenario: ${currentPrompt.topic}</h3>
      <p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:20px;">Practice natural conversation by responding to real-time prompt scenarios.</p>
      <button class="btn btn-primary">Start Interactive Session</button>
    </div>
  `;
}
