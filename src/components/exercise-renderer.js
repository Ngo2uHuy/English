// ==========================================================================
// Exercise Renderer Component — Modern UI Quiz Renderer
// ==========================================================================

import { IpaService } from '../services/ipa-service.js';

export function renderExercises(exercises, type, container) {
  container.innerHTML = '';

  exercises.forEach((ex, idx) => {
    const card = document.createElement('div');
    card.className = 'quiz-card';
    card.style.marginBottom = '20px';
    card.id = `exercise-${idx}`;

    switch (type) {
      case 'fill-blanks':
        card.innerHTML = renderFillBlanks(ex, idx);
        break;
      case 'multiple-choice':
        card.innerHTML = renderMultipleChoice(ex, idx);
        break;
      case 'error-correction':
        card.innerHTML = renderErrorCorrection(ex, idx);
        break;
      case 'sentence-transformation':
        card.innerHTML = renderTransformation(ex, idx);
        break;
      case 'matching':
        card.innerHTML = renderMatching(ex, idx);
        break;
    }

    container.appendChild(card);
  });

  // Attach selection handlers for radio options
  container.querySelectorAll('.option-button').forEach(option => {
    option.addEventListener('click', () => {
      const parent = option.closest('.options-list');
      if (parent) {
        parent.querySelectorAll('.option-button').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        const radio = option.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;
      }
    });
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderFillBlanks(ex, idx) {
  const parts = ex.sentence.split('___');
  const sentenceHtml = parts.length > 1
    ? parts[0] + `<input type="text" class="input-field exercise-blank" data-idx="${idx}" data-answer="${escapeHtml(ex.answer)}" placeholder="..." autocomplete="off" style="width:140px;display:inline-block;padding:4px 10px;margin:0 4px;" />` + parts[1]
    : ex.sentence;

  return `
    <div style="font-size:0.8rem;font-weight:700;color:var(--color-primary);text-transform:uppercase;margin-bottom:8px;">Question #${idx + 1}</div>
    <div class="quiz-question-title" style="margin-bottom:16px;">${sentenceHtml}</div>
    ${ex.options ? `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;">
      ${ex.options.map(opt => `
        <button class="badge badge-neutral" style="cursor:pointer;padding:6px 14px;font-size:0.85rem;border:none;" 
                onclick="document.querySelector('[data-idx=\\'${idx}\\']').value='${escapeHtml(opt)}'">${escapeHtml(opt)}</button>
      `).join('')}
    </div>` : ''}
    <div class="exercise-explanation" id="explanation-${idx}" style="display:none;margin-top:14px;padding:14px;background:var(--bg-secondary);border-radius:var(--radius-md);border-left:3px solid var(--color-primary);">
      <strong style="color:var(--color-primary);">Correct Answer:</strong> ${escapeHtml(ex.answer)}<br/>
      <span style="font-size:0.88rem;color:var(--text-secondary);">${ex.explanation || ''}</span>
    </div>
  `;
}

function renderMultipleChoice(ex, idx) {
  return `
    <div style="font-size:0.8rem;font-weight:700;color:var(--color-primary);text-transform:uppercase;margin-bottom:8px;">Question #${idx + 1}</div>
    <div class="quiz-question-title" style="margin-bottom:20px;">${escapeHtml(ex.question)}</div>
    <div class="options-list">
      ${ex.options.map((opt, optIdx) => `
        <label class="option-button" id="opt-${idx}-${optIdx}" data-answer="${escapeHtml(ex.answer)}" data-value="${escapeHtml(opt)}">
          <input type="radio" name="q-${idx}" value="${escapeHtml(opt)}" style="display:none;" />
          <span class="option-index">${String.fromCharCode(65 + optIdx)}</span>
          <span style="flex:1;">${escapeHtml(opt)}</span>
          <span class="ipa-badge">${IpaService.getIPA(opt)}</span>
        </label>
      `).join('')}
    </div>
    <div class="exercise-explanation" id="explanation-${idx}" style="display:none;margin-top:14px;padding:14px;background:var(--bg-secondary);border-radius:var(--radius-md);border-left:3px solid var(--color-primary);">
      <strong style="color:var(--color-primary);">Correct Answer:</strong> ${escapeHtml(ex.answer)} <span class="ipa-badge">${IpaService.getIPA(ex.answer)}</span><br/>
      <span style="font-size:0.88rem;color:var(--text-secondary);">${ex.explanation || ''}</span>
    </div>
  `;
}

function renderErrorCorrection(ex, idx) {
  return `
    <div style="font-size:0.8rem;font-weight:700;color:var(--color-primary);text-transform:uppercase;margin-bottom:8px;">Question #${idx + 1}</div>
    <div class="quiz-question-title" style="margin-bottom:12px;">Identify and correct the error in:</div>
    <div style="padding:14px;background:var(--bg-secondary);border-radius:var(--radius-md);margin-bottom:16px;font-style:italic;">
      "${escapeHtml(ex.sentence)}"
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
      <div>
        <label style="font-size:0.8rem;font-weight:600;color:var(--text-secondary);">Error Word:</label>
        <input type="text" class="input-field" data-idx="${idx}" data-field="error" data-answer="${escapeHtml(ex.error)}" placeholder="Word with error..." />
      </div>
      <div>
        <label style="font-size:0.8rem;font-weight:600;color:var(--text-secondary);">Correction:</label>
        <input type="text" class="input-field" data-idx="${idx}" data-field="correction" data-answer="${escapeHtml(ex.correction)}" placeholder="Correct word..." />
      </div>
    </div>
    <div class="exercise-explanation" id="explanation-${idx}" style="display:none;margin-top:14px;padding:14px;background:var(--bg-secondary);border-radius:var(--radius-md);border-left:3px solid var(--color-primary);">
      <strong style="color:var(--color-primary);">Error:</strong> "${escapeHtml(ex.error)}" → "${escapeHtml(ex.correction)}"<br/>
      <span style="font-size:0.88rem;color:var(--text-secondary);">${ex.explanation || ''}</span>
    </div>
  `;
}

function renderTransformation(ex, idx) {
  return `
    <div style="font-size:0.8rem;font-weight:700;color:var(--color-primary);text-transform:uppercase;margin-bottom:8px;">Question #${idx + 1}</div>
    <div class="quiz-question-title" style="margin-bottom:12px;">${escapeHtml(ex.instruction)}:</div>
    <div style="padding:14px;background:var(--bg-secondary);border-radius:var(--radius-md);margin-bottom:16px;font-style:italic;">
      "${escapeHtml(ex.original)}"
    </div>
    <textarea class="input-field" data-idx="${idx}" data-answer="${escapeHtml(ex.answer)}" placeholder="Type transformed sentence here..." rows="2" style="margin-bottom:12px;"></textarea>
    ${ex.keywords ? `<div style="margin-bottom:12px;"><span style="font-size:0.8rem;color:var(--text-secondary);">Keywords: </span>${ex.keywords.map(k => `<span class="badge badge-neutral" style="margin-right:4px;">${escapeHtml(k)}</span>`).join('')}</div>` : ''}
    <div class="exercise-explanation" id="explanation-${idx}" style="display:none;margin-top:14px;padding:14px;background:var(--bg-secondary);border-radius:var(--radius-md);border-left:3px solid var(--color-primary);">
      <strong style="color:var(--color-primary);">Sample Answer:</strong> ${escapeHtml(ex.answer)}<br/>
      <span style="font-size:0.88rem;color:var(--text-secondary);">${ex.explanation || ''}</span>
    </div>
  `;
}

function renderMatching(ex, idx) {
  return `
    <div style="font-size:0.8rem;font-weight:700;color:var(--color-primary);text-transform:uppercase;margin-bottom:8px;">Question #${idx + 1}</div>
    <div class="quiz-question-title" style="margin-bottom:16px;">Match the left clause with the correct right item:</div>
    <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px;">
      ${ex.pairs.map((pair, pIdx) => `
        <div style="display:flex;align-items:center;gap:12px;">
          <span style="flex:1;font-size:0.9rem;">${escapeHtml(pair.left)}</span>
          <select class="input-field matching-select" data-idx="${idx}" data-pair="${pIdx}" data-answer="${escapeHtml(pair.right)}" style="flex:1;padding:6px 10px;font-size:0.88rem;">
            <option value="">Select match...</option>
            ${ex.rightOptions.map(opt => `<option value="${escapeHtml(opt)}">${escapeHtml(opt)}</option>`).join('')}
          </select>
        </div>
      `).join('')}
    </div>
    <div class="exercise-explanation" id="explanation-${idx}" style="display:none;margin-top:14px;padding:14px;background:var(--bg-secondary);border-radius:var(--radius-md);border-left:3px solid var(--color-primary);">
      <strong style="color:var(--color-primary);">Explanation:</strong><br/>
      <span style="font-size:0.88rem;color:var(--text-secondary);">${ex.explanation || ''}</span>
    </div>
  `;
}

export function checkAnswers(exercises, type) {
  let score = 0;
  exercises.forEach((ex, idx) => {
    const exp = document.getElementById(`explanation-${idx}`);
    if (exp) exp.style.display = 'block';

    if (type === 'multiple-choice') {
      const selected = document.querySelector(`input[name="q-${idx}"]:checked`);
      const selectedVal = selected ? selected.value : null;
      const options = document.querySelectorAll(`[name="q-${idx}"]`);
      options.forEach(opt => {
        const parent = opt.closest('.option-button');
        if (!parent) return;
        if (opt.value === ex.answer) {
          parent.classList.add('correct');
        } else if (parent.classList.contains('selected')) {
          parent.classList.add('incorrect');
        }
      });
      if (selectedVal === ex.answer) score++;
    } else if (type === 'fill-blanks') {
      const input = document.querySelector(`.exercise-blank[data-idx="${idx}"]`);
      if (input) {
        const val = input.value.trim().toLowerCase();
        const ans = (ex.answer || '').trim().toLowerCase();
        if (val === ans) {
          input.style.borderColor = 'var(--color-secondary)';
          score++;
        } else {
          input.style.borderColor = 'var(--color-rose)';
        }
      }
    } else if (type === 'error-correction') {
      const errorInput = document.querySelector(`input[data-idx="${idx}"][data-field="error"]`);
      const corrInput = document.querySelector(`input[data-idx="${idx}"][data-field="correction"]`);
      const errVal = errorInput ? errorInput.value.trim().toLowerCase() : '';
      const corrVal = corrInput ? corrInput.value.trim().toLowerCase() : '';
      const errAns = (ex.error || '').trim().toLowerCase();
      const corrAns = (ex.correction || '').trim().toLowerCase();
      if ((!errAns || errVal === errAns) && corrVal === corrAns) {
        score++;
      }
    } else if (type === 'sentence-transformation') {
      const textarea = document.querySelector(`textarea[data-idx="${idx}"]`);
      const val = textarea ? textarea.value.trim().toLowerCase() : '';
      const ans = (ex.answer || '').trim().toLowerCase();
      if (val === ans || (ex.keywords && ex.keywords.every(k => val.includes(k.toLowerCase())))) {
        score++;
      }
    } else if (type === 'matching') {
      const selects = document.querySelectorAll(`.matching-select[data-idx="${idx}"]`);
      let allCorrect = true;
      selects.forEach(sel => {
        if (sel.value !== sel.dataset.answer) allCorrect = false;
      });
      if (allCorrect && selects.length > 0) score++;
    }
  });

  const total = exercises.length;
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;

  return {
    correct: score,
    total,
    pct
  };
}
