// ============================================
// BUGLEARN — Main Entry Point
// ============================================

import './styles/global.css';
import './styles/components.css';
import './styles/pages.css';
import './styles/dashboard.css';

import { addRoute, initRouter } from './router.js';

// ---- Route Registration ----
// Each route maps to a page module's render function.
// Adding a new page = adding one route + one page file.

addRoute('', async (container) => {
  const { render } = await import('./pages/home.js');
  return render(container);
});

addRoute('departments-section', async (container) => {
  const { render } = await import('./pages/home.js');
  const cleanup = await render(container);
  requestAnimationFrame(() => {
    setTimeout(() => {
      const el = document.getElementById('departments-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  });
  return cleanup;
});

addRoute('departments', async (container) => {
  const { render } = await import('./pages/departments.js');
  return render(container);
});

addRoute('department/:slug', async (container, params) => {
  const { render } = await import('./pages/departmentDetail.js');
  return render(container, params);
});

addRoute('courses', async (container) => {
  const { render } = await import('./pages/courses.js');
  return render(container);
});

addRoute('course/:slug', async (container, params) => {
  // Redirect to department detail (course and department are the same in V1)
  const { render } = await import('./pages/departmentDetail.js');
  return render(container, params);
});

addRoute('lesson/:slug/:mod/:les', async (container, params) => {
  const { render } = await import('./pages/lesson.js');
  return render(container, params);
});

addRoute('tutors', async (container) => {
  const { render } = await import('./pages/tutors.js');
  return render(container);
});

addRoute('tutor/:slug', async (container, params) => {
  const { render } = await import('./pages/tutorDetail.js');
  return render(container, params);
});

addRoute('buglab', async (container) => {
  const { render } = await import('./pages/buglab.js');
  return render(container);
});

addRoute('community', async (container) => {
  const { render } = await import('./pages/community.js');
  return render(container);
});

addRoute('leaderboard', async (container) => {
  const { render } = await import('./pages/leaderboard.js');
  return render(container);
});

addRoute('dashboard', async (container) => {
  const { render } = await import('./pages/dashboard.js');
  return render(container);
});

addRoute('profile', async (container) => {
  const { render } = await import('./pages/profile.js');
  return render(container);
});

addRoute('certificate/:slug', async (container, params) => {
  const { render } = await import('./pages/certificate.js');
  return render(container, params);
});

addRoute('campus', async (container) => {
  const { render } = await import('./pages/campus.js');
  return render(container);
});

addRoute('onboarding', async (container) => {
  const { render } = await import('./pages/onboarding.js');
  return render(container);
});

addRoute('404', async (container) => {
  const { render } = await import('./pages/notfound.js');
  return render(container);
});

// ---- Initialize ----
const app = document.getElementById('app');
initRouter(app);

// ---- Loading Messages (Easter Egg) ----
const loadingMessages = [
  'Convincing the ants to organize your curriculum...',
  'Untangling the spider\'s web server...',
  'Asking the bees for directions...',
  'Waiting for the cockroach to finish its survival drill...',
  'Calibrating the mosquito\'s stealth sensors...',
  'Helping the butterfly through metamorphosis...',
  'Consulting Chef Fly about today\'s menu...',
  'Rolling the dice with Dr. Lucky...',
];

// Log a random loading message
console.log(
  `%c🐛 BUGLEARN %c${loadingMessages[Math.floor(Math.random() * loadingMessages.length)]}`,
  'font-weight: bold; font-size: 14px; color: #4A7C59;',
  'font-size: 12px; color: #8A8A8A; font-style: italic;'
);
console.log(
  '%c🍃 Knowledge has no species limit.',
  'font-family: serif; font-size: 12px; color: #4A7C59; font-style: italic;'
);
