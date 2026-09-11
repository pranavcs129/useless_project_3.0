// ============================================
// BUGLEARN — Tutors Page
// ============================================

import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';
import { DEPARTMENTS } from '../data/departments.js';
import { routeLink } from '../router.js';
import { formatNumber } from '../utils/format.js';
import { initScrollAnimations } from '../utils/animate.js';

export async function render(container) {
  container.innerHTML = '';
  container.appendChild(renderNavbar());

  const main = document.createElement('main');
  main.innerHTML = `
    <section style="padding: var(--space-32) 0 var(--space-16);">
      <div class="container">
        <div class="section-label">Faculty</div>
        <h1 class="section-title" style="font-size: var(--text-5xl);">Meet Our <span class="text-italic-accent">Tutors</span></h1>
        <p class="section-subtitle">World-class educators. Species-class expertise.</p>
      </div>
    </section>

    <section class="section--sm">
      <div class="container">
        <div class="grid grid-2" style="gap: var(--space-6);">
          ${DEPARTMENTS.map(dept => `
            <a href="${routeLink('tutor/' + dept.slug)}" class="card animate-on-scroll" style="--dept-color: ${dept.accent}; text-decoration: none;">
              <div class="card__body" style="display: flex; gap: var(--space-5);">
                <div class="avatar avatar--xl" style="background: color-mix(in srgb, ${dept.accent} 15%, white); font-size: 2.5rem; flex-shrink: 0;">${dept.emoji}</div>
                <div>
                  <div class="card__label">${dept.name}</div>
                  <div class="card__title">${dept.tutor.name}</div>
                  <div style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: var(--space-2);">${dept.tutor.title}</div>
                  <div style="font-size: var(--text-xs); color: var(--text-tertiary); margin-bottom: var(--space-3);">
                    <span class="stars" style="font-size: var(--text-xs);">${'★'.repeat(Math.floor(dept.tutor.rating))}</span>
                    ${dept.tutor.rating} · ${formatNumber(dept.tutor.reviewCount)} reviews
                  </div>
                  <div style="font-family: var(--font-serif); font-style: italic; font-size: var(--text-xs); color: var(--text-tertiary);">
                    "${dept.tutor.quotes[0]}"
                  </div>
                </div>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  container.appendChild(main);
  container.appendChild(renderFooter());
  requestAnimationFrame(() => initScrollAnimations());
}
