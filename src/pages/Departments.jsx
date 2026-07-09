export default function Departments() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero hero--departments" id="heroDepts">
        <div className="hero__decoration hero__decoration--circle"></div>
        <div className="hero__decoration hero__decoration--circle-2"></div>
        <div className="hero__decoration hero__decoration--dots"></div>
        <div className="hero__decoration hero__decoration--line"></div>
        <div className="container">
          <h1 className="hero__title" style={{ fontFamily: 'var(--font-serif)' }}>Our Departments</h1>
          <p className="hero__subtitle">Discover the various ministries where you can serve, grow, and connect within the
            PENSA–UMaT community. Every gift has a place here.</p>
        </div>
      </section>

      {/* ===== DEPARTMENTS GRID ===== */}
      <section className="departments-grid" id="departmentsGrid">
        <div className="container">
          <div className="departments-grid__cards">
            {/* Media */}
            <div className="dept-card">
              <div className="dept-card__image">
                <img src="/images/Media_team.jpg" alt="Media Department" />
              </div>
              <div className="dept-card__body">
                <h3 className="dept-card__title"><span className="dept-card__title-icon">📷</span> Media</h3>
                <p className="dept-card__desc">Capture and share the message of PENSA–UMaT. Be part of the team handling sound,
                  lighting, live streaming, photography, video production, and social media/web management.</p>
                <button className="btn btn--dark btn--block dept-card__cta" data-join-dept="Media">Join Department</button>
              </div>
            </div>
            {/* Heralds (Music and Arts) */}
            <div className="dept-card">
              <div className="dept-card__image">
                <img src="/images/Heralds.JPG" alt="Heralds (Music and Arts) Department" />
              </div>
              <div className="dept-card__body">
                <h3 className="dept-card__title"><span className="dept-card__title-icon">🎵</span> Heralds of Zion (Music & Arts)
                </h3>
                <p className="dept-card__desc">Lead the congregation into the presence of God through praise, worship,
                  instrumentals, drama, and choreography. Use your creative talents to glorify Him.</p>
                <button className="btn btn--dark btn--block dept-card__cta" data-join-dept="Heralds (Music and Arts)">Join
                  Department</button>
              </div>
            </div>
            {/* Prayer */}
            <div className="dept-card">
              <div className="dept-card__image">
                <img src="/images/Challenge/IMG_0106-Enhanced-NR.jpg" alt="Prayer Department" />
              </div>
              <div className="dept-card__body">
                <h3 className="dept-card__title"><span className="dept-card__title-icon">🙏</span> Prayer</h3>
                <p className="dept-card__desc">Stand in the gap for the church, the campus, and the nation. Join our
                  intercessors to pray for services, programs, personal breakthroughs, and spiritual growth.</p>
                <button className="btn btn--dark btn--block dept-card__cta" data-join-dept="Prayer">Join Department</button>
              </div>
            </div>
            {/* Protocol and Duties */}
            <div className="dept-card">
              <div className="dept-card__image">
                <img src="/images/Protcol_and_Duties.JPG" alt="Protocol and Duties Department" />
              </div>
              <div className="dept-card__body">
                <h3 className="dept-card__title"><span className="dept-card__title-icon">✍️</span> Protocol and Duties</h3>
                <p className="dept-card__desc">Ensure smooth organization and administration within the fellowship. Handle
                  documentation, database records, announcements, and coordinate correspondence.</p>
                <button className="btn btn--dark btn--block dept-card__cta" data-join-dept="Protocol and Duties">Join
                  Department</button>
              </div>
            </div>
            {/* PEMSCA (for pastors' kids) */}
            <div className="dept-card">
              <div className="dept-card__image">
                <img src="/images/PEMSCA.jpg" alt="PEMSCA Department" />
              </div>
              <div className="dept-card__body">
                <h3 className="dept-card__title"><span className="dept-card__title-icon">🤝</span> PEMSCA</h3>
                <p className="dept-card__desc">Pastors' and Ministers' Children Association. A supportive family and safe space
                  for pastors' kids to connect, share experiences, grow spiritually, and serve together.</p>
                <button className="btn btn--dark btn--block dept-card__cta" data-join-dept="PEMSCA (for pastors' kids)">Join
                  Department</button>
              </div>
            </div>
            {/* Evangelism */}
            <div className="dept-card">
              <div className="dept-card__image">
                <img src="/images/Pensice.jpg" alt="Evangelism Department" />
              </div>
              <div className="dept-card__body">
                <h3 className="dept-card__title"><span className="dept-card__title-icon">📢</span> Evangelism</h3>
                <p className="dept-card__desc">Fulfill the Great Commission. Take the gospel to the lecture halls, hostels,
                  streets, and beyond through creative outreaches, crusades, and personal witnessing.</p>
                <button className="btn btn--dark btn--block dept-card__cta" data-join-dept="Evangelism">Join Department</button>
              </div>
            </div>
            {/* Bible studies */}
            <div className="dept-card">
              <div className="dept-card__image">
                <img src="/images/Midweek.jpg" alt="Bible studies Department" />
              </div>
              <div className="dept-card__body">
                <h3 className="dept-card__title"><span className="dept-card__title-icon">📖</span> Bible studies</h3>
                <p className="dept-card__desc">Delve deeper into the scriptures. Participate in systematic study of God's Word,
                  discussions, answering doctrinal questions, and growing in wisdom and truth.</p>
                <button className="btn btn--dark btn--block dept-card__cta" data-join-dept="Bible studies">Join
                  Department</button>
              </div>
            </div>
            {/* Welfare */}
            <div className="dept-card">
              <div className="dept-card__image">
                <img src="/images/Chambers_of_mines.jpg" alt="Welfare Department" />
              </div>
              <div className="dept-card__body">
                <h3 className="dept-card__title"><span className="dept-card__title-icon">❤️</span> Welfare</h3>
                <p className="dept-card__desc">Show the practical love of Christ on campus. We support members in times of need,
                  coordinate hospitality, organize visitations, and distribute aid to those facing challenges.</p>
                <button className="btn btn--dark btn--block dept-card__cta" data-join-dept="Welfare">Join Department</button>
              </div>
            </div>
            {/* CTA Card */}
            <div className="dept-card dept-card--cta">
              <div className="dept-card__icon">✨</div>
              <h3 className="dept-card__title">Not Sure Where to Serve?</h3>
              <p className="dept-card__desc">Speak to our leadership team to help identify your gifts and find the perfect
                department for you.</p>
              <button className="btn btn--primary" id="contactLeadershipBtn">Contact Leadership</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
