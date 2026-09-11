// ============================================
// BUGLEARN — Achievement Badge Component
// ============================================

import { ACHIEVEMENTS } from '../data/achievements.js';

/**
 * Render an achievement badge.
 * @param {string} achievementId
 * @param {boolean} unlocked
 * @returns {string} HTML string
 */
export function renderAchievementBadge(achievementId, unlocked = false) {
  const achievement = ACHIEVEMENTS.find(a => a.id === achievementId);
  if (!achievement) return '';

  return `
    <div class="achievement-badge ${unlocked ? 'is-unlocked' : 'is-locked'}" title="${achievement.description}">
      <div class="achievement-badge__icon">${unlocked ? achievement.icon : '🔒'}</div>
      <div class="achievement-badge__name">${achievement.name}</div>
      <div class="achievement-badge__xp">${achievement.xp} XP</div>
    </div>
  `;
}

/**
 * Render all achievements with unlock status.
 * @param {Array} unlockedIds - Array of unlocked achievement IDs
 * @returns {string} HTML string
 */
export function renderAchievementGrid(unlockedIds = []) {
  return `
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: var(--space-3);">
      ${ACHIEVEMENTS.map(a => renderAchievementBadge(a.id, unlockedIds.includes(a.id))).join('')}
    </div>
  `;
}
