import { shows } from '../../data/content';

const ShowsSection = () => {
  return (
    <section id="shows" className="py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <h2 className="type-section-title mb-12 text-center fade-in">
          Upcoming Shows <span className="text-zinc-600 italic" style={{ color: 'var(--brass-dark)' }}>2026</span>
        </h2>

        <div className="flex flex-col border-t" style={{ borderColor: 'var(--brass-dark)' }}>
          {shows.map((show, index) => (
            <div
              key={index}
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 border-b px-4 transition-all hover-glow slide-up"
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
              <div className="flex items-center gap-6 md:gap-12 mb-4 md:mb-0">
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
              <button
                className="w-full md:w-auto px-6 py-2 border rounded-full text-xs font-bold uppercase tracking-widest transition-all"
                style={{
                  borderColor: 'var(--brass-dark)',
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
              >
                {show.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowsSection;
