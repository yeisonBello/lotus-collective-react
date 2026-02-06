import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Colores extraídos de BandStory-README.md para representar los capítulos de la banda
const BRAND_COLORS = [
  "#FFD700", // Gold Shimmer (Chapter 1)
  "#FF3B30", // Neon Coral (Chapter 2)
  "#8B5CF6", // Neon Purple (Chapter 3)
  "#00E5FF"  // Neon Cyan (Chapter 4)
];

const Play = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const Pause = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="6" y="4" width="4" height="16" />
    <rect x="14" y="4" width="4" height="16" />
  </svg>
);

const FloatingAudioControl = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
    {/* Elemento de audio oculto. Asegúrate de que el archivo exista en public/assets/music/ */}
    <audio 
      ref={audioRef} 
      src="/assets/music/tu-cancion.mp3" 
      onEnded={() => setIsPlaying(false)} 
    />
    <motion.button
      layout
      onClick={togglePlay}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-zinc-900/80 text-white shadow-2xl backdrop-blur-xl transition-colors hover:bg-zinc-800 hover:border-white/20 md:bottom-12 md:right-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        boxShadow: isPlaying 
          ? "0 0 20px rgba(255, 59, 48, 0.2)" // Neon coral glow
          : "0 0 0px rgba(255, 255, 255, 0)"
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: isPlaying 
          ? "0 0 30px rgba(255, 59, 48, 0.4)" 
          : "0 0 20px rgba(255, 255, 255, 0.2)"
      }}
      whileTap={{ scale: 0.95 }}
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {/* Pulse effect when not playing */}
      {!isPlaying && (
        <motion.div
          className="absolute inset-0 rounded-full bg-white/5"
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        />
      )}

      <div className="relative z-10 flex items-center gap-3 px-4 py-4 md:px-5 md:py-5">
        <div className="relative flex h-6 w-6 items-center justify-center">
          <AnimatePresence mode="wait">
            {isPlaying ? (
              <motion.div
                key="pause"
                initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Pause className="h-5 w-5 fill-current text-white md:h-6 md:w-6" />
              </motion.div>
            ) : (
              <motion.div
                key="play"
                initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center pl-1"
              >
                <Play className="h-5 w-5 fill-current text-white md:h-6 md:w-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Audio Visualizer */}
        <AnimatePresence>
          {isPlaying && (
            <div className="flex items-center gap-3">
              {/* Etiqueta de texto estilo Lotus Collective */}
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                className="overflow-hidden whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400"
              >
                ON AIR
              </motion.span>
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "anticipate" }}
                className="flex h-4 items-center gap-[3px] overflow-hidden"
              >
                {[0, 1, 2, 3].map((i) => (
                  <VisualizerBar key={i} index={i} color={BRAND_COLORS[i]} />
                ))}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
    </>
  );
};

const VisualizerBar = ({ index, color }) => {
  return (
    <motion.div
      className="w-1 rounded-full"
      animate={{
        height: ["20%", "80%", "40%", "100%", "30%"],
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse",
        delay: index * 0.1,
        ease: "easeInOut",
      }}
      style={{ height: "40%", backgroundColor: color }}
    />
  );
};

export default FloatingAudioControl;