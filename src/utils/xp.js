// ============================================
// BUGLEARN — XP & Level Utilities
// ============================================

/**
 * Calculate level from total XP.
 * @param {number} xp
 * @returns {number}
 */
export function xpToLevel(xp) {
  return Math.floor(xp / 500) + 1;
}

/**
 * XP needed for the next level.
 * @param {number} xp
 * @returns {number}
 */
export function xpToNextLevel(xp) {
  const currentLevel = xpToLevel(xp);
  const nextLevelXP = currentLevel * 500;
  return nextLevelXP - xp;
}

/**
 * Progress percentage toward next level.
 * @param {number} xp
 * @returns {number} 0-100
 */
export function xpProgressPercent(xp) {
  const inCurrentLevel = xp % 500;
  return Math.round((inCurrentLevel / 500) * 100);
}

/**
 * Get a title for a level.
 * @param {number} level
 * @returns {string}
 */
export function levelTitle(level) {
  if (level <= 3) return 'Larva';
  if (level <= 6) return 'Nymph';
  if (level <= 10) return 'Pupa';
  if (level <= 15) return 'Worker';
  if (level <= 20) return 'Specialist';
  if (level <= 30) return 'Expert';
  if (level <= 50) return 'Master';
  return 'Elder';
}
