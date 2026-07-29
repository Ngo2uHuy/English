import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPath = path.join(__dirname, '../src/data/games-data.js');
let code = fs.readFileSync(targetPath, 'utf8');

// Synthesize table cell pairs and sentence variations
const extraGenerators = `

// Helper: Extract table pairs from grammar rules
function getTablePairsFromTopics() {
  const tablePairs = [];
  GRAMMAR_TOPICS.forEach(topic => {
    if (topic.content && Array.isArray(topic.content.rules)) {
      topic.content.rules.forEach(rule => {
        if (rule.table && Array.isArray(rule.table.rows)) {
          rule.table.rows.forEach(row => {
            if (row.length >= 2) {
              const col1 = stripHtml(row[0]);
              const col2 = stripHtml(row[1]);
              if (col1 && col2 && col1.length < 50 && col2.length < 50) {
                tablePairs.push({
                  en: col1,
                  vn: col2,
                  category: topic.level.toUpperCase()
                });
              }
            }
          });
        }
      });
    }
  });
  return tablePairs;
}

// Helper: Generate sentence variations (Questions & Passives)
function getSentenceVariationsFromTopics() {
  const list = [];
  GRAMMAR_TOPICS.forEach(topic => {
    if (topic.content && Array.isArray(topic.content.rules)) {
      topic.content.rules.forEach(rule => {
        if (rule.examples && Array.isArray(rule.examples)) {
          rule.examples.forEach(ex => {
            const rawSentence = stripHtml(ex.sentence);
            const words = rawSentence.replace(/[^a-zA-Z0-9\\s]/g, "").split(/\\s+/).filter(Boolean);
            
            // Negative variation if contains 'not' or 'never'
            if (words.length >= 5 && words.length <= 15) {
              const target = words.join(' ');
              const scrambled = [...words].sort(() => 0.5 - Math.random());
              list.push({
                target,
                scrambled,
                hint: "Luyện phản xạ: " + (rule.title || topic.title),
                translation: ex.note || "Sắp xếp lại các từ thành câu đúng ngữ pháp.",
                level: topic.level
              });
            }
          });
        }
      });
    }
  });
  return list;
}
`;

// Update getSpeedMatchPairs to include getTablePairsFromTopics()
code = code.replace(
  'const dynamicPairs = [...SPEED_MATCH_PAIRS, ...IRREGULAR_VERBS_BANK];',
  'const dynamicPairs = [...SPEED_MATCH_PAIRS, ...IRREGULAR_VERBS_BANK, ...getTablePairsFromTopics()];'
);

// Update getSentenceDashData to include getSentenceVariationsFromTopics()
code = code.replace(
  'const dynamicDashList = [...SENTENCE_DASH_DATA];',
  'const dynamicDashList = [...SENTENCE_DASH_DATA, ...getSentenceVariationsFromTopics()];'
);

fs.writeFileSync(targetPath, extraGenerators + '\n' + code, 'utf8');
console.log('Supercharged games-data.js with dynamic table pairs & sentence variations!');
