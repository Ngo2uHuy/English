import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

console.log("=========================================");
console.log("   DEEP FULL-SYSTEM COMPREHENSIVE AUDIT  ");
console.log("=========================================\n");

const rootDir = process.cwd();
const srcDir = path.join(rootDir, 'src');

const issues = [];
function report(severity, category, file, message) {
  issues.push({ severity, category, file, message });
  const icon = severity === 'CRITICAL' ? '🔴' : severity === 'WARNING' ? '🟡' : '🔵';
  console.log(`${icon} [${severity}] [${category}] ${file}: ${message}`);
}

async function auditGamesData() {
  console.log("\n--- 1. AUDITING src/data/games-data.js ---");
  const filePath = 'src/data/games-data.js';
  try {
    const mod = await import(pathToFileURL(path.join(srcDir, 'data', 'games-data.js')).href);

    // Test getSpeedMatchPairs
    try {
      const sp1 = mod.getSpeedMatchPairs();
      console.log(`  ✓ Speed Match Pairs total count: ${sp1.length}`);
      const spFiltered = mod.getSpeedMatchPairs('TOEIC');
      console.log(`  ✓ Speed Match Pairs filtered ('TOEIC'): ${spFiltered.length}`);
      
      // Test edge cases for getSpeedMatchPairs (passing number or object)
      try {
        mod.getSpeedMatchPairs(10);
      } catch (err) {
        report('CRITICAL', 'Runtime Crash', filePath, `getSpeedMatchPairs(10) throws error: ${err.message}`);
      }
    } catch (err) {
      report('CRITICAL', 'Runtime Crash', filePath, `getSpeedMatchPairs failed: ${err.message}`);
    }

    // Test getSentenceDashData
    try {
      const sd = mod.getSentenceDashData();
      console.log(`  ✓ Sentence Dash Data total count: ${sd.length}`);
    } catch (err) {
      report('CRITICAL', 'Runtime Crash', filePath, `getSentenceDashData failed: ${err.message}`);
    }

    // Test getErrorHunterData
    try {
      const eh = mod.getErrorHunterData();
      console.log(`  ✓ Error Hunter Data total count: ${eh.length}`);
    } catch (err) {
      report('CRITICAL', 'Runtime Crash', filePath, `getErrorHunterData failed: ${err.message}`);
    }

    // Test getPhonemeBlitzData
    try {
      const pb = mod.getPhonemeBlitzData();
      console.log(`  ✓ Phoneme Blitz Data total count: ${pb.length}`);
    } catch (err) {
      report('CRITICAL', 'Runtime Crash', filePath, `getPhonemeBlitzData failed: ${err.message}`);
    }

    // Test getSynonymAntonymData
    try {
      const sa = mod.getSynonymAntonymData();
      console.log(`  ✓ Synonym Antonym Data total count: ${sa.length}`);
    } catch (err) {
      report('CRITICAL', 'Runtime Crash', filePath, `getSynonymAntonymData failed: ${err.message}`);
    }

    // Test getIrregularVerbsGameData
    try {
      const iv = mod.getIrregularVerbsGameData();
      console.log(`  ✓ Irregular Verbs Data total count: ${iv.length}`);
    } catch (err) {
      report('CRITICAL', 'Runtime Crash', filePath, `getIrregularVerbsGameData failed: ${err.message}`);
    }

  } catch (err) {
    report('CRITICAL', 'Module Error', filePath, `Failed to import games-data.js: ${err.message}`);
  }
}

async function auditGrammarData() {
  console.log("\n--- 2. AUDITING src/data/grammar-data.js ---");
  const filePath = 'src/data/grammar-data.js';
  try {
    const mod = await import(pathToFileURL(path.join(srcDir, 'data', 'grammar-data.js')).href);

    if (!mod.GRAMMAR_TOPICS || !Array.isArray(mod.GRAMMAR_TOPICS)) {
      report('CRITICAL', 'Data Format', filePath, 'GRAMMAR_TOPICS is missing or not an array');
      return;
    }

    console.log(`  ✓ Total GRAMMAR_TOPICS: ${mod.GRAMMAR_TOPICS.length}`);

    const idMap = new Set();
    mod.GRAMMAR_TOPICS.forEach((topic, idx) => {
      if (!topic.id) report('CRITICAL', 'Data Schema', filePath, `Topic #${idx} missing id`);
      if (idMap.has(topic.id)) report('CRITICAL', 'Data Schema', filePath, `Duplicate topic id: ${topic.id}`);
      idMap.add(topic.id);

      if (!topic.level) report('WARNING', 'Data Schema', filePath, `Topic "${topic.id}" missing level`);
      if (!topic.title) report('WARNING', 'Data Schema', filePath, `Topic "${topic.id}" missing title`);
      if (!topic.content) {
        report('CRITICAL', 'Data Schema', filePath, `Topic "${topic.id}" missing content`);
      } else {
        if (!topic.content.rules || !Array.isArray(topic.content.rules)) {
          report('WARNING', 'Data Schema', filePath, `Topic "${topic.id}" missing rules array`);
        }
      }
    });

    if (mod.getTopicById) {
      const testTopic = mod.getTopicById('to-be');
      if (!testTopic) report('WARNING', 'Function Test', filePath, 'getTopicById("to-be") returned null');
      else console.log('  ✓ getTopicById("to-be") works');
    } else {
      report('WARNING', 'Missing Export', filePath, 'getTopicById is not exported');
    }

  } catch (err) {
    report('CRITICAL', 'Module Error', filePath, `Failed to import grammar-data.js: ${err.message}`);
  }
}

async function auditLifeTopicsAndYouTube() {
  console.log("\n--- 3. AUDITING Life Topics & YouTube Data ---");
  try {
    const lifeMod = await import(pathToFileURL(path.join(srcDir, 'data', 'life-topics-data.js')).href);
    console.log(`  ✓ ALL_LIFE_TOPICS count: ${lifeMod.ALL_LIFE_TOPICS ? lifeMod.ALL_LIFE_TOPICS.length : 'N/A'}`);
  } catch (err) {
    report('CRITICAL', 'Module Error', 'src/data/life-topics-data.js', err.message);
  }

  try {
    const ytMod = await import(pathToFileURL(path.join(srcDir, 'data', 'youtube-data.js')).href);
    console.log(`  ✓ YOUTUBE_VIDEOS count: ${ytMod.YOUTUBE_VIDEOS ? ytMod.YOUTUBE_VIDEOS.length : 'N/A'}`);
  } catch (err) {
    report('CRITICAL', 'Module Error', 'src/data/youtube-data.js', err.message);
  }
}

async function auditServices() {
  console.log("\n--- 4. AUDITING Services ---");
  const services = ['storage-service.js', 'sound-service.js', 'ipa-service.js', 'gemini-service.js'];
  for (const s of services) {
    try {
      const mod = await import(pathToFileURL(path.join(srcDir, 'services', s)).href);
      console.log(`  ✓ Service src/services/${s} imported successfully. Keys: ${Object.keys(mod).join(', ')}`);
    } catch (err) {
      report('CRITICAL', 'Module Error', `src/services/${s}`, err.message);
    }
  }
}

async function checkStaticLinksAndImports() {
  console.log("\n--- 5. SCANNING ALL JS FILES FOR POTENTIAL ISSUES ---");
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

  const allJs = getFiles(srcDir);
  for (const file of allJs) {
    const relPath = path.relative(rootDir, file);
    const content = fs.readFileSync(file, 'utf-8');

    // Check for hardcoded localhost or invalid relative urls
    if (content.includes('localhost:5000') || content.includes('http://localhost')) {
      report('WARNING', 'Hardcoded URL', relPath, 'Contains localhost URL');
    }

    // Check for console.error or uncaught TODO comments
    if (content.includes('// TODO') || content.includes('// FIX')) {
      report('INFO', 'Todo Comment', relPath, 'Contains TODO/FIX comment');
    }
  }
}

async function runAudit() {
  await auditGamesData();
  await auditGrammarData();
  await auditLifeTopicsAndYouTube();
  await auditServices();
  await checkStaticLinksAndImports();

  console.log("\n=========================================");
  console.log(`AUDIT COMPLETE. Total Issues Found: ${issues.length}`);
  console.log("=========================================\n");
}

runAudit();
