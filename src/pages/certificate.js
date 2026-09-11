// ============================================
// BUGLEARN — Certificate Page
// ============================================

import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';
import { renderCertificate } from '../components/certificateRenderer.js';
import { store } from '../state/store.js';
import { routeLink } from '../router.js';

export async function render(container, params) {
  const profile = store.getProfile();
  const certificates = store.getCertificates();
  const cert = certificates.find(c => c.courseSlug === params.slug);

  container.innerHTML = '';
  container.appendChild(renderNavbar());

  const main = document.createElement('main');

  if (!cert) {
    main.innerHTML = `
      <section style="padding: var(--space-32) 0 var(--space-16);">
        <div class="container text-center">
          <div style="font-size: 4rem; margin-bottom: var(--space-6);">📜</div>
          <h1 class="section-title">No Certificate Yet</h1>
          <p class="section-subtitle" style="margin: 0 auto var(--space-8);">Complete all modules in a course to earn your certificate.</p>
          <a href="${routeLink('departments')}" class="btn btn--primary">Browse Courses →</a>
        </div>
      </section>
    `;
  } else {
    main.innerHTML = `
      <section style="padding: var(--space-32) 0 var(--space-16);">
        <div class="container">
          <div class="text-center" style="margin-bottom: var(--space-8);">
            <div class="section-label">Congratulations! 🎓</div>
            <h1 class="section-title">Your Certificate</h1>
          </div>
          ${renderCertificate(cert, profile)}
          <div class="text-center" style="margin-top: var(--space-8);">
            <button class="btn btn--primary" onclick="window.print()">🖨️ Print Certificate</button>
            <a href="${routeLink('dashboard')}" class="btn btn--secondary" style="margin-left: var(--space-3);">← Back to Dashboard</a>
          </div>
        </div>
      </section>
    `;
  }

  container.appendChild(main);
  container.appendChild(renderFooter());
}
