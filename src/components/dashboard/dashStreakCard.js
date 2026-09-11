// ============================================
// BUGLEARN Dashboard — Study Streak Panel
// ============================================
// Inspired by high-end SaaS Time Tracker cards with SVG circular progress ring

export function renderDashStreakCard({ streakDays = 18 }) {
  const days = [
    { name: 'Mon', active: true, mark: '✓' },
    { name: 'Tue', active: true, mark: '✓' },
    { name: 'Wed', active: true, mark: '✓' },
    { name: 'Thu', active: true, mark: '✓' },
    { name: 'Fri', active: true, mark: '✓' },
    { name: 'Sat', active: true, mark: '✓' },
    { name: 'Sun', active: true, mark: '★' },
  ];

  // SVG Circular progress math (radius 48, circumference ~301.6)
  const radius = 48;
  const circumference = 2 * Math.PI * radius;
  // Let's illustrate an 85% completion of the monthly streak ring
  const strokeDashoffset = circumference * (1 - 0.85);

  return `
    <article class="dash-card dash-streak-card">
      <div class="dash-streak-card__header">
        <div>
          <div class="dash-card-eyebrow">ATTENDANCE TELEMETRY</div>
          <h2 class="dash-card-title">Learning Streak</h2>
        </div>
        <div class="dash-streak-card__fire-badge" title="Active Streak">
          🔥 ACTIVE
        </div>
      </div>

      <div class="dash-streak-card__display">
        <!-- SVG Circular Ring -->
        <div class="dash-streak-ring-wrap" aria-hidden="true">
          <svg class="dash-streak-ring" width="124" height="124" viewBox="0 0 124 124">
            <circle 
              class="dash-streak-ring__bg" 
              cx="62" cy="62" r="${radius}" 
              stroke="rgba(212, 139, 56, 0.14)" 
              stroke-width="9" 
              fill="none" 
            />
            <circle 
              class="dash-streak-ring__progress" 
              cx="62" cy="62" r="${radius}" 
              stroke="#D48B38" 
              stroke-width="9" 
              stroke-linecap="round" 
              fill="none" 
              stroke-dasharray="${circumference}" 
              stroke-dashoffset="${strokeDashoffset}" 
              transform="rotate(-90 62 62)" 
            />
          </svg>
          <div class="dash-streak-ring__content">
            <span class="dash-streak-ring__number">${streakDays}</span>
            <span class="dash-streak-ring__unit">DAYS</span>
          </div>
        </div>

        <div class="dash-streak-card__narrative">
          <div class="dash-streak-card__headline">Your longest streak yet.</div>
          <p class="dash-streak-card__subtext">
            Consistency across dawn foraging and twilight reading shifts.
          </p>
          <div class="dash-streak-card__joke">
            Productivity has become suspicious.
          </div>
        </div>
      </div>

      <div class="dash-streak-card__week">
        <div class="dash-streak-card__week-label">THIS WEEK'S ATTENDANCE RECORD</div>
        <div class="dash-streak-card__days-grid">
          ${days.map(d => `
            <div class="dash-streak-day ${d.active ? 'is-active' : ''}">
              <span class="dash-streak-day__name">${d.name}</span>
              <span class="dash-streak-day__dot">${d.mark}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </article>
  `;
}
