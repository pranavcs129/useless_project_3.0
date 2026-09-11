// ============================================
// BUGLEARN Dashboard — Course Progress Panel
// ============================================

import { routeLink } from '../../router.js';

export function renderDashCourseProgress(coursesList) {
  const defaultCourses = [
    {
      name: 'Antivirus',
      dept: 'Ant Department',
      emoji: '🐜',
      accent: '#4A7C59',
      pct: 82,
      slug: 'ant',
      modulesRemaining: '1 module left',
    },
    {
      name: 'Fluid Mechanics',
      dept: 'Bee Department',
      emoji: '🐝',
      accent: '#D9822B',
      pct: 51,
      slug: 'bee',
      modulesRemaining: '3 modules left',
    },
    {
      name: 'Chemical Engineering',
      dept: 'Cockroach Department',
      emoji: '🪳',
      accent: '#8C68A6',
      pct: 34,
      slug: 'cockroach',
      modulesRemaining: '4 modules left',
    },
    {
      name: 'Web Development',
      dept: 'Spider Department',
      emoji: '🕷️',
      accent: '#5B7898',
      pct: 18,
      slug: 'spider',
      modulesRemaining: '5 modules left',
    },
  ];

  const courses = (coursesList && coursesList.length > 0) ? coursesList : defaultCourses;

  return `
    <article class="dash-card dash-course-progress">
      <div class="dash-course-progress__header">
        <div>
          <div class="dash-card-eyebrow">ENROLLED CURRICULUM</div>
          <h2 class="dash-card-title">Course Progress</h2>
        </div>
        <a href="${routeLink('courses')}" class="dash-card-more" title="Browse full catalog">
          Browse All ↗
        </a>
      </div>

      <div class="dash-course-progress__list">
        ${courses.map(c => `
          <a href="${routeLink(`department/${c.slug}`)}" class="dash-course-item" title="Open ${c.name}">
            <div class="dash-course-item__icon" style="background: color-mix(in srgb, ${c.accent} 14%, white);">
              ${c.emoji}
            </div>
            <div class="dash-course-item__body">
              <div class="dash-course-item__row-top">
                <span class="dash-course-item__title">${c.name}</span>
                <span class="dash-course-item__pct" style="color: ${c.accent}; font-weight: 700;">${c.pct}%</span>
              </div>
              <div class="dash-course-item__bar-track">
                <div class="dash-course-item__bar-fill" style="width: ${c.pct}%; background-color: ${c.accent};"></div>
              </div>
              <div class="dash-course-item__row-bot">
                <span class="dash-course-item__dept">${c.dept}</span>
                <span class="dash-course-item__rem">${c.modulesRemaining || 'In Progress'}</span>
              </div>
            </div>
          </a>
        `).join('')}
      </div>
    </article>
  `;
}
