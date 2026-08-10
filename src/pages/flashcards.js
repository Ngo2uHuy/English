// ==========================================================================
// Flashcards Page — Modern Interactive 3D Card Deck
// ==========================================================================

import { GRAMMAR_TOPICS, LEVELS, getTopicById } from '../data/grammar-data.js';
import { GeminiService } from '../services/gemini-service.js';
import { StorageService } from '../services/storage-service.js';
import { IpaService } from '../services/ipa-service.js';
import { showToast } from '../components/toast.js';

let flashcards = [];
let currentIndex = 0;
let isFlipped = false;

export function renderFlashcardsPage(preselectedTopic = null) {
  const container = document.getElementById('page-container');
  if (!container) return;

  container.innerHTML = `
    <div class="section-header" style="margin-bottom: 20px;">
      <div class="section-title-group">
        <span class="section-label">Spaced Repetition</span>
        <h1>3D Flashcard Deck</h1>
      </div>
      <p class="section-subtitle">Click card or press Space to flip; use arrow keys to navigate</p>
    </div>

    <!-- Configuration Panel -->
    <div class="card" style="margin-bottom: 28px;">
      <div style="display:grid;grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));gap:16px;width:100%;">
        <div style="min-width:0;width:100%;">
          <label style="font-size:0.8rem;font-weight:700;color:var(--text-secondary);margin-bottom:6px;display:block;">Grammar Topic</label>
          <select class="input-field" id="fc-topic" style="width:100%;box-sizing:border-box;">
            <option value="">Select a topic...</option>
            ${LEVELS.map(level => `
              <optgroup label="${level.name}">
                ${GRAMMAR_TOPICS.filter(t => t.level === level.id).sort((a, b) => a.order - b.order).map(t => `
                  <option value="${t.id}" ${preselectedTopic === t.id ? 'selected' : ''}>${t.title}</option>
                `).join('')}
              </optgroup>
            `).join('')}
          </select>
        </div>
        <div>
          <label style="font-size:0.8rem;font-weight:700;color:var(--text-secondary);margin-bottom:6px;display:block;">Deck Size</label>
          <select class="input-field" id="fc-count">
            <option value="5" selected>5 cards</option>
            <option value="10">10 cards</option>
            <option value="15">15 cards</option>
          </select>
        </div>
        <div style="display:flex;align-items:flex-end;">
          <button id="btn-generate-fc" class="btn btn-primary" style="width:100%;">Generate Card Deck</button>
        </div>
      </div>
    </div>

    <!-- Deck View -->
    <div id="flashcard-deck-container">
      <div class="card" style="text-align:center;padding:48px;color:var(--text-secondary);">
        Select a grammar topic above to generate a 3D flashcard deck.
      </div>
    </div>
  `;

  document.getElementById('btn-generate-fc')?.addEventListener('click', generateDeck);

  if (preselectedTopic) {
    generateDeck();
  }
}

async function generateDeck() {
  const topicId = document.getElementById('fc-topic')?.value || GRAMMAR_TOPICS[0].id;
  const count = parseInt(document.getElementById('fc-count')?.value || '5', 10);
  const container = document.getElementById('flashcard-deck-container');

  if (container) {
    container.innerHTML = `<div class="card" style="text-align:center;padding:48px;color:var(--text-secondary);">Generating 3D flashcard deck...</div>`;
  }

  const topic = getTopicById(topicId);
  const topicTitle = topic ? topic.title : 'Grammar Topic';
  const levelName = topic ? topic.level : 'Beginner';
  flashcards = await GeminiService.generateFlashcards(topicTitle, levelName, count);
  currentIndex = 0;
  isFlipped = false;

  renderCard();
}

function renderCard() {
  const container = document.getElementById('flashcard-deck-container');
  if (!container || flashcards.length === 0) return;

  container.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const cardData = flashcards[currentIndex];

  container.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;max-width:540px;margin-left:auto;margin-right:auto;">
      <span style="font-size:0.85rem;font-weight:700;color:var(--text-secondary);">Card ${currentIndex + 1} of ${flashcards.length}</span>
      <span class="badge badge-indigo">Space / Click to Flip</span>
    </div>

    <div class="flashcard-wrapper">
      <div class="flashcard-inner ${isFlipped ? 'flipped' : ''}" id="flashcard-card">
        <!-- Front -->
        <div class="flashcard-front">
          <div style="font-size:0.75rem;font-weight:800;color:var(--color-primary);text-transform:uppercase;margin-bottom:8px;">Grammar Concept</div>
          <h3 style="font-size:1.4rem;margin-bottom:4px;color:var(--text-primary);">${cardData.front}</h3>
          <div class="ipa-text" style="font-size:0.95rem;color:#a855f7;margin-bottom:14px;font-weight:700;">${IpaService.getIPA(cardData.front)}</div>
          <span style="font-size:0.8rem;color:var(--text-tertiary);">Click to reveal answer & formula</span>
        </div>

        <!-- Back -->
        <div class="flashcard-back">
          <div style="font-size:0.75rem;font-weight:800;color:var(--color-secondary);text-transform:uppercase;margin-bottom:8px;">Explanation & Example</div>
          <p style="font-size:1.05rem;line-height:1.6;margin-bottom:12px;color:var(--text-primary);">${cardData.back}</p>
          ${cardData.example ? `
            <div style="font-size:0.88rem;color:var(--text-secondary);font-style:italic;">
              "${cardData.example}"
              <div class="ipa-subtext" style="font-size:0.8rem;color:#c084fc;font-style:normal;margin-top:2px;">${IpaService.getIPA(cardData.example)}</div>
            </div>
          ` : ''}
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-top:20px;">
      <button id="btn-prev-card" class="btn btn-secondary" ${currentIndex === 0 ? 'disabled' : ''}>← Previous</button>
      <button id="btn-flip-card" class="btn btn-primary">Flip Card 🔄</button>
      <button id="btn-next-card" class="btn btn-secondary" ${currentIndex === flashcards.length - 1 ? 'disabled' : ''}>Next →</button>
    </div>
  `;

  document.getElementById('flashcard-card')?.addEventListener('click', toggleFlip);
  document.getElementById('btn-flip-card')?.addEventListener('click', toggleFlip);

  document.getElementById('btn-prev-card')?.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      isFlipped = false;
      renderCard();
    }
  });

  document.getElementById('btn-next-card')?.addEventListener('click', () => {
    if (currentIndex < flashcards.length - 1) {
      currentIndex++;
      isFlipped = false;
      renderCard();
    }
  });
}

function toggleFlip() {
  isFlipped = !isFlipped;
  const el = document.getElementById('flashcard-card');
  if (el) el.classList.toggle('flipped', isFlipped);
}
