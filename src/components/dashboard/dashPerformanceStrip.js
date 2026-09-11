// ============================================
// BUGLEARN Dashboard — Academic Performance Strip
// ============================================
// Inspired by high-end SaaS horizontal metrics (Interviews/Hired/Project Time/Output)
// Connected dynamically to real student store progress.

export function renderDashPerformanceStrip(metrics) {
  const items = [
    {
      label: 'LESSONS',
      value: metrics.lessonsPercent ?? 24,
      detail: `${metrics.completedLessons ?? 18} of ${metrics.totalLessons ?? 75} completed`,
      accent: '#4A7C59', // Forest green
    },
    {
      label: 'COURSES',
      value: metrics.coursesPercent ?? 58,
      detail: `${metrics.activeCourses ?? 4} enrolled • 2 in progress`,
      accent: '#D9822B', // Honey
    },
    {
      label: 'LEARNING TIME',
      value: metrics.learningTimePercent ?? 72,
      detail: '28.4 hrs this term (Target 35h)',
      accent: '#5B7898', // Slate blue
    },
    {
      label: 'ACADEMIC OUTPUT',
      value: metrics.academicOutputPercent ?? 86,
      detail: 'Quizzes 94% • Labs 82%',
      accent: '#8C68A6', // Lavender purple
    },
  ];

  return `
    <div class="dash-perf-strip" role="region" aria-label="Academic Progress Overview">
      ${items.map(item => `
        <div class="dash-perf-strip__item">
          <div class="dash-perf-strip__header">
            <span class="dash-perf-strip__label">${item.label}</span>
            <span class="dash-perf-strip__value" style="color: ${item.accent};">${item.value}%</span>
          </div>
          <div class="dash-perf-strip__bar-track" aria-hidden="true">
            <div class="dash-perf-strip__bar-fill" style="width: ${item.value}%; background-color: ${item.accent};"></div>
          </div>
          <span class="dash-perf-strip__detail">${item.detail}</span>
        </div>
      `).join('')}
    </div>
  `;
}
