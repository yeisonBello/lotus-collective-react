import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * LotusFooter Component - Minimalist Design
 *
 * Inspired by artistic, minimalist footer design with prominent lotus imagery.
 * Features two-column layout with dramatic lotus flower visual on the right.
 */
const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <footer
      ref={ref}
      className="relative w-full bg-black pt-32 pb-12 border-t overflow-hidden"
      style={{
        borderColor: 'rgba(212, 175, 55, 0.2)',
        minHeight: '60vh'
      }}
    >
      {/* Film Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.02'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      />

        {/* Removed lotus flower background image and fallback flower graphic */}

      {/* Main Content - Two Column Layout */}
      <motion.div
        className="relative z-20 max-w-7xl mx-auto px-8 md:px-16"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">

          {/* Left Column - Brand Identity */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            <h2
              className="font-serif text-6xl md:text-7xl mb-6 tracking-tight"
              style={{
                color: '#f5f5f5',
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                letterSpacing: '0.02em'
              }}
            >
              LOTUSCOL
            </h2>

            <p
              className="font-serif italic text-base md:text-lg"
              style={{
                color: 'rgba(212, 175, 55, 0.8)',
                fontFamily: 'var(--font-display)',
                fontWeight: 300,
                letterSpacing: '0.05em',
                maxWidth: '400px'
              }}
            >
              "Tropical Impressionism from the heart of Miami."
            </p>
          </motion.div>

          {/* Right Column - Navigation & Social */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16"
          >

            {/* Explore Section */}
            <div>
              <h3
                className="text-xs uppercase mb-8 tracking-[0.3em]"
                style={{ color: 'var(--brass-bright)' }}
              >
                Explore
              </h3>
              <nav>
                <ul className="space-y-4 text-sm">
                  {[
                    { label: 'GALLERY', href: '/gallery' },
                    { label: 'UPCOMING SHOWS', href: '#shows' },
                    { label: 'EPK', href: '#epk' },
                  ].map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="transition-all inline-block"
                        style={{
                          color: 'rgba(255, 255, 255, 0.4)',
                          letterSpacing: '0.1em',
                          fontSize: '0.75rem',
                          transitionDuration: 'var(--timing-quarter)',
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.color = 'var(--brass-bright)';
                          e.target.style.transform = 'translateX(4px)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.color = 'rgba(255, 255, 255, 0.4)';
                          e.target.style.transform = 'translateX(0)';
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Connect Section */}
            <div>
              <h3
                className="text-xs uppercase mb-8 tracking-[0.3em]"
                style={{ color: 'var(--brass-bright)' }}
              >
                Connect
              </h3>

              {/* Circular Social Icons */}
              <div className="flex flex-wrap gap-3">
                {/* Instagram */}
                <a
                  href="https://instagram.com/lotuscollective"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border flex items-center justify-center transition-all"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    backgroundColor: 'transparent',
                    transitionDuration: 'var(--timing-quarter)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--gold-shimmer)';
                    e.currentTarget.style.backgroundColor = 'var(--gold-shimmer)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Spotify */}
                <a
                  href="https://open.spotify.com/artist/lotuscollective"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border flex items-center justify-center transition-all"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    backgroundColor: 'transparent',
                    transitionDuration: 'var(--timing-quarter)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--gold-shimmer)';
                    e.currentTarget.style.backgroundColor = 'var(--gold-shimmer)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  aria-label="Spotify"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                </a>


                {/* Twitch */}
                <a
                  href="https://www.twitch.tv/lotuscollectivemusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border flex items-center justify-center transition-all"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    backgroundColor: 'transparent',
                    transitionDuration: 'var(--timing-quarter)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#9147ff';
                    e.currentTarget.style.backgroundColor = '#9147ff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  aria-label="Twitch"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#fff' }}>
                    <path d="M4.285 0L1.143 4.285v15.428h5.143V24l4.285-4.286h3.428L22.857 15V0H4.285zm16.285 14.143l-3.428 3.429h-3.857l-3.429 3.428v-3.428H2.286V1.714h18.285v12.429zM16.286 6.857h-1.143v5.143h1.143V6.857zm-4.571 0h-1.143v5.143h1.143V6.857z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@lotuscollectivemusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border flex items-center justify-center transition-all"
                  style={{
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    backgroundColor: 'transparent',
                    transitionDuration: 'var(--timing-quarter)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#25F4EE';
                    e.currentTarget.style.backgroundColor = '#25F4EE';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M34.5 6c.3 2.7 2.4 9 9 9v6.2c-3.2.3-6.2-1-9-3.1V32c0 7.2-5.8 13-13 13S8 39.2 8 32s5.8-13 13-13h2v6h-2c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7V2h6.5V6z" fill="#000"/>
                      <path d="M34.5 6c.3 2.7 2.4 9 9 9v6.2c-3.2.3-6.2-1-9-3.1V32c0 7.2-5.8 13-13 13S8 39.2 8 32s5.8-13 13-13h2v6h-2c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7V2h6.5V6z" fill="#25F4EE" fillOpacity=".7"/>
                      <path d="M34.5 6c.3 2.7 2.4 9 9 9v6.2c-3.2.3-6.2-1-9-3.1V32c0 7.2-5.8 13-13 13S8 39.2 8 32s5.8-13 13-13h2v6h-2c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7V2h6.5V6z" fill="#FE2C55" fillOpacity=".4"/>
                    </g>
                  </svg>
                </a>

                {/* YouTube - Highlighted */}
                <a
                  href="https://youtube.com/@lotuscollective"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border flex items-center justify-center transition-all"
                  style={{
                    borderColor: 'var(--gold-shimmer)',
                    backgroundColor: 'var(--gold-shimmer)',
                    transitionDuration: 'var(--timing-quarter)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#000' }}>
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* Bandcamp - Highlighted */}
                <a
                  href="https://lotuscollective.bandcamp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border flex items-center justify-center transition-all"
                  style={{
                    borderColor: 'var(--gold-shimmer)',
                    backgroundColor: 'var(--gold-shimmer)',
                    transitionDuration: 'var(--timing-quarter)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  aria-label="Bandcamp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#000' }}>
                    <path d="M0 8.75l8.25 6.5L24 8.75V15L15.75 21.5 0 15z" />
                  </svg>
                </a>

                {/* SoundCloud - Highlighted */}
                <a
                  href="https://soundcloud.com/lotuscollective"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border flex items-center justify-center transition-all"
                  style={{
                    borderColor: 'var(--gold-shimmer)',
                    backgroundColor: 'var(--gold-shimmer)',
                    transitionDuration: 'var(--timing-quarter)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  aria-label="SoundCloud"
                >
                  <span className="text-xs font-bold" style={{ color: '#000' }}>SC</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar - Minimal */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: 'rgba(255, 255, 255, 0.08)' }}
        >
          <p
            className="text-xs"
            style={{
              color: 'rgba(255, 255, 255, 0.4)',
              letterSpacing: '0.1em'
            }}
          >
            © 2026 Lotus Collective. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs">
            <a
              href="/privacy"
              className="transition-colors"
              style={{
                color: 'rgba(255, 255, 255, 0.3)',
                letterSpacing: '0.1em',
                transitionDuration: 'var(--timing-quarter)'
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--brass-bright)')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.3)')}
            >
              PRIVACY POLICY
            </a>
            <a
              href="/terms"
              className="transition-colors"
              style={{
                color: 'rgba(255, 255, 255, 0.3)',
                letterSpacing: '0.1em',
                transitionDuration: 'var(--timing-quarter)'
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--brass-bright)')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255, 255, 255, 0.3)')}
            >
              TERMS OF SERVICE
            </a>
          </div>

          <p
            className="text-xs"
            style={{
              color: 'rgba(255, 255, 255, 0.3)',
              letterSpacing: '0.1em'
            }}
          >
            Florida
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
