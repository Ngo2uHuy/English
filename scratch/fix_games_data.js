import fs from 'fs';
import { VOCAB_BANK } from '../src/data/vocab-bank.js';
import * as originalGd from '../src/data/games-data.js';

console.log("=== CLEANING AND REBUILDING GAMES-DATA.JS ===");

const syntheticPattern = /(Anti|Counter|Post|Pre|Sub|Dis|Re|Un|Pro|Inter|Super|Under|Over|Mis)\s+[a-zà-ỹ]/i;

// 1. SPEED_MATCH_PAIRS: Build 3,000 pure hand-curated pairs directly from VOCAB_BANK
const speedMatchPairs = [];
VOCAB_BANK.forEach(item => {
  speedMatchPairs.push({
    en: item.en,
    vn: item.vn,
    category: item.category || 'General'
  });
});

console.log(`Rebuilt SPEED_MATCH_PAIRS from clean VOCAB_BANK: ${speedMatchPairs.length} pairs`);

// 2. Filter SYNONYM_ANTONYM_DATA
const cleanSynonymAntonym = (originalGd.SYNONYM_ANTONYM_DATA || []).filter(item => {
  const s = JSON.stringify(item);
  if (syntheticPattern.test(s)) return false;
  if (/antiable|disactive|interable|unactive/i.test(s)) return false;
  return true;
});
console.log(`Clean SYNONYM_ANTONYM_DATA count: ${cleanSynonymAntonym.length}`);

// 3. Filter SENTENCE_DASH_DATA
const cleanSentenceDash = (originalGd.SENTENCE_DASH_DATA || []).filter(item => {
  const s = JSON.stringify(item);
  if (syntheticPattern.test(s)) return false;
  if (/antiable|disactive|interable|unactive/i.test(s)) return false;
  return true;
});
console.log(`Clean SENTENCE_DASH_DATA count: ${cleanSentenceDash.length}`);

// 4. Filter ERROR_HUNTER_DATA
const cleanErrorHunter = (originalGd.ERROR_HUNTER_DATA || []).filter(item => {
  const s = JSON.stringify(item);
  if (syntheticPattern.test(s)) return false;
  if (/antiable|disactive|interable|unactive/i.test(s)) return false;
  return true;
});
console.log(`Clean ERROR_HUNTER_DATA count: ${cleanErrorHunter.length}`);

const PHONEME_BLITZ_DATA = originalGd.PHONEME_BLITZ_DATA || [];
const IRREGULAR_VERBS_GAME_DATA = originalGd.IRREGULAR_VERBS_GAME_DATA || [];

// Build new games-data.js
const newGamesDataContent = `// ==========================================================================
// CENTRALIZED GAMES DATABANK (100% PURE HAND-CURATED DATA)
// ==========================================================================

import { VOCAB_BANK } from './vocab-bank.js';

export const SPEED_MATCH_PAIRS = ${JSON.stringify(speedMatchPairs, null, 2)};
export const SYNONYM_ANTONYM_DATA = ${JSON.stringify(cleanSynonymAntonym, null, 2)};
export const SENTENCE_DASH_DATA = ${JSON.stringify(cleanSentenceDash, null, 2)};
export const ERROR_HUNTER_DATA = ${JSON.stringify(cleanErrorHunter, null, 2)};
export const PHONEME_BLITZ_DATA = ${JSON.stringify(PHONEME_BLITZ_DATA, null, 2)};
export const IRREGULAR_VERBS_GAME_DATA = ${JSON.stringify(IRREGULAR_VERBS_GAME_DATA, null, 2)};

export function getSpeedMatchPairs() { return SPEED_MATCH_PAIRS; }
export function getSynonymAntonymData() { return SYNONYM_ANTONYM_DATA; }
export function getSentenceDashData() { return SENTENCE_DASH_DATA; }
export function getErrorHunterData() { return ERROR_HUNTER_DATA; }
export function getPhonemeBlitzData() { return PHONEME_BLITZ_DATA; }
export function getIrregularVerbsGameData() { return IRREGULAR_VERBS_GAME_DATA; }
`;

fs.writeFileSync('./src/data/games-data.js', newGamesDataContent, 'utf8');
console.log("Successfully wrote purified src/data/games-data.js");
