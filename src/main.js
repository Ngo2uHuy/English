// ========================================
// GrammarAI — Main Entry Point & Router
// ========================================

import './style.css';
import { StorageService } from './services/storage-service.js';
import { renderNavbar } from './components/navbar.js';
import { renderSidebar, showSidebar, hideSidebar } from './components/sidebar.js';
import { renderDashboard } from './pages/dashboard.js';
import { renderLessons } from './pages/lessons.js';
import { renderLessonDetail } from './pages/lesson-detail.js';
import { renderExercisesPage } from './pages/exercises.js';
import { renderFlashcardsPage } from './pages/flashcards.js';
import { renderStatistics } from './pages/statistics.js';
import { renderSettings } from './pages/settings.js';
import { renderListeningPage } from './pages/listening.js';
import { renderSpeakingPage } from './pages/speaking.js';
import { renderReadingPage } from './pages/reading.js';
import { renderWritingPage } from './pages/writing.js';
import { renderYouTubePage } from './pages/youtube.js';
import { renderGamesPage } from './pages/games.js';

// ---- Initialize ----
function init() {
  // Apply saved theme
  const theme = StorageService.getTheme();
  document.documentElement.setAttribute('data-theme', theme);

  // Start router
  window.addEventListener('hashchange', handleRoute);
  handleRoute();
}

// ---- Router ----
function handleRoute() {
  const hash = window.location.hash || '#/';
  const [path, queryString] = hash.slice(1).split('?');
  const params = new URLSearchParams(queryString || '');

  // Parse route segments
  const segments = path.split('/').filter(Boolean);
  const route = segments[0] || '';
  const subRoute = segments[1] || '';

  // Determine active page for navbar
  let activePage = route || 'dashboard';

  // Close mobile sidebar on navigation
  document.getElementById('sidebar')?.classList.remove('open');

  // Route handling
  switch (route) {
    case '':
      activePage = 'dashboard';
      renderNavbar(activePage);
      hideSidebar();
      renderDashboard();
      break;

    case 'lessons':
      activePage = 'lessons';
      renderNavbar(activePage);
      if (subRoute) {
        // Lesson detail page
        showSidebar();
        renderSidebar(subRoute);
        renderLessonDetail(subRoute);
      } else {
        // Lessons list
        hideSidebar();
        const level = params.get('level');
        renderLessons(level);
      }
      break;

    case 'games':
      activePage = 'games';
      renderNavbar(activePage);
      hideSidebar();
      const gameMode = params.get('mode');
      renderGamesPage(gameMode);
      break;

    case 'listening':
      activePage = 'listening';
      renderNavbar(activePage);
      hideSidebar();
      renderListeningPage();
      break;

    case 'speaking':
      activePage = 'speaking';
      renderNavbar(activePage);
      hideSidebar();
      renderSpeakingPage();
      break;

    case 'reading':
      activePage = 'reading';
      renderNavbar(activePage);
      hideSidebar();
      renderReadingPage();
      break;

    case 'writing':
      activePage = 'writing';
      renderNavbar(activePage);
      hideSidebar();
      renderWritingPage();
      break;

    case 'youtube':
      activePage = 'youtube';
      renderNavbar(activePage);
      hideSidebar();
      const ytVideoId = params.get('v');
      renderYouTubePage(ytVideoId);
      break;

    case 'exercises':
      activePage = 'exercises';
      renderNavbar(activePage);
      hideSidebar();
      const exerciseTopic = params.get('topic');
      renderExercisesPage(exerciseTopic);
      break;

    case 'flashcards':
      activePage = 'flashcards';
      renderNavbar(activePage);
      hideSidebar();
      const fcTopic = params.get('topic');
      renderFlashcardsPage(fcTopic);
      break;

    case 'statistics':
      activePage = 'statistics';
      renderNavbar(activePage);
      hideSidebar();
      renderStatistics();
      break;

    case 'settings':
      activePage = 'settings';
      renderNavbar(activePage);
      hideSidebar();
      renderSettings();
      break;

    default:
      activePage = 'dashboard';
      renderNavbar(activePage);
      hideSidebar();
      renderDashboard();
      break;
  }

  // Scroll to top on route change
  document.querySelector('.main-content')?.scrollTo(0, 0);
}

// Start the app
init();
