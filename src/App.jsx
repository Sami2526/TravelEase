
import { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './compoents/Navbar';
import Footer from './compoents/Footer';

const ScrollManager = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth';

      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        target?.scrollIntoView({ behavior, block: 'start' });
        return;
      }

      window.scrollTo({ top: 0, behavior });
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [pathname, hash, key]);

  return null;
};

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
