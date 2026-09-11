// ============================================
// BUGLEARN — Hash Router
// ============================================
// Adding a new route:
// 1. Import your page module
// 2. Add an entry to the routes array
// 3. Done.

const routes = [];
let currentCleanup = null;
let appContainer = null;

/**
 * Register a route.
 * @param {string} path - Route pattern (e.g., 'department/:slug')
 * @param {Function} renderFn - async function(container, params) that renders the page
 */
export function addRoute(path, renderFn) {
  routes.push({ path, renderFn, regex: pathToRegex(path) });
}

/**
 * Convert a path pattern to a regex.
 */
function pathToRegex(path) {
  const pattern = path
    .replace(/:([a-zA-Z0-9_]+)/g, '(?<$1>[^/]+)')
    .replace(/\//g, '\\/');
  return new RegExp(`^${pattern}$`);
}

/**
 * Extract params from a path using a route's regex.
 */
function extractParams(regex, hash) {
  const match = hash.match(regex);
  return match ? match.groups || {} : {};
}

/**
 * Navigate to a hash route.
 * @param {string} path - The path to navigate to (without #/)
 */
export function navigate(path) {
  window.location.hash = `#/${path}`;
}

/**
 * Get the current route path (without #/).
 */
function getCurrentPath() {
  const rawHash = window.location.hash || '';
  return rawHash.replace(/^#\/?/, '');
}

let currentPath = null;

/**
 * Find matching route and render.
 */
async function handleRoute() {
  const path = getCurrentPath();

  // If path has not changed, do not re-render the page
  if (currentPath === path) {
    return;
  }

  // Handle anchor scrolling on the current page if element exists
  if (path) {
    const anchorEl = document.getElementById(path);
    if (anchorEl) {
      currentPath = path;
      anchorEl.scrollIntoView({ behavior: 'smooth' });
      return;
    }
  }

  currentPath = path;

  // Clean up previous page
  if (currentCleanup && typeof currentCleanup === 'function') {
    currentCleanup();
    currentCleanup = null;
  }

  // Find matching route
  let matchedRoute = null;
  let params = {};

  for (const route of routes) {
    if (route.regex.test(path)) {
      matchedRoute = route;
      params = extractParams(route.regex, path);
      break;
    }
  }

  if (!matchedRoute) {
    // Try the 404 route
    matchedRoute = routes.find(r => r.path === '404');
    params = {};
  }

  if (!matchedRoute) {
    appContainer.innerHTML = '<div class="not-found"><h1>Page not found</h1></div>';
    return;
  }

  // Add page transition wrapper
  const pageWrapper = document.createElement('div');
  pageWrapper.className = 'page-enter';
  appContainer.innerHTML = '';
  appContainer.appendChild(pageWrapper);

  // Render the page
  try {
    const cleanup = await matchedRoute.renderFn(pageWrapper, params);
    if (typeof cleanup === 'function') {
      currentCleanup = cleanup;
    }
  } catch (error) {
    console.error('BUGLEARN: Page render error:', error);
    pageWrapper.innerHTML = `
      <div class="not-found">
        <div class="not-found__emoji">🪲</div>
        <h1 class="not-found__title">Something went wrong</h1>
        <p class="not-found__subtitle">Even bugs have bugs sometimes.</p>
        <a href="#/" class="btn btn--primary">Go Home</a>
      </div>
    `;
  }

  // Scroll to top only on new full page navigations (not anchors)
  if (!path || !path.includes('section')) {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}

/**
 * Initialize the router.
 * @param {HTMLElement} container - The app container element
 */
export function initRouter(container) {
  appContainer = container;

  window.addEventListener('hashchange', handleRoute);

  // Handle initial route without duplicate invocation
  if (!window.location.hash || window.location.hash === '#') {
    window.location.hash = '#/';
  } else {
    handleRoute();
  }
}

/**
 * Helper to create clickable links that use the router.
 * @param {string} path - Route path
 * @returns {string} - The href value
 */
export function routeLink(path) {
  return `#/${path}`;
}
