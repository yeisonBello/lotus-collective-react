import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-40 px-6 py-5 md:px-12 flex items-center justify-between mix-blend-difference text-white">
      <Link
        to="/"
        className="text-2xl font-serif-display tracking-tighter uppercase z-50 transition-colors hover-glow"
        style={{
          color: 'var(--brass-bright)',
          transitionDuration: 'var(--timing-quarter)'
        }}
      >
        Lotus<span className="italic" style={{ color: 'var(--neon-coral)' }}>Col.</span>
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
        <a
          href="#experience"
          className="transition-colors"
          style={{ transitionDuration: 'var(--timing-quarter)' }}
          onMouseEnter={(e) => e.target.style.color = 'var(--brass-bright)'}
          onMouseLeave={(e) => e.target.style.color = 'white'}
        >
          The Story
        </a>
        <a
          href="#music"
          className="transition-colors"
          style={{ transitionDuration: 'var(--timing-quarter)' }}
          onMouseEnter={(e) => e.target.style.color = 'var(--brass-bright)'}
          onMouseLeave={(e) => e.target.style.color = 'white'}
        >
          Discography
        </a>
        <a
          href="#collective"
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
          href="#shows"
          className="transition-colors"
          style={{ transitionDuration: 'var(--timing-quarter)' }}
          onMouseEnter={(e) => e.target.style.color = 'var(--brass-bright)'}
          onMouseLeave={(e) => e.target.style.color = 'white'}
        >
          Upcoming Shows
        </a>
      </div>

      <button
        className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all group hover-glow"
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
      </button>
    </nav>
  );
};

export default Navbar;
