
import { useState, useEffect } from 'react';
import { shows as initialShows } from '../../data/content';
import { fetchShowsFromSheets } from '../../utils/sheets';

const SHEET_CSV_URL = import.meta.env.VITE_SHEETS_URL || 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQJ7t48HMpz_A4WZJivXQD9iUT_PYcb8HcVd4DsscFBYAWdliY3lRkKKmDBxcex7A3U2XYsLJ5gDbgV/pub?output=csv';

const ShowsSection = () => {
  const [expanded, setExpanded] = useState(null);
  const [shows, setShows] = useState(initialShows);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadShows = async () => {
      try {
        const data = await fetchShowsFromSheets(SHEET_CSV_URL);
        if (data && data.length > 0) {
          setShows(data);
        } else {
          console.warn('No data returned from sheets, sticking with initialShows');
        }
      } catch (error) {
        console.warn('Error loading shows from sheets, using local fallback:', error);
      } finally {
        setLoading(false);
      }
    };
    loadShows();
  }, []);

  return (
    <section id="shows" className="py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="type-section-title mb-12 text-center fade-in">
          Upcoming Shows <span className="text-zinc-600 italic" style={{ color: 'var(--brass-dark)' }}>2026</span>
        </h2>

        {loading ? (
          <div className="flex justify-center py-12">
            <span className="text-zinc-500 font-sans tracking-widest animate-pulse">LOADING DATES...</span>
          </div>
        ) : (
          <div className="flex flex-col border-t" style={{ borderColor: 'var(--brass-dark)' }}>
            {shows.map((show, index) => (
              <div
                key={index}
                className="group flex flex-col border-b px-4 transition-all hover-glow slide-up py-8"
                style={{
                  borderColor: 'var(--brass-dark)',
                  animationDelay: `${index * 150}ms`,
                  transitionDuration: 'var(--timing-quarter)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div className="flex items-center gap-6 md:gap-12 mb-4">
                  <div className="flex flex-col text-center w-14">
                    <span className="text-[10px] uppercase font-bold tracking-widest mb-1" style={{ color: 'var(--brass-mid)' }}>
                      {show.month}
                    </span>
                    <span className="text-3xl font-serif-display leading-none" style={{ color: 'var(--gold-shimmer)' }}>
                      {isNaN(parseInt(show.day)) ? show.date.split('/')[1] : show.day}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span
                      className="text-xl font-medium transition-colors"
                      style={{ transitionDuration: 'var(--timing-quarter)' }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--brass-bright)'}
                      onMouseLeave={(e) => e.target.style.color = 'white'}
                    >
                      {show.venue}
                    </span>
                    <span className="text-sm text-zinc-500">{show.address}</span>
                  </div>
                </div>
                <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2">
                  <div className="flex flex-col flex-grow">
                    {/* Placeholder or subtle extra info if needed */}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-3">
                    {show.links && (
                      <a
                        href={show.links.startsWith('http') ? show.links : `https://${show.links}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all font-sans text-center min-w-[140px]"
                        style={{
                          backgroundColor: 'var(--gold-shimmer)',
                          color: 'var(--black-deepest)',
                          boxShadow: '0 4px 15px rgba(212, 175, 55, 0.3)',
                          transitionDuration: 'var(--timing-quarter)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--brass-bright)';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 175, 55, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'var(--gold-shimmer)';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 4px 15px rgba(212, 175, 55, 0.3)';
                        }}
                      >
                        {show.buttonText || 'TICKETS'}
                      </a>
                    )}

                    <button
                      className="px-8 py-2.5 border rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all font-sans text-center min-w-[140px]"
                      style={{
                        borderColor: 'var(--brass-dark)',
                        color: 'white',
                        backgroundColor: 'transparent',
                        transitionDuration: 'var(--timing-quarter)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--gold-shimmer)';
                        e.currentTarget.style.backgroundColor = 'rgba(212, 175, 55, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--brass-dark)';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                      onClick={() => setExpanded(expanded === index ? null : index)}
                    >
                      {expanded === index ? 'CLOSE' : (show.links ? 'DETAILS' : (show.buttonText || 'DETAILS'))}
                    </button>
                  </div>
                </div>

                {expanded === index && (
                  <div className="w-full mt-6 p-6 bg-zinc-900/50 backdrop-blur-sm rounded-lg text-zinc-300 border border-zinc-800 slide-up font-sans text-sm leading-relaxed tracking-wide">
                    {show.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ShowsSection;
