import BandStory from '../components/sections/BandStory';

const EdgarExperience = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <div className="pt-32 pb-16 px-6 text-center max-w-3xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-4">
          The Mystery
        </p>
        <h1 className="font-serif text-6xl md:text-8xl mb-6 text-white leading-tight">
          The Edgar <span className="italic text-[#FF3B30]">Experience</span>
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed">
          From South Point Park sunsets to the recording of our debut album—
          discover the journey that shaped Lotus Collective and the mystery
          of Edgar's disappearance
        </p>
      </div>

      {/* The Story Timeline */}
      <BandStory />

      {/* Closing CTA */}
      <div className="py-20 text-center border-t border-white/5">
        <a
          href="/discography"
          className="inline-flex items-center gap-2 text-[#FF3B30] hover:text-white transition-colors uppercase text-sm font-bold tracking-widest border-b border-[#FF3B30] pb-1"
        >
          Listen to Where Is Edgar? →
        </a>
      </div>
    </div>
  );
};

export default EdgarExperience;
