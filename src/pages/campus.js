// ============================================
// BUGLEARN — Campus Map Page
// ============================================

import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';
import { routeLink } from '../router.js';

const BUILDINGS = [
  { name: 'Main Academy', emoji: '🏛️', link: 'departments', x: 45, y: 20, desc: 'The heart of BUGLEARN' },
  { name: 'Library', emoji: '📚', link: 'courses', x: 20, y: 35, desc: 'Knowledge awaits' },
  { name: 'Bug Lab', emoji: '🧪', link: 'buglab', x: 72, y: 30, desc: 'Experiments & discovery' },
  { name: 'Cafeteria', emoji: '🍽️', link: 'department/fly', x: 80, y: 65, desc: 'Fine dining (questionable)' },
  { name: 'Graduation Hall', emoji: '🎓', link: 'dashboard', x: 45, y: 75, desc: 'Where dreams are certified' },
  { name: 'Athletics Field', emoji: '🏃', link: 'leaderboard', x: 15, y: 70, desc: 'Competitive learning' },
  { name: 'Dormitories', emoji: '🏠', link: 'profile', x: 10, y: 50, desc: 'Rest & reflection' },
  { name: 'Community Centre', emoji: '💬', link: 'community', x: 75, y: 48, desc: 'BugBoard HQ' },
];

export async function render(container) {
  container.innerHTML = '';
  container.appendChild(renderNavbar());

  const main = document.createElement('main');
  main.innerHTML = `
    <section style="padding: var(--space-32) 0 var(--space-8);">
      <div class="container text-center">
        <div class="section-label">Campus</div>
        <h1 class="section-title" style="font-size: var(--text-5xl);">BUGLEARN <span class="text-italic-accent">University</span></h1>
        <p class="section-subtitle" style="margin: 0 auto;">Explore our beautiful campus. Click a building to visit.</p>
      </div>
    </section>

    <section class="section--sm">
      <div class="container">
        <div class="campus-map" style="aspect-ratio: 16/9; background: url('/images/campus-map.jpg') center/cover no-repeat; border-radius: var(--radius-xl); position: relative; overflow: hidden; box-shadow: var(--shadow-xl); border: 1px solid var(--border-light);">
          <!-- Soft overlay for contrast -->
          <div style="position: absolute; inset: 0; background: rgba(20, 30, 20, 0.15); pointer-events: none;"></div>

          <!-- Campus Sign -->
          <div style="position: absolute; top: 5%; left: 50%; transform: translateX(-50%); background: rgba(255,255,255,0.9); padding: 6px 16px; border-radius: 8px; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; color: var(--accent-forest-dark); box-shadow: var(--shadow-sm);">
            BUGLEARN UNIVERSITY · Est. Yesterday
          </div>

          <!-- Buildings -->
          ${BUILDINGS.map(b => `
            <a href="${routeLink(b.link)}" class="campus-map__building" style="left: ${b.x}%; top: ${b.y}%; transform: translate(-50%, -50%);" title="${b.desc}">
              <span style="font-size: 1.2rem;">${b.emoji}</span> ${b.name}
            </a>
          `).join('')}
        </div>

        <!-- Legend -->
        <div style="margin-top: var(--space-6); display: grid; grid-template-columns: repeat(4, 1fr); gap: var(--space-3);">
          ${BUILDINGS.map(b => `
            <a href="${routeLink(b.link)}" style="display: flex; align-items: center; gap: var(--space-2); padding: var(--space-3); background: white; border-radius: var(--radius-md); border: 1px solid var(--border-light); font-size: var(--text-sm); text-decoration: none; color: inherit; transition: box-shadow 0.15s;" onmouseover="this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.boxShadow='none'">
              <span>${b.emoji}</span>
              <div>
                <div style="font-weight: var(--weight-semibold); font-size: var(--text-xs);">${b.name}</div>
                <div style="font-size: 0.65rem; color: var(--text-tertiary);">${b.desc}</div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  container.appendChild(main);
  container.appendChild(renderFooter());
}
