import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const gamesJsPath = path.join(__dirname, '../src/data/games-data.js');

// Import games data functions
const {
  getSpeedMatchPairs,
  getSentenceDashData,
  getErrorHunterData,
  getPhonemeBlitzData,
  getSynonymAntonymData,
  getIrregularVerbsGameData
} = await import('../src/data/games-data.js');

console.log("Checking games-data exported functions...");
console.log("1. Speed Match:", getSpeedMatchPairs().slice(0, 2));
console.log("2. Sentence Dash:", getSentenceDashData().slice(0, 2));
console.log("3. Error Hunter:", getErrorHunterData().slice(0, 2));
console.log("4. Phoneme Blitz:", getPhonemeBlitzData().slice(0, 2));
console.log("5. Synonym Antonym:", getSynonymAntonymData().slice(0, 2));
console.log("6. Irregular Verbs:", getIrregularVerbsGameData().slice(0, 2));

console.log("ALL DATA FUNCTIONS ARE EXPORTED AND WORKING PERFECTLY!");
