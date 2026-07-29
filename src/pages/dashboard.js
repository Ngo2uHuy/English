// ==========================================================================
// Dashboard Page — Modern Human-Crafted SaaS Workspace
// ==========================================================================

import { StorageService } from '../services/storage-service.js';
import { LEVELS, getTopicsByLevel, GRAMMAR_TOPICS, EXPERT_ROADMAP } from '../data/grammar-data.js';

export function renderDashboard() {
  const container = document.getElementById('page-container');
  if (!container) return;

  const stats = StorageService.getStats();
  const streak = StorageService.getStreak();
  const progress = StorageService.getProgress();
  const skillStats = StorageService.getSkillStats();
  const dueSRSTopics = StorageService.getDueSRSReviewTopics(GRAMMAR_TOPICS);

  // Recent topics
  const recentTopics = Object.entries(progress)
    .filter(([_, v]) => v.lastAccessed)
    .sort((a, b) => b[1].lastAccessed - a[1].lastAccessed)
    .slice(0, 3)
    .map(([id]) => GRAMMAR_TOPICS.find(t => t.id === id))
    .filter(Boolean);

  // Greeting based on time
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  // Current Roadmap Stage (Find first stage that is not 100% completed)
  let currentStage = EXPERT_ROADMAP[0];
  for (const stage of EXPERT_ROADMAP) {
    const stageTopics = stage.topics.map(id => GRAMMAR_TOPICS.find(t => t.id === id)).filter(Boolean);
    const completedCount = stageTopics.filter(t => progress[t.id]?.completed).length;
    if (completedCount < stageTopics.length) {
      currentStage = stage;
      break;
    }
  }

  const currentStageTopics = currentStage.topics.map(id => GRAMMAR_TOPICS.find(t => t.id === id)).filter(Boolean);
  const currentCompletedCount = currentStageTopics.filter(t => progress[t.id]?.completed).length;
  const currentStagePct = currentStageTopics.length > 0 ? Math.round((currentCompletedCount / currentStageTopics.length) * 100) : 0;

  container.innerHTML = `
    <!-- Hero Header -->
    <div class="dashboard-hero">
      <div>
        <div class="hero-greeting">
          <span class="badge badge-indigo">Aesthete Workspace</span>
          <span style="font-size:0.85rem;color:var(--text-tertiary);">${greeting}, Learner</span>
        </div>
        <h1 class="hero-title">Elevate Your English Mastery</h1>
        <p class="hero-desc">
          Lộ trình ngữ pháp 8 Trạm chuyên gia (SLA & CEFR) kết hợp Lặp lại ngắt quãng (SRS) và kiểm tra ghi nhớ chủ động.
        </p>
        <div class="hero-actions">
          <a href="#/lessons" class="btn btn-primary" style="background: linear-gradient(135deg, #6366f1, #a855f7); border: none;">
            🚀 Xem Lộ Trình 8 Trạm
          </a>
          <a href="#/games" class="btn btn-secondary">🎮 English Arcade</a>
          <a href="#/youtube" class="btn btn-secondary">🎬 YouTube Studio</a>
          <a href="#/listening" class="btn btn-secondary">🎧 Listening</a>
        </div>
      </div>

      <div class="hero-widget">
        <div style="font-size:0.82rem;font-weight:700;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:0.05em;">Daily XP Goal</div>
        <div style="display:flex;align-items:baseline;justify-content:space-between;">
          <span style="font-size:1.8rem;font-weight:800;font-family:var(--font-display);">${Math.min(stats.totalExercises * 15, 100)} / 100</span>
          <span style="font-size:0.85rem;font-weight:700;color:var(--color-primary);">${Math.min(Math.round((stats.totalExercises * 15 / 100) * 100), 100)}%</span>
        </div>
        <div class="progress-bar-track">
          <div class="progress-bar-fill" style="width: ${Math.min(Math.round((stats.totalExercises * 15 / 100) * 100), 100)}%;"></div>
        </div>
        <div style="font-size:0.8rem;color:var(--text-secondary);margin-top:4px;">
          Streak: <strong style="color:var(--text-primary);">${streak.current || 1} Days Active 🔥</strong>
        </div>
      </div>
    </div>

    <!-- SRS Due Alert Banner (if any) -->
    ${dueSRSTopics.length > 0 ? `
      <div class="card mb-lg" style="border-left: 4px solid var(--color-warning, #f59e0b); background: rgba(245,158,11,0.08); padding: 18px 24px;">
        <div style="display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px;">
          <div style="display:flex; align-items:center; gap:14px;">
            <span style="font-size:1.8rem;">🧠</span>
            <div>
              <h3 style="font-size:1.05rem; font-weight:800; margin-bottom:2px;">SRS Review Reminder — ${dueSRSTopics.length} Bài Cần Ôn Tập</h3>
              <p style="font-size:0.88rem; color:var(--text-secondary); margin:0;">
                Ôn tập ngắt quãng theo đường cong quên Ebbinghaus giúp giữ kiến thức dài hạn.
              </p>
            </div>
          </div>
          <a href="#/lessons/${dueSRSTopics[0].id}" class="btn btn-warning btn-sm" style="font-weight:700;">
            🔥 Ôn Bài Ngay (${dueSRSTopics[0].title})
          </a>
        </div>
      </div>
    ` : ''}

    <!-- Current Roadmap Stage Card -->
    <div class="card mb-xl" style="background: linear-gradient(135deg, rgba(99,102,241,0.1), rgba(168,85,247,0.05)); border: 1px solid var(--color-primary-light);">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:16px; margin-bottom:12px;">
        <div style="display:flex; align-items:center; gap:12px;">
          <span style="font-size:2rem;">${currentStage.icon}</span>
          <div>
            <span class="badge ${currentStage.badgeClass}">Trạm Hiện Tại (Current Stage)</span>
            <h3 style="font-size:1.25rem; font-weight:800; margin:4px 0 0 0;">${currentStage.title}: ${currentStage.englishTitle}</h3>
          </div>
        </div>
        <a href="#/lessons" class="btn btn-primary btn-sm">Xem Lộ Trình Đầy Đủ →</a>
      </div>
      <p style="font-size:0.9rem; color:var(--text-secondary); margin-bottom:14px;">${currentStage.subtitle}</p>
      <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.85rem; font-weight:700; margin-bottom:6px;">
        <span>Tiến độ Trạm: ${currentCompletedCount}/${currentStageTopics.length} Topics Mastered</span>
        <span>${currentStagePct}%</span>
      </div>
      <div class="progress-bar-track" style="height:8px;">
        <div class="progress-bar-fill emerald" style="width:${currentStagePct}%;"></div>
      </div>
    </div>

    <!-- 4 Core Skills Grid -->
    <div class="section-header">
      <div class="section-title-group">
        <span class="section-label">Core Modules</span>
        <h2>4 Skills Language Studio</h2>
      </div>
      <p class="section-subtitle">Interactive AI feedback & sound wave analysis</p>
    </div>

    <div class="skills-grid">
      <a href="#/listening" class="skill-card listening" style="text-decoration:none;">
        <div>
          <div class="skill-card-header">
            <div class="skill-icon-badge">🎧</div>
            <span class="badge badge-indigo">${skillStats.listening?.avgScore || 0}% Score</span>
          </div>
          <div class="skill-card-title">Listening Hub</div>
          <div class="skill-card-subtitle">Dictation audio player & soundwave shadow matching</div>
        </div>
        <div class="btn btn-sm btn-outline" style="align-self:flex-start;margin-top:12px;">Launch Studio →</div>
      </a>

      <a href="#/speaking" class="skill-card speaking" style="text-decoration:none;">
        <div>
          <div class="skill-card-header">
            <div class="skill-icon-badge">🗣️</div>
            <span class="badge badge-emerald">${skillStats.speaking?.avgScore || 0}% Accuracy</span>
          </div>
          <div class="skill-card-title">Speaking Studio</div>
          <div class="skill-card-subtitle">Voice recorder, cue cards & fluency evaluator</div>
        </div>
        <div class="btn btn-sm btn-outline" style="align-self:flex-start;margin-top:12px;">Launch Studio →</div>
      </a>

      <a href="#/reading" class="skill-card reading" style="text-decoration:none;">
        <div>
          <div class="skill-card-header">
            <div class="skill-icon-badge">📖</div>
            <span class="badge badge-cyan">${skillStats.reading?.avgScore || 0}% Score</span>
          </div>
          <div class="skill-card-title">Active Reading</div>
          <div class="skill-card-subtitle">Click-to-word dictionary & SQ3R passage analyzer</div>
        </div>
        <div class="btn btn-sm btn-outline" style="align-self:flex-start;margin-top:12px;">Launch Studio →</div>
      </a>

      <a href="#/writing" class="skill-card writing" style="text-decoration:none;">
        <div>
          <div class="skill-card-header">
            <div class="skill-icon-badge">✍️</div>
            <span class="badge badge-amber">${skillStats.writing?.avgScore || 0} Band</span>
          </div>
          <div class="skill-card-title">Writing Studio</div>
          <div class="skill-card-subtitle">IELTS Essay Matrix & real-time criteria evaluator</div>
        </div>
        <div class="btn btn-sm btn-outline" style="align-self:flex-start;margin-top:12px;">Launch Studio →</div>
      </a>
    </div>

    <!-- Quick Stats Overview -->
    <div class="stats-overview-grid">
      <div class="stat-box">
        <div class="stat-box-icon">
          <svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
        </div>
        <div>
          <div class="stat-box-value">${stats.topicsStarted}</div>
          <div class="stat-box-label">Topics Explored</div>
        </div>
      </div>

      <div class="stat-box">
        <div class="stat-box-icon">
          <svg class="svg-icon" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
        </div>
        <div>
          <div class="stat-box-value">${stats.totalExercises}</div>
          <div class="stat-box-label">Exercises Solved</div>
        </div>
      </div>

      <div class="stat-box">
        <div class="stat-box-icon">
          <svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
        </div>
        <div>
          <div class="stat-box-value">${stats.avgScore}%</div>
          <div class="stat-box-label">Average Accuracy</div>
        </div>
      </div>

      <div class="stat-box">
        <div class="stat-box-icon">
          <svg class="svg-icon" viewBox="0 0 24 24"><path d="M13.5 2c-1.93 0-3.5 1.57-3.5 3.5 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.93-1.57-3.5-3.5-3.5zM6.5 11c-1.93 0-3.5 1.57-3.5 3.5 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-1.93-1.57-3.5-3.5-3.5z"/></svg>
        </div>
        <div>
          <div class="stat-box-value">${stats.topicsCompleted}</div>
          <div class="stat-box-label">Mastered Units</div>
        </div>
      </div>
    </div>
  `;
}
