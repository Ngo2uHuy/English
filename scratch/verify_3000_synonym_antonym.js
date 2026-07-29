import fs from 'fs';

const items = JSON.parse(fs.readFileSync('./scratch/final_3000_unique_synonym_antonym.json', 'utf8'));

console.log('--- SYNONYM & ANTONYM CHALLENGE AUDIT ---');
console.log(`Total items: ${items.length}`);

let issues = 0;
const uniqueWords = new Set();

for (let i = 0; i < items.length; i++) {
  const item = items[i];

  if (!item.word || !item.targetMeaning || !item.type || !item.options || !item.correctAnswer || !item.explanation) {
    console.error(`Item ${i} missing required fields:`, item);
    issues++;
  }

  const wordLower = item.word.toLowerCase().trim();
  if (uniqueWords.has(wordLower)) {
    console.error(`Duplicate target word at index ${i}: ${item.word}`);
    issues++;
  }
  uniqueWords.add(wordLower);

  if (!Array.isArray(item.options) || item.options.length !== 4) {
    console.error(`Item ${i} does not have exactly 4 options:`, item.options);
    issues++;
  }

  if (!item.options.includes(item.correctAnswer)) {
    console.error(`Item ${i} options do not contain correctAnswer:`, item);
    issues++;
  }

  const uniqueOptionsInQuestion = new Set(item.options);
  if (uniqueOptionsInQuestion.size !== 4) {
    console.error(`Item ${i} has duplicate options:`, item.options);
    issues++;
  }
}

console.log(`Unique target word count: ${uniqueWords.size}`);
console.log(`Total issues found: ${issues}`);

if (issues === 0 && items.length === 3000 && uniqueWords.size === 3000) {
  console.log('✅ AUDIT PASSED: Perfect 3,000 unique Synonym & Antonym dataset!');
} else {
  console.error('❌ AUDIT FAILED!');
  process.exit(1);
}
