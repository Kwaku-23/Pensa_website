import { useState, useMemo, useEffect } from 'react';

const allEvents = [
  { id: 1, title: 'Handing Over', date: 'Coming Soon', location: 'Main Campus Auditorium', desc: 'Join us for the official handing over ceremony to welcome the incoming executives who will lead the fellowship for the next academic year.', category: 'service', status: 'upcoming', img: '/images/LCC_executives.jpg' },
  { id: 2, title: "Pensice'26 (Pentecost Students in Community Evangelism)", date: 'September 2026', location: 'Tarkwa Suburbs & Local Communities', desc: 'Join us for our flagship annual community outreach program, taking the Gospel of Christ to the streets, sharing love, offering medical screenings, and winning souls for the Kingdom.', category: 'outreach', status: 'upcoming', img: "/images/Pensice'26.jpg", rsvp: true },
  { id: 3, title: "Challenge'26", date: 'Earlier in 2026', location: 'Main Campus', desc: 'An intensive and life-transforming competition and retreat challenging our faith, academics, and spiritual growth.', category: 'academic', status: 'past', img: '/images/Challenge/IMG_0140.jpg', galleryUrl: '/gallery-challenge' },
  { id: 4, title: 'Pensice 25', date: 'September 2025', location: 'Local Communities', desc: 'Our flagship Pentecost Students in Community Evangelism program from last year, taking the gospel to the unreached.', category: 'outreach', status: 'past', img: '/images/Pensice/IMG_1730.jpg', galleryUrl: '/gallery-pensice' },
];

export default function Events() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [filterCategory, setFilterCategory] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = useMemo(() => {
    return allEvents.filter(evt => {
      const matchStatus = evt.status === activeTab;
      const matchCategory = filterCategory === '' || evt.category === filterCategory;
      const matchSearch = evt.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchStatus && matchCategory && matchSearch;
    });
  }, [activeTab, filterCategory, searchQuery]);

  return (
    <>
      <style>{`
        /* Custom styles for Events Page */
        .events-filters {
          padding: var(--space-xl) 0;
          margin-bottom: var(--space-md);
        }

        .events-filters__bar {
          display: flex;
          align-items: flex-end;
          gap: var(--space-lg);
          flex-wrap: wrap;
        }

        .events-grid {
          padding: var(--space-xl) 0 var(--space-4xl);
        }

        .events-grid__cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-xl);
        }

        /* Scoped override for event cards on this page */
        .events-page-card {
          display: flex;
          flex-direction: column;
          background: var(--white);
          border: 1px solid var(--gray-200);
          border-radius: var(--radius-lg);
          overflow: hidden;
          transition: transform var(--transition-base), box-shadow var(--transition-base);
        }

        .events-page-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .events-page-card .event-card__image {
          height: 300px;
          position: relative;
          overflow: hidden;
        }

        .events-page-card .event-card__body {
          padding: var(--space-lg);
          display: flex;
          flex-direction: column;
        }

        @media (max-width: 992px) {
          .events-grid__cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .events-grid__cards {
            grid-template-columns: 1fr;
          }
        }

        .event-card__meta-info {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: var(--space-md);
          font-size: 0.8rem;
          color: var(--gray-500);
        }

        .event-card__meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .event-card__icon {
          color: var(--gold-500);
        }

        .events-tabs {
          display: flex;
          gap: var(--space-md);
          margin-bottom: var(--space-xl);
          border-bottom: 1px solid var(--gray-200);
          padding-bottom: var(--space-sm);
        }

        .events-tab {
          background: none;
          border: none;
          font-weight: 600;
          font-size: 1rem;
          color: var(--gray-500);
          padding: var(--space-xs) var(--space-sm);
          cursor: pointer;
          position: relative;
          transition: color var(--transition-fast);
        }

        .events-tab:hover {
          color: var(--navy-900);
        }

        .events-tab.active {
          color: var(--navy-900);
        }

        .events-tab.active::after {
          content: '';
          position: absolute;
          bottom: -9px;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--gold-500);
          border-radius: 2px;
        }

        .rsvp-modal .form-group {
          margin-bottom: var(--space-md);
        }

        .no-events {
          grid-column: 1 / -1;
          text-align: center;
          padding: var(--space-3xl) 0;
          color: var(--gray-400);
        }

        .no-events__icon {
          font-size: 3rem;
          margin-bottom: var(--space-md);
        }
      `}</style>

      {/* ===== HERO ===== */}
      <section className="hero hero--events" id="heroEvents">
        <div className="hero__decoration hero__decoration--circle"></div>
        <div className="hero__decoration hero__decoration--circle-2"></div>
        <div className="hero__decoration hero__decoration--dots"></div>
        <div className="hero__decoration hero__decoration--line"></div>
        <div className="container">
          <h1 className="hero__title" style={{ fontFamily: 'var(--font-serif)' }}>Upcoming Events</h1>
          <p className="hero__subtitle">Find where to grow, serve, and build godly connections. Register for our upcoming
            programs, outreaches, and special fellowships.</p>
        </div>
      </section>

      {/* ===== EVENTS FILTERS ===== */}
      <section className="events-filters" id="eventsFilters">
        <div className="container">
          <div className="events-filters__bar">
            <div className="filter-group">
              <span className="filter-group__label">Filter by Category</span>
              <select id="filterCategory" value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
                <option value="">All Categories</option>
                <option value="service">Service</option>
                <option value="fellowship">Fellowship</option>
                <option value="outreach">Outreach</option>
                <option value="ministry">Ministry</option>
                <option value="academic">Academic</option>
              </select>
            </div>
            <div className="filter-group">
              <span className="filter-group__label">Search Events</span>
              <input type="text" id="filterSearch" placeholder="Search event title..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            </div>
            <button className="btn--reset" id="resetFilters" onClick={() => { setFilterCategory(''); setSearchQuery(''); }}>✕ Clear Filters</button>
          </div>
        </div>
      </section>

      {/* ===== EVENTS SECTION ===== */}
      <section className="events-grid" id="eventsGrid">
        <div className="container">

          <div className="events-tabs">
            <button className={`events-tab ${activeTab === 'upcoming' ? 'active' : ''}`} data-view="upcoming" onClick={() => setActiveTab('upcoming')}>Upcoming Programs</button>
            <button className={`events-tab ${activeTab === 'past' ? 'active' : ''}`} data-view="past" onClick={() => setActiveTab('past')}>Past Events Archive</button>
          </div>

          <div className="events-grid__cards" id="eventsContainer">
            {filteredEvents.length > 0 ? (
              filteredEvents.map(evt => (
                <div key={evt.id} className="events-page-card" data-category={evt.category} data-status={evt.status}>
                  <div className="event-card__image" style={evt.status === 'past' ? { filter: 'grayscale(40%)', backgroundColor: 'var(--navy-900)' } : { backgroundColor: 'var(--navy-900)' }}>
                    <img src={evt.img} alt={evt.title} style={{ objectFit: 'contain' }} />
                  </div>
                  <div className="event-card__body">
                    <div className="event-card__tags">
                      <span className={`badge ${evt.category === 'service' || evt.category === 'academic' ? 'badge--gold' : 'badge--navy'}`}>
                        {evt.category.charAt(0).toUpperCase() + evt.category.slice(1)}
                      </span>
                      {evt.status === 'past' && (
                        <span className="badge badge--navy" style={{ background: 'rgba(107, 114, 128, 0.1)', color: 'var(--gray-500)' }}>Past Event</span>
                      )}
                    </div>
                    <h3 className="event-card__title" style={{ marginTop: '8px' }}>{evt.title}</h3>
                    <div className="event-card__meta-info">
                      <div className="event-card__meta-item">
                        <span className="event-card__icon">📅</span>
                        <span>{evt.date}</span>
                      </div>
                      {evt.location && (
                        <div className="event-card__meta-item">
                          <span className="event-card__icon">📍</span>
                          <span>{evt.location}</span>
                        </div>
                      )}
                    </div>
                    <p className="event-card__desc">{evt.desc}</p>
                    {evt.rsvp && <button className="btn btn--dark btn--block">Register for Event</button>}
                    {evt.galleryUrl && <a href={evt.galleryUrl} className="btn btn--outline-dark btn--block">View Gallery</a>}
                  </div>
                </div>
              ))
            ) : (
              <div className="no-events">
                <div className="no-events__icon">🔍</div>
                <p>No events found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
