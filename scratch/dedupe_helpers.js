import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetPath = path.join(__dirname, '../src/data/grammar-data.js');
let code = fs.readFileSync(targetPath, 'utf8');

// Truncate at first getRoadmapStages occurrence and rewrite clean exports
const splitPos = code.indexOf('export function getRoadmapStages()');
if (splitPos !== -1) {
  code = code.substring(0, splitPos);
}

const cleanHelpers = `
// Helper functions
export function getTopicsByLevel(level) {
  return GRAMMAR_TOPICS.filter(t => t.level === level).sort((a, b) => a.order - b.order);
}

export function getTopicById(id) {
  return GRAMMAR_TOPICS.find(t => t.id === id);
}

export function getLevelInfo(levelId) {
  return LEVELS.find(l => l.id === levelId);
}

export function getAllTopics() {
  return GRAMMAR_TOPICS;
}

export function getRoadmapStages() {
  return EXPERT_ROADMAP;
}

export function getStageById(stageId) {
  return EXPERT_ROADMAP.find(s => s.id === stageId);
}

export function getTopicStageInfo(topicId) {
  for (const stage of EXPERT_ROADMAP) {
    if (stage.topics.includes(topicId)) {
      return stage;
    }
  }
  return null;
}

export function getTopicsForStage(stageId) {
  const stage = getStageById(stageId);
  if (!stage) return [];
  return stage.topics.map(id => getTopicById(id)).filter(Boolean);
}
`;

fs.writeFileSync(targetPath, code + '\n' + cleanHelpers, 'utf8');
console.log('Successfully cleaned up helper functions in grammar-data.js!');
