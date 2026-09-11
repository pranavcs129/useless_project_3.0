// ============================================
// BUGLEARN — Toast Notification Component
// ============================================

let toastContainer = null;

function ensureContainer() {
  if (!toastContainer) {
    toastContainer = document.getElementById('toast-root');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toast-root';
      document.body.appendChild(toastContainer);
    }
    toastContainer.className = 'toast-container';
  }
  return toastContainer;
}

/**
 * Show a toast notification.
 * @param {string} title
 * @param {string} message
 * @param {string} type - 'default', 'xp', 'achievement', 'error'
 * @param {number} duration - ms before auto-dismiss
 */
export function showToast(title, message, type = 'default', duration = 4000) {
  const container = ensureContainer();

  const icons = {
    default: '🔔',
    xp: '⚡',
    achievement: '🏆',
    error: '⚠️',
    success: '✅',
  };

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <div class="toast__icon">${icons[type] || icons.default}</div>
    <div class="toast__content">
      <div class="toast__title">${title}</div>
      <div class="toast__message">${message}</div>
    </div>
  `;

  container.appendChild(toast);

  // Auto dismiss
  setTimeout(() => {
    toast.style.animation = 'fadeIn var(--duration-normal) var(--ease-out) reverse forwards';
    setTimeout(() => toast.remove(), 300);
  }, duration);

  // Click to dismiss
  toast.addEventListener('click', () => {
    toast.style.animation = 'fadeIn var(--duration-fast) var(--ease-out) reverse forwards';
    setTimeout(() => toast.remove(), 200);
  });
}
