import { tracks } from '../data/content';

const Discography = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="mb-16 text-center">
          <h1 className="font-serif-display text-6xl md:text-8xl mb-6">
            Full <span className="italic text-[#FF3B30]">Discography</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Explore every track from "Where is Edgar?" - our debut album produced by José Luis
            "Cheo" Pardo.
          </p>
        </div>

        <div className="grid gap-8">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="bg-zinc-900/50 border border-white/5 rounded-sm overflow-hidden hover:border-white/10 transition-colors"
            >
              <div className="grid md:grid-cols-3 gap-8 p-8">
                <div className="aspect-square bg-zinc-800 rounded-sm overflow-hidden">
                  <img
                    src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
                    alt={track.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:col-span-2">
                  <span
                    className="text-xs font-bold tracking-wider"
                    style={{ color: track.color }}
                  >
                    TRACK {track.id}
                  </span>
                  <h2 className="font-serif-display text-5xl mt-2 mb-4">{track.title}</h2>
                  <p className="text-zinc-400 mb-6 leading-relaxed">{track.description}</p>
                  <div className="space-y-2 text-sm">
                    <p className="text-zinc-500">
                      <span className="text-white">Genre:</span> {track.genre}
                    </p>
                    <p className="text-zinc-500">
                      <span className="text-white">Duration:</span> {track.duration}
                    </p>
                    <p className="text-zinc-500">
                      <span className="text-white">Key:</span> {track.key}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-[#FF3B30] hover:text-white transition-colors uppercase text-sm font-bold tracking-widest border-b border-[#FF3B30] pb-1"
          >
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Discography;
