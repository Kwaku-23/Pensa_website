export default function Family() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero hero--family" id="heroFamily">
        <div className="hero__decoration hero__decoration--circle"></div>
        <div className="hero__decoration hero__decoration--circle-2"></div>
        <div className="hero__decoration hero__decoration--dots"></div>
        <div className="hero__decoration hero__decoration--line"></div>
        <div className="container">
          <h1 className="hero__title" style={{ fontFamily: 'var(--font-serif)' }}>Find Your Family</h1>
          <p className="hero__subtitle">At PENSA-UMaT, no one walks alone. Join a zone-based family where you'll be cared for, mentored, and challenged to grow in faith and fellowship.</p>
        </div>
      </section>

      {/* ===== FAMILY ZONES GRID ===== */}
      <section className="family-grid" id="familyGrid">
        <div className="container">
          <div className="family-grid__header">
            <h2 className="family-grid__title">Our Family Zones</h2>
            <p className="family-grid__subtitle">Each zone is a close-knit community within the larger PENSA-UMaT fellowship. Pick the one closest to you and get connected!</p>
          </div>
          <div className="family-grid__cards">
            {/* Zone A — Agape */}
            <div className="family-card family-card--agape">
              <div className="family-card__image">
                <img src="/images/Hilda_Zone.jpg" alt="Hilda zone" />
                <span className="family-card__zone-badge family-card__zone-badge--agape">Hilda zone</span>
              </div>
              <div className="family-card__body">
                <h3 className="family-card__title"><span className="family-card__title-icon">💚</span> Hilda zone</h3>
                <div className="family-card__leader">
                  <span className="family-card__leader-label">Zone Leader:</span> Brother James Mensah
                </div>
                <p className="family-card__desc">A vibrant family for members residing in and around Hilda Hostel. We gather for weekly check-ins, Bible study, and prayer, providing a strong support system for your academic and spiritual journey.</p>
                <div className="family-card__stats">
                  <div className="family-card__stat">
                    <span className="family-card__stat-value">65+</span>
                    <span className="family-card__stat-label">Members</span>
                  </div>
                  <div className="family-card__stat">
                    <span className="family-card__stat-value">Tues</span>
                    <span className="family-card__stat-label">Meets</span>
                  </div>
                  <div className="family-card__stat">
                    <span className="family-card__stat-value">Hilda & Environs</span>
                    <span className="family-card__stat-label">Area</span>
                  </div>
                </div>
                <button className="btn btn--dark btn--block family-card__cta" data-join-family="Hilda zone">Join Hilda zone</button>
              </div>
            </div>

            {/* Zone B — Bethel */}
            <div className="family-card family-card--bethel">
              <div className="family-card__image">
                <img src="/images/KT_hall.jpg" alt="KT Hall zone" />
                <span className="family-card__zone-badge family-card__zone-badge--bethel">KT Hall zone</span>
              </div>
              <div className="family-card__body">
                <h3 className="family-card__title"><span className="family-card__title-icon">💛</span> KT Hall zone</h3>
                <div className="family-card__leader">
                  <span className="family-card__leader-label">Zone Leader:</span> Sister Abena Owusu
                </div>
                <p className="family-card__desc">Serving the Kwame Nkrumah (KT) Hall community. This family focuses on deep fellowship, intercession, and creating a spiritual home where every student in the hall encounters God's presence.</p>
                <div className="family-card__stats">
                  <div className="family-card__stat">
                    <span className="family-card__stat-value">58+</span>
                    <span className="family-card__stat-label">Members</span>
                  </div>
                  <div className="family-card__stat">
                    <span className="family-card__stat-value">Wed</span>
                    <span className="family-card__stat-label">Meets</span>
                  </div>
                  <div className="family-card__stat">
                    <span className="family-card__stat-value">KT Hall</span>
                    <span className="family-card__stat-label">Area</span>
                  </div>
                </div>
                <button className="btn btn--dark btn--block family-card__cta" data-join-family="KT Hall zone">Join KT Hall zone</button>
              </div>
            </div>

            {/* Zone C — Calvary */}
            <div className="family-card family-card--calvary">
              <div className="family-card__image">
                <img src="/images/Chambers_of_mines.jpg" alt="Chambers of Mines zone" />
                <span className="family-card__zone-badge family-card__zone-badge--calvary">Chambers of Mines zone</span>
              </div>
              <div className="family-card__body">
                <h3 className="family-card__title"><span className="family-card__title-icon">💙</span> Chambers of Mines zone</h3>
                <div className="family-card__leader">
                  <span className="family-card__leader-label">Zone Leader:</span> Brother Kwame Asante
                </div>
                <p className="family-card__desc">Rooted in love and service for residents of the Chamber of Mines Hall. Our members are known for their strong bond, community activities, and commitment to leading evangelism within the hall.</p>
                <div className="family-card__stats">
                  <div className="family-card__stat">
                    <span className="family-card__stat-value">72+</span>
                    <span className="family-card__stat-label">Members</span>
                  </div>
                  <div className="family-card__stat">
                    <span className="family-card__stat-value">Thurs</span>
                    <span className="family-card__stat-label">Meets</span>
                  </div>
                  <div className="family-card__stat">
                    <span className="family-card__stat-value">CoM Hall</span>
                    <span className="family-card__stat-label">Area</span>
                  </div>
                </div>
                <button className="btn btn--dark btn--block family-card__cta" data-join-family="Chambers of Mines zone">Join Chambers of Mines zone</button>
              </div>
            </div>

            {/* Zone D — Damascus */}
            <div className="family-card family-card--damascus">
              <div className="family-card__image">
                <img src="/images/Dreamer.jpg" alt="Dreamers zone" />
                <span className="family-card__zone-badge family-card__zone-badge--damascus">Dreamers zone</span>
              </div>
              <div className="family-card__body">
                <h3 className="family-card__title"><span className="family-card__title-icon">💗</span> Dreamers zone</h3>
                <div className="family-card__leader">
                  <span className="family-card__leader-label">Zone Leader:</span> Sister Priscilla Danso
                </div>
                <p className="family-card__desc">A dedicated family for those in the Dreamers Hostel area. We focus on discipleship, relationship building, and helping both freshers and continuing students find their footing in faith.</p>
                <div className="family-card__stats">
                  <div className="family-card__stat">
                    <span className="family-card__stat-value">50+</span>
                    <span className="family-card__stat-label">Members</span>
                  </div>
                  <div className="family-card__stat">
                    <span className="family-card__stat-value">Fri</span>
                    <span className="family-card__stat-label">Meets</span>
                  </div>
                  <div className="family-card__stat">
                    <span className="family-card__stat-value">Dreamers Hostel</span>
                    <span className="family-card__stat-label">Area</span>
                  </div>
                </div>
                <button className="btn btn--dark btn--block family-card__cta" data-join-family="Dreamers zone">Join Dreamers zone</button>
              </div>
            </div>

            {/* CTA Card */}
            <div className="family-card family-card--cta">
              <div className="family-card__icon">?</div>
              <h3 className="family-card__title">Not Sure Which Zone?</h3>
              <p className="family-card__desc">Don't worry! Speak to any of our zone leaders or the welfare team and we'll help match you to the right family based on your hostel or area.</p>
              <button className="btn btn--primary" id="contactZoneLeaderBtn">Contact a Zone Leader</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
