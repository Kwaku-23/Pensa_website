import { useState } from 'react';
import Modal from './Modal';
import { useAuth } from '../context/AuthContext';
import { showToast } from '../utils/effects';

export default function AuthModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('register'); // Default to register for new members
  const { signIn, register } = useAuth();
  const [loading, setLoading] = useState(false);

  // Sign In state
  const [signinEmail, setSigninEmail] = useState('');
  const [signinPassword, setSigninPassword] = useState('');

  // Register state
  const [regFullName, setRegFullName] = useState('');
  const [regProgramme, setRegProgramme] = useState('');
  const [regLevel, setRegLevel] = useState('');
  const [regHall, setRegHall] = useState('');
  const [regFamilyUnit, setRegFamilyUnit] = useState('');
  const [regContact, setRegContact] = useState('');
  const [regBirthday, setRegBirthday] = useState(''); // E.g., '14 May'
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [regConfirmPassword, setRegConfirmPassword] = useState('');

  // Password visibility
  const [showSigninPw, setShowSigninPw] = useState(false);
  const [showRegPw, setShowRegPw] = useState(false);
  const [showRegConfirmPw, setShowRegConfirmPw] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await signIn(signinEmail, signinPassword);
    setLoading(false);
    
    if (error) {
      showToast(`❌ ${error.message}`, true);
    } else {
      onClose();
      showToast(`👋 Welcome back!`);
      setSigninEmail(''); setSigninPassword('');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (regPassword !== regConfirmPassword) {
      showToast('❌ Passwords do not match.', true);
      return;
    }
    
    setLoading(true);
    
    const metadata = {
      full_name: regFullName,
      programme: regProgramme,
      academic_level: regLevel,
      hall: regHall,
      family_unit: regFamilyUnit,
      contact: regContact,
      birthday: regBirthday
    };

    const { data, error } = await register(regEmail, regPassword, metadata);
    setLoading(false);

    if (error) {
      showToast(`❌ ${error.message}`, true);
    } else {
      onClose();
      showToast(`🎉 Registration successful! Welcome to PENSA-UMaT.`);
      // Clear form
      setRegFullName(''); setRegProgramme(''); setRegLevel(''); setRegHall(''); setRegFamilyUnit('');
      setRegContact(''); setRegBirthday(''); setRegEmail(''); setRegPassword(''); setRegConfirmPassword('');
    }
  };

  return (
    <Modal id="authModal" isOpen={isOpen} onClose={onClose}>
      <h3 className="modal__title" style={{ marginBottom: '4px' }}>Welcome to PENSA–UMaT</h3>
      <p className="modal__subtitle">Christ in You — The Hope of Glory</p>
      <div className="auth-tabs">
        <button className={`auth-tab ${activeTab === 'register' ? 'active' : ''}`} onClick={() => setActiveTab('register')}>Register</button>
        <button className={`auth-tab ${activeTab === 'signin' ? 'active' : ''}`} onClick={() => setActiveTab('signin')}>Sign In</button>
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
          <button type="submit" className="btn btn--dark btn--block" disabled={loading}>
            {loading ? 'Signing In...' : 'Sign In →'}
          </button>
        </form>
      </div>

      {/* Register Panel */}
      <div className={`auth-panel ${activeTab === 'register' ? 'active' : ''}`} style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: '10px' }}>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="regFullName">Full Name</label>
            <input type="text" id="regFullName" placeholder="E.g. John Doe" required value={regFullName} onChange={e => setRegFullName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="regProgramme">Programme of Study</label>
            <input type="text" id="regProgramme" placeholder="E.g. BSc Computer Science" required value={regProgramme} onChange={e => setRegProgramme(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="regLevel">Year / Level</label>
            <select id="regLevel" required value={regLevel} onChange={e => setRegLevel(e.target.value)}>
              <option value="">Select Level</option>
              <option value="100">Level 100</option>
              <option value="200">Level 200</option>
              <option value="300">Level 300</option>
              <option value="400">Level 400</option>
              <option value="Postgrad">Postgraduate</option>
              <option value="Alumni">Alumni</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="regHall">Hall / Hostel</label>
            <input type="text" id="regHall" placeholder="E.g. Chamber of Mines" required value={regHall} onChange={e => setRegHall(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="regFamilyUnit">Family Unit</label>
            <input type="text" id="regFamilyUnit" placeholder="E.g. Bethel Family" required value={regFamilyUnit} onChange={e => setRegFamilyUnit(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="regContact">Contact Number</label>
            <input type="tel" id="regContact" placeholder="E.g. 024XXXXXXX" required value={regContact} onChange={e => setRegContact(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="regBirthday">Birthday (Day/Month)</label>
            <input type="text" id="regBirthday" placeholder="E.g. 14 May" required value={regBirthday} onChange={e => setRegBirthday(e.target.value)} />
          </div>

          <hr style={{ margin: '1.5rem 0', borderColor: 'var(--gray-200)' }} />

          <div className="form-group">
            <label htmlFor="regEmail">Email Address</label>
            <input type="email" id="regEmail" placeholder="Enter your email" required value={regEmail} onChange={e => setRegEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="regPassword">Password</label>
            <div className="password-field">
              <input type={showRegPw ? 'text' : 'password'} id="regPassword" placeholder="Create a password (min 6 chars)" required minLength="6" value={regPassword} onChange={e => setRegPassword(e.target.value)} />
              <span className="password-toggle" onClick={() => setShowRegPw(!showRegPw)}>{showRegPw ? '🙈' : '👁'}</span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="regConfirmPassword">Confirm Password</label>
            <div className="password-field">
              <input type={showRegConfirmPw ? 'text' : 'password'} id="regConfirmPassword" placeholder="Confirm your password" required value={regConfirmPassword} onChange={e => setRegConfirmPassword(e.target.value)} />
              <span className="password-toggle" onClick={() => setShowRegConfirmPw(!showRegConfirmPw)}>{showRegConfirmPw ? '🙈' : '👁'}</span>
            </div>
          </div>
          <button type="submit" className="btn btn--primary btn--block" disabled={loading}>
            {loading ? 'Creating Account...' : 'Complete Registration →'}
          </button>
        </form>
      </div>
    </Modal>
  );
}
