import fs from 'fs';

const allWordsMap = new Map(); // key (lowercase en) -> object { en, vn, category, topic, level, tag }

function addWordItem(en, vn, cat = '', level = '') {
  if (!en || !vn) return;
  const cleanEn = String(en).trim();
  let cleanVn = String(vn).trim();
  
  if (cleanEn.length < 2) return;
  if (cleanEn.includes('...') || cleanEn.startsWith('✅') || cleanEn.startsWith('❌') || cleanEn.includes(' — ') || cleanEn.length > 35) return;
  if (cleanEn.includes('___')) return;

  // Cleanup unwanted prefixes/suffixes from translation
  cleanVn = cleanVn.replace(/^(v:|n:|adj:|adv:)\s*/i, '');

  const key = cleanEn.toLowerCase();

  // Determine tag/category/level if not provided
  let mainTag = '6000_common'; // default
  let c = cat || 'General';

  const lowerCat = c.toLowerCase();
  if (lowerCat.includes('toeic') || lowerCat.includes('work') || lowerCat.includes('career') || lowerCat.includes('business') || lowerCat.includes('finance') || lowerCat.includes('office') || lowerCat.includes('market') || lowerCat.includes('trade')) {
    mainTag = 'toeic';
  } else if (lowerCat.includes('ielts') || lowerCat.includes('academic') || lowerCat.includes('science') || lowerCat.includes('law') || lowerCat.includes('psychology') || lowerCat.includes('ethics') || lowerCat.includes('environment') || lowerCat.includes('tech') || lowerCat.includes('society') || lowerCat.includes('philosophy')) {
    mainTag = 'ielts';
  }

  if (!allWordsMap.has(key)) {
    allWordsMap.set(key, { en: cleanEn, vn: cleanVn, category: c, tag: mainTag, level: level || 'B1' });
  } else {
    // If existing entry has default 'General' category and new entry has specific cat, upgrade it!
    const existing = allWordsMap.get(key);
    if ((existing.category === 'General' || !existing.category) && c && c !== 'General') {
      existing.category = c;
      existing.tag = mainTag;
    }
  }
}

// Helper to extract objects from file string regex
function extractObjectsFromFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  // Find objects with en and vn
  const regex = /{\s*"en":\s*"([^"]+)",\s*"vn":\s*"([^"]+)"(?:,\s*"category":\s*"([^"]+)")?/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    addWordItem(match[1], match[2], match[3] || 'General');
  }

  // Also single quotes regex
  const regexSingle = /{\s*en:\s*["']([^"']+)["'],\s*vn:\s*["']([^"']+)["'](?:,\s*cat:\s*["']([^"']+)["'])?/g;
  while ((match = regexSingle.exec(content)) !== null) {
    addWordItem(match[1], match[2], match[3] || 'General');
  }
}

// Scan scratch files
const scratchFiles = fs.readdirSync('./scratch');
scratchFiles.forEach(file => {
  if (file.endsWith('.js') || file.endsWith('.json')) {
    extractObjectsFromFile(`./scratch/${file}`);
  }
});

// Scan src files
extractObjectsFromFile('./src/data/games-data.js');

console.log("=== EXTRACTION COMPLETE ===");
console.log("Total unique valid words:", allWordsMap.size);

let stats = { toeic: 0, ielts: 0, common: 0 };
for (const w of allWordsMap.values()) {
  if (w.tag === 'toeic') stats.toeic++;
  else if (w.tag === 'ielts') stats.ielts++;
  else stats.common++;
}
console.log("Stats:", stats);
