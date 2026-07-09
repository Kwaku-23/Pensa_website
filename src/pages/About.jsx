import { useEffect } from 'react';
import { initTiltEffect } from '../utils/effects';

export default function About() {
  useEffect(() => {
    const cards = document.querySelectorAll('.mv-card');
    initTiltEffect(cards);
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero hero--about" id="heroAbout">
        <div className="hero__decoration hero__decoration--circle"></div>
        <div className="hero__decoration hero__decoration--circle-2"></div>
        <div className="hero__decoration hero__decoration--dots"></div>
        <div className="hero__decoration hero__decoration--line"></div>
        <div className="container">
          <h1 className="hero__title" style={{ fontFamily: 'var(--font-serif)' }}>Rooted in Faith,<br />Growing in Excellence.</h1>
          <p className="hero__subtitle">We are a vibrant community of students at the University of Mines and Technology,
            dedicated to spiritual growth, academic excellence, and fostering a supportive family away from home.</p>
        </div>
      </section>

      {/* ===== WHO WE ARE ===== */}
      <section className="section" style={{ paddingTop: 'var(--space-4xl)', paddingBottom: 'var(--space-2xl)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: 'var(--space-md)', fontFamily: 'var(--font-serif)' }}>Who We Are</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--gray-600)', lineHeight: '1.8' }}>
            <strong>PENSA</strong> stands for <strong>Pentecost Students and Associates</strong>. It is the dynamic campus
            ministry and young professionals' wing of The Church of Pentecost. With a global presence across over 380
            academic institutions in Ghana alone, we are focused on "Possessing the Nations" by bridging the gap between
            faith, academia, and society. Our goal is to raise spiritually sound, academically strong, and socially relevant
            individuals who transform their world with Christian principles.
          </p>
        </div>
      </section>

      {/* ===== CORE MISSION & VISION ===== */}
      <section className="mission-vision section" id="missionVision" style={{ paddingTop: '0' }}>
        <div className="container">
          <div className="mission-vision__grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>

            <div className="mv-card mv-card--mission" style={{ background: 'var(--navy-900)', color: 'white' }}>
              <h3 className="mv-card__title"
                style={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '10px' }}>Discipleship on
                Campus</h3>
              <p className="mv-card__text">Providing a safe, supportive spiritual environment for students and alumni to
                maintain and grow their faith while pursuing higher education.</p>
            </div>

            <div className="mv-card mv-card--vision" style={{ background: 'var(--gold-500)', color: 'var(--navy-900)' }}>
              <div className="mv-card__label"
                style={{ color: 'var(--navy-900)', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '10px', fontWeight: '700' }}>
                Evangelism & Missions</div>
              <p className="mv-card__text">Actively mobilizing students for local and global missionary work, outreaches, and
                soul-winning campaigns.</p>
            </div>

            <div className="mv-card mv-card--mission"
              style={{ background: 'var(--gray-50)', color: 'var(--navy-900)', border: '1px solid var(--gray-200)' }}>
              <h3 className="mv-card__title"
                style={{ color: 'var(--navy-900)', borderBottom: '1px solid var(--gray-200)', paddingBottom: '10px' }}>Professional
                Impact</h3>
              <p className="mv-card__text" style={{ color: 'var(--gray-600)' }}>Equipping young adults to be ethical, Christ-like
                leaders and agents of positive change in corporate, academic, and civic sectors.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== WHAT WE OFFER ===== */}
      <section className="section" style={{ background: 'var(--gray-50)', padding: 'var(--space-4xl) 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
            <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)' }}>What PENSA Offers</h2>
            <p style={{ color: 'var(--gray-500)' }}>Empowering our members through spiritual, professional, and missional
              initiatives.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-xl)' }}>

            <div
              style={{ background: 'white', padding: 'var(--space-xl)', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transition: 'transform var(--transition-fast)' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-sm)' }}>🙏</div>
              <h3 style={{ marginBottom: 'var(--space-xs)' }}>Fellowship & Mentorship</h3>
              <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem', lineHeight: '1.6' }}>Engage in regular campus meetings,
                powerful prayer gatherings, and deep Bible studies to grow spiritually and find godly mentors.</p>
            </div>

            <div
              style={{ background: 'white', padding: 'var(--space-xl)', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transition: 'transform var(--transition-fast)' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-sm)' }}>💼</div>
              <h3 style={{ marginBottom: 'var(--space-xs)' }}>Professional Guild (PeSPG)</h3>
              <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem', lineHeight: '1.6' }}>Dedicated mentorship for students and
                fresh graduates, connecting young professionals with corporate entities to positively influence the
                workplace.</p>
            </div>

            <div
              style={{ background: 'white', padding: 'var(--space-xl)', borderRadius: 'var(--radius-lg)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', transition: 'transform var(--transition-fast)' }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
              <div style={{ fontSize: '2.5rem', marginBottom: 'var(--space-sm)' }}>🌍</div>
              <h3 style={{ marginBottom: 'var(--space-xs)' }}>The "PENSA Force"</h3>
              <p style={{ color: 'var(--gray-500)', fontSize: '0.95rem', lineHeight: '1.6' }}>Join our dynamic volunteer
                mobilization team for groundbreaking global mission trips, outreaches, and community development programs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="timeline section" id="journey">
        <div className="container">
          <div className="timeline__header">
            <h2 className="timeline__title">Our Journey & Focus</h2>
            <p className="timeline__subtitle">How PENSA is transforming faith, academia, and society.</p>
          </div>
          <div className="timeline__track">
            {/* Item 1 */}
            <div className="timeline__item">
              <div className="timeline__dot"></div>
              <div className="timeline__card">
                <h4 className="timeline__card-title">Building the Foundation</h4>
                <p className="timeline__card-text">PENSA serves as the dynamic campus ministry of The Church of Pentecost,
                  dedicated to raising spiritually sound and academically strong individuals.</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="timeline__item">
              <div className="timeline__dot"></div>
              <div className="timeline__card">
                <h4 className="timeline__card-title">Discipleship & Missions</h4>
                <p className="timeline__card-text">Providing a supportive environment for students on campus while mobilizing
                  the "PENSA Force" for local and global missionary work.</p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="timeline__item">
              <div className="timeline__dot"></div>
              <div className="timeline__card">
                <h4 className="timeline__card-title">Professional Impact (PeSPG)</h4>
                <p className="timeline__card-text">Connecting young professionals and fresh graduates with corporate entities to
                  equip them as ethical, Christ-like leaders in the workplace.</p>
              </div>
            </div>
            {/* Item 4 */}
            <div className="timeline__item">
              <div className="timeline__dot"></div>
              <div className="timeline__card">
                <h4 className="timeline__card-title">Possessing the Nations</h4>
                <p className="timeline__card-text">With a massive presence across over 380 academic institutions in Ghana alone,
                  we bridge the gap between faith, academia, and society.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
