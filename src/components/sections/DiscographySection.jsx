import { tracks } from '../../data/content';

const DiscographySection = () => {
  // Show only first 3 tracks on home page
  const featuredTracks = tracks.slice(0, 3);

  return (
    <section id="music" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="font-serif-display text-5xl md:text-7xl">Discography</h2>
            <p className="text-zinc-500 mt-2 text-sm uppercase tracking-wider">
              Meet the singles of "Where is Edgar?"
            </p>
          </div>
        </div>

        {/* Track List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTracks.map((track) => (
            <div
              key={track.id}
              className="group relative bg-zinc-900/50 p-6 rounded-sm border border-white/5 hover:border-[#FF3B30]/50 transition-colors duration-500"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-xs" style={{ color: track.color }}>
                  {track.id}
                </span>
                <svg
                  className="w-6 h-6 text-zinc-600 group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              </div>
              <h3 className="font-serif-display text-4xl mb-2">{track.title}</h3>
              <p className="text-zinc-500 text-sm mb-6 line-clamp-3">{track.description}</p>

              {/* Audio Player UI (Visual) */}
              <div className="flex items-center gap-4 mt-auto">
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-[#FF3B30] hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
                <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="w-1/3 h-full bg-zinc-500 group-hover:bg-[#FF3B30] transition-colors"
                    style={{ width: track.id === '01' ? '33%' : '0%' }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <a
            href="/discography"
            className="inline-flex items-center gap-2 text-[#FF3B30] hover:text-white transition-colors uppercase text-sm font-bold tracking-widest border-b border-[#FF3B30] pb-1"
          >
            View All 7 Tracks
          </a>
        </div>
      </div>
    </section>
  );
};

export default DiscographySection;
