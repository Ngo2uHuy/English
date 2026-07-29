import fs from 'fs';

const items = JSON.parse(fs.readFileSync('./scratch/final_3000_unique_phoneme_blitz.json', 'utf8'));

console.log('--- PHONEME BLITZ DATASET AUDIT ---');
console.log(`Total items: ${items.length}`);

let issues = 0;
const uniqueTargets = new Set();

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  
  if (!item.wordTarget || !item.distractor || !item.translation) {
    console.error(`Item ${i} missing fields:`, item);
    issues++;
  }

  const targetLower = item.wordTarget.toLowerCase().trim();
  if (uniqueTargets.has(targetLower)) {
    console.error(`Duplicate wordTarget found at index ${i}: ${item.wordTarget}`);
    issues++;
  }
  uniqueTargets.add(targetLower);

  if (item.wordTarget.toLowerCase() === item.distractor.toLowerCase()) {
    console.error(`Target equals distractor at index ${i}: ${item.wordTarget}`);
    issues++;
  }
}

console.log(`Unique wordTarget count: ${uniqueTargets.size}`);
console.log(`Total issues found: ${issues}`);

if (issues === 0 && items.length === 3000 && uniqueTargets.size === 3000) {
  console.log('✅ AUDIT PASSED: Perfect 3,000 unique Phoneme Blitz dataset!');
} else {
  console.error('❌ AUDIT FAILED!');
  process.exit(1);
}
