// ==========================================================================
// Central Exercise Bank Service — 1000 Exercises Management & Search Engine
// ==========================================================================

import { BANK_LISTENING_EXERCISES } from '../data/exercise-bank/listening-bank.js';
import { BANK_SPEAKING_EXERCISES } from '../data/exercise-bank/speaking-bank.js';
import { BANK_READING_EXERCISES } from '../data/exercise-bank/reading-bank.js';
import { BANK_WRITING_EXERCISES } from '../data/exercise-bank/writing-bank.js';

export const ALL_BANK_EXERCISES = [
  ...BANK_LISTENING_EXERCISES,
  ...BANK_SPEAKING_EXERCISES,
  ...BANK_READING_EXERCISES,
  ...BANK_WRITING_EXERCISES
];

export class ExerciseBankService {
  /**
   * Get all exercises for a specific skill
   */
  static getExercisesBySkill(skill) {
    switch (skill?.toLowerCase()) {
      case 'listening': return BANK_LISTENING_EXERCISES;
      case 'speaking': return BANK_SPEAKING_EXERCISES;
      case 'reading': return BANK_READING_EXERCISES;
      case 'writing': return BANK_WRITING_EXERCISES;
      default: return ALL_BANK_EXERCISES;
    }
  }

  /**
   * Find an exercise by its unique ID
   */
  static getExerciseById(id) {
    return ALL_BANK_EXERCISES.find(ex => ex.id === id) || null;
  }

  /**
   * Filter and search exercises across the 1000-exercise database
   */
  static searchExercises({ skill = 'all', level = 'all', topic = 'all', keyword = '', category = 'all', page = 1, limit = 20 } = {}) {
    let results = ALL_BANK_EXERCISES;

    if (skill && skill !== 'all') {
      results = results.filter(ex => {
        if (skill === 'listening') return ex.id.startsWith('list-');
        if (skill === 'speaking') return ex.id.startsWith('spk-');
        if (skill === 'reading') return ex.id.startsWith('read-');
        if (skill === 'writing') return ex.id.startsWith('write-');
        return true;
      });
    }

    if (level && level !== 'all') {
      results = results.filter(ex => ex.level === level);
    }

    if (topic && topic !== 'all') {
      results = results.filter(ex => ex.topic === topic || ex.topic.includes(topic));
    }

    if (category && category !== 'all') {
      results = results.filter(ex => ex.category === category);
    }

    if (keyword && keyword.trim() !== '') {
      const q = keyword.trim().toLowerCase();
      results = results.filter(ex =>
        (ex.title && ex.title.toLowerCase().includes(q)) ||
        (ex.topic && ex.topic.toLowerCase().includes(q)) ||
        (ex.prompt && ex.prompt.toLowerCase().includes(q)) ||
        (ex.transcript && ex.transcript.toLowerCase().includes(q)) ||
        (ex.passage && ex.passage.toLowerCase().includes(q))
      );
    }

    const total = results.length;
    const totalPages = Math.ceil(total / limit) || 1;
    const startIndex = (page - 1) * limit;
    const items = results.slice(startIndex, startIndex + limit);

    return {
      items,
      total,
      page,
      totalPages,
      limit
    };
  }

  /**
   * Get a random exercise from the bank matching skill, level, and topic
   */
  static getRandomExercise(skill, level = null, topic = null) {
    let pool = this.getExercisesBySkill(skill);
    if (level && level !== 'all') {
      pool = pool.filter(ex => ex.level === level);
    }
    if (topic && topic !== 'all') {
      pool = pool.filter(ex => ex.topic === topic);
    }
    if (pool.length === 0) {
      pool = this.getExercisesBySkill(skill);
    }
    const idx = Math.floor(Math.random() * pool.length);
    return pool[idx] || null;
  }

  /**
   * Get overview statistics of the data bank
   */
  static getBankStats() {
    return {
      total: ALL_BANK_EXERCISES.length,
      listening: BANK_LISTENING_EXERCISES.length,
      speaking: BANK_SPEAKING_EXERCISES.length,
      reading: BANK_READING_EXERCISES.length,
      writing: BANK_WRITING_EXERCISES.length,
      levels: {
        A1: ALL_BANK_EXERCISES.filter(ex => ex.level === 'A1').length,
        A2: ALL_BANK_EXERCISES.filter(ex => ex.level === 'A2').length,
        B1: ALL_BANK_EXERCISES.filter(ex => ex.level === 'B1').length,
        B2: ALL_BANK_EXERCISES.filter(ex => ex.level === 'B2').length,
        C1: ALL_BANK_EXERCISES.filter(ex => ex.level === 'C1').length,
        C2: ALL_BANK_EXERCISES.filter(ex => ex.level === 'C2').length
      }
    };
  }
}
