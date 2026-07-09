export default function Sermons() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero hero--sermons" id="heroSermons">
        <div className="hero__decoration hero__decoration--circle"></div>
        <div className="hero__decoration hero__decoration--circle-2"></div>
        <div className="hero__decoration hero__decoration--dots"></div>
        <div className="hero__decoration hero__decoration--line"></div>
        <div className="container">
          <h1 className="hero__title" style={{ fontFamily: 'var(--font-serif)' }}>Sermon Archive</h1>
          <p className="hero__subtitle">Explore our library of past messages, teachings, and powerful encounters. Filter by
            series or speaker to find exactly what you're looking for.</p>
        </div>
      </section>

      {/* ===== FEATURED SERMON ===== */}
      <section className="featured-sermon" id="featuredSermon">
        <div className="container">
          <div className="featured-sermon__content">
            <div className="featured-sermon__video latest-sermon__video" data-video="featured">
              <img src="/images/IMG_8837.JPG" alt="Walking in Divine Excellence" />
              <div className="latest-sermon__video-overlay">
                <div className="play-btn"></div>
              </div>
              <span className="latest-sermon__timestamp">08:22</span>
              <span className="latest-sermon__badge badge badge--gold">Latest Message</span>
            </div>
            <div className="featured-sermon__info latest-sermon__info">
              <span className="latest-sermon__category">Sunday Service</span>
              <h2 className="latest-sermon__title">Walking in Divine Excellence</h2>
              <p className="latest-sermon__desc">Discover how to align your academic pursuits with spiritual integrity. A deep
                dive into balancing the demands of university life while maintaining a fervent relationship with God.</p>
              <div className="latest-sermon__meta">
                <div className="latest-sermon__meta-item">
                  <span>👤</span> <span>Pastor Prince Aseidu Amponsah</span>
                </div>
                <div className="latest-sermon__meta-item">
                  <span>📅</span> <span>June 07, 2026</span>
                </div>
              </div>
              <a href="#" className="btn btn--dark" data-video="featured-cta">Watch Full Message →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FILTERS ===== */}
      <section className="sermon-filters" id="sermonFilters">
        <div className="container">
          <div className="sermon-filters__bar">
            <div className="filter-group">
              <label className="filter-group__label" htmlFor="filterSeries">Filter by Series</label>
              <select id="filterSeries">
                <option value="">All Series</option>
                <option value="the academic believer">The Academic Believer</option>
                <option value="foundations of faith">Foundations of Faith</option>
                <option value="special service">Special Service</option>
                <option value="campus revival">Campus Revival</option>
                <option value="prayer series">Prayer Series</option>
              </select>
            </div>
            <div className="filter-group">
              <label className="filter-group__label" htmlFor="filterSpeaker">Filter by Speaker</label>
              <select id="filterSpeaker">
                <option value="">All Speakers</option>
                <option value="pastor prince aseidu amponsah">Pastor Prince Aseidu Amponsah</option>
                <option value="elder obed noye">Elder Obed Noye</option>
                <option value="elder james mensah">Elder James Mensah</option>
                <option value="elder jude boadi">Elder Jude Boadi</option>
              </select>
            </div>
            <div className="filter-group">
              <label className="filter-group__label" htmlFor="filterSearch">Search Keywords</label>
              <input type="text" id="filterSearch" placeholder="Search sermons..." />
            </div>
            <button className="btn--reset" id="resetFilters">🔄 Reset Filters</button>
          </div>
        </div>
      </section>

      {/* ===== ALL MESSAGES ===== */}
      <section className="sermon-grid" id="sermonGrid">
        <div className="container">
          <div className="sermon-grid__header">
            <h2 className="sermon-grid__title">All Messages</h2>
            <span className="sermon-grid__count">Showing 6 sermons</span>
          </div>
          <div className="sermon-grid__cards">
            {/* Sermon Card 1 */}
            <div className="sermon-card" data-series="the academic believer" data-speaker="elder james mensah">
              <div className="sermon-card__image">
                <img src="/images/IMG_0140.jpg" alt="Navigating Midterms with Faith" />
                <span className="sermon-card__duration">45:30</span>
              </div>
              <div className="sermon-card__body">
                <div className="sermon-card__badge"><span className="badge badge--gold">The Academic Believer</span></div>
                <h3 className="sermon-card__title">Navigating Midterms with Faith</h3>
                <div className="sermon-card__meta">
                  <div className="sermon-card__meta-item"><span>👤</span> Elder James Mensah</div>
                  <div className="sermon-card__meta-item"><span>📅</span> May 31, 2026</div>
                </div>
              </div>
            </div>
            {/* Sermon Card 2 */}
            <div className="sermon-card" data-series="foundations of faith" data-speaker="pastor prince aseidu amponsah">
              <div className="sermon-card__image">
                <img src="/images/IMG_0249-Enhanced-NR.jpg" alt="Understanding Grace" />
                <span className="sermon-card__duration">1:12:05</span>
              </div>
              <div className="sermon-card__body">
                <div className="sermon-card__badge"><span className="badge badge--navy">Foundations of Faith</span></div>
                <h3 className="sermon-card__title">Understanding Grace</h3>
                <div className="sermon-card__meta">
                  <div className="sermon-card__meta-item"><span>👤</span> Pastor Prince Aseidu Amponsah</div>
                  <div className="sermon-card__meta-item"><span>📅</span> May 24, 2026</div>
                </div>
              </div>
            </div>
            {/* Sermon Card 3 */}
            <div className="sermon-card" data-series="special service" data-speaker="elder obed noye">
              <div className="sermon-card__image">
                <img src="/images/IMG_0413.JPG" alt="Freshers' Welcome Service" />
                <span className="sermon-card__duration">58:30</span>
              </div>
              <div className="sermon-card__body">
                <div className="sermon-card__badge"><span className="badge badge--teal">Special Service</span></div>
                <h3 className="sermon-card__title">Freshers' Welcome Service</h3>
                <div className="sermon-card__meta">
                  <div className="sermon-card__meta-item"><span>👤</span> Elder Obed Noye</div>
                  <div className="sermon-card__meta-item"><span>📅</span> May 17, 2026</div>
                </div>
              </div>
            </div>
            {/* Sermon Card 4 */}
            <div className="sermon-card" data-series="campus revival" data-speaker="elder jude boadi">
              <div className="sermon-card__image">
                <img src="/images/IMG_0090.jpg" alt="Revival Night Worship" />
                <span className="sermon-card__duration">1:30:00</span>
              </div>
              <div className="sermon-card__body">
                <div className="sermon-card__badge"><span className="badge badge--red">Campus Revival</span></div>
                <h3 className="sermon-card__title">Revival Night Worship</h3>
                <div className="sermon-card__meta">
                  <div className="sermon-card__meta-item"><span>👤</span> Elder Jude Boadi</div>
                  <div className="sermon-card__meta-item"><span>📅</span> May 10, 2026</div>
                </div>
              </div>
            </div>
            {/* Sermon Card 5 */}
            <div className="sermon-card" data-series="prayer series" data-speaker="pastor prince aseidu amponsah">
              <div className="sermon-card__image">
                <img src="/images/IMG_0225.jpg" alt="Power of Persistent Prayer" />
                <span className="sermon-card__duration">52:15</span>
              </div>
              <div className="sermon-card__body">
                <div className="sermon-card__badge"><span className="badge badge--gold">Prayer Series</span></div>
                <h3 className="sermon-card__title">Power of Persistent Prayer</h3>
                <div className="sermon-card__meta">
                  <div className="sermon-card__meta-item"><span>👤</span> Pastor Prince Aseidu Amponsah</div>
                  <div className="sermon-card__meta-item"><span>📅</span> May 03, 2026</div>
                </div>
              </div>
            </div>
            {/* Sermon Card 6 */}
            <div className="sermon-card" data-series="the academic believer" data-speaker="elder obed noye">
              <div className="sermon-card__image">
                <img src="/images/_MG_9922.jpg" alt="Faith & Final Exams" />
                <span className="sermon-card__duration">40:22</span>
              </div>
              <div className="sermon-card__body">
                <div className="sermon-card__badge"><span className="badge badge--gold">The Academic Believer</span></div>
                <h3 className="sermon-card__title">Faith & Final Exams</h3>
                <div className="sermon-card__meta">
                  <div className="sermon-card__meta-item"><span>👤</span> Elder Obed Noye</div>
                  <div className="sermon-card__meta-item"><span>📅</span> April 26, 2026</div>
                </div>
              </div>
            </div>
          </div>
          <div className="sermon-grid__load-more">
            <button className="btn btn--outline-dark" id="loadMoreBtn">Load More Messages ↓</button>
          </div>
        </div>
      </section>
    </>
  );
}
