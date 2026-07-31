// ==========================================================================
// Reading Practice Page — Modern Active Reader Studio
// ==========================================================================

import { StorageService } from '../services/storage-service.js';
import { GeminiService } from '../services/gemini-service.js';
import { DictionaryService } from '../services/dictionary-service.js';
import { renderLifeTopicsSelectOptions } from '../data/life-topics-data.js';
import { READING_EXERCISES } from '../data/skills-exercises-data.js';

let currentArticle = null;
let readingStartTime = null;
let readingWpm = 0;

export function renderReadingPage() {
  const container = document.getElementById('page-container');
  if (!container) return;

  container.innerHTML = `
    <div class="section-header" style="margin-bottom: 20px;">
      <div class="section-title-group">
        <span class="section-label">Reading Laboratory</span>
        <h1>Active Reading Studio</h1>
      </div>
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
        <select id="reading-preset-select" class="input-field" style="max-width:280px;padding:8px 12px;font-size:0.85rem;border-color:var(--color-primary);">
          <option value="">📚 Kho 250+ Bài tập Đọc (Data Bank)</option>
          ${READING_EXERCISES.map(ex => `<option value="${ex.id}">📖 ${ex.title} (${ex.level})</option>`).join('')}
        </select>
        <select id="reading-topic-select" class="input-field" style="max-width:220px;padding:8px 12px;font-size:0.85rem;">
          ${renderLifeTopicsSelectOptions('Emotions & Psychology')}
        </select>
        <select id="reading-level-select" class="input-field" style="max-width:130px;padding:8px 12px;font-size:0.85rem;">
          <option value="B1">B1 Intermediate</option>
          <option value="B2" selected>B2 Upper-Int</option>
          <option value="C1">C1 Advanced</option>
        </select>
        <button id="btn-generate-reading" class="btn btn-primary btn-sm">New Article</button>
      </div>
    </div>

    <!-- Reading Layout Grid -->
    <div class="workspace-layout">
      <!-- Main Reader Column -->
      <div class="workspace-single">
        <div id="reading-article-card" class="reading-passage">
          <div style="text-align:center;padding:48px;color:var(--text-secondary);">
            Loading reading article...
          </div>
        </div>

        <div id="reading-quiz-card" class="card" style="display:none;"></div>
      </div>

      <!-- Sidebar Controls -->
      <div class="workspace-single">
        <!-- WPM Speedometer Card -->
        <div class="card" style="text-align:center;">
          <div style="font-size:0.8rem;font-weight:700;color:var(--color-primary);text-transform:uppercase;margin-bottom:6px;">Speedometer</div>
          <div id="wpm-display" style="font-size:2.2rem;font-weight:800;font-family:var(--font-display);color:var(--text-primary);">-- WPM</div>
          <p style="font-size:0.82rem;color:var(--text-secondary);margin-top:4px;margin-bottom:14px;">Calculates your reading pace</p>
          <button id="btn-finish-reading" class="btn btn-secondary btn-sm" style="width:100%;">Check Reading Speed</button>
        </div>

        <!-- Vocabulary Notebook -->
        <div class="card">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
            <h3 style="font-size:1rem;">Vocabulary Notebook</h3>
            <span id="saved-vocab-count" class="badge badge-cyan">0</span>
          </div>
          <div id="saved-vocab-list" style="max-height:300px;overflow-y:auto;display:flex;flex-direction:column;gap:8px;"></div>
        </div>
      </div>
    </div>

    <!-- Word Definition Modal -->
    <div id="word-modal" style="display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.6);backdrop-filter:blur(4px);z-index:999;display:none;align-items:center;justify-content:center;">
      <div class="card" style="max-width:440px;width:90%;position:relative;padding:28px;">
        <button id="btn-close-modal" style="position:absolute;top:16px;right:16px;background:none;border:none;font-size:1.4rem;cursor:pointer;color:var(--text-secondary);">&times;</button>
        <div id="modal-word-body"></div>
      </div>
    </div>
  `;

  document.getElementById('btn-generate-reading')?.addEventListener('click', loadNewArticle);
  document.getElementById('reading-preset-select')?.addEventListener('change', (e) => {
    const selectedId = e.target.value;
    if (selectedId) {
      const preset = READING_EXERCISES.find(ex => ex.id === selectedId);
      if (preset) {
        currentArticle = preset;
        StorageService.saveReadingSession(currentArticle, preset.topic, preset.level);
        renderArticleContent();
      }
    }
  });
  document.getElementById('btn-close-modal')?.addEventListener('click', () => {
    const modal = document.getElementById('word-modal');
    if (modal) modal.style.display = 'none';
  });

  const savedSession = StorageService.getReadingSession();
  if (savedSession && savedSession.article) {
    currentArticle = savedSession.article;
    const topicSel = document.getElementById('reading-topic-select');
    const levelSel = document.getElementById('reading-level-select');
    if (topicSel && savedSession.topic) topicSel.value = savedSession.topic;
    if (levelSel && savedSession.level) levelSel.value = savedSession.level;
    renderArticleContent();
  } else {
    loadNewArticle();
  }

  renderVocabNotebook();
}

async function loadNewArticle() {
  const topic = document.getElementById('reading-topic-select')?.value || 'Psychology & Habits';
  const level = document.getElementById('reading-level-select')?.value || 'B2';
  const card = document.getElementById('reading-article-card');

  if (card) {
    card.innerHTML = `<div style="text-align:center;padding:48px;color:var(--text-secondary);">Generating article for <strong>${topic} (${level})</strong>...</div>`;
  }

  currentArticle = await GeminiService.generateReadingArticle(topic, level);
  StorageService.saveReadingSession(currentArticle, topic, level);
  renderArticleContent();
}

function renderArticleContent() {
  const card = document.getElementById('reading-article-card');
  if (!card || !currentArticle) return;

  readingStartTime = Date.now();

  const wordsHtml = currentArticle.content.split(/\s+/).map(word => {
    const cleanWord = word.replace(/[^a-zA-Z]/g, '');
    return `<span class="interactive-word" data-word="${cleanWord}">${word}</span>`;
  }).join(' ');

  card.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
      <span class="badge badge-cyan">${currentArticle.level}</span>
      <span style="font-size:0.8rem;color:var(--text-tertiary);">Click any word to translate</span>
    </div>
    <h2 style="font-size:1.6rem;margin-bottom:16px;">${currentArticle.title}</h2>
    <div style="line-height:1.8;font-size:1.05rem;color:var(--text-primary);">${wordsHtml}</div>
  `;

  card.querySelectorAll('.interactive-word').forEach(span => {
    span.addEventListener('click', (e) => {
      lookupWord(e.target.dataset.word);
    });
  });

  document.getElementById('btn-finish-reading')?.addEventListener('click', calculateReadingWpm);
}

async function lookupWord(word) {
  if (!word) return;
  const modal = document.getElementById('word-modal');
  const modalBody = document.getElementById('modal-word-body');
  if (!modal || !modalBody) return;

  modal.style.display = 'flex';
  await DictionaryService.renderModalContent(modalBody, word);
  renderVocabNotebook();
}

function calculateReadingWpm() {
  if (!readingStartTime || !currentArticle) return;
  const elapsedMinutes = (Date.now() - readingStartTime) / 1000 / 60;
  const totalWords = currentArticle.content.split(/\s+/).length;
  readingWpm = Math.round(totalWords / Math.max(0.2, elapsedMinutes));

  const display = document.getElementById('wpm-display');
  if (display) display.textContent = `${readingWpm} WPM`;

  StorageService.recordSkillScore('reading', Math.min(100, Math.round(readingWpm / 2.5)));
}

function renderVocabNotebook() {
  const list = document.getElementById('saved-vocab-list');
  const countBadge = document.getElementById('saved-vocab-count');
  if (!list) return;

  const vocabs = StorageService.getVocabList();
  if (countBadge) countBadge.textContent = vocabs.length;

  if (vocabs.length === 0) {
    list.innerHTML = `<div style="font-size:0.82rem;color:var(--text-tertiary);">No words saved yet. Click words in the passage to save them.</div>`;
    return;
  }

  list.innerHTML = vocabs.map(v => `
    <div style="padding:8px 12px;background:var(--bg-secondary);border-radius:var(--radius-sm);border:1px solid var(--border-subtle);font-size:0.85rem;">
      <span style="font-weight:700;color:var(--color-primary);">${v.word}</span>
      <span style="color:var(--text-secondary);margin-left:6px;">${v.definition}</span>
    </div>
  `).join('');
}
