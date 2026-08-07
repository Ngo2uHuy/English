// ==========================================================================
// AI Chat Component — Floating Sticky AI Tutor Assistant Window
// ==========================================================================

import { GeminiService } from '../services/gemini-service.js';
import { StorageService } from '../services/storage-service.js';

let chatHistory = [];

export function initAiChat() {
  if (document.getElementById('ai-chat-trigger')) return;

  const app = document.getElementById('app') || document.body;

  // 1. Create Floating Trigger Button
  const triggerBtn = document.createElement('button');
  triggerBtn.id = 'ai-chat-trigger';
  triggerBtn.className = 'ai-chat-trigger-btn';
  triggerBtn.title = 'Hỏi AI Ngữ Pháp & Tiếng Anh';
  triggerBtn.innerHTML = `
    <div class="ai-trigger-icon">🤖</div>
    <span class="ai-trigger-label">Hỏi AI</span>
    <span class="ai-trigger-pulse"></span>
  `;

  // 2. Create Floating Chat Window
  const chatWindow = document.createElement('div');
  chatWindow.id = 'ai-chat-window';
  chatWindow.className = 'ai-chat-window';
  
  const provider = StorageService.getProvider() || 'gemini';

  chatWindow.innerHTML = `
    <div class="ai-chat-header">
      <div class="ai-header-info">
        <div class="ai-avatar">🤖</div>
        <div>
          <div class="ai-header-title">Aesthete AI Tutor</div>
          <div class="ai-header-subtitle">
            <span class="ai-status-dot"></span> Online (${provider.toUpperCase()})
          </div>
        </div>
      </div>
      <div class="ai-header-actions">
        <button class="icon-btn btn-sm" id="ai-chat-clear" title="Xóa lịch sử chat">🗑️</button>
        <button class="icon-btn btn-sm" id="ai-chat-close" title="Đóng cửa sổ">✕</button>
      </div>
    </div>

    <div class="ai-chat-messages" id="ai-chat-messages">
      <div class="ai-msg ai-msg-system">
        <div class="ai-msg-avatar">🤖</div>
        <div class="ai-msg-content">
          <p>Xin chào! Mình là <strong>Aesthete AI Tutor</strong>. 🌟</p>
          <p>Bạn có câu hỏi nào về <strong>ngữ pháp, từ vựng, phát âm IPA</strong> hoặc cần trợ giúp giải thích bài tập không?</p>
          <div class="ai-quick-suggestions">
            <button class="ai-chip-btn">Phân biệt Present Perfect & Past Simple</button>
            <button class="ai-chip-btn">Cách dùng Mệnh đề quan hệ (Which/That)</button>
            <button class="ai-chip-btn">Mẹo đạt điểm cao Listening TOEIC</button>
          </div>
        </div>
      </div>
    </div>

    <form class="ai-chat-input-bar" id="ai-chat-form">
      <input 
        type="text" 
        id="ai-chat-input" 
        class="input-field ai-input" 
        placeholder="Nhập thắc mắc tiếng Anh của bạn..." 
        autocomplete="off"
      />
      <button type="submit" class="btn btn-primary ai-send-btn" id="ai-chat-send" title="Gửi câu hỏi">
        <svg class="svg-icon" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
      </button>
    </form>
  `;

  app.appendChild(triggerBtn);
  app.appendChild(chatWindow);

  // Event Listeners
  triggerBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('open');
    if (chatWindow.classList.contains('open')) {
      document.getElementById('ai-chat-input')?.focus();
    }
  });

  document.getElementById('ai-chat-close')?.addEventListener('click', () => {
    chatWindow.classList.remove('open');
  });

  document.getElementById('ai-chat-clear')?.addEventListener('click', () => {
    chatHistory = [];
    const msgContainer = document.getElementById('ai-chat-messages');
    if (msgContainer) {
      msgContainer.innerHTML = `
        <div class="ai-msg ai-msg-system">
          <div class="ai-msg-avatar">🤖</div>
          <div class="ai-msg-content">
            <p>Đã làm sạch cuộc trò chuyện! Hãy bắt đầu chủ đề mới nhé. 😊</p>
          </div>
        </div>
      `;
    }
  });

  // Quick Suggestion Chips Click
  chatWindow.addEventListener('click', (e) => {
    if (e.target.classList.contains('ai-chip-btn')) {
      const promptText = e.target.textContent;
      const input = document.getElementById('ai-chat-input');
      if (input) {
        input.value = promptText;
        document.getElementById('ai-chat-form')?.requestSubmit();
      }
    }
  });

  // Form Submission
  const form = document.getElementById('ai-chat-form');
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('ai-chat-input');
    const userText = input?.value.trim();
    if (!userText) return;

    input.value = '';
    appendUserMessage(userText);

    // Show Typing Indicator
    const typingElem = appendTypingIndicator();

    try {
      const response = await GeminiService.askAiTutor(userText, chatHistory);
      typingElem.remove();
      appendAiResponse(response);
      chatHistory.push({ role: 'user', content: userText });
      chatHistory.push({ role: 'model', content: response.reply });
    } catch (err) {
      typingElem.remove();
      appendAiResponse({
        reply: `⚠️ Không thể gửi yêu cầu: ${err.message || 'Lỗi mạng'}. Vui lòng thử lại.`,
        suggestedFollowups: []
      });
    }
  });
}

function appendUserMessage(text) {
  const container = document.getElementById('ai-chat-messages');
  if (!container) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = 'ai-msg ai-msg-user';
  msgDiv.innerHTML = `
    <div class="ai-msg-content">${escapeHtml(text)}</div>
  `;
  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
}

function appendAiResponse(res) {
  const container = document.getElementById('ai-chat-messages');
  if (!container) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = 'ai-msg ai-msg-bot';

  let formattedReply = formatMarkdown(res.reply || '');

  let chipsHtml = '';
  if (Array.isArray(res.suggestedFollowups) && res.suggestedFollowups.length > 0) {
    chipsHtml = `
      <div class="ai-quick-suggestions mt-sm">
        ${res.suggestedFollowups.map(f => `<button class="ai-chip-btn">${escapeHtml(f)}</button>`).join('')}
      </div>
    `;
  }

  msgDiv.innerHTML = `
    <div class="ai-msg-avatar">🤖</div>
    <div class="ai-msg-content">
      <div class="ai-text-body">${formattedReply}</div>
      ${chipsHtml}
    </div>
  `;

  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
}

function appendTypingIndicator() {
  const container = document.getElementById('ai-chat-messages');
  const typingDiv = document.createElement('div');
  typingDiv.className = 'ai-msg ai-msg-bot ai-typing-indicator';
  typingDiv.innerHTML = `
    <div class="ai-msg-avatar">🤖</div>
    <div class="ai-msg-content">
      <div class="typing-dots">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
  container.appendChild(typingDiv);
  container.scrollTop = container.scrollHeight;
  return typingDiv;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function formatMarkdown(text) {
  if (!text) return '';
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code>$1</code>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/\n/g, '<br/>')
    .replace(/^/, '<p>') + '</p>';
}
