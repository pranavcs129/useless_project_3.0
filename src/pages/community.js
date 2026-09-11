// ============================================
// BUGLEARN — Community (BugBoard) Page
// ============================================

import { renderNavbar } from '../components/navbar.js';
import { renderFooter } from '../components/footer.js';
import { COMMUNITY_POSTS, getFilteredPosts } from '../data/community.js';
import { store } from '../state/store.js';
import { showToast } from '../components/toast.js';

export async function render(container) {
  const categories = ['All', 'Questions', 'Study Tips', 'General', 'Celebration'];
  const profile = store.getProfile();

  container.innerHTML = '';
  container.appendChild(renderNavbar());

  const main = document.createElement('main');
  main.innerHTML = `
    <section style="padding: var(--space-32) 0 var(--space-8);">
      <div class="container">
        <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: var(--space-4);">
          <div>
            <div class="section-label">Community</div>
            <h1 class="section-title" style="font-size: var(--text-5xl);"><span class="text-italic-accent">BugBoard</span></h1>
            <p class="section-subtitle">Discuss. Share. Learn together.</p>
          </div>
          ${profile ? `<button class="btn btn--primary" id="new-post-btn">✏️ New Post</button>` : ''}
        </div>
      </div>
    </section>

    <section class="section--sm">
      <div class="container" style="max-width: var(--container-lg);">
        <div class="tabs" style="margin-bottom: var(--space-6);">
          ${categories.map((cat, i) => `
            <button class="tab ${i === 0 ? 'tab--active' : ''}" data-category="${cat}">${cat}</button>
          `).join('')}
        </div>

        <div id="posts-feed">
          ${renderPosts(COMMUNITY_POSTS)}
        </div>
      </div>
    </section>
  `;

  container.appendChild(main);
  container.appendChild(renderFooter());

  // Category filtering
  container.querySelectorAll('[data-category]').forEach(tab => {
    tab.addEventListener('click', () => {
      container.querySelectorAll('[data-category]').forEach(t => t.classList.remove('tab--active'));
      tab.classList.add('tab--active');
      const category = tab.dataset.category;
      const filtered = category === 'All' ? COMMUNITY_POSTS : getFilteredPosts(category);
      container.querySelector('#posts-feed').innerHTML = renderPosts(filtered);
      attachLikeHandlers(container);
    });
  });

  // Like handlers
  attachLikeHandlers(container);

  // New post
  const newPostBtn = container.querySelector('#new-post-btn');
  if (newPostBtn) {
    newPostBtn.addEventListener('click', () => {
      const title = prompt('Post title:');
      if (!title) return;
      const body = prompt('Post body:');
      if (!body) return;

      const feed = container.querySelector('#posts-feed');
      const newPost = `
        <div class="post-card" style="animation: fadeInUp var(--duration-normal) var(--ease-out);">
          <div class="post-card__header">
            <div class="avatar avatar--sm">${profile.emoji}</div>
            <div>
              <div class="post-card__author">${profile.name}</div>
              <div class="post-card__species">${profile.species} · Just now</div>
            </div>
          </div>
          <div class="post-card__title">${title}</div>
          <div class="post-card__body">${body}</div>
          <div class="post-card__actions">
            <span class="post-card__action">❤️ 1</span>
            <span class="post-card__action">💬 0</span>
          </div>
        </div>
      `;
      feed.insertAdjacentHTML('afterbegin', newPost);

      store.incrementCommunityPosts();
      showToast('Post Published!', 'Your post is now live on BugBoard.', 'success');
    });
  }
}

function renderPosts(posts) {
  return posts.map(post => `
    <div class="post-card">
      <div class="post-card__header">
        <div class="avatar avatar--sm">${post.emoji}</div>
        <div>
          <div class="post-card__author">${post.author}</div>
          <div class="post-card__species">${post.species} · ${post.timestamp}</div>
        </div>
        <span class="badge badge--info" style="margin-left: auto;">${post.category}</span>
      </div>
      <div class="post-card__title">${post.title}</div>
      <div class="post-card__body">${post.body}</div>
      ${post.comments.length > 0 ? `
        <div style="margin-top: var(--space-3); padding-top: var(--space-3); border-top: 1px solid var(--border-light);">
          ${post.comments.map(c => `
            <div style="display: flex; gap: var(--space-2); padding: var(--space-2) 0; font-size: var(--text-sm);">
              <span>${c.emoji}</span>
              <div>
                <span style="font-weight: var(--weight-semibold);">${c.author}</span>
                <span style="color: var(--text-secondary);"> ${c.body}</span>
                <span style="color: var(--text-tertiary); font-size: var(--text-xs);"> · ❤️ ${c.likes}</span>
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}
      <div class="post-card__actions">
        <span class="post-card__action" data-like="${post.id}">❤️ <span>${post.likes}</span></span>
        <span class="post-card__action">💬 ${post.comments.length}</span>
      </div>
    </div>
  `).join('');
}

function attachLikeHandlers(container) {
  container.querySelectorAll('[data-like]').forEach(btn => {
    btn.addEventListener('click', () => {
      const span = btn.querySelector('span');
      const current = parseInt(span.textContent);
      span.textContent = current + 1;
      btn.style.color = 'var(--accent-coral)';
    });
  });
}
