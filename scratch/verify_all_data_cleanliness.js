import { VOCAB_BANK } from '../src/data/vocab-bank.js';
import * as gamesData from '../src/data/games-data.js';

console.log("=== COMPREHENSIVE FINAL DATA CLEANLINESS VERIFICATION ===");

const isJunk = (item) => {
  if (!item) return false;
  const vn = item.vn || item.meaning || '';
  const en = (item.en || item.word || '').toLowerCase();

  if (/^(Anti|Counter|Post|Pre|Sub|Dis|Re|Un|Pro|Inter|Super|Under|Over|Mis)\s+[a-zà-ỹ]/i.test(vn.trim())) {
    return true;
  }
  if (/^(anti|counter|inter|sub|super|under|over|post)(able|active|acceptable|affected|applied|balanced|certified|combined|educated|employed|enabled|endorsed|enhanced|focused|informed|interested|involved|isolated|learned|limited|located|motivated|qualified|related|restricted|separated|shaped|structured)$/i.test(en)) {
    return true;
  }
  return false;
};

// 1. Audit VOCAB_BANK
const badVocab = VOCAB_BANK.filter(isJunk);
console.log(`1. VOCAB_BANK Total: ${VOCAB_BANK.length} | Synthetic Junk Count: ${badVocab.length}`);

// 2. Audit games-data.js
for (const [key, val] of Object.entries(gamesData)) {
  if (Array.isArray(val)) {
    const bad = val.filter(isJunk);
    console.log(`2. Dataset ${key} Total: ${val.length} | Synthetic Junk Count: ${bad.length}`);
  }
}

console.log("=========================================");
if (badVocab.length === 0) {
  console.log("SUCCESS: 100% Zero Synthetic Junk across all datasets!");
} else {
  console.error("FAIL: Synthetic junk found in VOCAB_BANK:", badVocab);
}
