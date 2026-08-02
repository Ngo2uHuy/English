import { describe, it, expect, beforeEach } from 'vitest';
import { StorageService } from '../src/services/storage-service.js';

const memoryStore = {};
const mockLocalStorage = {
  getItem: (key) => memoryStore[key] || null,
  setItem: (key, value) => { memoryStore[key] = String(value); },
  removeItem: (key) => { delete memoryStore[key]; },
  clear: () => {
    Object.keys(memoryStore).forEach(k => delete memoryStore[k]);
  }
};

Object.defineProperty(globalThis, 'localStorage', {
  value: mockLocalStorage,
  writable: true
});

describe('StorageService Suite', () => {
  beforeEach(() => {
    globalThis.localStorage.clear();
  });

  it('should handle theme get and set correctly', () => {
    expect(StorageService.getTheme()).toBe('dark');
    StorageService.setTheme('light');
    expect(StorageService.getTheme()).toBe('light');
  });

  it('should manage streak calculations correctly', () => {
    const initialStreak = StorageService.getStreak();
    expect(initialStreak.current).toBe(0);

    const updatedStreak = StorageService.updateStreak();
    expect(updatedStreak.current).toBe(1);
    expect(updatedStreak.lastDate).toBe(new Date().toISOString().split('T')[0]);
  });

  it('should save and update topic progress properly', () => {
    StorageService.updateTopicProgress('topic-1', { completed: true, score: 90 });
    const progress = StorageService.getProgress();
    expect(progress['topic-1']).toBeDefined();
    expect(progress['topic-1'].completed).toBe(true);
    expect(progress['topic-1'].score).toBe(90);

    const stats = StorageService.getStats();
    expect(stats.topicsCompleted).toBe(1);
  });

  it('should manage vocabulary saving and deletion', () => {
    const vocabItem = {
      word: 'perseverance',
      meaning: 'sự kiên trì',
      ipa: '/ˌpɜː.sɪˈvɪə.rəns/',
      example: 'Success requires perseverance.',
    };

    StorageService.saveWord(vocabItem);
    let vocabList = StorageService.getSavedVocabulary();
    expect(vocabList.length).toBe(1);
    expect(vocabList[0].word).toBe('perseverance');

    StorageService.removeWord('perseverance');
    vocabList = StorageService.getSavedVocabulary();
    expect(vocabList.length).toBe(0);
  });

  it('should calculate SRS due topics correctly', () => {
    const mockTopics = [
      { id: 'topic-1', title: 'Present Simple' },
      { id: 'topic-2', title: 'Past Continuous' },
    ];

    const tenDaysAgo = Date.now() - 10 * 24 * 60 * 60 * 1000;
    StorageService.updateTopicProgress('topic-1', { completed: true, score: 100 });
    
    const progress = StorageService.getProgress();
    progress['topic-1'].nextReviewDue = tenDaysAgo;
    globalThis.localStorage.setItem('grammarai_progress', JSON.stringify(progress));

    const dueTopics = StorageService.getDueSRSReviewTopics(mockTopics);
    expect(dueTopics.length).toBe(1);
    expect(dueTopics[0].id).toBe('topic-1');
  });
});
