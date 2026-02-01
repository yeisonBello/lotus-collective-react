import { motion } from 'framer-motion';

const StorySection = () => {
  const moments = [
    {
      title: 'South Point sunsets',
      description: "Where the ocean meets the horizon and the music begins to breathe.",
      image: '/assets/covers/south-pointe.png',
    },
    {
      title: 'Gozadera nights',
      description: "High-energy rhythms that move through the streets of Miami until dawn.",
      image: '/assets/covers/caliente.png',
    },
    {
      title: 'The mystery unfolds',
      description: "An album that asks questions and lets the music answer them.",
      image: '/assets/covers/paraiso.png',
    }
  ];

  return (
    <section id="experience" className="relative py-24 md:py-40 border-t border-white/5 bg-zinc-950 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-4">The journey</p>
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Three moments that shaped the sound</h2>
        <p className="text-zinc-400 text-sm mb-16">Each story reveals something new about who we are</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {moments.map((moment, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group cursor-pointer text-left"
            >
              <div className="aspect-[4/3] bg-zinc-800 rounded-2xl overflow-hidden mb-6 border border-white/5 shadow-sm">
                <img
                  src={moment.image}
                  alt={moment.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>

                <h3 className="font-serif text-2xl text-white mb-3">{moment.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed tracking-wide">{moment.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-8 pt-8 border-t border-zinc-100">
          <button className="px-8 py-3 rounded-full border border-zinc-300 text-xs uppercase tracking-widest font-medium hover:bg-black hover:text-white transition-colors">Discover</button>
          <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:gap-4 transition-all">Play <span className="text-lg">›</span></button>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
