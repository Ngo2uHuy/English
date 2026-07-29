import fs from 'fs';

const words = JSON.parse(fs.readFileSync('./scratch/extracted_real_words.json', 'utf8'));

console.log('Total count:', words.length);

const letterCounts = {};
words.forEach(w => {
  const letter = w.en.charAt(0).toUpperCase();
  letterCounts[letter] = (letterCounts[letter] || 0) + 1;
});

console.log('Letter distribution:', letterCounts);
