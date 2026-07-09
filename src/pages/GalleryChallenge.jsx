import { Link } from 'react-router-dom';

const challengeImages = [
  '056A8260.jpg', '056A8371.jpg', '056A8404.JPG', '056A8408.JPG',
  'IMG_0106-Enhanced-NR.jpg', 'IMG_0140.jpg', 'IMG_0147.jpg', 'IMG_0165.jpg',
  'IMG_0208.jpg', 'IMG_0228.jpg', 'IMG_0359.JPG', 'IMG_0366.JPG',
  'IMG_0411.JPG', 'IMG_8380.JPG',
];

export default function GalleryChallenge() {
  return (
    <>
      <header className="gallery-header" style={{
        background: "linear-gradient(to bottom, rgba(16, 20, 60, 0.82), rgba(16, 20, 60, 0.90)), url('/images/Challenge/IMG_0140.jpg')",
        backgroundSize: 'cover', backgroundPosition: 'center'
      }}>
        <div className="container">
          <h1>Challenge'26 Gallery</h1>
          <p>Memories from our intensive and life-transforming retreat.</p>
          <Link to="/events" className="back-btn">← Back to Events</Link>
        </div>
      </header>

      <section className="container gallery-grid">
        {challengeImages.map((img, i) => (
          <img key={i} src={`/images/Challenge/${img}`} className="gallery-img" alt={`Challenge'26 Gallery ${i + 1}`} />
        ))}
      </section>
    </>
  );
}
