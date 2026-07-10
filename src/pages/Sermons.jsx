import { useState, useEffect, useMemo } from 'react';
import { supabase } from '../supabaseClient';

export default function Sermons() {
  const [sermons, setSermons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [speakerFilter, setSpeakerFilter] = useState('');
  const [search, setSearch] = useState('');

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
              <div className="featured-sermon__video latest-sermon__video">
                <video
                  controls
                  style={{ width: '100%', height: '100%', display: 'block', borderRadius: 'inherit' }}
                >
                  <source src={featured.video_url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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
              <div className="sermon-card" key={sermon.id}>
                <div className="sermon-card__image">
                  <video controls style={{ width: '100%', height: '100%', display: 'block' }}>
                    <source src={sermon.video_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
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
    </>
  );
}
