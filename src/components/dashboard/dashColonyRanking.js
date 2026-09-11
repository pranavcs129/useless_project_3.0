// ============================================
// BUGLEARN Dashboard — Colony Ranking Panel
// ============================================

import { routeLink } from '../../router.js';

export function renderDashColonyRanking(studentName = 'Ant #7405') {
  const peers = [
    { rank: 34, name: 'AntMaster', species: 'Ant', xp: 4420, trend: '•' },
    { rank: 35, name: 'CrumbHunter', species: 'Ant', xp: 4385, trend: '↑' },
    { rank: 36, name: 'Sir Crawls-a-Lot', species: 'Ant', xp: 4310, trend: '↓' },
    { rank: 37, name: studentName, species: 'Ant', xp: 4281, isSelf: true, trend: '↑ 8' },
    { rank: 38, name: 'TinyTitan', species: 'Ant', xp: 4190, trend: '•' },
  ];

  return `
    <article class="dash-card dash-colony-ranking">
      <div class="dash-colony-ranking__header">
        <div>
          <div class="dash-card-eyebrow">STANDINGS</div>
          <h2 class="dash-card-title">Colony Ranking</h2>
        </div>
        <a href="${routeLink('leaderboard')}" class="dash-card-more" title="View global rankings">
          Full Board ↗
        </a>
      </div>

      <div class="dash-colony-ranking__highlight">
        <div class="dash-colony-ranking__rank-num">#37</div>
        <div class="dash-colony-ranking__rank-info">
          <div class="dash-colony-ranking__rank-title">Global Ant Ranking</div>
          <div class="dash-colony-ranking__rank-gain">
            <span class="dash-colony-ranking__arrow">↑</span> 8 positions climbed this week
          </div>
        </div>
      </div>

      <div class="dash-colony-ranking__list">
        ${peers.map(p => `
          <div class="dash-ranking-item ${p.isSelf ? 'is-self' : ''}">
            <div class="dash-ranking-item__rank">#${p.rank}</div>
            <div class="dash-ranking-item__name">
              <span>${p.name}</span>
              ${p.isSelf ? '<span class="dash-ranking-item__you-tag">YOU</span>' : ''}
            </div>
            <div class="dash-ranking-item__xp">${p.xp} XP</div>
            <div class="dash-ranking-item__trend">${p.trend}</div>
          </div>
        `).join('')}
      </div>
    </article>
  `;
}
