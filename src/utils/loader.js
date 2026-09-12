// ============================================
// BUGLEARN — Initial Application Loader & Preloader
// ============================================
// Orchestrates brand-aligned initial loading:
// 1. Immediate visual identity (warm ivory, centered WebM logo, serif title, "Preparing the colony...")
// 2. Preloads critical fonts, hero canvas buffer (Frames 1-10), and above-the-fold assets
// 3. Smooth progress line micro-animation
// 4. Guaranteed failsafe timeout (never locks the user out)
// 5. Accessible prefers-reduced-motion support
// 6. Smooth 550ms reveal transition once layout & hero are ready

import { preloadHeroBuffer } from '../components/heroAnimation.js';

const FAILSAFE_TIMEOUT_MS = 3500;
const MIN_DISPLAY_TIME_MS = 800;

/**
 * Preload an image URL into browser cache.
 */
function preloadImage(url) {
  return new Promise((resolve) => {
    const img = new Image();
    img.decoding = 'async';
    img.src = url;
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
  });
}

/**
 * Initialize and execute the initial loading screen lifecycle.
 */
export async function initAppLoader() {
  const loaderEl = document.getElementById('app-loader');
  if (!loaderEl) return;

  const progressBar = document.getElementById('app-loader-bar');
  const loaderVideo = loaderEl.querySelector('.app-loader__logo');
  const startTime = performance.now();

  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Attempt video playback immediately
  if (loaderVideo) {
    if (isReducedMotion) {
      loaderVideo.removeAttribute('autoplay');
      loaderVideo.pause();
    } else {
      loaderVideo.play().catch(() => {});
    }
  }

  let currentProgress = 0;
  function updateProgress(percent) {
    if (percent > currentProgress) {
      currentProgress = Math.min(percent, 100);
      if (progressBar) {
        progressBar.style.width = `${currentProgress}%`;
      }
    }
  }

  // Initial step
  updateProgress(15);

  // Critical images to preload for homepage
  const criticalImages = [
    '/bugs/background.png',
    '/bugs/ant.png',
    '/bugs/spider.png',
    '/bugs/cockroach.png',
    '/bugs/bee.png',
  ];

  // Preloading Tasks
  const fontsPromise = (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => {
    updateProgress(35);
  });

  const heroPromise = preloadHeroBuffer(10, (done, total) => {
    const heroShare = 35 + Math.round((done / total) * 35);
    updateProgress(heroShare);
  }).catch(() => {});

  const videoPromise = new Promise((resolve) => {
    if (!loaderVideo || isReducedMotion) return resolve(true);
    if (loaderVideo.readyState >= 2) return resolve(true);
    const onReady = () => {
      loaderVideo.removeEventListener('loadeddata', onReady);
      loaderVideo.removeEventListener('canplay', onReady);
      resolve(true);
    };
    loaderVideo.addEventListener('loadeddata', onReady);
    loaderVideo.addEventListener('canplay', onReady);
    setTimeout(onReady, 1200);
  });

  const assetsPromise = Promise.all([
    ...criticalImages.map(preloadImage),
    videoPromise,
  ]).then(() => {
    updateProgress(90);
  });

  // Wait for all critical assets with failsafe timeout
  const allCriticalPromise = Promise.all([fontsPromise, heroPromise, assetsPromise]);

  const timeoutPromise = new Promise((resolve) => {
    setTimeout(resolve, FAILSAFE_TIMEOUT_MS);
  });

  await Promise.race([allCriticalPromise, timeoutPromise]);

  // Complete progress
  updateProgress(100);

  // Ensure minimum display time so the loading experience is calm and legible
  const elapsed = performance.now() - startTime;
  if (elapsed < MIN_DISPLAY_TIME_MS && !isReducedMotion) {
    await new Promise((r) => setTimeout(r, MIN_DISPLAY_TIME_MS - elapsed));
  } else if (!isReducedMotion) {
    // Brief settle time for the full 100% progress bar
    await new Promise((r) => setTimeout(r, 200));
  }

  // Wait 1 frame for browser layout of the underlying page
  await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

  // Smooth Reveal Animation (400-700ms, target 550ms)
  if (isReducedMotion) {
    loaderEl.style.display = 'none';
    const video = loaderEl.querySelector('video');
    if (video) video.pause();
  } else {
    loaderEl.classList.add('is-hidden');

    // After fade completes, teardown loader video to free memory
    setTimeout(() => {
      loaderEl.style.display = 'none';
      const video = loaderEl.querySelector('video');
      if (video) video.pause();
    }, 600);
  }
}
