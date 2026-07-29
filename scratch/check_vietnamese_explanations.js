import { GRAMMAR_TOPICS } from '../src/data/grammar-data.js';

let totalTopics = GRAMMAR_TOPICS.length;
let totalRules = 0;
let englishExplanationCount = 0;
let vietnameseExplanationCount = 0;

GRAMMAR_TOPICS.forEach(topic => {
  const rules = topic.content?.rules || [];
  totalRules += rules.length;
  rules.forEach(rule => {
    // Basic check for Vietnamese characters
    const hasVietnamese = /[àáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/i.test(rule.explanation || '');
    if (hasVietnamese) {
      vietnameseExplanationCount++;
    } else {
      englishExplanationCount++;
    }
  });
});

console.log('Total Topics:', totalTopics);
console.log('Total Rules:', totalRules);
console.log('Rules with Vietnamese Explanations:', vietnameseExplanationCount);
console.log('Rules with English Explanations:', englishExplanationCount);
