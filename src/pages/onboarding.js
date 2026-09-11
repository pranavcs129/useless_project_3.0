// ============================================
// BUGLEARN — Onboarding Page
// ============================================

import { store } from '../state/store.js';
import { navigate } from '../router.js';
import { showToast } from '../components/toast.js';

const SPECIES = [
  { name: 'Ant', emoji: '🐜' },
  { name: 'Cockroach', emoji: '🪳' },
  { name: 'Spider', emoji: '🕷️' },
  { name: 'Bee', emoji: '🐝' },
  { name: 'Mosquito', emoji: '🦟' },
  { name: 'Butterfly', emoji: '🦋' },
  { name: 'Fly', emoji: '🪰' },
  { name: 'Ladybug', emoji: '🐞' },
];

export async function render(container) {
  // If already onboarded, redirect to dashboard
  if (store.isOnboarded()) {
    navigate('dashboard');
    return;
  }

  container.innerHTML = `
    <div class="onboarding">
      <div class="onboarding__card">
        <div style="font-size: 2.5rem; margin-bottom: var(--space-4);">🍃</div>
        <h1 class="onboarding__title">Welcome to BUGLEARN</h1>
        <p class="onboarding__subtitle">Choose your species and start learning.</p>

        <div id="onboarding-step-1">
          <h3 style="font-family: var(--font-serif); font-size: var(--text-lg); margin-bottom: var(--space-4);">I am a...</h3>
          <div class="species-grid">
            ${SPECIES.map(s => `
              <div class="species-option" data-species="${s.name}" data-emoji="${s.emoji}">
                <span class="species-option__emoji">${s.emoji}</span>
                <span class="species-option__name">${s.name}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <div id="onboarding-step-2" style="display: none;">
          <h3 style="font-family: var(--font-serif); font-size: var(--text-lg); margin-bottom: var(--space-4);">What should we call you?</h3>
          <input type="text" class="input" placeholder="e.g. Ant #4821" id="student-name" style="margin-bottom: var(--space-6); text-align: center;" />
          <button class="btn btn--primary btn--lg" style="width: 100%; justify-content: center;" id="complete-onboarding">
            Start Learning →
          </button>
          <button class="btn btn--ghost btn--sm" style="width: 100%; margin-top: var(--space-3);" id="back-to-species">
            ← Choose different species
          </button>
        </div>
      </div>
    </div>
  `;

  let selectedSpecies = null;
  let selectedEmoji = null;

  // Species selection
  container.querySelectorAll('.species-option').forEach(opt => {
    opt.addEventListener('click', () => {
      container.querySelectorAll('.species-option').forEach(o => o.classList.remove('is-selected'));
      opt.classList.add('is-selected');
      selectedSpecies = opt.dataset.species;
      selectedEmoji = opt.dataset.emoji;

      // Auto-advance after brief delay
      setTimeout(() => {
        container.querySelector('#onboarding-step-1').style.display = 'none';
        const step2 = container.querySelector('#onboarding-step-2');
        step2.style.display = 'block';
        step2.style.animation = 'fadeInUp var(--duration-normal) var(--ease-out)';

        // Generate default name
        const defaultName = `${selectedSpecies} #${Math.floor(1000 + Math.random() * 9000)}`;
        container.querySelector('#student-name').value = defaultName;
        container.querySelector('#student-name').focus();
        container.querySelector('#student-name').select();
      }, 300);
    });
  });

  // Back button
  const backBtn = container.querySelector('#back-to-species');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      container.querySelector('#onboarding-step-2').style.display = 'none';
      container.querySelector('#onboarding-step-1').style.display = 'block';
    });
  }

  // Complete onboarding
  const completeBtn = container.querySelector('#complete-onboarding');
  if (completeBtn) {
    completeBtn.addEventListener('click', () => {
      const name = container.querySelector('#student-name').value.trim();
      if (!name) {
        container.querySelector('#student-name').focus();
        return;
      }

      store.createProfile({
        name,
        species: selectedSpecies,
        emoji: selectedEmoji,
      });

      showToast('Welcome to BUGLEARN!', `${selectedEmoji} ${name}, your journey begins now.`, 'success', 5000);
      navigate('dashboard');
    });
  }

  // Enter key on name input
  const nameInput = container.querySelector('#student-name');
  if (nameInput) {
    nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') completeBtn.click();
    });
  }
}
