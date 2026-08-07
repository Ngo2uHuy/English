import { describe, it, expect } from 'vitest';
import {
  getSentenceDashData,
  getErrorHunterData,
  getPhonemeBlitzData,
  getSynonymAntonymData,
  getIrregularVerbsGameData,
  getSpeedMatchPairs,
} from '../src/data/games-data.js';

describe('Mini-Games Engine Data Suite', () => {
  it('should return valid Sentence Builder Dash questions', () => {
    const data = getSentenceDashData();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(10);

    const sample = data[0];
    expect(sample).toHaveProperty('target');
    expect(sample).toHaveProperty('scrambled');
    expect(sample).toHaveProperty('translation');
    expect(Array.isArray(sample.scrambled)).toBe(true);
    expect(sample.scrambled.length).toBeGreaterThan(0);
    expect(typeof sample.target).toBe('string');
    expect(sample.target.trim().length).toBeGreaterThan(0);
  });

  it('should return valid Error Hunter grammar trap questions', () => {
    const data = getErrorHunterData();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(10);

    const sample = data[0];
    expect(sample).toHaveProperty('sentenceParts');
    expect(sample).toHaveProperty('errorIndex');
    expect(sample).toHaveProperty('explanation');
    expect(Array.isArray(sample.sentenceParts)).toBe(true);
    expect(sample.errorIndex).toBeGreaterThanOrEqual(0);
    expect(sample.errorIndex).toBeLessThan(sample.sentenceParts.length);
  });

  it('should return valid Phoneme Blitz pronunciation reflex questions', () => {
    const data = getPhonemeBlitzData();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(10);

    const sample = data[0];
    expect(sample).toHaveProperty('wordTarget');
    expect(sample).toHaveProperty('distractor');
    expect(sample.wordTarget).not.toBe(sample.distractor);
    expect(typeof sample.wordTarget).toBe('string');
  });

  it('should return valid Synonym & Antonym questions', () => {
    const data = getSynonymAntonymData();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(10);

    const sample = data[0];
    expect(sample).toHaveProperty('word');
    expect(sample).toHaveProperty('type');
    expect(sample).toHaveProperty('options');
    expect(sample).toHaveProperty('correctAnswer');
    expect(sample.options).toContain(sample.correctAnswer);
    expect(sample.options.length).toBe(4);
  });

  it('should return valid Irregular Verbs Master questions', () => {
    const data = getIrregularVerbsGameData();
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(10);

    const sample = data[0];
    expect(sample).toHaveProperty('v1');
    expect(sample).toHaveProperty('promptText');
    expect(sample).toHaveProperty('options');
    expect(sample).toHaveProperty('correctAnswer');
    expect(sample.options).toContain(sample.correctAnswer);
    expect(sample.options.length).toBe(4);
  });

  it('should return valid Speed Word Match word pairs', () => {
    const pairs = getSpeedMatchPairs();
    expect(Array.isArray(pairs)).toBe(true);
    expect(pairs.length).toBeGreaterThan(10);

    const sample = pairs[0];
    expect(sample).toHaveProperty('en');
    expect(sample).toHaveProperty('vn');
    expect(typeof sample.en).toBe('string');
    expect(typeof sample.vn).toBe('string');
  });
});
