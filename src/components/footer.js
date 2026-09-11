// ============================================
// BUGLEARN — Footer Component
// ============================================

import { routeLink } from '../router.js';

export function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';

  footer.innerHTML = `
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <div class="footer__logo">🍃 BUGLEARN</div>
          <p class="footer__tagline">
            The world's first learning platform built for insects. Because knowledge has no species limit.
          </p>
          <p class="footer__tagline" style="margin-top: var(--space-4); font-style: italic; font-size: 0.7rem;">
            "A brighter land awaits tomorrow."
          </p>
        </div>

        <div>
          <div class="footer__heading">Platform</div>
          <a href="${routeLink('departments')}" class="footer__link">Departments</a>
          <a href="${routeLink('courses')}" class="footer__link">Courses</a>
          <a href="${routeLink('tutors')}" class="footer__link">Tutors</a>
          <a href="${routeLink('buglab')}" class="footer__link">Bug Lab</a>
          <a href="${routeLink('leaderboard')}" class="footer__link">Leaderboard</a>
        </div>

        <div>
          <div class="footer__heading">Community</div>
          <a href="${routeLink('community')}" class="footer__link">BugBoard</a>
          <a href="${routeLink('campus')}" class="footer__link">Campus Map</a>
          <a href="${routeLink('leaderboard')}" class="footer__link">Rankings</a>
        </div>

        <div>
          <div class="footer__heading">Resources</div>
          <a href="#" class="footer__link">Help Centre</a>
          <a href="#" class="footer__link">Accessibility</a>
          <a href="#" class="footer__link">Privacy Policy</a>
          <a href="#" class="footer__link">Terms of Service</a>
        </div>
      </div>

      <div class="footer__bottom">
        <span>© ${new Date().getFullYear()} BUGLEARN. Learn. Adapt. Survive.</span>
        <span>Accredited by Absolutely Nobody™</span>
      </div>
    </div>
  `;

  return footer;
}
