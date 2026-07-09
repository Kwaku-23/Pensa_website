import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [subtitleText, setSubtitleText] = useState("");
  const fullText = "Christ In You, The Hope of Glory";

  useEffect(() => {
    let i = 0;
    const speed = 50;
    const interval = setInterval(() => {
      setSubtitleText(fullText.substring(0, i + 1));
      i++;
      if (i >= fullText.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero hero--home" id="hero">
        {/* Particle canvas */}
        <div className="hero__particles" id="heroParticles"></div>
        <div className="container">
          <h1 className="hero__title">Welcome to PENSA-UMaT</h1>
          <p className="hero__subtitle" id="heroSubtitle">
            <i style={{ 
              borderRight: subtitleText.length < fullText.length ? '2px solid var(--gold-500)' : 'none', 
              paddingRight: '2px',
              animation: subtitleText.length < fullText.length ? 'typing-cursor 1s step-end infinite' : 'none'
            }}>
              {subtitleText}
            </i>
          </p>
          <div className="hero__actions">
            <Link to="/about" className="btn btn--primary">Who we are</Link>
            <Link to="/family" className="btn btn--outline">Join our community</Link>
          </div>
        </div>
      </section>

      {/* ===== QUOTE SECTION ===== */}
      <section className="quote-section section" id="quote">
        <div className="container">
          <div className="quote-section__mark">❝</div>
          <p className="quote-section__text">"We are a community driven by unconditional love, unyielding academic excellence,
            and a shared, profound passion for Christ."</p>
          <div className="quote-section__attribution">
            <img src="/images/_MG_9889.jpg" alt="Resident Pastor" className="quote-section__avatar" />
            <div className="quote-section__author-info">
              <div className="quote-section__author">Resident Pastor</div>
              <div className="quote-section__role">Pastor Prince Aseidu Amponsah</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GRADIENT DIVIDER ===== */}
      <div className="gradient-divider gradient-divider--subtle"></div>

      {/* ===== LATEST SERMON ===== */}
      <section className="latest-sermon" id="latestSermon">
        <div className="container">
          <div className="latest-sermon__header">
            <div>
              <h2 className="latest-sermon__heading">Latest Sermon</h2>
              <p className="latest-sermon__heading-sub">Catch up on our most recent teachings and messages</p>
            </div>
            <Link to="/sermons" className="latest-sermon__view-all">View all Sermons →</Link>
          </div>
          <div className="latest-sermon__content">
            <div className="latest-sermon__video" data-video="sermon">
              <img src="/images/IMG_8837.JPG" alt="Latest Sermon - Navigating Purpose in Academia" />
              <div className="latest-sermon__video-overlay">
                <div className="play-btn"></div>
              </div>
              <span className="latest-sermon__timestamp">08:22</span>
              <span className="latest-sermon__badge badge badge--gold">Sunday Sermon</span>
            </div>
            <div className="latest-sermon__info">
              <span className="latest-sermon__category">Sunday Sermon</span>
              <h3 className="latest-sermon__title">Navigating Purpose in Academia</h3>
              <p className="latest-sermon__desc">Discover how to align your academic pursuits with your divine calling. This
                week's sermon dives deep into the intersection of faith, hard work, and finding true...</p>
              <div className="latest-sermon__meta">
                <div className="latest-sermon__meta-item">
                  <span>👤</span> <span>Elder Jude Boadi</span>
                </div>
                <div className="latest-sermon__meta-item">
                  <span>📅</span> <span>June 07, 2026</span>
                </div>
              </div>
              <div className="latest-sermon__actions">
                <Link to="/sermons" className="btn btn--dark">▶ Watch Now</Link>
                <button className="share-btn" aria-label="Share sermon">↗</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GRADIENT DIVIDER ===== */}
      <div className="gradient-divider gradient-divider--subtle"></div>

      {/* ===== Day to Day Activities ===== */}
      <section className="community-life section" id="communityLife">
        <div className="container">
          <div className="community-life__header">
            <h2 className="community-life__title">Day to Day Activities</h2>
            <p className="community-life__subtitle">There's always something happening at PENSA-UMaT. Find where you belong,
              grow in faith, and serve together.</p>
          </div>
          <div className="community-life__grid">
            {/* Event Card 1 */}
            <div className="event-card">
              <div className="event-card__image">
                <img src="/images/Sitting_men.jpg" alt="Midweek Service" />
              </div>
              <div className="event-card__body">
                <div className="event-card__tags">
                  <span className="badge badge--gold">Service</span>
                  <span className="event-card__schedule">Tuesdays, 7:00 PM – 9:00 PM</span>
                </div>
                <h3 className="event-card__title">Midweek Service</h3>
                <p className="event-card__desc">Recharge your spiritual fire mid-week! Join us every Tuesday for powerful
                  prayers, deep Bible study, and heart-felt fellowship.</p>
                <Link to="/events" className="event-card__link">View Schedule →</Link>
              </div>
            </div>
            {/* Event Card 2 */}
            <div className="event-card">
              <div className="event-card__image">
                <img src="/images/_MG_9756.jpg" alt="Gent Wing & Lady Wing Meetings" />
              </div>
              <div className="event-card__body">
                <div className="event-card__tags">
                  <span className="badge badge--red">Fellowship</span>
                  <span className="event-card__schedule">Mondays (Bi-weekly), 7:00 PM</span>
                </div>
                <h3 className="event-card__title">Wing Meetings</h3>
                <p className="event-card__desc">Gent Wing & Lady Wing gather bi-weekly for personal mentorship, relationship
                  discussions, gender-specific support, and deep fellowship.</p>
                <Link to="/events" className="event-card__link">Get Involved →</Link>
              </div>
            </div>
            {/* Event Card 3 */}
            <div className="event-card">
              <div className="event-card__image">
                <img src="/images/Dancing.jpg" alt="Sunday Worship Service" style={{ objectPosition: 'center top' }} />
              </div>
              <div className="event-card__body">
                <div className="event-card__tags">
                  <span className="badge badge--teal">Worship</span>
                  <span className="event-card__schedule">Sundays, 6:00 AM – 9:00 AM</span>
                </div>
                <h3 className="event-card__title">Sunday Service</h3>
                <p className="event-card__desc">Experience the glorious presence of God in our main worship service. Come and be
                  equipped for academic and spiritual success.</p>
                <Link to="/events" className="event-card__link">View Schedule →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
