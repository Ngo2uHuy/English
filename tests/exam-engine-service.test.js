import { describe, it, expect } from 'vitest';
import { ExamEngineService } from '../src/services/exam-engine-service.js';

describe('ExamEngineService Suite', () => {
  it('should fetch available TOEIC and IELTS exams', () => {
    const exams = ExamEngineService.getAvailableExams();
    expect(exams).toBeDefined();
    expect(exams.toeic.length).toBeGreaterThan(0);
    expect(exams.ielts.length).toBeGreaterThan(0);
  });

  it('should retrieve a specific exam paper by ID', () => {
    const result = ExamEngineService.getExamById('toeic-paper-01');
    expect(result).toBeDefined();
    expect(result.type).toBe('toeic');
    expect(result.paper.id).toBe('toeic-paper-01');
    expect(result.paper.listeningSection).toBeDefined();
  });

  it('should accurately calculate TOEIC scaled score', () => {
    const scoreResult = ExamEngineService.calculateToeicScore(25, 25, 25, 25);
    expect(scoreResult.totalScore).toBe(990);
    expect(scoreResult.proficiencyCEFR).toBe('C1/C2');
  });

  it('should accurately calculate IELTS band score', () => {
    const scoreResult = ExamEngineService.calculateIeltsBand(40, 40);
    expect(parseFloat(scoreResult.band)).toBe(9.0);
    expect(scoreResult.CEFR).toContain('C2');
  });
});
