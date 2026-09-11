// ============================================
// BUGLEARN — Ant Maze Navigation Simulation
// ============================================

import { store } from '../state/store.js';
import { showToast } from '../components/toast.js';

export function render(container) {
  const wrapper = document.createElement('div');
  wrapper.className = 'activity-maze-wrapper';
  wrapper.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 280px; gap: var(--space-6);" class="maze-grid">
      <!-- Maze Canvas -->
      <div style="background: var(--bg-green); border-radius: var(--radius-lg); padding: var(--space-4); position: relative; min-height: 400px;" id="maze-area">
        <canvas id="maze-canvas" style="width: 100%; height: 100%; border-radius: var(--radius-md); background: white; display: block;"></canvas>
        <div style="position: absolute; bottom: var(--space-4); left: 50%; transform: translateX(-50%);">
          <button class="btn btn--primary btn--sm" id="run-maze">Run Experiment 🐜</button>
        </div>
      </div>

      <!-- Results Panel -->
      <div>
        <h3 style="font-family: var(--font-serif); font-size: var(--text-lg); margin-bottom: var(--space-4);">Results</h3>
        <div id="trial-results" style="display: flex; flex-direction: column; gap: var(--space-2); margin-bottom: var(--space-6);">
          <div style="color: var(--text-tertiary); font-size: var(--text-sm); font-style: italic;">No trials yet. Run the experiment!</div>
        </div>

        <div id="improvement-section" style="display: none;">
          <div class="divider"></div>
          <div style="margin-top: var(--space-4);">
            <div style="font-size: var(--text-xs); color: var(--text-tertiary); text-transform: uppercase; letter-spacing: var(--tracking-wider); margin-bottom: var(--space-2);">Learning Improvement</div>
            <div style="font-family: var(--font-serif); font-size: var(--text-4xl); font-weight: bold; color: var(--accent-forest);" id="improvement-value">0%</div>
          </div>
        </div>
      </div>
    </div>
  `;

  container.appendChild(wrapper);

  const canvas = wrapper.querySelector('#maze-canvas');
  const runBtn = wrapper.querySelector('#run-maze');
  const resultsDiv = wrapper.querySelector('#trial-results');
  const improvementSection = wrapper.querySelector('#improvement-section');
  const improvementValue = wrapper.querySelector('#improvement-value');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const trials = [];

  function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = Math.max(rect.width - 32, 280);
    canvas.height = 340;
    drawMaze();
  }

  const mazeWalls = [
    [0, 0, 1, 0], [0, 0, 0, 1], [1, 0, 1, 1], [0, 1, 1, 1],
    [0.2, 0, 0.2, 0.6], [0.4, 0.3, 0.4, 1], [0.6, 0, 0.6, 0.7],
    [0.8, 0.2, 0.8, 0.8], [0.2, 0.6, 0.5, 0.6], [0.6, 0.4, 0.8, 0.4],
  ];

  function drawMaze() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#FAFAF8';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#D4CFC8';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    mazeWalls.forEach(([x1, y1, x2, y2]) => {
      ctx.beginPath();
      ctx.moveTo(x1 * canvas.width, y1 * canvas.height);
      ctx.lineTo(x2 * canvas.width, y2 * canvas.height);
      ctx.stroke();
    });

    ctx.fillStyle = '#4A7C59';
    ctx.font = '14px sans-serif';
    ctx.fillText('🐜 START', 10, 22);

    ctx.fillStyle = '#C25B5B';
    ctx.fillText('🏁 END', canvas.width - 65, canvas.height - 10);
  }

  function simulateTrial(trialNum) {
    return new Promise(resolve => {
      const baseDuration = 31000;
      const improvement = Math.pow(0.7, trialNum - 1);
      const duration = baseDuration * improvement * (0.85 + Math.random() * 0.3);
      const seconds = (duration / 1000).toFixed(1);

      let progress = 0;
      const path = generatePath(trialNum);
      const startTime = performance.now();
      const animDuration = 1800 + Math.random() * 800;

      function animate(now) {
        progress = Math.min((now - startTime) / animDuration, 1);
        drawMaze();

        const idx = Math.floor(progress * (path.length - 1));
        const pos = path[Math.min(idx, path.length - 1)];

        ctx.strokeStyle = 'rgba(74, 124, 89, 0.35)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = 0; i <= idx; i++) {
          const p = path[i];
          if (i === 0) ctx.moveTo(p[0] * canvas.width, p[1] * canvas.height);
          else ctx.lineTo(p[0] * canvas.width, p[1] * canvas.height);
        }
        ctx.stroke();

        ctx.font = '20px sans-serif';
        ctx.fillText('🐜', pos[0] * canvas.width - 10, pos[1] * canvas.height + 5);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          resolve(seconds);
        }
      }

      requestAnimationFrame(animate);
    });
  }

  function generatePath(trialNum) {
    const points = [];
    const segments = 20 - Math.min(trialNum * 2, 12);
    const jitter = 0.08 / trialNum;

    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      points.push([
        0.05 + t * 0.9 + (Math.random() - 0.5) * jitter,
        0.1 + t * 0.8 + (Math.random() - 0.5) * jitter * 2,
      ]);
    }
    return points;
  }

  runBtn.addEventListener('click', async () => {
    runBtn.disabled = true;
    runBtn.textContent = 'Running... 🐜';

    const trialNum = trials.length + 1;
    const seconds = await simulateTrial(trialNum);
    trials.push(parseFloat(seconds));

    resultsDiv.innerHTML = trials.map((t, i) => `
      <div style="display: flex; justify-content: space-between; padding: var(--space-2) var(--space-3); background: ${i === trials.length - 1 ? 'var(--bg-green)' : 'var(--bg-secondary)'}; border-radius: var(--radius-sm); font-size: var(--text-sm);">
        <span>Trial ${i + 1}</span>
        <span style="font-weight: var(--weight-semibold);">${t.toFixed(1)} sec</span>
      </div>
    `).join('');

    if (trials.length >= 2) {
      improvementSection.style.display = 'block';
      const improvement = ((trials[0] - trials[trials.length - 1]) / trials[0] * 100).toFixed(1);
      improvementValue.textContent = `${improvement}%`;
    }

    if (trials.length === 1) {
      store.awardXP(30);
      showToast('Experiment Started!', '+30 XP', 'xp');
    } else if (trials.length === 4) {
      store.awardXP(50);
      showToast('Experiment Complete!', '+50 XP — Learning improvement measured!', 'xp');
    }

    runBtn.disabled = false;
    runBtn.textContent = trials.length >= 4 ? 'Run Again 🐜' : `Run Trial ${trials.length + 1} 🐜`;
  });

  setTimeout(resizeCanvas, 50);
  window.addEventListener('resize', resizeCanvas);
}
