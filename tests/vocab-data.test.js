import { describe, it, expect } from 'vitest';
import { VOCAB_BANK, getVocabPool, getVocabStats, getAvailableCategories } from '../src/data/vocab-bank.js';
import { GRAMMAR_TOPICS, EXPERT_ROADMAP, getTopicsByLevel, getTopicsForStage } from '../src/data/grammar-data.js';

describe('Vocabulary Bank & Grammar Data Suite', () => {
  it('should verify vocabulary bank statistics and integrity', () => {
    const stats = getVocabStats();
    expect(stats.total).toBeGreaterThan(1000);
    expect(stats.toeic).toBeGreaterThan(0);
    expect(stats.ielts).toBeGreaterThan(0);
    expect(VOCAB_BANK.length).toBeGreaterThan(1000);
  });

  it('should correctly filter vocabulary pools by level and category', () => {
    const toeicPool = getVocabPool({ pool: 'toeic', level: 'all' });
    expect(toeicPool.length).toBeGreaterThan(0);
    toeicPool.forEach(item => {
      expect(item.pool).toBe('toeic');
    });

    const categories = getAvailableCategories();
    expect(categories.length).toBeGreaterThan(0);
  });

  it('should verify 8-Stage Grammar Roadmap structure and topics', () => {
    expect(EXPERT_ROADMAP.length).toBe(8);
    expect(GRAMMAR_TOPICS.length).toBeGreaterThan(20);

    const stage1Topics = getTopicsForStage('stage-1');
    expect(stage1Topics.length).toBeGreaterThan(0);

    const beginnerTopics = getTopicsByLevel('beginner');
    expect(beginnerTopics.length).toBeGreaterThan(0);
  });
});
