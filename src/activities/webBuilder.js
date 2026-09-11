// ============================================
// BUGLEARN — Spider Web Builder Activity
// ============================================

import { store } from '../state/store.js';
import { showToast } from '../components/toast.js';

export function render(container) {
  const wrapper = document.createElement('div');
  wrapper.className = 'activity-web-builder';
  wrapper.innerHTML = `
    <div style="background: white; border-radius: var(--radius-xl); border: 1px solid var(--border-light); padding: var(--space-6);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-4); flex-wrap: wrap; gap: var(--space-4);">
        <div>
          <div class="section-label" style="color: #6C5CE7;">Practical Studio</div>
          <h3 style="font-family: var(--font-serif); font-size: var(--text-2xl); margin: 0;">Interactive Web Construction</h3>
          <p style="color: var(--text-secondary); font-size: var(--text-sm); margin-top: 4px;">Click anywhere inside the frame to attach radial silk threads. Connect nodes to maximize tension!</p>
        </div>
        <div style="display: flex; gap: var(--space-2);">
          <button class="btn btn--secondary btn--sm" id="wb-test-fly">🪰 Test Fly Catch</button>
          <button class="btn btn--secondary btn--sm" id="wb-reset">Clear Web</button>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 240px; gap: var(--space-6);" class="web-builder-grid">
        <!-- Canvas Area -->
        <div style="position: relative; background: #1B241C; border-radius: var(--radius-lg); overflow: hidden; min-height: 380px; box-shadow: inset 0 2px 10px rgba(0,0,0,0.5);" id="wb-canvas-container">
          <canvas id="web-canvas" style="display: block; width: 100%; height: 100%; cursor: crosshair;"></canvas>
          <div style="position: absolute; top: 12px; left: 12px; color: rgba(255,255,255,0.7); font-size: 0.75rem; pointer-events: none;">
            🕷️ Mode: Spinning silk • Click to anchor
          </div>
          <div id="fly-animation-layer" style="position: absolute; inset: 0; pointer-events: none; overflow: hidden;"></div>
        </div>

        <!-- Web Telemetry -->
        <div style="background: var(--bg-cream); border-radius: var(--radius-lg); padding: var(--space-5); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="font-size: var(--text-xs); text-transform: uppercase; letter-spacing: var(--tracking-wider); color: var(--text-tertiary); margin-bottom: var(--space-3);">Structural Metrics</div>
            
            <div style="margin-bottom: var(--space-4);">
              <div style="display: flex; justify-content: space-between; font-size: var(--text-xs); margin-bottom: 4px;">
                <span>Radial Threads</span>
                <span id="wb-thread-count" style="font-weight: bold;">0</span>
              </div>
              <div style="background: var(--border-light); height: 6px; border-radius: 3px; overflow: hidden;">
                <div id="wb-thread-bar" style="width: 0%; height: 100%; background: #6C5CE7; transition: width 0.3s;"></div>
              </div>
            </div>

            <div style="margin-bottom: var(--space-4);">
              <div style="display: flex; justify-content: space-between; font-size: var(--text-xs); margin-bottom: 4px;">
                <span>Symmetry Score</span>
                <span id="wb-symmetry-val" style="font-weight: bold;">0%</span>
              </div>
              <div style="background: var(--border-light); height: 6px; border-radius: 3px; overflow: hidden;">
                <div id="wb-symmetry-bar" style="width: 0%; height: 100%; background: #00B894; transition: width 0.3s;"></div>
              </div>
            </div>

            <div>
              <div style="display: flex; justify-content: space-between; font-size: var(--text-xs); margin-bottom: 4px;">
                <span>Tensile Strength</span>
                <span id="wb-tension-val" style="font-weight: bold;">Low</span>
              </div>
              <div style="background: var(--border-light); height: 6px; border-radius: 3px; overflow: hidden;">
                <div id="wb-tension-bar" style="width: 10%; height: 100%; background: #E17055; transition: width 0.3s;"></div>
              </div>
            </div>
          </div>

          <div style="padding-top: var(--space-4); border-top: 1px solid var(--border-light);">
            <div style="font-size: 0.75rem; color: var(--text-secondary); line-height: 1.4; margin-bottom: var(--space-3);" id="wb-feedback">
              🕸️ Add at least 6 radial silk threads to construct a stable capture web.
            </div>
            <button class="btn btn--primary btn--sm" id="wb-submit-btn" style="width: 100%; background: #6C5CE7;" disabled>
              Submit to Prof. Webster
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  container.appendChild(wrapper);

  const canvas = wrapper.querySelector('#web-canvas');
  const threadCountEl = wrapper.querySelector('#wb-thread-count');
  const threadBarEl = wrapper.querySelector('#wb-thread-bar');
  const symmetryValEl = wrapper.querySelector('#wb-symmetry-val');
  const symmetryBarEl = wrapper.querySelector('#wb-symmetry-bar');
  const tensionValEl = wrapper.querySelector('#wb-tension-val');
  const tensionBarEl = wrapper.querySelector('#wb-tension-bar');
  const feedbackEl = wrapper.querySelector('#wb-feedback');
  const submitBtn = wrapper.querySelector('#wb-submit-btn');
  const resetBtn = wrapper.querySelector('#wb-reset');
  const testFlyBtn = wrapper.querySelector('#wb-test-fly');
  const flyLayer = wrapper.querySelector('#fly-animation-layer');

  const ctx = canvas.getContext('2d');
  let nodes = [];
  let center = { x: 0, y: 0 };

  function resize() {
    const parent = canvas.parentElement.getBoundingClientRect();
    canvas.width = Math.max(parent.width, 300);
    canvas.height = 380;
    center = { x: canvas.width / 2, y: canvas.height / 2 };
    redraw();
  }

  function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw dark wood frame border
    ctx.strokeStyle = '#3A4A3C';
    ctx.lineWidth = 8;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

    // Draw center hub
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(center.x, center.y, 4, 0, Math.PI * 2);
    ctx.fill();

    // Draw radial lines from center to nodes
    nodes.forEach(n => {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(center.x, center.y);
      ctx.lineTo(n.x, n.y);
      ctx.stroke();

      // Node point with dew drop
      ctx.fillStyle = 'rgba(180, 230, 255, 0.9)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, 3, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw spiral bridges connecting consecutive nodes
    if (nodes.length >= 3) {
      for (let r = 0.25; r <= 0.85; r += 0.2) {
        ctx.strokeStyle = 'rgba(220, 240, 255, 0.4)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        nodes.forEach((n, idx) => {
          const px = center.x + (n.x - center.x) * r;
          const py = center.y + (n.y - center.y) * r;
          if (idx === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        const first = nodes[0];
        ctx.lineTo(center.x + (first.x - center.x) * r, center.y + (first.y - center.y) * r);
        ctx.stroke();
      }
    }

    updateMetrics();
  }

  function updateMetrics() {
    const count = nodes.length;
    threadCountEl.textContent = count;
    threadBarEl.style.width = `${Math.min(count * 12.5, 100)}%`;

    const symmetry = count >= 4 ? Math.min(Math.round(40 + count * 7.5), 98) : count * 10;
    symmetryValEl.textContent = `${symmetry}%`;
    symmetryBarEl.style.width = `${symmetry}%`;

    if (count < 4) {
      tensionValEl.textContent = 'Fragile';
      tensionValEl.style.color = '#E17055';
      tensionBarEl.style.width = '20%';
      tensionBarEl.style.backgroundColor = '#E17055';
      feedbackEl.textContent = '🕸️ The web is currently too fragile to catch anything larger than airborne pollen.';
      submitBtn.disabled = true;
    } else if (count < 8) {
      tensionValEl.textContent = 'Moderate';
      tensionValEl.style.color = '#FDCB6E';
      tensionBarEl.style.width = '60%';
      tensionBarEl.style.backgroundColor = '#FDCB6E';
      feedbackEl.textContent = '🕷️ Prof. Webster says: "Good progress. Add spiral threads or outer anchor points."';
      submitBtn.disabled = false;
    } else {
      tensionValEl.textContent = 'Optimal 🕸️';
      tensionValEl.style.color = '#00B894';
      tensionBarEl.style.width = '96%';
      tensionBarEl.style.backgroundColor = '#00B894';
      feedbackEl.textContent = '🌟 Masterpiece! High tensile load, aerodynamic stealth, ready for harvest.';
      submitBtn.disabled = false;
    }
  }

  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    nodes.push({ x, y });
    redraw();
  });

  resetBtn.addEventListener('click', () => {
    nodes = [];
    redraw();
  });

  testFlyBtn.addEventListener('click', () => {
    if (nodes.length < 3) {
      showToast('Web too small', 'Spin some silk threads first before catching flies!', 'info');
      return;
    }

    const fly = document.createElement('div');
    fly.textContent = '🪰';
    fly.style.position = 'absolute';
    fly.style.fontSize = '24px';
    fly.style.left = '10px';
    fly.style.top = `${Math.random() * 200 + 50}px`;
    fly.style.transition = 'all 1.2s cubic-bezier(0.25, 1, 0.5, 1)';
    flyLayer.appendChild(fly);

    setTimeout(() => {
      fly.style.left = `${center.x + (Math.random() - 0.5) * 60}px`;
      fly.style.top = `${center.y + (Math.random() - 0.5) * 60}px`;
      fly.style.transform = 'rotate(45deg) scale(0.9)';
    }, 50);

    setTimeout(() => {
      showToast('Prey Captured!', 'The vibrations alerted Prof. Webster. +25 XP!', 'xp');
      store.awardXP(25);
    }, 1300);
  });

  submitBtn.addEventListener('click', () => {
    store.awardXP(50);
    showToast('Web Certified!', 'Prof. Webster gave your web structural an A grade! +50 XP', 'achievement');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Certified by Webster ✓';
  });

  setTimeout(resize, 50);
  window.addEventListener('resize', resize);
}
