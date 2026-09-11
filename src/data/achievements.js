// ============================================
// BUGLEARN — Achievement Definitions
// ============================================
// To add a new achievement:
// 1. Add a new object to this array
// 2. The achievement engine will check conditions on every state change

export const ACHIEVEMENTS = [
  {
    id: 'first-crawl',
    name: 'First Crawl',
    icon: '🐛',
    description: 'Complete your first lesson.',
    xp: 50,
    condition: (state) => state.totalLessonsCompleted >= 1,
  },
  {
    id: 'perfect-score',
    name: 'Perfect Score',
    icon: '💯',
    description: 'Score 100% on any quiz.',
    xp: 100,
    condition: (state) => state.perfectQuizzes >= 1,
  },
  {
    id: 'dedicated-bug',
    name: 'Dedicated Bug',
    icon: '🔥',
    description: 'Maintain a 7-day learning streak.',
    xp: 150,
    condition: (state) => state.streak >= 7,
  },
  {
    id: 'master-learner',
    name: 'Master Learner',
    icon: '🎓',
    description: 'Complete 20 lessons.',
    xp: 200,
    condition: (state) => state.totalLessonsCompleted >= 20,
  },
  {
    id: 'department-graduate',
    name: 'Department Graduate',
    icon: '🏆',
    description: 'Complete an entire course.',
    xp: 500,
    condition: (state) => state.completedCourses >= 1,
  },
  {
    id: 'night-owl',
    name: 'Night Owl',
    icon: '🦉',
    description: 'Study after midnight.',
    xp: 75,
    condition: (state) => state.nightStudySessions >= 1,
  },
  {
    id: 'quiz-master',
    name: 'Quiz Master',
    icon: '🧠',
    description: 'Complete 10 quizzes.',
    xp: 200,
    condition: (state) => state.totalQuizzes >= 10,
  },
  {
    id: 'social-butterfly',
    name: 'Social Butterfly',
    icon: '🦋',
    description: 'Post on BugBoard for the first time.',
    xp: 50,
    condition: (state) => state.communityPosts >= 1,
  },
  {
    id: 'explorer',
    name: 'Explorer',
    icon: '🗺️',
    description: 'Visit all 8 departments.',
    xp: 100,
    condition: (state) => state.departmentsVisited >= 8,
  },
  {
    id: 'multi-talented',
    name: 'Multi-Talented',
    icon: '⭐',
    description: 'Enrol in 3 different courses.',
    xp: 150,
    condition: (state) => state.enrolledCourses >= 3,
  },
];
