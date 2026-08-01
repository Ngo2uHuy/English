import fs from 'fs';
import { IpaService } from '../src/services/ipa-service.js';

console.log("=== COMPREHENSIVE AUDIT OF CENTRALIZED VOCABULARY BANK ===");

let bank = [];
try {
  const file = fs.readFileSync('./src/data/vocab-bank.js', 'utf8');
  bank = JSON.parse(file.match(/export const VOCAB_BANK = (\[[\s\S]*?\]);/)[1]);
} catch(e) {
  console.error("Failed to read vocab-bank.js:", e);
  process.exit(1);
}

console.log(`Total Items to Audit: ${bank.length}`);

const issues = {
  emptyFields: [],
  englishInVn: [],
  junkPrefixes: [],
  duplicateEn: [],
  invalidChars: [],
  ipaFailures: []
};

const seenEn = new Map();

bank.forEach((item, index) => {
  const { id, en, vn, pool, category, level } = item;

  // Check 1: Empty or null fields
  if (!en || !vn || !pool || !level || en.trim() === '' || vn.trim() === '') {
    issues.emptyFields.push({ index, id, en, vn });
    return;
  }

  const cleanEn = en.trim();
  const cleanVn = vn.trim();
  const lowerEn = cleanEn.toLowerCase();
  const lowerVn = cleanVn.toLowerCase();

  // Check 2: Duplicates
  if (seenEn.has(lowerEn)) {
    issues.duplicateEn.push({ index, id, en: cleanEn, prev: seenEn.get(lowerEn) });
  } else {
    seenEn.set(lowerEn, { index, id, en: cleanEn, vn: cleanVn });
  }

  // Check 3: Junk Prefixes in VN (e.g. "Re đã...", "Pre đã...", "Anti đã...")
  const junkPattern = /^(anti|counter|post|pre|sub|dis|re|un|pro)\s+(đã|được|lại)\b/i;
  if (junkPattern.test(cleanVn)) {
    issues.junkPrefixes.push({ index, id, en: cleanEn, vn: cleanVn });
  }

  // Check 4: English text in VN field (e.g. vn is purely ASCII English with multiple words or same as en)
  if (lowerEn === lowerVn) {
    issues.englishInVn.push({ index, id, en: cleanEn, vn: cleanVn, reason: "en === vn" });
  } else if (/^[a-zA-Z\s,.'-]+$/.test(cleanVn) && cleanVn.includes(' ') && !/^(veggie|tivi|bus|email|menu|pizza|salad|hamburger|spaghetti|hotdog)$/i.test(cleanVn)) {
    issues.englishInVn.push({ index, id, en: cleanEn, vn: cleanVn, reason: "vn contains ASCII English phrase" });
  }

  // Check 5: Invalid characters or artifacts
  if (cleanEn.includes('___') || cleanEn.includes('...') || cleanVn.includes('___') || cleanVn.includes('...') || cleanEn.includes('✅') || cleanEn.includes('❌')) {
    issues.invalidChars.push({ index, id, en: cleanEn, vn: cleanVn });
  }

  // Check 6: IPA Generation
  try {
    const ipa = IpaService.getIPA(cleanEn);
    if (!ipa) {
      issues.ipaFailures.push({ index, id, en: cleanEn });
    }
  } catch(e) {
    issues.ipaFailures.push({ index, id, en: cleanEn, error: e.message });
  }
});

console.log("\n=========================================");
console.log("AUDIT RESULTS SUMMARY:");
console.log(`1. Empty or Missing Fields: ${issues.emptyFields.length}`);
console.log(`2. Duplicate English Words: ${issues.duplicateEn.length}`);
console.log(`3. Junk Prefix Translations: ${issues.junkPrefixes.length}`);
console.log(`4. English Text in VN Field: ${issues.englishInVn.length}`);
console.log(`5. Invalid Characters/Artifacts: ${issues.invalidChars.length}`);
console.log(`6. IPA Failures: ${issues.ipaFailures.length}`);
console.log("=========================================\n");

if (issues.emptyFields.length > 0) console.log("Empty fields:", issues.emptyFields);
if (issues.duplicateEn.length > 0) console.log("Duplicate samples:", issues.duplicateEn.slice(0, 10));
if (issues.junkPrefixes.length > 0) console.log("Junk prefix samples:", issues.junkPrefixes.slice(0, 10));
if (issues.englishInVn.length > 0) console.log("English in VN samples:", issues.englishInVn.slice(0, 10));
if (issues.invalidChars.length > 0) console.log("Invalid chars samples:", issues.invalidChars.slice(0, 10));
