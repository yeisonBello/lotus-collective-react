const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-zinc-900 to-black pt-24 pb-12 border-t" style={{ borderColor: 'var(--brass-dark)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        {/* Booking CTA */}
        <div className="fade-in">
          <h2 className="font-serif-display text-5xl mb-6 brass-shimmer" style={{ color: 'var(--brass-bright)' }}>Contact Us</h2>
          <p className="text-zinc-400 mb-8 max-w-md">
            Do you have questions, want to book a show, or collaborate on a new piece?
            Reach out, and let's make magic happen.
          </p>

          <div className="bg-white/5 p-6 rounded-sm border brass-glow" style={{ borderColor: 'var(--brass-dark)' }}>
            <div className="text-sm text-zinc-300 space-y-2 mb-6">
              <p className="font-bold" style={{ color: 'var(--brass-bright)' }}>Direct Booking:</p>
              <p>Ivan Dávila Leyton</p>
              <p className="font-mono" style={{ color: 'var(--neon-coral)' }}>+1 305 240 3325</p>
            </div>
            <button
              type="button"
              className="w-full font-bold text-xs uppercase tracking-widest py-4 transition-all hover-glow"
              style={{
                background: 'var(--gold-shimmer)',
                color: 'var(--black-deepest)',
                transitionDuration: 'var(--timing-quarter)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--neon-coral)';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--gold-shimmer)';
                e.currentTarget.style.color = 'var(--black-deepest)';
              }}
            >
              Send Inquiry
            </button>
          </div>
        </div>

        {/* Footer Links & Info */}
        <div className="flex flex-col justify-between fade-in" style={{ animationDelay: '150ms' }}>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-medium mb-4" style={{ color: 'var(--brass-bright)' }}>Explore</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>
                  <a
                    href="#music"
                    className="transition-colors"
                    style={{ transitionDuration: 'var(--timing-quarter)' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--brass-bright)'}
                    onMouseLeave={(e) => e.target.style.color = 'rgb(113, 113, 122)'}
                  >
                    Discography
                  </a>
                </li>
                <li>
                  <a
                    href="#shows"
                    className="transition-colors"
                    style={{ transitionDuration: 'var(--timing-quarter)' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--brass-bright)'}
                    onMouseLeave={(e) => e.target.style.color = 'rgb(113, 113, 122)'}
                  >
                    Upcoming Shows
                  </a>
                </li>
                <li>
                  <a
                    href="#collective"
                    className="transition-colors"
                    style={{ transitionDuration: 'var(--timing-quarter)' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--brass-bright)'}
                    onMouseLeave={(e) => e.target.style.color = 'rgb(113, 113, 122)'}
                  >
                    Band Members
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors"
                    style={{ transitionDuration: 'var(--timing-quarter)' }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--brass-bright)'}
                    onMouseLeave={(e) => e.target.style.color = 'rgb(113, 113, 122)'}
                  >
                    EPK
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4" style={{ color: 'var(--brass-bright)' }}>Socials</h4>
              <ul className="space-y-2 text-sm text-zinc-500">
                <li>
                  <a
                    href="#"
                    className="transition-colors flex items-center gap-2"
                    style={{ transitionDuration: 'var(--timing-quarter)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brass-bright)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(113, 113, 122)'}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="transition-colors flex items-center gap-2"
                    style={{ transitionDuration: 'var(--timing-quarter)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brass-bright)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgb(113, 113, 122)'}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    Spotify
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-auto">
            <div className="text-[10rem] leading-none font-serif-display text-white/5 select-none pointer-events-none -ml-4">
              LOTUS
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-zinc-600">
        <p>© 2026 Lotus Collective - All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-zinc-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-zinc-400">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
