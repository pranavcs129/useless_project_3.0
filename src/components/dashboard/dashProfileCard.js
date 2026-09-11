// ============================================
// BUGLEARN Dashboard — Student Profile Panel
// ============================================

import { routeLink } from '../../router.js';

export function renderDashProfileCard(profile, level = 18) {
  const name = profile?.name || 'Ant #7405';
  const species = profile?.species || 'Ant';
  const roleTitle = 'Antivirus Specialist';

  const skills = [
    { name: 'Antivirus', pct: 92, color: '#4A7C59' },
    { name: 'Navigation', pct: 78, color: '#5B7898' },
    { name: 'Food Finding', pct: 64, color: '#D9822B' },
  ];

  return `
    <article class="dash-card dash-profile-card">
      <div class="dash-profile-card__header">
        <div class="dash-profile-card__tag">ACADEMIC IDENTITY</div>
        <a href="${routeLink('profile')}" class="dash-profile-card__link" title="Open full student profile">
          <span>View Profile</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"/>
            <polyline points="7 7 17 7 17 17"/>
          </svg>
        </a>
      </div>

      <div class="dash-profile-card__hero">
        <div class="dash-profile-card__avatar-glow-wrap">
          <div class="dash-profile-card__avatar-glow" aria-hidden="true"></div>
          <div class="dash-profile-card__avatar-frame">
            <img 
              src="/images/ant-student.jpg" 
              alt="${name} portrait" 
              class="dash-profile-card__img"
              loading="lazy"
            />
            <div class="dash-profile-card__level-chip">LVL ${level}</div>
          </div>
        </div>
        <div class="dash-profile-card__meta">
          <h2 class="dash-profile-card__name">${name}</h2>
          <div class="dash-profile-card__department">${species} Department</div>
          <div class="dash-profile-card__role">"${roleTitle}"</div>
        </div>
      </div>

      <div class="dash-profile-card__skills">
        <div class="dash-profile-card__skills-title">VERIFIED CAPABILITIES</div>
        <div class="dash-profile-card__skills-list">
          ${skills.map(s => `
            <div class="dash-profile-card__skill-row">
              <div class="dash-profile-card__skill-info">
                <span class="dash-profile-card__skill-name">${s.name}</span>
                <span class="dash-profile-card__skill-pct">${s.pct}%</span>
              </div>
              <div class="dash-profile-card__skill-track">
                <div class="dash-profile-card__skill-fill" style="width: ${s.pct}%; background-color: ${s.color};"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="dash-profile-card__footer">
        <div class="dash-profile-card__colony-id">
          <span>COLONY ID</span>
          <strong>BL-ANT-007405-C9</strong>
        </div>
        <div class="dash-profile-card__honor-status">
          <span class="dash-profile-card__honor-dot"></span>
          <span>Dean's Leaf List</span>
        </div>
      </div>
    </article>
  `;
}
