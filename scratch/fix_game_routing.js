import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const gamesJsPath = path.join(__dirname, '../src/pages/games.js');
let code = fs.readFileSync(gamesJsPath, 'utf8');

// 1. Replace onclick in arcade cards with data-mode attributes
code = code.replace(
  `<div class="arcade-card neon-purple" onclick="window.location.hash='#/games?mode=speed-match'">`,
  `<div class="arcade-card neon-purple" data-mode="speed-match">`
);
code = code.replace(
  `<div class="arcade-card neon-blue" onclick="window.location.hash='#/games?mode=sentence-dash'">`,
  `<div class="arcade-card neon-blue" data-mode="sentence-dash">`
);
code = code.replace(
  `<div class="arcade-card neon-amber" onclick="window.location.hash='#/games?mode=error-hunter'">`,
  `<div class="arcade-card neon-amber" data-mode="error-hunter">`
);
code = code.replace(
  `<div class="arcade-card neon-green" onclick="window.location.hash='#/games?mode=phoneme-blitz'">`,
  `<div class="arcade-card neon-green" data-mode="phoneme-blitz">`
);
code = code.replace(
  `<div class="arcade-card neon-rose" onclick="window.location.hash='#/games?mode=synonym-antonym'">`,
  `<div class="arcade-card neon-rose" data-mode="synonym-antonym">`
);
code = code.replace(
  `<div class="arcade-card neon-amber" onclick="window.location.hash='#/games?mode=irregular-verbs'">`,
  `<div class="arcade-card neon-amber" data-mode="irregular-verbs">`
);

// 2. Add event listener for arcade grid clicks in renderArcadeHub
const toggleSoundMarker = `  document.getElementById('toggle-sound-btn')?.addEventListener('click', (e) => {`;
const gridClickCode = `  container.querySelectorAll('.arcade-card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const mode = card.dataset.mode;
      if (mode) {
        window.location.hash = \`#/games?mode=\${mode}\`;
        renderGamesPage(mode);
      }
    });
  });

  document.getElementById('toggle-sound-btn')?.addEventListener('click', (e) => {`;

code = code.replace(toggleSoundMarker, gridClickCode);

// 3. Fix finishGame buttons and event listeners
const oldGameOverActions = `<div class="game-over-actions">
        <button class="restart-game-btn" onclick="window.location.hash='#/games?mode=\${mode}'">
          🔄 Chơi lại
        </button>
        <button class="exit-arcade-btn" onclick="window.location.hash='#/games'">
          🏠 Về Arcade Hub
        </button>
      </div>`;

const newGameOverActions = `<div class="game-over-actions">
        <button class="restart-game-btn" id="restart-game-btn" data-mode="\${mode}">
          🔄 Chơi lại
        </button>
        <button class="exit-arcade-btn" id="exit-arcade-btn">
          🏠 Về Arcade Hub
        </button>
      </div>`;

code = code.replace(oldGameOverActions, newGameOverActions);

// Add event listeners for finishGame buttons
const finishGameEndMarker = `    </div>
  \`;
}`;

const finishGameEndReplacement = `    </div>
  \`;

  document.getElementById('restart-game-btn')?.addEventListener('click', () => {
    window.location.hash = \`#/games?mode=\${mode}\`;
    renderGamesPage(mode);
  });

  document.getElementById('exit-arcade-btn')?.addEventListener('click', () => {
    window.location.hash = '#/games';
    renderGamesPage(null);
  });
}`;

code = code.replace(finishGameEndMarker, finishGameEndReplacement);

// 4. Update getModeName to include all 6 games
const oldGetModeName = `function getModeName(mode) {
  switch (mode) {
    case 'speed-match': return 'Speed Word Match ⚡';
    case 'sentence-dash': return 'Sentence Builder Dash 🚀';
    case 'error-hunter': return 'Error Hunter 🔍';
    case 'phoneme-blitz': return 'Phoneme Blitz 🎧';
    default: return 'Arcade Game';
  }
}`;

const newGetModeName = `function getModeName(mode) {
  switch (mode) {
    case 'speed-match': return 'Speed Word Match ⚡';
    case 'sentence-dash': return 'Sentence Builder Dash 🚀';
    case 'error-hunter': return 'Error Hunter 🔍';
    case 'phoneme-blitz': return 'Phoneme Blitz 🎧';
    case 'synonym-antonym': return 'Synonym & Antonym Challenge 🔄';
    case 'irregular-verbs': return 'Irregular Verbs Master 📚';
    default: return 'Arcade Game';
  }
}`;

code = code.replace(oldGetModeName, newGetModeName);

fs.writeFileSync(gamesJsPath, code, 'utf8');
console.log("Successfully fixed game card click routing & finish game handlers!");
