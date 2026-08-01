import fs from 'fs';

const code = `// ==========================================================================
// Games Page — English Learning Arcade Hub & Interactive Mini-Games
// Integrated with Centralized Vocabulary Databank (5,200+ TOEIC, IELTS, 6k Vocab)
// ==========================================================================

import { StorageService } from '../services/storage-service.js';
import { SoundService } from '../services/sound-service.js';
import { IpaService } from '../services/ipa-service.js';
import { VOCAB_BANK, getVocabPool, getVocabStats, getAvailableCategories } from '../data/vocab-bank.js';

let gamesDataModule = null;
async function getGamesDataModule() {
  if (!gamesDataModule) {
    gamesDataModule = await import('../data/games-data.js');
  }
  return gamesDataModule;
}

let currentGame = null; // 'speed-match' | 'sentence-dash' | 'error-hunter' | 'phoneme-blitz' | 'synonym-antonym' | 'irregular-verbs' | null
let selectedQuestionCount = 10; // Default 10 questions/challenges

// Speed Word Match Configuration State
let selectedVocabPool = 'all'; // 'all' | 'toeic' | 'ielts' | 'common'
let selectedVocabLevel = 'all'; // 'all' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'
let selectedMatchGameMode = 'count'; // 'count' | 'time' | 'marathon'

/**
 * Text-to-Speech Pronunciation Helper
 */
function speakEnglishWord(text) {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.warn("Speech Synthesis error:", e);
    }
  }
}

export function renderGamesPage(selectedMode = null) {
  const container = document.getElementById('page-container');
  if (!container) return;

  if (selectedMode) {
    currentGame = selectedMode;
  } else {
    currentGame = null;
  }

  if (currentGame) {
    renderActiveGame(container, currentGame, false);
  } else {
    renderArcadeHub(container);
  }
}

// --------------------------------------------------------------------------
// Arcade Hub Overview Page
// --------------------------------------------------------------------------
function renderArcadeHub(container) {
  const stats = StorageService.getStats();
  const gameStats = StorageService.getGameStats();
  const highScores = gameStats.highScores || {};
  const isMuted = SoundService.isMuted();
  const vocabStats = getVocabStats();

  container.innerHTML = \`
    <div class="arcade-container animate-fade-in">
      <!-- Arcade Header -->
      <div class="arcade-header">
        <div class="arcade-title-group">
          <span class="arcade-badge">KHO TỪ VỰNG DATABANK (\${vocabStats.total.toLocaleString()} TỪ)</span>
          <h1 class="arcade-title">English Learning Arcade 🎮</h1>
          <p class="arcade-subtitle">Rèn luyện phản xạ ngôn ngữ siêu tốc với kho <strong>5.200+ từ vựng TOEIC, IELTS & 6.000 từ thông dụng</strong>!</p>
        </div>

        <div class="arcade-top-stats">
          <div class="arcade-stat-pill">
            <span class="pill-label">Arcade XP</span>
            <span class="pill-value gold">⚡ \${gameStats.totalXP || 0} XP</span>
          </div>
          <div class="arcade-stat-pill">
            <span class="pill-label">Đã chơi</span>
            <span class="pill-value">🎮 \${gameStats.totalGames || 0} trận</span>
          </div>
          <button class="arcade-sound-btn \${isMuted ? 'muted' : ''}" id="toggle-sound-btn" title="Bật/Tắt Âm Thanh Game">
            \${isMuted ? '🔇 Tắt âm' : '🔊 Âm thanh'}
          </button>
        </div>
      </div>

      <!-- Cognitive Memory Banner -->
      <div class="arcade-memory-banner">
        <div class="memory-banner-header">
          <span style="font-size: 1.5rem;">🧠</span>
          <h2 class="memory-banner-title">Phương Pháp Ghi Nhớ Ngôn Ngữ Hiệu Quả (Cognitive Memory Systems)</h2>
        </div>
        <div class="memory-methods-grid">
          <div class="memory-card-mini">
            <div class="memory-card-icon">⚡</div>
            <div class="memory-card-title">Active Recall (Gợi Nhớ Chủ Động)</div>
            <div class="memory-card-desc">Ép não bộ kích hoạt vùng Broca để truy xuất nghĩa dưới 3s thay vì đọc thụ động.</div>
          </div>
          <div class="memory-card-mini">
            <div class="memory-card-icon">🧩</div>
            <div class="memory-card-title">Chunking Method (Ghi Nhớ Theo Cụm)</div>
            <div class="memory-card-desc">Nhóm từ thành các cụm danh/động từ giúp ghi nhớ cấu trúc câu tự nhiên như người bản xứ.</div>
          </div>
          <div class="memory-card-mini">
            <div class="memory-card-icon">🔍</div>
            <div class="memory-card-title">Contrastive Learning (Phân Tích Lỗi)</div>
            <div class="memory-card-desc">Đối chiếu trực tiếp giữa câu sai và câu đúng để hình thành cơ chế tự sửa lỗi ngữ pháp.</div>
          </div>
          <div class="memory-card-mini">
            <div class="memory-card-icon">🔁</div>
            <div class="memory-card-title">Spaced Repetition (Lặp Ngắt Quãng)</div>
            <div class="memory-card-desc">Ôn tập lại sau 24h & 7 ngày để chuyển từ vựng từ ngắn hạn sang trí nhớ bền vững 95%.</div>
          </div>
        </div>
      </div>

      <!-- Mini-Game Cards Grid -->
      <div class="arcade-grid">
        <!-- Game 1: Speed Word Match (UPDATED DATABANK) -->
        <div class="arcade-card neon-purple" data-mode="speed-match">
          <div class="card-icon-wrapper">
            <span class="game-emoji">⚡</span>
          </div>
          <div class="card-content">
            <div class="game-tag">\${vocabStats.total.toLocaleString()}+ Từ Vựng Match</div>
            <h2 class="game-name">Speed Word Match</h2>
            <p class="game-desc">Ghép các cặp từ Anh-Việt siêu tốc. Lựa chọn kho từ <strong>TOEIC (\${vocabStats.toeic}), IELTS (\${vocabStats.ielts}), 6.000 Từ Thông Dụng (\${vocabStats.common})</strong> với phát âm chuẩn bản xứ!</p>
            <div class="game-card-footer">
              <span class="high-score">🏆 Kỷ lục: <strong>\${highScores['speed-match'] || 0} điểm</strong></span>
              <button class="play-btn">Chơi ngay ➔</button>
            </div>
          </div>
        </div>

        <!-- Game 2: Sentence Builder Dash -->
        <div class="arcade-card neon-blue" data-mode="sentence-dash">
          <div class="card-icon-wrapper">
            <span class="game-emoji">🚀</span>
          </div>
          <div class="card-content">
            <div class="game-tag">3.000+ Câu Ngữ Pháp</div>
            <h2 class="game-name">Sentence Builder Dash</h2>
            <p class="game-desc">Xếp các từ đảo trật tự thành câu hoàn chỉnh đúng ngữ pháp trong kho 3000+ câu thử thách.</p>
            <div class="game-card-footer">
              <span class="high-score">🏆 Kỷ lục: <strong>\${highScores['sentence-dash'] || 0} điểm</strong></span>
              <button class="play-btn">Chơi ngay ➔</button>
            </div>
          </div>
        </div>

        <!-- Game 3: Error Hunter -->
        <div class="arcade-card neon-amber" data-mode="error-hunter">
          <div class="card-icon-wrapper">
            <span class="game-emoji">🔍</span>
          </div>
          <div class="card-content">
            <div class="game-tag">3.000+ Bẫy Ngữ Pháp</div>
            <h2 class="game-name">Error Hunter (Grammar Trap)</h2>
            <p class="game-desc">Phát hiện từ/cụm từ sai ngữ pháp duy nhất trong câu và sửa lại đúng chuẩn TOEIC từ kho 3000+ bẫy.</p>
            <div class="game-card-footer">
              <span class="high-score">🏆 Kỷ lục: <strong>\${highScores['error-hunter'] || 0} điểm</strong></span>
              <button class="play-btn">Chơi ngay ➔</button>
            </div>
          </div>
        </div>

        <!-- Game 4: Phoneme Blitz -->
        <div class="arcade-card neon-green" data-mode="phoneme-blitz">
          <div class="card-icon-wrapper">
            <span class="game-emoji">🎧</span>
          </div>
          <div class="card-content">
            <div class="game-tag">3.000+ Phản Xạ Âm Thanh</div>
            <h2 class="game-name">Phoneme Blitz</h2>
            <p class="game-desc">Lắng nghe phát âm và chọn chính xác từ vựng dễ nhầm lẫn (Minimal Pairs) trong 3000+ thử thách âm thanh.</p>
            <div class="game-card-footer">
              <span class="high-score">🏆 Kỷ lục: <strong>\${highScores['phoneme-blitz'] || 0} điểm</strong></span>
              <button class="play-btn">Chơi ngay ➔</button>
            </div>
          </div>
        </div>

        <!-- Game 5: Synonym & Antonym Challenge -->
        <div class="arcade-card neon-rose" data-mode="synonym-antonym">
          <div class="card-icon-wrapper">
            <span class="game-emoji">🔄</span>
          </div>
          <div class="card-content">
            <div class="game-tag">3.000+ Đồng & Trái Nghĩa</div>
            <h2 class="game-name">Synonym & Antonym Challenge</h2>
            <p class="game-desc">Đấu trí phân biệt từ đồng nghĩa và trái nghĩa nhanh như chớp từ kho 3000+ thử thách từ vựng!</p>
            <div class="game-card-footer">
              <span class="high-score">🏆 Kỷ lục: <strong>\${highScores['synonym-antonym'] || 0} điểm</strong></span>
              <button class="play-btn">Chơi ngay ➔</button>
            </div>
          </div>
        </div>

        <!-- Game 6: Irregular Verbs Master -->
        <div class="arcade-card neon-amber" data-mode="irregular-verbs">
          <div class="card-icon-wrapper">
            <span class="game-emoji">📚</span>
          </div>
          <div class="card-content">
            <div class="game-tag">3.000+ Động Từ Bất Quy Tắc</div>
            <h2 class="game-name">Irregular Verbs Master</h2>
            <p class="game-desc">Chinh phục 3 dạng V1 - V2 - V3 siêu tốc với kho 3000+ biến đổi động từ bất quy tắc!</p>
            <div class="game-card-footer">
              <span class="high-score">🏆 Kỷ lục: <strong>\${highScores['irregular-verbs'] || 0} điểm</strong></span>
              <button class="play-btn">Chơi ngay ➔</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`;

  // Attach Event Listeners
  document.getElementById('toggle-sound-btn')?.addEventListener('click', () => {
    const muted = SoundService.toggleMute();
    renderArcadeHub(container);
  });

  container.querySelectorAll('.arcade-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const mode = card.dataset.mode;
      if (mode) {
        window.location.hash = \`#/games?mode=\${mode}\`;
        renderGamesPage(mode);
      }
    });
  });
}

// --------------------------------------------------------------------------
// Active Game Dispatcher
// --------------------------------------------------------------------------
async function renderActiveGame(container, mode, directStart = false) {
  if (!directStart) {
    renderGameSetup(container, mode);
    return;
  }

  container.innerHTML = \`<div class="card" style="text-align:center;padding:48px;color:var(--text-secondary);">Đang khởi tạo trò chơi...</div>\`;
  const gamesData = await getGamesDataModule();

  switch (mode) {
    case 'speed-match':
      initSpeedMatch(container, selectedQuestionCount, gamesData);
      break;
    case 'sentence-dash':
      initSentenceDash(container, selectedQuestionCount, gamesData);
      break;
    case 'error-hunter':
      initErrorHunter(container, selectedQuestionCount, gamesData);
      break;
    case 'phoneme-blitz':
      initPhonemeBlitz(container, selectedQuestionCount, gamesData);
      break;
    case 'synonym-antonym':
      initSynonymAntonym(container, selectedQuestionCount, gamesData);
      break;
    case 'irregular-verbs':
      initIrregularVerbs(container, selectedQuestionCount, gamesData);
      break;
    default:
      renderArcadeHub(container);
      break;
  }
}

function getGameMemoryTip(mode) {
  switch (mode) {
    case 'speed-match':
      return {
        title: '🧠 Phản Xạ 3 Giây & Active Recall (Gợi Nhớ Chủ Động)',
        desc: 'Tập trung nhìn từ Tiếng Anh và gợi nhớ ngay nghĩa Việt trong <strong>dưới 3 giây</strong> mà không cần tra từ điển. Kỹ thuật này kích hoạt vùng vỏ toàn não Broca, biến từ vựng thụ động thành phản xạ chủ động.'
      };
    case 'sentence-dash':
      return {
        title: '🧠 Kỹ Thuật Chunking (Ghi Nhớ Theo Cụm Câu)',
        desc: 'Thay vì ghép từng từ đơn lẻ, hãy nhóm các từ thành <strong>cụm danh từ (Noun Phrases)</strong> và <strong>cụm động từ (Verb Phrases)</strong>. Phương pháp Chunking giúp bộ nhớ ngắn hạn tiếp thu cấu trúc ngữ pháp tự nhiên như người bản xứ.'
      };
    case 'error-hunter':
      return {
        title: '🧠 Phân Tích Lỗi Sai Chủ Động (Contrastive Error Analysis)',
        desc: 'Khi phát hiện bẫy ngữ pháp, hãy đọc kỹ phần <strong>Lời giải thích (Explanation)</strong>. Việc đối chiếu câu sai với câu đúng giúp bộ nhớ xây dựng cơ chế tự sửa lỗi (Self-Correction) khi làm bài thi TOEIC/IELTS thực tế.'
      };
    case 'phoneme-blitz':
      return {
        title: '🧠 Phân Biệt Âm Thanh Đối Lập (Minimal Pairs Discrimination)',
        desc: 'Lắng nghe phát âm và chọn đúng từ giữa các cặp từ phát âm gần giống nhau để rèn luyện đôi tai cảm nhận ngữ âm chuẩn.'
      };
    case 'synonym-antonym':
      return {
        title: '🧠 Đồ Thị Liên Tưởng Ngữ Nghĩa (Semantic Mapping)',
        desc: 'Nối từ mới với các từ đồng nghĩa/trái nghĩa đã biết. Việc liên kết thông tin mới vào mạng lưới kiến thức cũ giúp tăng khả năng ghi nhớ lên gấp 3 lần.'
      };
    case 'irregular-verbs':
      return {
        title: '🧠 Nhận Diện Quy Luật Biến Đổi Động Từ (Pattern Grouping)',
        desc: 'Ghi nhớ động từ bất quy tắc theo nhóm quy luật âm tiết (như sing-sang-sung, ring-rang-rung). Phương pháp này giúp hệ thống hóa kho từ vựng V1-V2-V3 một cách logic.'
      };
    default:
      return {
        title: '🧠 Lặp Lại Ngắt Quãng (Spaced Repetition)',
        desc: 'Ôn tập lại lượt chơi sau 24 giờ và 7 ngày để chuyển toàn bộ từ vựng và câu từ trí nhớ ngắn hạn sang trí nhớ dài hạn.'
      };
  }
}

// --------------------------------------------------------------------------
// Game Question Count / Setup Modal
// --------------------------------------------------------------------------
function renderGameSetup(container, mode) {
  const modeName = getModeName(mode);
  const emoji = getGameEmoji(mode);
  const memoryTip = getGameMemoryTip(mode);
  const vocabStats = getVocabStats();

  if (mode === 'speed-match') {
    // Specialized Vocabulary Databank Setup for Speed Word Match
    renderSpeedMatchSetup(container, modeName, emoji, memoryTip, vocabStats);
    return;
  }

  // Standard Setup for Other Games
  const options = [5, 10, 15, 20, 30];

  container.innerHTML = \`
    <div class="game-setup-modal animate-scale-in">
      <div class="setup-header">
        <span class="setup-emoji">\${emoji}</span>
        <h2 class="setup-title">\${modeName}</h2>
        <p class="setup-subtitle">Tùy chỉnh lượt chơi của bạn trước khi bắt đầu:</p>
      </div>

      <div class="game-memory-tip-box">
        <div class="game-memory-tip-header">
          \${memoryTip.title}
        </div>
        <div class="game-memory-tip-content">
          \${memoryTip.desc}
        </div>
      </div>

      <div class="question-count-picker" style="margin: 24px 0;">
        <p style="font-weight: 700; margin-bottom: 12px; color: var(--text-primary);">🎯 Chọn số lượng câu hỏi / thử thách:</p>
        <div class="question-count-options">
          \${options.map(opt => \`
            <button class="count-opt-btn \${selectedQuestionCount === opt ? 'active' : ''}" data-count="\${opt}">
              \${opt} câu
            </button>
          \`).join('')}
        </div>
      </div>

      <div class="game-over-actions" style="margin-top: 28px;">
        <button class="restart-game-btn" id="start-game-btn">
          🚀 Bắt đầu chơi (\${selectedQuestionCount} câu)
        </button>
        <button class="exit-arcade-btn" id="back-arcade-btn">
          🏠 Về Arcade Hub
        </button>
      </div>
    </div>
  \`;

  container.querySelectorAll('.count-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.count-opt-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedQuestionCount = parseInt(btn.dataset.count, 10);
      const startBtn = document.getElementById('start-game-btn');
      if (startBtn) startBtn.textContent = \`🚀 Bắt đầu chơi (\${selectedQuestionCount} câu)\`;
    });
  });

  document.getElementById('start-game-btn')?.addEventListener('click', () => {
    renderActiveGame(container, mode, true);
  });

  document.getElementById('back-arcade-btn')?.addEventListener('click', () => {
    window.location.hash = '#/games';
    renderGamesPage(null);
  });
}

/**
 * Specialized Setup Modal for Speed Word Match
 */
function renderSpeedMatchSetup(container, modeName, emoji, memoryTip, vocabStats) {
  // Compute match count for current selections
  const currentPoolItems = getVocabPool({ pool: selectedVocabPool, level: selectedVocabLevel });
  const poolCountText = currentPoolItems.length.toLocaleString();

  container.innerHTML = \`
    <div class="game-setup-modal animate-scale-in" style="max-width: 680px;">
      <div class="setup-header" style="margin-bottom: 20px;">
        <span class="setup-emoji">\${emoji}</span>
        <h2 class="setup-title">\${modeName}</h2>
        <p class="setup-subtitle">Chọn <strong>Kho từ vựng luyện tập (TOEIC, IELTS, 6.000 từ thông dụng)</strong> & chế độ chơi:</p>
      </div>

      <!-- Vocab Pool Picker -->
      <div class="setup-section" style="margin-bottom: 20px; text-align: left;">
        <label style="font-weight: 700; font-size: 0.95rem; color: var(--text-primary); display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <span>📚 Kho Từ Vựng Luyện Tập (Vocabulary Pool):</span>
          <span style="font-size: 0.85rem; font-weight: 600; color: #a855f7; background: rgba(168,85,247,0.1); padding: 4px 12px; border-radius: 20px;">
            ⚡ Đã sẵn sàng: <strong>\${poolCountText} từ</strong>
          </span>
        </label>
        <div class="vocab-pool-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
          <button class="vocab-pool-btn \${selectedVocabPool === 'all' ? 'active' : ''}" data-pool="all" style="padding: 14px; text-align: left; border-radius: 12px; cursor: pointer; border: 2px solid var(--border-subtle); background: var(--bg-secondary);">
            <div style="font-weight: 800; font-size: 1rem; color: #a855f7; margin-bottom: 2px;">🌟 Tất Cả Kho Từ Vựng</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary);">Tổng hợp \${vocabStats.total.toLocaleString()} từ vựng đa dạng</div>
          </button>

          <button class="vocab-pool-btn \${selectedVocabPool === 'toeic' ? 'active' : ''}" data-pool="toeic" style="padding: 14px; text-align: left; border-radius: 12px; cursor: pointer; border: 2px solid var(--border-subtle); background: var(--bg-secondary);">
            <div style="font-weight: 800; font-size: 1rem; color: #3b82f6; margin-bottom: 2px;">💼 TOEIC Essential</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary);">\${vocabStats.toeic.toLocaleString()} từ thương mại, công sở</div>
          </button>

          <button class="vocab-pool-btn \${selectedVocabPool === 'ielts' ? 'active' : ''}" data-pool="ielts" style="padding: 14px; text-align: left; border-radius: 12px; cursor: pointer; border: 2px solid var(--border-subtle); background: var(--bg-secondary);">
            <div style="font-weight: 800; font-size: 1rem; color: #10b981; margin-bottom: 2px;">🎓 IELTS Academic</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary);">\${vocabStats.ielts.toLocaleString()} từ học thuật, essay topic</div>
          </button>

          <button class="vocab-pool-btn \${selectedVocabPool === 'common' ? 'active' : ''}" data-pool="common" style="padding: 14px; text-align: left; border-radius: 12px; cursor: pointer; border: 2px solid var(--border-subtle); background: var(--bg-secondary);">
            <div style="font-weight: 800; font-size: 1rem; color: #f59e0b; margin-bottom: 2px;">🔤 6.000 Từ Thông Dụng</div>
            <div style="font-size: 0.8rem; color: var(--text-secondary);">\${vocabStats.common.toLocaleString()} từ Oxford A1 ➔ C2</div>
          </button>
        </div>
      </div>

      <!-- Level Filter & Play Mode Row -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 16px; margin-bottom: 20px; text-align: left;">
        <div>
          <label style="font-weight: 700; font-size: 0.9rem; color: var(--text-primary); display: block; margin-bottom: 8px;">🎯 Trình Độ (CEFR Level):</label>
          <select class="input-field" id="vocab-level-select" style="width: 100%; font-weight: 600;">
            <option value="all" \${selectedVocabLevel === 'all' ? 'selected' : ''}>🌐 Tất cả cấp độ (A1 - C2)</option>
            <option value="A1" \${selectedVocabLevel === 'A1' ? 'selected' : ''}>🐣 A1 - Sơ Cấp (Elementary)</option>
            <option value="A2" \${selectedVocabLevel === 'A2' ? 'selected' : ''}>🐥 A2 - Tiền Trung Cấp (Pre-Inter)</option>
            <option value="B1" \${selectedVocabLevel === 'B1' ? 'selected' : ''}>🦅 B1 - Trung Cấp (Intermediate)</option>
            <option value="B2" \${selectedVocabLevel === 'B2' ? 'selected' : ''}>🚀 B2 - Trên Trung Cấp (Upper-Inter)</option>
            <option value="C1" \${selectedVocabLevel === 'C1' ? 'selected' : ''}>💎 C1 - Cao Cấp (Advanced)</option>
            <option value="C2" \${selectedVocabLevel === 'C2' ? 'selected' : ''}>👑 C2 - Thành Thạo (Mastery)</option>
          </select>
        </div>

        <div>
          <label style="font-weight: 700; font-size: 0.9rem; color: var(--text-primary); display: block; margin-bottom: 8px;">🎮 Chế Độ Thử Thách:</label>
          <select class="input-field" id="match-mode-select" style="width: 100%; font-weight: 600;">
            <option value="count" \${selectedMatchGameMode === 'count' ? 'selected' : ''}>🎯 Theo Lượt (\${selectedQuestionCount} cặp từ)</option>
            <option value="time" \${selectedMatchGameMode === 'time' ? 'selected' : ''}>⏱️ Time Attack (60 Giây Tính Giờ)</option>
            <option value="marathon" \${selectedMatchGameMode === 'marathon' ? 'selected' : ''}>⚡ Marathon (Chơi Vô Tận - 3 Mạng)</option>
          </select>
        </div>
      </div>

      <!-- Question Count Picker (if count mode) -->
      <div id="count-picker-box" style="margin-bottom: 24px; text-align: left; display: \${selectedMatchGameMode === 'count' ? 'block' : 'none'};">
        <label style="font-weight: 700; font-size: 0.9rem; color: var(--text-primary); display: block; margin-bottom: 8px;">🔢 Số Cặp Từ / Trận:</label>
        <div class="question-count-options">
          \${[5, 10, 15, 20, 30].map(opt => \`
            <button class="count-opt-btn \${selectedQuestionCount === opt ? 'active' : ''}" data-count="\${opt}">
              \${opt} cặp
            </button>
          \`).join('')}
        </div>
      </div>

      <!-- Memory Tip Box -->
      <div class="game-memory-tip-box" style="margin-bottom: 24px;">
        <div class="game-memory-tip-header">\${memoryTip.title}</div>
        <div class="game-memory-tip-content">\${memoryTip.desc}</div>
      </div>

      <!-- Actions -->
      <div class="game-over-actions">
        <button class="restart-game-btn" id="start-speed-game-btn" style="font-size: 1.05rem; padding: 14px 28px;">
          🚀 Bắt Đầu Luyện Tập Từ Vựng
        </button>
        <button class="exit-arcade-btn" id="back-arcade-btn">
          🏠 Về Arcade Hub
        </button>
      </div>
    </div>
  \`;

  // Attach Pool Selector Listener
  container.querySelectorAll('.vocab-pool-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.vocab-pool-btn').forEach(b => {
        b.classList.remove('active');
        b.style.borderColor = 'var(--border-subtle)';
        b.style.background = 'var(--bg-secondary)';
      });
      btn.classList.add('active');
      btn.style.borderColor = '#a855f7';
      btn.style.background = 'rgba(168,85,247,0.12)';
      selectedVocabPool = btn.dataset.pool;
      renderSpeedMatchSetup(container, modeName, emoji, memoryTip, vocabStats);
    });
  });

  // Attach Level Change
  document.getElementById('vocab-level-select')?.addEventListener('change', (e) => {
    selectedVocabLevel = e.target.value;
    renderSpeedMatchSetup(container, modeName, emoji, memoryTip, vocabStats);
  });

  // Attach Mode Change
  document.getElementById('match-mode-select')?.addEventListener('change', (e) => {
    selectedMatchGameMode = e.target.value;
    const box = document.getElementById('count-picker-box');
    if (box) box.style.display = selectedMatchGameMode === 'count' ? 'block' : 'none';
  });

  // Attach Count Buttons
  container.querySelectorAll('.count-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.count-opt-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedQuestionCount = parseInt(btn.dataset.count, 10);
    });
  });

  // Start Game
  document.getElementById('start-speed-game-btn')?.addEventListener('click', () => {
    renderActiveGame(container, 'speed-match', true);
  });

  document.getElementById('back-arcade-btn')?.addEventListener('click', () => {
    window.location.hash = '#/games';
    renderGamesPage(null);
  });
}

// ==========================================================================
// GAME 1: SPEED WORD MATCH (CENTRALIZED VOCABULARY BANK IMPLEMENTATION)
// ==========================================================================
function initSpeedMatch(container, targetPairsCount = selectedQuestionCount, gamesData) {
  let score = 0;
  let combo = 0;
  let maxCombo = 0;
  let matchedPairs = 0;
  let wrongAttempts = 0;
  let selectedCards = [];
  const playedWordsHistory = [];

  const startTime = Date.now();

  // Load words from Centralized Vocabulary Databank!
  let allPoolItems = getVocabPool({ pool: selectedVocabPool, level: selectedVocabLevel });
  if (!allPoolItems || allPoolItems.length === 0) {
    allPoolItems = getVocabPool({ pool: 'all', level: 'all' });
  }

  // Shuffle dataset
  const shuffledItems = [...allPoolItems].sort(() => 0.5 - Math.random());

  let targetCount = targetPairsCount;
  if (selectedMatchGameMode === 'time' || selectedMatchGameMode === 'marathon') {
    targetCount = Math.min(200, shuffledItems.length);
  }

  const gamePool = shuffledItems.slice(0, Math.min(targetCount, shuffledItems.length));

  let poolIndex = 0;
  let currentGridMatched = 0;
  let timerInterval = null;
  let timeLeft = 60; // 60s for Time Attack mode

  function loadActiveGrid() {
    const activePairs = gamePool.slice(poolIndex, poolIndex + 6);
    let cards = [];
    activePairs.forEach((pair, idx) => {
      cards.push({ id: \`en-\${idx}\`, pairId: idx, text: pair.en, type: 'en', item: pair });
      cards.push({ id: \`vn-\${idx}\`, pairId: idx, text: pair.vn, type: 'vn', item: pair });
    });
    cards.sort(() => 0.5 - Math.random());
    return { activePairs, cards };
  }

  let { activePairs, cards } = loadActiveGrid();

  // Setup Timer if Time Attack mode
  if (selectedMatchGameMode === 'time') {
    timerInterval = setInterval(() => {
      timeLeft--;
      const timerEl = document.getElementById('speed-timer-display');
      if (timerEl) timerEl.textContent = \`⏱️ \${timeLeft}s\`;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        finishSpeedMatch();
      }
    }, 1000);
  }

  function renderStage() {
    const poolLabel = selectedVocabPool === 'toeic' ? 'TOEIC' : selectedVocabPool === 'ielts' ? 'IELTS' : selectedVocabPool === 'common' ? '6k Vocab' : 'Tất cả';
    const levelLabel = selectedVocabLevel === 'all' ? '' : \`• \${selectedVocabLevel}\`;

    container.innerHTML = \`
      <div class="game-stage animate-fade-in">
        <div class="stage-top-bar">
          <button class="back-arcade-btn" id="exit-game-btn">⬅ Thoát Game</button>

          <div style="display:flex; align-items:center; gap:8px;">
            <div class="stage-title">⚡ Speed Word Match</div>
            <span class="badge badge-purple" style="font-size:0.8rem; padding:4px 10px;">\${poolLabel} \${levelLabel}</span>
          </div>

          <div class="stage-timer" id="game-progress">
            \${selectedMatchGameMode === 'time' ? \`<span id="speed-timer-display" style="color:#f59e0b;font-weight:800;">⏱️ \${timeLeft}s</span>\` : ''}
            \${selectedMatchGameMode === 'marathon' ? \`<span style="color:#ef4444;font-weight:800;">❤️ \${Math.max(0, 3 - wrongAttempts)} Mạng</span>\` : ''}
            \${selectedMatchGameMode === 'count' ? \`🎯 Cặp \${matchedPairs}/\${gamePool.length}\` : ''}
          </div>
        </div>

        <div class="game-score-row">
          <div class="score-badge">ĐIỂM: <span id="game-score">\${score}</span></div>
          <div class="combo-badge" id="combo-badge">COMBO: x\${Math.max(1, combo)}</div>
        </div>

        <p class="game-instruction">Chạm 2 thẻ tương ứng (Tiếng Anh ⚡ Tiếng Việt) để nối từ & nghe phát âm chuẩn!</p>

        <div class="speed-match-grid" id="match-grid">
          \${cards.map(c => \`
            <div class="match-card" data-id="\${c.id}" data-pair="\${c.pairId}">
              <div style="display:flex;flex-direction:column;align-items:center;gap:3px;">
                <span style="font-size:1.05rem;font-weight:700;">\${c.text}</span>
                \${c.type === 'en' ? \`<span class="ipa-subtext" style="font-size:0.8rem;color:#c084fc;font-weight:600;">\${IpaService.getIPA(c.text)}</span>\` : ''}
              </div>
            </div>
          \`).join('')}
        </div>
      </div>
    \`;

    document.getElementById('exit-game-btn')?.addEventListener('click', () => {
      if (timerInterval) clearInterval(timerInterval);
      window.location.hash = '#/games';
      renderArcadeHub(container);
    });

    attachGridEvents();
  }

  function attachGridEvents() {
    const gridEl = document.getElementById('match-grid');
    gridEl?.addEventListener('click', (e) => {
      const card = e.target.closest('.match-card');
      if (!card || card.classList.contains('matched') || card.classList.contains('selected')) return;

      if (selectedCards.length < 2) {
        card.classList.add('selected');
        selectedCards.push(card);
      }

      if (selectedCards.length === 2) {
        const [c1, c2] = selectedCards;
        const pair1 = c1.dataset.pair;
        const pair2 = c2.dataset.pair;

        if (pair1 === pair2) {
          // MATCHED!
          combo++;
          if (combo > maxCombo) maxCombo = combo;
          const comboMultiplier = Math.min(combo, 5);
          score += 100 * comboMultiplier;
          matchedPairs++;
          currentGridMatched++;

          // Audio Pronunciation & Sound FX
          const matchedItem = activePairs[parseInt(pair1, 10)];
          if (matchedItem) {
            speakEnglishWord(matchedItem.en);
            if (!playedWordsHistory.some(w => w.en === matchedItem.en)) {
              playedWordsHistory.push(matchedItem);
            }
          }

          if (combo >= 2) SoundService.playCombo();
          else SoundService.playCorrect();

          c1.classList.remove('selected');
          c2.classList.remove('selected');
          c1.classList.add('matched');
          c2.classList.add('matched');

          const scoreEl = document.getElementById('game-score');
          const comboEl = document.getElementById('combo-badge');
          const progressEl = document.getElementById('game-progress');

          if (scoreEl) scoreEl.textContent = score;
          if (comboEl) {
            comboEl.textContent = \`COMBO: x\${combo}\`;
            comboEl.classList.add('pulse');
            setTimeout(() => comboEl.classList.remove('pulse'), 300);
          }

          if (selectedMatchGameMode === 'count' && matchedPairs >= gamePool.length) {
            setTimeout(() => finishSpeedMatch(), 100);
            return;
          }

          if (currentGridMatched >= activePairs.length) {
            poolIndex += 6;
            currentGridMatched = 0;

            if (poolIndex >= gamePool.length) {
              setTimeout(() => finishSpeedMatch(), 100);
              return;
            }

            const nextGrid = loadActiveGrid();
            activePairs = nextGrid.activePairs;
            cards = nextGrid.cards;
            setTimeout(() => renderStage(), 100);
          }
        } else {
          // MISMATCHED
          combo = 0;
          wrongAttempts++;
          SoundService.playError();
          c1.classList.add('wrong');
          c2.classList.add('wrong');

          const comboEl = document.getElementById('combo-badge');
          if (comboEl) comboEl.textContent = \`COMBO: x1\`;

          if (selectedMatchGameMode === 'marathon' && wrongAttempts >= 3) {
            setTimeout(() => finishSpeedMatch(), 300);
            return;
          }

          setTimeout(() => {
            c1.classList.remove('selected', 'wrong');
            c2.classList.remove('selected', 'wrong');
          }, 250);
        }

        selectedCards = [];
      }
    });
  }

  function finishSpeedMatch() {
    if (timerInterval) clearInterval(timerInterval);

    const totalTimeSec = Math.max(1, Math.round((Date.now() - startTime) / 1000));
    const accuracy = Math.round((matchedPairs / Math.max(1, matchedPairs + wrongAttempts)) * 100);
    const secPerWord = (totalTimeSec / Math.max(1, matchedPairs)).toFixed(1);

    finishSpeedMatchGame({
      score,
      maxCombo,
      matchedPairs,
      wrongAttempts,
      totalTimeSec,
      accuracy,
      secPerWord,
      playedWordsHistory
    });
  }

  renderStage();
}

/**
 * Detailed Results & Vocabulary Training Review Screen for Speed Word Match
 */
function finishSpeedMatchGame(results) {
  SoundService.playVictory();
  const { score, maxCombo, matchedPairs, wrongAttempts, totalTimeSec, accuracy, secPerWord, playedWordsHistory } = results;

  const xpGained = Math.round(score / 5) + maxCombo * 10;
  StorageService.addGameResult('speed-match', score, xpGained, maxCombo);

  const container = document.getElementById('page-container');
  if (!container) return;

  container.innerHTML = \`
    <div class="game-over-modal animate-scale-in" style="max-width: 800px;">
      <div class="game-over-header">
        <span class="trophy-icon">🏆</span>
        <h2>TRẬN ĐẤU TỪ VỰNG HOÀN THÀNH!</h2>
        <p class="mode-name">Speed Word Match ⚡ Kho \${selectedVocabPool.toUpperCase()} (\${matchedPairs} cặp từ ghép thành công)</p>
      </div>

      <div class="game-over-stats" style="grid-template-columns: repeat(4, 1fr);">
        <div class="result-stat-box">
          <span class="stat-label">Tổng Điểm</span>
          <span class="stat-value gold">\${score}</span>
        </div>
        <div class="result-stat-box">
          <span class="stat-label">XP Nhận Được</span>
          <span class="stat-value green">+\${xpGained} XP</span>
        </div>
        <div class="result-stat-box">
          <span class="stat-label">Chính Xác</span>
          <span class="stat-value purple">\${accuracy}%</span>
        </div>
        <div class="result-stat-box">
          <span class="stat-label">Tốc Độ TB</span>
          <span class="stat-value blue">\${secPerWord}s/từ</span>
        </div>
      </div>

      <!-- Training Vocabulary Summary Table -->
      <div style="margin: 24px 0; text-align: left;">
        <h3 style="font-size: 1.1rem; font-weight: 800; color: var(--text-primary); margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
          <span>📖 Danh Sách Từ Vựng Đã Luyện Tập (\${playedWordsHistory.length} từ):</span>
        </h3>
        <div style="max-height: 280px; overflow-y: auto; border: 1px solid var(--border-color); border-radius: 12px; background: var(--bg-secondary);">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem;">
            <thead>
              <tr style="background: var(--bg-tertiary); border-bottom: 1px solid var(--border-color); color: var(--text-secondary); font-size: 0.8rem; text-transform: uppercase;">
                <th style="padding: 10px 14px;">Từ Tiếng Anh</th>
                <th style="padding: 10px 14px;">Nghĩa Tiếng Việt</th>
                <th style="padding: 10px 14px;">Phân Loại</th>
                <th style="padding: 10px 14px; text-align: center;">Phát Âm</th>
              </tr>
            </thead>
            <tbody>
              \${playedWordsHistory.map(w => \`
                <tr style="border-bottom: 1px solid var(--border-subtle);">
                  <td style="padding: 10px 14px; font-weight: 700; color: var(--text-primary);">
                    \${w.en} <span style="font-size:0.75rem; color:#a855f7; font-weight:600;">\${IpaService.getIPA(w.en)}</span>
                  </td>
                  <td style="padding: 10px 14px; color: var(--text-secondary);">\${w.vn}</td>
                  <td style="padding: 10px 14px;">
                    <span class="badge \${w.pool === 'toeic' ? 'badge-blue' : w.pool === 'ielts' ? 'badge-green' : 'badge-amber'}" style="font-size:0.75rem; padding: 2px 8px;">
                      \${w.pool ? w.pool.toUpperCase() : 'COMMON'} • \${w.level || 'B1'}
                    </span>
                  </td>
                  <td style="padding: 10px 14px; text-align: center;">
                    <button class="tts-speak-btn" data-word="\${w.en}" style="background: none; border: none; font-size: 1.1rem; cursor: pointer;" title="Nghe phát âm">
                      🔊
                    </button>
                  </td>
                </tr>
              \`).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="game-over-actions">
        <button class="restart-game-btn" id="restart-speed-game-btn">
          🔄 Luyện Tiếp Kho Này
        </button>
        <button class="btn btn-secondary" id="custom-vocab-btn">
          ⚙️ Đổi Kho Từ Vựng
        </button>
        <button class="exit-arcade-btn" id="exit-arcade-btn">
          🏠 Về Arcade Hub
        </button>
      </div>
    </div>
  \`;

  // Attach TTS Listeners for Review Table
  container.querySelectorAll('.tts-speak-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      speakEnglishWord(btn.dataset.word);
    });
  });

  document.getElementById('restart-speed-game-btn')?.addEventListener('click', () => {
    renderActiveGame(container, 'speed-match', true);
  });

  document.getElementById('custom-vocab-btn')?.addEventListener('click', () => {
    renderGameSetup(container, 'speed-match');
  });

  document.getElementById('exit-arcade-btn')?.addEventListener('click', () => {
    window.location.hash = '#/games';
    renderGamesPage(null);
  });
}

// --------------------------------------------------------------------------
// GAME 2: SENTENCE BUILDER DASH
// --------------------------------------------------------------------------
function initSentenceDash(container, targetCount = selectedQuestionCount, gamesData) {
  let score = 0;
  let combo = 0;
  let maxCombo = 0;
  let currentIndex = 0;

  const dataset = gamesData.getSentenceDashData().sort(() => 0.5 - Math.random()).slice(0, targetCount);
  if (!dataset || dataset.length === 0) return;

  function loadQuestion() {
    if (currentIndex >= dataset.length) {
      finishGame('sentence-dash', score, maxCombo, dataset.length);
      return;
    }

    const q = dataset[currentIndex];
    let selectedWords = [];

    function renderStage() {
      container.innerHTML = \`
        <div class="game-stage animate-fade-in">
          <div class="stage-top-bar">
            <button class="back-arcade-btn" id="exit-game-btn">⬅ Thoát Game</button>
            <div class="stage-title">🚀 Sentence Builder Dash</div>
            <div class="stage-timer">🎯 Câu \${currentIndex + 1}/\${dataset.length}</div>
          </div>

          <div class="game-score-row">
            <div class="score-badge">ĐIỂM: <span id="game-score">\${score}</span></div>
            <div class="combo-badge">COMBO: x\${Math.max(1, combo)}</div>
          </div>

          <div class="dash-hint-box">
            <div class="hint-text">💡 Nghĩa: <strong>\${q.translation}</strong></div>
            <span class="badge badge-blue">\${q.category || 'Grammar'}</span>
          </div>

          <div class="target-sentence-zone" id="target-zone">
            \${selectedWords.map((w, idx) => \`
              <button class="word-chip in-target" data-idx="\${idx}">\${w}</button>
            \`).join('')}
          </div>

          <div class="scrambled-words-pool" id="source-zone">
            \${q.scrambledWords.map((w, idx) => \`
              <button class="word-chip \${selectedWords.includes(w) ? 'used' : ''}" data-word="\${w}" data-idx="\${idx}">\${w}</button>
            \`).join('')}
          </div>

          <div style="display:flex;justify-content:center;gap:12px;margin-top:24px;">
            <button class="btn btn-secondary" id="clear-btn">🔄 Làm lại</button>
            <button class="btn btn-primary" id="submit-btn" \${selectedWords.length === 0 ? 'disabled' : ''}>✅ Kiểm tra câu</button>
          </div>
        </div>
      \`;

      document.getElementById('exit-game-btn')?.addEventListener('click', () => {
        window.location.hash = '#/games';
        renderArcadeHub(container);
      });

      document.getElementById('clear-btn')?.addEventListener('click', () => {
        selectedWords = [];
        renderStage();
      });

      document.getElementById('submit-btn')?.addEventListener('click', checkAnswer);

      const sourceZone = document.getElementById('source-zone');
      sourceZone?.addEventListener('click', (e) => {
        const chip = e.target.closest('.word-chip:not(.used)');
        if (!chip) return;
        selectedWords.push(chip.dataset.word);
        renderStage();
      });

      const targetZone = document.getElementById('target-zone');
      targetZone?.addEventListener('click', (e) => {
        const chip = e.target.closest('.word-chip.in-target');
        if (!chip) return;
        const removeIdx = parseInt(chip.dataset.idx, 10);
        selectedWords.splice(removeIdx, 1);
        renderStage();
      });
    }

    function checkAnswer() {
      const userSentence = selectedWords.join(' ').trim();
      const targetZone = document.getElementById('target-zone');

      if (userSentence === q.originalSentence) {
        combo++;
        if (combo > maxCombo) maxCombo = combo;
        score += 150 * Math.min(combo, 5);
        SoundService.playCorrect();
        if (targetZone) targetZone.classList.add('correct-glow');

        setTimeout(() => {
          currentIndex++;
          loadQuestion();
        }, 50);
      } else {
        combo = 0;
        SoundService.playError();
        if (targetZone) targetZone.classList.add('wrong-glow');
        setTimeout(() => {
          if (targetZone) targetZone.classList.remove('wrong-glow');
        }, 400);
      }
    }

    renderStage();
  }

  loadQuestion();
}

// --------------------------------------------------------------------------
// GAME 3: ERROR HUNTER
// --------------------------------------------------------------------------
function initErrorHunter(container, targetCount = selectedQuestionCount, gamesData) {
  let score = 0;
  let combo = 0;
  let maxCombo = 0;
  let currentIndex = 0;

  const dataset = gamesData.getErrorHunterData().sort(() => 0.5 - Math.random()).slice(0, targetCount);
  if (!dataset || dataset.length === 0) return;

  function loadQuestion() {
    if (currentIndex >= dataset.length) {
      finishGame('error-hunter', score, maxCombo, dataset.length);
      return;
    }

    const item = dataset[currentIndex];

    function renderStage() {
      container.innerHTML = \`
        <div class="game-stage animate-fade-in">
          <div class="stage-top-bar">
            <button class="back-arcade-btn" id="exit-game-btn">⬅ Thoát Game</button>
            <div class="stage-title">🔍 Error Hunter (Bẫy Ngữ Pháp)</div>
            <div class="stage-timer">🎯 Câu \${currentIndex + 1}/\${dataset.length}</div>
          </div>

          <div class="game-score-row">
            <div class="score-badge">ĐIỂM: <span id="game-score">\${score}</span></div>
            <div class="combo-badge">COMBO: x\${Math.max(1, combo)}</div>
          </div>

          <p class="game-instruction">Chạm vào từ/cụm từ sai ngữ pháp duy nhất trong câu dưới đây:</p>

          <div class="error-hunter-sentence-box" id="sentence-box">
            \${item.tokens.map(token => \`
              <span class="error-token \${token.isErrorTarget ? 'error-target' : ''}" data-id="\${token.id}">\${token.text}</span>
            \`).join(' ')}
          </div>
        </div>
      \`;

      document.getElementById('exit-game-btn')?.addEventListener('click', () => {
        window.location.hash = '#/games';
        renderArcadeHub(container);
      });

      const box = document.getElementById('sentence-box');
      box?.addEventListener('click', (e) => {
        const tokenEl = e.target.closest('.error-token');
        if (!tokenEl || tokenEl.classList.contains('clicked')) return;

        const isWrong = tokenEl.classList.contains('error-target');
        tokenEl.classList.add('clicked');

        if (isWrong) {
          combo++;
          if (combo > maxCombo) maxCombo = combo;
          score += 150 * Math.min(combo, 5);
          SoundService.playCorrect();
          tokenEl.classList.add('correct');

          setTimeout(() => {
            currentIndex++;
            loadQuestion();
          }, 50);
        } else {
          combo = 0;
          SoundService.playError();
          tokenEl.classList.add('wrong');
        }
      });
    }

    renderStage();
  }

  loadQuestion();
}

// --------------------------------------------------------------------------
// GAME 4: PHONEME BLITZ
// --------------------------------------------------------------------------
function initPhonemeBlitz(container, targetCount = selectedQuestionCount, gamesData) {
  let score = 0;
  let combo = 0;
  let maxCombo = 0;
  let currentIndex = 0;

  const dataset = gamesData.getPhonemeBlitzData().sort(() => 0.5 - Math.random()).slice(0, targetCount);
  if (!dataset || dataset.length === 0) return;

  function loadQuestion() {
    if (currentIndex >= dataset.length) {
      finishGame('phoneme-blitz', score, maxCombo, dataset.length);
      return;
    }

    const item = dataset[currentIndex];

    function renderStage() {
      container.innerHTML = \`
        <div class="game-stage animate-fade-in">
          <div class="stage-top-bar">
            <button class="back-arcade-btn" id="exit-game-btn">⬅ Thoát Game</button>
            <div class="stage-title">🎧 Phoneme Blitz (Phản Xạ Âm Thanh)</div>
            <div class="stage-timer">🎯 Câu \${currentIndex + 1}/\${dataset.length}</div>
          </div>

          <div class="game-score-row">
            <div class="score-badge">ĐIỂM: <span id="game-score">\${score}</span></div>
            <div class="combo-badge">COMBO: x\${Math.max(1, combo)}</div>
          </div>

          <div class="audio-challenge-card card" style="text-align:center;padding:32px;margin-bottom:24px;">
            <button class="audio-play-big-btn" id="play-audio-btn" style="font-size:2rem;padding:20px 32px;border-radius:50px;cursor:pointer;background:var(--color-primary);color:white;border:none;">
              🔊 Phản Xạ Âm Thanh
            </button>
            <p style="margin-top:16px;color:var(--text-secondary);font-weight:600;">\${item.meaning}</p>
          </div>

          <div class="options-grid" id="options-grid" style="display:grid;grid-template-columns:repeat(2, 1fr);gap:16px;">
            \${item.options.map(opt => \`
              <button class="option-btn" data-word="\${opt}" style="padding:20px;font-size:1.1rem;font-weight:700;border-radius:12px;cursor:pointer;">
                \${opt}
              </button>
            \`).join('')}
          </div>
        </div>
      \`;

      document.getElementById('exit-game-btn')?.addEventListener('click', () => {
        window.location.hash = '#/games';
        renderArcadeHub(container);
      });

      document.getElementById('play-audio-btn')?.addEventListener('click', () => {
        speakEnglishWord(item.targetWord);
      });

      // Auto speak target word on load
      speakEnglishWord(item.targetWord);

      const grid = document.getElementById('options-grid');
      grid?.addEventListener('click', (e) => {
        const btn = e.target.closest('.option-btn');
        if (!btn || btn.disabled) return;

        const chosen = btn.dataset.word;
        if (chosen === item.targetWord) {
          combo++;
          if (combo > maxCombo) maxCombo = combo;
          score += 100 * Math.min(combo, 5);
          SoundService.playCorrect();
          btn.classList.add('correct');

          setTimeout(() => {
            currentIndex++;
            loadQuestion();
          }, 50);
        } else {
          combo = 0;
          SoundService.playError();
          btn.classList.add('wrong');
        }
      });
    }

    renderStage();
  }

  loadQuestion();
}

// --------------------------------------------------------------------------
// GAME 5: SYNONYM & ANTONYM CHALLENGE
// --------------------------------------------------------------------------
function initSynonymAntonym(container, targetCount = selectedQuestionCount, gamesData) {
  let score = 0;
  let combo = 0;
  let maxCombo = 0;
  let currentIndex = 0;

  const dataset = gamesData.getSynonymAntonymData().sort(() => 0.5 - Math.random()).slice(0, targetCount);
  if (!dataset || dataset.length === 0) return;

  function loadQuestion() {
    if (currentIndex >= dataset.length) {
      finishGame('synonym-antonym', score, maxCombo, dataset.length);
      return;
    }

    const item = dataset[currentIndex];

    function renderStage() {
      container.innerHTML = \`
        <div class="game-stage animate-fade-in">
          <div class="stage-top-bar">
            <button class="back-arcade-btn" id="exit-game-btn">⬅ Thoát Game</button>
            <div class="stage-title">🔄 Synonym & Antonym Challenge</div>
            <div class="stage-timer">🎯 Câu \${currentIndex + 1}/\${dataset.length}</div>
          </div>

          <div class="game-score-row">
            <div class="score-badge">ĐIỂM: <span id="game-score">\${score}</span></div>
            <div class="combo-badge">COMBO: x\${Math.max(1, combo)}</div>
          </div>

          <div class="card" style="text-align:center;padding:32px 24px;margin-bottom:24px;">
            <div style="margin-bottom:8px;">
              <span class="badge \${item.type === 'synonym' ? 'badge-blue' : 'badge-rose'}" style="font-size:0.9rem;padding:6px 16px;text-transform:uppercase;">
                \${item.type === 'synonym' ? '🔍 Tìm từ ĐỒNG NGHĨA (Synonym)' : '⚡ Tìm từ TRÁI NGHĨA (Antonym)'}
              </span>
            </div>
            <h2 style="font-size:2.2rem;font-weight:800;color:var(--text-primary);margin:12px 0 4px 0;">\${item.word}</h2>
            <div class="ipa-text" style="font-size:1.05rem;color:#a855f7;font-weight:700;margin-bottom:8px;">\${IpaService.getIPA(item.word)}</div>
            <p style="font-size:1rem;color:var(--text-secondary);font-weight:600;">Nghĩa: \${item.translation}</p>
          </div>

          <div class="options-grid" id="synonym-grid" style="display:grid;grid-template-columns:repeat(2, 1fr);gap:16px;">
            \${item.options.map(opt => \`
              <button class="option-btn" data-opt="\${opt}" style="padding:18px;font-size:1.05rem;font-weight:700;border-radius:12px;cursor:pointer;">
                \${opt}
              </button>
            \`).join('')}
          </div>
        </div>
      \`;

      document.getElementById('exit-game-btn')?.addEventListener('click', () => {
        window.location.hash = '#/games';
        renderArcadeHub(container);
      });

      const grid = document.getElementById('synonym-grid');
      grid?.addEventListener('click', (e) => {
        const btn = e.target.closest('.option-btn');
        if (!btn || btn.disabled) return;

        const chosen = btn.dataset.opt;
        if (chosen === item.correctAnswer) {
          combo++;
          if (combo > maxCombo) maxCombo = combo;
          score += 120 * Math.min(combo, 5);
          SoundService.playCorrect();
          btn.classList.add('correct');

          setTimeout(() => {
            currentIndex++;
            loadQuestion();
          }, 50);
        } else {
          combo = 0;
          SoundService.playError();
          btn.classList.add('wrong');
        }
      });
    }

    renderStage();
  }

  loadQuestion();
}

// --------------------------------------------------------------------------
// GAME 6: IRREGULAR VERBS MASTER
// --------------------------------------------------------------------------
function initIrregularVerbs(container, targetCount = selectedQuestionCount, gamesData) {
  let score = 0;
  let combo = 0;
  let maxCombo = 0;
  let currentIndex = 0;

  const dataset = gamesData.getIrregularVerbsGameData().sort(() => 0.5 - Math.random()).slice(0, targetCount);
  if (!dataset || dataset.length === 0) return;

  function loadQuestion() {
    if (currentIndex >= dataset.length) {
      finishGame('irregular-verbs', score, maxCombo, dataset.length);
      return;
    }

    const item = dataset[currentIndex];

    function renderStage() {
      container.innerHTML = \`
        <div class="game-stage animate-fade-in">
          <div class="stage-top-bar">
            <button class="back-arcade-btn" id="exit-game-btn">⬅ Thoát Game</button>
            <div class="stage-title">📚 Irregular Verbs Master</div>
            <div class="stage-timer">🎯 Câu \${currentIndex + 1}/\${dataset.length}</div>
          </div>

          <div class="game-score-row">
            <div class="score-badge">ĐIỂM: <span id="game-score">\${score}</span></div>
            <div class="combo-badge">COMBO: x\${Math.max(1, combo)}</div>
          </div>

          <div class="card" style="text-align:center;padding:32px 24px;margin-bottom:24px;">
            <div style="margin-bottom:12px;">
              <span class="badge badge-amber" style="font-size:0.9rem;padding:6px 16px;text-transform:uppercase;">
                🎯 Động Từ Bất Quy Tắc (V1 ➔ V2 ➔ V3)
              </span>
            </div>
            <h2 style="font-size:2.2rem;font-weight:800;color:var(--text-primary);margin:12px 0 2px 0;">\${item.v1}</h2>
            <div class="ipa-text" style="font-size:1.05rem;color:#a855f7;margin-bottom:8px;font-weight:700;">\${IpaService.getIPA(item.v1)}</div>
            <p style="font-size:1rem;color:var(--text-secondary);font-weight:600;">\${item.promptText}</p>
          </div>

          <div class="options-grid" id="verbs-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:16px;">
            \${item.options.map(opt => \`
              <button class="option-btn" data-opt="\${opt}" style="padding:16px;font-size:1.05rem;font-weight:700;border-radius:12px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;">
                <span>\${opt}</span>
                <span class="ipa-badge" style="font-size:0.8rem;color:#a855f7;">\${IpaService.getIPA(opt)}</span>
              </button>
            \`).join('')}
          </div>
        </div>
      \`;

      document.getElementById('exit-game-btn')?.addEventListener('click', () => {
        window.location.hash = '#/games';
        renderArcadeHub(container);
      });

      const grid = document.getElementById('verbs-grid');
      grid?.addEventListener('click', (e) => {
        const btn = e.target.closest('.option-btn');
        if (!btn || btn.disabled) return;

        grid.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
        const chosen = btn.dataset.opt;

        if (chosen === item.correctAnswer) {
          combo++;
          if (combo > maxCombo) maxCombo = combo;
          score += 150 * Math.min(combo, 4);
          SoundService.playCorrect();
          btn.classList.add('correct');
        } else {
          combo = 0;
          SoundService.playError();
          btn.classList.add('wrong');
        }

        setTimeout(() => {
          currentIndex++;
          loadQuestion();
        }, 50);
      });
    }

    renderStage();
  }

  loadQuestion();
}

// --------------------------------------------------------------------------
// Standard Finish Game Modal
// --------------------------------------------------------------------------
function finishGame(mode, score, maxCombo, totalQuestions = selectedQuestionCount) {
  SoundService.playVictory();
  const xpGained = Math.round(score / 5) + maxCombo * 10;
  StorageService.addGameResult(mode, score, xpGained, maxCombo);

  const container = document.getElementById('page-container');
  if (!container) return;

  const options = [5, 10, 15, 20, 30];

  container.innerHTML = \`
    <div class="game-over-modal animate-scale-in">
      <div class="game-over-header">
        <span class="trophy-icon">🏆</span>
        <h2>TRẬN ĐẤU HOÀN THÀNH!</h2>
        <p class="mode-name">Chế độ: \${getModeName(mode)} (\${totalQuestions} câu/thử thách)</p>
      </div>

      <div class="game-over-stats">
        <div class="result-stat-box">
          <span class="stat-label">Tổng Điểm</span>
          <span class="stat-value gold">\${score}</span>
        </div>
        <div class="result-stat-box">
          <span class="stat-label">XP Nhận Được</span>
          <span class="stat-value green">+\${xpGained} XP</span>
        </div>
        <div class="result-stat-box">
          <span class="stat-label">Combo Cao Nhất</span>
          <span class="stat-value purple">x\${maxCombo}</span>
        </div>
      </div>

      <div class="game-memory-tip-box" style="margin: 18px 0; background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.3);">
        <div class="game-memory-tip-header" style="color: #34d399;">
          💡 Bí Quyết Khắc Sâu Trí Nhớ Dài Hạn (Spaced Repetition)
        </div>
        <div class="game-memory-tip-content">
          Để kiến thức thu hoạch từ lượt chơi này không bị quên theo đường cong Ebbinghaus, hãy <strong>chơi lại chế độ này sau 24 giờ và 7 ngày</strong>. Lặp lại ngắt quãng giúp bạn khắc sâu ngữ pháp & từ vựng bền vững tới 95%!
        </div>
      </div>

      <div class="question-count-picker" style="margin: 20px 0;">
        <p style="font-weight: 700; margin-bottom: 8px; font-size: 0.9rem; color: var(--text-primary);">Chọn số câu cho lượt chơi tiếp theo:</p>
        <div class="question-count-options">
          \${options.map(opt => \`
            <button class="count-opt-btn \${selectedQuestionCount === opt ? 'active' : ''}" data-count="\${opt}">
              \${opt} câu
            </button>
          \`).join('')}
        </div>
      </div>

      <div class="game-over-actions">
        <button class="restart-game-btn" id="restart-game-btn" data-mode="\${mode}">
          🔄 Chơi lại (\${selectedQuestionCount} câu)
        </button>
        <button class="exit-arcade-btn" id="exit-arcade-btn">
          🏠 Về Arcade Hub
        </button>
      </div>
    </div>
  \`;

  container.querySelectorAll('.count-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.count-opt-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedQuestionCount = parseInt(btn.dataset.count, 10);
      const restartBtn = document.getElementById('restart-game-btn');
      if (restartBtn) restartBtn.textContent = \`🔄 Chơi lại (\${selectedQuestionCount} câu)\`;
    });
  });

  document.getElementById('restart-game-btn')?.addEventListener('click', () => {
    renderActiveGame(container, mode, true);
  });

  document.getElementById('exit-arcade-btn')?.addEventListener('click', () => {
    window.location.hash = '#/games';
    renderGamesPage(null);
  });
}

function getModeName(mode) {
  switch (mode) {
    case 'speed-match': return 'Speed Word Match ⚡';
    case 'sentence-dash': return 'Sentence Builder Dash 🚀';
    case 'error-hunter': return 'Error Hunter 🔍';
    case 'phoneme-blitz': return 'Phoneme Blitz 🎧';
    case 'synonym-antonym': return 'Synonym & Antonym Challenge 🔄';
    case 'irregular-verbs': return 'Irregular Verbs Master 📚';
    default: return 'Arcade Game';
  }
}

function getGameEmoji(mode) {
  switch (mode) {
    case 'speed-match': return '⚡';
    case 'sentence-dash': return '🚀';
    case 'error-hunter': return '🔍';
    case 'phoneme-blitz': return '🎧';
    case 'synonym-antonym': return '🔄';
    case 'irregular-verbs': return '📚';
    default: return '🎮';
  }
}
`;

fs.writeFileSync('./src/pages/games.js', code, 'utf8');
console.log("Updated src/pages/games.js successfully!");
