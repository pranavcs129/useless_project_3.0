// ============================================
// BUGLEARN — Animation Utilities
// ============================================

/**
 * Set up IntersectionObserver for scroll-triggered animations.
 * Elements with class 'animate-on-scroll' will receive 'is-visible' when in viewport.
 */
export function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  return observer;
}

/**
 * Animate a counter from 0 to target value.
 * @param {HTMLElement} element - The element to update
 * @param {number} target - Target number
 * @param {number} duration - Animation duration in ms
 * @param {string} suffix - Optional suffix (e.g., '%', '+')
 * @param {string} prefix - Optional prefix (e.g., '$')
 */
export function animateCounter(element, target, duration = 1500, suffix = '', prefix = '') {
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(start + (target - start) * eased);

    element.textContent = prefix + current.toLocaleString('en-US') + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/**
 * Add staggered animation delays to child elements.
 * @param {HTMLElement} parent - Parent container
 * @param {string} childSelector - CSS selector for children
 * @param {number} delayMs - Delay between each child in ms
 */
export function staggerChildren(parent, childSelector = ':scope > *', delayMs = 80) {
  const children = parent.querySelectorAll(childSelector);
  children.forEach((child, i) => {
    child.style.animationDelay = `${i * delayMs}ms`;
  });
}
