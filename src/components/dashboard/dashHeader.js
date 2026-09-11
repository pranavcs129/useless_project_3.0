// ============================================
// BUGLEARN Dashboard — Editorial Header
// ============================================

export function renderDashHeader(profile, level = 18) {
  const name = profile?.name || 'Ant #7405';
  const departmentName = (profile?.species ? `${profile.species.toUpperCase()} DEPARTMENT` : 'ANT DEPARTMENT');

  return `
    <div class="dash-header">
      <div class="dash-header__left">
        <div class="dash-header__badge">
          <span class="dash-header__badge-dot" aria-hidden="true"></span>
          <span class="dash-header__badge-text">${departmentName}</span>
          <span class="dash-header__badge-sep" aria-hidden="true">•</span>
          <span class="dash-header__badge-level">LEVEL ${level}</span>
        </div>
        <h1 class="dash-header__title">
          <span class="dash-header__greeting">Welcome back,</span> <span class="dash-header__name">${name}</span>
        </h1>
        <p class="dash-header__subtitle">
          Your colony has noticed your progress. Academic performance: surprisingly acceptable.
        </p>
      </div>

      <div class="dash-header__right">
        <div class="dash-header__status-card">
          <div class="dash-header__status-icon">🍃</div>
          <div class="dash-header__status-content">
            <span class="dash-header__status-title">Academic Standing</span>
            <span class="dash-header__status-desc">In Good Standing with Queen Council</span>
          </div>
        </div>
      </div>
    </div>
  `;
}
