import fs from 'fs';
import path from 'path';

console.log("=== APPLYING 3000 IRREGULAR VERB ITEMS & FIXING GETTERS IN games-data.js ===");

const gamesDataPath = path.join(process.cwd(), 'src', 'data', 'games-data.js');
const jsonPath = path.join(process.cwd(), 'scratch', 'final_3000_unique_irregular_verbs.json');

const irregularItems = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
console.log(`Loaded ${irregularItems.length} irregular verb items.`);

let fileContent = fs.readFileSync(gamesDataPath, 'utf-8');

// Replace IRREGULAR_VERBS_GAME_DATA declaration
const targetDecl = 'export const IRREGULAR_VERBS_GAME_DATA = [';
const declIndex = fileContent.indexOf(targetDecl);

if (declIndex === -1) {
  console.error("Could not find export const IRREGULAR_VERBS_GAME_DATA in games-data.js!");
  process.exit(1);
}

const beforeDecl = fileContent.slice(0, declIndex);

const newIrregularDecl = `export const IRREGULAR_VERBS_GAME_DATA = ${JSON.stringify(irregularItems, null, 2)};\n\n` +
`// Returns exactly 3000 UNIQUE pairs
export function getSpeedMatchPairs(filterLevel = null) {
  if (filterLevel && typeof filterLevel === 'string') {
    return SPEED_MATCH_PAIRS.filter(p => p.category && p.category.toLowerCase().includes(filterLevel.toLowerCase()));
  }
  return SPEED_MATCH_PAIRS;
}

export function getSentenceDashData(filterLevel = null) {
  if (filterLevel && typeof filterLevel === 'string') {
    return SENTENCE_DASH_DATA.filter(p => p.category && p.category.toLowerCase().includes(filterLevel.toLowerCase()));
  }
  return SENTENCE_DASH_DATA;
}

export function getErrorHunterData(filterLevel = null) {
  if (filterLevel && typeof filterLevel === 'string') {
    return ERROR_HUNTER_DATA.filter(p => p.category && p.category.toLowerCase().includes(filterLevel.toLowerCase()));
  }
  return ERROR_HUNTER_DATA;
}

export function getPhonemeBlitzData(filterLevel = null) {
  if (filterLevel && typeof filterLevel === 'string') {
    return PHONEME_BLITZ_DATA.filter(p => p.category && p.category.toLowerCase().includes(filterLevel.toLowerCase()));
  }
  return PHONEME_BLITZ_DATA;
}

export function getSynonymAntonymData(filterLevel = null) {
  if (filterLevel && typeof filterLevel === 'string') {
    return SYNONYM_ANTONYM_DATA.filter(p => p.category && p.category.toLowerCase().includes(filterLevel.toLowerCase()));
  }
  return SYNONYM_ANTONYM_DATA;
}

export function getIrregularVerbsGameData(filterLevel = null) {
  if (filterLevel && typeof filterLevel === 'string') {
    return IRREGULAR_VERBS_GAME_DATA.filter(p => p.category && p.category.toLowerCase().includes(filterLevel.toLowerCase()));
  }
  return IRREGULAR_VERBS_GAME_DATA;
}
`;

fs.writeFileSync(gamesDataPath, beforeDecl + newIrregularDecl);
console.log("Successfully updated games-data.js!");
