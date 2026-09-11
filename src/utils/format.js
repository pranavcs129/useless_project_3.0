// ============================================
// BUGLEARN — Formatting Utilities
// ============================================

/**
 * Format a number with commas (12847 → "12,847").
 * @param {number} num
 * @returns {string}
 */
export function formatNumber(num) {
  return num.toLocaleString('en-US');
}

/**
 * Format a relative date string.
 * @param {string} isoDate
 * @returns {string}
 */
export function relativeDate(isoDate) {
  const now = Date.now();
  const then = new Date(isoDate).getTime();
  const diff = now - then;

  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return `${mins}m ago`;

  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;

  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;

  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks}w ago`;

  return new Date(isoDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Convert a score percentage to a letter grade.
 * @param {number} percent 0-100
 * @returns {string}
 */
export function toGrade(percent) {
  if (percent >= 93) return 'A';
  if (percent >= 90) return 'A-';
  if (percent >= 87) return 'B+';
  if (percent >= 83) return 'B';
  if (percent >= 80) return 'B-';
  if (percent >= 77) return 'C+';
  if (percent >= 73) return 'C';
  if (percent >= 70) return 'C-';
  if (percent >= 60) return 'D';
  return 'F';
}

/**
 * Count total lessons in a course modules array.
 * @param {Array} modules
 * @returns {number}
 */
export function countLessons(modules) {
  return modules.reduce((sum, mod) => sum + mod.lessons.length, 0);
}

/**
 * Truncate text to a max length.
 * @param {string} text
 * @param {number} max
 * @returns {string}
 */
export function truncate(text, max = 120) {
  if (text.length <= max) return text;
  return text.slice(0, max).trim() + '…';
}
