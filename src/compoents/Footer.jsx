import { useState } from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    alert('Thank you for subscribing to our travel updates!');
    setEmail('');
  };

  return (
    <footer className="bg-[#102e35] text-[#c3d0ce]">
      <div className="mx-auto max-w-7xl px-6 pb-6 pt-14 md:px-16 lg:px-24 xl:px-32">
        <div className="mb-14 flex flex-col gap-6 rounded-3xl border border-white/10 bg-[#183d43] p-7 md:flex-row md:items-center md:justify-between md:p-9">
          <div className="max-w-xl">
            <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-[#e5a078]">A little inspiration, delivered</p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">Your next great trip starts here.</h2>
            <p className="mt-2 text-sm leading-6 text-[#bfd0ce]">Get destination ideas and thoughtful travel offers in your inbox.</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full max-w-md rounded-full bg-white p-1.5">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              aria-label="Email address"
              required
              className="min-w-0 flex-1 rounded-full bg-transparent px-4 text-sm text-[#17383d] outline-none placeholder:text-[#899594]"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-[#d77a55] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#c66845] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d77a55]"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Link to="/" className="mb-4 inline-block text-2xl font-bold text-white">
              Travel<span className="text-[#e5a078]">Ease</span>
            </Link>
            <p className="text-sm leading-7 text-[#b3c3c1]">
              Explore more, worry less. We help make every journey comfortable, memorable, and full of discovery.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-[#e5a078] hover:bg-[#e5a078] hover:text-[#102e35]">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-[#e5a078] hover:bg-[#e5a078] hover:text-[#102e35]">
                <FaFacebookF />
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="X" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-[#e5a078] hover:bg-[#e5a078] hover:text-[#102e35]">
                <FaXTwitter />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-[#e5a078] hover:bg-[#e5a078] hover:text-[#102e35]">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-white">Explore</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/about" className="transition hover:text-[#e5a078]">About Us</Link></li>
              <li><Link to="/#destinations" className="transition hover:text-[#e5a078]">Destinations</Link></li>
              <li><Link to="/#services" className="transition hover:text-[#e5a078]">Our Services</Link></li>
              <li><Link to="/#testimonials" className="transition hover:text-[#e5a078]">Traveler Stories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-white">Good to know</h3>
            <ul className="flex flex-col gap-3 text-sm">
              <li><Link to="/contact" className="transition hover:text-[#e5a078]">FAQs</Link></li>
              <li><Link to="/contact" className="transition hover:text-[#e5a078]">Booking Information</Link></li>
              <li><Link to="/contact" className="transition hover:text-[#e5a078]">Cancellation Policy</Link></li>
              <li><Link to="/contact" className="transition hover:text-[#e5a078]">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.14em] text-white">Get in touch</h3>
            <ul className="flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-[#e5a078]" />
                <span>Plan your next adventure with us.</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="shrink-0 text-[#e5a078]" />
                <Link to="/contact" className="transition hover:text-[#e5a078]">Contact our team</Link>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="shrink-0 text-[#e5a078]" />
                <a href="mailto:samisultankhel@gmail.com" className="break-all transition hover:text-[#e5a078]">samisultankhel@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-xs text-[#9db0ae] md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} TravelEase. All rights reserved.</p>
          <Link to="/about" className="transition hover:text-[#e5a078]">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
