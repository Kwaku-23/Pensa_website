/* ===================================================
   PENSA-UMaT Church Website — Main JavaScript
   "Christ in You — The Hope of Glory"
   ✦ Premium Interactive Redesign
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initNavDropdown();
  initActivePageHighlight();
  initNavbarScroll();
  initModals();
  initVideoModal();
  initSermonFilters();
  initLoadMore();
  initCelebrations();
  initJoinDepartment();
  initJoinFamily();
  initScrollAnimations();
  initParticles();
  initCounterAnimation();
  initTiltEffect();
  initRippleEffect();
  initTypingEffect();
});

/* =====================================================
   NAVBAR SCROLL BEHAVIOR
   ===================================================== */
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    const scrollThreshold = 50;

    if (window.scrollY > scrollThreshold) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });

  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    const observer = new MutationObserver(() => {
      if (hamburger.classList.contains('active')) {
        navbar.classList.add('navbar--scrolled');
      } else {
        handleScroll();
      }
    });
    observer.observe(hamburger, { attributes: true, attributeFilter: ['class'] });
  }
}

/* =====================================================
   NAVIGATION
   ===================================================== */
function initNavigation() {
  const hamburger = document.querySelector('.navbar__hamburger');
  const navLinks = document.querySelector('.navbar__links');
  
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu on link click
  navLinks.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });
}

/* =====================================================
   ACTIVE PAGE HIGHLIGHT
   ===================================================== */
function initActivePageHighlight() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const aboutSubPages = ['about.html', 'leadership.html', 'family.html'];
  
  document.querySelectorAll('.navbar__link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || 
        (currentPage === '' && href === 'index.html') ||
        (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('navbar__link--active');
    }
  });

  // Highlight About dropdown toggle if on any about sub-page
  if (aboutSubPages.includes(currentPage)) {
    document.querySelectorAll('.navbar__dropdown-toggle').forEach(toggle => {
      toggle.classList.add('navbar__dropdown-toggle--active');
    });
    // Highlight the specific sub-item
    document.querySelectorAll('.navbar__dropdown-item').forEach(item => {
      const href = item.getAttribute('href');
      if (href === currentPage) {
        item.classList.add('navbar__dropdown-item--active');
      }
    });
  }
}

/* =====================================================
   NAVBAR DROPDOWN (Mobile Toggle)
   ===================================================== */
function initNavDropdown() {
  const dropdowns = document.querySelectorAll('.navbar__dropdown');
  
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.navbar__dropdown-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('open');
      // Close all dropdowns first
      dropdowns.forEach(d => d.classList.remove('open'));
      if (!isOpen) {
        dropdown.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
      } else {
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar__dropdown')) {
      dropdowns.forEach(d => {
        d.classList.remove('open');
        const toggle = d.querySelector('.navbar__dropdown-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
    }
  });
}

/* =====================================================
   MODAL SYSTEM
   ===================================================== */
function initModals() {
  // Close modal on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  // Close modal on close button
  document.querySelectorAll('.modal__close').forEach(btn => {
    btn.addEventListener('click', () => {
      const overlay = btn.closest('.modal-overlay');
      if (overlay) closeModal(overlay);
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(closeModal);
    }
  });
}

function openModal(id) {
  const overlay = document.getElementById(id);
  if (overlay) {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(overlayOrId) {
  const overlay = typeof overlayOrId === 'string' 
    ? document.getElementById(overlayOrId) 
    : overlayOrId;
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* =====================================================
   VIDEO MODAL
   ===================================================== */
function initVideoModal() {
  document.querySelectorAll('[data-video]').forEach(trigger => {
    trigger.addEventListener('click', () => {
      openModal('videoModal');
    });
  });
}

/* =====================================================
   SERMON FILTERS
   ===================================================== */
function initSermonFilters() {
  const seriesFilter = document.getElementById('filterSeries');
  const speakerFilter = document.getElementById('filterSpeaker');
  const searchInput = document.getElementById('filterSearch');
  const resetBtn = document.getElementById('resetFilters');

  if (!seriesFilter) return;

  const filterSermons = () => {
    const series = seriesFilter.value.toLowerCase();
    const speaker = speakerFilter.value.toLowerCase();
    const search = searchInput.value.toLowerCase().trim();

    let visibleCount = 0;

    document.querySelectorAll('.sermon-card').forEach(card => {
      const cardSeries = (card.dataset.series || '').toLowerCase();
      const cardSpeaker = (card.dataset.speaker || '').toLowerCase();
      const cardTitle = (card.querySelector('.sermon-card__title')?.textContent || '').toLowerCase();

      const matchSeries = !series || cardSeries === series;
      const matchSpeaker = !speaker || cardSpeaker === speaker;
      const matchSearch = !search || cardTitle.includes(search) || cardSpeaker.includes(search);

      if (matchSeries && matchSpeaker && matchSearch) {
        card.style.display = '';
        card.classList.remove('hidden');
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    const countEl = document.querySelector('.sermon-grid__count');
    if (countEl) {
      countEl.textContent = `Showing ${visibleCount} sermons`;
    }
  };

  seriesFilter.addEventListener('change', filterSermons);
  speakerFilter.addEventListener('change', filterSermons);
  searchInput.addEventListener('input', filterSermons);

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      seriesFilter.value = '';
      speakerFilter.value = '';
      searchInput.value = '';
      filterSermons();
    });
  }
}

/* =====================================================
   LOAD MORE
   ===================================================== */
function initLoadMore() {
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (!loadMoreBtn) return;

  loadMoreBtn.addEventListener('click', () => {
    const hiddenCards = document.querySelectorAll('.sermon-card.hidden');
    let revealed = 0;
    hiddenCards.forEach(card => {
      if (revealed < 3) {
        card.classList.remove('hidden');
        card.style.display = '';
        card.style.animation = 'fadeInUp 0.5s ease forwards';
        revealed++;
      }
    });

    // Update count
    const allVisible = document.querySelectorAll('.sermon-card:not(.hidden)').length;
    const countEl = document.querySelector('.sermon-grid__count');
    if (countEl) {
      countEl.textContent = `Showing ${allVisible} sermons`;
    }

    // Hide load more if no more hidden cards
    const remaining = document.querySelectorAll('.sermon-card.hidden').length;
    if (remaining === 0) {
      loadMoreBtn.style.display = 'none';
    }
  });
}

/* =====================================================
   CELEBRATIONS (Birthdays)
   ===================================================== */
function initCelebrations() {
  // Send Celebration buttons
  document.querySelectorAll('[data-celebrate]').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.celebrate;
      openModal('celebrationModal');
      const titleEl = document.querySelector('#celebrationModal .modal__title');
      if (titleEl) titleEl.textContent = `🎉 Celebrate ${name}!`;
    });
  });

  // Quick celebrate in "Later This Month"
  document.querySelectorAll('.later-month__action').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      showConfetti();
      showToast(`🎂 Birthday wishes sent to ${name}!`);
    });
  });

  // Write Message buttons
  document.querySelectorAll('[data-message]').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.message;
      openModal('messageModal');
      const titleEl = document.querySelector('#messageModal .modal__title');
      if (titleEl) titleEl.textContent = `Write a message to ${name}`;
    });
  });

  // Update Details button
  const updateBtn = document.getElementById('updateDetailsBtn');
  if (updateBtn) {
    updateBtn.addEventListener('click', () => {
      openModal('updateModal');
    });
  }

  // Celebration form submit
  const celebrationForm = document.getElementById('celebrationForm');
  if (celebrationForm) {
    celebrationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal('celebrationModal');
      showConfetti();
      showToast('🎉 Celebration sent successfully!');
      celebrationForm.reset();
    });
  }

  // Message form submit
  const messageForm = document.getElementById('messageForm');
  if (messageForm) {
    messageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal('messageModal');
      showToast('✉️ Message sent successfully!');
      messageForm.reset();
    });
  }

  // Update form submit
  const updateForm = document.getElementById('updateForm');
  if (updateForm) {
    updateForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal('updateModal');
      showToast('✅ Birthday details submitted!');
      updateForm.reset();
    });
  }
}

/* =====================================================
   JOIN DEPARTMENT
   ===================================================== */
function initJoinDepartment() {
  document.querySelectorAll('[data-join-dept]').forEach(btn => {
    btn.addEventListener('click', () => {
      const dept = btn.dataset.joinDept;
      openModal('joinDeptModal');
      const titleEl = document.querySelector('#joinDeptModal .modal__title');
      if (titleEl) titleEl.textContent = `Join ${dept}`;
      const deptInput = document.getElementById('joinDeptName');
      if (deptInput) deptInput.value = dept;
    });
  });

  // Contact Leadership
  const contactLeaderBtn = document.getElementById('contactLeadershipBtn');
  if (contactLeaderBtn) {
    contactLeaderBtn.addEventListener('click', () => {
      openModal('contactModal');
    });
  }

  // Department form submit
  const joinForm = document.getElementById('joinDeptForm');
  if (joinForm) {
    joinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const dept = document.getElementById('joinDeptName')?.value;
      closeModal('joinDeptModal');
      showToast(`🙏 Request to join ${dept} submitted!`);
      joinForm.reset();
    });
  }

  // Contact form submit
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal('contactModal');
      showToast('📩 Message sent to leadership team!');
      contactForm.reset();
    });
  }
}

/* =====================================================
   JOIN FAMILY (Zones)
   ===================================================== */
function initJoinFamily() {
  document.querySelectorAll('[data-join-family]').forEach(btn => {
    btn.addEventListener('click', () => {
      const family = btn.dataset.joinFamily;
      openModal('joinFamilyModal');
      const titleEl = document.querySelector('#joinFamilyModal .modal__title');
      if (titleEl) titleEl.textContent = `Join ${family}`;
      const familyInput = document.getElementById('joinFamilyName');
      if (familyInput) familyInput.value = family;
    });
  });

  // Contact Zone Leader
  const contactZoneBtn = document.getElementById('contactZoneLeaderBtn');
  if (contactZoneBtn) {
    contactZoneBtn.addEventListener('click', () => {
      openModal('contactZoneModal');
    });
  }

  // Family form submit
  const joinFamilyForm = document.getElementById('joinFamilyForm');
  if (joinFamilyForm) {
    joinFamilyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const family = document.getElementById('joinFamilyName')?.value;
      closeModal('joinFamilyModal');
      showToast(`🏠 Welcome! Request to join ${family} submitted!`);
      joinFamilyForm.reset();
    });
  }

  // Contact zone form submit
  const contactZoneForm = document.getElementById('contactZoneForm');
  if (contactZoneForm) {
    contactZoneForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal('contactZoneModal');
      showToast('📩 Message sent to zone leaders!');
      contactZoneForm.reset();
    });
  }
}

/* =====================================================
   CONFETTI ANIMATION
   ===================================================== */
function showConfetti() {
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

/* =====================================================
   TOAST NOTIFICATION
   ===================================================== */
function showToast(message) {
  // Remove existing toasts
  document.querySelectorAll('.toast').forEach(t => t.remove());

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span class="toast__text">${message}</span>`;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('active');
  });

  setTimeout(() => {
    toast.classList.remove('active');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

/* =====================================================
   SCROLL ANIMATIONS (Enhanced with stagger)
   ===================================================== */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Stagger delay for grid items
        const parent = entry.target.parentElement;
        if (parent) {
          const siblings = Array.from(parent.children);
          const index = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${index * 0.1}s`;
        }
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.event-card, .dept-card, .sermon-card, .birthday-card, .leader-card, .leader-card-lg, .family-card, .timeline__item, .mv-card, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
    observer.observe(el);
  });
}

/* =====================================================
   PARTICLE SYSTEM (Hero Background)
   ===================================================== */
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;

  const colors = [
    'rgba(245, 216, 0, 0.4)',
    'rgba(245, 216, 0, 0.2)',
    'rgba(181, 28, 46, 0.25)',
    'rgba(255, 255, 255, 0.15)',
    'rgba(255, 255, 255, 0.08)',
    'rgba(245, 216, 0, 0.15)',
  ];

  function createParticle() {
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

    container.appendChild(particle);
  }

  // Create particles
  const particleCount = window.innerWidth < 768 ? 20 : 40;
  for (let i = 0; i < particleCount; i++) {
    createParticle();
  }
}

/* =====================================================
   COUNTER ANIMATION (Stats Section)
   ===================================================== */
function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const duration = 2000; // 2 seconds
        const startTime = performance.now();

        function updateCount(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * target);

          el.textContent = current + '+';

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          }
        }

        requestAnimationFrame(updateCount);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(counter => observer.observe(counter));
}

/* =====================================================
   TILT EFFECT (Cards)
   ===================================================== */
function initTiltEffect() {
  // Only enable on non-touch devices
  if ('ontouchstart' in window) return;

  const cards = document.querySelectorAll('.event-card, .sermon-card, .dept-card, .family-card, .leader-card-lg, .stat-item');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / centerY * -3; // max 3 degrees
      const rotateY = (x - centerX) / centerX * 3;

      card.style.transform = `translateY(-8px) perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
      setTimeout(() => {
        card.style.transition = '';
      }, 400);
    });
  });
}

/* =====================================================
   RIPPLE EFFECT (Buttons)
   ===================================================== */
function initRippleEffect() {
  document.querySelectorAll('.btn').forEach(btn => {
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

/* =====================================================
   TYPING EFFECT (Hero Subtitle)
   ===================================================== */
function initTypingEffect() {
  const subtitle = document.getElementById('heroSubtitle');
  if (!subtitle) return;

  const fullText = subtitle.textContent.trim();
  const italic = subtitle.querySelector('i');
  const text = italic ? italic.textContent.trim() : fullText;

  // Clear the text initially
  if (italic) {
    italic.textContent = '';
    italic.style.borderRight = '2px solid var(--gold-500)';
    italic.style.paddingRight = '2px';
    italic.style.animation = 'typing-cursor 1s step-end infinite';
  }

  let i = 0;
  const speed = 50; // ms per character

  function typeChar() {
    if (i < text.length) {
      if (italic) {
        italic.textContent += text.charAt(i);
      }
      i++;
      setTimeout(typeChar, speed);
    } else {
      // Remove cursor after typing completes
      setTimeout(() => {
        if (italic) {
          italic.style.borderRight = 'none';
          italic.style.animation = 'none';
        }
      }, 1500);
    }
  }

  // Start typing after a brief delay
  setTimeout(typeChar, 800);
}

/* =====================================================
   CSS INJECTION FOR ANIMATIONS
   ===================================================== */
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
