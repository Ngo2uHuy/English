import fs from 'fs';
import path from 'path';

let allPairs = [];

// 1. Read scratch files
const scratchFiles = fs.readdirSync('./scratch');
for (const file of scratchFiles) {
  if (file.endsWith('.js')) {
    const content = fs.readFileSync('./scratch/' + file, 'utf8');
    // Extract { en: "...", vn: "..." } or { "en": "...", "vn": "..." }
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

console.log('Total extracted pairs:', allPairs.length);

const uniqueMap = new Map();
const prefixSynthetic = ['inter', 'non', 'super', 'sub', 'ultra', 're', 'un', 'dis', 'pre', 'post'];

for (const p of allPairs) {
  const word = p.en.trim();
  const lower = word.toLowerCase();
  // Filter out multi-word or obvious synthetic combinations if needed
  if (!uniqueMap.has(lower)) {
    uniqueMap.set(lower, { en: word, vn: p.vn.trim(), category: p.cat });
  }
}

console.log('Unique English words collected:', uniqueMap.size);

// Check sample words
const wordsArr = Array.from(uniqueMap.values());
console.log('First 20 words:', wordsArr.slice(0, 20));
console.log('Last 20 words:', wordsArr.slice(-20));
