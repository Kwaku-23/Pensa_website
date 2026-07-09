export default function Birthdays() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero hero--birthdays" id="heroBirthdays">
        <div className="hero__decoration hero__decoration--circle"></div>
        <div className="hero__decoration hero__decoration--circle-2"></div>
        <div className="hero__decoration hero__decoration--dots"></div>
        <div className="hero__decoration hero__decoration--line"></div>
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">Community Birthdays</h1>
            <p className="hero__subtitle">Join us in celebrating the lives of our beloved members. Send a message, a prayer, or simply share in their joy this month.</p>
          </div>
          <div className="hero__icon">🎂</div>
        </div>
      </section>

      {/* ===== AUTH GATE (shown when NOT signed in) ===== */}
      <div id="authGate">
        <section className="birthdays-section">
          <div className="container">
            <div className="auth-gate">
              <div className="auth-gate__icon">🔒</div>
              <h2 className="auth-gate__title">Members Only</h2>
              <p className="auth-gate__desc">The Community Birthdays section is available to registered members. Sign in or create an account to celebrate with your church family.</p>
              <div className="auth-gate__actions">
                <button className="btn btn--primary">Sign In</button>
                <button className="btn btn--outline-dark">Create Account</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ===== BIRTHDAYS CONTENT (shown when signed in) ===== */}
      <div id="birthdaysContent" style={{ display: 'none' }}>
        <section className="birthdays-section" id="birthdaysSection">
          <div className="container">
            <div className="birthdays-layout">
              {/* LEFT: This Week + Later This Month */}
              <div>
                {/* This Week */}
                <h2 className="birthdays-week__title">🎁 This Week</h2>
                <div className="birthdays-week__cards">
                  {/* Card 1 */}
                  <div className="birthday-card">
                    <div className="birthday-card__photo birthday-card__photo--initial" style={{ background: 'linear-gradient(135deg, #d4a017, #e8b830)' }}>K</div>
                    <h3 className="birthday-card__name">Kwame Mensah</h3>
                    <p className="birthday-card__date">Today, Oct 24</p>
                    <span className="birthday-card__role">Prayer Secretary</span>
                    <button className="btn btn--primary btn--block btn--sm" data-celebrate="Kwame Mensah">🎉 Send Celebration</button>
                  </div>
                  {/* Card 2 */}
                  <div className="birthday-card">
                    <div className="birthday-card__photo birthday-card__photo--initial" style={{ background: 'linear-gradient(135deg, #0d1f3c, #1a3a6e)' }}>A</div>
                    <h3 className="birthday-card__name">Abena Ofori</h3>
                    <p className="birthday-card__date">Tomorrow, Oct 25</p>
                    <span className="birthday-card__role">Choir Member</span>
                    <button className="btn btn--outline-dark btn--block btn--sm" data-message="Abena Ofori">✍️ Write Message</button>
                  </div>
                </div>

                {/* Later This Month */}
                <div className="later-month">
                  <h2 className="later-month__title">📅 Later This Month</h2>
                  <div className="later-month__list">
                    <div className="later-month__item">
                      <div className="later-month__avatar later-month__avatar--d">D</div>
                      <div className="later-month__info">
                        <div className="later-month__name">Daniel Amoah</div>
                        <div className="later-month__date">October 28</div>
                      </div>
                      <button className="later-month__action" data-name="Daniel Amoah">▶ Celebrate</button>
                    </div>
                    <div className="later-month__item">
                      <div className="later-month__avatar later-month__avatar--e">E</div>
                      <div className="later-month__info">
                        <div className="later-month__name">Ebenezer Tetteh</div>
                        <div className="later-month__date">October 30</div>
                      </div>
                      <button className="later-month__action" data-name="Ebenezer Tetteh">▶ Celebrate</button>
                    </div>
                    <div className="later-month__item">
                      <div className="later-month__avatar later-month__avatar--s">S</div>
                      <div className="later-month__info">
                        <div className="later-month__name">Sarah Mensah</div>
                        <div className="later-month__date">October 31</div>
                      </div>
                      <button className="later-month__action" data-name="Sarah Mensah">▶ Celebrate</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: Scripture + Missing Birthday */}
              <div>
                {/* Scripture Quote */}
                <div className="scripture-quote">
                  <div className="scripture-quote__mark">"</div>
                  <p className="scripture-quote__text">"Rejoice with those who rejoice; mourn with those who mourn."</p>
                  <div className="scripture-quote__ref">Romans 12:15</div>
                </div>

                {/* Missing a Birthday? */}
                <div className="missing-birthday">
                  <div className="missing-birthday__icon">👋</div>
                  <h3 className="missing-birthday__title">Missing a Birthday?</h3>
                  <p className="missing-birthday__desc">Help us keep our community records updated. Let the secretariat know if your birthday is coming up!</p>
                  <button className="btn btn--outline-dark" id="updateDetailsBtn">Update Details</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>{/* /birthdaysContent */}
    </>
  );
}
