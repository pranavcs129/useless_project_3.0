// ============================================
// BUGLEARN — Tutor Detail Page
// ============================================

import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';
import { getDepartment } from '../data/departments.js';
import { renderTutorChat } from '../components/tutorChat.js';
import { routeLink } from '../router.js';
import { formatNumber } from '../utils/format.js';

export async function render(container, params) {
  const dept = getDepartment(params.slug);
  if (!dept) {
    container.innerHTML = '<div class="not-found"><h1>Tutor not found</h1></div>';
    return;
  }
  const tutor = dept.tutor;

  container.innerHTML = '';
  container.appendChild(renderNavbar());

  const main = document.createElement('main');
  main.innerHTML = `
    <section style="padding: var(--space-32) 0 var(--space-16); background: color-mix(in srgb, ${dept.accent} 6%, var(--bg-primary));">
      <div class="container">
        <div style="display: flex; gap: var(--space-8); align-items: flex-start; flex-wrap: wrap;">
          <div class="avatar" style="width: 120px; height: 120px; font-size: 4rem; background: color-mix(in srgb, ${dept.accent} 15%, white); flex-shrink: 0;">${dept.emoji}</div>
          <div style="flex: 1; min-width: 300px;">
            <div style="font-size: var(--text-xs); font-weight: 600; letter-spacing: var(--tracking-wider); text-transform: uppercase; color: ${dept.accent}; margin-bottom: var(--space-2);">${dept.name}</div>
            <h1 style="font-family: var(--font-serif); font-size: var(--text-4xl); font-weight: bold; margin-bottom: var(--space-2);">${tutor.name}</h1>
            <p style="font-size: var(--text-lg); color: var(--text-secondary); margin-bottom: var(--space-4);">${tutor.title}</p>
            <div style="display: flex; gap: var(--space-6); margin-bottom: var(--space-4);">
              <div><span class="stars">${'★'.repeat(Math.floor(tutor.rating))}</span> ${tutor.rating}</div>
              <div style="color: var(--text-tertiary);">${formatNumber(tutor.reviewCount)} reviews</div>
            </div>
            <p style="color: var(--text-secondary); line-height: var(--leading-relaxed); max-width: 560px;">${tutor.personality}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section--sm">
      <div class="container">
        <div class="grid grid-2" style="gap: var(--space-8);">
          <div>
            <h2 style="font-family: var(--font-serif); font-size: var(--text-2xl); margin-bottom: var(--space-4);">Expertise</h2>
            <div style="display: flex; gap: var(--space-2); flex-wrap: wrap; margin-bottom: var(--space-8);">
              ${tutor.expertise.map(e => `<span class="badge badge--dept" style="--dept-color: ${dept.accent};">${e}</span>`).join('')}
            </div>

            <h2 style="font-family: var(--font-serif); font-size: var(--text-2xl); margin-bottom: var(--space-4);">Course</h2>
            <a href="${routeLink('department/' + dept.slug)}" class="card" style="--dept-color: ${dept.accent}; text-decoration: none;">
              <div class="card__body">
                <div class="card__label">${dept.name}</div>
                <div class="card__title">${dept.course.name}</div>
                <div class="card__subtitle">${dept.course.subtitle}</div>
              </div>
            </a>

            <h2 style="font-family: var(--font-serif); font-size: var(--text-2xl); margin-bottom: var(--space-4); margin-top: var(--space-8);">Notable Quotes</h2>
            <div style="display: flex; flex-direction: column; gap: var(--space-4);">
              ${tutor.quotes.map(q => `
                <blockquote style="border-left: 3px solid ${dept.accent}; padding: var(--space-3) var(--space-5); font-family: var(--font-serif); font-style: italic; color: var(--text-secondary); font-size: var(--text-sm); line-height: var(--leading-relaxed);">
                  "${q}"
                </blockquote>
              `).join('')}
            </div>
          </div>

          <div>
            <h2 style="font-family: var(--font-serif); font-size: var(--text-2xl); margin-bottom: var(--space-4);">Ask ${tutor.name}</h2>
            <div style="background: var(--bg-cream); border-radius: var(--radius-xl); overflow: hidden; height: 500px; display: flex; flex-direction: column; border: 1px solid var(--border-light);" id="tutor-chat-container"></div>
          </div>
        </div>
      </div>
    </section>
  `;

  container.appendChild(main);
  container.appendChild(renderFooter());

  const chatContainer = container.querySelector('#tutor-chat-container');
  renderTutorChat(chatContainer, tutor);
}
