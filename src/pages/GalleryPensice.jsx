import { Link } from 'react-router-dom';

const pensiceImages = [
  'Chambers_of_mines.jpg', 'Dreamer.jpg', 'Hilda_Zone.jpg',
  'IMG_1697.jpg', 'IMG_1730.jpg', 'IMG_1782.jpg', 'IMG_1904.jpg',
  'IMG_1951.jpg', 'IMG_2026.jpg', 'IMG_2038.jpg', 'IMG_2067.jpg',
  'IMG_2101.jpg', 'IMG_2208.jpg', 'IMG_2346.jpg', 'IMG_2399.jpg',
  'IMG_2631.jpg', 'IMG_2657.jpg', 'IMG_3161.jpg', 'IMG_3162.jpg',
  'KT_hall.jpg', 'Pe.jpg', 'Pensice.jpg', 'Pensice_school.jpg',
];

export default function GalleryPensice() {
  return (
    <>
      <header className="gallery-header" style={{
        background: "linear-gradient(to bottom, rgba(16, 20, 60, 0.82), rgba(16, 20, 60, 0.90)), url('/images/Pensice/IMG_1730.jpg')",
        backgroundSize: 'cover', backgroundPosition: 'center'
      }}>
        <div className="container">
          <h1>Pensice Gallery</h1>
          <p>Memories from our Pentecost Students in Community Evangelism programs.</p>
          <Link to="/events" className="back-btn">← Back to Events</Link>
        </div>
      </header>

      <section className="container gallery-grid">
        {pensiceImages.map((img, i) => (
          <img key={i} src={`/images/Pensice/${img}`} className="gallery-img" alt={`Pensice Gallery ${i + 1}`} />
        ))}
      </section>
    </>
  );
}
