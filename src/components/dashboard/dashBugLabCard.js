// ============================================
// BUGLEARN Dashboard — Bug Lab Feature Panel (WOW Element)
// ============================================

import { routeLink } from '../../router.js';

export function renderDashBugLabCard() {
  return `
    <article class="dash-card dash-buglab-feature">
      <div class="dash-buglab-feature__glow" aria-hidden="true"></div>
      
      <div class="dash-buglab-feature__top">
        <div class="dash-buglab-feature__tag">
          <span class="dash-buglab-feature__tag-icon">🧪</span>
          <span>BUG LAB RESEARCH SUITE</span>
        </div>
        <div class="dash-buglab-feature__pulse-badge">
          <span class="dash-buglab-feature__pulse-dot"></span>
          <span>LIVE LAB TRIAL</span>
        </div>
      </div>

      <div class="dash-buglab-feature__hero">
        <div class="dash-buglab-feature__badge-label">TODAY'S EXPERIMENT</div>
        <h2 class="dash-buglab-feature__headline">Can an Ant Learn?</h2>
        <p class="dash-buglab-feature__subtext">
          Test your navigation skills against the clock. Navigate the subterranean labyrinth, avoid dead ends, and optimize pheromone efficiency.
        </p>
      </div>

      <div class="dash-buglab-feature__stats">
        <div class="dash-buglab-stat">
          <span class="dash-buglab-stat__num">14.2s</span>
          <span class="dash-buglab-stat__label">Best Run Time</span>
        </div>
        <div class="dash-buglab-stat__divider"></div>
        <div class="dash-buglab-stat">
          <span class="dash-buglab-stat__num">4</span>
          <span class="dash-buglab-stat__label">Total Attempts</span>
        </div>
        <div class="dash-buglab-stat__divider"></div>
        <div class="dash-buglab-stat">
          <span class="dash-buglab-stat__num dash-buglab-stat__num--green">+56%</span>
          <span class="dash-buglab-stat__label">Path Efficiency</span>
        </div>
      </div>

      <div class="dash-buglab-feature__footer">
        <a href="${routeLink('buglab')}" class="dash-buglab-feature__btn" title="Open Interactive Bug Lab">
          <span>Start Experiment</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
        <span class="dash-buglab-feature__reward">+150 XP for sub-15s run</span>
      </div>
    </article>
  `;
}
