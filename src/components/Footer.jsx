import { Link } from 'react-router-dom';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaXTwitter, FaTiktok } from 'react-icons/fa6';

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
            <p className="footer__tagline"> <i>Follow us on Our Social Media</i> </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={20} /></a>
              <a href="https://web.facebook.com/PENSAUMaT" className="footer__social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF size={20} /></a>
              <a href="https://www.instagram.com/pensaumat/" className="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
              <a href="https://x.com/_pensa_umat_?s=11" className="footer__social-link" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer"><FaXTwitter size={20} /></a>
              <a href="https://www.tiktok.com/@pensa_umat?_r=1&_t=ZS-97tFgrTnqho" className="footer__social-link" aria-label="TikTok" target="_blank" rel="noopener noreferrer"><FaTiktok size={20} /></a>
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
              <span>Pentecost UMaT Worship Center</span>
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
