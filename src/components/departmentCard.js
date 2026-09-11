// ============================================
// BUGLEARN — Department Card Component
// ============================================

import { routeLink } from '../router.js';

/**
 * Department-specific gradient & metadata config.
 * Each department gets unique pastel gradients and academic metadata
 * to create a premium editorial feel.
 */
const DEPT_CONFIG = {
  ant: {
    gradientFrom: '#F0D5BC',
    gradientTo: '#FDF5EC',
    modules: 6,
    lessons: 24,
    level: 'Foundation',
    glow: true,
    glowColor: 'rgba(193, 120, 64, 0.08)',
  },
  cockroach: {
    gradientFrom: '#D9CBBA',
    gradientTo: '#F5F0EA',
    modules: 8,
    lessons: 32,
    level: 'Intermediate',
    glow: false,
    glowColor: 'transparent',
  },
  spider: {
    gradientFrom: '#D4CBE4',
    gradientTo: '#EDE9F3',
    modules: 6,
    lessons: 28,
    level: 'Foundation',
    glow: true,
    glowColor: 'rgba(107, 91, 138, 0.07)',
  },
  bee: {
    gradientFrom: '#F0E4A8',
    gradientTo: '#FDF9EC',
    modules: 6,
    lessons: 24,
    level: 'Foundation',
    glow: true,
    glowColor: 'rgba(212, 168, 36, 0.07)',
  },
  mosquito: {
    gradientFrom: '#BDDBC8',
    gradientTo: '#EDF5F0',
    modules: 5,
    lessons: 20,
    level: 'Advanced',
    glow: false,
    glowColor: 'transparent',
  },
  butterfly: {
    gradientFrom: '#EFBFDC',
    gradientTo: '#FBF0F5',
    modules: 6,
    lessons: 24,
    level: 'Intermediate',
    glow: true,
    glowColor: 'rgba(196, 122, 170, 0.07)',
  },
  fly: {
    gradientFrom: '#C5D4A8',
    gradientTo: '#F2F5EC',
    modules: 5,
    lessons: 18,
    level: 'Foundation',
    glow: false,
    glowColor: 'transparent',
  },
  ladybug: {
    gradientFrom: '#EAADA8',
    gradientTo: '#FBF0EF',
    modules: 4,
    lessons: 16,
    level: 'Foundation',
    glow: false,
    glowColor: 'transparent',
  },
};

/**
 * Render a premium department card.
 * @param {Object} dept - Department data object
 * @returns {string} HTML string
 */
export function renderDepartmentCard(dept) {
  const config = DEPT_CONFIG[dept.slug] || {
    gradientFrom: '#E8E4DF',
    gradientTo: '#F8F5F0',
    modules: 6,
    lessons: 20,
    level: 'Foundation',
    glow: false,
    glowColor: 'transparent',
  };

  const hasGlow = config.glow;
  const rawImage = dept.image || '';
  const imageSrc = rawImage ? encodeURI(decodeURI(rawImage)) : '';
  const moduleCount = dept.course && dept.course.modules ? dept.course.modules.length : (config.modules || 6);
  const lessonCount = dept.course && dept.course.modules 
    ? dept.course.modules.reduce((sum, m) => sum + (m.lessons ? m.lessons.length : 0), 0)
    : (config.lessons || 18);

  return `
    <a href="${routeLink('department/' + dept.slug)}"
       class="dept-card${hasGlow ? ' dept-card--glow' : ''}"
       style="--dept-color: ${dept.accent}; --dept-grad-from: ${config.gradientFrom}; --dept-grad-to: ${config.gradientTo}; --dept-glow-color: ${config.glowColor};"
       aria-label="Explore ${dept.name}: ${dept.course.name} with ${dept.tutor.name}">

      <div class="dept-card__image-wrap">
        ${imageSrc ? `
          <img
            src="${imageSrc}"
            alt="${dept.name} flagship course: ${dept.course.name}"
            class="dept-card__img"
            loading="eager"
            decoding="async"
            onerror="if(!this.dataset.fallback && this.src.includes('cockro')) { this.dataset.fallback='1'; this.src=this.src.includes('cockroch') ? '/bugs/cockroach.png' : '/bugs/cockroch.png'; return; } this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';"
          />
          <div class="dept-card__image dept-card__image--fallback" style="display: none;" aria-hidden="true">
            ${dept.emoji}
          </div>
        ` : `
          <div class="dept-card__image" aria-hidden="true">
            ${dept.emoji}
          </div>
        `}
      </div>

      <div class="dept-card__body">
        <div class="dept-card__header">
          <div class="dept-card__dept">${dept.name}</div>
          <div class="dept-card__arrow" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </div>

        <div class="dept-card__course">${dept.course.name}</div>
        <div class="dept-card__tutor">${dept.tutor.name}</div>

        <div class="dept-card__meta">
          <span class="dept-card__meta-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            ${moduleCount} Modules
          </span>
          <span class="dept-card__meta-sep" aria-hidden="true"></span>
          <span class="dept-card__meta-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
            ${lessonCount} Lessons
          </span>
        </div>
      </div>
    </a>
  `;
}
