import { describe, it, expect } from 'vitest';
import { TOEIC_EXAM_PAPERS } from '../src/data/exam-bank/toeic-exam-bank.js';
import { IELTS_EXAM_PAPERS } from '../src/data/exam-bank/ielts-exam-bank.js';

describe('Exam Bank Mock Papers Suite', () => {
  it('should verify TOEIC mock exam papers collection and question structure', () => {
    expect(Array.isArray(TOEIC_EXAM_PAPERS)).toBe(true);
    expect(TOEIC_EXAM_PAPERS.length).toBeGreaterThan(0);

    const paper = TOEIC_EXAM_PAPERS[0];
    expect(paper).toHaveProperty('id');
    expect(paper).toHaveProperty('title');
    expect(paper).toHaveProperty('listeningSection');
    expect(paper).toHaveProperty('readingSection');

    expect(paper.listeningSection).toHaveProperty('parts');
    expect(Array.isArray(paper.listeningSection.parts)).toBe(true);

    const part1 = paper.listeningSection.parts[0];
    expect(part1).toHaveProperty('questions');
    expect(Array.isArray(part1.questions)).toBe(true);

    const question = part1.questions[0];
    expect(question).toHaveProperty('options');
    expect(question).toHaveProperty('answer');
    expect(question.options).toContain(question.answer);
  });

  it('should verify IELTS mock exam papers collection and section structure', () => {
    expect(Array.isArray(IELTS_EXAM_PAPERS)).toBe(true);
    expect(IELTS_EXAM_PAPERS.length).toBeGreaterThan(0);

    const paper = IELTS_EXAM_PAPERS[0];
    expect(paper).toHaveProperty('id');
    expect(paper).toHaveProperty('title');
    expect(paper).toHaveProperty('listeningSection');
    expect(paper).toHaveProperty('readingSection');

    expect(paper.listeningSection).toHaveProperty('sections');
    expect(Array.isArray(paper.listeningSection.sections)).toBe(true);

    const section1 = paper.listeningSection.sections[0];
    expect(section1).toHaveProperty('questions');
    expect(Array.isArray(section1.questions)).toBe(true);

    const question = section1.questions[0];
    expect(question).toHaveProperty('options');
    expect(question).toHaveProperty('answer');
    expect(question.options).toContain(question.answer);
  });
});
