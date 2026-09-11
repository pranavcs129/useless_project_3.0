// ============================================
// BUGLEARN Dashboard — Collapsible Academic Records
// ============================================
// Inspired by the reference's Devices/Pension/Compensation accordion drawers

export function renderDashAcademicRecords() {
  const sections = [
    {
      id: 'rec-cert',
      title: 'Certificates of Mastery',
      summary: '7 verified diplomas',
      badge: 'Honors',
      items: [
        'Antivirus — Grade A (Accredited by Absolutely Nobody)',
        'Basic Crumb Hauling — Grade A+',
        'Introductory Mandible Safety — Grade B+',
        'Subterranean Architecture — Grade A-',
      ],
      expanded: true,
    },
    {
      id: 'rec-courses',
      title: 'Completed Courses',
      summary: '12 courses finished',
      badge: 'Cumulative',
      items: [
        'Larval Fundamentals (4 modules)',
        'Pheromone Protocol V2 (3 modules)',
        'Evasion of Oversized Footwear (5 modules)',
        'Colony Logistics & Sugar Scouting (4 modules)',
      ],
      expanded: false,
    },
    {
      id: 'rec-gpa',
      title: 'Average Grade & Transcripts',
      summary: 'Cumulative GPA: 3.89 (A-)',
      badge: 'Standing',
      items: [
        'Current Term Grade: A-',
        'Class Rank: Top 3.2% of Ant Workers',
        'Academic Integrity Score: 100% (Zero sugar theft incidents)',
      ],
      expanded: false,
    },
    {
      id: 'rec-feedback',
      title: 'Tutor Evaluations',
      summary: '4 faculty reviews filed',
      badge: 'Faculty',
      items: [
        'Prof. Antonia: "Tenacious worker. Struggles with delegation. Carries whole breadcrumbs solo."',
        'Prof. Webster: "Displays surprising geometry instincts for a ground dweller."',
      ],
      expanded: false,
    },
  ];

  return `
    <article class="dash-card dash-academic-records" id="dash-records-panel">
      <div class="dash-academic-records__header">
        <div>
          <div class="dash-card-eyebrow">INSTITUTIONAL DOSSIER</div>
          <h2 class="dash-card-title">Academic Records</h2>
        </div>
        <span class="dash-academic-records__reg-seal" title="Official Queen seal">REGISTRAR SEAL 🏅</span>
      </div>

      <div class="dash-accordion">
        ${sections.map((sec, i) => `
          <div class="dash-accordion-item ${sec.expanded ? 'is-open' : ''}" id="${sec.id}">
            <button class="dash-accordion-trigger" aria-expanded="${sec.expanded}" aria-controls="${sec.id}-content">
              <div class="dash-accordion-trigger__left">
                <span class="dash-accordion-trigger__title">${sec.title}</span>
                <span class="dash-accordion-trigger__summary">${sec.summary}</span>
              </div>
              <div class="dash-accordion-trigger__right">
                <span class="dash-accordion-badge">${sec.badge}</span>
                <span class="dash-accordion-chevron" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </span>
              </div>
            </button>
            <div class="dash-accordion-content" id="${sec.id}-content" style="${sec.expanded ? 'max-height: 280px;' : 'max-height: 0;'}">
              <ul class="dash-accordion-list">
                ${sec.items.map(it => `
                  <li class="dash-accordion-list-item">
                    <span class="dash-accordion-list-dot"></span>
                    <span>${it}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="dash-academic-records__footer">
        <span class="dash-records-badge-muted">Accredited by Absolutely Nobody.</span>
        <button class="dash-records-download-btn" title="Download official transcript PDF">
          Download Transcript ↗
        </button>
      </div>
    </article>
  `;
}

export function initDashAcademicRecords(container) {
  const panel = container.querySelector('#dash-records-panel');
  if (!panel) return;

  const items = panel.querySelectorAll('.dash-accordion-item');
  items.forEach(item => {
    const trigger = item.querySelector('.dash-accordion-trigger');
    const content = item.querySelector('.dash-accordion-content');
    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      if (isOpen) {
        item.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = '0px';
      } else {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = `${content.scrollHeight + 30}px`;
      }
    });
  });
}
