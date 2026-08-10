// ==========================================================================
// Navbar & Navigation Component — Desktop & Mobile Responsive Systems
// ==========================================================================

import { StorageService } from '../services/storage-service.js';

export function renderNavbar(activePage) {
  const navbar = document.getElementById('navbar');
  const navDrawer = document.getElementById('mobile-nav-drawer');
  const bottomNav = document.getElementById('mobile-bottom-nav');
  const backdrop = document.getElementById('sidebar-backdrop');
  if (!navbar) return;

  const theme = StorageService.getTheme();
  const stats = StorageService.getStats();
  const xp = stats.totalExercises * 15 + stats.topicsCompleted * 100 + (stats.arcadeXP || 0);

  const navItems = [
    { id: 'dashboard', href: '#/dashboard', label: 'Dashboard', icon: '<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>' },
    { id: 'lessons', href: '#/lessons', label: 'Curriculum', icon: '<path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM3.82 9L12 4.54 20.18 9 12 13.46 3.82 9zM5 13.25v3.42C6.84 17.57 9.28 18 12 18s7.16-.43 9-1.33v-3.42c-2.17 1.17-5.32 1.75-9 1.75s-6.83-.58-9-1.75z"/>' },
    { id: 'games', href: '#/games', label: 'Arcade 🎮', icon: '<path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H9v2H7v-2H5v-2h2V9h2v2h2v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3-3c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>' },
    { id: 'listening', href: '#/listening', label: 'Listening', icon: '<path d="M12 3a9 9 0 00-9 9v7c0 1.1.9 2 2 2h3v-8H5v-1a7 7 0 0114 0v1h-3v8h3c1.1 0 2-.9 2-2v-7a9 9 0 00-9-9z"/>' },
    { id: 'speaking', href: '#/speaking', label: 'Speaking', icon: '<path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>' },
    { id: 'reading', href: '#/reading', label: 'Reading', icon: '<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>' },
    { id: 'writing', href: '#/writing', label: 'Writing', icon: '<path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>' },
    { id: 'youtube', href: '#/youtube', label: 'YouTube', icon: '<path d="M21.58 7.19a2.88 2.88 0 0 0-2.03-2.03C17.76 4.6 12 4.6 12 4.6s-5.76 0-7.55.56A2.88 2.88 0 0 0 2.42 7.19 30.12 30.12 0 0 0 1.86 12a30.12 30.12 0 0 0 .56 4.81 2.88 2.88 0 0 0 2.03 2.03c1.79.56 7.55.56 7.55.56s5.76 0 7.55-.56a2.88 2.88 0 0 0 2.03-2.03A30.12 30.12 0 0 0 22.14 12a30.12 30.12 0 0 0-.56-4.81zM9.75 15.02V8.98L15 12l-5.25 3.02z"/>' },
    { id: 'exercises', href: '#/exercises', label: 'Exercises', icon: '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>' },
    { id: 'flashcards', href: '#/flashcards', label: 'Cards', icon: '<path d="M4 6h16v12H4z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7 10h10M7 14h6"/>' },
    { id: 'exam-center', href: '#/exam-center', label: 'Exam Center 📝', icon: '<path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>' },
    { id: 'scan', href: '#/scan', label: 'Scan 📷', icon: '<path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm8 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>' },
    { id: 'statistics', href: '#/statistics', label: 'Stats', icon: '<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>' }
  ];

  // 1. Render Top Desktop Navbar
  navbar.innerHTML = `
    <div class="navbar-brand" onclick="window.location.hash='#/dashboard'">
      <div class="navbar-logo-badge">A</div>
      <span class="navbar-brand-title">Aesthete</span>
      <span class="navbar-brand-tag">Suite</span>
    </div>

    <ul class="navbar-menu">
      ${navItems.map(item => `
        <li>
          <a class="navbar-link ${activePage === item.id ? 'active' : ''}" href="${item.href}">
            <svg class="svg-icon" viewBox="0 0 24 24">${item.icon}</svg>
            ${item.label}
          </a>
        </li>
      `).join('')}
    </ul>

    <div class="navbar-actions">
      <div class="nav-stats-bar">
        <div class="nav-stat-chip streak" title="Daily Streak">
          🔥 <span>${stats.currentStreak}d</span>
        </div>
        <div class="nav-stat-chip xp" title="Earned XP">
          ⚡ <span>${xp} XP</span>
        </div>
        <div class="nav-stat-chip stars" title="Mastered Topics">
          ⭐ <span>${stats.topicsCompleted}</span>
        </div>
      </div>

      <button class="icon-btn" id="theme-toggle" title="Toggle theme">${theme === 'dark' ? '<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>' : '<svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.2 19.54 10.55 20 12 20c4.97 0 9-4.03 9-9 0-4.97-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>'}</button>

      <a class="icon-btn" href="#/settings" title="Settings">
        <svg class="svg-icon" viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>
      </a>

      <button class="icon-btn mobile-menu-btn" id="mobile-menu-btn" title="Navigation Menu">
        <svg class="svg-icon" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
      </button>
    </div>
  `;

  // 2. Render Mobile Navigation Drawer Sheet
  if (navDrawer) {
    navDrawer.innerHTML = `
      <div class="mobile-drawer-header">
        <div class="navbar-brand">
          <div class="navbar-logo-badge">A</div>
          <span class="navbar-brand-title">Aesthete</span>
          <span class="navbar-brand-tag">Suite</span>
        </div>
        <button class="icon-btn" id="close-drawer-btn" title="Close Menu">✕</button>
      </div>

      <div class="mobile-drawer-stats">
        <div class="mobile-stat-box">
          <span class="stat-emoji">🔥</span>
          <span class="stat-num">${stats.currentStreak}d</span>
          <span class="stat-lbl">Streak</span>
        </div>
        <div class="mobile-stat-box">
          <span class="stat-emoji">⚡</span>
          <span class="stat-num">${xp}</span>
          <span class="stat-lbl">Total XP</span>
        </div>
        <div class="mobile-stat-box">
          <span class="stat-emoji">⭐</span>
          <span class="stat-num">${stats.topicsCompleted}</span>
          <span class="stat-lbl">Mastered</span>
        </div>
      </div>

      <div class="mobile-drawer-links">
        <div class="drawer-section-title">Navigation Hub</div>
        ${navItems.map(item => `
          <a class="mobile-drawer-link ${activePage === item.id ? 'active' : ''}" href="${item.href}">
            <svg class="svg-icon" viewBox="0 0 24 24">${item.icon}</svg>
            <span>${item.label}</span>
          </a>
        `).join('')}
      </div>

      <div class="mobile-drawer-footer">
        <button class="btn btn-secondary btn-sm style-toggle-mobile" id="theme-toggle-mobile">
          ${theme === 'dark' ? '☀️ Light Theme' : '🌙 Dark Theme'}
        </button>
        <a class="btn btn-outline btn-sm" href="#/settings">⚙️ Settings</a>
      </div>
    `;
  }

  // 3. Render Mobile Floating Bottom Navigation Bar
  if (bottomNav) {
    bottomNav.innerHTML = `
      <a class="bottom-nav-item ${activePage === 'dashboard' ? 'active' : ''}" href="#/dashboard">
        <svg class="svg-icon" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>
        <span>Home</span>
      </a>
      <a class="bottom-nav-item ${activePage === 'lessons' ? 'active' : ''}" href="#/lessons">
        <svg class="svg-icon" viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM3.82 9L12 4.54 20.18 9 12 13.46 3.82 9z"/></svg>
        <span>Lessons</span>
      </a>
      <a class="bottom-nav-item ${activePage === 'games' ? 'active' : ''}" href="#/games">
        <svg class="svg-icon" viewBox="0 0 24 24"><path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H9v2H7v-2H5v-2h2V9h2v2h2v2z"/></svg>
        <span>Arcade</span>
      </a>
      <button class="bottom-nav-item ai-btn" id="bottom-ai-trigger" title="Hỏi AI Assistant">
        <div class="ai-nav-badge">🤖</div>
        <span>Hỏi AI</span>
      </button>
      <button class="bottom-nav-item" id="bottom-menu-trigger">
        <svg class="svg-icon" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        <span>Menu</span>
      </button>
    `;
  }

  // Helper functions for Drawer & Backdrop
  const toggleDrawer = () => {
    const isDrawerOpen = navDrawer?.classList.contains('open');
    if (isDrawerOpen) {
      closeMobileDrawer();
    } else {
      openMobileDrawer();
    }
  };

  const openMobileDrawer = () => {
    navDrawer?.classList.add('open');
    backdrop?.classList.add('visible');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileDrawer = () => {
    navDrawer?.classList.remove('open');
    const sidebar = document.getElementById('sidebar');
    if (!sidebar?.classList.contains('open')) {
      backdrop?.classList.remove('visible');
      document.body.style.overflow = '';
    }
  };

  // Event Listeners
  const themeToggle = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');

  const switchTheme = () => {
    const current = StorageService.getTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    StorageService.setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    renderNavbar(activePage);
  };

  themeToggle?.addEventListener('click', switchTheme);
  themeToggleMobile?.addEventListener('click', switchTheme);

  document.getElementById('mobile-menu-btn')?.addEventListener('click', toggleDrawer);
  document.getElementById('bottom-menu-trigger')?.addEventListener('click', toggleDrawer);
  document.getElementById('bottom-ai-trigger')?.addEventListener('click', () => {
    closeMobileDrawer();
    const chatWindow = document.getElementById('ai-chat-window');
    if (chatWindow) {
      chatWindow.classList.toggle('open');
      if (chatWindow.classList.contains('open')) {
        document.getElementById('ai-chat-input')?.focus();
      }
    }
  });
  document.getElementById('close-drawer-btn')?.addEventListener('click', closeMobileDrawer);
  backdrop?.addEventListener('click', () => {
    closeMobileDrawer();
    const sidebar = document.getElementById('sidebar');
    sidebar?.classList.remove('open');
  });

  // Auto close drawer when tapping any link inside mobile drawer
  navDrawer?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileDrawer);
  });
}
