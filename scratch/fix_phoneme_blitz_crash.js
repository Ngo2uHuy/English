import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const gamesJsPath = path.join(__dirname, '../src/pages/games.js');
let code = fs.readFileSync(gamesJsPath, 'utf8');

// Replace dataset sources to use get...() getters instead of raw base arrays
code = code.replace(
  `const shuffledPairs = [...SPEED_MATCH_PAIRS].sort(() => 0.5 - Math.random());`,
  `const shuffledPairs = getSpeedMatchPairs().sort(() => 0.5 - Math.random());`
);

code = code.replace(
  `const dataset = [...SENTENCE_DASH_DATA].sort(() => 0.5 - Math.random());`,
  `const dataset = getSentenceDashData().sort(() => 0.5 - Math.random());`
);

code = code.replace(
  `const dataset = [...ERROR_HUNTER_DATA].sort(() => 0.5 - Math.random());`,
  `const dataset = getErrorHunterData().sort(() => 0.5 - Math.random());`
);

code = code.replace(
  `const dataset = [...PHONEME_BLITZ_DATA].sort(() => 0.5 - Math.random());`,
  `const dataset = getPhonemeBlitzData().sort(() => 0.5 - Math.random());`
);

// Fix initPhonemeBlitz broken property names
const oldPhonemeBlock = `    const item = dataset[currentIndex];
    let choices = [item.word, ...item.distractors].sort(() => 0.5 - Math.random());

    container.innerHTML = \`
      <div class="game-stage animate-fade-in">
        <div class="stage-top-bar">
          <button class="back-arcade-btn" id="exit-game-btn">⬅ Thoát Game</button>
          <div class="stage-title">🎧 Phoneme Blitz</div>
          <div class="stage-timer">Câu \${currentIndex + 1}/\${dataset.length}</div>
        </div>

        <div class="game-score-row">
          <div class="score-badge">ĐIỂM: <span id="game-score">\${score}</span></div>
          <div class="combo-badge">COMBO: x\${Math.max(1, combo)}</div>
        </div>

        <!-- Audio Play Button -->
        <div class="phoneme-audio-card">
          <button class="audio-play-big-btn" id="play-sound-btn">
            🔊 Bấm để nghe phát âm
          </button>
          <p class="phoneme-hint">\${item.hint}</p>
        </div>

        <!-- Word options grid -->
        <div class="phoneme-options-grid" id="phoneme-grid">
          \${choices.map(c => \`
            <button class="phoneme-choice-btn" data-word="\${c}">\${c}</button>
          \`).join('')}
        </div>
      </div>
    \`;

    document.getElementById('exit-game-btn')?.addEventListener('click', () => {
      window.location.hash = '#/games';
    });

    const playBtn = document.getElementById('play-sound-btn');
    playBtn?.addEventListener('click', () => {
      speakWord(item.word);
    });

    // Auto-play sound once on load
    setTimeout(() => speakWord(item.word), 300);

    const grid = document.getElementById('phoneme-grid');
    grid?.addEventListener('click', (e) => {
      const btn = e.target.closest('.phoneme-choice-btn');
      if (!btn) return;

      const chosenWord = btn.dataset.word;
      if (chosenWord === item.word) {`;

const newPhonemeBlock = `    const item = dataset[currentIndex];
    let choices = [item.wordTarget, item.distractor].filter(Boolean).sort(() => 0.5 - Math.random());

    container.innerHTML = \`
      <div class="game-stage animate-fade-in">
        <div class="stage-top-bar">
          <button class="back-arcade-btn" id="exit-game-btn">⬅ Thoát Game</button>
          <div class="stage-title">🎧 Phoneme Blitz</div>
          <div class="stage-timer">Câu \${currentIndex + 1}/\${dataset.length}</div>
        </div>

        <div class="game-score-row">
          <div class="score-badge">ĐIỂM: <span id="game-score">\${score}</span></div>
          <div class="combo-badge">COMBO: x\${Math.max(1, combo)}</div>
        </div>

        <!-- Audio Play Button -->
        <div class="phoneme-audio-card" style="text-align:center;padding:28px 20px;margin-bottom:24px;background:var(--card-bg);border:1px solid var(--border-color);border-radius:16px;">
          <button class="audio-play-big-btn" id="play-sound-btn" style="padding:14px 28px;font-size:1.1rem;font-weight:700;border-radius:30px;background:var(--accent-color);color:#fff;border:none;cursor:pointer;margin-bottom:12px;">
            🔊 Bấm để nghe phát âm
          </button>
          <p class="phoneme-hint" style="color:var(--text-secondary);font-size:0.95rem;">\${item.soundHint || item.translation || ''}</p>
        </div>

        <!-- Word options grid -->
        <div class="phoneme-options-grid" id="phoneme-grid" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:16px;">
          \${choices.map(c => \`
            <button class="phoneme-choice-btn option-btn" data-word="\${c}" style="padding:18px;font-size:1.1rem;font-weight:700;border-radius:12px;cursor:pointer;">\${c}</button>
          \`).join('')}
        </div>
      </div>
    \`;

    document.getElementById('exit-game-btn')?.addEventListener('click', () => {
      window.location.hash = '#/games';
    });

    const playBtn = document.getElementById('play-sound-btn');
    playBtn?.addEventListener('click', () => {
      speakWord(item.wordTarget || item.audioText || '');
    });

    // Auto-play sound once on load
    setTimeout(() => speakWord(item.wordTarget || item.audioText || ''), 300);

    const grid = document.getElementById('phoneme-grid');
    grid?.addEventListener('click', (e) => {
      const btn = e.target.closest('.phoneme-choice-btn');
      if (!btn) return;

      const chosenWord = btn.dataset.word;
      if (chosenWord === item.wordTarget) {`;

code = code.replace(oldPhonemeBlock, newPhonemeBlock);

fs.writeFileSync(gamesJsPath, code, 'utf8');
console.log("Successfully fixed Phoneme Blitz crash and updated getters!");
