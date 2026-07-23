import { useState, useEffect, useMemo } from 'react';
import { supabase } from '../supabaseClient';

export default function Sermons() {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [speakerFilter, setSpeakerFilter] = useState('');
  const [search, setSearch] = useState('');
  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    async function fetchSermons() {
      const { data, error } = await supabase
        .from('sermons')
        .select('*')
        .order('date', { ascending: false });

      if (error) {
        setError(error.message);
      } else {
        setSermons(data);
      }
      setLoading(false);
    }

    fetchSermons();
  }, []);

  // Build the speaker dropdown options from whatever speakers actually exist in the data
  const speakers = useMemo(() => {
    const unique = new Set(sermons.map((s) => s.speaker).filter(Boolean));
    return Array.from(unique);
  }, [sermons]);

  const filteredSermons = useMemo(() => {
    return sermons.filter((s) => {
      const matchesSpeaker = speakerFilter ? s.speaker === speakerFilter : true;
      const matchesSearch = search
        ? s.title?.toLowerCase().includes(search.toLowerCase())
        : true;
      return matchesSpeaker && matchesSearch;
    });
  }, [sermons, speakerFilter, search]);

  // Newest sermon (after filtering) becomes the featured one; the rest go in the grid
  const featured = filteredSermons[0];
  const rest = filteredSermons.slice(1);

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    });
  };

  const resetFilters = () => {
    setSpeakerFilter('');
    setSearch('');
  };

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
            speaker or search by title to find exactly what you're looking for.</p>
        </div>
      </section>

      {/* ===== FEATURED SERMON ===== */}
      <section className="featured-sermon" id="featuredSermon">
        <div className="container">
          {loading ? (
            <p>Loading sermons...</p>
          ) : error ? (
            <p>Couldn't load sermons right now. Please try again later.</p>
          ) : !featured ? (
            <p>No sermons match your filters yet.</p>
          ) : (
            <div className="featured-sermon__content">
              <div className="featured-sermon__video latest-sermon__video" onClick={() => setActiveVideo(featured)} style={{ cursor: 'pointer', backgroundColor: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                {featured.thumbnail_url ? (
                  <img src={featured.thumbnail_url} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }} />
                ) : (
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '4rem' }}>▶</div>
                )}
                <span className="latest-sermon__badge badge badge--gold">Latest Message</span>
              </div>
              <div className="featured-sermon__info latest-sermon__info">
                <span className="latest-sermon__category">Sunday Service</span>
                <h2 className="latest-sermon__title">{featured.title}</h2>
                <div className="latest-sermon__meta">
                  <div className="latest-sermon__meta-item">
                    <span>👤</span> <span>{featured.speaker}</span>
                  </div>
                  <div className="latest-sermon__meta-item">
                    <span>📅</span> <span>{formatDate(featured.date)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===== FILTERS ===== */}
      <section className="sermon-filters" id="sermonFilters">
        <div className="container">
          <div className="sermon-filters__bar">
            <div className="filter-group">
              <label className="filter-group__label" htmlFor="filterSpeaker">Filter by Speaker</label>
              <select
                id="filterSpeaker"
                value={speakerFilter}
                onChange={(e) => setSpeakerFilter(e.target.value)}
              >
                <option value="">All Speakers</option>
                {speakers.map((sp) => (
                  <option key={sp} value={sp}>{sp}</option>
                ))}
              </select>
            </div>
            <div className="filter-group">
              <label className="filter-group__label" htmlFor="filterSearch">Search Keywords</label>
              <input
                type="text"
                id="filterSearch"
                placeholder="Search sermons..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <button className="btn--reset" type="button" onClick={resetFilters}>🔄 Reset Filters</button>
          </div>
        </div>
      </section>

      {/* ===== ALL MESSAGES ===== */}
      <section className="sermon-grid" id="sermonGrid">
        <div className="container">
          <div className="sermon-grid__header">
            <h2 className="sermon-grid__title">All Messages</h2>
            <span className="sermon-grid__count">
              {loading ? 'Loading…' : `Showing ${rest.length} sermon${rest.length === 1 ? '' : 's'}`}
            </span>
          </div>
          <div className="sermon-grid__cards">
            {rest.map((sermon) => (
              <div className="sermon-card" key={sermon.id} onClick={() => setActiveVideo(sermon)} style={{ cursor: 'pointer' }}>
                <div className="sermon-card__image" style={{ backgroundColor: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  {sermon.thumbnail_url ? (
                    <img src={sermon.thumbnail_url} alt={sermon.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '3rem' }}>▶</div>
                  )}
                </div>
                <div className="sermon-card__body">
                  <h3 className="sermon-card__title">{sermon.title}</h3>
                  <div className="sermon-card__meta">
                    <div className="sermon-card__meta-item"><span>👤</span> {sermon.speaker}</div>
                    <div className="sermon-card__meta-item"><span>📅</span> {formatDate(sermon.date)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {!loading && !error && filteredSermons.length === 0 && (
            <p>No sermons match your filters. Try resetting them.</p>
          )}
        </div>
      </section>

      {/* ===== VIDEO MODAL ===== */}
      {activeVideo && (
        <div className="video-modal-overlay" onClick={() => setActiveVideo(null)} style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', 
          backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem'
        }}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()} style={{
            position: 'relative', width: '100%', maxWidth: '900px', backgroundColor: '#000', borderRadius: '12px', overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
          }}>
            <button className="video-modal-close" onClick={() => setActiveVideo(null)} style={{
              position: 'absolute', top: '15px', right: '20px', background: 'rgba(0,0,0,0.5)', border: 'none', color: '#fff', 
              fontSize: '1.5rem', cursor: 'pointer', zIndex: 10, width: '40px', height: '40px', borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>✕</button>
            <video controls autoPlay style={{ width: '100%', display: 'block', maxHeight: '80vh' }}>
              <source src={activeVideo.video_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
