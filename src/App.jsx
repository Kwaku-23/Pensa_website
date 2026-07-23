import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Family from './pages/Family';
import Sermons from './pages/Sermons';
import Events from './pages/Events';
import Departments from './pages/Departments';
import Give from './pages/Give';
import Contact from './pages/Contact';
import GalleryChallenge from './pages/GalleryChallenge';
import GalleryPensice from './pages/GalleryPensice';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const openAuth = () => setAuthModalOpen(true);
  const closeAuth = () => setAuthModalOpen(false);

  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Navbar onOpenAuth={openAuth} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/leadership" element={<Leadership />} />
            <Route path="/family" element={<Family />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/events" element={<Events />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/give" element={<Give />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery-challenge" element={<GalleryChallenge />} />
            <Route path="/gallery-pensice" element={<GalleryPensice />} />
          </Routes>
        </main>
        <Footer />
      </Router>
      <AuthModal isOpen={authModalOpen} onClose={closeAuth} />
    </AuthProvider>
  );
}
