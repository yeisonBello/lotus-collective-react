
import { useState, useEffect } from 'react';
import { shows as initialShows } from '../../data/content';
import { fetchShowsFromSheets } from '../../utils/sheets';

// URL de ejemplo para pruebas (reemplazar por la del cliente)
const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQJ7t48HMpz_A4WZJivXQD9iUT_PYcb8HcVd4DsscFBYAWdliY3lRkKKmDBxcex7A3U2XYsLJ5gDbgV/pub?output=csv';

const ShowsSection = () => {
  const [expanded, setExpanded] = useState(null);
  const [shows, setShows] = useState(initialShows);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadShows = async () => {
      try {
        console.log('Attempting to load shows from Sheets...');
        const data = await fetchShowsFromSheets(SHEET_CSV_URL);
        console.log('Data received in component:', data);
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
                  <div className="flex flex-col text-center w-12">
                    <span className="text-xs uppercase font-bold" style={{ color: 'var(--brass-mid)' }}>{show.month}</span>
                    <span className="text-2xl font-serif-display" style={{ color: 'var(--gold-shimmer)' }}>{show.day}</span>
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
                <div className="w-full flex flex-col items-end">
                  <button
                    className="w-full md:w-auto px-6 py-2 border rounded-full text-xs font-bold uppercase tracking-widest transition-all font-sans"
                    style={{
                      borderColor: 'var(--brass-dark)',
                      letterSpacing: '0.18em',
                      fontFamily: 'var(--font-sans, sans-serif)',
                      transitionDuration: 'var(--timing-quarter)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--gold-shimmer)';
                      e.currentTarget.style.borderColor = 'var(--gold-shimmer)';
                      e.currentTarget.style.color = 'var(--black-deepest)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderColor = 'var(--brass-dark)';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    onClick={() => setExpanded(expanded === index ? null : index)}
                  >
                    {expanded === index ? '✕' : (show.buttonText || 'DETAILS')}
                  </button>
                  {expanded === index && (
                    <div className="w-full mt-4 p-4 bg-zinc-900 rounded-lg text-zinc-200 border border-zinc-800 transition-all font-sans text-base tracking-wide">
                      {show.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ShowsSection;
