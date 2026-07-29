import { GRAMMAR_TOPICS } from '../src/data/grammar-data.js';

let sentenceCount = 0;
let mistakeCount = 0;
let ruleCount = 0;

GRAMMAR_TOPICS.forEach(topic => {
  if (topic.content && Array.isArray(topic.content.rules)) {
    ruleCount += topic.content.rules.length;
    topic.content.rules.forEach(rule => {
      if (Array.isArray(rule.examples)) {
        sentenceCount += rule.examples.length;
      }
    });
  }
  if (topic.content && Array.isArray(topic.content.commonMistakes)) {
    mistakeCount += topic.content.commonMistakes.length;
  }
});

console.log('Available in GRAMMAR_TOPICS:');
console.log('Total Rules:', ruleCount);
console.log('Total Example Sentences:', sentenceCount);
console.log('Total Common Mistakes:', mistakeCount);
