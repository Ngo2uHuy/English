import fs from 'fs';
import path from 'path';

let allPairs = [];

// 1. Read scratch files
const scratchFiles = fs.readdirSync('./scratch');
for (const file of scratchFiles) {
  if (file.endsWith('.js')) {
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
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.json')) {
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
  return false;
}

const cleanPairsMap = new Map();
for (const p of allPairs) {
  const enClean = p.en.trim();
  const lower = enClean.toLowerCase();
  if (isSynthetic(enClean, p.vn)) continue;
  if (!cleanPairsMap.has(lower)) {
    // capitalize enClean nicely (e.g., 'abandon' -> 'Abandon')
    const cap = enClean.charAt(0).toUpperCase() + enClean.slice(1);
    cleanPairsMap.set(lower, { en: cap, vn: p.vn.trim(), category: p.cat });
  }
}

console.log('Real non-synthetic unique words:', cleanPairsMap.size);
