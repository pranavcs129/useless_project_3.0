// ============================================
// BUGLEARN — Leaderboard Data
// ============================================

export const LEADERBOARD = [
  { rank: 1, username: 'Sir Crawls-a-Lot', species: 'Ant', emoji: '🐜', xp: 98421 },
  { rank: 2, username: 'Queen Buzz', species: 'Bee', emoji: '🐝', xp: 97201 },
  { rank: 3, username: 'WebMaster88', species: 'Spider', emoji: '🕷️', xp: 94812 },
  { rank: 4, username: 'RoachRuler', species: 'Cockroach', emoji: '🪳', xp: 92201 },
  { rank: 5, username: 'Dr Creative-Lot', species: 'Ant', emoji: '🐜', xp: 91421 },
  { rank: 6, username: 'FlutterQueen', species: 'Butterfly', emoji: '🦋', xp: 89340 },
  { rank: 7, username: 'NightHunter', species: 'Mosquito', emoji: '🦟', xp: 87654 },
  { rank: 8, username: 'LadyBug77', species: 'Ladybug', emoji: '🐞', xp: 85432 },
  { rank: 9, username: 'ChefGourmet', species: 'Fly', emoji: '🪰', xp: 82109 },
  { rank: 10, username: 'SilkArchitect', species: 'Spider', emoji: '🕷️', xp: 79876 },
  { rank: 11, username: 'ColonyLeader', species: 'Ant', emoji: '🐜', xp: 78234 },
  { rank: 12, username: 'BuzzLightyear', species: 'Bee', emoji: '🐝', xp: 76543 },
  { rank: 13, username: 'ShadowMozzi', species: 'Mosquito', emoji: '🦟', xp: 74321 },
  { rank: 14, username: 'PetalDancer', species: 'Butterfly', emoji: '🦋', xp: 72109 },
  { rank: 15, username: 'CrumbPhilosopher', species: 'Fly', emoji: '🪰', xp: 69876 },
  { rank: 16, username: 'LuckyNumber7', species: 'Ladybug', emoji: '🐞', xp: 67654 },
  { rank: 17, username: 'TunnelVision', species: 'Ant', emoji: '🐜', xp: 65432 },
  { rank: 18, username: 'WebDesigner42', species: 'Spider', emoji: '🕷️', xp: 63210 },
  { rank: 19, username: 'KitchenNinja', species: 'Cockroach', emoji: '🪳', xp: 60987 },
  { rank: 20, username: 'PollenPro', species: 'Bee', emoji: '🐝', xp: 58765 },
];

/**
 * Get filtered leaderboard entries.
 * @param {string} filter - 'all', or a species name
 * @returns {Array}
 */
export function getFilteredLeaderboard(filter = 'all') {
  if (filter === 'all') return LEADERBOARD;
  return LEADERBOARD
    .filter(e => e.species.toLowerCase() === filter.toLowerCase())
    .map((e, i) => ({ ...e, rank: i + 1 }));
}
