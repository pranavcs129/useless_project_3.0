// ============================================
// BUGLEARN Dashboard — Recent Achievements Strip
// ============================================

import { routeLink } from '../../router.js';

export function renderDashAchievements() {
  const achievements = [
    {
      id: 'first-crawl',
      title: 'FIRST CRAWL',
      badge: '+100 XP',
      desc: 'Completed inaugural academic lesson',
      icon: '🌱',
      accent: '#4A7C59',
    },
    {
      id: 'perfect-score',
      title: 'PERFECT SCORE',
      badge: '+500 XP',
      desc: '100% on colony evaluation quiz',
      icon: '🎯',
      accent: '#D9822B',
    },
    {
      id: 'dedicated-bug',
      title: 'DEDICATED BUG',
      badge: '7 DAY STREAK',
      desc: 'Maintained uninterrupted study log',
      icon: '🔥',
      accent: '#5B7898',
    },
    {
      id: 'dept-graduate',
      title: 'DEPARTMENT GRADUATE',
      badge: 'DIPLOMA',
      desc: 'Fulfilled all Ant Department credits',
      icon: '📜',
      accent: '#8C68A6',
    },
  ];

  return `
    <article class="dash-card dash-achievements-strip">
      <div class="dash-achievements-strip__header">
        <div>
          <div class="dash-card-eyebrow">HONORS & RECOGNITION</div>
          <h2 class="dash-card-title">Recent Achievements</h2>
        </div>
        <a href="${routeLink('profile')}" class="dash-card-more" title="View all badges">
          All Honors (14) ↗
        </a>
      </div>

      <div class="dash-achievements-strip__grid">
        ${achievements.map(a => `
          <div class="dash-achievement-item">
            <div class="dash-achievement-item__icon" style="background: color-mix(in srgb, ${a.accent} 12%, white);">
              ${a.icon}
            </div>
            <div class="dash-achievement-item__body">
              <div class="dash-achievement-item__top">
                <span class="dash-achievement-item__title">${a.title}</span>
                <span class="dash-achievement-item__badge" style="color: ${a.accent}; background: color-mix(in srgb, ${a.accent} 10%, white);">
                  ${a.badge}
                </span>
              </div>
              <p class="dash-achievement-item__desc">${a.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </article>
  `;
}
