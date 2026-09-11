// ============================================
// BUGLEARN Dashboard — Compact In-Container Nav
// ============================================

import { routeLink } from '../../router.js';

export function renderDashNav(profile) {
  const avatarEmoji = profile?.emoji || '🐜';
  const studentName = profile?.name || 'Ant #7405';

  return `
    <header class="dash-nav" aria-label="Dashboard navigation">
      <div class="dash-nav__left">
        <a href="${routeLink('')}" class="dash-nav__brand" title="BUGLEARN Home" aria-label="BUGLEARN Home">
          <video
            class="dash-nav__brand-video"
            src="/logo/logo-Picsart-BackgroundRemover.webm"
            autoplay
            loop
            muted
            playsinline
            preload="auto"
            aria-hidden="true"
          ></video>
          <span class="dash-nav__brand-text">BUGLEARN</span>
        </a>
      </div>

      <nav class="dash-nav__center" aria-label="Dashboard tabs">
        <a href="${routeLink('dashboard')}" class="dash-nav__tab is-active" aria-current="page">
          Dashboard
        </a>
        <a href="${routeLink('courses')}" class="dash-nav__tab">
          Courses
        </a>
        <a href="${routeLink('departments')}" class="dash-nav__tab">
          Departments
        </a>
        <a href="${routeLink('buglab')}" class="dash-nav__tab">
          Bug Lab
        </a>
        <a href="${routeLink('community')}" class="dash-nav__tab">
          Community
        </a>
      </nav>

      <div class="dash-nav__right">
        <button class="dash-nav__action-btn" id="dash-search-btn" title="Search curriculum (⌘K)" aria-label="Search">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>
          </svg>
          <span class="dash-nav__search-label">Search...</span>
          <kbd class="dash-nav__kbd">⌘K</kbd>
        </button>

        <button class="dash-nav__icon-btn" id="dash-notif-btn" title="3 unread colony notices" aria-label="Notifications">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
          </svg>
          <span class="dash-nav__notif-pip" aria-hidden="true"></span>
        </button>

        <a href="${routeLink('profile')}" class="dash-nav__profile-pill" title="View Profile">
          <span class="dash-nav__avatar-emoji" aria-hidden="true">${avatarEmoji}</span>
          <span class="dash-nav__profile-name">${studentName}</span>
          <span class="dash-nav__status-pip" title="Active in Colony" aria-hidden="true"></span>
        </a>
      </div>
    </header>
  `;
}
