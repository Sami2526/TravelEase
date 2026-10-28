import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-20 flex h-[72px] w-full items-center justify-between border-b border-[#17383d]/10 bg-[#fbf8f1]/95 px-6 text-[#42595b] shadow-sm backdrop-blur-md md:px-16 lg:px-24 xl:px-32">
      <Link to="/" className="text-2xl font-bold text-[#2c6865]">
        Travel<span className="text-[#17383d]">Ease</span>
      </Link>

      <ul className="hidden items-center gap-2 font-medium md:flex">
        <li><Link to="/" className="rounded-full px-4 py-2 transition hover:bg-[#e8f0ed] hover:text-[#2c6865]">Home</Link></li>
        <li><Link to="/gallery" className="rounded-full px-4 py-2 transition hover:bg-[#e8f0ed] hover:text-[#2c6865]">Gallery</Link></li>
        <li><Link to="/contact" className="rounded-full px-4 py-2 transition hover:bg-[#e8f0ed] hover:text-[#2c6865]">Contact Us</Link></li>
        <li><Link to="/about" className="rounded-full px-4 py-2 transition hover:bg-[#e8f0ed] hover:text-[#2c6865]">About</Link></li>
      </ul>

      <Link to="/#destinations" className="hidden rounded-full bg-[#2c6865] px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#235653] md:inline-block">
        Plan a trip
      </Link>

      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="rounded-full px-3 py-2 text-[#17383d] transition hover:bg-[#e8f0ed] md:hidden"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>

      {isMenuOpen && (
        <div className="absolute left-0 top-[72px] w-full border-t border-[#17383d]/10 bg-[#fbf8f1] p-6 text-[#42595b] shadow-lg md:hidden">
          <ul className="flex flex-col gap-1 font-medium">
            <li><Link to="/" className="block rounded-lg px-3 py-2 transition hover:bg-[#e8f0ed] hover:text-[#2c6865]" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/gallery" className="block rounded-lg px-3 py-2 transition hover:bg-[#e8f0ed] hover:text-[#2c6865]" onClick={() => setIsMenuOpen(false)}>Gallery</Link></li>
            <li><Link to="/contact" className="block rounded-lg px-3 py-2 transition hover:bg-[#e8f0ed] hover:text-[#2c6865]" onClick={() => setIsMenuOpen(false)}>Contact Us</Link></li>
            <li><Link to="/about" className="block rounded-lg px-3 py-2 transition hover:bg-[#e8f0ed] hover:text-[#2c6865]" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          </ul>
          <Link
            to="/#destinations"
            className="mt-5 inline-block rounded-full bg-[#2c6865] px-6 py-3 font-bold text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Plan a trip
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
