import { GRAMMAR_TOPICS } from '../src/data/grammar-data.js';

const englishTopics = [];

GRAMMAR_TOPICS.forEach(topic => {
  const rules = topic.content?.rules || [];
  const engRules = rules.filter(r => !/[àáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/i.test(r.explanation || ''));
  if (engRules.length > 0) {
    englishTopics.push({
      id: topic.id,
      title: topic.title,
      engCount: engRules.length,
      totalCount: rules.length
    });
  }
});

console.log('Topics needing Vietnamese translation/explanation enhancement:', englishTopics.length);
console.log(JSON.stringify(englishTopics, null, 2));
