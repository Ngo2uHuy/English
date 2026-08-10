// ==========================================================================
// Speaking Practice Page — Modern AI Voice Studio
// ==========================================================================

import { StorageService } from '../services/storage-service.js';
import { GeminiService } from '../services/gemini-service.js';
import { SoundService } from '../services/sound-service.js';
import { IpaService } from '../services/ipa-service.js';
import { renderLifeTopicsSelectOptions } from '../data/life-topics-data.js';
import { SPEAKING_EXERCISES } from '../data/skills-exercises-data.js';

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
        <select id="speaking-preset-select" class="input-field" style="max-width:280px;padding:8px 12px;font-size:0.85rem;border-color:var(--color-primary);">
          <option value="">📚 Kho 250+ Bài tập Nói (Data Bank)</option>
          ${SPEAKING_EXERCISES.map(ex => `<option value="${ex.id}">🗣️ ${ex.title} (${ex.level})</option>`).join('')}
        </select>
        <select id="speaking-topic-select" class="input-field" style="max-width:220px;padding:8px 12px;font-size:0.85rem;">
          ${renderLifeTopicsSelectOptions('Family & Relationships', true)}
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

  document.getElementById('speaking-preset-select')?.addEventListener('change', (e) => {
    const selectedId = e.target.value;
    if (selectedId) {
      const preset = SPEAKING_EXERCISES.find(ex => ex.id === selectedId);
      if (preset) {
        currentPrompt = preset;
        syncSpeakingFilterDropdowns(preset.topic, preset.id);
        StorageService.saveSpeakingSession(currentPrompt, preset.topic);
        renderCurrentMode();
      }
    }
  });

  document.getElementById('speaking-topic-select')?.addEventListener('change', () => {
    updateSpeakingPresetDropdown();
    loadNewTopic();
  });

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
    const promptTopic = currentPrompt.topic || savedSession.topic || '';
    syncSpeakingFilterDropdowns(promptTopic, currentPrompt.id);
    renderCurrentMode();
  } else {
    updateSpeakingPresetDropdown();
    loadNewTopic();
  }
}

function updateSpeakingPresetDropdown(selectedPresetId = null) {
  const topicSel = document.getElementById('speaking-topic-select');
  const presetSel = document.getElementById('speaking-preset-select');
  if (!presetSel) return;

  const currentTopic = topicSel ? topicSel.value : '';

  const filtered = SPEAKING_EXERCISES.filter(ex => {
    return !currentTopic || ex.topic === currentTopic || ex.topic?.toLowerCase().includes(currentTopic.toLowerCase());
  });

  presetSel.innerHTML = `
    <option value="">📚 Kho Bài tập Nói (${filtered.length}/${SPEAKING_EXERCISES.length} bài)</option>
    ${filtered.map(ex => `<option value="${ex.id}">🗣️ ${ex.title} (${ex.level})</option>`).join('')}
  `;

  const targetId = selectedPresetId || (currentPrompt ? currentPrompt.id : null);
  if (targetId && filtered.some(ex => ex.id === targetId)) {
    presetSel.value = targetId;
  } else {
    presetSel.value = '';
  }
}

function syncSpeakingFilterDropdowns(topic, presetId = null) {
  const topicSel = document.getElementById('speaking-topic-select');

  if (topicSel && topic) {
    const options = Array.from(topicSel.options);
    const matchedOpt = options.find(opt => opt.value === topic || opt.value.toLowerCase().includes(topic.toLowerCase()) || topic.toLowerCase().includes(opt.value.toLowerCase()));
    if (matchedOpt) {
      topicSel.value = matchedOpt.value;
    }
  }

  updateSpeakingPresetDropdown(presetId);
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
  const topic = document.getElementById('speaking-topic-select')?.value || 'Family & Relationships';
  const workspace = document.getElementById('speaking-workspace');

  if (workspace) {
    workspace.innerHTML = `
      <div class="card" style="text-align:center;padding:48px;">
        <div style="font-size:0.9rem;color:var(--text-secondary);">Generating speaking topic for <strong>${topic}</strong>...</div>
      </div>
    `;
  }

  const presetSel = document.getElementById('speaking-preset-select');
  if (presetSel) presetSel.value = '';

  currentPrompt = await GeminiService.generateSpeakingPrompt(topic);
  StorageService.saveSpeakingSession(currentPrompt, topic);
  renderCurrentMode();
}

function renderCurrentMode() {
  const workspace = document.getElementById('speaking-workspace');
  if (!workspace || !currentPrompt) return;

  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelector('.main-content')?.scrollTo({ top: 0, behavior: 'smooth' });

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
    const text = currentPrompt ? (currentPrompt.title || currentPrompt.topic) : '';
    if (text) SoundService.speakText(text, { rate: 0.95 });
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

let conversationHistory = [];
let isAiThinking = false;

function renderRoleplayMode(workspace) {
  const currentTopic = currentPrompt ? (currentPrompt.topic || currentPrompt.title) : 'Daily Conversation';
  
  if (conversationHistory.length === 0) {
    conversationHistory = [
      {
        role: 'ai',
        text: `Hello! I'm your AI English Tutor. Today we are practicing conversation about "${currentTopic}". How are you feeling today, and what would you like to discuss regarding this topic?`,
        translation: `Xin chào! Tôi là Trợ lý AI luyện nói Tiếng Anh của bạn. Hôm nay chúng ta sẽ luyện tập giao tiếp về chủ đề "${currentTopic}". Bạn cảm thấy thế nào hôm nay và bạn muốn trao đổi điều gì về chủ đề này?`,
        suggestedReplies: [
          `I'm excited to practice speaking about ${currentTopic}!`,
          `Could you ask me a question about ${currentTopic} to get started?`,
          `I'd like to share my personal experience regarding ${currentTopic}.`
        ],
        feedback: null
      }
    ];
  }

  workspace.innerHTML = `
    <div class="workspace-single">
      <!-- Header Banner -->
      <div class="card" style="margin-bottom:16px;background:linear-gradient(135deg, rgba(99,102,241,0.1), rgba(168,85,247,0.05));border-color:var(--color-primary-light);">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
          <div>
            <div style="font-size:0.75rem;font-weight:700;color:var(--color-primary);text-transform:uppercase;letter-spacing:0.5px;">🤖 AI Conversation Laboratory</div>
            <h3 style="font-size:1.2rem;margin-top:2px;margin-bottom:4px;">Training Giao Tiếp AI — ${currentTopic}</h3>
            <p style="font-size:0.85rem;color:var(--text-secondary);margin:0;">Luyện nói trực tiếp bằng Giọng nói (Microphone) hoặc Gõ phím. AI sẽ phản hồi bằng Giọng đọc Chuẩn + Nhận xét ngữ pháp tức thì.</p>
          </div>
          <button id="btn-reset-conversation" class="btn btn-secondary btn-sm" style="gap:6px;">
            🔄 Đổi Kịch bản / Reset Session
          </button>
        </div>
      </div>

      <!-- Main Chat Stream -->
      <div class="card" style="padding:20px;display:flex;flex-direction:column;gap:16px;max-height:520px;overflow-y:auto;" id="chat-messages-container">
        ${renderChatMessagesHTML()}
      </div>

      <!-- Quick Suggested Reply Chips -->
      <div id="suggested-chips-container" style="margin-top:12px;display:flex;flex-wrap:wrap;gap:8px;">
        ${renderSuggestedChipsHTML()}
      </div>

      <!-- Input Controls Box -->
      <div class="card" style="margin-top:16px;padding:16px;">
        <div style="display:flex;gap:10px;align-items:center;">
          <button id="btn-mic-talk" class="btn btn-primary" style="padding:12px 20px;flex-shrink:0;">
            🎙️ Nói vào Mic
          </button>
          <input type="text" id="input-roleplay-msg" class="input-field" placeholder="Nhập câu trả lời bằng tiếng Anh hoặc bấm Nói vào Mic..." style="flex:1;padding:12px 16px;font-size:0.95rem;">
          <button id="btn-send-roleplay" class="btn btn-primary" style="padding:12px 20px;flex-shrink:0;">
            🚀 Gửi AI
          </button>
        </div>
        <div id="roleplay-status-hint" style="font-size:0.8rem;color:var(--text-secondary);margin-top:8px;display:flex;justify-content:space-between;align-items:center;">
          <span>💡 Mẹo: Bấm nút 🔊 ở mỗi tin nhắn AI để nghe phát âm chuẩn Native Voice.</span>
          <span id="mic-live-indicator" style="color:var(--color-rose);font-weight:600;display:none;">🔴 Đang thu âm giọng nói...</span>
        </div>
      </div>
    </div>
  `;

  bindRoleplayEvents(workspace);
  scrollToBottomChat();
}

function renderChatMessagesHTML() {
  return conversationHistory.map((msg, idx) => {
    if (msg.role === 'ai') {
      return `
        <div style="display:flex;gap:12px;align-items:flex-start;">
          <div style="width:38px;height:38px;border-radius:50%;background:var(--color-primary);color:#fff;display:flex;align-items:center;justify-content:center;font-size:1.2rem;flex-shrink:0;">
            🤖
          </div>
          <div style="flex:1;background:var(--bg-secondary);padding:14px 18px;border-radius:16px;border:1px solid var(--border-subtle);box-shadow:var(--shadow-xs);">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
              <span style="font-weight:700;font-size:0.85rem;color:var(--color-primary);">AI Tutor Partner</span>
              <button class="btn btn-ghost btn-sm btn-speak-ai" data-text="${encodeURIComponent(msg.text)}" style="padding:2px 8px;font-size:0.8rem;">
                🔊 Read Aloud
              </button>
            </div>
            <div style="font-size:1rem;line-height:1.55;color:var(--text-primary);margin-bottom:8px;">${msg.text}</div>
            ${msg.translation ? `<div style="font-size:0.85rem;color:var(--text-secondary);font-style:italic;border-top:1px dashed var(--border-subtle);padding-top:6px;">🇻🇳 ${msg.translation}</div>` : ''}
          </div>
        </div>
      `;
    } else {
      return `
        <div style="display:flex;gap:12px;align-items:flex-start;justify-content:flex-end;">
          <div style="max-width:80%;background:var(--color-primary);color:#fff;padding:14px 18px;border-radius:16px;box-shadow:var(--shadow-xs);">
            <div style="font-size:0.75rem;font-weight:600;opacity:0.9;margin-bottom:4px;text-align:right;">You (Learner)</div>
            <div style="font-size:0.98rem;line-height:1.5;word-break:break-word;">${msg.text}</div>
            ${msg.feedback && msg.feedback.hasCorrection ? `
              <div style="margin-top:10px;padding:8px 12px;background:rgba(0,0,0,0.2);border-radius:8px;font-size:0.82rem;color:#fef08a;">
                ⚠️ <strong>Gợi ý sửa lỗi:</strong> ${msg.feedback.correctedSentence}<br>
                💡 <em>${msg.feedback.tip || ''}</em>
              </div>
            ` : ''}
          </div>
          <div style="width:38px;height:38px;border-radius:50%;background:var(--color-emerald);color:#fff;display:flex;align-items:center;justify-content:center;font-size:1rem;flex-shrink:0;">
            👤
          </div>
        </div>
      `;
    }
  }).join('');
}

function renderSuggestedChipsHTML() {
  const lastAiMsg = [...conversationHistory].reverse().find(m => m.role === 'ai');
  if (!lastAiMsg || !lastAiMsg.suggestedReplies) return '';

  return `
    <div style="font-size:0.8rem;color:var(--text-secondary);width:100%;margin-bottom:2px;">💬 Gợi ý nhanh câu trả lời tiếp theo:</div>
    ${lastAiMsg.suggestedReplies.map(reply => `
      <button class="badge badge-indigo btn-suggested-chip" style="cursor:pointer;padding:6px 12px;font-size:0.82rem;border:1px solid var(--border-subtle);transition:all 0.2s;" data-reply="${encodeURIComponent(reply)}">
        👉 "${reply}"
      </button>
    `).join('')}
  `;
}

function bindRoleplayEvents(workspace) {
  const inputEl = document.getElementById('input-roleplay-msg');
  const btnSend = document.getElementById('btn-send-roleplay');
  const btnMic = document.getElementById('btn-mic-talk');
  const btnReset = document.getElementById('btn-reset-conversation');
  const micIndicator = document.getElementById('mic-live-indicator');

  btnReset?.addEventListener('click', () => {
    conversationHistory = [];
    renderRoleplayMode(workspace);
  });

  btnSend?.addEventListener('click', () => sendUserRoleplayMessage());
  inputEl?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendUserRoleplayMessage();
  });

  // Read Aloud AI messages
  workspace.querySelectorAll('.btn-speak-ai').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const text = decodeURIComponent(e.currentTarget.dataset.text);
      SoundService.speakText(text, { rate: 0.95 });
    });
  });

  // Suggested reply chips
  workspace.querySelectorAll('.btn-suggested-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      const reply = decodeURIComponent(e.currentTarget.dataset.reply);
      if (inputEl) inputEl.value = reply;
      sendUserRoleplayMessage();
    });
  });

  // Voice Mic recording
  btnMic?.addEventListener('click', () => {
    if (!recognition) {
      alert('Trình duyệt của bạn chưa hỗ trợ nhận diện giọng nói Speech Recognition API.');
      return;
    }

    if (isRecording) {
      recognition.stop();
      isRecording = false;
      if (btnMic) btnMic.innerHTML = '🎙️ Nói vào Mic';
      if (micIndicator) micIndicator.style.display = 'none';
    } else {
      if (micIndicator) micIndicator.style.display = 'inline';
      if (btnMic) btnMic.innerHTML = '⏹ Đang nghe... (Bấm để gửi)';

      recognition.onresult = (e) => {
        let text = '';
        for (let i = e.resultIndex; i < e.results.length; i++) {
          text += e.results[i][0].transcript;
        }
        if (inputEl) inputEl.value = text;
      };

      recognition.onend = () => {
        isRecording = false;
        if (btnMic) btnMic.innerHTML = '🎙️ Nói vào Mic';
        if (micIndicator) micIndicator.style.display = 'none';
      };

      recognition.start();
      isRecording = true;
    }
  });
}

async function sendUserRoleplayMessage() {
  const inputEl = document.getElementById('input-roleplay-msg');
  const userText = inputEl?.value?.trim();
  if (!userText || isAiThinking) return;

  isAiThinking = true;
  if (inputEl) inputEl.value = '';

  const currentTopic = currentPrompt ? (currentPrompt.topic || currentPrompt.title) : 'General Practice';

  // Push user turn
  conversationHistory.push({
    role: 'user',
    text: userText,
    feedback: null
  });

  const workspace = document.getElementById('speaking-workspace');
  if (workspace) renderRoleplayMode(workspace);

  // Call Gemini AI for response
  try {
    const aiResponse = await GeminiService.generateAiRoleplayTurn(currentTopic, conversationHistory, userText);

    // Attach feedback to last user message if any
    if (aiResponse.feedback && aiResponse.feedback.hasCorrection) {
      conversationHistory[conversationHistory.length - 1].feedback = aiResponse.feedback;
    }

    // Push AI reply
    conversationHistory.push({
      role: 'ai',
      text: aiResponse.replyText,
      translation: aiResponse.vietnameseMeaning,
      suggestedReplies: aiResponse.suggestedReplies,
      feedback: null
    });

    // Auto speak AI response
    if (aiResponse.replyText) {
      SoundService.speakText(aiResponse.replyText, { rate: 0.95 });
    }
  } catch (err) {
    conversationHistory.push({
      role: 'ai',
      text: `Thank you for sharing that! Practice makes perfect in ${currentTopic}. What else would you like to add?`,
      translation: `Cảm ơn bạn đã chia sẻ! Luyện tập tạo nên sự hoàn hảo về ${currentTopic}. Bạn có muốn bổ sung thêm điều gì không?`,
      suggestedReplies: [
        "I'd like to share another thought.",
        "Could we move on to another topic?",
        "Thank you for the guidance!"
      ],
      feedback: null
    });
  } finally {
    isAiThinking = false;
    if (workspace) renderRoleplayMode(workspace);
  }
}

function scrollToBottomChat() {
  const container = document.getElementById('chat-messages-container');
  if (container) {
    container.scrollTop = container.scrollHeight;
  }
}

