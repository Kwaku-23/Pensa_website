import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar({ onOpenAuth }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, isAuthenticated, signOut } = useAuth();
  const location = useLocation();
  const navRef = useRef(null);

  const aboutSubPages = ['/about', '/leadership', '/family'];
  const isAboutActive = aboutSubPages.includes(location.pathname);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force scrolled when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) setIsScrolled(true);
  }, [isMobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (!e.target.closest('.navbar__dropdown')) setIsDropdownOpen(false);
      if (!e.target.closest('.user-menu')) setIsUserMenuOpen(false);
      if (!e.target.closest('.navbar')) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleSignOut = () => {
    signOut();
    setIsUserMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`} id="navbar" ref={navRef}>
      <div className="container">
        <Link to="/" className="navbar__logo">
          <img src="/images/logo.png" alt="PENSA-UMaT Logo" className="navbar__logo-img" />
          PENSA–UMaT
        </Link>

        <div className={`navbar__links ${isMobileOpen ? 'active' : ''}`} id="navLinks">
          <NavLink to="/" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`} end>Home</NavLink>

          <div className={`navbar__dropdown ${isDropdownOpen ? 'open' : ''}`}>
            <button
              className={`navbar__dropdown-toggle ${isAboutActive ? 'navbar__dropdown-toggle--active' : ''}`}
              aria-expanded={isDropdownOpen}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); setIsDropdownOpen(!isDropdownOpen); }}
            >
              About <span className="navbar__dropdown-arrow">▼</span>
            </button>
            <div className="navbar__dropdown-menu">
              <NavLink to="/about" className={({ isActive }) => `navbar__dropdown-item ${isActive ? 'navbar__dropdown-item--active' : ''}`}>
                About Us
              </NavLink>
              <NavLink to="/leadership" className={({ isActive }) => `navbar__dropdown-item ${isActive ? 'navbar__dropdown-item--active' : ''}`}>
                Leadership
              </NavLink>
              <NavLink to="/family" className={({ isActive }) => `navbar__dropdown-item ${isActive ? 'navbar__dropdown-item--active' : ''}`}>
                Family / Zones
              </NavLink>
            </div>
          </div>

          <NavLink to="/sermons" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}>Sermons</NavLink>
          <NavLink to="/events" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}>Events</NavLink>
          <NavLink to="/departments" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}>Departments</NavLink>
          <NavLink to="/give" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}>Give</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}>Contact</NavLink>
          <NavLink to="/birthdays" className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}>Birthdays</NavLink>

          {!isAuthenticated && (
            <a href="#" className="navbar__cta" onClick={(e) => { e.preventDefault(); onOpenAuth(); }}>Sign In</a>
          )}
        </div>

        {/* User Menu */}
        {isAuthenticated && user && (
          <div className={`user-menu active`} id="userMenu">
            <button className="user-menu__trigger" onClick={(e) => { e.stopPropagation(); setIsUserMenuOpen(!isUserMenuOpen); }}>
              <div className="user-menu__avatar">{user.name.charAt(0).toUpperCase()}</div>
              <span className="user-menu__trigger-name">{user.name.split(' ')[0]}</span>
            </button>
            <div className={`user-menu__dropdown ${isUserMenuOpen ? 'open' : ''}`}>
              <div className="user-menu__dropdown-header">
                <div className="user-menu__dropdown-name">{user.name}</div>
                <div className="user-menu__dropdown-email">{user.email}</div>
              </div>
              <Link to="/birthdays" className="user-menu__dropdown-item" onClick={() => setIsUserMenuOpen(false)}>Birthdays</Link>
              <Link to="/about" className="user-menu__dropdown-item" onClick={() => setIsUserMenuOpen(false)}>My Profile</Link>
              <button className="user-menu__dropdown-item user-menu__dropdown-item--danger" onClick={handleSignOut}>Sign Out</button>
            </div>
          </div>
        )}

        <button
          className={`navbar__hamburger ${isMobileOpen ? 'active' : ''}`}
          id="hamburger"
          aria-label="Toggle menu"
          onClick={(e) => { e.stopPropagation(); setIsMobileOpen(!isMobileOpen); }}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
}
