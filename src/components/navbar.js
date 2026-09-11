// ============================================
// BUGLEARN — Navbar Component
// ============================================

import { routeLink } from '../router.js';
import { store } from '../state/store.js';

const NAV_LINKS = [
  { label: 'Home', path: '' },
  { label: 'Departments', path: 'departments' },
  { label: 'Courses', path: 'courses' },
  { label: 'Tutors', path: 'tutors' },
  { label: 'Bug Lab', path: 'buglab' },
  { label: 'Community', path: 'community' },
];

export function renderNavbar() {
  const nav = document.createElement('nav');
  nav.className = 'navbar';
  nav.id = 'main-nav';

  const currentPath = window.location.hash.slice(2) || '';
  const profile = store.getProfile();

  nav.innerHTML = `
    <div class="navbar__inner">
      <a href="${routeLink('')}" class="navbar__logo" aria-label="BUGLEARN Home">
        <video
          class="navbar__logo-video"
          src="/logo/logo-Picsart-BackgroundRemover.webm"
          autoplay
          loop
          muted
          playsinline
          preload="auto"
          aria-hidden="true"
        ></video>
        <span class="navbar__logo-text">BUGLEARN</span>
      </a>

      <div class="navbar__links">
        ${NAV_LINKS.map(link => `
          <a href="${routeLink(link.path)}" 
             class="navbar__link ${currentPath === link.path || (link.path && currentPath.startsWith(link.path)) ? 'is-active' : ''}"
             data-path="${link.path}">
            ${link.label}
          </a>
        `).join('')}
      </div>

      <div class="navbar__actions">
        ${profile ? `
          <a href="${routeLink('dashboard')}" class="btn btn--ghost btn--sm">
            ${profile.emoji} ${profile.name}
          </a>
        ` : `
          <a href="${routeLink('onboarding')}" class="btn btn--ghost btn--sm">Login</a>
          <a href="${routeLink('onboarding')}" class="btn btn--primary btn--sm">Get Started</a>
        `}
        <button class="navbar__hamburger" aria-label="Menu" id="nav-hamburger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>

    <div class="navbar__mobile" id="nav-mobile">
      ${NAV_LINKS.map(link => `
        <a href="${routeLink(link.path)}" class="navbar__link" data-mobile-link>${link.label}</a>
      `).join('')}
      ${profile
        ? `<a href="${routeLink('dashboard')}" class="btn btn--primary" data-mobile-link>Dashboard</a>`
        : `<a href="${routeLink('onboarding')}" class="btn btn--primary" data-mobile-link>Get Started</a>`
      }
    </div>
  `;

  // Scroll handler for background with RAF throttling and auto-cleanup
  let scrollTicking = false;
  const handleScroll = () => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        if (nav.isConnected) {
          nav.classList.toggle('is-scrolled', window.scrollY > 40);
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Mobile menu toggle & logo video playback
  requestAnimationFrame(() => {
    const video = nav.querySelector('.navbar__logo-video');
    if (video) {
      video.play().catch(() => {});
    }
    const hamburger = nav.querySelector('#nav-hamburger');
    const mobile = nav.querySelector('#nav-mobile');
    if (hamburger && mobile) {
      hamburger.addEventListener('click', () => {
        mobile.classList.toggle('is-open');
      });
      mobile.querySelectorAll('[data-mobile-link]').forEach(link => {
        link.addEventListener('click', () => mobile.classList.remove('is-open'));
      });
    }
  });

  return nav;
}
