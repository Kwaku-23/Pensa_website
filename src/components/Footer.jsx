import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__logo">
              <img src="/images/logo.png" alt="PENSA-UMaT Logo" className="footer__logo-img" />
              PENSA–UMaT
            </div>
            <p className="footer__tagline">Equipping students to be Christ-like leaders in academia and beyond.</p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Twitter">𝕏</a>
              <a href="#" className="footer__social-link" aria-label="Share">↗</a>
              <a href="#" className="footer__social-link" aria-label="Instagram">◎</a>
            </div>
          </div>
          <div>
            <h4 className="footer__heading">Quick Links</h4>
            <div className="footer__links">
              <Link to="/" className="footer__link">Home</Link>
              <Link to="/sermons" className="footer__link">Sermons</Link>
              <Link to="/contact" className="footer__link">Contact</Link>
              <Link to="/departments" className="footer__link">Departments</Link>
            </div>
          </div>
          <div>
            <h4 className="footer__heading">Location</h4>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📍</span>
              <span>University of Mines and Technology, Tarkwa, Ghana</span>
            </div>
            <div className="footer__contact-item">
              <span className="footer__contact-icon">📞</span>
              <span>+233 55 123 4567</span>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          © 2024 PENSA-UMaT. Member of the UMaT Community.
        </div>
      </div>
    </footer>
  );
}
