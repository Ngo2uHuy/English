import { describe, it, expect } from 'vitest';
import { checkAnswers } from '../src/components/exercise-renderer.js';

describe('Exercise Renderer Check Answers Suite', () => {
  it('should evaluate fill-blanks exercises correctly', () => {
    const exercises = [
      {
        id: 1,
        sentence: 'She ___ to school every day.',
        answer: 'goes',
        options: ['goes', 'go', 'going', 'gone'],
        explanation: '3rd person singular present simple',
      },
    ];

    // Simulate user selecting the correct answer "goes"
    document.body.innerHTML = `
      <div id="exercise-1">
        <input class="exercise-option" value="goes" checked />
      </div>
    `;

    // Test checkAnswers function
    const result = checkAnswers(exercises, 'fill-blanks');
    expect(result.total).toBe(1);
  });

  it('should evaluate multiple-choice exercises correctly', () => {
    const exercises = [
      {
        id: 1,
        question: 'Which sentence is correct?',
        options: ['She go.', 'She goes.'],
        answer: 'She goes.',
        explanation: 'Correct grammar',
      },
    ];

    document.body.innerHTML = `
      <div id="exercise-1">
        <input class="exercise-option" value="She goes." checked />
      </div>
    `;

    const result = checkAnswers(exercises, 'multiple-choice');
    expect(result.total).toBe(1);
  });
});
