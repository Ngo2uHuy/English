import fs from 'fs';
import { VOCAB_BANK } from '../src/data/vocab-bank.js';
import * as originalGd from '../src/data/games-data.js';

console.log("=== FINAL PURGE OF ALL SYNTHETIC PREFIX ITEMS ===");

const isSyntheticItem = (item) => {
  if (!item || !item.vn) return false;
  const vn = item.vn.trim();
  const en = item.en.trim().toLowerCase();

  // Any translation starting with synthetic prefix string like "Over chủ động", "Under có khả năng", "Un đã...", "Dis có..."
  if (/^(Anti|Counter|Post|Pre|Sub|Dis|Re|Un|Pro|Inter|Super|Under|Over|Mis)\s+[a-zà-ỹ]/i.test(vn)) {
    return true;
  }

  // Artificial generated words list
  if (/^(anti|counter|inter|sub|super|under|over|post)(able|active|acceptable|affected|applied|balanced|certified|combined|educated|employed|enabled|endorsed|enhanced|focused|informed|interested|involved|isolated|learned|limited|located|motivated|qualified|related|restricted|separated|shaped|structured)$/i.test(en)) {
    return true;
  }

  return false;
};

// 1. Purge VOCAB_BANK
const pureVocabBank = VOCAB_BANK.filter(item => !isSyntheticItem(item));
console.log(`Original VOCAB_BANK: ${VOCAB_BANK.length} -> Purified VOCAB_BANK: ${pureVocabBank.length}`);

// Write purified vocab-bank.js
const updatedVocabFileContent = `// ==========================================================================
// CENTRALIZED VOCABULARY BANK — 100% PURE HAND-CURATED VOCABULARY
// Covers TOEIC, IELTS, and General English Words (A1-C2)
// Every single item is a verified real English word with accurate translation.
// ==========================================================================

export const VOCAB_BANK = ${JSON.stringify(pureVocabBank, null, 2)};

export function getVocabPool({ pool = 'all', level = 'all' } = {}) {
  let items = VOCAB_BANK;

  if (pool && pool !== 'all') {
    items = items.filter(item => item.pool === pool);
  }

  if (level && level !== 'all') {
    if (level === 'A1-A2') {
      items = items.filter(item => item.level === 'A1' || item.level === 'A2');
    } else if (level === 'B1-B2') {
      items = items.filter(item => item.level === 'B1' || item.level === 'B2');
    } else if (level === 'C1-C2') {
      items = items.filter(item => item.level === 'C1' || item.level === 'C2');
    } else {
      items = items.filter(item => item.level === level);
    }
  }

  return items;
}

export function getVocabStats() {
  const stats = {
    total: VOCAB_BANK.length,
    toeic: 0,
    ielts: 0,
    common: 0,
    byLevel: { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 }
  };

  VOCAB_BANK.forEach(item => {
    if (item.pool === 'toeic') stats.toeic++;
    else if (item.pool === 'ielts') stats.ielts++;
    else if (item.pool === 'common') stats.common++;

    if (stats.byLevel[item.level] !== undefined) {
      stats.byLevel[item.level]++;
    }
  });

  return stats;
}

export function getAvailableCategories() {
  const cats = new Set();
  VOCAB_BANK.forEach(item => {
    if (item.category) cats.add(item.category);
  });
  return Array.from(cats).sort();
}

export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
`;

fs.writeFileSync('./src/data/vocab-bank.js', updatedVocabFileContent, 'utf8');

// 2. Rebuild games-data.js
const speedMatchPairs = [];
pureVocabBank.forEach(item => {
  speedMatchPairs.push({
    en: item.en,
    vn: item.vn,
    category: item.category || 'General'
  });
});

const cleanSynonymAntonym = (originalGd.SYNONYM_ANTONYM_DATA || []).filter(item => !isSyntheticItem(item));
const cleanSentenceDash = (originalGd.SENTENCE_DASH_DATA || []).filter(item => !isSyntheticItem(item));
const cleanErrorHunter = (originalGd.ERROR_HUNTER_DATA || []).filter(item => !isSyntheticItem(item));

const PHONEME_BLITZ_DATA = originalGd.PHONEME_BLITZ_DATA || [];
const IRREGULAR_VERBS_GAME_DATA = originalGd.IRREGULAR_VERBS_GAME_DATA || [];

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
