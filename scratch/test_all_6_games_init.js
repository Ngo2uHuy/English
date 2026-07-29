import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const gamesJsPath = path.join(__dirname, '../src/pages/games.js');
const gamesDataPath = path.join(__dirname, '../src/data/games-data.js');

const code = fs.readFileSync(gamesJsPath, 'utf8');

// Verify that all 6 modes exist in switch statement
const requiredModes = ['speed-match', 'sentence-dash', 'error-hunter', 'phoneme-blitz', 'synonym-antonym', 'irregular-verbs'];

modesLoop: for (const mode of requiredModes) {
  if (!code.includes(`case '${mode}':`)) {
    console.error(`ERROR: Missing switch case for mode: ${mode}`);
    process.exit(1);
  }
}

console.log("All 6 modes are correctly handled in games.js switch statement!");
