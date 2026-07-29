// ========================================
// Lesson Detail Page — SLA & Active Recall Learning Layout
// ========================================

import { getTopicById, LEVELS, getTopicStageInfo } from '../data/grammar-data.js';
import { StorageService } from '../services/storage-service.js';
import { IpaService } from '../services/ipa-service.js';

export function renderLessonDetail(topicId) {
  const container = document.getElementById('page-container');
  if (!container) return;

  const topic = getTopicById(topicId);
  if (!topic) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">❓</div>
        <div class="empty-state-title">Topic not found</div>
        <div class="empty-state-text">The requested grammar topic doesn't exist.</div>
        <a href="#/lessons" class="btn btn-primary">← Back to Lessons</a>
      </div>
    `;
    return;
  }

  const levelInfo = LEVELS.find(l => l.id === topic.level);
  const stageInfo = getTopicStageInfo(topicId);
  const { content } = topic;

  // Mark as accessed
  StorageService.updateTopicProgress(topicId, {});

  // Murphy Unit Reference Tag
  const murphyRef = topic.murphyUnit || `Raymond Murphy Grammar Unit (${levelInfo?.name || 'General'})`;

  container.innerHTML = `
    <div style="margin-bottom:24px;">
      <a href="#/lessons" class="btn btn-ghost btn-sm" style="margin-bottom:14px;">← Back to Roadmap & Lessons</a>
      <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
        <span style="font-size:2.8rem;">${topic.icon}</span>
        <div>
          <div style="display:flex;gap:8px;align-items:center;margin-bottom:6px;flex-wrap:wrap;">
            ${stageInfo ? `<span class="badge ${stageInfo.badgeClass}">🚀 ${stageInfo.title}</span>` : ''}
            <span class="badge badge-${levelInfo?.color || 'emerald'}">${levelInfo?.name || 'Beginner'}</span>
            ${topic.toeicBand ? `<span class="badge badge-rose" style="font-weight:700;">🎯 ${topic.toeicBand}</span>` : ''}
            <span class="badge badge-neutral" style="font-size:0.75rem;">📘 ${murphyRef}</span>
          </div>
          <h1 class="page-title" style="margin-bottom:4px;">${topic.title}</h1>
          <p class="page-description" style="margin:0;">${topic.subtitle}</p>
        </div>
      </div>
    </div>

    <!-- Active Recall & Micro-Chunking Tabs -->
    <div class="tabs" id="detail-tabs">
      <button class="tab-btn active" data-tab="theory">📖 1. Core Rules & Form</button>
      <button class="tab-btn" data-tab="comparisons">⚖️ 2. Use & Contrasts</button>
      <button class="tab-btn" data-tab="examples">💡 3. Context Examples</button>
      <button class="tab-btn" data-tab="mistakes">⚠️ 4. Learner Pitfalls</button>
      <button class="tab-btn" data-tab="recall">🎯 5. Active Recall Check</button>
    </div>

    <!-- Tab 1: Theory & Form -->
    <div class="tab-content active" id="tab-theory">
      ${content.overview ? `
        <div class="card mb-lg" style="border-left:4px solid var(--color-primary-light);">
          <h3 style="font-size:1.15rem;font-weight:800;margin-bottom:8px;">📘 Overview & Definition</h3>
          <p style="font-size:1.02rem;line-height:1.7;color:var(--text-secondary);">${content.overview}</p>
        </div>
      ` : ''}
      
      ${content.rules.map((rule, rIdx) => `
        <div class="grammar-rule animate-in">
          <div class="grammar-rule-title">Section ${String.fromCharCode(65 + rIdx)}: ${rule.title}</div>
          <p style="color:var(--text-secondary);margin-bottom:14px;line-height:1.6;font-size:0.98rem;">${rule.explanation}</p>
          
          ${rule.table ? renderTable(rule.table) : ''}
          
          ${rule.examples ? `
            <div style="margin-top:14px;">
              ${rule.examples.map(ex => `
                <div class="grammar-example">
                  <div>${ex.sentence}</div>
                  <div class="ipa-subtext" style="font-size:0.8rem;color:#c084fc;margin-top:2px;">${IpaService.getIPA(ex.sentence)}</div>
                  ${ex.note ? `<div style="font-size:0.8rem;color:var(--text-tertiary);margin-top:4px;">${ex.note}</div>` : ''}
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `).join('')}
    </div>

    <!-- Tab 2: Comparisons & Contrasts -->
    <div class="tab-content" id="tab-comparisons">
      <div class="card mb-lg">
        <h3 style="font-size:1.2rem;font-weight:800;margin-bottom:12px;">⚖️ Key Tense & Structure Contrasts</h3>
        <p style="font-size:0.95rem;color:var(--text-secondary);line-height:1.6;">
          In Raymond Murphy's <em>English Grammar in Use</em>, understanding the difference between contrasting structures is key to natural fluency.
        </p>
      </div>

      ${content.rules.filter(r => r.table).map(r => `
        <div class="grammar-rule">
          <div class="grammar-rule-title">Structural Contrast: ${r.title}</div>
          ${renderTable(r.table)}
        </div>
      `).join('')}
    </div>

    <!-- Tab 3: Context Examples -->
    <div class="tab-content" id="tab-examples">
      ${content.rules.filter(r => r.examples && r.examples.length > 0).map(rule => `
        <div class="grammar-rule animate-in">
          <div class="grammar-rule-title">${rule.title}</div>
          ${rule.examples.map(ex => `
            <div class="grammar-example">
              ${ex.sentence}
              ${ex.note ? `<br/><small style="color:var(--color-primary-light);">→ Usage Note: ${ex.note}</small>` : ''}
            </div>
          `).join('')}
        </div>
      `).join('')}
    </div>

    <!-- Tab 4: Learner Pitfalls & Common Mistakes -->
    <div class="tab-content" id="tab-mistakes">
      ${content.commonMistakes && content.commonMistakes.length > 0 ? content.commonMistakes.map((m, i) => `
        <div class="exercise-card animate-in" style="margin-bottom:14px;padding:18px;">
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="color:var(--color-error);font-size:1.3rem;font-weight:900;">✗ WRONG:</span>
              <div style="text-decoration:line-through;color:var(--color-error);font-weight:600;font-size:1.02rem;">${m.wrong}</div>
            </div>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="color:var(--color-secondary);font-size:1.3rem;font-weight:900;">✓ CORRECT:</span>
              <div style="color:var(--color-secondary);font-weight:700;font-size:1.02rem;">${m.correct}</div>
            </div>
            ${m.tip ? `
              <div style="margin-top:4px;padding:10px 14px;background:var(--bg-secondary);border-radius:var(--radius-sm);font-size:0.9rem;color:var(--text-secondary);">
                💡 <strong>Murphy Pro Tip:</strong> ${m.tip}
              </div>
            ` : ''}
          </div>
        </div>
      `).join('') : `
        <div class="empty-state">
          <div class="empty-state-icon">✅</div>
          <div class="empty-state-title">No common mistakes listed</div>
          <div class="empty-state-text">This topic currently has clean usage rules.</div>
        </div>
      `}
    </div>

    <!-- Tab 5: Active Recall Check -->
    <div class="tab-content" id="tab-recall">
      <div class="card mb-lg" style="border-left: 4px solid var(--color-accent, #6366f1);">
        <h3 style="font-size:1.2rem; font-weight:800; margin-bottom:8px;">🎯 Active Recall Check (Kiểm tra ghi nhớ chủ động)</h3>
        <p style="font-size:0.95rem; color:var(--text-secondary); line-height:1.6; margin:0;">
          Theo khoa học nhận thức, việc chủ động nhớ lại (Active Recall) ngay sau khi đọc lý thuyết giúp tăng gấp 3 lần khả năng ghi nhớ dài hạn. Hãy tự nhẩm câu trả lời trước khi bấm xem giải thích!
        </p>
      </div>

      ${content.rules.map((rule, idx) => `
        <div class="grammar-rule animate-in" style="background:var(--bg-card); border-radius:var(--radius-lg); padding:20px; margin-bottom:16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
            <span style="font-weight:700; font-size:0.95rem; color:var(--color-primary-light);">Question ${idx + 1}: ${rule.title}</span>
            <button class="btn btn-ghost btn-sm toggle-recall-btn" data-target="recall-ans-${idx}">👁️ View Core Answer</button>
          </div>
          <p style="font-weight:600; font-size:1.02rem; margin-bottom:12px;">Q: Hãy nêu quy tắc chính & cấu trúc áp dụng cho "${rule.title}"?</p>
          <div id="recall-ans-${idx}" style="display:none; padding:14px; background:var(--bg-tertiary); border-radius:var(--radius-md); border:1px solid var(--border-subtle); font-size:0.92rem; color:var(--text-secondary); line-height:1.6;">
            <strong>Đáp án & Giải thích:</strong><br/>
            ${rule.explanation}
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Action Buttons -->
    <div style="display:flex;gap:14px;margin-top:36px;flex-wrap:wrap;">
      <a href="#/exercises?topic=${topicId}" class="btn btn-primary btn-pill btn-lg">✏️ Practice Unit Exercises</a>
      <a href="#/flashcards?topic=${topicId}" class="btn btn-accent btn-pill btn-lg">🃏 Study Flashcard Deck</a>
    </div>
  `;

  // Tab switching
  document.querySelectorAll('#detail-tabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#detail-tabs .tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`tab-${btn.dataset.tab}`)?.classList.add('active');
    });
  });

  // Active recall toggle
  document.querySelectorAll('.toggle-recall-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const isHidden = targetEl.style.display === 'none';
        targetEl.style.display = isHidden ? 'block' : 'none';
        btn.textContent = isHidden ? '🙈 Hide Answer' : '👁️ View Core Answer';
      }
    });
  });
}

function renderTable(table) {
  if (!table || !table.headers || !table.rows) return '';
  return `
    <div class="grammar-table-wrapper">
      <table class="grammar-table">
        <thead>
          <tr>${table.headers.map(h => `<th>${h}</th>`).join('')}</tr>
        </thead>
        <tbody>
          ${table.rows.map(row => `
            <tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}
