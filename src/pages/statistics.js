// ==========================================================================
// Statistics Page — Modern Analytics Hub
// ==========================================================================

import { StorageService } from '../services/storage-service.js';
import { LEVELS, GRAMMAR_TOPICS, getTopicsByLevel, EXERCISE_TYPES } from '../data/grammar-data.js';

export function renderStatistics() {
  const container = document.getElementById('page-container');
  if (!container) return;

  const stats = StorageService.getStats();
  const progress = StorageService.getProgress();
  const history = stats.history;
  const streak = StorageService.getStreak();

  // Compute stats per exercise type
  const typeStats = {};
  EXERCISE_TYPES.forEach(t => { typeStats[t.id] = { count: 0, correct: 0, total: 0 }; });
  history.forEach(h => {
    if (typeStats[h.type]) {
      typeStats[h.type].count++;
      typeStats[h.type].correct += h.score;
      typeStats[h.type].total += h.total;
    }
  });

  // Compute stats per level
  const levelStats = {};
  LEVELS.forEach(l => {
    const topics = getTopicsByLevel(l.id);
    const completed = topics.filter(t => progress[t.id]?.completed).length;
    levelStats[l.id] = {
      total: topics.length,
      completed,
      pct: topics.length > 0 ? Math.round((completed / topics.length) * 100) : 0,
    };
  });

  // Last 7 days activity
  const last7Days = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date(Date.now() - i * 86400000);
    const dateStr = date.toISOString().split('T')[0];
    const dayHistory = history.filter(h => h.date === dateStr);
    last7Days.push({
      label: date.toLocaleDateString('en', { weekday: 'short' }),
      count: dayHistory.length,
      score: dayHistory.length > 0
        ? Math.round(dayHistory.reduce((s, h) => s + (h.score / h.total) * 100, 0) / dayHistory.length)
        : 0,
    });
  }
  const maxDayCount = Math.max(...last7Days.map(d => d.count), 1);

  // Topic leaderboard
  const topicScores = Object.entries(progress)
    .map(([id, p]) => ({ ...p, id, topic: GRAMMAR_TOPICS.find(t => t.id === id) }))
    .filter(t => t.topic && t.exercisesDone > 0)
    .sort((a, b) => (b.score || 0) - (a.score || 0))
    .slice(0, 5);

  container.innerHTML = `
    <div class="section-header" style="margin-bottom: 24px;">
      <div class="section-title-group">
        <span class="section-label">Performance Dashboard</span>
        <h1>Learning Analytics</h1>
      </div>
      <p class="section-subtitle">Real-time metrics, mastery progress, and activity breakdown</p>
    </div>

    <!-- Metrics Row -->
    <div class="stats-overview-grid">
      <div class="stat-box">
        <div class="stat-box-icon">🔥</div>
        <div>
          <div class="stat-box-value">${streak.current} Days</div>
          <div class="stat-box-label">Current Streak</div>
        </div>
      </div>

      <div class="stat-box">
        <div class="stat-box-icon">⚡</div>
        <div>
          <div class="stat-box-value">${stats.totalExercises * 15 + stats.topicsCompleted * 100}</div>
          <div class="stat-box-label">Total XP</div>
        </div>
      </div>

      <div class="stat-box">
        <div class="stat-box-icon">🎯</div>
        <div>
          <div class="stat-box-value">${stats.avgScore}%</div>
          <div class="stat-box-label">Accuracy Rate</div>
        </div>
      </div>

      <div class="stat-box">
        <div class="stat-box-icon">⭐</div>
        <div>
          <div class="stat-box-value">${stats.topicsCompleted} / ${GRAMMAR_TOPICS.length}</div>
          <div class="stat-box-label">Units Mastered</div>
        </div>
      </div>
    </div>

    <!-- Activity & Level Breakdown -->
    <div class="workspace-layout">
      <!-- 7-Day Bar Chart -->
      <div class="card">
        <h3 style="font-size:1.1rem;margin-bottom:16px;">7-Day Activity Matrix</h3>
        <div style="display:flex;align-items:flex-end;gap:12px;height:180px;padding-top:20px;border-bottom:1px solid var(--border-subtle);margin-bottom:12px;">
          ${last7Days.map(d => {
            const hPct = Math.max(15, Math.round((d.count / maxDayCount) * 100));
            return `
              <div style="flex:1;display:flex;flex-direction:column;align-items:center;height:100%;justify-content:flex-end;">
                <span style="font-size:0.75rem;font-weight:700;color:var(--text-tertiary);margin-bottom:4px;">${d.count}</span>
                <div style="width:100%;max-width:32px;height:${hPct}%;background:var(--color-primary);border-radius:var(--radius-xs);"></div>
                <span style="font-size:0.78rem;color:var(--text-secondary);margin-top:8px;">${d.label}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Level Mastery -->
      <div class="card">
        <h3 style="font-size:1.1rem;margin-bottom:16px;">Curriculum Mastery</h3>
        <div style="display:flex;flex-direction:column;gap:14px;">
          ${LEVELS.map(l => {
            const ls = levelStats[l.id];
            return `
              <div>
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;font-size:0.88rem;">
                  <span style="font-weight:700;">${l.name}</span>
                  <span style="color:var(--text-tertiary);">${ls.completed}/${ls.total} (${ls.pct}%)</span>
                </div>
                <div class="progress-bar-track">
                  <div class="progress-bar-fill" style="width:${ls.pct}%;"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </div>
  `;
}
