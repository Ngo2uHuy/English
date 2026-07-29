import {
  getSpeedMatchPairs,
  getSentenceDashData,
  getErrorHunterData,
  getPhonemeBlitzData,
  getSynonymAntonymData,
  getIrregularVerbsGameData
} from '../src/data/games-data.js';

const speedCount = getSpeedMatchPairs().length;
const dashCount = getSentenceDashData().length;
const hunterCount = getErrorHunterData().length;
const blitzCount = getPhonemeBlitzData().length;
const synonymAntonymCount = getSynonymAntonymData().length;
const irregularVerbsCount = getIrregularVerbsGameData().length;

const totalCount = speedCount + dashCount + hunterCount + blitzCount + synonymAntonymCount + irregularVerbsCount;

console.log('=== MASSIVE 6-GAME 3000+ TRAINING POOL VERIFICATION ===');
console.log('1. Speed Word Match Pool:', speedCount, 'pairs');
console.log('2. Sentence Dash Pool:', dashCount, 'scrambled challenges');
console.log('3. Error Hunter Pool:', hunterCount, 'grammar traps');
console.log('4. Phoneme Blitz Pool:', blitzCount, 'blitz items');
console.log('5. Synonym & Antonym Challenge Pool:', synonymAntonymCount, 'synonym/antonym challenges');
console.log('6. Irregular Verbs Master Pool:', irregularVerbsCount, 'V1-V2-V3 verb challenges');
console.log('========================================================');
console.log('TOTAL TRAINING DATASET POOL ACROSS ALL 6 GAMES:', totalCount, 'items!');
