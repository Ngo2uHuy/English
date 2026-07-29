// ==========================================================================
// Sidebar Component — Modern Accordion Curriculum Navigation
// ==========================================================================

import { LEVELS, getTopicsByLevel } from '../data/grammar-data.js';
import { StorageService } from '../services/storage-service.js';

export function renderSidebar(activeTopicId = null) {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  const progress = StorageService.getProgress();

  let html = `<div class="sidebar-section">
    <div class="sidebar-section-title">Curriculum Modules</div>`;

  LEVELS.forEach(level => {
    const topics = getTopicsByLevel(level.id);
    const completedCount = topics.filter(t => progress[t.id]?.completed).length;
    const isOpen = activeTopicId ? topics.some(t => t.id === activeTopicId) : level.id === 'beginner';

    const badgeColorMap = {
      beginner: 'emerald',
      intermediate: 'indigo',
      advanced: 'amber',
      lexicon: 'cyan',
      toeic: 'rose'
    };
    const badgeClass = badgeColorMap[level.id] || 'indigo';

    html += `
      <div class="sidebar-group">
        <div class="sidebar-group-header ${isOpen ? 'open' : ''}" data-level="${level.id}">
          <span style="display:flex;align-items:center;gap:8px;">
            <span>${level.name}</span>
            <span class="badge badge-${badgeClass}" style="font-size:0.65rem;padding:2px 7px;">${completedCount}/${topics.length}</span>
          </span>
          <span class="chevron">▸</span>
        </div>
        <ul class="sidebar-items ${isOpen ? 'open' : ''}" id="sidebar-items-${level.id}">
          ${topics.map(topic => {
            const tp = progress[topic.id];
            const dotClass = tp?.completed ? 'completed' : tp?.exercisesDone > 0 ? 'in-progress' : '';
            return `<li>
              <a class="sidebar-item ${topic.id === activeTopicId ? 'active' : ''}" href="#/lessons/${topic.id}">
                <span class="progress-dot ${dotClass}"></span>
                <span style="truncate">${topic.title}</span>
              </a>
            </li>`;
          }).join('')}
        </ul>
      </div>`;
  });

  html += `</div>`;
  sidebar.innerHTML = html;

  // Toggle group accordion
  sidebar.querySelectorAll('.sidebar-group-header').forEach(header => {
    header.addEventListener('click', () => {
      const level = header.dataset.level;
      const items = document.getElementById(`sidebar-items-${level}`);
      header.classList.toggle('open');
      items?.classList.toggle('open');
    });
  });
}

export function hideSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar?.classList.add('collapsed');
}

export function showSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar?.classList.remove('collapsed');
}
