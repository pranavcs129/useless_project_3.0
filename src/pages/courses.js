// ============================================
// BUGLEARN — Course Catalog Page
// ============================================

import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';
import { renderCourseCard } from '../components/courseCard.js';
import { getAllCourses } from '../data/departments.js';
import { EXTRA_COURSES } from '../data/extras.js';
import { routeLink } from '../router.js';
import { initScrollAnimations } from '../utils/animate.js';

export async function render(container) {
  const allCourses = getAllCourses();
  const tags = ['All', 'Social', 'Science', 'Technology', 'Communication', 'Lifestyle', 'Advanced', 'Mandatory', 'Hilariously Necessary'];

  container.innerHTML = '';
  container.appendChild(renderNavbar());

  const main = document.createElement('main');
  main.innerHTML = `
    <section style="padding: var(--space-32) 0 var(--space-8);">
      <div class="container">
        <div class="section-label">Courses</div>
        <h1 class="section-title" style="font-size: var(--text-5xl);">Explore <span class="text-italic-accent">Courses</span></h1>
        <p class="section-subtitle">A world of learning for every kind of bug.</p>
      </div>
    </section>

    <section style="padding-bottom: var(--space-4);">
      <div class="container">
        <div style="display: flex; align-items: center; gap: var(--space-4); flex-wrap: wrap; margin-bottom: var(--space-6);">
          <input type="text" class="input input--search" placeholder="Search courses, topics or tutors..." style="max-width: 400px;" id="course-search" />
        </div>
        <div style="display: flex; gap: var(--space-2); flex-wrap: wrap;">
          ${tags.map((tag, i) => `
            <button class="tag ${i === 0 ? 'tag--active' : ''}" data-tag="${tag}">${tag}</button>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="section--sm">
      <div class="container">
        <div class="grid grid-3" id="courses-grid">
          ${allCourses.map(c => `<div class="animate-on-scroll">${renderCourseCard(c)}</div>`).join('')}
        </div>
      </div>
    </section>

    <!-- Courses Nobody Asked For -->
    <section class="section" style="background: var(--bg-lavender);">
      <div class="container">
        <div style="margin-bottom: var(--space-8);">
          <div class="section-label">Electives</div>
          <h2 class="section-title">Courses Nobody Asked For</h2>
          <p class="section-subtitle">And yet, here they are.</p>
        </div>
        <div class="grid grid-3" style="gap: var(--space-6);">
          ${EXTRA_COURSES.map(c => `
            <div class="card animate-on-scroll">
              <div class="card__body">
                <div style="font-size: 2rem; margin-bottom: var(--space-3);">${c.emoji}</div>
                <div class="card__label" style="--dept-color: var(--accent-violet);">${c.department}</div>
                <div class="card__title">${c.name}</div>
                <div class="card__subtitle">${c.description}</div>
                <div class="card__meta">
                  <span class="badge badge--info">${c.difficulty}</span>
                  <span>⏱ ${c.hours}h</span>
                  <span>👥 ${c.enrolled}</span>
                </div>
              </div>
              <div class="card__footer">
                <span style="font-size: var(--text-sm); color: var(--text-secondary);">${c.tutor}</span>
                <span style="color: var(--accent-violet); font-weight: 600; font-style: italic; font-size: var(--text-xs);">Coming eventually</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  container.appendChild(main);
  container.appendChild(renderFooter());

  // Search functionality
  const searchInput = container.querySelector('#course-search');
  const grid = container.querySelector('#courses-grid');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filtered = allCourses.filter(c =>
      c.name.toLowerCase().includes(query) ||
      c.departmentName.toLowerCase().includes(query) ||
      c.tutorName.toLowerCase().includes(query) ||
      c.description.toLowerCase().includes(query)
    );
    grid.innerHTML = filtered.map(c => `<div>${renderCourseCard(c)}</div>`).join('');
    if (filtered.length === 0) {
      grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: var(--space-10); color: var(--text-tertiary);"><p>No courses found. Have you tried searching for "crumbs"?</p></div>';
    }
  });

  // Tag filtering
  container.querySelectorAll('.tag').forEach(tag => {
    tag.addEventListener('click', () => {
      container.querySelectorAll('.tag').forEach(t => t.classList.remove('tag--active'));
      tag.classList.add('tag--active');
    });
  });

  requestAnimationFrame(() => initScrollAnimations());
}
