// ==========================================================================
// Lessons Page — Expert Learning Roadmap & Curriculum Library
// ==========================================================================

import { LEVELS, getTopicsByLevel, GRAMMAR_TOPICS, EXPERT_ROADMAP, getTopicsForStage } from '../data/grammar-data.js';
import { StorageService } from '../services/storage-service.js';

export function renderLessons(filterLevel = null) {
  const container = document.getElementById('page-container');
  if (!container) return;

  const progress = StorageService.getProgress();
  const dueSRSTopics = StorageService.getDueSRSReviewTopics(GRAMMAR_TOPICS);

  container.innerHTML = `
    <!-- Header -->
    <div class="section-header" style="margin-bottom: 24px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px;">
        <div class="section-title-group">
          <span class="section-label">Evidence-Based Learning Roadmap</span>
          <h1 style="font-size:2.2rem; font-weight:800; letter-spacing:-0.03em; margin-bottom:4px;">Lộ Trình Học Tập Chuyên Gia</h1>
          <p class="section-subtitle" style="font-size:0.98rem;">Chương trình 121 chuyên đề (338 bài học) sắp xếp khoa học theo 8 Trạm Chinh Phục (CEFR & SLA)</p>
        </div>

        <!-- View Switcher Tabs -->
        <div class="tabs" id="view-mode-tabs" style="margin:0; background:var(--bg-tertiary); padding:4px; border-radius:var(--radius-full);">
          <button class="tab-btn active" data-mode="roadmap" style="border-radius:var(--radius-full); padding:8px 18px; font-weight:700;">🚀 Lộ Trình Chuyên Gia</button>
          <button class="tab-btn" data-mode="library" style="border-radius:var(--radius-full); padding:8px 18px; font-weight:700;">📚 Thư Viện Cấp Độ</button>
        </div>
      </div>
    </div>

    <!-- SRS Review Due Alert Banner -->
    ${dueSRSTopics.length > 0 ? `
      <div class="card mb-lg" style="border-left: 5px solid #f59e0b; background: linear-gradient(135deg, rgba(245,158,11,0.12), rgba(245,158,11,0.04)); padding: 20px 24px; border-radius:var(--radius-lg);">
        <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:14px;">
          <div style="display:flex; align-items:center; gap:16px;">
            <div style="width:48px; height:48px; border-radius:var(--radius-full); background:rgba(245,158,11,0.2); display:flex; align-items:center; justify-content:center; font-size:1.6rem;">🧠</div>
            <div>
              <h3 style="font-size:1.1rem; font-weight:800; margin-bottom:3px; color:var(--text-primary);">Cần Ôn Tập Hôm Nay (Spaced Repetition)</h3>
              <p style="font-size:0.9rem; color:var(--text-secondary); margin:0;">
                Thuật toán Lặp lại ngắt quãng (SRS) gợi ý bạn có <strong style="color:#f59e0b;">${dueSRSTopics.length} bài học</strong> cần củng cố lại để ghi nhớ vĩnh viễn.
              </p>
            </div>
          </div>
          <a href="#/lessons/${dueSRSTopics[0].id}" class="btn btn-warning btn-pill" style="font-weight:800; padding:10px 22px; box-shadow:0 4px 14px rgba(245,158,11,0.3);">
            🔥 Ôn Tập Ngay (${dueSRSTopics[0].title})
          </a>
        </div>
      </div>
    ` : ''}

    <!-- Search Box -->
    <div class="lessons-controls" style="margin-bottom: 28px;">
      <div class="search-box-wrapper" style="max-width:100%; width:100%;">
        <svg class="svg-icon search-icon" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
        <input type="text" class="input-field search-box-input" id="lesson-search" placeholder="Search by topic, unit, rule or keyword..." style="padding:14px 18px 14px 44px; font-size:1rem;" />
      </div>
    </div>

    <!-- VIEW 1: Guided Roadmap View -->
    <div id="view-roadmap" class="roadmap-container">
      ${renderRoadmapView(progress)}
    </div>

    <!-- VIEW 2: Level Library View -->
    <div id="view-library" class="library-container" style="display:none;">
      <!-- Filter Controls -->
      <div class="filter-pills" id="level-tabs" style="margin-bottom: 24px;">
        <button class="filter-pill ${!filterLevel ? 'active' : ''}" data-level="">All Levels</button>
        ${LEVELS.map(l => `
          <button class="filter-pill ${filterLevel === l.id ? 'active' : ''}" data-level="${l.id}">
            ${l.name}
          </button>
        `).join('')}
      </div>

      <div class="lessons-grid" id="lessons-grid"></div>
    </div>
  `;

  // Grid element in Library view
  const grid = document.getElementById('lessons-grid');
  const searchInput = document.getElementById('lesson-search');

  function renderGrid(level = filterLevel, search = '') {
    let topics = level ? getTopicsByLevel(level) : GRAMMAR_TOPICS.slice().sort((a, b) => {
      const idxA = LEVELS.findIndex(l => l.id === a.level);
      const idxB = LEVELS.findIndex(l => l.id === b.level);
      return (idxA - idxB) || (a.order - b.order);
    });

    if (search) {
      const q = search.toLowerCase();
      topics = topics.filter(t =>
        t.title.toLowerCase().includes(q) ||
        t.subtitle.toLowerCase().includes(q) ||
        (t.murphyUnit && t.murphyUnit.toLowerCase().includes(q))
      );
    }

    if (topics.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px solid var(--border-subtle);">
          <svg class="svg-icon" style="width:48px;height:48px;color:var(--text-tertiary);margin-bottom:12px;" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
          <h3 style="margin-bottom:6px;">No grammar topics match your search</h3>
          <p style="font-size:0.9rem;color:var(--text-secondary);">Try searching for 'Tenses', 'Modals', 'Passive', or 'Unit 1'.</p>
        </div>
      `;
      return;
    }

    const badgeColorMap = {
      beginner: 'emerald',
      intermediate: 'indigo',
      advanced: 'amber',
      lexicon: 'cyan',
      toeic: 'rose'
    };

    grid.innerHTML = topics.map(topic => {
      const tp = progress[topic.id] || {};
      const levelInfo = LEVELS.find(l => l.id === topic.level);
      const rulesCount = topic.content?.rules?.length || 0;
      const murphyRef = topic.murphyUnit || `Unit ${topic.unit || 1}`;
      const badgeClass = badgeColorMap[topic.level] || 'indigo';

      return `
        <a href="#/lessons/${topic.id}" class="lesson-card" style="text-decoration:none;">
          <div>
            <div class="lesson-card-meta">
              <span class="badge badge-${badgeClass}">${levelInfo?.name || 'Grammar'}</span>
              <span class="badge badge-neutral" style="font-size:0.7rem;">${murphyRef}</span>
            </div>
            <h3 class="lesson-card-title">${topic.title}</h3>
            <p class="lesson-card-desc">${topic.subtitle}</p>
          </div>

          <div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
              <span class="badge badge-neutral">${rulesCount} Bài Học</span>
              ${topic.toeicBand ? `<span class="badge badge-rose">🎯 ${topic.toeicBand}</span>` : ''}
              ${tp.completed ? `<span class="badge badge-emerald">✓ Mastered</span>` : ''}
            </div>

            ${tp.exercisesDone > 0 ? `
              <div class="progress-bar-track">
                <div class="progress-bar-fill emerald" style="width:${tp.score || 0}%;"></div>
              </div>
              <div style="font-size:0.78rem;color:var(--text-tertiary);margin-top:4px;">${tp.exercisesDone} bài tập đã làm • Điểm ${tp.score || 0}%</div>
            ` : ''}
          </div>
        </a>
      `;
    }).join('');
  }

  renderGrid();

  // Mode tabs listener
  document.querySelectorAll('#view-mode-tabs .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#view-mode-tabs .tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const mode = btn.dataset.mode;
      const viewRoadmap = document.getElementById('view-roadmap');
      const viewLibrary = document.getElementById('view-library');

      if (mode === 'roadmap') {
        viewRoadmap.style.display = 'block';
        viewLibrary.style.display = 'none';
      } else {
        viewRoadmap.style.display = 'none';
        viewLibrary.style.display = 'block';
      }
    });
  });

  // Level tabs listener
  document.querySelectorAll('#level-tabs .filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#level-tabs .filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const level = btn.dataset.level || null;
      const search = searchInput?.value || '';
      renderGrid(level, search);
    });
  });

  // Search filter
  searchInput?.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    const activeMode = document.querySelector('#view-mode-tabs .tab-btn.active')?.dataset?.mode || 'roadmap';

    if (activeMode === 'library') {
      const activeTab = document.querySelector('#level-tabs .filter-pill.active');
      const level = activeTab?.dataset?.level || null;
      renderGrid(level, q);
    } else {
      // Filter roadmap view stages
      document.querySelectorAll('.roadmap-stage-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(q) ? 'block' : 'none';
      });
    }
  });
}

function renderRoadmapView(progress) {
  const stageGradients = [
    'linear-gradient(135deg, #10b981, #059669)',
    'linear-gradient(135deg, #6366f1, #4f46e5)',
    'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    'linear-gradient(135deg, #06b6d4, #0891b2)',
    'linear-gradient(135deg, #f59e0b, #d97706)',
    'linear-gradient(135deg, #14b8a6, #0d9488)',
    'linear-gradient(135deg, #f43f5e, #e11d48)',
    'linear-gradient(135deg, #ef4444, #dc2626)'
  ];

  const stageBorderColors = [
    '#10b981', '#6366f1', '#8b5cf6', '#06b6d4', '#f59e0b', '#14b8a6', '#f43f5e', '#ef4444'
  ];

  return EXPERT_ROADMAP.map((stage, sIdx) => {
    const stageTopics = stage.topics.map(id => GRAMMAR_TOPICS.find(t => t.id === id)).filter(Boolean);
    const completedCount = stageTopics.filter(t => progress[t.id]?.completed).length;
    const progressPercent = stageTopics.length > 0 ? Math.round((completedCount / stageTopics.length) * 100) : 0;
    const bgGradient = stageGradients[sIdx % stageGradients.length];
    const borderCol = stageBorderColors[sIdx % stageBorderColors.length];

    return `
      <div class="card mb-xl roadmap-stage-card animate-in" style="position:relative; overflow:hidden; border: 1px solid var(--border-subtle); border-top: 5px solid ${borderCol}; border-radius: var(--radius-xl); margin-bottom: 32px;">
        <!-- Header -->
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:16px; margin-bottom:18px;">
          <div style="display:flex; align-items:center; gap:18px;">
            <div style="width:60px; height:60px; border-radius:var(--radius-lg); background:${bgGradient}; display:flex; align-items:center; justify-content:center; font-size:2.2rem; shrink:0; box-shadow: 0 6px 18px rgba(0,0,0,0.15);">
              ${stage.icon}
            </div>
            <div>
              <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap; margin-bottom:4px;">
                <span class="badge ${stage.badgeClass}" style="font-size:0.8rem; padding:4px 12px;">${stage.title}</span>
                <span class="badge badge-neutral" style="font-size:0.75rem;">⏱️ ${stage.estimatedHours}</span>
                <span class="badge badge-neutral" style="font-size:0.75rem;">📚 ${stageTopics.length} Topics</span>
              </div>
              <h2 style="font-size:1.4rem; font-weight:800; letter-spacing:-0.02em; margin:0;">${stage.englishTitle}</h2>
              <p style="font-size:0.94rem; color:var(--text-secondary); margin:4px 0 0 0;">${stage.subtitle}</p>
            </div>
          </div>

          <!-- Progress -->
          <div style="min-width:190px; text-align:right;">
            <div style="font-weight:800; font-size:0.92rem; color:var(--text-primary); margin-bottom:6px;">
              ${completedCount} / ${stageTopics.length} Mastered (${progressPercent}%)
            </div>
            <div class="progress-bar-track" style="height:10px; background:var(--bg-tertiary); border-radius:var(--radius-full);">
              <div class="progress-bar-fill emerald" style="width:${progressPercent}%; height:100%;"></div>
            </div>
          </div>
        </div>

        <!-- Pedagogy Focus Note -->
        <div style="background:var(--bg-tertiary); padding:12px 18px; border-radius:var(--radius-md); font-size:0.86rem; color:var(--text-secondary); margin-bottom:22px; border-left:4px solid ${borderCol};">
          💡 <strong>Định hướng sư phạm (Pedagogy Focus):</strong> ${stage.pedagogyFocus}
        </div>

        <!-- Topics Grid inside Stage -->
        <div style="display:grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap:16px;">
          ${stageTopics.map((topic, index) => {
            const tp = progress[topic.id] || {};
            const rulesCount = topic.content?.rules?.length || 0;
            const isCompleted = tp.completed;

            return `
              <a href="#/lessons/${topic.id}" class="lesson-card" style="padding:16px 18px; text-decoration:none; display:flex; flex-direction:column; justify-space-between; background:var(--bg-card); border: 1px solid var(--border-subtle); border-radius:var(--radius-lg);">
                <div>
                  <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                    <span style="font-size:0.72rem; font-weight:800; color:var(--text-tertiary); letter-spacing:0.06em;">TOPIC ${index + 1}</span>
                    ${isCompleted ? `<span class="badge badge-emerald" style="font-size:0.7rem;">✓ Mastered</span>` : `<span class="badge badge-neutral" style="font-size:0.7rem;">${rulesCount} bài</span>`}
                  </div>
                  <h4 style="font-size:1.02rem; font-weight:800; margin:0 0 6px 0; color:var(--text-primary); line-height:1.35;">${topic.title}</h4>
                  <p style="font-size:0.85rem; color:var(--text-secondary); margin:0; line-height:1.5; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">${topic.subtitle}</p>
                </div>

                <div style="margin-top:14px; padding-top:10px; border-top:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center; font-size:0.8rem; color:var(--text-tertiary);">
                  <span>${topic.murphyUnit || 'Grammar Unit'}</span>
                  <span style="color:var(--color-primary); font-weight:700; display:inline-flex; align-items:center; gap:4px;">Học bài →</span>
                </div>
              </a>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');
}
