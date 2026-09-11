// ============================================
// BUGLEARN — Progress Bar Component
// ============================================

/**
 * Render an animated progress bar.
 * @param {number} percent - 0 to 100
 * @param {string} color - CSS color (defaults to accent-forest)
 * @param {string} size - 'sm', 'md', or 'lg'
 * @returns {string} HTML string
 */
export function renderProgressBar(percent, color = '', size = 'md') {
  const sizeClass = size === 'sm' ? 'progress--sm' : size === 'lg' ? 'progress--lg' : '';
  const colorStyle = color ? `background-color: ${color};` : '';

  return `
    <div class="progress ${sizeClass}">
      <div class="progress__fill" style="width: ${Math.min(percent, 100)}%; ${colorStyle}"></div>
    </div>
  `;
}
