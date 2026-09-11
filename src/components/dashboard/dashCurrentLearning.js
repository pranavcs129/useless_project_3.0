// ============================================
// BUGLEARN Dashboard — Current Learning Panel
// ============================================

import { routeLink } from '../../router.js';

export function renderDashCurrentLearning({
  courseName = 'Antivirus',
  departmentName = 'Ant Department',
  tutorName = 'Professor Antonia',
  progressPercent = 82,
  completedLessons = 18,
  totalLessons = 22,
  nextLessonTitle = "Protecting the Queen",
  courseSlug = 'ant',
  moduleIndex = 3,
  lessonIndex = 2,
}) {
  return `
    <article class="dash-card dash-current-learning">
      <div class="dash-current-learning__top">
        <div class="dash-card-eyebrow">CONTINUE LEARNING</div>
        <div class="dash-current-learning__dept-badge">
          <span class="dash-current-learning__dept-dot" aria-hidden="true"></span>
          <span>${departmentName}</span>
        </div>
      </div>

      <div class="dash-current-learning__header">
        <div>
          <h2 class="dash-current-learning__title">${courseName}</h2>
          <div class="dash-current-learning__instructor">
            Instructor: <strong>${tutorName}</strong>
          </div>
        </div>
        <div class="dash-current-learning__pct-badge">
          ${progressPercent}%
        </div>
      </div>

      <div class="dash-current-learning__progress-wrap">
        <div class="dash-current-learning__progress-bar">
          <div class="dash-current-learning__progress-fill" style="width: ${progressPercent}%;"></div>
        </div>
        <div class="dash-current-learning__progress-meta">
          <span>${completedLessons} / ${totalLessons} Lessons Completed</span>
          <span>4 Lessons Remaining</span>
        </div>
      </div>

      <div class="dash-current-learning__next-box">
        <div class="dash-current-learning__next-label">UP NEXT (MODULE 4, LESSON 1)</div>
        <div class="dash-current-learning__next-title">${nextLessonTitle}</div>
        <div class="dash-current-learning__next-desc">
          Learn how to distribute crumbs without suffering an existential crisis about being irreplaceable.
        </div>
      </div>

      <div class="dash-current-learning__actions">
        <a href="${routeLink(`lesson/${courseSlug}/${moduleIndex}/${lessonIndex}`)}" class="dash-btn-primary dash-btn-lg">
          <span>Continue Lesson</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
        <a href="${routeLink(`department/${courseSlug}`)}" class="dash-btn-secondary">
          <span>Syllabus</span>
        </a>
      </div>
    </article>
  `;
}
