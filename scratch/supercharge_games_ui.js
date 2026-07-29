import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const gamesJsPath = path.join(__dirname, '../src/pages/games.js');
let code = fs.readFileSync(gamesJsPath, 'utf8');

// 1. Update imports
code = code.replace(
  `import {
  getSpeedMatchPairs,
  getSentenceDashData,
  getErrorHunterData,
  getPhonemeBlitzData,
} from '../data/games-data.js';`,
  `import {
  getSpeedMatchPairs,
  getSentenceDashData,
  getErrorHunterData,
  getPhonemeBlitzData,
  getSynonymAntonymData,
  getIrregularVerbsGameData,
} from '../data/games-data.js';`
);

// 2. Update currentGame type comment
code = code.replace(
  `let currentGame = null; // 'speed-match' | 'sentence-dash' | 'error-hunter' | 'phoneme-blitz' | null`,
  `let currentGame = null; // 'speed-match' | 'sentence-dash' | 'error-hunter' | 'phoneme-blitz' | 'synonym-antonym' | 'irregular-verbs' | null`
);

// 3. Update Arcade Hub Cards to include 6 games
const oldArcadeGridEnd = `        <!-- Game 4: Phoneme Blitz -->
        <div class="arcade-card neon-green" onclick="window.location.hash='#/games?mode=phoneme-blitz'">
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
      </div>`;

const newArcadeGridEnd = `        <!-- Game 4: Phoneme Blitz -->
        <div class="arcade-card neon-green" onclick="window.location.hash='#/games?mode=phoneme-blitz'">
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
        <div class="arcade-card neon-rose" onclick="window.location.hash='#/games?mode=synonym-antonym'">
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
        <div class="arcade-card neon-amber" onclick="window.location.hash='#/games?mode=irregular-verbs'">
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
      </div>`;

code = code.replace(oldArcadeGridEnd, newArcadeGridEnd);

// Update Header subtitle badge to show 18,000+ items
code = code.replace('ARCADE MODE (12.000+ ITEMS)', 'ARCADE MODE (18.000+ ITEMS)');

// 4. Update Switch Cases in renderActiveGame
const oldSwitch = `    case 'phoneme-blitz':
      initPhonemeBlitz(container);
      break;`;

const newSwitch = `    case 'phoneme-blitz':
      initPhonemeBlitz(container);
      break;
    case 'synonym-antonym':
      initSynonymAntonym(container);
      break;
    case 'irregular-verbs':
      initIrregularVerbs(container);
      break;`;

code = code.replace(oldSwitch, newSwitch);

// 5. Append Implementation Functions for Game 5 and Game 6
const newGamesImplementation = `

// ==========================================================================
// GAME 5: SYNONYM & ANTONYM CHALLENGE
// ==========================================================================
function initSynonymAntonym(container) {
  let score = 0;
  let combo = 0;
  let maxCombo = 0;
  let timeLeft = 45;
  let currentIndex = 0;

  const dataset = getSynonymAntonymData().sort(() => 0.5 - Math.random());

  function loadQuestion() {
    if (currentIndex >= dataset.length || timeLeft <= 0) {
      clearInterval(gameTimerInterval);
      finishGame('synonym-antonym', score, maxCombo);
      return;
    }

    const item = dataset[currentIndex];
    const isSynonym = item.type === 'SYNONYM';

    container.innerHTML = \`
      <div class="game-stage animate-fade-in">
        <div class="stage-top-bar">
          <button class="back-arcade-btn" id="exit-game-btn">⬅ Thoát Game</button>
          <div class="stage-title">🔄 Synonym & Antonym Challenge</div>
          <div class="stage-timer" id="game-timer">⏳ \${timeLeft}s</div>
        </div>

        <div class="game-score-row">
          <div class="score-badge">ĐIỂM: <span id="game-score">\${score}</span></div>
          <div class="combo-badge">COMBO: x\${Math.max(1, combo)}</div>
        </div>

        <div class="card" style="text-align:center;padding:32px 24px;margin-bottom:24px;background:var(--card-bg);border:1px solid var(--border-color);border-radius:16px;">
          <div style="margin-bottom:12px;">
            <span class="badge \${isSynonym ? 'badge-indigo' : 'badge-amber'}" style="font-size:0.9rem;padding:6px 16px;text-transform:uppercase;letter-spacing:1px;">
              \${isSynonym ? '✨ Tìm Từ ĐỒNG NGHĨA (Synonym)' : '🔥 Tìm Từ TRÁI NGHĨA (Antonym)'}
            </span>
          </div>
          <h2 style="font-size:2.2rem;font-weight:800;color:var(--text-primary);margin:12px 0 6px 0;">\${item.word}</h2>
          <p style="font-size:0.95rem;color:var(--text-secondary);">\${item.targetMeaning}</p>
        </div>

        <!-- Options Grid -->
        <div class="options-grid" id="synonym-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:16px;">
          \${item.options.map((opt, idx) => \`
            <button class="option-btn" data-opt="\${opt}" style="padding:18px;font-size:1.1rem;font-weight:700;border-radius:12px;cursor:pointer;">\${opt}</button>
          \`).join('')}
        </div>

        <div id="explanation-box" class="card hidden" style="margin-top:20px;padding:16px;text-align:center;border-left:4px solid var(--accent-color);"></div>
      </div>
    \`;

    document.getElementById('exit-game-btn')?.addEventListener('click', () => {
      clearInterval(gameTimerInterval);
      window.location.hash = '#/games';
    });

    const grid = document.getElementById('synonym-grid');
    const expBox = document.getElementById('explanation-box');

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
        timeLeft += 2;
        SoundService.playCorrect();

        btn.classList.add('correct');
        if (expBox) {
          expBox.className = 'card badge-success';
          expBox.style.marginTop = '20px';
          expBox.innerHTML = \`✅ <strong>Chính xác!</strong> \${item.explanation}\`;
          expBox.classList.remove('hidden');
        }

        setTimeout(() => {
          currentIndex++;
          loadQuestion();
        }, 1100);
      } else {
        // WRONG
        combo = 0;
        SoundService.playError();
        btn.classList.add('wrong');

        if (expBox) {
          expBox.className = 'card badge-danger';
          expBox.style.marginTop = '20px';
          expBox.innerHTML = \`❌ <strong>Chưa chính xác!</strong> Đáp án đúng là <strong>\${item.correctAnswer}</strong>. \${item.explanation}\`;
          expBox.classList.remove('hidden');
        }

        setTimeout(() => {
          currentIndex++;
          loadQuestion();
        }, 1600);
      }
    });
  }

  gameTimerInterval = setInterval(() => {
    timeLeft--;
    const timerEl = document.getElementById('game-timer');
    if (timerEl) timerEl.textContent = \`⏳ \${timeLeft}s\`;

    if (timeLeft <= 0) {
      clearInterval(gameTimerInterval);
      finishGame('synonym-antonym', score, maxCombo);
    }
  }, 1000);

  loadQuestion();
}

// ==========================================================================
// GAME 6: IRREGULAR VERBS MASTER
// ==========================================================================
function initIrregularVerbs(container) {
  let score = 0;
  let combo = 0;
  let maxCombo = 0;
  let timeLeft = 45;
  let currentIndex = 0;

  const dataset = getIrregularVerbsGameData().sort(() => 0.5 - Math.random());

  function loadQuestion() {
    if (currentIndex >= dataset.length || timeLeft <= 0) {
      clearInterval(gameTimerInterval);
      finishGame('irregular-verbs', score, maxCombo);
      return;
    }

    const item = dataset[currentIndex];

    container.innerHTML = \`
      <div class="game-stage animate-fade-in">
        <div class="stage-top-bar">
          <button class="back-arcade-btn" id="exit-game-btn">⬅ Thoát Game</button>
          <div class="stage-title">📚 Irregular Verbs Master</div>
          <div class="stage-timer" id="game-timer">⏳ \${timeLeft}s</div>
        </div>

        <div class="game-score-row">
          <div class="score-badge">ĐIỂM: <span id="game-score">\${score}</span></div>
          <div class="combo-badge">COMBO: x\${Math.max(1, combo)}</div>
        </div>

        <div class="card" style="text-align:center;padding:32px 24px;margin-bottom:24px;background:var(--card-bg);border:1px solid var(--border-color);border-radius:16px;">
          <div style="margin-bottom:12px;">
            <span class="badge badge-amber" style="font-size:0.9rem;padding:6px 16px;text-transform:uppercase;letter-spacing:1px;">
              🎯 Động Từ Bất Quy Tắc (V1 ➔ V2 ➔ V3)
            </span>
          </div>
          <h2 style="font-size:2.2rem;font-weight:800;color:var(--text-primary);margin:12px 0 6px 0;">\${item.v1}</h2>
          <p style="font-size:1rem;color:var(--text-secondary);font-weight:600;">\${item.promptText}</p>
        </div>

        <!-- Options Grid -->
        <div class="options-grid" id="verbs-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:16px;">
          \${item.options.map((opt, idx) => \`
            <button class="option-btn" data-opt="\${opt}" style="padding:18px;font-size:1.1rem;font-weight:700;border-radius:12px;cursor:pointer;">\${opt}</button>
          \`).join('')}
        </div>

        <div id="explanation-box" class="card hidden" style="margin-top:20px;padding:16px;text-align:center;border-left:4px solid var(--accent-color);"></div>
      </div>
    \`;

    document.getElementById('exit-game-btn')?.addEventListener('click', () => {
      clearInterval(gameTimerInterval);
      window.location.hash = '#/games';
    });

    const grid = document.getElementById('verbs-grid');
    const expBox = document.getElementById('explanation-box');

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
        timeLeft += 2;
        SoundService.playCorrect();

        btn.classList.add('correct');
        if (expBox) {
          expBox.className = 'card badge-success';
          expBox.style.marginTop = '20px';
          expBox.innerHTML = \`✅ <strong>Chính xác!</strong> \${item.translation}. \${item.explanation}\`;
          expBox.classList.remove('hidden');
        }

        setTimeout(() => {
          currentIndex++;
          loadQuestion();
        }, 1100);
      } else {
        // WRONG
        combo = 0;
        SoundService.playError();
        btn.classList.add('wrong');

        if (expBox) {
          expBox.className = 'card badge-danger';
          expBox.style.marginTop = '20px';
          expBox.innerHTML = \`❌ <strong>Chưa chính xác!</strong> Đáp án đúng là <strong>\${item.correctAnswer}</strong>. \${item.translation}\`;
          expBox.classList.remove('hidden');
        }

        setTimeout(() => {
          currentIndex++;
          loadQuestion();
        }, 1600);
      }
    });
  }

  gameTimerInterval = setInterval(() => {
    timeLeft--;
    const timerEl = document.getElementById('game-timer');
    if (timerEl) timerEl.textContent = \`⏳ \${timeLeft}s\`;

    if (timeLeft <= 0) {
      clearInterval(gameTimerInterval);
      finishGame('irregular-verbs', score, maxCombo);
    }
  }, 1000);

  loadQuestion();
}
`;

fs.writeFileSync(gamesJsPath, code + newGamesImplementation, 'utf8');
console.log("Successfully added Synonym & Antonym Challenge and Irregular Verbs Master to games.js!");
