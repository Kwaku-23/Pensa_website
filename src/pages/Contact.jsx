import { useState } from 'react';

export default function Contact() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Simulate email send
    const btn = e.target.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent = originalText;
      btn.disabled = false;
      e.target.reset();
      alert("✅ Thank you! Your message has been sent. We'll get back to you within 24 hours.");
    }, 1500);
  };

  return (
    <>
      <style>{`
        /* ===== CONTACT PAGE SPECIFIC STYLES ===== */
        .contact-section {
            padding: var(--space-4xl) 0;
        }

        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--space-3xl);
            align-items: start;
        }

        /* Contact Info Side */
        .contact-info__title {
            font-size: 1.8rem;
            font-weight: 700;
            margin-bottom: var(--space-sm);
        }

        .contact-info__sub {
            font-size: 0.95rem;
            color: var(--gray-500);
            line-height: 1.7;
            margin-bottom: var(--space-2xl);
        }

        .contact-info__items {
            display: flex;
            flex-direction: column;
            gap: var(--space-lg);
            margin-bottom: var(--space-2xl);
        }

        .contact-info__item {
            display: flex;
            align-items: flex-start;
            gap: var(--space-md);
        }

        .contact-info__icon {
            width: 48px;
            height: 48px;
            border-radius: var(--radius-md);
            background: rgba(212, 160, 23, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            flex-shrink: 0;
        }

        .contact-info__label {
            font-weight: 600;
            font-size: 0.95rem;
            margin-bottom: 4px;
        }

        .contact-info__value {
            font-size: 0.85rem;
            color: var(--gray-500);
            line-height: 1.6;
        }

        /* Service Times */
        .service-times {
            background: var(--navy-900);
            color: var(--white);
            border-radius: var(--radius-lg);
            padding: var(--space-2xl);
            margin-top: var(--space-xl);
        }

        .service-times__title {
            font-size: 1.1rem;
            font-weight: 700;
            margin-bottom: var(--space-lg);
            display: flex;
            align-items: center;
            gap: var(--space-sm);
        }

        .service-times__list {
            display: flex;
            flex-direction: column;
            gap: var(--space-md);
        }

        .service-times__item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: var(--space-sm);
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .service-times__item:last-child {
            border-bottom: none;
        }

        .service-times__day {
            font-weight: 600;
            font-size: 0.9rem;
        }

        .service-times__time {
            font-size: 0.85rem;
            color: var(--gold-400);
            font-weight: 500;
        }

        /* Contact Form Side */
        .contact-form-wrap {
            background: var(--gray-50);
            border-radius: var(--radius-lg);
            padding: var(--space-2xl);
            border: 1px solid var(--gray-200);
        }

        .contact-form__title {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: var(--space-sm);
        }

        .contact-form__sub {
            font-size: 0.9rem;
            color: var(--gray-500);
            margin-bottom: var(--space-xl);
        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: var(--space-md);
        }

        /* Map Section */
        .map-section {
            padding: 0 0 var(--space-4xl);
        }

        .map-section__title {
            font-size: 1.3rem;
            font-weight: 700;
            margin-bottom: var(--space-xl);
            text-align: center;
        }

        .map-placeholder {
            background: var(--gray-100);
            border: 1px solid var(--gray-200);
            border-radius: var(--radius-lg);
            height: 350px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: var(--gray-500);
            gap: var(--space-md);
        }

        .map-placeholder__icon {
            font-size: 3rem;
        }

        .map-placeholder__text {
            font-size: 1rem;
            font-weight: 600;
        }

        .map-placeholder__sub {
            font-size: 0.85rem;
            color: var(--gray-400);
        }

        /* FAQ Section */
        .faq-section {
            padding: var(--space-4xl) 0;
            background: var(--gray-50);
        }

        .faq-section__title {
            text-align: center;
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: var(--space-sm);
        }

        .faq-section__sub {
            text-align: center;
            font-size: 0.9rem;
            color: var(--gray-500);
            margin-bottom: var(--space-2xl);
        }

        .faq-list {
            max-width: 700px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: var(--space-md);
        }

        .faq-item {
            background: var(--white);
            border: 1px solid var(--gray-200);
            border-radius: var(--radius-md);
            overflow: hidden;
            transition: box-shadow var(--transition-fast);
        }

        .faq-item:hover {
            box-shadow: var(--shadow-sm);
        }

        .faq-item__question {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: var(--space-lg);
            font-weight: 600;
            font-size: 0.95rem;
            cursor: pointer;
            transition: color var(--transition-fast);
        }

        .faq-item__question:hover {
            color: var(--gold-500);
        }

        .faq-item__icon {
            font-size: 1.2rem;
            transition: transform var(--transition-base);
            flex-shrink: 0;
        }

        .faq-item.active .faq-item__icon {
            transform: rotate(45deg);
        }

        .faq-item__answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height var(--transition-base);
        }

        .faq-item.active .faq-item__answer {
            max-height: 300px;
        }

        .faq-item__answer-text {
            padding: 0 var(--space-lg) var(--space-lg);
            font-size: 0.88rem;
            color: var(--gray-500);
            line-height: 1.7;
        }

        @media (max-width: 768px) {
            .contact-grid {
                grid-template-columns: 1fr;
            }

            .form-row {
                grid-template-columns: 1fr;
            }
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="hero hero--contact" id="heroContact">
        <div className="hero__decoration hero__decoration--circle"></div>
        <div className="hero__decoration hero__decoration--circle-2"></div>
        <div className="hero__decoration hero__decoration--dots"></div>
        <div className="hero__decoration hero__decoration--line"></div>
        <div className="container">
          <h1 className="hero__title" style={{ fontFamily: 'var(--font-serif)' }}>Get in Touch</h1>
          <p className="hero__subtitle">We'd love to hear from you. Whether you have a question, prayer request, or just want to connect — reach out to us.</p>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="contact-section" id="contactSection">
        <div className="container">
          <div className="contact-grid">
            {/* LEFT: Contact Info */}
            <div className="contact-info">
              <h2 className="contact-info__title">Contact Information</h2>
              <p className="contact-info__sub">Reach out through any of the channels below, or fill in the form and we'll get back to you promptly.</p>

              <div className="contact-info__items">
                <div className="contact-info__item">
                  <div className="contact-info__icon">📍</div>
                  <div>
                    <div className="contact-info__label">Our Location</div>
                    <div className="contact-info__value">UMaT Main Campus Auditorium<br />University of Mines and Technology<br />Tarkwa, Western Region, Ghana</div>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon">✉️</div>
                  <div>
                    <div className="contact-info__label">Email Us</div>
                    <div className="contact-info__value">info@pensaumat.org<br />secretary@pensaumat.org</div>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon">📞</div>
                  <div>
                    <div className="contact-info__label">Call Us</div>
                    <div className="contact-info__value">+233 55 123 4567<br />+233 24 987 6543</div>
                  </div>
                </div>
                <div className="contact-info__item">
                  <div className="contact-info__icon">🕒</div>
                  <div>
                    <div className="contact-info__label">Office Hours</div>
                    <div className="contact-info__value">Monday – Friday: 9:00 AM – 5:00 PM<br />Saturday: By appointment</div>
                  </div>
                </div>
              </div>

              {/* Service Times */}
              <div className="service-times">
                <h3 className="service-times__title">⛪ Service Times</h3>
                <div className="service-times__list">
                  <div className="service-times__item">
                    <span className="service-times__day">Sunday Service</span>
                    <span className="service-times__time">6:00 AM – 9:00 AM</span>
                  </div>
                  <div className="service-times__item">
                    <span className="service-times__day">Midweek Service</span>
                    <span className="service-times__time">Tuesdays, 7:00 PM – 9:00 PM</span>
                  </div>
                  <div className="service-times__item">
                    <span className="service-times__day">Wing Meetings</span>
                    <span className="service-times__time">Bi-weekly Mondays, 7:00 PM - 9pm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Contact Form */}
            <div className="contact-form-wrap">
              <h3 className="contact-form__title">Send Us a Message</h3>
              <p className="contact-form__sub">Fill out the form below and we'll respond within 24 hours.</p>
              <form id="pageContactForm" onSubmit={handleContactSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="pcFirstName">First Name</label>
                    <input type="text" id="pcFirstName" placeholder="Enter first name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pcLastName">Last Name</label>
                    <input type="text" id="pcLastName" placeholder="Enter last name" required />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="pcEmail">Email Address</label>
                  <input type="email" id="pcEmail" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="pcPhone">Phone Number (Optional)</label>
                  <input type="tel" id="pcPhone" placeholder="e.g. +233 55 000 0000" />
                </div>
                <div className="form-group">
                  <label htmlFor="pcSubject">Subject</label>
                  <select id="pcSubject">
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Prayer Request">Prayer Request</option>
                    <option value="Membership">Membership</option>
                    <option value="Join a Department">Join a Department</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Partnership">Partnership</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="pcMessage">Your Message</label>
                  <textarea id="pcMessage" placeholder="Write your message here..." required style={{ minHeight: '120px' }}></textarea>
                </div>
                <button type="submit" className="btn btn--dark btn--block" style={{ padding: '0.9rem' }}>Send Message →</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAP ===== */}
      <section className="map-section" id="mapSection">
        <div className="container">
          <h2 className="map-section__title">Find Us on Campus</h2>
          <div className="map-placeholder">
            <div className="map-placeholder__icon">🗺️</div>
            <div className="map-placeholder__text">The Church of Pentecost, UMaT Assembly</div>
            <div className="map-placeholder__sub">University of Mines and Technology, Tarkwa, Western Region, Ghana</div>
            <a href="https://maps.google.com/?q=The+Church+of+Pentecost+UMaT+Assembly+Tarkwa+Ghana" target="_blank" rel="noreferrer"
              className="btn btn--primary btn--sm" style={{ marginTop: '0.5rem' }}>Open in Google Maps →</a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="faq-section" id="faqSection">
        <div className="container">
          <h2 className="faq-section__title">Frequently Asked Questions</h2>
          <p className="faq-section__sub">Quick answers to common questions about PENSA-UMaT</p>
          <div className="faq-list">
            <div className={`faq-item ${activeFaq === 0 ? 'active' : ''}`}>
              <div className="faq-item__question" onClick={() => toggleFaq(0)}>
                <span>Who can join PENSA-UMaT?</span>
                <span className="faq-item__icon">+</span>
              </div>
              <div className="faq-item__answer">
                <p className="faq-item__answer-text">PENSA-UMaT is open to all students of the University of Mines and Technology, regardless of denomination. Whether you're a fresher or a final-year student, you're welcome to join our family!</p>
              </div>
            </div>
            <div className={`faq-item ${activeFaq === 1 ? 'active' : ''}`}>
              <div className="faq-item__question" onClick={() => toggleFaq(1)}>
                <span>What time are Sunday services?</span>
                <span className="faq-item__icon">+</span>
              </div>
              <div className="faq-item__answer">
                <p className="faq-item__answer-text">Sunday services are held from 6:00 AM to 9:00 AM at the UMaT Main Campus Auditorium. We also have midweek services on Tuesdays from 7:00 PM to 9:00 PM, and bi-weekly Wing Meetings (Gent Wing & Lady Wing) on Mondays.</p>
              </div>
            </div>
            <div className={`faq-item ${activeFaq === 2 ? 'active' : ''}`}>
              <div className="faq-item__question" onClick={() => toggleFaq(2)}>
                <span>How can I join a department?</span>
                <span className="faq-item__icon">+</span>
              </div>
              <div className="faq-item__answer">
                <p className="faq-item__answer-text">Visit our <a href="/departments" style={{ color: 'var(--gold-500)', fontWeight: '600' }}>Departments page</a> to learn about each ministry and submit a request to join. You can also speak to any of our leaders after service.</p>
              </div>
            </div>
            <div className={`faq-item ${activeFaq === 3 ? 'active' : ''}`}>
              <div className="faq-item__question" onClick={() => toggleFaq(3)}>
                <span>Can I submit a prayer request?</span>
                <span className="faq-item__icon">+</span>
              </div>
              <div className="faq-item__answer">
                <p className="faq-item__answer-text">Absolutely! Use the contact form above and select "Prayer Request" as the subject. Our prayer team will intercede on your behalf. All prayer requests are treated with strict confidentiality.</p>
              </div>
            </div>
            <div className={`faq-item ${activeFaq === 4 ? 'active' : ''}`}>
              <div className="faq-item__question" onClick={() => toggleFaq(4)}>
                <span>How can I support PENSA-UMaT financially?</span>
                <span className="faq-item__icon">+</span>
              </div>
              <div className="faq-item__answer">
                <p className="faq-item__answer-text">Visit our <a href="/give" style={{ color: 'var(--gold-500)', fontWeight: '600' }}>Give page</a> to make tithes, offerings, or special donations. You can give via Mobile Money, bank transfer, or card payment. Every contribution makes a difference!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
