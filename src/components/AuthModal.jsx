import { useState } from 'react';
import Modal from './Modal';
import { useAuth } from '../context/AuthContext';
import { showToast } from '../utils/effects';

export default function AuthModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('signin');
  const { signIn, register } = useAuth();

  // Sign In state
  const [signinEmail, setSigninEmail] = useState('');
  const [signinPassword, setSigninPassword] = useState('');

  // Register state
  const [regName, setRegName] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');

  // Password visibility
  const [showSigninPw, setShowSigninPw] = useState(false);
  const [showRegPw, setShowRegPw] = useState(false);
  const [showRegConfirmPw, setShowRegConfirmPw] = useState(false);

  const getPasswordStrength = (pw) => {
    let s = 0;
    if (pw.length >= 6) s++;
    if (pw.length >= 8) s++;
    if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) s++;
    if (/[0-9]/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw)) s++;
    if (s <= 1) return 'weak';
    if (s === 2) return 'medium';
    if (s === 3) return 'strong';
    return 'very-strong';
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const result = signIn(signinEmail, signinPassword);
    if (result.success) {
      onClose();
      showToast(`👋 Welcome back, ${result.user.name.split(' ')[0]}!`);
      setSigninEmail(''); setSigninPassword('');
    } else {
      showToast(`❌ ${result.error}`, true);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (regPassword !== regConfirmPassword) {
      showToast('❌ Passwords do not match.', true);
      return;
    }
    if (regPassword.length < 6) {
      showToast('❌ Password must be at least 6 characters.', true);
      return;
    }
    const result = register(regName, regEmail, regPassword);
    if (result.success) {
      onClose();
      showToast(`🎉 Welcome to PENSA-UMaT, ${result.user.name.split(' ')[0]}! Your account has been created.`);
      setRegName(''); setRegEmail(''); setRegPassword(''); setRegConfirmPassword('');
    } else {
      showToast(`❌ ${result.error}`, true);
    }
  };

  const strengthClass = regPassword ? `password-strength password-strength--${getPasswordStrength(regPassword)}` : 'password-strength';

  return (
    <Modal id="authModal" isOpen={isOpen} onClose={onClose}>
      <h3 className="modal__title" style={{ marginBottom: '4px' }}>Welcome to PENSA–UMaT</h3>
      <p className="modal__subtitle">Christ in You — The Hope of Glory</p>
      <div className="auth-tabs">
        <button className={`auth-tab ${activeTab === 'signin' ? 'active' : ''}`} onClick={() => setActiveTab('signin')}>Sign In</button>
        <button className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`} onClick={() => setActiveTab('register')}>Create Account</button>
      </div>

      {/* Sign In Panel */}
      <div className={`auth-panel ${activeTab === 'signin' ? 'active' : ''}`}>
        <form onSubmit={handleSignIn}>
          <div className="form-group">
            <label htmlFor="signinEmail">Email Address</label>
            <input type="email" id="signinEmail" placeholder="Enter your email" required value={signinEmail} onChange={e => setSigninEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="signinPassword">Password</label>
            <div className="password-field">
              <input type={showSigninPw ? 'text' : 'password'} id="signinPassword" placeholder="Enter your password" required value={signinPassword} onChange={e => setSigninPassword(e.target.value)} />
              <span className="password-toggle" onClick={() => setShowSigninPw(!showSigninPw)}>{showSigninPw ? '🙈' : '👁'}</span>
            </div>
          </div>
          <div className="auth-options">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="btn btn--dark btn--block">Sign In →</button>
        </form>
      </div>

      {/* Register Panel */}
      <div className={`auth-panel ${activeTab === 'register' ? 'active' : ''}`}>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="registerName">Full Name</label>
            <input type="text" id="registerName" placeholder="Enter your full name" required value={regName} onChange={e => setRegName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="registerEmail">Email Address</label>
            <input type="email" id="registerEmail" placeholder="Enter your email" required value={regEmail} onChange={e => setRegEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="registerPassword">Password</label>
            <div className="password-field">
              <input type={showRegPw ? 'text' : 'password'} id="registerPassword" placeholder="Create a password (min 6 chars)" required minLength="6" value={regPassword} onChange={e => setRegPassword(e.target.value)} />
              <span className="password-toggle" onClick={() => setShowRegPw(!showRegPw)}>{showRegPw ? '🙈' : '👁'}</span>
            </div>
            <div className={strengthClass}>
              <div className="password-strength__bar"></div>
              <div className="password-strength__bar"></div>
              <div className="password-strength__bar"></div>
              <div className="password-strength__bar"></div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="registerConfirmPassword">Confirm Password</label>
            <div className="password-field">
              <input type={showRegConfirmPw ? 'text' : 'password'} id="registerConfirmPassword" placeholder="Confirm your password" required value={regConfirmPassword} onChange={e => setRegConfirmPassword(e.target.value)} />
              <span className="password-toggle" onClick={() => setShowRegConfirmPw(!showRegConfirmPw)}>{showRegConfirmPw ? '🙈' : '👁'}</span>
            </div>
          </div>
          <button type="submit" className="btn btn--primary btn--block">Create Account →</button>
        </form>
      </div>
    </Modal>
  );
}
