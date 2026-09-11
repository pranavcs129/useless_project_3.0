// ============================================
// BUGLEARN — Departments Page
// ============================================

import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';
import { renderDepartmentCard } from '../components/departmentCard.js';
import { DEPARTMENTS } from '../data/departments.js';
import { initScrollAnimations } from '../utils/animate.js';

export async function render(container) {
  container.innerHTML = '';
  container.appendChild(renderNavbar());

  const main = document.createElement('main');
  main.innerHTML = `
    <section style="padding: var(--space-32) 0 var(--space-16); background: var(--bg-cream);">
      <div class="container text-center">
        <div class="section-label animate-on-scroll">Departments</div>
        <h1 class="section-title animate-on-scroll" style="font-size: var(--text-5xl); margin-left: auto; margin-right: auto;">
          Our <span class="text-italic-accent">Departments</span>
        </h1>
        <p class="section-subtitle animate-on-scroll" style="margin-left: auto; margin-right: auto;">
          Eight unique departments. Infinite possibilities.
        </p>
      </div>
    </section>

    <section class="section" style="background: var(--bg-cream);">
      <div class="container">
        <div class="grid grid-4" style="gap: var(--space-6);">
          ${DEPARTMENTS.map(dept => `
            <div class="animate-on-scroll">
              ${renderDepartmentCard(dept)}
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  container.appendChild(main);
  container.appendChild(renderFooter());

  requestAnimationFrame(() => initScrollAnimations());
}
