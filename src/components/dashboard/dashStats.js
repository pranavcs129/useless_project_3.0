// ============================================
// BUGLEARN Dashboard — Key Metrics
// ============================================
// Large editorial metrics with delicate iconography and minimal card framing.

import { formatNumber } from '../../utils/format.js';

export function renderDashStats({ streak = 18, xp = 4281, certificatesCount = 7, colonyRank = 37 }) {
  const stats = [
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D9822B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
      </svg>`,
      value: `${streak}`,
      unit: 'DAYS',
      label: 'Learning Streak',
      badge: 'Longest yet',
      accent: '#D9822B',
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4A7C59" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>`,
      value: formatNumber(xp),
      unit: 'XP',
      label: 'XP Earned',
      badge: '+450 this week',
      accent: '#4A7C59',
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B7898" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14 2 14 8 20 8"/>
        <path d="M9 15h6"/>
        <path d="M9 11h6"/>
      </svg>`,
      value: `${certificatesCount}`,
      unit: 'VERIFIED',
      label: 'Certificates',
      badge: 'Top 5% student',
      accent: '#5B7898',
    },
    {
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8C68A6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </svg>`,
      value: `#${colonyRank}`,
      unit: 'GLOBAL',
      label: 'Colony Rank',
      badge: '↑ 8 positions',
      accent: '#8C68A6',
    },
  ];

  return `
    <div class="dash-stats-grid">
      ${stats.map(stat => `
        <div class="dash-stat-card">
          <div class="dash-stat-card__top">
            <span class="dash-stat-card__icon" aria-hidden="true">${stat.icon}</span>
            <span class="dash-stat-card__badge" style="color: ${stat.accent}; background: color-mix(in srgb, ${stat.accent} 12%, transparent);">
              ${stat.badge}
            </span>
          </div>
          <div class="dash-stat-card__body">
            <span class="dash-stat-card__val">${stat.value}</span>
            <span class="dash-stat-card__unit">${stat.unit}</span>
          </div>
          <div class="dash-stat-card__label">${stat.label}</div>
        </div>
      `).join('')}
    </div>
  `;
}
