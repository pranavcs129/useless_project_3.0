// ============================================
// BUGLEARN — Student State Store
// ============================================
// Single source of truth for all student state.
// Components read/write through this API only.
// State is persisted to localStorage on every write.

import { ACHIEVEMENTS } from '../data/achievements.js';

const STORAGE_KEY = 'buglearn_state';
const listeners = new Set();

// Default state for a new student
function defaultState() {
  return {
    profile: null, // { name, species, emoji, createdAt }
    enrolledCourses: {}, // { [slug]: { enrolledAt, progress: { [modIdx-lesIdx]: true } } }
    xp: 0,
    level: 1,
    streak: 0,
    lastStudyDate: null,
    achievements: [], // array of achievement IDs
    certificates: [], // array of { courseSlug, grade, date }
    quizScores: {}, // { [slug-modIdx]: { score, total, perfect } }
    communityPosts: 0,
    departmentsVisited: new Set(),
    nightStudySessions: 0,

    // Computed counters (maintained for achievement checks)
    totalLessonsCompleted: 0,
    perfectQuizzes: 0,
    totalQuizzes: 0,
    completedCourses: 0,
  };
}

// Hydrate state from localStorage
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    // Restore Set from array
    parsed.departmentsVisited = new Set(parsed.departmentsVisited || []);
    return { ...defaultState(), ...parsed };
  } catch {
    return defaultState();
  }
}

// Persist state to localStorage
function saveState() {
  try {
    const serializable = {
      ...state,
      departmentsVisited: Array.from(state.departmentsVisited),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(serializable));
  } catch (e) {
    console.warn('BUGLEARN: Failed to save state', e);
  }
}

// Notify subscribers
function notify() {
  saveState();
  listeners.forEach(fn => {
    try { fn(state); } catch (e) { console.error('Listener error:', e); }
  });
}

// Check and unlock achievements
function checkAchievements() {
  const newUnlocks = [];
  const achievementState = {
    totalLessonsCompleted: state.totalLessonsCompleted,
    perfectQuizzes: state.perfectQuizzes,
    streak: state.streak,
    completedCourses: state.completedCourses,
    totalQuizzes: state.totalQuizzes,
    communityPosts: state.communityPosts,
    departmentsVisited: state.departmentsVisited.size,
    enrolledCourses: Object.keys(state.enrolledCourses).length,
    nightStudySessions: state.nightStudySessions,
  };

  for (const achievement of ACHIEVEMENTS) {
    if (!state.achievements.includes(achievement.id) && achievement.condition(achievementState)) {
      state.achievements.push(achievement.id);
      state.xp += achievement.xp;
      newUnlocks.push(achievement);
    }
  }

  return newUnlocks;
}

// Update streak
function updateStreak() {
  const today = new Date().toDateString();
  if (state.lastStudyDate === today) return;

  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (state.lastStudyDate === yesterday) {
    state.streak += 1;
  } else if (state.lastStudyDate !== today) {
    state.streak = 1;
  }
  state.lastStudyDate = today;

  // Night owl check
  const hour = new Date().getHours();
  if (hour >= 0 && hour < 5) {
    state.nightStudySessions += 1;
  }
}

// ---- Initialize ----
let state = loadState();

// ---- Public API ----
export const store = {
  // ---- Reads ----
  getState() {
    return { ...state };
  },

  getProfile() {
    return state.profile;
  },

  isOnboarded() {
    return state.profile !== null;
  },

  getXP() {
    return state.xp;
  },

  getLevel() {
    return state.level;
  },

  getStreak() {
    return state.streak;
  },

  getAchievements() {
    return [...state.achievements];
  },

  getCertificates() {
    return [...state.certificates];
  },

  getEnrolledCourses() {
    return { ...state.enrolledCourses };
  },

  isEnrolled(courseSlug) {
    return courseSlug in state.enrolledCourses;
  },

  getCourseProgress(courseSlug) {
    const enrollment = state.enrolledCourses[courseSlug];
    if (!enrollment) return 0;
    const completedCount = Object.keys(enrollment.progress).length;
    return completedCount;
  },

  getCourseProgressPercent(courseSlug, totalLessons) {
    const completed = this.getCourseProgress(courseSlug);
    if (totalLessons === 0) return 0;
    return Math.round((completed / totalLessons) * 100);
  },

  isLessonCompleted(courseSlug, moduleIndex, lessonIndex) {
    const enrollment = state.enrolledCourses[courseSlug];
    if (!enrollment) return false;
    return !!enrollment.progress[`${moduleIndex}-${lessonIndex}`];
  },

  getQuizScore(courseSlug, moduleIndex) {
    return state.quizScores[`${courseSlug}-${moduleIndex}`] || null;
  },

  hasCertificate(courseSlug) {
    return state.certificates.some(c => c.courseSlug === courseSlug);
  },

  // ---- Writes (all return { newAchievements } for toast notifications) ----
  createProfile({ name, species, emoji }) {
    state.profile = {
      name,
      species,
      emoji,
      createdAt: new Date().toISOString(),
    };
    const newAchievements = checkAchievements();
    notify();
    return { newAchievements };
  },

  enrollInCourse(slug) {
    if (state.enrolledCourses[slug]) return { newAchievements: [] };
    state.enrolledCourses[slug] = {
      enrolledAt: new Date().toISOString(),
      progress: {},
    };
    const newAchievements = checkAchievements();
    notify();
    return { newAchievements };
  },

  completeLesson(courseSlug, moduleIndex, lessonIndex) {
    if (!state.enrolledCourses[courseSlug]) {
      this.enrollInCourse(courseSlug);
    }
    const key = `${moduleIndex}-${lessonIndex}`;
    if (!state.enrolledCourses[courseSlug].progress[key]) {
      state.enrolledCourses[courseSlug].progress[key] = true;
      state.totalLessonsCompleted += 1;
      state.xp += 25;
      updateStreak();
    }
    const newAchievements = checkAchievements();
    notify();
    return { newAchievements };
  },

  submitQuizScore(courseSlug, moduleIndex, score, total) {
    const key = `${courseSlug}-${moduleIndex}`;
    const perfect = score === total;
    state.quizScores[key] = { score, total, perfect };
    state.totalQuizzes += 1;
    if (perfect) state.perfectQuizzes += 1;

    // XP based on score
    const xpEarned = Math.round((score / total) * 50);
    state.xp += xpEarned;
    updateStreak();

    const newAchievements = checkAchievements();
    notify();
    return { newAchievements, xpEarned };
  },

  awardXP(amount) {
    state.xp += amount;
    // Level up check (every 500 XP)
    const newLevel = Math.floor(state.xp / 500) + 1;
    const leveledUp = newLevel > state.level;
    state.level = newLevel;
    const newAchievements = checkAchievements();
    notify();
    return { newAchievements, leveledUp, newLevel };
  },

  visitDepartment(slug) {
    state.departmentsVisited.add(slug);
    const newAchievements = checkAchievements();
    notify();
    return { newAchievements };
  },

  earnCertificate(courseSlug, grade) {
    if (state.certificates.some(c => c.courseSlug === courseSlug)) {
      return { newAchievements: [] };
    }
    state.certificates.push({
      courseSlug,
      grade,
      date: new Date().toISOString(),
    });
    state.completedCourses += 1;
    state.xp += 250;
    const newAchievements = checkAchievements();
    notify();
    return { newAchievements };
  },

  incrementCommunityPosts() {
    state.communityPosts += 1;
    const newAchievements = checkAchievements();
    notify();
    return { newAchievements };
  },

  // ---- Event System ----
  onChange(callback) {
    listeners.add(callback);
    return () => listeners.delete(callback);
  },

  // ---- Reset (for testing) ----
  reset() {
    state = defaultState();
    notify();
  },
};
