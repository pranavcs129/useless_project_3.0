// ============================================
// BUGLEARN — Department Simulations Suite
// ============================================

import { store } from '../state/store.js';
import { showToast } from '../components/toast.js';

export function createSimulation(deptSlug, title, description, renderInner) {
  return {
    render(container) {
      const card = document.createElement('div');
      card.className = 'simulation-card';
      card.style.cssText = 'background: white; border-radius: var(--radius-xl); border: 1px solid var(--border-light); padding: var(--space-6); margin-top: var(--space-6);';
      
      card.innerHTML = `
        <div style="margin-bottom: var(--space-4);">
          <div class="section-label">Department Simulation</div>
          <h3 style="font-family: var(--font-serif); font-size: var(--text-2xl); margin: 0;">${title}</h3>
          <p style="color: var(--text-secondary); font-size: var(--text-sm); margin-top: 4px;">${description}</p>
        </div>
        <div class="simulation-inner" style="min-height: 220px; background: var(--bg-cream); border-radius: var(--radius-lg); padding: var(--space-6); display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;"></div>
      `;

      const inner = card.querySelector('.simulation-inner');
      renderInner(inner);
      container.appendChild(card);
    }
  };
}

// Bee: Aerodynamic Flow Simulator
export const beeActivity = createSimulation(
  'bee',
  'Aerodynamic Airflow & Wing Angle Calibrator',
  'Tune wing stroke angle to generate optimal leading-edge vortex and maximum lift for pollen payload.',
  (inner) => {
    let angle = 45;
    inner.innerHTML = `
      <div style="font-size: 3rem; margin-bottom: var(--space-3);" id="bee-figure">🐝 ☀️</div>
      <div style="font-weight: 600; margin-bottom: var(--space-2);">Stroke Angle: <span id="bee-angle-val">${angle}°</span> relative to oncoming flow</div>
      <input type="range" min="0" max="360" value="${angle}" id="bee-angle-slider" style="width: 220px; margin-bottom: var(--space-4); accent-color: var(--accent-honey);" />
      <div>
        <button class="btn btn--primary btn--sm" id="bee-transmit-btn" style="background: #E5A93C;">Calibrate Vortex Circulation</button>
      </div>
    `;

    const slider = inner.querySelector('#bee-angle-slider');
    const val = inner.querySelector('#bee-angle-val');
    const bee = inner.querySelector('#bee-figure');
    const btn = inner.querySelector('#bee-transmit-btn');

    slider.addEventListener('input', (e) => {
      angle = e.target.value;
      val.textContent = `${angle}°`;
      bee.style.transform = `rotate(${angle}deg)`;
    });

    btn.addEventListener('click', () => {
      store.awardXP(35);
      showToast('Vortex Stable!', `Wing angle tuned to ${angle}°! Maximum lift achieved with minimum drag. +35 XP`, 'xp');
      btn.disabled = true;
      btn.textContent = 'Circulation Calibrated ✓';
    });
  }
);

// Cockroach: Chemical Escape Lab
export const cockroachActivity = createSimulation(
  'cockroach',
  'Chemical Exposure Emergency Escape Drill',
  'When cleaning spray or sudden light activates, navigate to safe chemical shadow crevices within 12 milliseconds.',
  (inner) => {
    let lightOn = false;
    let startTime = 0;
    inner.innerHTML = `
      <div id="roach-arena" style="width: 100%; max-width: 400px; height: 120px; background: #2B2620; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; padding: 0 20px; margin-bottom: var(--space-4); color: white; transition: background 0.1s;">
        <span id="roach-emoji" style="font-size: 2.2rem; transition: transform 0.2s;">🪳</span>
        <span style="font-size: 0.8rem; color: #8A8A8A;">[Baseboard Crevice 🚪]</span>
      </div>
      <button class="btn btn--primary btn--sm" id="roach-drill-btn" style="background: #8B6F4E;">Initiate Surprise Light Test</button>
      <div id="roach-result" style="margin-top: var(--space-2); font-size: var(--text-sm); color: var(--text-secondary);"></div>
    `;

    const arena = inner.querySelector('#roach-arena');
    const roach = inner.querySelector('#roach-emoji');
    const btn = inner.querySelector('#roach-drill-btn');
    const result = inner.querySelector('#roach-result');

    btn.addEventListener('click', () => {
      btn.disabled = true;
      result.textContent = 'Waiting in the dark... stay alert...';
      const delay = Math.random() * 2000 + 1000;

      setTimeout(() => {
        arena.style.background = '#FFF3D1';
        lightOn = true;
        startTime = performance.now();
        result.textContent = '💡 LIGHT IS ON! CLICK THE ROACH TO HIDE!';
      }, delay);
    });

    roach.addEventListener('click', () => {
      if (!lightOn) return;
      const reactionTime = Math.round(performance.now() - startTime);
      roach.style.transform = 'translateX(260px)';
      result.innerHTML = `💨 Escaped in <strong>${reactionTime} ms</strong>! Dr. Roach: "Legendary reflexes." +40 XP`;
      store.awardXP(40);
      showToast('Survival Mastered', `Escaped in ${reactionTime}ms! +40 XP`, 'achievement');
      lightOn = false;
    });
  }
);

// Mosquito: Acoustic Firewall Bypass
export const mosquitoActivity = createSimulation(
  'mosquito',
  'Acoustic Doppler Decibel Silencer (Firewall Bypass)',
  'Tune wing beat frequency into Host auditory blindspot (sub-audible 450Hz) to prevent intrusion response slaps.',
  (inner) => {
    let freq = 600;
    inner.innerHTML = `
      <div style="font-size: 2.5rem; margin-bottom: var(--space-2);">🦟 🔊</div>
      <div style="font-size: var(--text-sm); margin-bottom: var(--space-3);">Current Pitch: <span id="mosq-freq" style="font-weight: bold; color: #D63031;">${freq} Hz (Very Audible!)</span></div>
      <input type="range" min="300" max="800" value="${freq}" id="mosq-slider" style="width: 240px; margin-bottom: var(--space-4);" />
      <div><button class="btn btn--primary btn--sm" id="mosq-btn" style="background: #D63031;">Engage Stealth Hover</button></div>
    `;

    const slider = inner.querySelector('#mosq-slider');
    const freqEl = inner.querySelector('#mosq-freq');
    const btn = inner.querySelector('#mosq-btn');

    slider.addEventListener('input', (e) => {
      freq = parseInt(e.target.value);
      if (freq >= 420 && freq <= 480) {
        freqEl.textContent = `${freq} Hz (Inaudible! Perfect)`;
        freqEl.style.color = '#00B894';
      } else {
        freqEl.textContent = `${freq} Hz (Detectable)`;
        freqEl.style.color = '#D63031';
      }
    });

    btn.addEventListener('click', () => {
      if (freq >= 420 && freq <= 480) {
        store.awardXP(35);
        showToast('Stealth Clear!', 'Agent Mozzi confirmed 100% acoustic dampening. +35 XP', 'xp');
        btn.disabled = true;
        btn.textContent = 'Stealth Active ✓';
      } else {
        showToast('Too Loud!', 'Humans heard the buzzing and reached for the rolled newspaper. Retune frequency!', 'warning');
      }
    });
  }
);
