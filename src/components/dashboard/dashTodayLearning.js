// ============================================
// BUGLEARN Dashboard — Today's Learning (Dark Card)
// ============================================
// High-contrast dark charcoal card inspired by reference onboarding panel
// Features interactive checklist with reactive state counter.

export function renderDashTodayLearning(initialTasks) {
  const defaultTasks = [
    { id: 'task-1', title: 'Complete Lesson 4: Threat Scanning', completed: true, badge: 'Lesson' },
    { id: 'task-2', title: 'Take Antivirus Quarantine Quiz (Module 3)', completed: true, badge: 'Quiz' },
    { id: 'task-3', title: 'Visit Bug Lab Experiment', completed: true, badge: 'Bug Lab' },
    { id: 'task-4', title: 'Review Tutor Feedback from Prof. Antonia', completed: false, badge: 'Tutor' },
    { id: 'task-5', title: 'Mandatory Leaf Appreciation (10 min)', completed: false, badge: 'Colony' },
  ];

  const tasks = initialTasks || defaultTasks;
  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const remainingCount = totalCount - completedCount;

  return `
    <article class="dash-card dash-card--dark dash-today-learning" id="dash-today-panel">
      <div class="dash-today-learning__header">
        <div>
          <div class="dash-today-learning__eyebrow">DAILY CURRICULUM</div>
          <h2 class="dash-today-learning__title">Today's Learning</h2>
        </div>
        <div class="dash-today-learning__counter" id="dash-today-counter">
          <span class="dash-today-learning__counter-num">${completedCount}</span>
          <span class="dash-today-learning__counter-total">/ ${totalCount} complete</span>
        </div>
      </div>

      <div class="dash-today-learning__tasks" id="dash-tasks-list">
        ${tasks.map(t => `
          <div 
            class="dash-task-item ${t.completed ? 'is-completed' : ''}" 
            data-task-id="${t.id}"
            tabindex="0"
            role="checkbox"
            aria-checked="${t.completed}"
          >
            <div class="dash-task-item__box" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div class="dash-task-item__text">
              <span class="dash-task-item__title">${t.title}</span>
              <span class="dash-task-item__badge">${t.badge}</span>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="dash-today-learning__footer">
        <span class="dash-today-learning__rem-text" id="dash-today-rem">
          ${remainingCount === 0 ? 'All daily objectives completed!' : `${remainingCount} tasks remaining today`}
        </span>
        <span class="dash-today-learning__colony-note">Attendance reported to Queen</span>
      </div>
    </article>
  `;
}

/**
 * Wire click/keyboard handlers on today's tasks
 */
export function initDashTodayLearning(container) {
  const panel = container.querySelector('#dash-today-panel');
  if (!panel) return;

  const items = panel.querySelectorAll('.dash-task-item');
  const counterEl = panel.querySelector('#dash-today-counter');
  const remEl = panel.querySelector('#dash-today-rem');

  function updateCounts() {
    const total = items.length;
    const completed = panel.querySelectorAll('.dash-task-item.is-completed').length;
    const rem = total - completed;

    if (counterEl) {
      counterEl.innerHTML = `
        <span class="dash-today-learning__counter-num">${completed}</span>
        <span class="dash-today-learning__counter-total">/ ${total} complete</span>
      `;
    }

    if (remEl) {
      remEl.textContent = rem === 0 ? 'All daily objectives completed!' : `${rem} tasks remaining today`;
    }
  }

  items.forEach(item => {
    function toggle() {
      const isDone = item.classList.toggle('is-completed');
      item.setAttribute('aria-checked', String(isDone));
      updateCounts();
    }

    item.addEventListener('click', toggle);
    item.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggle();
      }
    });
  });
}
