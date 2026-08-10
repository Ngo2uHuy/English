// ========================================
// Exercises Page
// ========================================

import { GRAMMAR_TOPICS, LEVELS, EXERCISE_TYPES, getTopicById } from '../data/grammar-data.js';
import { GeminiService, getExerciseKey } from '../services/gemini-service.js';
import { StorageService } from '../services/storage-service.js';
import { renderExercises, checkAnswers } from '../components/exercise-renderer.js';
import { showToast } from '../components/toast.js';

let currentExercises = [];
let currentType = '';

export function renderExercisesPage(preselectedTopic = null) {
  const container = document.getElementById('page-container');
  if (!container) return;

  const apiKey = StorageService.getApiKey();

  container.innerHTML = `
    <div class="page-header">
      <h1 class="page-title">Practice Exercises</h1>
      <p class="page-description">Generate AI-powered grammar exercises tailored to your level. Choose a topic and exercise type to get started.</p>
    </div>

    ${!apiKey ? `
      <div class="card mb-lg" style="border-left:3px solid var(--color-warning);">
        <div style="display:flex;align-items:center;gap:12px;">
          <span style="font-size:1.5rem;">⚠️</span>
          <div>
            <strong>Free API Key Required</strong>
            <p style="color:var(--text-secondary);margin-top:4px;font-size:0.9rem;">
              You need to add a free API key in <a href="#/settings" style="color:var(--color-primary);font-weight:600;">Settings</a> to generate exercises. Supports 100% Free Keys from Google Gemini, Groq Cloud, OpenRouter & Mistral AI.
            </p>
          </div>
        </div>
      </div>
    ` : ''}

    <!-- Config Form -->
    <div class="card mb-lg">
      <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(min(100%, 200px), 1fr));gap:16px;width:100%;">
        <div class="form-group" style="margin-bottom:0;min-width:0;">
          <label class="form-label">Grammar Topic</label>
          <select class="form-select" id="exercise-topic">
            <option value="">Select a topic...</option>
            ${LEVELS.map(level => `
              <optgroup label="${level.icon} ${level.name} (${level.subtitle})">
                ${GRAMMAR_TOPICS.filter(t => t.level === level.id).sort((a, b) => a.order - b.order).map(t => `
                  <option value="${t.id}" ${preselectedTopic === t.id ? 'selected' : ''}>${t.icon} ${t.title}</option>
                `).join('')}
              </optgroup>
            `).join('')}
          </select>
        </div>
        <div class="form-group" style="margin-bottom:0;min-width:0;">
          <label class="form-label">Exercise Type</label>
          <select class="form-select" id="exercise-type">
            ${EXERCISE_TYPES.map(t => `
              <option value="${t.id}">${t.icon} ${t.name}</option>
            `).join('')}
          </select>
        </div>
        <div class="form-group" style="margin-bottom:0;min-width:0;">
          <label class="form-label">Number of Questions</label>
          <select class="form-select" id="exercise-count">
            <option value="3" selected>3 questions</option>
            <option value="5">5 questions</option>
            <option value="10">10 questions</option>
            <option value="20">20 questions</option>
            <option value="50">50 questions</option>
            <option value="100">100 questions</option>
          </select>
        </div>
      </div>
      <div style="margin-top:16px;display:flex;gap:12px;">
        <button class="btn btn-primary" id="generate-btn" ${!apiKey ? 'disabled' : ''}>
          🤖 Generate Exercises
        </button>
      </div>
    </div>

    <!-- Exercise Area -->
    <div id="exercise-area"></div>
  `;

  // Load active session
  const activeSession = StorageService.getActiveSession();
  if (activeSession && activeSession.exercises && activeSession.exercises.length > 0) {
    // Only restore session if we aren't overriding it with a preselected topic
    if (!preselectedTopic || preselectedTopic === activeSession.topicId) {
      const topicSelect = document.getElementById('exercise-topic');
      if (topicSelect) topicSelect.value = activeSession.topicId;
      const typeSelect = document.getElementById('exercise-type');
      if (typeSelect) typeSelect.value = activeSession.type;
      const countSelect = document.getElementById('exercise-count');
      if (countSelect) countSelect.value = activeSession.count || '3';

      currentExercises = activeSession.exercises;
      currentType = activeSession.type;

      setTimeout(() => {
        renderExercisesArea(activeSession.topicId, activeSession.type, currentExercises, activeSession.checkedResult);
      }, 50);
    }
  }

  // Generate button
  document.getElementById('generate-btn')?.addEventListener('click', () => {
    // Clear session when explicitly generating a new one
    StorageService.clearActiveSession();
    generateExercises();
  });
}

async function generateExercises() {
  const topicId = document.getElementById('exercise-topic')?.value;
  const type = document.getElementById('exercise-type')?.value;
  const count = parseInt(document.getElementById('exercise-count')?.value || '3');
  const area = document.getElementById('exercise-area');

  if (!topicId) {
    showToast('Please select a grammar topic.', 'warning');
    return;
  }

  const topic = getTopicById(topicId);
  if (!topic) return;

  const levelInfo = LEVELS.find(l => l.id === topic.level);

  // Show loading
  area.innerHTML = `
    <div class="loading-spinner">
      <div class="spinner"></div>
      <div class="loading-text">Generating ${count} ${EXERCISE_TYPES.find(t => t.id === type)?.name || ''} exercises about "${topic.title}"...</div>
      <div style="font-size:0.78rem;color:var(--text-tertiary);">This may take a few seconds</div>
    </div>
  `;

  const generateBtn = document.getElementById('generate-btn');
  if (generateBtn) {
    generateBtn.disabled = true;
    generateBtn.innerHTML = '<div class="spinner spinner-sm" style="display:inline-block;"></div> Generating...';
  }

  try {
    const previousQuestions = StorageService.getGeneratedQuestions(topicId, type);
    currentExercises = await GeminiService.generateExercise(topic.title, type, levelInfo?.name || 'Intermediate', count, previousQuestions);
    currentType = type;

    if (!currentExercises || currentExercises.length === 0) {
      throw new Error('No new exercises were generated. Please try again.');
    }

    // Save generated question keys to prevent future duplication
    const newQuestionKeys = currentExercises.map(ex => getExerciseKey(ex)).filter(Boolean);
    StorageService.saveGeneratedQuestions(topicId, type, newQuestionKeys);

    // Save active session
    StorageService.saveActiveSession({ topicId, type, count, exercises: currentExercises });

    renderExercisesArea(topicId, type, currentExercises);
    showToast(`Generated ${currentExercises.length} exercises!`, 'success');

  } catch (error) {
    area.innerHTML = `
      <div class="card" style="border-left:3px solid var(--color-error);">
        <div style="display:flex;align-items:flex-start;gap:12px;">
          <span style="font-size:1.5rem;">❌</span>
          <div>
            <strong>Error generating exercises</strong>
            <p style="color:var(--text-secondary);margin-top:4px;font-size:0.9rem;">${error.message}</p>
            <button class="btn btn-secondary btn-sm mt-md" onclick="document.getElementById('generate-btn').click()">Try Again</button>
          </div>
        </div>
      </div>
    `;
    showToast(error.message, 'error');
  } finally {
    if (generateBtn) {
      generateBtn.disabled = false;
      generateBtn.innerHTML = '🤖 Generate Exercises';
    }
  }
}

function spawnConfetti() {
  const colors = ['#7c5dfa', '#3b82f6', '#22d3a0', '#f59e0b', '#ef4444', '#ec4899'];
  for (let i = 0; i < 40; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.top = `${50 + Math.random() * 30}vh`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDuration = `${1 + Math.random() * 1.5}s`;
    piece.style.animationDelay = `${Math.random() * 0.5}s`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 3000);
  }
}

function renderExercisesArea(topicId, type, exercises, checkedResult = null) {
  const area = document.getElementById('exercise-area');
  const topic = getTopicById(topicId);
  if (!topic || !area) return;

  area.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const levelInfo = LEVELS.find(l => l.id === topic.level);

  area.innerHTML = `
    <div class="section-header">
      <div>
        <h2 class="section-title">${topic.icon} ${topic.title}</h2>
        <p class="section-subtitle">${EXERCISE_TYPES.find(t => t.id === type)?.name} • ${exercises.length} questions</p>
      </div>
      <span class="badge badge-${levelInfo?.color}">${levelInfo?.name}</span>
    </div>
    <div id="exercises-container"></div>
    <div style="display:flex;gap:12px;margin-top:24px;flex-wrap:wrap;" id="exercise-actions">
      <button class="btn btn-primary btn-lg" id="check-answers-btn">✅ Check Answers</button>
      <button class="btn btn-secondary" id="new-exercises-btn">🔄 Generate New</button>
    </div>
    <div id="score-display" style="margin-top:16px;"></div>
  `;

  const exercisesContainer = document.getElementById('exercises-container');
  renderExercises(exercises, type, exercisesContainer);

  const checkAnswersBtn = document.getElementById('check-answers-btn');
  
  // If previously checked, disable the button and show the results
  if (checkedResult) {
    if (checkAnswersBtn) {
      checkAnswersBtn.disabled = true;
      checkAnswersBtn.textContent = '✅ Answers Checked';
    }
    showScore(checkedResult, topicId, type, topic, false); // Don't re-save progress
  }

  checkAnswersBtn?.addEventListener('click', () => {
    const result = checkAnswers(exercises, type);
    
    // Save that we checked these answers
    const activeSession = StorageService.getActiveSession();
    if (activeSession) {
      activeSession.checkedResult = result;
      StorageService.saveActiveSession(activeSession);
    }
    
    showScore(result, topicId, type, topic, true);
    
    if (checkAnswersBtn) {
      checkAnswersBtn.disabled = true;
      checkAnswersBtn.textContent = '✅ Answers Checked';
    }
  });

  document.getElementById('new-exercises-btn')?.addEventListener('click', () => {
    StorageService.clearActiveSession();
    generateExercises();
  });
}

function showScore(result, topicId, type, topic, saveProgress = true) {
  const correct = typeof result === 'object' ? (result.correct ?? 0) : 0;
  const total = typeof result === 'object' ? (result.total ?? 1) : 1;
  const pct = typeof result === 'object' ? (result.pct ?? Math.round((correct / (total || 1)) * 100)) : (typeof result === 'number' ? result : 0);
  
  const scoreEl = document.getElementById('score-display');
  
  if (!scoreEl) return;
  
  scoreEl.innerHTML = `
    <div class="card" style="text-align:center;border-color:${pct >= 70 ? 'var(--color-secondary)' : 'var(--color-accent)'};">
      <div class="stat-value" style="font-size:3rem; font-weight:800; font-family:var(--font-display); color:var(--text-primary);">${pct}%</div>
      <div class="stat-label" style="font-size:1.05rem; font-weight:700; color:var(--text-secondary);">${correct} out of ${total} correct</div>
      <p style="color:var(--text-secondary);margin-top:8px;">
        ${pct === 100 ? '🎉 Perfect score! Outstanding!' : pct >= 80 ? '👏 Great job! Keep it up!' : pct >= 60 ? '👍 Good effort! Review the explanations below.' : '📚 Keep practicing! Check the explanations to learn more.'}
      </p>
    </div>
  `;

  if (saveProgress) {
    if (pct === 100) spawnConfetti();

    StorageService.updateTopicProgress(topicId, {
      exercisesDone: (StorageService.getTopicProgress(topicId).exercisesDone || 0) + total,
      score: pct,
      completed: pct >= 80,
    });

    StorageService.addExerciseResult({
      topicId,
      type,
      score: correct,
      total: total,
      topicTitle: topic ? topic.title : 'Grammar Exercise',
    });

    StorageService.updateStreak();
    showToast(`Score: ${correct}/${total} (${pct}%)`, pct >= 70 ? 'success' : 'warning');
  }
}
