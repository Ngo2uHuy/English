import fs from 'fs';
import path from 'path';

const gamesDataPath = './src/data/games-data.js';
const clean3000Path = './scratch/final_3000_unique_speed_match.json';

const speedMatch3000 = JSON.parse(fs.readFileSync(clean3000Path, 'utf8'));
console.log('Loaded clean 3000 count:', speedMatch3000.length);

const existingContent = fs.readFileSync(gamesDataPath, 'utf8');

// Find where SPEED_MATCH_PAIRS starts and ends
const startIdx = existingContent.indexOf('export const SPEED_MATCH_PAIRS = [');
if (startIdx === -1) {
  console.error('SPEED_MATCH_PAIRS export not found!');
  process.exit(1);
}

// Find where SENTENCE_DASH_DATA or next export begins
const nextExportIdx = existingContent.indexOf('export const SENTENCE_DASH_DATA = [');
if (nextExportIdx === -1) {
  console.error('SENTENCE_DASH_DATA export not found!');
  process.exit(1);
}

const before = existingContent.slice(0, startIdx);
const after = existingContent.slice(nextExportIdx);

const newSpeedMatchCode = `export const SPEED_MATCH_PAIRS = ${JSON.stringify(speedMatch3000, null, 2)};\n\n`;

const fullNewContent = before + newSpeedMatchCode + after;

fs.writeFileSync(gamesDataPath, fullNewContent, 'utf8');
console.log('Successfully updated games-data.js with 3000 FULL UNIQUE REAL Speed Match Pairs!');
