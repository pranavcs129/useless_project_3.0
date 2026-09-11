// ============================================
// BUGLEARN — Course Card Component
// ============================================

import { routeLink } from '../router.js';
import { formatNumber } from '../utils/format.js';

/**
 * Render a course card.
 * @param {Object} course - Course data (from getAllCourses or extras)
 * @returns {string} HTML string
 */
export function renderCourseCard(course) {
  const accent = course.departmentAccent || course.accent || 'var(--accent-forest)';
  const link = course.departmentSlug
    ? routeLink('course/' + course.departmentSlug)
    : '#';

  return `
    <a href="${link}" class="card" style="--dept-color: ${accent}">
      <div class="card__body">
        <div class="card__label">${course.departmentName || course.department || ''}</div>
        <div class="card__title">${course.name}</div>
        <div class="card__subtitle">${course.subtitle || course.description || ''}</div>
        <div class="card__meta">
          <span class="badge badge--dept">${course.difficulty || 'Beginner'}</span>
          ${course.hours ? `<span>⏱ ${course.hours}h</span>` : ''}
          ${course.enrolled ? `<span>👥 ${formatNumber(course.enrolled)}</span>` : ''}
          ${course.rating ? `<span class="stars">${'★'.repeat(Math.floor(course.rating))}${'☆'.repeat(5 - Math.floor(course.rating))}</span> <span>${course.rating}</span>` : ''}
        </div>
      </div>
      ${course.tutorName ? `
        <div class="card__footer">
          <span style="font-size: var(--text-sm); color: var(--text-secondary);">${course.departmentEmoji || ''} ${course.tutorName}</span>
          <span style="color: var(--dept-color); font-weight: 600;">→</span>
        </div>
      ` : ''}
    </a>
  `;
}
