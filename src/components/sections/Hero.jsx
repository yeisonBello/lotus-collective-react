import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

// Sub-component for individual organic floating effects
const FloatingCover = ({ children, delay = 0, duration = 5 }) => (
  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    }}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { scrollYProgress } = useScroll();

  // Scroll-based parallax and fade effects
  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Lotus Collective cover mosaic - Updated with your verified filenames
  const covers = [
    { src: "/assets/covers/caliente.png", pos: "top-[8%] left-[12%]", rot: "rotate-2", size: "w-32 md:w-48", d: 0, dur: 4 },
    { src: "/assets/covers/dream-walker.png", pos: "top-[15%] right-[10%]", rot: "-rotate-6", size: "w-36 md:w-56", d: 1, dur: 6 },
    { src: "/assets/covers/paraiso.png", pos: "bottom-[20%] right-[8%]", rot: "rotate-3", size: "w-40 md:w-64", d: 0.5, dur: 5 },
    { src: "/assets/covers/saturday.png", pos: "top-[45%] right-[2%]", rot: "rotate-12", size: "w-32 md:w-44", d: 1.5, dur: 4.5 },
    { src: "/assets/covers/mangoman.png", pos: "bottom-[35%] left-[4%]", rot: "-rotate-3", size: "w-28 md:w-40", d: 2, dur: 5.5 },
    { src: "/assets/covers/south-pointe.png", pos: "top-[40%] left-[2%]", rot: "-rotate-12", size: "w-24 md:w-36", d: 0.8, dur: 4.2 },
    { src: "/assets/covers/i-can-not-get-enough.png", pos: "bottom-[10%] left-[15%]", rot: "rotate-6", size: "w-32 md:w-48", d: 1.2, dur: 5.2 },
  ];

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden font-sans">
      
      {/* 1. Loading Screen (Narrative intro) */}
      <AnimatePresence>
        {!isVideoLoaded && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
          >
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-12 h-12 mb-6 neon-pulse"
              style={{ background: 'var(--neon-coral)' }}
            ></motion.div>
            <p className="type-label animate-pulse" style={{ color: 'var(--brass-bright)' }}>
              Finding Edgar...
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main Hero Content (Fades in after video is ready) */}
      <motion.header 
        style={{ opacity: isVideoLoaded ? 1 : 0 }}
        className="relative w-full h-screen flex flex-col justify-center items-center text-white"
      >
        
        {/* Background Video Layer (Z-0) - Using MP4 format */}
        <motion.div style={{ y: yParallax, opacity: opacityFade }} className="absolute inset-0 z-0">
          <video
            autoPlay loop muted playsInline
            onCanPlayThrough={() => setIsVideoLoaded(true)}
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/assets/videos/lotus-bloom.mp4" type="video/mp4" />
          </video>
          {/* Visual gradient to protect text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
        </motion.div>

        {/* Floating Mosaic (Z-10) - Desktop only for UX cleanliness */}
        {covers.map((cover, index) => (
          <div key={index} className={`absolute ${cover.pos} ${cover.size} z-10 hidden lg:block`}>
            <FloatingCover delay={cover.d} duration={cover.dur}>
              <motion.img
                whileHover={{ scale: 1.1, opacity: 1, zIndex: 50 }}
                src={cover.src}
                alt="Lotus Collective Art"
                className={`w-full h-full object-cover rounded shadow-2xl ${cover.rot} opacity-30 border border-white/5 transition-opacity duration-500`}
              />
            </FloatingCover>
          </div>
        ))}

        {/* Central Narrative & Identity (Z-30) */}
        <div className="relative z-30 flex flex-col items-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="type-label mb-10"
            style={{ color: 'var(--brass-bright)' }}
          >
            Produced by Cheo Pardo
          </motion.p>

          <h1 className="font-serif text-7xl md:text-9xl lg:text-[11rem] leading-[0.85] tracking-tighter mb-12 drop-shadow-2xl brass-shimmer">
            Lotus <br />
            <span className="italic font-extralight" style={{ color: 'var(--gold-shimmer)' }}>Collective</span>
          </h1>

          {/* Featured Red Square Motif with Neon Glow */}
          <div className="relative group cursor-pointer mt-4">
            <div className="absolute -inset-4 bg-[var(--neon-coral)] rotate-3 group-hover:rotate-6 transition-transform neon-glow-coral" style={{ transitionDuration: 'var(--timing-whole)' }}></div>
            <div className="relative z-10 w-52 h-52 md:w-72 md:h-72 bg-zinc-900 overflow-hidden shadow-2xl rotate-[-2deg]">
              <img
                src="/assets/covers/dream-walker.png"
                alt="Where is Edgar Featured Art"
                className="w-full h-full object-cover opacity-95 group-hover:scale-110 transition-transform"
                style={{ transitionDuration: 'var(--timing-double)' }}
              />
            </div>
          </div>
        </div>

        {/* Scroll Prompt */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-30 opacity-40">
          <span className="text-[9px] uppercase tracking-[0.5em] animate-bounce">Discover the story</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </motion.header>
    </div>
  );
};

export default Hero;