// ============================================
// BUGLEARN — Bug Lab Page
// ============================================

import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';
import { store } from '../state/store.js';
import { showToast } from '../components/toast.js';

export async function render(container) {
  container.innerHTML = '';
  container.appendChild(renderNavbar());

  const main = document.createElement('main');
  main.innerHTML = `
    <section style="padding: var(--space-32) 0 var(--space-8);">
      <div class="container">
        <div class="section-label">Experiments</div>
        <h1 class="section-title" style="font-size: var(--text-5xl);">Bug <span class="text-italic-accent">Lab</span></h1>
        <p class="section-subtitle">Interactive experiments for curious minds.</p>
      </div>
    </section>

    <section class="section--sm">
      <div class="container" style="max-width: var(--container-lg);">
        <div class="card" style="overflow: visible;">
          <div class="card__body" style="padding: var(--space-8);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: var(--space-6); margin-bottom: var(--space-6);">
              <div>
                <div class="section-label">Featured Experiment</div>
                <h2 style="font-family: var(--font-serif); font-size: var(--text-3xl); margin-bottom: var(--space-2);">Can an Ant Learn a Maze?</h2>
                <p style="color: var(--text-secondary); font-size: var(--text-sm);">Watch how practice improves navigation skills.</p>
              </div>
              <div style="text-align: right;">
                <div style="font-size: var(--text-xs); font-weight: 600; color: var(--accent-forest); letter-spacing: var(--tracking-wider); text-transform: uppercase;">Practice makes progress</div>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 280px; gap: var(--space-6);">
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
          </div>
        </div>

        <!-- Concepts -->
        <div style="margin-top: var(--space-8); display: grid; grid-template-columns: repeat(5, 1fr); gap: var(--space-4);">
          ${['Learning', 'Memory', 'Navigation', 'Adaptation', 'Problem Solving'].map(concept => `
            <div style="text-align: center; padding: var(--space-4); background: var(--bg-cream); border-radius: var(--radius-lg);">
              <div style="font-size: var(--text-sm); font-weight: var(--weight-semibold);">${concept}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  container.appendChild(main);
  container.appendChild(renderFooter());

  // Initialize maze
  initMaze(container);
}

function initMaze(container) {
  const canvas = container.querySelector('#maze-canvas');
  const runBtn = container.querySelector('#run-maze');
  const resultsDiv = container.querySelector('#trial-results');
  const improvementSection = container.querySelector('#improvement-section');
  const improvementValue = container.querySelector('#improvement-value');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const trials = [];

  // Set canvas size
  function resizeCanvas() {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width - 32;
    canvas.height = rect.height - 60;
    drawMaze();
  }

  // Simple maze layout
  const mazeWalls = [
    // Outer walls
    [0, 0, 1, 0], [0, 0, 0, 1], [1, 0, 1, 1], [0, 1, 1, 1],
    // Inner walls
    [0.2, 0, 0.2, 0.6], [0.4, 0.3, 0.4, 1], [0.6, 0, 0.6, 0.7],
    [0.8, 0.2, 0.8, 0.8], [0.2, 0.6, 0.5, 0.6], [0.6, 0.4, 0.8, 0.4],
  ];

  function drawMaze() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#FAFAF8';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw walls
    ctx.strokeStyle = '#D4CFC8';
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';

    mazeWalls.forEach(([x1, y1, x2, y2]) => {
      ctx.beginPath();
      ctx.moveTo(x1 * canvas.width, y1 * canvas.height);
      ctx.lineTo(x2 * canvas.width, y2 * canvas.height);
      ctx.stroke();
    });

    // Start marker
    ctx.fillStyle = '#4A7C59';
    ctx.font = '16px sans-serif';
    ctx.fillText('🐜 START', 10, 20);

    // End marker
    ctx.fillStyle = '#C25B5B';
    ctx.fillText('🏁 END', canvas.width - 70, canvas.height - 10);
  }

  function simulateTrial(trialNum) {
    return new Promise(resolve => {
      const baseDuration = 31000; // 31 seconds base
      const improvement = Math.pow(0.7, trialNum - 1); // Each trial 30% faster
      const duration = baseDuration * improvement * (0.85 + Math.random() * 0.3);
      const seconds = (duration / 1000).toFixed(1);

      // Animate ant moving through maze
      let progress = 0;
      const path = generatePath(trialNum);
      const startTime = performance.now();
      const animDuration = 2000 + Math.random() * 1000; // Visual animation duration

      function animate(now) {
        progress = Math.min((now - startTime) / animDuration, 1);
        drawMaze();

        // Draw ant position along path
        const idx = Math.floor(progress * (path.length - 1));
        const pos = path[Math.min(idx, path.length - 1)];

        // Trail
        ctx.strokeStyle = 'rgba(74, 124, 89, 0.3)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let i = 0; i <= idx; i++) {
          const p = path[i];
          if (i === 0) ctx.moveTo(p[0] * canvas.width, p[1] * canvas.height);
          else ctx.lineTo(p[0] * canvas.width, p[1] * canvas.height);
        }
        ctx.stroke();

        // Ant
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
    // Straighter path with more trials (learning!)
    const points = [];
    const segments = 20 - Math.min(trialNum * 2, 12);
    const jitter = 0.08 / trialNum; // Less jitter = more learned

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

    // Update results
    resultsDiv.innerHTML = trials.map((t, i) => `
      <div style="display: flex; justify-content: space-between; padding: var(--space-2) var(--space-3); background: ${i === trials.length - 1 ? 'var(--bg-green)' : 'var(--bg-secondary)'}; border-radius: var(--radius-sm); font-size: var(--text-sm);">
        <span>Trial ${i + 1}</span>
        <span style="font-weight: var(--weight-semibold);">${t.toFixed(1)} sec</span>
      </div>
    `).join('');

    // Show improvement
    if (trials.length >= 2) {
      improvementSection.style.display = 'block';
      const improvement = ((trials[0] - trials[trials.length - 1]) / trials[0] * 100).toFixed(1);
      improvementValue.textContent = `${improvement}%`;
    }

    // Award XP
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

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
}
