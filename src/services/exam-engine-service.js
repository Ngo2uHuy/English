// ==========================================================================
// Exam Engine Service — Scoring Converters & Test Session Manager
// ==========================================================================

import { TOEIC_EXAM_PAPERS } from '../data/exam-bank/toeic-exam-bank.js';
import { IELTS_EXAM_PAPERS } from '../data/exam-bank/ielts-exam-bank.js';

export class ExamEngineService {
  /**
   * Get list of available TOEIC and IELTS papers
   */
  static getAvailableExams() {
    return {
      toeic: TOEIC_EXAM_PAPERS,
      ielts: IELTS_EXAM_PAPERS
    };
  }

  /**
   * Get exam paper by ID
   */
  static getExamById(id) {
    const toeicMatch = TOEIC_EXAM_PAPERS.find(p => p.id === id);
    if (toeicMatch) return { type: 'toeic', paper: toeicMatch };

    const ieltsMatch = IELTS_EXAM_PAPERS.find(p => p.id === id);
    if (ieltsMatch) return { type: 'ielts', paper: ieltsMatch };

    return null;
  }

  /**
   * Convert TOEIC Raw Scores to Official Scaled Scores (10-990 Scale)
   */
  static calculateToeicScore(listeningRaw, readingRaw, maxListening = 25, maxReading = 25) {
    const listeningPercent = Math.min(1, Math.max(0, listeningRaw / Math.max(1, maxListening)));
    const readingPercent = Math.min(1, Math.max(0, readingRaw / Math.max(1, maxReading)));

    // TOEIC Scaled ranges: 5 to 495 per section
    const listeningScaled = Math.round(5 + listeningPercent * 490);
    const readingScaled = Math.round(5 + readingPercent * 490);
    const totalScore = listeningScaled + readingScaled;

    let proficiencyCEFR = 'A1';
    let levelLabel = 'Basic User';
    if (totalScore >= 860) { proficiencyCEFR = 'C1/C2'; levelLabel = 'International Professional / Native-like'; }
    else if (totalScore >= 730) { proficiencyCEFR = 'B2'; levelLabel = 'Working Proficiency / Advanced'; }
    else if (totalScore >= 550) { proficiencyCEFR = 'B1'; levelLabel = 'Intermediate / Independent User'; }
    else if (totalScore >= 225) { proficiencyCEFR = 'A2'; levelLabel = 'Elementary User'; }

    return {
      listeningScaled,
      readingScaled,
      totalScore,
      proficiencyCEFR,
      levelLabel
    };
  }

  /**
   * Convert IELTS Raw Correct Count to Official Band Score (1.0 - 9.0)
   */
  static calculateIeltsBand(rawCorrect, maxQuestions = 40) {
    const ratio = Math.min(1, Math.max(0, rawCorrect / Math.max(1, maxQuestions)));
    const rawOut40 = Math.round(ratio * 40);

    let band = 1.0;
    if (rawOut40 >= 39) band = 9.0;
    else if (rawOut40 >= 37) band = 8.5;
    else if (rawOut40 >= 35) band = 8.0;
    else if (rawOut40 >= 33) band = 7.5;
    else if (rawOut40 >= 30) band = 7.0;
    else if (rawOut40 >= 27) band = 6.5;
    else if (rawOut40 >= 23) band = 6.0;
    else if (rawOut40 >= 19) band = 5.5;
    else if (rawOut40 >= 15) band = 5.0;
    else if (rawOut40 >= 13) band = 4.5;
    else if (rawOut40 >= 10) band = 4.0;
    else if (rawOut40 >= 6) band = 3.5;
    else if (rawOut40 >= 4) band = 3.0;

    let CEFR = 'B2';
    if (band >= 8.0) CEFR = 'C2 Expert';
    else if (band >= 7.0) CEFR = 'C1 Advanced';
    else if (band >= 5.5) CEFR = 'B2 Upper-Int';
    else if (band >= 4.5) CEFR = 'B1 Intermediate';
    else CEFR = 'A2 Elementary';

    return {
      band: band.toFixed(1),
      rawCorrect: rawOut40,
      maxQuestions: 40,
      CEFR
    };
  }

  /**
   * Save test result history to Local Storage
   */
  static saveExamResult(resultObj) {
    try {
      const history = JSON.parse(localStorage.getItem('grammar_ai_exam_history') || '[]');
      history.unshift({
        ...resultObj,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('grammar_ai_exam_history', JSON.stringify(history.slice(0, 50)));
    } catch (e) {
      console.error('Failed to save exam result', e);
    }
  }

  /**
   * Get past test history
   */
  static getExamHistory() {
    try {
      return JSON.parse(localStorage.getItem('grammar_ai_exam_history') || '[]');
    } catch (e) {
      return [];
    }
  }
}
