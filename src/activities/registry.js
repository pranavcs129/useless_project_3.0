// ============================================
// BUGLEARN — Activity Registry
// ============================================
// To add a new activity:
// 1. Create src/activities/myActivity.js exporting render(container, dept)
// 2. Register it here: registerActivity('slug', () => import('./myActivity.js'))

const registry = {};

/**
 * Register an activity by slug.
 * @param {string} slug - Department slug or activity slug
 * @param {Function} loader - Async function returning the activity module
 */
export function registerActivity(slug, loader) {
  registry[slug] = loader;
}

/**
 * Get and load an activity module by slug.
 * @param {string} slug
 * @returns {Promise<{render: Function}|null>}
 */
export async function getActivity(slug) {
  const loader = registry[slug];
  if (!loader) return null;
  try {
    return await loader();
  } catch (e) {
    console.warn(`BUGLEARN: Failed to load activity for "${slug}"`, e);
    return null;
  }
}

/**
 * Check if an activity exists for a slug.
 * @param {string} slug
 * @returns {boolean}
 */
export function hasActivity(slug) {
  return slug in registry;
}

// ---- Register built-in activities ----
registerActivity('ant', () => import('./maze.js'));
registerActivity('maze', () => import('./maze.js'));
registerActivity('spider', () => import('./webBuilder.js'));
registerActivity('web-builder', () => import('./webBuilder.js'));
registerActivity('bee', async () => {
  const mod = await import('./deptSimulation.js');
  return mod.beeActivity;
});
registerActivity('cockroach', async () => {
  const mod = await import('./deptSimulation.js');
  return mod.cockroachActivity;
});
registerActivity('mosquito', async () => {
  const mod = await import('./deptSimulation.js');
  return mod.mosquitoActivity;
});
