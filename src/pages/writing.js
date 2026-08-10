// ==========================================================================
// Writing Studio Page — Modern IELTS Evaluation Workspace
// ==========================================================================

import { StorageService } from '../services/storage-service.js';
import { GeminiService } from '../services/gemini-service.js';
import { renderLifeTopicsSelectOptions } from '../data/life-topics-data.js';
import { WRITING_EXERCISES } from '../data/skills-exercises-data.js';

let currentPrompt = null;
let timerSeconds = 0;
let timerInterval = null;
export function renderWritingPage() {
  const container = document.getElementById('page-container');
  if (!container) return;

  container.innerHTML = `
    <div class="section-header" style="margin-bottom: 20px;">
      <div class="section-title-group">
        <span class="section-label">Writing Laboratory</span>
        <h1>Writing Studio</h1>
      </div>
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
        <select id="writing-preset-select" class="input-field" style="max-width:280px;padding:8px 12px;font-size:0.85rem;border-color:var(--color-primary);">
          <option value="">📚 Kho 250+ Bài tập Viết (Data Bank)</option>
          ${WRITING_EXERCISES.map(ex => `<option value="${ex.id}">✍️ ${ex.title} (${ex.category})</option>`).join('')}
        </select>
        <select id="writing-cat-select" class="input-field" style="max-width:220px;padding:8px 12px;font-size:0.85rem;">
          <option value="">🌍 Tất cả thể loại (All)</option>
          <optgroup label="✍️ Standard Formats">
            <option value="IELTS Task 2" selected>IELTS Task 2 Essay</option>
            <option value="IELTS Task 1 - Chart">IELTS Task 1 - Chart Analysis</option>
            <option value="Business Email">Business Email</option>
            <option value="Opinion Essay">Opinion Essay</option>
            <option value="Personal Journal">Personal Journal</option>
            <option value="Cover Letter">Cover Letter / Job Application</option>
            <option value="Report Writing">Formal Report Writing</option>
            <option value="Formal Proposal">Formal Proposal</option>
          </optgroup>
          ${renderLifeTopicsSelectOptions()}
        </select>
        <button id="btn-generate-writing" class="btn btn-primary btn-sm">New Prompt</button>
      </div>
    </div>

    <!-- Writing Studio Grid -->
    <div class="workspace-layout">
      <!-- Main Writing Column -->
      <div class="workspace-single">
        <div id="writing-prompt-card" class="card">
          <div style="text-align:center;padding:24px;color:var(--text-secondary);">Generating writing prompt...</div>
        </div>

        <div class="card">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;">
            <h3 style="font-size:1.1rem;">Writing Workspace</h3>
            <div style="display:flex;align-items:center;gap:10px;">
              <span id="word-count-badge" class="badge badge-amber">0 words</span>
              <span id="timer-badge" class="badge badge-neutral">00:00</span>
            </div>
          </div>

          <textarea id="essay-textarea" class="input-field" rows="12" style="width:100%;box-sizing:border-box;font-size:1rem;line-height:1.7;padding:16px;resize:vertical;margin-bottom:16px;" placeholder="Draft your response here..."></textarea>

          <div style="display:flex;justify-content:space-between;align-items:center;">
            <button id="btn-save-draft" class="btn btn-secondary btn-sm">Save Draft</button>
            <button id="btn-evaluate-writing" class="btn btn-primary">Evaluate Response</button>
          </div>
        </div>

        <div id="writing-eval-result" style="display:none;"></div>
      </div>

      <!-- Sidebar Column -->
      <div class="workspace-single">
        <div class="card">
          <h3 style="font-size:1rem;margin-bottom:12px;">Suggested Outline</h3>
          <ul id="writing-outline-list" style="padding-left:18px;font-size:0.88rem;line-height:1.7;color:var(--text-secondary);"></ul>
        </div>

        <div class="card">
          <h3 style="font-size:1rem;margin-bottom:12px;">Key Vocabulary</h3>
          <div id="writing-vocab-chips" style="display:flex;flex-wrap:wrap;gap:6px;"></div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btn-generate-writing')?.addEventListener('click', loadNewPrompt);

  document.getElementById('writing-preset-select')?.addEventListener('change', (e) => {
    const selectedId = e.target.value;
    if (selectedId) {
      const preset = WRITING_EXERCISES.find(ex => ex.id === selectedId);
      if (preset) {
        currentPrompt = preset;
        syncWritingFilterDropdowns(preset.category || preset.topic, preset.id);
        StorageService.saveWritingSession(currentPrompt, preset.category || preset.topic, '');
        renderPromptContent();
      }
    }
  });

  document.getElementById('writing-cat-select')?.addEventListener('change', () => {
    updateWritingPresetDropdown();
    loadNewPrompt();
  });

  document.getElementById('essay-textarea')?.addEventListener('input', updateWordCount);
  document.getElementById('btn-save-draft')?.addEventListener('click', saveDraft);
  document.getElementById('btn-evaluate-writing')?.addEventListener('click', evaluateEssay);

  startTimer();

  const savedSession = StorageService.getWritingSession();
  if (savedSession && savedSession.prompt) {
    currentPrompt = savedSession.prompt;
    const cat = currentPrompt.category || currentPrompt.topic || savedSession.category || '';
    syncWritingFilterDropdowns(cat, currentPrompt.id);

    if (savedSession.draft) {
      const textarea = document.getElementById('essay-textarea');
      if (textarea) textarea.value = savedSession.draft;
      updateWordCount();
    }
    renderPromptContent();
  } else {
    updateWritingPresetDropdown();
    loadNewPrompt();
  }
}

function updateWritingPresetDropdown(selectedPresetId = null) {
  const catSel = document.getElementById('writing-cat-select');
  const presetSel = document.getElementById('writing-preset-select');
  if (!presetSel) return;

  const currentCat = catSel ? catSel.value : '';

  const filtered = WRITING_EXERCISES.filter(ex => {
    if (!currentCat) return true;
    const catMatch = ex.category === currentCat || ex.category?.toLowerCase().includes(currentCat.toLowerCase());
    const topicMatch = ex.topic === currentCat || ex.topic?.toLowerCase().includes(currentCat.toLowerCase());
    return catMatch || topicMatch;
  });

  presetSel.innerHTML = `
    <option value="">📚 Kho Bài tập Viết (${filtered.length}/${WRITING_EXERCISES.length} bài)</option>
    ${filtered.map(ex => `<option value="${ex.id}">✍️ ${ex.title} (${ex.category})</option>`).join('')}
  `;

  const targetId = selectedPresetId || (currentPrompt ? currentPrompt.id : null);
  if (targetId && filtered.some(ex => ex.id === targetId)) {
    presetSel.value = targetId;
  } else {
    presetSel.value = '';
  }
}

function syncWritingFilterDropdowns(categoryOrTopic, presetId = null) {
  const catSel = document.getElementById('writing-cat-select');

  if (catSel && categoryOrTopic) {
    const options = Array.from(catSel.options);
    const matchedOpt = options.find(opt => opt.value === categoryOrTopic || opt.value.toLowerCase().includes(categoryOrTopic.toLowerCase()) || categoryOrTopic.toLowerCase().includes(opt.value.toLowerCase()));
    if (matchedOpt) {
      catSel.value = matchedOpt.value;
    }
  }

  updateWritingPresetDropdown(presetId);
}

function startTimer() {
  clearInterval(timerInterval);
  timerSeconds = 0;
  timerInterval = setInterval(() => {
    timerSeconds++;
    const mins = String(Math.floor(timerSeconds / 60)).padStart(2, '0');
    const secs = String(timerSeconds % 60).padStart(2, '0');
    const timerBadge = document.getElementById('timer-badge');
    if (timerBadge) timerBadge.textContent = `${mins}:${secs}`;
  }, 1000);
}

async function loadNewPrompt() {
  const category = document.getElementById('writing-cat-select')?.value || 'IELTS Task 2';
  const card = document.getElementById('writing-prompt-card');

  if (card) {
    card.innerHTML = `<div style="text-align:center;padding:24px;color:var(--text-secondary);">Generating prompt for <strong>${category}</strong>...</div>`;
  }

  const presetSel = document.getElementById('writing-preset-select');
  if (presetSel) presetSel.value = '';

  try {
    currentPrompt = await GeminiService.generateWritingPrompt(category);
  } catch (err) {
    currentPrompt = null;
  }

  if (!currentPrompt || !currentPrompt.prompt) {
    const matched = WRITING_EXERCISES.find(ex => ex.category === category || (ex.topic && ex.topic.toLowerCase().includes((category || '').toLowerCase())));
    currentPrompt = matched || WRITING_EXERCISES[0];
  }

  StorageService.saveWritingSession(currentPrompt, category);
  renderPromptContent();
}

function renderPromptContent() {
  const card = document.getElementById('writing-prompt-card');
  const outlineList = document.getElementById('writing-outline-list');
  const vocabChips = document.getElementById('writing-vocab-chips');

  if (!card || !currentPrompt) return;

  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelector('.main-content')?.scrollTo({ top: 0, behavior: 'smooth' });

  const categoryText = currentPrompt.category || currentPrompt.topic || 'Writing Topic';
  const titleText = currentPrompt.title || currentPrompt.topic || currentPrompt.category || 'Writing Prompt';
  const promptText = currentPrompt.prompt || currentPrompt.instructions || 'Write a detailed response based on the prompt topic.';

  card.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;flex-wrap:wrap;gap:8px;">
      <span class="badge badge-amber">${categoryText}</span>
      ${currentPrompt.level ? `<span class="badge badge-cyan">${currentPrompt.level}</span>` : ''}
    </div>
    <h3 style="font-size:1.2rem;margin-bottom:8px;color:var(--text-primary);">${titleText}</h3>
    <p style="font-size:0.95rem;line-height:1.6;color:var(--text-primary);margin-bottom:12px;">${promptText}</p>

    ${currentPrompt.sampleModelEssay ? `
      <details style="margin-top:12px;background:var(--bg-tertiary);padding:12px 16px;border-radius:var(--radius-md);">
        <summary style="cursor:pointer;font-weight:700;color:var(--color-primary);font-size:0.9rem;">
          🌟 Xem Bài Viết Mẫu Band 8.0 (Model Answer)
        </summary>
        <div style="margin-top:10px;font-size:0.9rem;line-height:1.7;color:var(--text-secondary);white-space:pre-line;border-top:1px solid var(--border-color);padding-top:10px;">
          ${currentPrompt.sampleModelEssay}
        </div>
      </details>
    ` : ''}
  `;

  if (outlineList) {
    outlineList.innerHTML = (currentPrompt.outline || [
      'Introduction: Paraphrase question & state thesis',
      'Body 1: First main argument with example',
      'Body 2: Second main argument with example',
      'Conclusion: Summarize key points'
    ]).map(o => `<li>${o}</li>`).join('');
  }

  if (vocabChips) {
    vocabChips.innerHTML = (currentPrompt.keyVocab || [
      'Furthermore', 'Consequently', 'Substantial', 'Paramount'
    ]).map(v => `<span class="badge badge-neutral">${v}</span>`).join('');
  }
}

function updateWordCount() {
  const text = document.getElementById('essay-textarea')?.value || '';
  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const badge = document.getElementById('word-count-badge');
  if (badge) badge.textContent = `${wordCount} words`;
}

function saveDraft() {
  const text = document.getElementById('essay-textarea')?.value || '';
  const category = document.getElementById('writing-cat-select')?.value || 'IELTS Task 2';
  StorageService.saveWritingSession(currentPrompt, category, text);
  alert('Draft saved successfully!');
}

async function evaluateEssay() {
  const text = document.getElementById('essay-textarea')?.value || '';
  const evalDiv = document.getElementById('writing-eval-result');
  if (!text.trim()) {
    alert('Please write an essay response first!');
    return;
  }

  if (evalDiv) {
    evalDiv.style.display = 'block';
    evalDiv.innerHTML = `<div class="card" style="text-align:center;padding:36px;color:var(--text-secondary);">Evaluating essay criteria...</div>`;
  }

  const evalResult = await GeminiService.evaluateWritingEssay(text, currentPrompt.prompt);
  StorageService.recordSkillScore('writing', evalResult.overallBand * 10);

  if (evalDiv) {
    evalDiv.innerHTML = `
      <div class="card" style="border-color:var(--border-strong);">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
          <h3 style="font-size:1.2rem;">IELTS Evaluation Results</h3>
          <span class="badge badge-amber" style="font-size:1rem;padding:6px 14px;">Band ${evalResult.overallBand}</span>
        </div>

        <div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:12px;margin-bottom:20px;">
          <div style="padding:12px;background:var(--bg-secondary);border-radius:var(--radius-md);text-align:center;">
            <div style="font-size:0.75rem;color:var(--text-tertiary);">Task Achievement</div>
            <div style="font-size:1.4rem;font-weight:800;color:var(--color-primary);">${evalResult.taskAchievement}</div>
          </div>
          <div style="padding:12px;background:var(--bg-secondary);border-radius:var(--radius-md);text-align:center;">
            <div style="font-size:0.75rem;color:var(--text-tertiary);">Coherence & Cohesion</div>
            <div style="font-size:1.4rem;font-weight:800;color:var(--color-secondary);">${evalResult.coherence}</div>
          </div>
          <div style="padding:12px;background:var(--bg-secondary);border-radius:var(--radius-md);text-align:center;">
            <div style="font-size:0.75rem;color:var(--text-tertiary);">Lexical Resource</div>
            <div style="font-size:1.4rem;font-weight:800;color:var(--color-cyan);">${evalResult.lexical}</div>
          </div>
          <div style="padding:12px;background:var(--bg-secondary);border-radius:var(--radius-md);text-align:center;">
            <div style="font-size:0.75rem;color:var(--text-tertiary);">Grammar Accuracy</div>
            <div style="font-size:1.4rem;font-weight:800;color:var(--color-accent);">${evalResult.grammar}</div>
          </div>
        </div>

        <div style="font-size:0.92rem;line-height:1.6;color:var(--text-secondary);">
          <p><strong>Feedback:</strong> ${evalResult.feedback}</p>
        </div>
      </div>
    `;
  }
}
