// ==========================================================================
// Games Page — English Learning Arcade Hub & Interactive Mini-Games
// ==========================================================================

import { StorageService } from '../services/storage-service.js';
import { SoundService } from '../services/sound-service.js';
import { IpaService } from '../services/ipa-service.js';
import {
  getSpeedMatchPairs,
  getSentenceDashData,
  getErrorHunterData,
  getPhonemeBlitzData,
  getSynonymAntonymData,
  getIrregularVerbsGameData,
} from '../data/games-data.js';

let currentGame = null; // 'speed-match' | 'sentence-dash' | 'error-hunter' | 'phoneme-blitz' | 'synonym-antonym' | 'irregular-verbs' | null
let selectedQuestionCount = 10; // Default 10 questions/challenges

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

  container.innerHTML = `
    <div class="arcade-container animate-fade-in">
      <!-- Arcade Header -->
      <div class="arcade-header">
        <div class="arcade-title-group">
          <span class="arcade-badge">ARCADE MODE (18.000+ ITEMS)</span>
          <h1 class="arcade-title">English Learning Arcade 🎮</h1>
          <p class="arcade-subtitle">Rèn luyện phản xạ ngôn ngữ siêu tốc với kho <strong>3.000+ câu/từ vựng thông dụng cho mỗi trò chơi</strong>!</p>
        </div>

        <div class="arcade-top-stats">
          <div class="arcade-stat-pill">
            <span class="pill-label">Arcade XP</span>
            <span class="pill-value gold">⚡ ${gameStats.totalXP || 0} XP</span>
          </div>
          <div class="arcade-stat-pill">
            <span class="pill-label">Đã chơi</span>
            <span class="pill-value">🎮 ${gameStats.totalGames || 0} trận</span>
          </div>
          <button class="arcade-sound-btn ${isMuted ? 'muted' : ''}" id="toggle-sound-btn" title="Bật/Tắt Âm Thanh Game">
            ${isMuted ? '🔇 Tắt âm' : '🔊 Âm thanh'}
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
        <!-- Game 1: Speed Word Match -->
        <div class="arcade-card neon-purple" data-mode="speed-match">
          <div class="card-icon-wrapper">
            <span class="game-emoji">⚡</span>
          </div>
          <div class="card-content">
            <div class="game-tag">3.000+ Từ Vựng Match</div>
            <h2 class="game-name">Speed Word Match</h2>
            <p class="game-desc">Ghép các cặp từ Anh-Việt nhanh nhất có thể. Tích luỹ Combo để nhân điểm XP với kho 3000+ từ vựng!</p>
            <div class="game-card-footer">
              <span class="high-score">🏆 Kỷ lục: <strong>${highScores['speed-match'] || 0} điểm</strong></span>
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
              <span class="high-score">🏆 Kỷ lục: <strong>${highScores['sentence-dash'] || 0} điểm</strong></span>
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
              <span class="high-score">🏆 Kỷ lục: <strong>${highScores['error-hunter'] || 0} điểm</strong></span>
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
              <span class="high-score">🏆 Kỷ lục: <strong>${highScores['phoneme-blitz'] || 0} điểm</strong></span>
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
              <span class="high-score">🏆 Kỷ lục: <strong>${highScores['synonym-antonym'] || 0} điểm</strong></span>
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
              <span class="high-score">🏆 Kỷ lục: <strong>${highScores['irregular-verbs'] || 0} điểm</strong></span>
              <button class="play-btn">Chơi ngay ➔</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.querySelectorAll('.arcade-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const mode = card.dataset.mode;
      if (mode) {
        window.location.hash = `#/games?mode=${mode}`;
        renderGamesPage(mode);
      }
    });
  });

  document.getElementById('toggle-sound-btn')?.addEventListener('click', (e) => {
    e.stopPropagation();
    const muted = SoundService.toggleMute();
    renderArcadeHub(container);
  });
}

// --------------------------------------------------------------------------
// Active Game Dispatcher
// --------------------------------------------------------------------------
function renderActiveGame(container, mode, skipSetup = false) {
  if (!skipSetup) {
    renderGameSetup(container, mode);
    return;
  }

  switch (mode) {
    case 'speed-match':
      initSpeedMatch(container, selectedQuestionCount);
      break;
    case 'sentence-dash':
      initSentenceDash(container, selectedQuestionCount);
      break;
    case 'error-hunter':
      initErrorHunter(container, selectedQuestionCount);
      break;
    case 'phoneme-blitz':
      initPhonemeBlitz(container, selectedQuestionCount);
      break;
    case 'synonym-antonym':
      initSynonymAntonym(container, selectedQuestionCount);
      break;
    case 'irregular-verbs':
      initIrregularVerbs(container, selectedQuestionCount);
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
        desc: 'Luyện tập phân biệt các cặp âm dễ nhầm lẫn (như /i/ ngắn vs /i:/ dài). Lắng nghe nhịp điệu và ngữ điệu câu để rèn luyện đôi tai tiếp nhận ngữ âm chính xác.'
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
// Game Question Count Setup Modal
// --------------------------------------------------------------------------
function renderGameSetup(container, mode) {
  const options = [5, 10, 15, 20, 30];
  const modeName = getModeName(mode);
  const emoji = getGameEmoji(mode);
  const memoryTip = getGameMemoryTip(mode);

  container.innerHTML = `
    <div class="game-setup-modal animate-scale-in">
      <div class="setup-header">
        <span class="setup-emoji">${emoji}</span>
        <h2 class="setup-title">${modeName}</h2>
        <p class="setup-subtitle">Tùy chỉnh lượt chơi của bạn trước khi bắt đầu:</p>
      </div>

      <div class="game-memory-tip-box">
        <div class="game-memory-tip-header">
          ${memoryTip.title}
        </div>
        <div class="game-memory-tip-content">
          ${memoryTip.desc}
        </div>
      </div>

      <div class="question-count-picker" style="margin: 24px 0;">
        <p style="font-weight: 700; margin-bottom: 12px; color: var(--text-primary);">🎯 Chọn số lượng câu hỏi / thử thách:</p>
        <div class="question-count-options">
          ${options.map(opt => `
            <button class="count-opt-btn ${selectedQuestionCount === opt ? 'active' : ''}" data-count="${opt}">
              ${opt} câu
            </button>
          `).join('')}
        </div>
      </div>

      <div class="game-over-actions" style="margin-top: 28px;">
        <button class="restart-game-btn" id="start-game-btn">
          🚀 Bắt đầu chơi (${selectedQuestionCount} câu)
        </button>
        <button class="exit-arcade-btn" id="back-arcade-btn">
          🏠 Về Arcade Hub
        </button>
      </div>
    </div>
  `;

  container.querySelectorAll('.count-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.count-opt-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedQuestionCount = parseInt(btn.dataset.count, 10);
      const startBtn = document.getElementById('start-game-btn');
      if (startBtn) startBtn.textContent = `🚀 Bắt đầu chơi (${selectedQuestionCount} câu)`;
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

// ==========================================================================
// GAME 1: SPEED WORD MATCH
// ==========================================================================
function initSpeedMatch(container, targetPairsCount = selectedQuestionCount) {
  let score = 0;
  let combo = 0;
  let maxCombo = 0;
  let matchedPairs = 0;
  let selectedCards = [];

  const allPairs = getSpeedMatchPairs().sort(() => 0.5 - Math.random());
  const gamePool = allPairs.slice(0, Math.min(targetPairsCount, allPairs.length));

  let poolIndex = 0;

  function loadActiveGrid() {
    const activePairs = gamePool.slice(poolIndex, poolIndex + 6);
    let cards = [];
    activePairs.forEach((pair, idx) => {
      cards.push({ id: `en-${idx}`, pairId: idx, text: pair.en, type: 'en' });
      cards.push({ id: `vn-${idx}`, pairId: idx, text: pair.vn, type: 'vn' });
    });
    cards.sort(() => 0.5 - Math.random());
    return { activePairs, cards };
  }

  let { activePairs, cards } = loadActiveGrid();
  let currentGridMatched = 0;

  function renderStage() {
    container.innerHTML = `
      <div class="game-stage animate-fade-in">
        <div class="stage-top-bar">
          <button class="back-arcade-btn" id="exit-game-btn">⬅ Thoát Game</button>
          <div class="stage-title">⚡ Speed Word Match</div>
          <div class="stage-timer" id="game-progress">🎯 Cặp ${matchedPairs}/${gamePool.length}</div>
        </div>

        <div class="game-score-row">
          <div class="score-badge">ĐIỂM: <span id="game-score">${score}</span></div>
          <div class="combo-badge" id="combo-badge">COMBO: x${Math.max(1, combo)}</div>
        </div>

        <p class="game-instruction">Chạm 2 thẻ tương ứng (Tiếng Anh ⚡ Tiếng Việt) để nối từ!</p>

        <div class="speed-match-grid" id="match-grid">
          ${cards.map(c => `
            <div class="match-card" data-id="${c.id}" data-pair="${c.pairId}">
              <div style="display:flex;flex-direction:column;align-items:center;gap:2px;">
                <span>${c.text}</span>
                ${c.type === 'en' ? `<span class="ipa-subtext" style="font-size:0.8rem;color:#c084fc;">${IpaService.getIPA(c.text)}</span>` : ''}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    document.getElementById('exit-game-btn')?.addEventListener('click', () => {
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
          if (progressEl) progressEl.textContent = `🎯 Cặp ${matchedPairs}/${gamePool.length}`;
          if (comboEl) {
            comboEl.textContent = `COMBO: x${combo}`;
            comboEl.classList.add('pulse');
            setTimeout(() => comboEl.classList.remove('pulse'), 300);
          }

          if (matchedPairs >= gamePool.length) {
            setTimeout(() => {
              finishGame('speed-match', score, maxCombo, gamePool.length);
            }, 50);
            return;
          }

          if (currentGridMatched >= activePairs.length) {
            poolIndex += 6;
            currentGridMatched = 0;
            const nextGrid = loadActiveGrid();
            activePairs = nextGrid.activePairs;
            cards = nextGrid.cards;
            setTimeout(() => {
              renderStage();
            }, 50);
          }
        } else {
          // MISMATCHED
          combo = 0;
          SoundService.playError();
          c1.classList.add('wrong');
          c2.classList.add('wrong');

          const comboEl = document.getElementById('combo-badge');
          if (comboEl) comboEl.textContent = `COMBO: x1`;

          setTimeout(() => {
            c1.classList.remove('selected', 'wrong');
            c2.classList.remove('selected', 'wrong');
          }, 250);
        }

        selectedCards = [];
      }
    });
  }

  renderStage();
}

// ==========================================================================
// GAME 2: SENTENCE BUILDER DASH
// ==========================================================================
function initSentenceDash(container, totalQuestions = selectedQuestionCount) {
  let score = 0;
  let combo = 0;
  let maxCombo = 0;
  let currentIndex = 0;

  const dataset = getSentenceDashData()
    .sort(() => 0.5 - Math.random())
    .slice(0, totalQuestions);

  function loadSentence() {
    if (currentIndex >= dataset.length) {
      finishGame('sentence-dash', score, maxCombo, dataset.length);
      return;
    }

    const item = dataset[currentIndex];
    let selectedWords = [];

    container.innerHTML = `
      <div class="game-stage animate-fade-in">
        <div class="stage-top-bar">
          <button class="back-arcade-btn" id="exit-game-btn">⬅ Thoát Game</button>
          <div class="stage-title">🚀 Sentence Builder Dash</div>
          <div class="stage-timer">🎯 Câu ${currentIndex + 1}/${dataset.length}</div>
        </div>

        <div class="game-score-row">
          <div class="score-badge">ĐIỂM: <span id="game-score">${score}</span></div>
          <div class="combo-badge" id="combo-badge">COMBO: x${Math.max(1, combo)}</div>
        </div>

        <div class="dash-hint-box">
          <span class="hint-label">Gợi ý câu:</span> "${item.translation}"
          <div class="hint-tag">${item.hint}</div>
        </div>

        <!-- Target sentence assembly zone -->
        <div class="target-sentence-zone" id="target-zone">
          <span class="placeholder-text">Chạm các từ bên dưới để ghép câu...</span>
        </div>

        <!-- Word chips pool -->
        <div class="word-pool-zone" id="word-pool">
          ${item.scrambled.map((w, idx) => `
            <button class="word-chip" data-index="${idx}">${w}</button>
          `).join('')}
        </div>

        <div class="dash-actions">
          <button class="dash-btn reset-btn" id="reset-sentence-btn">🔄 Làm lại</button>
          <button class="dash-btn submit-btn" id="submit-sentence-btn">✔ Kiểm Tra</button>
        </div>
      </div>
    `;

    document.getElementById('exit-game-btn')?.addEventListener('click', () => {
      window.location.hash = '#/games';
      renderArcadeHub(container);
    });

    const targetZone = document.getElementById('target-zone');
    const wordPool = document.getElementById('word-pool');

    wordPool?.addEventListener('click', (e) => {
      const chip = e.target.closest('.word-chip');
      if (!chip || chip.classList.contains('used')) return;

      chip.classList.add('used');
      selectedWords.push({ word: chip.textContent.trim(), chipEl: chip });

      renderTargetSentence();
    });

    function renderTargetSentence() {
      if (selectedWords.length === 0) {
        targetZone.innerHTML = `<span class="placeholder-text">Chạm các từ bên dưới để ghép câu...</span>`;
      } else {
        targetZone.innerHTML = selectedWords.map((item, idx) => `
          <button class="placed-chip" data-idx="${idx}">${item.word}</button>
        `).join('');
      }
    }

    targetZone?.addEventListener('click', (e) => {
      const placed = e.target.closest('.placed-chip');
      if (!placed) return;
      const idx = parseInt(placed.dataset.idx, 10);
      const removed = selectedWords.splice(idx, 1)[0];
      if (removed) {
        removed.chipEl.classList.remove('used');
      }
      renderTargetSentence();
    });

    document.getElementById('reset-sentence-btn')?.addEventListener('click', () => {
      selectedWords.forEach(sw => sw.chipEl.classList.remove('used'));
      selectedWords = [];
      renderTargetSentence();
    });

    document.getElementById('submit-sentence-btn')?.addEventListener('click', () => {
      const userSentence = selectedWords.map(sw => sw.word).join(' ');
      if (userSentence.toLowerCase().trim() === item.target.toLowerCase().trim()) {
        // CORRECT
        combo++;
        if (combo > maxCombo) maxCombo = combo;
        const addedScore = 150 * Math.min(combo, 4);
        score += addedScore;

        SoundService.playCombo();
        targetZone.classList.add('correct-glow');

        // Immediate transition to next sentence
        setTimeout(() => {
          currentIndex++;
          loadSentence();
        }, 50);
      } else {
        // WRONG
        combo = 0;
        SoundService.playError();
        targetZone.classList.add('wrong-glow');
        setTimeout(() => targetZone.classList.remove('wrong-glow'), 250);
      }
    });
  }

  loadSentence();
}

// ==========================================================================
// GAME 3: ERROR HUNTER (GRAMMAR TRAP)
// ==========================================================================
function initErrorHunter(container, totalQuestions = selectedQuestionCount) {
  let score = 0;
  let combo = 0;
  let maxCombo = 0;
  let currentIndex = 0;

  const dataset = getErrorHunterData()
    .sort(() => 0.5 - Math.random())
    .slice(0, totalQuestions);

  function loadQuestion() {
    if (currentIndex >= dataset.length) {
      finishGame('error-hunter', score, maxCombo, dataset.length);
      return;
    }

    const item = dataset[currentIndex];
    let selectedSegment = null;

    container.innerHTML = `
      <div class="game-stage animate-fade-in">
        <div class="stage-top-bar">
          <button class="back-arcade-btn" id="exit-game-btn">⬅ Thoát Game</button>
          <div class="stage-title">🔍 Error Hunter</div>
          <div class="stage-timer">🎯 Câu ${currentIndex + 1}/${dataset.length}</div>
        </div>

        <div class="game-score-row">
          <div class="score-badge">ĐIỂM: <span id="game-score">${score}</span></div>
          <div class="combo-badge">COMBO: x${Math.max(1, combo)}</div>
        </div>

        <p class="game-instruction">Chạm phần câu bị lỗi ngữ pháp và chọn đáp án sửa đổi đúng:</p>

        <!-- Sentence Segments -->
        <div class="sentence-hunter-card">
          <div class="hunter-segments" id="segments-container">
            ${item.sentenceParts.map((part, idx) => `
              <span class="hunter-segment" data-idx="${idx}">${part}</span>
            `).join(' ')}
          </div>
          <div class="translation-hint">💡 Ý nghĩa: "${item.translation}"</div>
        </div>

        <!-- Fix options -->
        <div class="fix-options-box hidden" id="options-box">
          <div class="options-title">Chọn phương án sửa đúng cho cụm từ vừa chọn:</div>
          <div class="options-grid" id="options-grid">
            ${item.correctOptions.map((opt, idx) => `
              <button class="option-btn" data-opt="${idx}">${opt}</button>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    document.getElementById('exit-game-btn')?.addEventListener('click', () => {
      window.location.hash = '#/games';
      renderArcadeHub(container);
    });

    const segmentsEl = document.getElementById('segments-container');
    const optionsBox = document.getElementById('options-box');

    segmentsEl?.addEventListener('click', (e) => {
      const seg = e.target.closest('.hunter-segment');
      if (!seg) return;

      document.querySelectorAll('.hunter-segment').forEach(s => s.classList.remove('selected'));
      seg.classList.add('selected');
      selectedSegment = parseInt(seg.dataset.idx, 10);

      optionsBox.classList.remove('hidden');
    });

    const optionsGrid = document.getElementById('options-grid');
    optionsGrid?.addEventListener('click', (e) => {
      const optBtn = e.target.closest('.option-btn');
      if (!optBtn) return;

      const optIdx = parseInt(optBtn.dataset.opt, 10);

      if (selectedSegment === item.errorIndex && optIdx === item.correctChoice) {
        // CORRECT
        combo++;
        if (combo > maxCombo) maxCombo = combo;
        score += 200 * Math.min(combo, 4);
        SoundService.playCorrect();

        optBtn.classList.add('correct');
        // Immediate transition to next question
        setTimeout(() => {
          currentIndex++;
          loadQuestion();
        }, 50);
      } else {
        // WRONG
        combo = 0;
        SoundService.playError();
        optBtn.classList.add('wrong');
        setTimeout(() => {
          optBtn.classList.remove('wrong');
        }, 300);
      }
    });
  }

  loadQuestion();
}

// ==========================================================================
// GAME 4: PHONEME BLITZ
// ==========================================================================
function initPhonemeBlitz(container, totalQuestions = selectedQuestionCount) {
  let score = 0;
  let combo = 0;
  let maxCombo = 0;
  let currentIndex = 0;

  const dataset = getPhonemeBlitzData()
    .sort(() => 0.5 - Math.random())
    .slice(0, totalQuestions);

  function speakWord(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    }
  }

  function loadQuestion() {
    if (currentIndex >= dataset.length) {
      finishGame('phoneme-blitz', score, maxCombo, dataset.length);
      return;
    }

    const item = dataset[currentIndex];
    let choices = [item.wordTarget, item.distractor].filter(Boolean).sort(() => 0.5 - Math.random());

    container.innerHTML = `
      <div class="game-stage animate-fade-in">
        <div class="stage-top-bar">
          <button class="back-arcade-btn" id="exit-game-btn">⬅ Thoát Game</button>
          <div class="stage-title">🎧 Phoneme Blitz</div>
          <div class="stage-timer">🎯 Câu ${currentIndex + 1}/${dataset.length}</div>
        </div>

        <div class="game-score-row">
          <div class="score-badge">ĐIỂM: <span id="game-score">${score}</span></div>
          <div class="combo-badge">COMBO: x${Math.max(1, combo)}</div>
        </div>

        <div class="phoneme-audio-card" style="text-align:center;padding:28px 20px;margin-bottom:24px;background:var(--card-bg);border:1px solid var(--border-color);border-radius:16px;">
          <button class="audio-play-big-btn" id="play-sound-btn" style="padding:14px 28px;font-size:1.1rem;font-weight:700;border-radius:30px;background:var(--accent-color);color:#fff;border:none;cursor:pointer;margin-bottom:12px;">
            🔊 Bấm để nghe phát âm
          </button>
          <p class="phoneme-hint" style="color:var(--text-secondary);font-size:0.95rem;">
            ${item.soundHint || item.translation || ''}
            <span class="ipa-badge" style="font-size:1rem;padding:3px 10px;margin-left:8px;">${IpaService.getIPA(item.wordTarget)}</span>
          </p>
        </div>

        <div class="phoneme-options-grid" id="phoneme-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:16px;">
          ${choices.map(c => `
            <button class="phoneme-choice-btn option-btn" data-word="${c}" style="padding:18px;font-size:1.1rem;font-weight:700;border-radius:12px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:4px;">
              <span>${c}</span>
              <span class="ipa-subtext" style="font-size:0.85rem;color:#c084fc;">${IpaService.getIPA(c)}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    document.getElementById('exit-game-btn')?.addEventListener('click', () => {
      window.location.hash = '#/games';
      renderArcadeHub(container);
    });

    const playBtn = document.getElementById('play-sound-btn');
    playBtn?.addEventListener('click', () => {
      speakWord(item.wordTarget || item.audioText || '');
    });

    setTimeout(() => speakWord(item.wordTarget || item.audioText || ''), 300);

    const grid = document.getElementById('phoneme-grid');
    grid?.addEventListener('click', (e) => {
      const btn = e.target.closest('.phoneme-choice-btn');
      if (!btn) return;

      const chosenWord = btn.dataset.word;
      if (chosenWord === item.wordTarget) {
        // CORRECT
        combo++;
        if (combo > maxCombo) maxCombo = combo;
        score += 150 * Math.min(combo, 4);
        SoundService.playCorrect();
        btn.classList.add('correct');

        // Immediate transition to next question
        setTimeout(() => {
          currentIndex++;
          loadQuestion();
        }, 50);
      } else {
        // WRONG
        combo = 0;
        SoundService.playError();
        btn.classList.add('wrong');
        setTimeout(() => btn.classList.remove('wrong'), 300);
      }
    });
  }

  loadQuestion();
}

// ==========================================================================
// GAME 5: SYNONYM & ANTONYM CHALLENGE
// ==========================================================================
function initSynonymAntonym(container, totalQuestions = selectedQuestionCount) {
  let score = 0;
  let combo = 0;
  let maxCombo = 0;
  let currentIndex = 0;

  const dataset = getSynonymAntonymData()
    .sort(() => 0.5 - Math.random())
    .slice(0, totalQuestions);

  function loadQuestion() {
    if (currentIndex >= dataset.length) {
      finishGame('synonym-antonym', score, maxCombo, dataset.length);
      return;
    }

    const item = dataset[currentIndex];
    const isSynonym = item.type === 'SYNONYM';

    container.innerHTML = `
      <div class="game-stage animate-fade-in">
        <div class="stage-top-bar">
          <button class="back-arcade-btn" id="exit-game-btn">⬅ Thoát Game</button>
          <div class="stage-title">🔄 Synonym & Antonym Challenge</div>
          <div class="stage-timer">🎯 Câu ${currentIndex + 1}/${dataset.length}</div>
        </div>

        <div class="game-score-row">
          <div class="score-badge">ĐIỂM: <span id="game-score">${score}</span></div>
          <div class="combo-badge">COMBO: x${Math.max(1, combo)}</div>
        </div>

        <div class="card" style="text-align:center;padding:32px 24px;margin-bottom:24px;background:var(--card-bg);border:1px solid var(--border-color);border-radius:16px;">
          <div style="margin-bottom:12px;">
            <span class="badge ${isSynonym ? 'badge-indigo' : 'badge-amber'}" style="font-size:0.9rem;padding:6px 16px;text-transform:uppercase;letter-spacing:1px;">
              ${isSynonym ? '✨ Tìm Từ ĐỒNG NGHĨA (Synonym)' : '🔥 Tìm Từ TRÁI NGHĨA (Antonym)'}
            </span>
          </div>
          <h2 style="font-size:2.2rem;font-weight:800;color:var(--text-primary);margin:12px 0 2px 0;">${item.word}</h2>
          <div class="ipa-text" style="font-size:1.05rem;color:#a855f7;margin-bottom:8px;font-weight:700;">${IpaService.getIPA(item.word)}</div>
          <p style="font-size:0.95rem;color:var(--text-secondary);">${item.targetMeaning}</p>
        </div>

        <div class="options-grid" id="synonym-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:16px;">
          ${item.options.map(opt => `
            <button class="option-btn" data-opt="${opt}" style="padding:16px;font-size:1.05rem;font-weight:700;border-radius:12px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;">
              <span>${opt}</span>
              <span class="ipa-badge">${IpaService.getIPA(opt)}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

    document.getElementById('exit-game-btn')?.addEventListener('click', () => {
      window.location.hash = '#/games';
      renderArcadeHub(container);
    });

    const grid = document.getElementById('synonym-grid');

    grid?.addEventListener('click', (e) => {
      const btn = e.target.closest('.option-btn');
      if (!btn || btn.disabled) return;

      grid.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
      const chosen = btn.dataset.opt;

      if (chosen === item.correctAnswer) {
        // CORRECT
        combo++;
        if (combo > maxCombo) maxCombo = combo;
        score += 150 * Math.min(combo, 4);
        SoundService.playCorrect();
        btn.classList.add('correct');
      } else {
        // WRONG
        combo = 0;
        SoundService.playError();
        btn.classList.add('wrong');
      }

      // Immediate transition to next question (no 1.1s - 1.6s result display delay)
      setTimeout(() => {
        currentIndex++;
        loadQuestion();
      }, 50);
    });
  }

  loadQuestion();
}

// ==========================================================================
// GAME 6: IRREGULAR VERBS MASTER
// ==========================================================================
function initIrregularVerbs(container, totalQuestions = selectedQuestionCount) {
  let score = 0;
  let combo = 0;
  let maxCombo = 0;
  let currentIndex = 0;

  const dataset = getIrregularVerbsGameData()
    .sort(() => 0.5 - Math.random())
    .slice(0, totalQuestions);

  function loadQuestion() {
    if (currentIndex >= dataset.length) {
      finishGame('irregular-verbs', score, maxCombo, dataset.length);
      return;
    }

    const item = dataset[currentIndex];

    container.innerHTML = `
      <div class="game-stage animate-fade-in">
        <div class="stage-top-bar">
          <button class="back-arcade-btn" id="exit-game-btn">⬅ Thoát Game</button>
          <div class="stage-title">📚 Irregular Verbs Master</div>
          <div class="stage-timer">🎯 Câu ${currentIndex + 1}/${dataset.length}</div>
        </div>

        <div class="game-score-row">
          <div class="score-badge">ĐIỂM: <span id="game-score">${score}</span></div>
          <div class="combo-badge">COMBO: x${Math.max(1, combo)}</div>
        </div>

        <div class="card" style="text-align:center;padding:32px 24px;margin-bottom:24px;background:var(--card-bg);border:1px solid var(--border-color);border-radius:16px;">
          <div style="margin-bottom:12px;">
            <span class="badge badge-amber" style="font-size:0.9rem;padding:6px 16px;text-transform:uppercase;letter-spacing:1px;">
              🎯 Động Từ Bất Quy Tắc (V1 ➔ V2 ➔ V3)
            </span>
          </div>
          <h2 style="font-size:2.2rem;font-weight:800;color:var(--text-primary);margin:12px 0 2px 0;">${item.v1}</h2>
          <div class="ipa-text" style="font-size:1.05rem;color:#a855f7;margin-bottom:8px;font-weight:700;">${IpaService.getIPA(item.v1)}</div>
          <p style="font-size:1rem;color:var(--text-secondary);font-weight:600;">${item.promptText}</p>
        </div>

        <div class="options-grid" id="verbs-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:16px;">
          ${item.options.map(opt => `
            <button class="option-btn" data-opt="${opt}" style="padding:16px;font-size:1.05rem;font-weight:700;border-radius:12px;cursor:pointer;display:flex;justify-content:space-between;align-items:center;">
              <span>${opt}</span>
              <span class="ipa-badge">${IpaService.getIPA(opt)}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;

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
        // CORRECT
        combo++;
        if (combo > maxCombo) maxCombo = combo;
        score += 150 * Math.min(combo, 4);
        SoundService.playCorrect();
        btn.classList.add('correct');
      } else {
        // WRONG
        combo = 0;
        SoundService.playError();
        btn.classList.add('wrong');
      }

      // Immediate transition to next question (no 1.1s - 1.6s result display delay)
      setTimeout(() => {
        currentIndex++;
        loadQuestion();
      }, 50);
    });
  }

  loadQuestion();
}

// --------------------------------------------------------------------------
// Finish Game & Record XP
// --------------------------------------------------------------------------
function finishGame(mode, score, maxCombo, totalQuestions = selectedQuestionCount) {
  SoundService.playVictory();
  const xpGained = Math.round(score / 5) + maxCombo * 10;
  StorageService.addGameResult(mode, score, xpGained, maxCombo);

  const container = document.getElementById('page-container');
  if (!container) return;

  const options = [5, 10, 15, 20, 30];

  container.innerHTML = `
    <div class="game-over-modal animate-scale-in">
      <div class="game-over-header">
        <span class="trophy-icon">🏆</span>
        <h2>TRẬN ĐẤU HOÀN THÀNH!</h2>
        <p class="mode-name">Chế độ: ${getModeName(mode)} (${totalQuestions} câu/thử thách)</p>
      </div>

      <div class="game-over-stats">
        <div class="result-stat-box">
          <span class="stat-label">Tổng Điểm</span>
          <span class="stat-value gold">${score}</span>
        </div>
        <div class="result-stat-box">
          <span class="stat-label">XP Nhận Được</span>
          <span class="stat-value green">+${xpGained} XP</span>
        </div>
        <div class="result-stat-box">
          <span class="stat-label">Combo Cao Nhất</span>
          <span class="stat-value purple">x${maxCombo}</span>
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
          ${options.map(opt => `
            <button class="count-opt-btn ${selectedQuestionCount === opt ? 'active' : ''}" data-count="${opt}">
              ${opt} câu
            </button>
          `).join('')}
        </div>
      </div>

      <div class="game-over-actions">
        <button class="restart-game-btn" id="restart-game-btn" data-mode="${mode}">
          🔄 Chơi lại (${selectedQuestionCount} câu)
        </button>
        <button class="exit-arcade-btn" id="exit-arcade-btn">
          🏠 Về Arcade Hub
        </button>
      </div>
    </div>
  `;

  container.querySelectorAll('.count-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.count-opt-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedQuestionCount = parseInt(btn.dataset.count, 10);
      const restartBtn = document.getElementById('restart-game-btn');
      if (restartBtn) restartBtn.textContent = `🔄 Chơi lại (${selectedQuestionCount} câu)`;
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
