import { describe, it, expect } from 'vitest';
import {
  LISTENING_EXERCISES,
  SPEAKING_EXERCISES,
  READING_EXERCISES,
  WRITING_EXERCISES,
  ALL_1000_EXERCISES,
  getPresetExercisesBySkill,
  getRandomPresetExercise,
} from '../src/data/skills-exercises-data.js';

describe('Skills Exercises Dataset Suite', () => {
  it('should verify listening exercises collection integrity', () => {
    expect(Array.isArray(LISTENING_EXERCISES)).toBe(true);
    expect(LISTENING_EXERCISES.length).toBeGreaterThan(10);

    const sample = LISTENING_EXERCISES[0];
    expect(sample).toHaveProperty('id');
    expect(sample).toHaveProperty('title');
    expect(sample).toHaveProperty('transcript');
    expect(sample).toHaveProperty('questions');
    expect(Array.isArray(sample.questions)).toBe(true);
    expect(sample.questions.length).toBeGreaterThan(0);
  });

  it('should verify speaking exercises collection integrity', () => {
    expect(Array.isArray(SPEAKING_EXERCISES)).toBe(true);
    expect(SPEAKING_EXERCISES.length).toBeGreaterThan(10);

    const sample = SPEAKING_EXERCISES[0];
    expect(sample).toHaveProperty('id');
    expect(sample).toHaveProperty('title');
    expect(sample).toHaveProperty('topic');
  });

  it('should verify reading exercises collection integrity', () => {
    expect(Array.isArray(READING_EXERCISES)).toBe(true);
    expect(READING_EXERCISES.length).toBeGreaterThan(10);

    const sample = READING_EXERCISES[0];
    expect(sample).toHaveProperty('id');
    expect(sample).toHaveProperty('title');
    expect(sample).toHaveProperty('passage');
    expect(sample).toHaveProperty('questions');
  });

  it('should verify writing exercises collection integrity', () => {
    expect(Array.isArray(WRITING_EXERCISES)).toBe(true);
    expect(WRITING_EXERCISES.length).toBeGreaterThan(10);

    const sample = WRITING_EXERCISES[0];
    expect(sample).toHaveProperty('id');
    expect(sample).toHaveProperty('prompt');
  });

  it('should retrieve exercises correctly by skill or random selection', () => {
    const listening = getPresetExercisesBySkill('listening');
    expect(listening.length).toBe(LISTENING_EXERCISES.length);

    const randomSkill = getRandomPresetExercise('reading');
    expect(randomSkill).toBeDefined();
    expect(randomSkill).toHaveProperty('id');

    const total = ALL_1000_EXERCISES.length;
    expect(total).toBe(
      LISTENING_EXERCISES.length +
      SPEAKING_EXERCISES.length +
      READING_EXERCISES.length +
      WRITING_EXERCISES.length
    );
  });
});
