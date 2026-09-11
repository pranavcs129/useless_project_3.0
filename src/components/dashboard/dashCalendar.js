// ============================================
// BUGLEARN Dashboard — Academic Calendar
// ============================================

export function renderDashCalendar() {
  const schedule = [
    {
      day: 'MON',
      date: 'SEP 14',
      time: '10:00',
      title: 'Antivirus: Threat Scanning & Quarantine',
      location: 'Lecture Hall B • Ant Hill',
      instructor: 'Prof. Antonia',
      type: 'Lecture',
      color: '#4A7C59',
    },
    {
      day: 'TUE',
      date: 'SEP 15',
      time: '14:00',
      title: 'Web Development: Radial Tension & Anchors',
      location: 'Silk Studio 3 • Spider Web',
      instructor: 'Prof. Webster',
      type: 'Workshop',
      color: '#5B7898',
    },
    {
      day: 'WED',
      date: 'SEP 16',
      time: '16:30',
      title: 'Software Development: Metamorphic Life Cycles',
      location: 'Garden Greenhouse',
      instructor: 'Dr. Chrysalis',
      type: 'Lab',
      color: '#8C68A6',
    },
    {
      day: 'THU',
      date: 'SEP 17',
      time: '11:00',
      title: 'Chemical Engineering: Hazardous Environments',
      location: 'Kitchen Simulation Chamber',
      instructor: 'Dr. Roach',
      type: 'Field Drill',
      color: '#D9822B',
    },
    {
      day: 'FRI',
      date: 'SEP 18',
      time: '09:30',
      title: 'Bug Lab: Navigation Velocity Trials',
      location: 'Maze Pavilion A',
      instructor: 'Research Colony Team',
      type: 'Experiment',
      color: '#4A7C59',
    },
    {
      day: 'FRI',
      date: 'SEP 18',
      time: '16:30',
      title: 'Mandatory Leaf Appreciation',
      location: 'North Foliage Ridge',
      instructor: 'Department Dean',
      type: 'Institutional',
      color: '#4A7C59',
    },
  ];

  return `
    <article class="dash-card dash-calendar">
      <div class="dash-calendar__header">
        <div>
          <div class="dash-card-eyebrow">TERM SCHEDULE</div>
          <h2 class="dash-card-title">Academic Calendar</h2>
        </div>
        <div class="dash-calendar__view-switch">
          <button class="dash-calendar__tab is-active">This Week</button>
          <button class="dash-calendar__tab">Next Week</button>
        </div>
      </div>

      <div class="dash-calendar__timeline">
        ${schedule.map((item, idx) => `
          <div class="dash-calendar-row ${item.type === 'Institutional' ? 'is-highlight' : ''}">
            <div class="dash-calendar-row__day">
              <span class="dash-calendar-row__day-code">${item.day}</span>
              <span class="dash-calendar-row__day-date">${item.date}</span>
            </div>

            <div class="dash-calendar-row__time">
              <span>${item.time}</span>
            </div>

            <div class="dash-calendar-row__pill" style="border-left: 3px solid ${item.color};">
              <div class="dash-calendar-row__main">
                <span class="dash-calendar-row__title">${item.title}</span>
                <span class="dash-calendar-row__meta">${item.location} • ${item.instructor}</span>
              </div>
              <span class="dash-calendar-row__tag" style="color: ${item.color}; background: color-mix(in srgb, ${item.color} 10%, white);">
                ${item.type}
              </span>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="dash-calendar__footer">
        <span class="dash-calendar__sync-info">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="23 4 23 10 17 10"/>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
          </svg>
          Synchronized with Colony Sun Dial & Foraging Shifts
        </span>
        <button class="dash-calendar__btn-add" title="Add study block">+ Add Study Session</button>
      </div>
    </article>
  `;
}
