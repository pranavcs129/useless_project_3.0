// ============================================
// BUGLEARN — Leaderboard Page
// ============================================

import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';
import { LEADERBOARD, getFilteredLeaderboard } from '../data/leaderboard.js';
import { store } from '../state/store.js';
import { formatNumber } from '../utils/format.js';

export async function render(container) {
  const profile = store.getProfile();
  const userXP = store.getXP();
  const tabs = ['All Time', 'This Week', 'Today', 'By Species'];
  const speciesFilters = ['All', 'Ant', 'Bee', 'Spider', 'Cockroach', 'Butterfly', 'Mosquito', 'Fly', 'Ladybug'];

  container.innerHTML = '';
  container.appendChild(renderNavbar());

  const main = document.createElement('main');
  main.innerHTML = `
    <section style="padding: var(--space-32) 0 var(--space-8);">
      <div class="container">
        <div class="section-label">Rankings</div>
        <h1 class="section-title" style="font-size: var(--text-5xl);">Global <span class="text-italic-accent">Rankings</span></h1>
        <p class="section-subtitle">The finest learners across all species.</p>
      </div>
    </section>

    <section class="section--sm">
      <div class="container" style="max-width: var(--container-lg);">
        <div style="display: flex; gap: var(--space-4); margin-bottom: var(--space-6); flex-wrap: wrap;">
          <div class="tabs" style="border-bottom: none; flex: 1;">
            ${tabs.map((tab, i) => `
              <button class="tab ${i === 0 ? 'tab--active' : ''}" data-tab="${tab}">${tab}</button>
            `).join('')}
          </div>
          <div style="display: flex; gap: var(--space-2);" id="species-filters">
            ${speciesFilters.map((s, i) => `
              <button class="tag ${i === 0 ? 'tag--active' : ''} tag--sm" data-species="${s}" style="font-size: var(--text-xs); padding: var(--space-1) var(--space-3);">${s}</button>
            `).join('')}
          </div>
        </div>

        <div class="card">
          <table class="leaderboard-table" id="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Student</th>
                <th>Species</th>
                <th style="text-align: right;">XP</th>
              </tr>
            </thead>
            <tbody id="leaderboard-body">
              ${renderLeaderboardRows(LEADERBOARD, profile, userXP)}
            </tbody>
          </table>
        </div>

        ${profile ? `
          <div style="margin-top: var(--space-6); padding: var(--space-4); background: var(--bg-green); border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: var(--space-3);">
              <div class="avatar">${profile.emoji}</div>
              <div>
                <div style="font-weight: var(--weight-semibold); font-size: var(--text-sm);">${profile.name}</div>
                <div style="font-size: var(--text-xs); color: var(--text-tertiary);">Your position</div>
              </div>
            </div>
            <div style="font-weight: var(--weight-bold); color: var(--accent-forest);">${formatNumber(userXP)} XP</div>
          </div>
        ` : ''}
      </div>
    </section>
  `;

  container.appendChild(main);
  container.appendChild(renderFooter());

  // Species filter
  container.querySelectorAll('[data-species]').forEach(btn => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('[data-species]').forEach(b => b.classList.remove('tag--active'));
      btn.classList.add('tag--active');
      const species = btn.dataset.species;
      const filtered = species === 'All' ? LEADERBOARD : getFilteredLeaderboard(species);
      container.querySelector('#leaderboard-body').innerHTML = renderLeaderboardRows(filtered, profile, userXP);
    });
  });

  // Tab switching
  container.querySelectorAll('[data-tab]').forEach(tab => {
    tab.addEventListener('click', () => {
      container.querySelectorAll('[data-tab]').forEach(t => t.classList.remove('tab--active'));
      tab.classList.add('tab--active');
    });
  });
}

function renderLeaderboardRows(entries, profile, userXP) {
  return entries.map(entry => {
    const rankClass = entry.rank === 1 ? 'rank--gold' : entry.rank === 2 ? 'rank--silver' : entry.rank === 3 ? 'rank--bronze' : '';
    const isUser = profile && entry.username === profile.name;
    return `
      <tr class="${isUser ? 'current-user' : ''}">
        <td class="rank ${rankClass}">${entry.rank <= 3 ? ['🥇', '🥈', '🥉'][entry.rank - 1] : entry.rank}</td>
        <td>
          <div class="user-cell">
            <div class="avatar avatar--sm">${entry.emoji}</div>
            <span style="font-weight: var(--weight-semibold);">${entry.username}</span>
          </div>
        </td>
        <td style="color: var(--text-tertiary);">${entry.species}</td>
        <td class="xp-cell" style="text-align: right;">${formatNumber(entry.xp)}</td>
      </tr>
    `;
  }).join('');
}
