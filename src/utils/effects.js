/* ===== Toast Notification ===== */
export function showToast(message, isError = false) {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const toast = document.createElement('div');
  toast.className = 'toast';
  if (isError) toast.style.background = '#991b1b';
  toast.innerHTML = `<span class="toast__text">${message}</span>`;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('active'));
  setTimeout(() => {
    toast.classList.remove('active');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ===== Confetti Animation ===== */
export function showConfetti() {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);
  const colors = ['#f5d800', '#ffe234', '#b51c2e', '#10143c', '#22c55e', '#3b82f6', '#f59e0b', '#ec4899'];
  const shapes = ['square', 'circle'];
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const left = Math.random() * 100;
    const drift = (Math.random() - 0.5) * 200;
    const delay = Math.random() * 0.8;
    const duration = 2 + Math.random() * 2;
    const size = 6 + Math.random() * 8;
    confetti.style.cssText = `
      left: ${left}%;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: ${shape === 'circle' ? '50%' : '2px'};
      --drift: ${drift}px;
      animation: confettiFall ${duration}s ease-in ${delay}s forwards;
    `;
    container.appendChild(confetti);
  }
  setTimeout(() => container.remove(), 5000);
}

/* ===== Particle System ===== */
export function initParticles(containerEl) {
  if (!containerEl) return;
  const colors = [
    'rgba(245, 216, 0, 0.4)',
    'rgba(245, 216, 0, 0.2)',
    'rgba(181, 28, 46, 0.25)',
    'rgba(255, 255, 255, 0.15)',
    'rgba(255, 255, 255, 0.08)',
    'rgba(245, 216, 0, 0.15)',
  ];
  const particleCount = window.innerWidth < 768 ? 20 : 40;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    const size = 2 + Math.random() * 6;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const dx = (Math.random() - 0.5) * 150;
    const dy = (Math.random() - 0.5) * 150;
    const duration = 6 + Math.random() * 8;
    const delay = Math.random() * 4;
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: 50%;
      left: ${startX}%;
      top: ${startY}%;
      --dx: ${dx}px;
      --dy: ${dy}px;
      animation: particle-drift ${duration}s ease-in-out ${delay}s infinite;
      pointer-events: none;
    `;
    containerEl.appendChild(particle);
  }
}

/* ===== Tilt Effect ===== */
export function initTiltEffect(elements) {
  if ('ontouchstart' in window) return;
  elements.forEach(card => {
    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / centerY * -3;
      const rotateY = (x - centerX) / centerX * 3;
      card.style.transform = `translateY(-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    const handleLeave = () => {
      card.style.transform = '';
      card.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      setTimeout(() => { card.style.transition = ''; }, 400);
    };
    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', handleLeave);
  });
}

/* ===== Ripple Effect ===== */
export function initRippleEffect(elements) {
  elements.forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.width = ripple.style.height = `${Math.max(rect.width, rect.height) * 0.5}px`;
      btn.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
    });
  });
}
