// ============================================
// BUGLEARN — Stats Bar Component
// ============================================

import { animateCounter } from '../utils/animate.js';

/**
 * Render the floating stats bar.
 * @returns {string} HTML string
 */
export function renderStatsBar() {
  return `
    <div class="stats-bar animate-on-scroll">
      <div class="stat">
        <div class="stat__value" data-counter="12847">0</div>
        <div class="stat__label">Insects Enrolled</div>
      </div>
      <div class="stat">
        <div class="stat__value" data-counter="436">0</div>
        <div class="stat__label">Lessons Completed Today</div>
      </div>
      <div class="stat">
        <div class="stat__value" data-counter-special="98.7">0</div>
        <div class="stat__label">Satisfaction Rate</div>
        <div class="stat__sublabel">(probably)</div>
      </div>
      <div class="stat">
        <div class="stat__value">∞</div>
        <div class="stat__label">Opportunities</div>
        <div class="stat__sublabel">For Every Species</div>
      </div>
    </div>
  `;
}

/**
 * Initialize counter animations for visible stats.
 * Call this after the stats bar is in the DOM.
 */
export function initStatsAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate integer counters
        entry.target.querySelectorAll('[data-counter]').forEach(el => {
          const target = parseInt(el.dataset.counter);
          animateCounter(el, target, 2000, '', '');
        });

        // Animate the percentage
        entry.target.querySelectorAll('[data-counter-special]').forEach(el => {
          const target = parseFloat(el.dataset.counterSpecial);
          const startTime = performance.now();
          function update(now) {
            const progress = Math.min((now - startTime) / 2000, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = (target * eased).toFixed(1) + '%';
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
        });

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const statsBar = document.querySelector('.stats-bar');
  if (statsBar) observer.observe(statsBar);
}
