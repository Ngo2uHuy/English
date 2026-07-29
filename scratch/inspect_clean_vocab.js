import fs from 'fs';
import path from 'path';

let allPairs = [];

// 1. Read scratch files
const scratchFiles = fs.readdirSync('./scratch');
for (const file of scratchFiles) {
  if (file.endsWith('.js') && file !== 'generate_3000_database.js' && file !== 'generate_clean_3000_speed_match.js') {
    const content = fs.readFileSync('./scratch/' + file, 'utf8');
    const regex = /\{\s*["']?en["']?\s*:\s*["']([^"']+)["']\s*,\s*["']?vn["']?\s*:\s*["']([^"']+)["'](?:,\s*["']?(?:cat|category)["']?\s*:\s*["']([^"']+)["'])?/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      allPairs.push({ en: match[1], vn: match[2], cat: match[3] || 'General' });
    }
  }
}

// 2. Read src files
function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const fullPath = path.join(dir, f);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDir(fullPath);
    } else if ((fullPath.endsWith('.js') || fullPath.endsWith('.json')) && !fullPath.endsWith('games-data.js')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const regex = /\{\s*["']?en["']?\s*:\s*["']([^"']+)["']\s*,\s*["']?vn["']?\s*:\s*["']([^"']+)["'](?:,\s*["']?(?:cat|category)["']?\s*:\s*["']([^"']+)["'])?/g;
      let match;
      while ((match = regex.exec(content)) !== null) {
        allPairs.push({ en: match[1], vn: match[2], cat: match[3] || 'General' });
      }
    }
  }
}
scanDir('./src');

function isSynthetic(word, vn) {
  if (vn.startsWith('Inter ') || vn.startsWith('Non ') || vn.startsWith('Super ') || vn.startsWith('Ultra ') || vn.startsWith('Trans ')) return true;
  if (/^(Inter|Non|Super|Ultra|Trans)[A-Z]/.test(word)) return true;
  if (/^(inter|non|super|ultra|trans)[a-z]+ed$/.test(word.toLowerCase()) && vn.includes(' đã ')) return true;
  if (word.length <= 1) return true; // single letters
  if (/[0-9]/.test(word)) return true; // numbers
  return false;
}

const cleanPairsMap = new Map();
for (const p of allPairs) {
  let enClean = p.en.trim();
  let lower = enClean.toLowerCase();
  let vnClean = p.vn.trim();
  let catClean = p.cat ? p.cat.trim() : 'General';

  if (isSynthetic(enClean, vnClean)) continue;

  if (!cleanPairsMap.has(lower)) {
    const cap = enClean.charAt(0).toUpperCase() + enClean.slice(1);
    cleanPairsMap.set(lower, { en: cap, vn: vnClean, category: catClean });
  }
}

console.log('Clean pairs map size:', cleanPairsMap.size);

const cleanArray = Array.from(cleanPairsMap.values());
console.log('Total clean words:', cleanArray.length);

// Save clean array to inspect sample
fs.writeFileSync('./scratch/clean_3000_vocab_pool.json', JSON.stringify(cleanArray, null, 2), 'utf8');
