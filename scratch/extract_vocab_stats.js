import fs from 'fs';

const allWordsMap = new Map(); // en.toLowerCase() -> { en, vn, category, tag }

function addWord(en, vn, category = 'General', tag = '6000_common') {
  if (!en || !vn) return;
  const cleanEn = en.trim();
  const cleanVn = vn.trim();
  if (cleanEn.length < 2) return;
  // Ignore full sentences or markdown junk
  if (cleanEn.includes('...') || cleanEn.startsWith('✅') || cleanEn.startsWith('❌') || cleanEn.includes(' — ') || cleanEn.length > 35) return;
  // Ignore English sentence structures that are grammar questions (containing '_____')
  if (cleanEn.includes('___')) return;

  const key = cleanEn.toLowerCase();
  if (!allWordsMap.has(key)) {
    allWordsMap.set(key, { en: cleanEn, vn: cleanVn, category, tag });
  }
}

// 1. From final_3000_unique_speed_match.json
if (fs.existsSync('./scratch/final_3000_unique_speed_match.json')) {
  const data = JSON.parse(fs.readFileSync('./scratch/final_3000_unique_speed_match.json', 'utf8'));
  data.forEach(item => {
    let cat = item.category || 'General';
    let tag = '6000_common';
    if (cat.toLowerCase().includes('toeic') || cat.toLowerCase().includes('work') || cat.toLowerCase().includes('business') || cat.toLowerCase().includes('finance')) {
      tag = 'toeic';
    } else if (cat.toLowerCase().includes('academic') || cat.toLowerCase().includes('science') || cat.toLowerCase().includes('law') || cat.toLowerCase().includes('psychology') || cat.toLowerCase().includes('ethics') || cat.toLowerCase().includes('environment')) {
      tag = 'ielts';
    }
    addWord(item.en, item.vn, cat, tag);
  });
}

// 2. From final_3000_unique_synonym_antonym.json
if (fs.existsSync('./scratch/final_3000_unique_synonym_antonym.json')) {
  const data = JSON.parse(fs.readFileSync('./scratch/final_3000_unique_synonym_antonym.json', 'utf8'));
  data.forEach(item => {
    if (item.word && item.translation) {
      addWord(item.word, item.translation, item.category || 'Synonym/Antonym', '6000_common');
    }
  });
}

// 3. From final_3000_unique_phoneme_blitz.json
if (fs.existsSync('./scratch/final_3000_unique_phoneme_blitz.json')) {
  const data = JSON.parse(fs.readFileSync('./scratch/final_3000_unique_phoneme_blitz.json', 'utf8'));
  data.forEach(item => {
    if (item.word && item.meaning) {
      addWord(item.word, item.meaning, 'Phonetics', '6000_common');
    }
  });
}

// 4. From clean_3000_vocab_pool.json
if (fs.existsSync('./scratch/clean_3000_vocab_pool.json')) {
  const data = JSON.parse(fs.readFileSync('./scratch/clean_3000_vocab_pool.json', 'utf8'));
  data.forEach(item => {
    addWord(item.en, item.vn, item.category || 'General', '6000_common');
  });
}

console.log("Total unique valid words collected so far:", allWordsMap.size);

// Count tags
let toeicCount = 0;
let ieltsCount = 0;
let commonCount = 0;
for (const w of allWordsMap.values()) {
  if (w.tag === 'toeic') toeicCount++;
  else if (w.tag === 'ielts') ieltsCount++;
  else commonCount++;
}
console.log(`Distribution -> TOEIC: ${toeicCount}, IELTS: ${ieltsCount}, 6000 Common: ${commonCount}`);
