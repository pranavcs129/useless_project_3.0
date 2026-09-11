// ============================================
// BUGLEARN — Home Page
// ============================================

import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';
import { renderDepartmentCard } from '../components/departmentCard.js';
import { renderStatsBar, initStatsAnimations } from '../components/statsBar.js';
import { DEPARTMENTS } from '../data/departments.js';
import { routeLink } from '../router.js';
import { initScrollAnimations } from '../utils/animate.js';
import { initHeroAnimation } from '../components/heroAnimation.js';

export async function render(container) {
  container.innerHTML = '';
  container.appendChild(renderNavbar());

  const main = document.createElement('main');
  main.innerHTML = `
    <!-- Hero Section -->
    <section class="hero" id="hero-section">
      <div class="hero__bg">
        <canvas id="hero-canvas" class="hero__canvas" aria-hidden="true"></canvas>
      </div>

      <!-- Subtle Animation Control -->
      <button class="hero-anim-toggle" id="hero-anim-toggle" aria-label="Pause background animation" title="Toggle background animation">
        <span class="hero-anim-toggle__icon">⏸</span> <span>Pause</span>
      </button>

      <div class="container hero__content">
        <div class="hero__social-proof">
          <div class="avatar-stack">
            <div class="avatar avatar--sm" style="background: #E8C9A0;">🐜</div>
            <div class="avatar avatar--sm" style="background: #C9E8C0;">🐝</div>
            <div class="avatar avatar--sm" style="background: #D0C0E8;">🕷️</div>
            <div class="avatar avatar--sm" style="background: #E8D0C0;">🪳</div>
            <div class="avatar avatar--sm" style="background: #E0E8C0;">🦋</div>
          </div>
          <div class="stars">★★★★★</div>
          <span>12,847+ insects already learning</span>
        </div>

        <div class="hero__eyebrow">
          <span>SMALL</span><br>
          <span>LEARNERS.</span><br>
          <span>BIG FUTURES.</span>
        </div>

        <h1 class="hero__title">
          The future<br>belongs to every <span class="accent">species</span>.
        </h1>

        <p class="hero__description">
          An online learning platform built for insects.<br>
          Because apparently evolution wasn't enough.
        </p>

        <div class="hero__actions">
          <a href="${routeLink('departments')}" class="btn btn--primary btn--lg">
            Start Learning →
          </a>
          <a href="#departments-section" class="btn btn--secondary btn--lg" id="explore-departments-btn">
            Explore Departments
          </a>
        </div>

        <div class="hero__checks">
          <span class="hero__check">Guided Learning</span>
          <span class="hero__check">Unlimited Access</span>
          <span class="hero__check">Expert Insect Tutors</span>
        </div>
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="section--sm" style="position: relative; z-index: 2;">
      <div class="container">
        ${renderStatsBar()}
      </div>
    </section>

    <!-- Departments Section -->
    <section class="section section--departments" id="departments-section">
      <!-- Background & Atmosphere Layer System (Layers 1, 2, 3) -->
      <div class="departments__atmosphere" aria-hidden="true">
        <!-- Layer 1: Campus Landscape Background Image (CSS Fixed Cover) -->
        <div class="departments__bg-image" aria-hidden="true"></div>

        <!-- Layer 2a: Dreamy Blurred Ambient Gradient Blobs -->
        <div class="departments__blobs">
          <div class="departments__blob departments__blob--cream"></div>
          <div class="departments__blob departments__blob--lavender"></div>
          <div class="departments__blob departments__blob--sage"></div>
        </div>

        <!-- Layer 2b: Multi-layer Warm Ivory Overlay & Edge Transitions -->
        <div class="departments__overlay"></div>

        <!-- Layer 3: Tiny Floating Translucent Bubbles (CSS only) -->
        <div class="departments__bubbles">
          <span class="dept-bubble dept-bubble--1"></span>
          <span class="dept-bubble dept-bubble--2"></span>
          <span class="dept-bubble dept-bubble--3"></span>
          <span class="dept-bubble dept-bubble--4"></span>
          <span class="dept-bubble dept-bubble--5"></span>
          <span class="dept-bubble dept-bubble--6"></span>
          <span class="dept-bubble dept-bubble--7"></span>
          <span class="dept-bubble dept-bubble--8"></span>
        </div>
      </div>

      <!-- Layer 4: Section Content & Department Cards -->
      <div class="container" style="position: relative; z-index: 4;">

        <!-- Section Header -->
        <div class="departments__header animate-on-scroll">
          <div class="departments__header-inner">
            <div class="departments__label">
              <span class="departments__label-line" aria-hidden="true"></span>
              <span>Explore</span>
              <span class="departments__label-line" aria-hidden="true"></span>
            </div>

            <h2 class="departments__title">Our Departments</h2>

            <p class="departments__subtitle">Eight unique departments. Infinite possibilities.</p>

            <!-- Subtle decorative botanical detail -->
            <div class="departments__decor" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" opacity="0.3">
                <path d="M16 4c0 8-6 12-6 12s6 4 6 12c0-8 6-12 6-12s-6-4-6-12z" fill="var(--accent-sage)" opacity="0.5"/>
                <path d="M16 8c0 5-4 8-4 8s4 3 4 8c0-5 4-8 4-8s-4-3-4-8z" fill="var(--accent-forest)" opacity="0.3"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Department Grid -->
        <div class="departments__grid">
          ${DEPARTMENTS.map((dept, i) => `
            <div class="animate-on-scroll" style="transition-delay: ${Math.floor(i / 4) * 120 + (i % 4) * 70}ms;">
              ${renderDepartmentCard(dept)}
            </div>
          `).join('')}
        </div>

        <!-- View All CTA -->
        <div class="departments__cta animate-on-scroll">
          <a href="${routeLink('departments')}" class="departments__btn">
            <span>View All Departments</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

      </div>
    </section>

    <!-- Why BUGLEARN Section -->
    <section class="section">
      <div class="container">
        <div class="text-center animate-on-scroll" style="margin-bottom: var(--space-12);">
          <div class="section-label">Why BUGLEARN</div>
          <h2 class="section-title" style="margin-left: auto; margin-right: auto;">Education designed<br>for <span class="text-italic-accent">every</span> species.</h2>
        </div>
        <div class="grid grid-3" style="gap: var(--space-8);">
          <div class="animate-on-scroll" style="text-align: center; padding: var(--space-6);">
            <div style="font-size: 2.5rem; margin-bottom: var(--space-4);">🎓</div>
            <h3 style="font-family: var(--font-serif); font-size: var(--text-xl); margin-bottom: var(--space-3);">Expert Tutors</h3>
            <p style="color: var(--text-secondary); font-size: var(--text-sm); line-height: var(--leading-relaxed);">
              Learn from professors who are world-leading experts in their species' domain. Each tutor brings unique personality and deep knowledge.
            </p>
          </div>
          <div class="animate-on-scroll" style="text-align: center; padding: var(--space-6);">
            <div style="font-size: 2.5rem; margin-bottom: var(--space-4);">🧪</div>
            <h3 style="font-family: var(--font-serif); font-size: var(--text-xl); margin-bottom: var(--space-3);">Interactive Learning</h3>
            <p style="color: var(--text-secondary); font-size: var(--text-sm); line-height: var(--leading-relaxed);">
              Hands-on activities, quizzes, and experiments. Build webs, navigate mazes, decode dances, and survive kitchens.
            </p>
          </div>
          <div class="animate-on-scroll" style="text-align: center; padding: var(--space-6);">
            <div style="font-size: 2.5rem; margin-bottom: var(--space-4);">📜</div>
            <h3 style="font-family: var(--font-serif); font-size: var(--text-xl); margin-bottom: var(--space-3);">Real Certificates</h3>
            <p style="color: var(--text-secondary); font-size: var(--text-sm); line-height: var(--leading-relaxed);">
              Earn prestigious certificates upon completion. Accredited by Absolutely Nobody — but genuinely earned.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section -->
    <section class="section" style="background: var(--bg-lavender);">
      <div class="container">
        <div class="text-center animate-on-scroll" style="max-width: 640px; margin: 0 auto;">
          <div style="font-size: 3rem; margin-bottom: var(--space-6);">🐜</div>
          <blockquote style="font-family: var(--font-serif); font-size: var(--text-2xl); font-style: italic; line-height: var(--leading-relaxed); margin-bottom: var(--space-6); color: var(--text-primary);">
            "Even the smallest creature can achieve the biggest things."
          </blockquote>
          <div style="font-size: var(--text-sm); color: var(--text-secondary);">
            — Ant #4821, Antivirus Graduate
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section" style="background: var(--accent-forest); color: white;">
      <div class="container text-center">
        <h2 class="section-title animate-on-scroll" style="color: white; margin-left: auto; margin-right: auto;">
          Ready to begin<br>your journey?
        </h2>
        <p class="animate-on-scroll" style="color: rgba(255,255,255,0.8); margin-bottom: var(--space-8); font-size: var(--text-lg); max-width: 480px; margin-left: auto; margin-right: auto;">
          Join thousands of insects who are already learning, growing, and earning certificates.
        </p>
        <div class="animate-on-scroll">
          <a href="${routeLink('onboarding')}" class="btn btn--lg" style="background: white; color: var(--accent-forest-dark); font-weight: 700;">
            Start Learning — It's Free →
          </a>
        </div>
      </div>
    </section>
  `;

  container.appendChild(main);
  container.appendChild(renderFooter());

  // Smooth scroll for explore departments button
  const exploreBtn = container.querySelector('#explore-departments-btn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('departments-section');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Initialize hero animation
  const heroElement = container.querySelector('#hero-section');
  const animCleanup = initHeroAnimation(heroElement);

  // Initialize animations
  requestAnimationFrame(() => {
    initScrollAnimations();
    initStatsAnimations();
  });

  return () => {
    if (typeof animCleanup === 'function') {
      animCleanup();
    }
  };
}
