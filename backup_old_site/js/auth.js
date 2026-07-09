/* ===================================================
   PENSA-UMaT — Authentication System
   Client-side auth using localStorage (demo)
   In production, replace with real API calls to backend
   =================================================== */

const AUTH_KEY = 'pensaumat_user';

// =====================================================
// AUTH STATE
// =====================================================
function getCurrentUser() {
  const data = localStorage.getItem(AUTH_KEY);
  return data ? JSON.parse(data) : null;
}

function setCurrentUser(user) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(user));
}

function clearCurrentUser() {
  localStorage.removeItem(AUTH_KEY);
}

function isAuthenticated() {
  return getCurrentUser() !== null;
}

// =====================================================
// UI UPDATES ON PAGE LOAD
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
  updateAuthUI();
  initAuthForms();
  initUserMenu();
  checkBirthdayGate();
});

function updateAuthUI() {
  const user = getCurrentUser();
  const signInBtn = document.getElementById('signInBtn');
  const userMenu = document.getElementById('userMenu');

  if (user && signInBtn && userMenu) {
    // Hide Sign In, show User Menu
    signInBtn.style.display = 'none';
    userMenu.classList.add('active');
    
    // Set user info
    const avatar = userMenu.querySelector('.user-menu__avatar');
    const nameEl = userMenu.querySelector('.user-menu__dropdown-name');
    const emailEl = userMenu.querySelector('.user-menu__dropdown-email');
    const triggerName = userMenu.querySelector('.user-menu__trigger-name');
    
    if (avatar) avatar.textContent = user.name.charAt(0).toUpperCase();
    if (nameEl) nameEl.textContent = user.name;
    if (emailEl) emailEl.textContent = user.email;
    if (triggerName) triggerName.textContent = user.name.split(' ')[0];
  } else if (signInBtn) {
    signInBtn.style.display = '';
    if (userMenu) userMenu.classList.remove('active');
  }
}

// =====================================================
// AUTH MODAL
// =====================================================
function openAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    // Default to sign-in tab
    switchAuthTab('signin');
  }
}

function closeAuthModal() {
  const modal = document.getElementById('authModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tab);
  });
  document.querySelectorAll('.auth-panel').forEach(p => {
    p.classList.toggle('active', p.id === `${tab}Panel`);
  });
}

// =====================================================
// AUTH FORMS
// =====================================================
function initAuthForms() {
  // Sign In Form
  const signinForm = document.getElementById('signinForm');
  if (signinForm) {
    signinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('signinEmail').value;
      const password = document.getElementById('signinPassword').value;

      // Demo: check registered users in localStorage
      const users = JSON.parse(localStorage.getItem('pensaumat_users') || '[]');
      const user = users.find(u => u.email === email && u.password === password);

      if (user) {
        setCurrentUser({ name: user.name, email: user.email });
        closeAuthModal();
        updateAuthUI();
        checkBirthdayGate();
        showAuthToast(`👋 Welcome back, ${user.name.split(' ')[0]}!`);
        signinForm.reset();
      } else {
        showAuthToast('❌ Invalid email or password. Please try again.', true);
      }
    });
  }

  // Register Form
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('registerName').value;
      const email = document.getElementById('registerEmail').value;
      const password = document.getElementById('registerPassword').value;
      const confirmPassword = document.getElementById('registerConfirmPassword').value;

      if (password !== confirmPassword) {
        showAuthToast('❌ Passwords do not match.', true);
        return;
      }

      if (password.length < 6) {
        showAuthToast('❌ Password must be at least 6 characters.', true);
        return;
      }

      // Store user in localStorage
      const users = JSON.parse(localStorage.getItem('pensaumat_users') || '[]');
      
      if (users.find(u => u.email === email)) {
        showAuthToast('❌ An account with this email already exists.', true);
        return;
      }

      users.push({ name, email, password });
      localStorage.setItem('pensaumat_users', JSON.stringify(users));

      // Auto sign in
      setCurrentUser({ name, email });
      closeAuthModal();
      updateAuthUI();
      checkBirthdayGate();
      showAuthToast(`🎉 Welcome to PENSA-UMaT, ${name.split(' ')[0]}! Your account has been created.`);
      registerForm.reset();
    });
  }

  // Auth modal close handlers
  const authModal = document.getElementById('authModal');
  if (authModal) {
    authModal.addEventListener('click', (e) => {
      if (e.target === authModal) closeAuthModal();
    });
    const closeBtn = authModal.querySelector('.modal__close');
    if (closeBtn) closeBtn.addEventListener('click', closeAuthModal);
  }

  // Tab switching
  document.querySelectorAll('.auth-tab').forEach(tab => {
    tab.addEventListener('click', () => switchAuthTab(tab.dataset.tab));
  });

  // Password visibility toggles
  document.querySelectorAll('.password-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const input = toggle.previousElementSibling;
      if (input.type === 'password') {
        input.type = 'text';
        toggle.textContent = '🙈';
      } else {
        input.type = 'password';
        toggle.textContent = '👁';
      }
    });
  });

  // Password strength indicator
  const regPassword = document.getElementById('registerPassword');
  if (regPassword) {
    regPassword.addEventListener('input', () => {
      updatePasswordStrength(regPassword.value);
    });
  }
}

// =====================================================
// PASSWORD STRENGTH
// =====================================================
function updatePasswordStrength(password) {
  const strengthEl = document.querySelector('.password-strength');
  if (!strengthEl) return;

  let strength = 0;
  if (password.length >= 6) strength++;
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  strengthEl.className = 'password-strength';
  if (strength <= 1) strengthEl.classList.add('password-strength--weak');
  else if (strength === 2) strengthEl.classList.add('password-strength--medium');
  else if (strength === 3) strengthEl.classList.add('password-strength--strong');
  else strengthEl.classList.add('password-strength--very-strong');
}

// =====================================================
// USER MENU
// =====================================================
function initUserMenu() {
  const trigger = document.querySelector('.user-menu__trigger');
  const dropdown = document.querySelector('.user-menu__dropdown');

  if (trigger && dropdown) {
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });

    document.addEventListener('click', () => {
      dropdown.classList.remove('open');
    });

    dropdown.addEventListener('click', (e) => e.stopPropagation());
  }

  // Sign out button
  const signOutBtn = document.getElementById('signOutBtn');
  if (signOutBtn) {
    signOutBtn.addEventListener('click', () => {
      clearCurrentUser();
      updateAuthUI();
      checkBirthdayGate();
      showAuthToast('👋 You have been signed out.');
      const dropdown = document.querySelector('.user-menu__dropdown');
      if (dropdown) dropdown.classList.remove('open');
    });
  }
}

// =====================================================
// BIRTHDAY AUTH GATE
// =====================================================
function checkBirthdayGate() {
  const gate = document.getElementById('authGate');
  const content = document.getElementById('birthdaysContent');

  if (!gate || !content) return;

  if (isAuthenticated()) {
    gate.style.display = 'none';
    content.style.display = '';
  } else {
    gate.style.display = '';
    content.style.display = 'none';
  }
}

// =====================================================
// TOAST HELPER
// =====================================================
function showAuthToast(message, isError = false) {
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
