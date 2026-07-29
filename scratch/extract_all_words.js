import fs from 'fs';
import path from 'path';

let allItems = [];

// Helper to extract word pairs from any JS file string
function extractFromText(content, sourceFile) {
  // Pattern 1: { en: "...", vn: "..." } or { "en": "...", "vn": "..." }
  let regex1 = /\{\s*["']?en["']?\s*:\s*["']([^"']+)["']\s*,\s*["']?vn["']?\s*:\s*["']([^"']+)["'](?:,\s*["']?(?:cat|category)["']?\s*:\s*["']([^"']+)["'])?/g;
  let match;
  while ((match = regex1.exec(content)) !== null) {
    allItems.push({ en: match[1], vn: match[2], cat: match[3] || 'General', src: sourceFile });
  }

  // Pattern 2: ["Word", "Nghĩa tiếng Việt", "Category"]
  let regex2 = /\[\s*["']([A-Za-z\s\-\'\.\?\!\(\)]+)["']\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?\s*\]/g;
  while ((match = regex2.exec(content)) !== null) {
    if (match[1].length > 1 && !match[1].includes('//') && !match[1].startsWith('http')) {
      allItems.push({ en: match[1], vn: match[2], cat: match[3] || 'General', src: sourceFile });
    }
  }
}

// Read all js files in project
function scanAll(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const fullPath = path.join(dir, f);
    if (f === 'node_modules' || f === 'dist' || f === '.git') continue;
    if (fs.statSync(fullPath).isDirectory()) {
      scanAll(fullPath);
    } else if (fullPath.endsWith('.js') || fullPath.endsWith('.json')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      extractFromText(content, f);
    }
  }
}

scanAll('./');

console.log('Total raw items extracted:', allItems.length);

// Let's analyze english words
const wordMap = new Map();

for (const item of allItems) {
  let word = item.en.trim();
  // ignore multi-word sentences for Speed Word Match (Speed Match is for single words / short compound terms)
  if (word.split(/\s+/).length > 2) continue; // max 2 words (e.g. "look up", "ice cream")
  
  let lower = word.toLowerCase();

  // filter out obvious synthetic words
  if (/^(inter|non|super|ultra|trans)[a-z]+ed$/.test(lower) && item.vn.includes(' đã ')) continue;
  if (/^(Inter|Non|Super|Ultra|Trans)[A-Z]/.test(word)) continue;
  if (item.vn.startsWith('Inter ') || item.vn.startsWith('Non ')) continue;

  if (!wordMap.has(lower)) {
    const cap = word.charAt(0).toUpperCase() + word.slice(1);
    wordMap.set(lower, { en: cap, vn: item.vn.trim(), category: item.cat });
  }
}

console.log('Unique single/double word pairs collected:', wordMap.size);

const sortedKeys = Array.from(wordMap.keys()).sort();
console.log('Sample sorted keys (first 30):', sortedKeys.slice(0, 30));
console.log('Sample sorted keys (middle 30):', sortedKeys.slice(Math.floor(sortedKeys.length / 2), Math.floor(sortedKeys.length / 2) + 30));
console.log('Sample sorted keys (last 30):', sortedKeys.slice(-30));
