// ============================================
// BUGLEARN Dashboard — Tutor Feedback Panel
// ============================================

import { routeLink } from '../../router.js';

export function renderDashTutorPanel() {
  return `
    <article class="dash-card dash-tutor-panel">
      <div class="dash-tutor-panel__header">
        <div class="dash-card-eyebrow">FACULTY FEEDBACK</div>
        <span class="dash-tutor-panel__badge">Direct Note</span>
      </div>

      <div class="dash-tutor-panel__profile">
        <div class="dash-tutor-panel__avatar">🐜</div>
        <div class="dash-tutor-panel__meta">
          <div class="dash-tutor-panel__name">Professor Antonia</div>
          <div class="dash-tutor-panel__dept">ANT DEPARTMENT • Antivirus</div>
        </div>
      </div>

      <blockquote class="dash-tutor-panel__quote">
        <p>“You’ve been scanning every tunnel yourself.</p>
        <p>That is technically impressive.</p>
        <p>It is also terrible threat delegation.”</p>
      </blockquote>

      <div class="dash-tutor-panel__footer">
        <a href="${routeLink('tutors/antonia')}" class="dash-tutor-panel__btn" title="Chat with Professor Antonia">
          <span>Ask Tutor</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </a>
        <span class="dash-tutor-panel__office-hours">Office Hours: Dawn — Noon</span>
      </div>
    </article>
  `;
}
