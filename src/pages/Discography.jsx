import { tracks } from '../data/content';

const Discography = () => {
  const albumUrl = 'https://open.spotify.com/album/YOUR_ALBUM_ID_HERE';

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Album Header */}
        <div className="text-center mb-20">
          <h1 className="font-serif-display text-8xl md:text-9xl mb-2 tracking-tight">
            Where is <span className="text-[#FF3B30] italic">Edgar?</span>
          </h1>
          <p className="text-[#D4AF37] text-sm uppercase tracking-widest font-light">
            Debut Album · 2025
          </p>
        </div>

        {/* Spotify Button */}
        <div className="flex justify-center mb-20">
          <a
            href={albumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1DB954] hover:bg-[#1ed760] text-black font-bold py-3 px-8 rounded-full transition-colors text-base"
          >
            <span>🎵</span>
            Listen on Spotify
          </a>
        </div>

        {/* Tracklist - Minimal*/}
        <div className="space-y-8">
          {tracks.map((track) => (
            <div key={track.id} className="border-b border-[#262626] pb-8 last:border-0 last:pb-0">
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-[#D4AF37] text-sm font-light tracking-widest">
                      {track.id}
                    </span>
                    <h3 className="font-serif-display text-3xl">{track.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-[#a3a3a3] mt-3">
                    <span>{track.genre}</span>
                    <span className="text-[#525252]">•</span>
                    <span>{track.duration}</span>
                    <span className="text-[#525252]">•</span>
                    <span>{track.key}</span>
                  </div>
                </div>
                {track.spotifyUrl && !track.spotifyUrl.includes('YOUR_TRACK_ID_HERE') && (
                  <a
                    href={track.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 text-[#D4AF37] hover:text-[#FFD700] transition-colors mt-2 text-lg"
                  >
                    ▶
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="/"
            className="text-[#FF3B30] hover:text-[#FFD700] transition-colors text-sm uppercase tracking-widest font-light"
          >
            ← Back
          </a>
        </div>
      </div>
    </div>
  );
};

export default Discography;
