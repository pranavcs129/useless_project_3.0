// ============================================
// BUGLEARN — 404 Page
// ============================================

import { renderNavbar } from '../components/navbar.js';
import { routeLink } from '../router.js';

export async function render(container) {
  container.innerHTML = '';
  container.appendChild(renderNavbar());

  const main = document.createElement('main');
  main.innerHTML = `
    <div class="not-found">
      <div class="not-found__emoji">🔍🐛</div>
      <h1 class="not-found__title">Bug not found.</h1>
      <p class="not-found__subtitle">
        We searched every leaf, every tunnel, and every web. This page does not exist.
        Perhaps it metamorphosed into something else.
      </p>
      <a href="${routeLink('')}" class="btn btn--primary">Go Home →</a>
    </div>
  `;

  container.appendChild(main);
}
