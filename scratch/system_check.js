import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

console.log("=== SYSTEM DIAGNOSTIC & VERIFICATION SCRIPT ===");

const rootDir = process.cwd();
const srcDir = path.join(rootDir, 'src');

// 1. Check all exported games-data getters and arrays
async function checkGamesData() {
  console.log("\n--- Checking src/data/games-data.js ---");
  try {
    const gamesDataPath = pathToFileURL(path.join(srcDir, 'data', 'games-data.js')).href;
    const gamesData = await import(gamesDataPath);

    console.log("Exported keys in games-data.js:", Object.keys(gamesData));

    const checkArray = (name, fnName) => {
      const fn = gamesData[fnName];
      if (typeof fn === 'function') {
        const res = fn(100);
        console.log(`  ✓ Function ${fnName}() returned ${res?.length || 0} items.`);
      } else {
        console.log(`  ❌ Missing function ${fnName}!`);
      }
      if (gamesData[name]) {
        console.log(`  ✓ Exported array ${name} has ${gamesData[name].length} items.`);
      } else {
        console.log(`  ⚠️ Array ${name} not directly exported.`);
      }
    };

    checkArray('SPEED_MATCH_PAIRS', 'getSpeedMatchPairs');
    checkArray('SENTENCE_DASH_DATA', 'getSentenceDashData');
    checkArray('ERROR_HUNTER_DATA', 'getErrorHunterData');
    checkArray('PHONEME_BLITZ_DATA', 'getPhonemeBlitzData');
    checkArray('SYNONYM_ANTONYM_DATA', 'getSynonymAntonymData');
    checkArray('IRREGULAR_VERBS_DATA', 'getIrregularVerbsGameData');

  } catch (err) {
    console.error("❌ Error loading games-data.js:", err);
  }
}

// 2. Check grammar-data.js
async function checkGrammarData() {
  console.log("\n--- Checking src/data/grammar-data.js ---");
  try {
    const grammarDataPath = pathToFileURL(path.join(srcDir, 'data', 'grammar-data.js')).href;
    const grammarData = await import(grammarDataPath);
    const topics = grammarData.GRAMMAR_TOPICS || grammarData.default;
    console.log(`  Found GRAMMAR_TOPICS count: ${topics ? topics.length : 0}`);

    if (topics && topics.length > 0) {
      let totalExercises = 0;
      let topicsWithNoEx = 0;
      topics.forEach((t, i) => {
        const exCount = t.exercises ? t.exercises.length : 0;
        totalExercises += exCount;
        if (exCount === 0) topicsWithNoEx++;
        if (!t.id || !t.title || !t.level) {
          console.warn(`  ⚠️ Topic #${i} missing key fields:`, t.id, t.title, t.level);
        }
      });
      console.log(`  Total Exercises across all topics: ${totalExercises}`);
      if (topicsWithNoEx > 0) console.warn(`  ⚠️ Topics with 0 exercises: ${topicsWithNoEx}`);
    }
  } catch (err) {
    console.error("❌ Error loading grammar-data.js:", err);
  }
}

// 3. Check life-topics-data.js & youtube-data.js
async function checkOtherData() {
  console.log("\n--- Checking other data files ---");
  try {
    const lifePath = pathToFileURL(path.join(srcDir, 'data', 'life-topics-data.js')).href;
    const lifeData = await import(lifePath);
    console.log("  Life topics keys:", Object.keys(lifeData));

    const ytPath = pathToFileURL(path.join(srcDir, 'data', 'youtube-data.js')).href;
    const ytData = await import(ytPath);
    console.log("  YouTube data keys:", Object.keys(ytData));
  } catch (err) {
    console.error("❌ Error loading other data files:", err);
  }
}

// 4. Test all module imports dynamically
async function testAllImports() {
  console.log("\n--- Testing imports of all JS files in src/ ---");
  function getFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      file = path.join(dir, file);
      const stat = fs.statSync(file);
      if (stat && stat.isDirectory()) {
        results = results.concat(getFiles(file));
      } else if (file.endsWith('.js')) {
        results.push(file);
      }
    });
    return results;
  }

  const jsFiles = getFiles(srcDir);
  console.log(`Found ${jsFiles.length} JS files to import check.`);

  for (const filePath of jsFiles) {
    const relative = path.relative(rootDir, filePath);
    try {
      await import(pathToFileURL(filePath).href);
      console.log(`  ✓ [OK] ${relative}`);
    } catch (err) {
      console.error(`  ❌ [FAIL] ${relative}:`, err.message);
    }
  }
}

async function run() {
  await checkGamesData();
  await checkGrammarData();
  await checkOtherData();
  await testAllImports();
  console.log("\n=== CHECK COMPLETE ===");
}

run();
