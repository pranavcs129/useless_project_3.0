// ============================================
// BUGLEARN — Lesson Experience Page
// ============================================

import { renderNavbar } from '../components/navbar.js';
import { getLesson, getDepartment } from '../data/departments.js';
import { renderProgressBar } from '../components/progressBar.js';
import { renderQuiz } from '../components/quizEngine.js';
import { renderTutorChat } from '../components/tutorChat.js';
import { store } from '../state/store.js';
import { routeLink, navigate } from '../router.js';
import { countLessons } from '../utils/format.js';
import { showToast } from '../components/toast.js';

export async function render(container, params) {
  const { slug } = params;
  const moduleIndex = parseInt(params.mod);
  const lessonIndex = parseInt(params.les);

  const lesson = getLesson(slug, moduleIndex, lessonIndex);
  const dept = getDepartment(slug);

  if (!lesson || !dept) {
    container.innerHTML = '<div class="not-found"><h1>Lesson not found</h1><a href="#/" class="btn btn--primary">Go Home</a></div>';
    return;
  }

  // Auto-enroll if not enrolled
  if (!store.isEnrolled(slug)) {
    if (!store.isOnboarded()) {
      navigate('onboarding');
      return;
    }
    store.enrollInCourse(slug);
  }

  const totalLessons = countLessons(dept.course.modules);
  const progress = store.getCourseProgressPercent(slug, totalLessons);

  container.innerHTML = '';
  container.appendChild(renderNavbar());

  const lessonLayout = document.createElement('div');
  lessonLayout.className = 'lesson-layout';

  // Sidebar
  lessonLayout.innerHTML = `
    <!-- Sidebar -->
    <div class="lesson-sidebar">
      <a href="${routeLink('department/' + slug)}" style="font-size: var(--text-sm); color: var(--text-tertiary); display: block; margin-bottom: var(--space-4);">← Back to course</a>
      <div style="font-family: var(--font-serif); font-weight: bold; margin-bottom: var(--space-2);" id="sidebar-course-name">${dept.course.name}</div>
      <div style="font-size: var(--text-xs); color: var(--text-tertiary); margin-bottom: var(--space-4);">${dept.tutor.name}</div>
      <div style="margin-bottom: var(--space-4);">
        <div style="font-size: var(--text-xs); color: var(--text-secondary); margin-bottom: 4px;">${progress}% complete</div>
        ${renderProgressBar(progress, dept.accent, 'sm')}
      </div>
      <div style="display: flex; flex-direction: column; gap: var(--space-1);">
        ${dept.course.modules.map((mod, mi) => `
          <div style="margin-bottom: var(--space-2);">
            <div style="font-size: var(--text-xs); font-weight: 600; color: ${mi === moduleIndex ? dept.accent : 'var(--text-tertiary)'}; padding: var(--space-2) 0; text-transform: uppercase; letter-spacing: 0.05em;">
              Module ${mi + 1} — ${mod.title}
            </div>
            ${mod.lessons.map((l, li) => {
              const isCurrent = mi === moduleIndex && li === lessonIndex;
              const isCompleted = store.isLessonCompleted(slug, mi, li);
              return `
                <a href="${routeLink(`lesson/${slug}/${mi}/${li}`)}"
                   style="display: flex; align-items: center; gap: var(--space-2); padding: var(--space-2) var(--space-3); font-size: var(--text-xs); border-radius: var(--radius-sm); transition: background 0.15s; text-decoration: none; color: ${isCurrent ? dept.accent : isCompleted ? 'var(--text-tertiary)' : 'var(--text-secondary)'}; background: ${isCurrent ? `color-mix(in srgb, ${dept.accent} 10%, white)` : 'transparent'}; font-weight: ${isCurrent ? '600' : '400'};">
                  <span>${isCompleted ? '✓' : isCurrent ? '●' : '○'}</span>
                  <span>${l.title}</span>
                </a>
              `;
            }).join('')}
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Main Content -->
    <div class="lesson-content" id="lesson-main">
      <div style="margin-bottom: var(--space-6);">
        <div style="font-size: var(--text-xs); color: var(--text-tertiary); margin-bottom: var(--space-2);">
          Module ${moduleIndex + 1} · Lesson ${lessonIndex + 1}
        </div>
        <h1 style="font-family: var(--font-serif); font-size: var(--text-3xl); font-weight: bold; margin-bottom: var(--space-6);">
          ${lesson.title}
        </h1>
      </div>

      <div class="lesson-text-content" style="font-size: var(--text-base); line-height: var(--leading-relaxed); color: var(--text-secondary);">
        ${lesson.content}
      </div>

      <div id="quiz-container"></div>

      <!-- Lesson Navigation -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: var(--space-12); padding-top: var(--space-6); border-top: 1px solid var(--border-light);">
        ${getPrevLesson(dept, moduleIndex, lessonIndex)
          ? `<a href="${routeLink(`lesson/${slug}/${getPrevLesson(dept, moduleIndex, lessonIndex).mi}/${getPrevLesson(dept, moduleIndex, lessonIndex).li}`)}" class="btn btn--ghost">← Previous</a>`
          : '<div></div>'
        }
        <button class="btn btn--primary" style="background: ${dept.accent};" id="complete-lesson-btn">
          ${getNextLesson(dept, moduleIndex, lessonIndex) ? 'Complete & Continue →' : 'Complete Course 🎓'}
        </button>
      </div>
    </div>

    <!-- Tutor Panel -->
    <div class="lesson-tutor-panel" id="tutor-panel"></div>
  `;

  container.appendChild(lessonLayout);

  // Mobile tutor toggle button
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'btn btn--primary btn--icon';
  toggleBtn.style.cssText = 'position: fixed; bottom: var(--space-6); right: var(--space-6); z-index: 100; width: 48px; height: 48px; font-size: 1.2rem; display: none;';
  toggleBtn.textContent = '💬';
  toggleBtn.id = 'tutor-toggle';
  container.appendChild(toggleBtn);

  // Render quiz if present
  const quizContainer = container.querySelector('#quiz-container');
  if (lesson.quiz) {
    renderQuiz(quizContainer, lesson.quiz, slug, moduleIndex);
  }

  // Render tutor chat
  const tutorPanel = container.querySelector('#tutor-panel');
  renderTutorChat(tutorPanel, dept.tutor);

  // Complete lesson button
  const completeBtn = container.querySelector('#complete-lesson-btn');
  completeBtn.addEventListener('click', () => {
    const result = store.completeLesson(slug, moduleIndex, lessonIndex);
    showToast('Lesson Complete!', '+25 XP', 'xp');
    result.newAchievements.forEach(a => showToast('Achievement Unlocked!', `${a.icon} ${a.name}`, 'achievement'));

    const next = getNextLesson(dept, moduleIndex, lessonIndex);
    if (next) {
      navigate(`lesson/${slug}/${next.mi}/${next.li}`);
    } else {
      // Course complete!
      const grade = calculateGrade(slug, dept);
      store.earnCertificate(slug, grade);
      showToast('Course Complete! 🎓', `You earned a certificate with grade ${grade}!`, 'achievement', 6000);
      navigate(`certificate/${slug}`);
    }
  });

  // Mobile tutor toggle
  if (window.innerWidth <= 1024) {
    toggleBtn.style.display = 'flex';
    toggleBtn.addEventListener('click', () => {
      tutorPanel.classList.toggle('is-open');
    });
  }

  // Style lesson content
  styleContent(container);
}

function getNextLesson(dept, mi, li) {
  const mod = dept.course.modules[mi];
  if (li + 1 < mod.lessons.length) return { mi, li: li + 1 };
  if (mi + 1 < dept.course.modules.length) return { mi: mi + 1, li: 0 };
  return null;
}

function getPrevLesson(dept, mi, li) {
  if (li > 0) return { mi, li: li - 1 };
  if (mi > 0) {
    const prevMod = dept.course.modules[mi - 1];
    return { mi: mi - 1, li: prevMod.lessons.length - 1 };
  }
  return null;
}

function calculateGrade(slug, dept) {
  const totalLessons = countLessons(dept.course.modules);
  const completed = store.getCourseProgress(slug);
  const percent = (completed / totalLessons) * 100;
  if (percent >= 90) return 'A';
  if (percent >= 80) return 'B+';
  if (percent >= 70) return 'B';
  return 'C';
}

function styleContent(container) {
  // Add styling to rendered HTML content
  const content = container.querySelector('.lesson-text-content');
  if (!content) return;

  content.querySelectorAll('h2').forEach(h => {
    h.style.cssText = 'font-family: var(--font-serif); font-size: var(--text-2xl); font-weight: bold; color: var(--text-primary); margin-bottom: var(--space-4); margin-top: var(--space-6);';
  });
  content.querySelectorAll('h3').forEach(h => {
    h.style.cssText = 'font-family: var(--font-serif); font-size: var(--text-lg); font-weight: 600; color: var(--text-primary); margin-bottom: var(--space-3); margin-top: var(--space-6);';
  });
  content.querySelectorAll('p').forEach(p => {
    p.style.cssText = 'margin-bottom: var(--space-4);';
  });
  content.querySelectorAll('ul, ol').forEach(list => {
    list.style.cssText = 'padding-left: var(--space-6); margin-bottom: var(--space-4); display: flex; flex-direction: column; gap: var(--space-2);';
  });
  content.querySelectorAll('li').forEach(li => {
    li.style.cssText = 'list-style: disc; font-size: var(--text-sm);';
  });
  content.querySelectorAll('ol li').forEach(li => {
    li.style.listStyle = 'decimal';
  });
  content.querySelectorAll('blockquote').forEach(bq => {
    bq.style.cssText = 'border-left: 3px solid var(--accent-forest); padding: var(--space-4) var(--space-6); margin: var(--space-6) 0; background: var(--bg-green); border-radius: 0 var(--radius-md) var(--radius-md) 0; font-family: var(--font-serif); font-style: italic; color: var(--text-secondary);';
  });
  content.querySelectorAll('strong').forEach(s => {
    s.style.color = 'var(--text-primary)';
    s.style.fontWeight = '600';
  });
}
