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
              Featured singles from "Where is Edgar?"
            </p>
          </div>
        </div>

        {/* Spotify Embeds */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTracks.map((track) => (
            <div key={track.id} className="flex flex-col h-full">
              {/* Track Info */}
              <div className="mb-4">
                <span className="font-mono text-xs" style={{ color: track.color }}>
                  {track.id}
                </span>
                <h3 className="font-serif-display text-2xl mt-2">{track.title}</h3>
                <p className="text-zinc-500 text-xs mt-2 uppercase tracking-wider">
                  {track.genre} • {track.duration}
                </p>
              </div>

              {/* Spotify Embed */}
              {track.spotifyUrl && !track.spotifyUrl.includes('YOUR_TRACK_ID_HERE') ? (
                <iframe
                  data-testid="embed-iframe"
                  style={{ borderRadius: '12px' }}
                  src={track.spotifyUrl}
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-80 bg-zinc-900/50 border border-white/10 rounded-lg flex items-center justify-center">
                  <p className="text-zinc-500 text-center text-sm">
                    Spotify embed coming soon
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
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
