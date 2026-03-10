import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 w-full z-40 px-6 md:px-12 flex items-center justify-between transition-colors duration-300 ${isMenuOpen ? 'bg-black' : 'mix-blend-difference'
        } py-5 text-white`}
    >
      <Link
        to="/"
        className="z-50 transition-transform hover:scale-105 duration-300"
        onClick={closeMenu}
      >
        <div
          role="img"
          aria-label="Lotus Collective Logo"
          className="h-12 w-32"
          style={{
            backgroundColor: isMenuOpen ? 'white' : 'var(--brass-bright)',
            maskImage: 'url(/assets/background/logo.webp)',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'left center',
            WebkitMaskImage: 'url(/assets/background/logo.webp)',
            WebkitMaskSize: 'contain',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskPosition: 'left center',
            transition: 'background-color 0.3s'
          }}
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
        <a
          href="/#band-story"
          className="transition-colors"
          style={{ transitionDuration: 'var(--timing-quarter)' }}
          onMouseEnter={(e) => e.target.style.color = 'var(--brass-bright)'}
          onMouseLeave={(e) => e.target.style.color = 'white'}
        >
          The Journey
        </a>
        <a
          href="/#music"
          className="transition-colors"
          style={{ transitionDuration: 'var(--timing-quarter)' }}
          onMouseEnter={(e) => e.target.style.color = 'var(--brass-bright)'}
          onMouseLeave={(e) => e.target.style.color = 'white'}
        >
          Discography
        </a>
        <a
          href="/#collective"
          className="transition-colors"
          style={{ transitionDuration: 'var(--timing-quarter)' }}
          onMouseEnter={(e) => e.target.style.color = 'var(--brass-bright)'}
          onMouseLeave={(e) => e.target.style.color = 'white'}
        >
          Members
        </a>
        <Link
          to="/gallery"
          className="transition-colors"
          style={{ transitionDuration: 'var(--timing-quarter)' }}
          onMouseEnter={(e) => (e.target.style.color = 'var(--brass-bright)')}
          onMouseLeave={(e) => (e.target.style.color = 'white')}
        >
          Gallery
        </Link>
        <a
          href="/#shows"
          className="transition-colors"
          style={{ transitionDuration: 'var(--timing-quarter)' }}
          onMouseEnter={(e) => e.target.style.color = 'var(--brass-bright)'}
          onMouseLeave={(e) => e.target.style.color = 'white'}
        >
          Upcoming Shows
        </a>
      </div>

      <div className="flex items-center gap-4">
        <Link
          to="/book"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all group hover-glow"
          style={{
            border: '1px solid var(--brass-dark)',
            transitionDuration: 'var(--timing-quarter)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--gold-shimmer)';
            e.currentTarget.style.color = 'var(--black-deepest)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'white';
          }}
        >
          <span>Book Lotus</span>
          <svg
            className="w-4 h-4 transition-transform"
            style={{ transitionDuration: 'var(--timing-eighth)' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 p-2 text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              style={{ backgroundColor: 'var(--brass-bright)' }}
            />
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
              style={{ backgroundColor: 'var(--brass-bright)' }}
            />
            <span
              className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}
              style={{ backgroundColor: 'var(--brass-bright)' }}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <a
          href="/#band-story"
          className="text-2xl font-serif-display transition-colors"
          style={{ color: 'var(--white-mute)' }}
          onClick={closeMenu}
        >
          The Journey
        </a>
        <a
          href="/#music"
          className="text-2xl font-serif-display transition-colors"
          style={{ color: 'var(--white-mute)' }}
          onClick={closeMenu}
        >
          Discography
        </a>
        <a
          href="/#collective"
          className="text-2xl font-serif-display transition-colors"
          style={{ color: 'var(--white-mute)' }}
          onClick={closeMenu}
        >
          Members
        </a>
        <Link
          to="/gallery"
          className="text-2xl font-serif-display transition-colors"
          style={{ color: 'var(--white-mute)' }}
          onClick={closeMenu}
        >
          Gallery
        </Link>
        <a
          href="/#shows"
          className="text-2xl font-serif-display transition-colors"
          style={{ color: 'var(--white-mute)' }}
          onClick={closeMenu}
        >
          Upcoming Shows
        </a>
        <Link
          to="/book"
          className="mt-4 px-8 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-all"
          style={{
            border: '1px solid var(--brass-bright)',
            color: 'var(--brass-bright)'
          }}
          onClick={closeMenu}
        >
          Book Lotus
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
