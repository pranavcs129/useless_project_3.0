// ============================================
// BUGLEARN — Profile Page
// ============================================

import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';
import { renderProgressBar } from '../components/progressBar.js';
import { renderAchievementGrid } from '../components/achievementBadge.js';
import { store } from '../state/store.js';
import { DEPARTMENTS, getDepartment } from '../data/departments.js';
import { routeLink, navigate } from '../router.js';
import { formatNumber, countLessons } from '../utils/format.js';
import { xpToLevel, levelTitle } from '../utils/xp.js';

export async function render(container) {
  const profile = store.getProfile();
  if (!profile) { navigate('onboarding'); return; }

  const xp = store.getXP();
  const level = xpToLevel(xp);
  const streak = store.getStreak();
  const achievements = store.getAchievements();
  const certificates = store.getCertificates();
  const enrolled = store.getEnrolledCourses();

  // Calculate skills based on enrolled courses and progress
  const skills = {
    'Navigation': calculateSkill(['ant', 'mosquito']),
    'Teamwork': calculateSkill(['ant', 'bee']),
    'Food Finding': calculateSkill(['fly', 'cockroach']),
    'Human Avoidance': calculateSkill(['cockroach', 'mosquito']),
    'Creativity': calculateSkill(['spider', 'butterfly']),
    'Probability': calculateSkill(['ladybug']),
  };

  container.innerHTML = '';
  container.appendChild(renderNavbar());

  const main = document.createElement('main');
  main.innerHTML = `
    <section style="padding: var(--space-32) 0 var(--space-16);">
      <div class="container" style="max-width: var(--container-lg);">
        <!-- Profile Header -->
          <div class="avatar avatar--xl" style="width: 100px; height: 100px; overflow: hidden; border-radius: 50%; border: 3px solid var(--accent-forest); display: flex; align-items: center; justify-content: center; background: var(--bg-cream);">
            <img src="/images/ant-student.jpg" alt="${profile.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.outerHTML='<span style=\\'font-size: 3.5rem;\\'>${profile.emoji}</span>'" />
          </div>
          <div class="profile-header__info">
            <div class="profile-header__name">${profile.name}</div>
            <div class="profile-header__subtitle">Level ${level} · ${levelTitle(level)} · ${profile.species}</div>
          </div>
          <div class="profile-header__stats">
            <div class="stat">
              <div class="stat__value">${formatNumber(xp)}</div>
              <div class="stat__label">XP</div>
            </div>
            <div class="stat">
              <div class="stat__value">${certificates.length}</div>
              <div class="stat__label">Certificates</div>
            </div>
            <div class="stat">
              <div class="stat__value">${streak}</div>
              <div class="stat__label">Day Streak</div>
            </div>
          </div>
        </div>

        <div class="grid grid-2" style="gap: var(--space-8);">
          <!-- Skills -->
          <div class="dashboard__card">
            <div class="dashboard__card-title">Skills</div>
            <div style="display: flex; flex-direction: column; gap: var(--space-4);">
              ${Object.entries(skills).map(([name, value]) => `
                <div>
                  <div style="display: flex; justify-content: space-between; font-size: var(--text-sm); margin-bottom: 4px;">
                    <span>${name}</span>
                    <span style="font-weight: var(--weight-semibold);">${value}%</span>
                  </div>
                  ${renderProgressBar(value, '', 'sm')}
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Stats Summary -->
          <div>
            <div class="dashboard__card" style="margin-bottom: var(--space-6);">
              <div class="dashboard__card-title">Learning Summary</div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4);">
                <div>
                  <div style="font-size: var(--text-xs); color: var(--text-tertiary);">Courses Enrolled</div>
                  <div style="font-family: var(--font-serif); font-size: var(--text-2xl); font-weight: bold;">${Object.keys(enrolled).length}</div>
                </div>
                <div>
                  <div style="font-size: var(--text-xs); color: var(--text-tertiary);">Certificates</div>
                  <div style="font-family: var(--font-serif); font-size: var(--text-2xl); font-weight: bold;">${certificates.length}</div>
                </div>
                <div>
                  <div style="font-size: var(--text-xs); color: var(--text-tertiary);">Achievements</div>
                  <div style="font-family: var(--font-serif); font-size: var(--text-2xl); font-weight: bold;">${achievements.length}</div>
                </div>
                <div>
                  <div style="font-size: var(--text-xs); color: var(--text-tertiary);">Learning Streak</div>
                  <div style="font-family: var(--font-serif); font-size: var(--text-2xl); font-weight: bold;">${streak} days</div>
                </div>
              </div>
            </div>

            <!-- Certificates List -->
            ${certificates.length > 0 ? `
              <div class="dashboard__card">
                <div class="dashboard__card-title">Certificates</div>
                ${certificates.map(cert => {
                  const dept = getDepartment(cert.courseSlug);
                  return dept ? `
                    <a href="${routeLink('certificate/' + cert.courseSlug)}" style="display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3) 0; border-bottom: 1px solid var(--border-light); text-decoration: none; color: inherit;">
                      <span>📜</span>
                      <div style="flex: 1;">
                        <div style="font-size: var(--text-sm); font-weight: var(--weight-semibold);">${dept.course.name}</div>
                        <div style="font-size: var(--text-xs); color: var(--text-tertiary);">Grade: ${cert.grade}</div>
                      </div>
                      <span style="color: var(--accent-forest);">→</span>
                    </a>
                  ` : '';
                }).join('')}
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Achievements -->
        <div class="dashboard__card" style="margin-top: var(--space-8);">
          <div class="dashboard__card-title">Achievements (${achievements.length}/10)</div>
          ${renderAchievementGrid(achievements)}
        </div>
      </div>
    </section>
  `;

  container.appendChild(main);
  container.appendChild(renderFooter());
}

function calculateSkill(relatedDepts) {
  const base = 20; // Everyone starts with some skill
  let bonus = 0;
  relatedDepts.forEach(slug => {
    const dept = getDepartment(slug);
    if (!dept) return;
    const totalLessons = countLessons(dept.course.modules);
    const progress = store.getCourseProgressPercent(slug, totalLessons);
    bonus += progress * (80 / relatedDepts.length / 100);
  });
  return Math.min(Math.round(base + bonus), 100);
}
