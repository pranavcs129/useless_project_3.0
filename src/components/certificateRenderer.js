// ============================================
// BUGLEARN — Certificate Renderer Component
// ============================================

import { DEPARTMENTS } from '../data/departments.js';

/**
 * Render a certificate for a completed course.
 * @param {Object} certData - { courseSlug, grade, date }
 * @param {Object} profile - Student profile
 * @returns {string} HTML string
 */
export function renderCertificate(certData, profile) {
  const dept = DEPARTMENTS.find(d => d.slug === certData.courseSlug);
  if (!dept) return '<p>Certificate not found.</p>';

  const dateStr = new Date(certData.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return `
    <div class="certificate" id="certificate-canvas">
      <div class="certificate__border"></div>

      <div class="certificate__logo">🍃 BUGLEARN</div>
      <div class="certificate__type">Certificate of Completion</div>

      <div style="font-size: var(--text-sm); color: var(--text-tertiary); margin-bottom: var(--space-3);">This certifies that</div>

      <div class="certificate__student">${profile?.name || 'Ant #4821'}</div>

      <div style="font-size: var(--text-sm); color: var(--text-tertiary); margin-bottom: var(--space-3);">has successfully completed</div>

      <div class="certificate__course">${dept.course.name}</div>
      <div class="certificate__department">Department of ${dept.name.replace(' Department', '')} Studies</div>

      <div style="display: flex; align-items: center; gap: var(--space-8); margin-bottom: var(--space-6);">
        <div>
          <div style="font-size: var(--text-xs); color: var(--text-tertiary); margin-bottom: 4px;">Final Grade</div>
          <div style="font-family: var(--font-serif); font-size: var(--text-2xl); font-weight: bold; color: var(--accent-forest);">${certData.grade}</div>
        </div>
        <div class="certificate__seal">🏅</div>
        <div>
          <div style="font-size: var(--text-xs); color: var(--text-tertiary); margin-bottom: 4px;">Tutor</div>
          <div style="font-size: var(--text-sm); font-weight: var(--weight-semibold);">${dept.tutor.name}</div>
        </div>
      </div>

      <div style="font-size: var(--text-xs); color: var(--text-tertiary); margin-bottom: var(--space-2);">${dateStr}</div>
      <div class="certificate__accreditation">Accredited by Absolutely Nobody</div>
    </div>
  `;
}
