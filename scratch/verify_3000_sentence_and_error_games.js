import {
  SPEED_MATCH_PAIRS,
  SENTENCE_DASH_DATA,
  ERROR_HUNTER_DATA,
  getSpeedMatchPairs,
  getSentenceDashData,
  getErrorHunterData
} from '../src/data/games-data.js';

console.log('=== VERIFYING GAME DATABANKS ===');

// 1. SPEED MATCH
console.log(`Speed Match Count: ${SPEED_MATCH_PAIRS.length}`);
const speedWords = new Set(SPEED_MATCH_PAIRS.map(p => p.en.toLowerCase().trim()));
console.log(`Speed Match Unique Words: ${speedWords.size}`);
if (SPEED_MATCH_PAIRS.length !== 3000 || speedWords.size !== 3000) {
  console.error('❌ Speed Match verification failed!');
  process.exit(1);
}

// 2. SENTENCE DASH
const dashData = getSentenceDashData();
console.log(`Sentence Dash Count: ${dashData.length}`);
const dashTargets = new Set(dashData.map(d => d.target));
console.log(`Sentence Dash Unique Targets: ${dashTargets.size}`);

if (dashData.length !== 3000 || dashTargets.size !== 3000) {
  console.error('❌ Sentence Dash verification failed!');
  process.exit(1);
}

let dashErrors = 0;
dashData.forEach((item, idx) => {
  if (!item.target || !item.hint || !item.translation || !item.level) {
    console.error(`Sentence Dash Item ${idx} missing required string fields!`);
    dashErrors++;
  }
  if (!Array.isArray(item.scrambled) || item.scrambled.length < 2) {
    console.error(`Sentence Dash Item ${idx} invalid scrambled array!`);
    dashErrors++;
  }
});
if (dashErrors > 0) {
  console.error(`❌ Found ${dashErrors} errors in Sentence Dash data!`);
  process.exit(1);
}

// 3. ERROR HUNTER
const errorData = getErrorHunterData();
console.log(`Error Hunter Count: ${errorData.length}`);
const errorTargets = new Set(errorData.map(e => e.sentenceParts.join(' ')));
console.log(`Error Hunter Unique Targets: ${errorTargets.size}`);

if (errorData.length !== 3000 || errorTargets.size !== 3000) {
  console.error('❌ Error Hunter verification failed!');
  process.exit(1);
}

let errorHunterErrors = 0;
errorData.forEach((item, idx) => {
  if (!Array.isArray(item.sentenceParts) || item.sentenceParts.length !== 4) {
    console.error(`Error Hunter Item ${idx} sentenceParts must have 4 items!`);
    errorHunterErrors++;
  }
  if (typeof item.errorIndex !== 'number' || item.errorIndex < 0 || item.errorIndex > 3) {
    console.error(`Error Hunter Item ${idx} invalid errorIndex!`);
    errorHunterErrors++;
  }
  if (!Array.isArray(item.correctOptions) || item.correctOptions.length !== 4) {
    console.error(`Error Hunter Item ${idx} correctOptions must have 4 options!`);
    errorHunterErrors++;
  }
  if (typeof item.correctChoice !== 'number' || item.correctChoice < 0 || item.correctChoice > 3) {
    console.error(`Error Hunter Item ${idx} invalid correctChoice!`);
    errorHunterErrors++;
  }
  if (!item.explanation || !item.translation) {
    console.error(`Error Hunter Item ${idx} missing explanation or translation!`);
    errorHunterErrors++;
  }
});

if (errorHunterErrors > 0) {
  console.error(`❌ Found ${errorHunterErrors} errors in Error Hunter data!`);
  process.exit(1);
}

console.log('✅ ALL 3000-ITEM DATABANK VERIFICATIONS PASSED PERFECTLY!');
