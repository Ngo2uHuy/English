// ========================================
// GrammarAI — Main Entry Point & Router (Dynamic Code-Splitting)
// ========================================

import './style.css';
import { StorageService } from './services/storage-service.js';
import { renderNavbar } from './components/navbar.js';
import { renderSidebar, showSidebar, hideSidebar } from './components/sidebar.js';

// Router Cache for Dynamic Imports
const moduleCache = new Map();

async function loadPageModule(routeKey) {
  if (moduleCache.has(routeKey)) {
    return moduleCache.get(routeKey);
  }

  const pageContainer = document.getElementById('page-container');
  if (pageContainer) {
    pageContainer.innerHTML = `
      <div class="flex-center" style="min-height: 50vh; flex-direction: column; gap: 16px;">
        <div class="spinner"></div>
        <p style="color: var(--text-secondary); font-weight: 500; font-size: 0.9rem;">Loading page studio...</p>
      </div>
    `;
  }

  let modulePromise;
  switch (routeKey) {
    case 'dashboard':
      modulePromise = import('./pages/dashboard.js');
      break;
    case 'lessons':
      modulePromise = import('./pages/lessons.js');
      break;
    case 'lesson-detail':
      modulePromise = import('./pages/lesson-detail.js');
      break;
    case 'exercises':
      modulePromise = import('./pages/exercises.js');
      break;
    case 'flashcards':
      modulePromise = import('./pages/flashcards.js');
      break;
    case 'statistics':
      modulePromise = import('./pages/statistics.js');
      break;
    case 'settings':
      modulePromise = import('./pages/settings.js');
      break;
    case 'listening':
      modulePromise = import('./pages/listening.js');
      break;
    case 'speaking':
      modulePromise = import('./pages/speaking.js');
      break;
    case 'reading':
      modulePromise = import('./pages/reading.js');
      break;
    case 'writing':
      modulePromise = import('./pages/writing.js');
      break;
    case 'youtube':
      modulePromise = import('./pages/youtube.js');
      break;
    case 'games':
      modulePromise = import('./pages/games.js');
      break;
    case 'exam-center':
      modulePromise = import('./pages/exam-center.js');
      break;
    default:
      modulePromise = import('./pages/dashboard.js');
      break;
  }

  const mod = await modulePromise;
  moduleCache.set(routeKey, mod);
  return mod;
}

// ---- Initialize ----
async function init() {
  // Apply saved theme
  const theme = StorageService.getTheme();
  document.documentElement.setAttribute('data-theme', theme);

  // Initialize Supabase Cloud Sync asynchronously
  StorageService.initSupabaseSync().then(() => {
    // Re-render active route if data updated
    handleRoute();
  });

  // Global ESC key listener to close all open modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      const modals = document.querySelectorAll('#word-modal, .modal-backdrop, .modal, .game-over-modal, .game-setup-modal');
      modals.forEach(modal => {
        if (modal) modal.style.display = 'none';
      });
    }
  });

  // Global backdrop click listener to close modal when clicking outside content
  window.addEventListener('click', (e) => {
    if (e.target && (e.target.id === 'word-modal' || e.target.classList.contains('modal-backdrop'))) {
      e.target.style.display = 'none';
    }
  });

  // Start router
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

// ---- Router ----
async function handleRoute() {
  const hash = window.location.hash || '#/';
  const [path, queryString] = hash.slice(1).split('?');
  const params = new URLSearchParams(queryString || '');

  // Parse route segments
  const segments = path.split('/').filter(Boolean);
  const route = segments[0] || '';
  const subRoute = segments[1] || '';

  // Determine active page for navbar
  let activePage = route || 'dashboard';

  // Global navigation cleanup
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try { window.speechSynthesis.cancel(); } catch (e) {}
  }
  window.scrollTo(0, 0);
  document.querySelectorAll('.modal-backdrop, #word-modal, .modal').forEach(m => {
    if (m) m.style.display = 'none';
  });

  try {
    switch (route) {
      case '':
      case 'dashboard': {
        activePage = 'dashboard';
        renderNavbar(activePage);
        hideSidebar();
        const mod = await loadPageModule('dashboard');
        mod.renderDashboard();
        break;
      }

      case 'lessons': {
        activePage = 'lessons';
        renderNavbar(activePage);
        if (subRoute) {
          showSidebar();
          renderSidebar(subRoute);
          const mod = await loadPageModule('lesson-detail');
          mod.renderLessonDetail(subRoute);
        } else {
          hideSidebar();
          const level = params.get('level');
          const mod = await loadPageModule('lessons');
          mod.renderLessons(level);
        }
        break;
      }

      case 'games': {
        activePage = 'games';
        renderNavbar(activePage);
        hideSidebar();
        const gameMode = params.get('mode');
        const mod = await loadPageModule('games');
        mod.renderGamesPage(gameMode);
        break;
      }

      case 'listening': {
        activePage = 'listening';
        renderNavbar(activePage);
        hideSidebar();
        const mod = await loadPageModule('listening');
        mod.renderListeningPage();
        break;
      }

      case 'speaking': {
        activePage = 'speaking';
        renderNavbar(activePage);
        hideSidebar();
        const mod = await loadPageModule('speaking');
        mod.renderSpeakingPage();
        break;
      }

      case 'reading': {
        activePage = 'reading';
        renderNavbar(activePage);
        hideSidebar();
        const mod = await loadPageModule('reading');
        mod.renderReadingPage();
        break;
      }

      case 'writing': {
        activePage = 'writing';
        renderNavbar(activePage);
        hideSidebar();
        const mod = await loadPageModule('writing');
        mod.renderWritingPage();
        break;
      }

      case 'youtube': {
        activePage = 'youtube';
        renderNavbar(activePage);
        hideSidebar();
        const ytVideoId = params.get('v');
        const mod = await loadPageModule('youtube');
        mod.renderYouTubePage(ytVideoId);
        break;
      }

      case 'exercises': {
        activePage = 'exercises';
        renderNavbar(activePage);
        hideSidebar();
        const exerciseTopic = params.get('topic');
        const mod = await loadPageModule('exercises');
        mod.renderExercisesPage(exerciseTopic);
        break;
      }

      case 'flashcards': {
        activePage = 'flashcards';
        renderNavbar(activePage);
        hideSidebar();
        const fcTopic = params.get('topic');
        const mod = await loadPageModule('flashcards');
        mod.renderFlashcardsPage(fcTopic);
        break;
      }

      case 'statistics': {
        activePage = 'statistics';
        renderNavbar(activePage);
        hideSidebar();
        const mod = await loadPageModule('statistics');
        mod.renderStatistics();
        break;
      }

      case 'exam-center': {
        activePage = 'exam-center';
        renderNavbar(activePage);
        hideSidebar();
        const mod = await loadPageModule('exam-center');
        mod.renderExamCenterPage();
        break;
      }

      case 'settings': {
        activePage = 'settings';
        renderNavbar(activePage);
        hideSidebar();
        const mod = await loadPageModule('settings');
        mod.renderSettings();
        break;
      }

      default: {
        activePage = 'dashboard';
        renderNavbar(activePage);
        hideSidebar();
        const mod = await loadPageModule('dashboard');
        mod.renderDashboard();
        break;
      }
    }
  } catch (err) {
    console.error('Failed to load page module:', err);
    const pageContainer = document.getElementById('page-container');
    if (pageContainer) {
      pageContainer.innerHTML = `
        <div class="card p-xl flex-center" style="flex-direction: column; gap: 12px; text-align: center; margin-top: 40px;">
          <h2 style="color: var(--color-error, #ef4444);">Lỗi Tải Trang</h2>
          <p style="color: var(--text-secondary);">Không thể tải mô-đun giao diện. Vui lòng làm mới trang.</p>
          <button onclick="window.location.reload()" class="btn btn-primary btn-sm">🔄 Tải Lại Trang</button>
        </div>
      `;
    }
  }

  // Scroll to top on route change
  document.querySelector('.main-content')?.scrollTo(0, 0);
}

// Start the app
init();
