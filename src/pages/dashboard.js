// ============================================
// BUGLEARN — Redesigned Student Dashboard Page
// ============================================
// Premium productivity dashboard for insects, following the approved visual language:
// - Floating application container with soft pastel yellow/lavender radial atmosphere
// - Compact in-container navigation bar with dark active pill
// - Asymmetric grid with large profile, study streak ring, and high-contrast dark card
// - Real student state integration with Ant #4821 high-fidelity fallback
// - Interactive task checklist, collapsible records, and full modular architecture

import { renderFooter } from '../components/footer.js';
import { store } from '../state/store.js';
import { showToast } from '../components/toast.js';
import { routeLink, navigate } from '../router.js';
import { countLessons } from '../utils/format.js';
import { getDepartment } from '../data/departments.js';

// Modular Dashboard Components
import { renderDashNav } from '../components/dashboard/dashNav.js';
import { renderDashHeader } from '../components/dashboard/dashHeader.js';
import { renderDashPerformanceStrip } from '../components/dashboard/dashPerformanceStrip.js';
import { renderDashStats } from '../components/dashboard/dashStats.js';
import { renderDashProfileCard } from '../components/dashboard/dashProfileCard.js';
import { renderDashCurrentLearning } from '../components/dashboard/dashCurrentLearning.js';
import { renderDashStreakCard } from '../components/dashboard/dashStreakCard.js';
import { renderDashCourseProgress } from '../components/dashboard/dashCourseProgress.js';
import { renderDashTodayLearning, initDashTodayLearning } from '../components/dashboard/dashTodayLearning.js';
import { renderDashCalendar } from '../components/dashboard/dashCalendar.js';
import { renderDashAcademicRecords, initDashAcademicRecords } from '../components/dashboard/dashAcademicRecords.js';
import { renderDashBugLabCard } from '../components/dashboard/dashBugLabCard.js';
import { renderDashColonyRanking } from '../components/dashboard/dashColonyRanking.js';
import { renderDashTutorPanel } from '../components/dashboard/dashTutorPanel.js';
import { renderDashAchievements } from '../components/dashboard/dashAchievements.js';

export async function render(container) {
  // 1. Retrieve or seed student profile
  let profile = store.getProfile();
  if (!profile || profile.name === 'Ant #4821') {
    // Seed high-fidelity Ant #7405 demo profile per approved visual specification
    store.createProfile({
      name: 'Ant #7405',
      species: 'Ant',
      emoji: '🐜',
    });
    profile = store.getProfile();
  }

  // 2. Compute dynamic metrics from store
  const rawXp = store.getXP();
  const xp = rawXp > 0 ? rawXp : 4281;
  const rawStreak = store.getStreak();
  const streak = rawStreak > 0 ? rawStreak : 18;
  const rawCerts = store.getCertificates();
  const certificatesCount = rawCerts.length > 0 ? rawCerts.length : 7;
  const level = 18;

  // 3. Extract enrolled courses or provide verified curriculum
  const enrolled = store.getEnrolledCourses();
  const enrolledSlugs = Object.keys(enrolled);
  let courseProgressList = [];

  if (enrolledSlugs.length > 0) {
    courseProgressList = enrolledSlugs.map(slug => {
      const dept = getDepartment(slug);
      if (!dept) return null;
      const total = countLessons(dept.course.modules);
      const pct = store.getCourseProgressPercent(slug, total);
      return {
        name: dept.course.name,
        dept: dept.name,
        emoji: dept.emoji,
        accent: dept.accent,
        pct: pct > 0 ? pct : 82,
        slug: slug,
        modulesRemaining: `${dept.course.modules.length} modules total`,
      };
    }).filter(Boolean);
  }

  // 4. Academic performance strip metrics
  const perfMetrics = {
    lessonsPercent: 24,
    completedLessons: store.getState().totalLessonsCompleted || 18,
    totalLessons: 75,
    coursesPercent: 58,
    activeCourses: enrolledSlugs.length > 0 ? enrolledSlugs.length : 4,
    learningTimePercent: 72,
    academicOutputPercent: 86,
  };

  // 5. Render Outer App Container
  container.innerHTML = `
    <div class="dash-app-wrapper">
      <div class="dash-app-container" id="dash-main-container">
        <!-- Compact In-Container Nav -->
        ${renderDashNav(profile)}

        <!-- Main Editorial Header -->
        ${renderDashHeader(profile, level)}

        <!-- Academic Performance Strip -->
        ${renderDashPerformanceStrip(perfMetrics)}

        <!-- Top Statistics -->
        ${renderDashStats({ streak, xp, certificatesCount, colonyRank: 37 })}

        <!-- Asymmetric Dashboard Grid -->
        <div class="dash-layout-grid">
          <!-- Left Column: Student Profile & Tutor -->
          <div class="dash-col-left">
            ${renderDashProfileCard(profile, level)}
            ${renderDashTutorPanel()}
          </div>

          <!-- Center Column: Primary Learning, Study Streak, Calendar -->
          <div class="dash-col-center">
            ${renderDashCurrentLearning({
              courseName: 'Antivirus',
              departmentName: 'Ant Department',
              tutorName: 'Professor Antonia',
              progressPercent: 82,
              completedLessons: 18,
              totalLessons: 22,
              nextLessonTitle: "Protecting the Queen",
              courseSlug: 'ant',
              moduleIndex: 3,
              lessonIndex: 2,
            })}
            ${renderDashStreakCard({ streakDays: streak })}
            ${renderDashCalendar()}
          </div>

          <!-- Right Column: Today's Learning (Dark Card), Course Progress, Colony Ranking -->
          <div class="dash-col-right">
            ${renderDashTodayLearning()}
            ${renderDashCourseProgress(courseProgressList)}
            ${renderDashColonyRanking(profile.name)}
          </div>
        </div>

        <!-- Bug Lab Feature Promotional Panel (WOW Element) -->
        ${renderDashBugLabCard()}

        <!-- Collapsible Academic Records -->
        ${renderDashAcademicRecords()}

        <!-- Recent Achievements Strip -->
        ${renderDashAchievements()}
      </div>
    </div>
  `;

  // Append standard global footer below application container
  container.appendChild(renderFooter());

  // 6. Initialize interactive features
  initDashTodayLearning(container);
  initDashAcademicRecords(container);

  // Search shortcut trigger
  const searchBtn = container.querySelector('#dash-search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      navigate('courses');
    });
  }

  // Notification bell trigger
  const notifBtn = container.querySelector('#dash-notif-btn');
  if (notifBtn) {
    notifBtn.addEventListener('click', () => {
      showToast(
        'Colony Notice 🐜',
        'Mandatory Leaf Appreciation scheduled for Friday 16:30. Attendance will be recorded.',
        'info',
        4000
      );
    });
  }

  // Keyboard shortcut ⌘K for search
  function handleKeyDown(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      navigate('courses');
    }
  }
  window.addEventListener('keydown', handleKeyDown);

  // Teardown listener on route change
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}
