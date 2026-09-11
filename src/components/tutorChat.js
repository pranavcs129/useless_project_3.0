// ============================================
// BUGLEARN — Tutor Chat Component
// ============================================

/**
 * Render the tutor chat panel.
 * @param {HTMLElement} container
 * @param {Object} tutor - Tutor data object
 * @returns {Function} cleanup function
 */
export function renderTutorChat(container, tutor) {
  container.innerHTML = `
    <div class="lesson-tutor-panel__header">
      <div style="display: flex; align-items: center; gap: var(--space-2);">
        <div class="avatar">${tutor.avatar || '🐛'}</div>
        <div>
          <div style="font-weight: var(--weight-semibold); font-size: var(--text-sm);">Ask ${tutor.name}</div>
          <div style="font-size: var(--text-xs); color: var(--text-tertiary);">Online</div>
        </div>
      </div>
      <button class="btn btn--ghost btn--sm" id="close-tutor-chat" title="Close">✕</button>
    </div>
    <div class="lesson-tutor-panel__messages" id="chat-messages">
      <div class="chat">
        <div class="chat__message chat__message--tutor">
          Hello! I'm ${tutor.name}. ${getGreeting(tutor)}
        </div>
      </div>
    </div>
    <div class="lesson-tutor-panel__input">
      <input type="text" class="input" placeholder="Ask a question..." id="chat-input" />
      <button class="btn btn--primary btn--sm" id="chat-send">→</button>
    </div>
  `;

  const messagesEl = container.querySelector('#chat-messages .chat');
  const inputEl = container.querySelector('#chat-input');
  const sendBtn = container.querySelector('#chat-send');
  const closeBtn = container.querySelector('#close-tutor-chat');

  function addMessage(text, isStudent = false) {
    const msg = document.createElement('div');
    msg.className = `chat__message chat__message--${isStudent ? 'student' : 'tutor'}`;
    msg.textContent = text;
    messagesEl.appendChild(msg);
    messagesEl.parentElement.scrollTop = messagesEl.parentElement.scrollHeight;
  }

  function showTyping() {
    const typing = document.createElement('div');
    typing.className = 'chat__typing';
    typing.id = 'typing-indicator';
    typing.innerHTML = '<span></span><span></span><span></span>';
    messagesEl.appendChild(typing);
    messagesEl.parentElement.scrollTop = messagesEl.parentElement.scrollHeight;
    return typing;
  }

  function handleSend() {
    const text = inputEl.value.trim();
    if (!text) return;

    addMessage(text, true);
    inputEl.value = '';

    // Simulate tutor response
    const typing = showTyping();
    const delay = 800 + Math.random() * 1200;

    setTimeout(() => {
      typing.remove();
      const response = generateResponse(tutor, text);
      addMessage(response);
    }, delay);
  }

  sendBtn.addEventListener('click', handleSend);
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleSend();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      container.classList.remove('is-open');
    });
  }
}

function getGreeting(tutor) {
  const greetings = {
    'Prof. Antonia': 'Ask me anything about antivirus protocols, threat scanning, or colony defense systems.',
    'Dr. Roach': 'Need chemical resistance formulas or toxic zone evasion tips? You\'ve come to the right cockroach.',
    'Prof. Webster': 'Questions about physical web development and silk tensile architecture? I am always here to discuss structural elegance.',
    'Prof. Buzz': 'Questions on fluid dynamics, leading-edge vortices, or aerodynamic flight efficiency? Let us calculate.',
    'Agent Mozzi': 'This channel is secure. Host penetration inquiries only. Be brief.',
    'Dr. Chrysalis': 'Metamorphic software refactoring takes time. Ask away about your biological release pipeline.',
    'Capt. Fly': 'Questions on high-G aerobatics, 90-degree vector changes, or inverted ceiling landings? Request clearance.',
    'Chef Fly': 'Questions on high-G aerobatics, 90-degree vector changes, or inverted ceiling landings? Request clearance.',
    'Dr. Lucky': 'Ask me a question. Whether I know the answer... well, that\'s probability for you.',
  };
  return greetings[tutor.name] || 'How can I help you today?';
}

function generateResponse(tutor, question) {
  const q = question.toLowerCase();

  // Generic educational responses with tutor personality
  const responses = tutor.quotes || [];

  // Context-aware responses
  if (q.includes('help') || q.includes('stuck') || q.includes('confused')) {
    return `Let me help you with that. The key concept here is to break it down into smaller pieces. ${responses[0] || 'Take it one step at a time.'}`;
  }

  if (q.includes('quiz') || q.includes('test') || q.includes('exam')) {
    return `Preparing for assessment? Good. Review the key concepts from each module. Focus on understanding principles, not memorising facts. ${responses[1] || ''}`;
  }

  if (q.includes('grade') || q.includes('score') || q.includes('pass')) {
    return `Your grade reflects your understanding. Focus on the learning, and the grade will follow. ${responses[2] || ''}`;
  }

  if (q.includes('thank')) {
    return `You're welcome. Keep studying — your potential is remarkable. ${responses[3] || ''}`;
  }

  if (q.includes('joke') || q.includes('funny')) {
    return `I am an academic professional. But if you insist — ${responses[Math.floor(Math.random() * responses.length)] || 'Why did the student cross the leaf? To get to the other module.'}`;
  }

  // Default: pick a quote that matches personality
  const randomQuote = responses[Math.floor(Math.random() * responses.length)];
  return randomQuote || `That\'s a great question. Let me think about it... The answer lies in the material we\'ve covered. Review the current module for insights.`;
}
