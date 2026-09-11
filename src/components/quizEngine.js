// ============================================
// BUGLEARN — Quiz Engine Component
// ============================================

import { store } from '../state/store.js';
import { showToast } from './toast.js';

/**
 * Render a quiz into a container.
 * @param {HTMLElement} container
 * @param {Object} quiz - { question, type, options, correct, explanation, xp }
 * @param {string} courseSlug
 * @param {number} moduleIndex
 */
export function renderQuiz(container, quiz, courseSlug, moduleIndex) {
  if (!quiz) return;

  const quizDiv = document.createElement('div');
  quizDiv.className = 'quiz-section';
  quizDiv.style.cssText = 'margin-top: var(--space-8); padding-top: var(--space-6); border-top: 1px solid var(--border-light);';

  const existingScore = store.getQuizScore(courseSlug, moduleIndex);

  if (quiz.type === 'true-false') {
    quiz.options = ['True', 'False'];
    quiz.correct = quiz.correct ? 0 : 1;
  }

  quizDiv.innerHTML = `
    <div class="section-label">Quiz</div>
    <div class="quiz__question">${quiz.question}</div>
    <div class="quiz__options">
      ${(quiz.options || []).map((opt, i) => `
        <div class="quiz__option ${existingScore ? (i === quiz.correct ? 'is-correct' : existingScore.selected === i ? 'is-incorrect' : '') : ''}" 
             data-index="${i}" 
             ${existingScore ? 'style="pointer-events: none;"' : ''}>
          <div class="quiz__radio"></div>
          <span>${opt}</span>
        </div>
      `).join('')}
    </div>
    ${existingScore ? `
      <div style="margin-top: var(--space-4); padding: var(--space-4); background: ${existingScore.perfect ? 'var(--bg-green)' : 'var(--bg-blush)'}; border-radius: var(--radius-md);">
        <div style="font-weight: var(--weight-semibold); margin-bottom: var(--space-2);">
          ${existingScore.perfect ? '✓ Correct!' : '✗ Incorrect'}
        </div>
        <div style="font-size: var(--text-sm); color: var(--text-secondary);">${quiz.explanation}</div>
      </div>
    ` : `
      <button class="btn btn--primary btn--sm" id="quiz-submit" disabled style="margin-top: var(--space-4);">
        Check Answer
      </button>
    `}
  `;

  container.appendChild(quizDiv);

  if (existingScore) return;

  // Event handling
  let selectedIndex = null;
  const options = quizDiv.querySelectorAll('.quiz__option');
  const submitBtn = quizDiv.querySelector('#quiz-submit');

  options.forEach(opt => {
    opt.addEventListener('click', () => {
      options.forEach(o => o.classList.remove('is-selected'));
      opt.classList.add('is-selected');
      selectedIndex = parseInt(opt.dataset.index);
      submitBtn.disabled = false;
    });
  });

  submitBtn.addEventListener('click', () => {
    if (selectedIndex === null) return;

    const isCorrect = selectedIndex === quiz.correct;
    const score = isCorrect ? 1 : 0;

    // Visual feedback
    options.forEach(opt => {
      const idx = parseInt(opt.dataset.index);
      opt.style.pointerEvents = 'none';
      if (idx === quiz.correct) opt.classList.add('is-correct');
      else if (idx === selectedIndex) opt.classList.add('is-incorrect');
      opt.classList.remove('is-selected');
    });

    // Show explanation
    const feedback = document.createElement('div');
    feedback.style.cssText = `margin-top: var(--space-4); padding: var(--space-4); background: ${isCorrect ? 'var(--bg-green)' : 'var(--bg-blush)'}; border-radius: var(--radius-md); animation: fadeInUp var(--duration-normal) var(--ease-out);`;
    feedback.innerHTML = `
      <div style="font-weight: var(--weight-semibold); margin-bottom: var(--space-2);">
        ${isCorrect ? '✓ Correct!' : '✗ Incorrect'}
      </div>
      <div style="font-size: var(--text-sm); color: var(--text-secondary);">${quiz.explanation}</div>
      ${quiz.xp ? `<div style="font-size: var(--text-xs); color: var(--accent-forest); margin-top: var(--space-2); font-weight: 600;">+${isCorrect ? quiz.xp : Math.round(quiz.xp * 0.25)} XP</div>` : ''}
    `;
    submitBtn.replaceWith(feedback);

    // Update state
    const result = store.submitQuizScore(courseSlug, moduleIndex, score, 1);
    result.quizScores = { selected: selectedIndex };

    if (isCorrect && quiz.xp) {
      showToast('XP Earned!', `+${quiz.xp} XP`, 'xp');
    }

    // Notify about achievements
    result.newAchievements.forEach(a => {
      showToast('Achievement Unlocked!', `${a.icon} ${a.name}`, 'achievement');
    });
  });
}
