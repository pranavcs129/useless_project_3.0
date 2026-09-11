// ============================================
// BUGLEARN — Department Detail Page
// ============================================

import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';
import { getDepartment } from '../data/departments.js';
import { store } from '../state/store.js';
import { routeLink } from '../router.js';
import { formatNumber, countLessons } from '../utils/format.js';
import { renderProgressBar } from '../components/progressBar.js';
import { showToast } from '../components/toast.js';
import { initScrollAnimations } from '../utils/animate.js';
import { getActivity, hasActivity } from '../activities/registry.js';

export async function render(container, params) {
  const dept = getDepartment(params.slug);
  if (!dept) {
    container.innerHTML = '<div class="not-found"><h1>Department not found</h1><a href="#/" class="btn btn--primary">Go Home</a></div>';
    return;
  }

  store.visitDepartment(dept.slug);
  const isEnrolled = store.isEnrolled(dept.slug);
  const totalLessons = countLessons(dept.course.modules);
  const progress = store.getCourseProgressPercent(dept.slug, totalLessons);

  container.innerHTML = '';
  container.appendChild(renderNavbar());

  const heroImageSrc = dept.image ? encodeURI(decodeURI(dept.image)) : '';
  const heroImageHtml = heroImageSrc
    ? `<div style="position: relative; max-width: 380px; width: 100%;">
        ${dept.slug === 'spider' ? `
        <div style="position: absolute; top: -14px; right: 12px; background: #6C5CE7; color: white; padding: 6px 14px; border-radius: 20px; font-size: 0.75rem; font-weight: 700; transform: rotate(8deg); box-shadow: var(--shadow-md); z-index: 2;">
          No JavaScript required!
        </div>` : ''}
        <img
          src="${heroImageSrc}"
          alt="${dept.name}"
          style="width: 100%; border-radius: var(--radius-xl); box-shadow: var(--shadow-lg); object-fit: cover; aspect-ratio: 4/3; background: var(--bg-cream);"
          onerror="if(!this.dataset.fallback && this.src.includes('cockro')) { this.dataset.fallback='1'; this.src=this.src.includes('cockroch') ? '/bugs/cockroach.png' : '/bugs/cockroch.png'; return; } this.style.display='none';"
        />
        <div style="margin-top: 10px; font-style: italic; font-family: var(--font-serif); font-size: 0.85rem; color: var(--text-secondary); text-align: center;">
          "${dept.course.subtitle || dept.tagline || dept.name}" — ${dept.tutor.name}
        </div>
      </div>`
    : '';

  const main = document.createElement('main');
  main.innerHTML = `
    <!-- Department Hero -->
    <section class="course-hero" style="background: linear-gradient(135deg, color-mix(in srgb, ${dept.accent} 8%, var(--bg-primary)) 0%, var(--bg-primary) 100%);">
      <div class="container" style="${heroImageHtml ? 'display: grid; grid-template-columns: 1fr auto; gap: var(--space-8); align-items: center;' : ''}">
        <div>
          <div class="course-hero__dept" style="--dept-color: ${dept.accent};">${dept.name}</div>
          <h1 class="course-hero__title">${dept.course.name}</h1>
          <p class="course-hero__tagline">${dept.course.subtitle}</p>

          <div class="course-meta">
            <div class="course-meta__item">
              <span class="badge badge--dept" style="--dept-color: ${dept.accent};">${dept.course.difficulty}</span>
            </div>
            <div class="course-meta__item">📚 ${dept.course.modules.length} Modules</div>
            <div class="course-meta__item">⏱ ${dept.course.hours} Hours</div>
            <div class="course-meta__item">📜 Certificate</div>
            <div class="course-meta__item">👥 ${formatNumber(dept.course.enrolled)} enrolled</div>
            <div class="course-meta__item">
              <span class="stars">${'★'.repeat(Math.floor(dept.course.rating))}</span> ${dept.course.rating}
            </div>
          </div>

          <div style="margin-top: var(--space-8); display: flex; gap: var(--space-4); align-items: center;">
            ${isEnrolled
              ? `<a href="${routeLink(`lesson/${dept.slug}/0/0`)}" class="btn btn--primary btn--lg" style="background: ${dept.accent};">
                  Continue Learning →
                </a>
                <div style="flex: 1; max-width: 200px;">
                  <div style="font-size: var(--text-xs); color: var(--text-secondary); margin-bottom: 4px;">${progress}% complete</div>
                  ${renderProgressBar(progress, dept.accent)}
                </div>`
              : `<button class="btn btn--primary btn--lg" style="background: ${dept.accent};" id="enroll-btn">
                  Enrol Now →
                </button>
                <span style="font-size: var(--text-sm); color: var(--text-secondary);">Free • No obligations</span>`
            }
          </div>
        </div>
        ${heroImageHtml}
      </div>
    </section>

    <!-- Tutor Section -->
    <section class="section--sm" style="background: var(--bg-cream);">
      <div class="container">
        <div style="display: flex; align-items: center; gap: var(--space-6); padding: var(--space-6); background: white; border-radius: var(--radius-xl); border: 1px solid var(--border-light);">
          <div class="avatar avatar--xl" style="background: color-mix(in srgb, ${dept.accent} 15%, white); font-size: 2.5rem;">${dept.emoji}</div>
          <div style="flex: 1;">
            <div style="font-size: var(--text-xs); color: var(--text-tertiary); letter-spacing: var(--tracking-wider); text-transform: uppercase; margin-bottom: 2px;">Your Tutor</div>
            <div style="font-family: var(--font-serif); font-size: var(--text-xl); font-weight: bold; margin-bottom: 4px;">
              <a href="${routeLink('tutor/' + dept.slug)}" style="color: var(--text-primary); text-decoration: none; border-bottom: 1px solid transparent; transition: border-color 0.2s;">
                ${dept.tutor.name}
              </a>
            </div>
            <div style="font-size: var(--text-sm); color: var(--text-secondary); margin-bottom: var(--space-2);">${dept.tutor.title}</div>
            <div style="font-size: var(--text-sm); color: var(--text-secondary);">
              <span class="stars" style="font-size: var(--text-xs);">${'★'.repeat(Math.floor(dept.tutor.rating))}</span>
              ${dept.tutor.rating} (${formatNumber(dept.tutor.reviewCount)} reviews)
            </div>
          </div>
          <div style="max-width: 300px; padding: var(--space-4); background: var(--bg-cream); border-radius: var(--radius-lg); font-family: var(--font-serif); font-style: italic; font-size: var(--text-sm); color: var(--text-secondary); line-height: var(--leading-relaxed);">
            "${dept.tutor.quotes[0]}"
          </div>
        </div>
      </div>
    </section>

    <!-- Description & What You'll Learn -->
    <section class="section">
      <div class="container">
        <div class="grid grid-2" style="gap: var(--space-12);">
          <div>
            <h2 style="font-family: var(--font-serif); font-size: var(--text-2xl); margin-bottom: var(--space-4);">About This Course</h2>
            <p style="color: var(--text-secondary); line-height: var(--leading-relaxed); margin-bottom: var(--space-6);">
              ${dept.course.description}
            </p>
            <div style="font-family: var(--font-serif); font-style: italic; color: ${dept.accent}; font-size: var(--text-lg);">
              "${dept.tagline}"
            </div>
          </div>
          <div>
            <h2 style="font-family: var(--font-serif); font-size: var(--text-2xl); margin-bottom: var(--space-4);">What You'll Learn</h2>
            <div style="display: flex; flex-direction: column; gap: var(--space-3);">
              ${dept.course.learnings.map(item => `
                <div style="display: flex; align-items: flex-start; gap: var(--space-3);">
                  <span style="color: ${dept.accent}; font-weight: bold; flex-shrink: 0;">✓</span>
                  <span style="font-size: var(--text-sm); color: var(--text-secondary);">${item}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Curriculum -->
    <section class="section" style="background: var(--bg-secondary);">
      <div class="container" style="max-width: var(--container-lg);">
        <h2 style="font-family: var(--font-serif); font-size: var(--text-2xl); margin-bottom: var(--space-6); text-align: center;">Course Curriculum</h2>
        <div style="display: flex; flex-direction: column; gap: var(--space-1);">
          ${dept.course.modules.map((mod, mi) => `
            <div class="accordion__item ${mi === 0 ? 'is-open' : ''}" data-accordion>
              <button class="accordion__trigger" onclick="this.parentElement.classList.toggle('is-open')">
                <span>
                  <span style="color: var(--text-tertiary); font-size: var(--text-sm);">Module ${mi + 1}</span>
                  &nbsp;— ${mod.title}
                </span>
                <span style="font-size: var(--text-xs); color: var(--text-tertiary);">
                  ${mod.lessons.length} lessons
                  <span class="accordion__chevron">▾</span>
                </span>
              </button>
              <div class="accordion__content">
                <div class="accordion__inner">
                  ${mod.lessons.map((lesson, li) => {
                    const completed = store.isLessonCompleted(dept.slug, mi, li);
                    return `
                      <a href="${routeLink(`lesson/${dept.slug}/${mi}/${li}`)}" 
                         style="display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3) var(--space-4); border-radius: var(--radius-md); transition: background 0.15s; text-decoration: none; color: inherit; ${completed ? 'opacity: 0.6;' : ''}"
                         onmouseover="this.style.background='var(--bg-green)'" onmouseout="this.style.background='transparent'">
                        <span style="width: 20px; text-align: center; font-size: var(--text-xs);">${completed ? '✓' : '○'}</span>
                        <span style="font-size: var(--text-sm);">${lesson.title}</span>
                        ${lesson.quiz ? '<span class="badge badge--info" style="margin-left: auto; font-size: 0.6rem;">Quiz</span>' : ''}
                      </a>
                    `;
                  }).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- Practical Activity Section (if registered) -->
    <div id="dept-activity-mount"></div>
  `;

  container.appendChild(main);
  container.appendChild(renderFooter());

  // Mount activity if available
  if (hasActivity(dept.slug)) {
    const actMount = container.querySelector('#dept-activity-mount');
    if (actMount) {
      getActivity(dept.slug).then(act => {
        if (act && act.render) {
          const actSection = document.createElement('section');
          actSection.className = 'section--sm';
          const actContainer = document.createElement('div');
          actContainer.className = 'container';
          actSection.appendChild(actContainer);
          act.render(actContainer);
          actMount.appendChild(actSection);
        }
      });
    }
  }

  // Enrol button handler
  const enrollBtn = container.querySelector('#enroll-btn');
  if (enrollBtn) {
    enrollBtn.addEventListener('click', () => {
      if (!store.isOnboarded()) {
        window.location.hash = '#/onboarding';
        return;
      }
      const result = store.enrollInCourse(dept.slug);
      showToast('Enrolled!', `You are now enrolled in ${dept.course.name}`, 'success');
      result.newAchievements.forEach(a => showToast('Achievement Unlocked!', `${a.icon} ${a.name}`, 'achievement'));
      // Re-render to update UI
      render(container, params);
    });
  }

  requestAnimationFrame(() => initScrollAnimations());
}
