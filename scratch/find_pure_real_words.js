import fs from 'fs';
import path from 'path';

let allItems = [];

// Helper to extract word pairs from any JS file string
function extractFromText(content, sourceFile) {
  let regex1 = /\{\s*["']?en["']?\s*:\s*["']([^"']+)["']\s*,\s*["']?vn["']?\s*:\s*["']([^"']+)["'](?:,\s*["']?(?:cat|category)["']?\s*:\s*["']([^"']+)["'])?/g;
  let match;
  while ((match = regex1.exec(content)) !== null) {
    allItems.push({ en: match[1], vn: match[2], cat: match[3] || 'General', src: sourceFile });
  }

  let regex2 = /\[\s*["']([A-Za-z\s\-\'\.\?\!\(\)]+)["']\s*,\s*["']([^"']+)["'](?:\s*,\s*["']([^"']+)["'])?\s*\]/g;
  while ((match = regex2.exec(content)) !== null) {
    if (match[1].length > 1 && !match[1].includes('//') && !match[1].startsWith('http')) {
      allItems.push({ en: match[1], vn: match[2], cat: match[3] || 'General', src: sourceFile });
    }
  }
}

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

function isSynthetic(word, vn) {
  const lower = word.toLowerCase();
  const synthPrefixes = ['macro', 'micro', 'multi', 'inter', 'non', 'ultra', 'hyper', 'semi', 'super', 'over', 'under'];
  for (const pfx of synthPrefixes) {
    if (lower.startsWith(pfx) && (vn.includes(' đã ') || vn.startsWith(pfx) || vn.includes(pfx))) {
      return true;
    }
  }
  if (/^[A-Z][a-z]+[A-Z][a-z]+/.test(word)) return true; // CamelCase words
  if (/^\.\.\./.test(word)) return true;
  return false;
}

const realWordsMap = new Map();

for (const item of allItems) {
  let word = item.en.trim();
  if (word.split(/\s+/).length > 2) continue;
  let lower = word.toLowerCase();

  if (isSynthetic(word, item.vn)) continue;

  if (!realWordsMap.has(lower)) {
    const cap = word.charAt(0).toUpperCase() + word.slice(1);
    realWordsMap.set(lower, { en: cap, vn: item.vn.trim(), category: item.cat });
  }
}

console.log('Real non-synthetic unique words found:', realWordsMap.size);

const sorted = Array.from(realWordsMap.values()).sort((a,b) => a.en.localeCompare(b.en));
console.log('Total real words count:', sorted.length);

// Save to scratch file to see how many we have and what we need
fs.writeFileSync('./scratch/extracted_real_words.json', JSON.stringify(sorted, null, 2), 'utf8');
