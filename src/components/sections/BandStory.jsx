import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

// Story data - The Lotus Collective journey
const storyChapters = [
  {
    id: 1,
    year: "2022",
    season: "Spring",
    title: "South Point Sunsets",
    subtitle: "Where it all began",
    description: "The iconic South Beach park, one of the best places to catch a sunset and experience the breathtaking views of the City of Miami. This was once a jamming spot that not only marked the beginnings of Lotus Collective—but also marked a chapter of unprecedented creative expression and vibrant connection for both the band and the Miami Beach community. What began as just a few friends playing for fun soon became our way to connect with a welcoming, expansive audience and to meet both local and international musicians.",
    image: "/assets/story/south-point-jams.jpg",
    imageAlt: "Lotus Collective performing at sunset at South Point Park with audience gathered around",
    alignment: "left",
    color: "#FFD700",
    colorName: "gold-shimmer",
    cta: null
  },
  {
    id: 2,
    year: "2023",
    season: "Summer",
    title: "The Ban",
    subtitle: "Suddenly, this era came to an end",
    description: "After several noise complaints from residents in nearby buildings, live performances in the park were permanently banned by the city. This separated us from the warm community that had embraced us for so long and left us with an emptiness that later was transformed into inspiration for the song that opens our debut album. However, we felt grateful to have finally found a hub for our music.",
    image: "/assets/story/park-empty.jpg",
    imageAlt: "Empty South Point Park at dusk, now quiet without live music",
    alignment: "right",
    color: "#FF3B30",
    colorName: "neon-coral",
    cta: null
  },
  {
    id: 3,
    year: "2023",
    season: "Fall",
    title: "Edgar's Balcony",
    subtitle: "A mystical refuge appears",
    description: "That's when Edgar appeared! He generously offered us his balcony so we could keep our late-night jam sessions alive. Edgar's balcony became the place where the band's best jams took place. It had a special vibe that kept us motivated, even during moments when everything felt like it was falling apart. The mystical energy Edgar radiated became part of our creative process.",
    image: "/assets/story/edgars-balcony.jpg",
    imageAlt: "Night jam session on Edgar's balcony with warm lighting and band members playing",
    alignment: "left",
    color: "#8B5CF6",
    colorName: "neon-purple",
    cta: null
  },
  {
    id: 4,
    year: "2024",
    season: "Winter",
    title: "Edgar Vanishes",
    subtitle: "The disappearance",
    description: "Edgar suddenly lost contact with us—he vanished. The being who once radiated mystical energy was now nowhere to be found. We searched everywhere, asked everyone we knew, but Edgar had simply disappeared into the Miami night. This mystery became the central question of our debut album: Where is Edgar? His absence haunts every track, every melody we recorded.",
    image: "/assets/story/edgar-mystery.jpg",
    imageAlt: "Dark, empty balcony at night with a single light on, symbolizing Edgar's absence",
    alignment: "right",
    color: "#00E5FF",
    colorName: "neon-cyan",
    cta: null
  },
  {
    id: 5,
    year: "2025",
    season: "Spring",
    title: "Where Is Edgar?",
    subtitle: "The album is born",
    description: "In 2025, the band recorded their first album titled 'Where is Edgar?' produced by José Luis 'Cheo' Pardo—founder, producer, and former member of Los Amigos Invisibles. The album contains songs such as 'CALIENTE' and 'Paraíso' that mark a fresh new chapter and define the next era of Lotus Collective. A story that involved the iconic music gatherings at South Point Park, the after-hours jam sessions on Edgar's balcony, our experiences performing and living around Miami, and, of course, the unforgettable disappearance of our mystical friend, Edgar.",
    image: "/assets/story/studio-recording.jpg",
    imageAlt: "Lotus Collective in the recording studio with Cheo Pardo during Where Is Edgar sessions",
    alignment: "left",
    color: "#D4AF37",
    colorName: "brass-bright",
    cta: {
      text: "Explore the Album",
      link: "/discography"
    }
  }
];

// Chapter Marker Component
const ChapterMarker = ({ number, color, isInView }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="relative z-20 group"
    aria-label={`Chapter ${number} marker`}
  >
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-black text-lg transition-all duration-300 border-4 border-black hover:scale-110"
      style={{
        backgroundColor: color,
        boxShadow: `0 0 0 rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0)`
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 0 20px ${color}, 0 0 40px ${color}, inset 0 0 10px ${color}`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = `0 0 0 rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0)`;
      }}
    >
      {number}
    </div>
  </motion.div>
);

// Chapter Image Component
const ChapterImage = ({ src, alt, isInView, alignment }) => (
  <motion.div
    initial={{ filter: "grayscale(100%) brightness(0.7)", scale: 1.1 }}
    animate={isInView ? { filter: "grayscale(0%) brightness(1)", scale: 1 } : { filter: "grayscale(100%) brightness(0.7)", scale: 1.1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className={`aspect-[3/2] rounded-2xl overflow-hidden border border-white/5 shadow-2xl ${alignment === 'left' ? 'md:mr-8' : 'md:ml-8'
      }`}
  >
    <motion.img
      src={src}
      alt={alt}
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-[600ms]"
      style={{ transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }}
      whileHover={{ scale: 1.05 }}
    />
  </motion.div>
);

// Chapter Content Component
const ChapterContent = ({ chapter, isInView, alignment }) => {
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: custom * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  return (
    <div className={`space-y-4 ${alignment === 'right' ? 'md:text-right' : ''}`}>
      <motion.p
        custom={0}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={contentVariants}
        className="text-xs font-bold uppercase tracking-[0.3em]"
        style={{ color: chapter.color }}
      >
        {chapter.year} • {chapter.season}
      </motion.p>

      <motion.h3
        custom={1}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={contentVariants}
        className="font-serif text-3xl md:text-4xl text-white leading-tight"
      >
        {chapter.title}
      </motion.h3>

      <motion.p
        custom={2}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={contentVariants}
        className="font-serif text-xl italic text-zinc-400"
      >
        {chapter.subtitle}
      </motion.p>

      <motion.p
        custom={3}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={contentVariants}
        className="text-base text-zinc-400 leading-relaxed"
      >
        {chapter.description}
      </motion.p>

      {chapter.cta && (
        <motion.div
          custom={4}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={contentVariants}
          className={`pt-4 ${alignment === 'right' ? 'md:flex md:justify-end' : ''}`}
        >
          <Link
            to={chapter.cta.link}
            className="inline-block px-8 py-3 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 hover:-translate-y-1"
            style={{
              border: `2px solid ${chapter.color}`,
              color: 'white'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = chapter.color;
              e.currentTarget.style.color = 'black';
              e.currentTarget.style.boxShadow = `0 8px 20px ${chapter.color}40`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.boxShadow = 'none';
            }}
            aria-label={`Call to action: ${chapter.cta.text}`}
          >
            {chapter.cta.text}
          </Link>
        </motion.div>
      )}
    </div>
  );
};

// Main Story Chapter Component
const StoryChapter = ({ chapter, index, total }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <article
      ref={ref}
      className="relative mb-40 last:mb-0"
      aria-labelledby={`chapter-${chapter.id}-title`}
      aria-label={`Story chapter ${index + 1} of ${total}`}
    >
      {/* Chapter Content - Grid with Timeline Column */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center">
        {/* Image */}
        <div className={chapter.alignment === 'right' ? 'md:order-3' : 'md:order-1'}>
          <ChapterImage
            src={chapter.image}
            alt={chapter.imageAlt}
            isInView={isInView}
            alignment={chapter.alignment}
          />
        </div>

        {/* Timeline Column (Desktop only) */}
        <div className="hidden md:flex md:order-2 justify-center relative min-w-[60px]">
          <ChapterMarker number={chapter.id} color={chapter.color} isInView={isInView} />
        </div>

        {/* Mobile Marker (positioned at left edge) */}
        <div className="md:hidden absolute left-6 top-0">
          <ChapterMarker number={chapter.id} color={chapter.color} isInView={isInView} />
        </div>

        {/* Content */}
        <div className={chapter.alignment === 'right' ? 'md:order-1' : 'md:order-3'}>
          <ChapterContent chapter={chapter} isInView={isInView} alignment={chapter.alignment} />
        </div>
      </div>
    </article>
  );
};

// Main BandStory Component
const BandStory = ({ chapters = storyChapters, showTimeline = true, compactMode = false }) => {
  return (
    <section
      id="band-story"
      className={`relative bg-[#050505] border-t border-white/5 ${compactMode ? 'py-24 px-6' : 'py-40 px-6'
        }`}
      aria-labelledby="band-story-title"
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-24 max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mb-4"
          >
            The Journey
          </motion.p>

          <motion.h2
            id="band-story-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-white leading-tight mb-6"
          >
            From sunsets to mystery
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-zinc-400 leading-relaxed"
          >
            Five moments that defined the Lotus Collective sound
          </motion.p>
        </header>

        {/* Timeline + Chapters */}
        <div className="relative">
          {/* Mobile Timeline (Left Edge) */}
          {showTimeline && (
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5 md:hidden"
              style={{
                background: 'linear-gradient(180deg, #D4AF37 0%, #FFD700 50%, #D4AF37 100%)',
                opacity: 0.3
              }}
              aria-hidden="true"
            />
          )}

          {/* Chapters with embedded timeline column */}
          <div className="relative">
            {/* Desktop Timeline Background - Behind markers */}
            {showTimeline && (
              <div
                className="hidden md:block absolute top-0 bottom-0 w-0.5 pointer-events-none"
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(180deg, #D4AF37 0%, #FFD700 50%, #D4AF37 100%)',
                  opacity: 0.3,
                  zIndex: 0
                }}
                aria-hidden="true"
              />
            )}

            {chapters.map((chapter, index) => (
              <StoryChapter
                key={chapter.id}
                chapter={chapter}
                index={index}
                total={chapters.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BandStory;
