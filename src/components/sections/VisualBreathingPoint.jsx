import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * VisualBreathingPoint Component
 *
 * A highly reusable "visual reset" component designed to provide breathing space
 * between content-heavy sections. Features elegant typography, film grain texture,
 * scroll-triggered animations, and a subtle ambient breathing effect.
 *
 * @param {string} text - The phrase to display (e.g., "Pause. Breathe. Listen.")
 *
 * @example
 * <VisualBreathingPoint text="The journey continues" />
 */
const VisualBreathingPoint = ({ text }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{
        height: '60vh',
        backgroundColor: '#0a0a0a',
      }}
    >
      {/* Film Grain Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      />

      {/* Text Content with Animations */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 max-w-[800px]">
        {/* Scroll-triggered Fade-in with Y-offset */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing curve
          }}
          className="text-center font-serif"
          style={{
            color: '#f2f2f2',
            textTransform: 'uppercase',
            fontWeight: 200,
            letterSpacing: '0.3em',
            fontSize: 'clamp(1.25rem, 3vw, 2rem)', // Responsive font size
            lineHeight: 1.6,
          }}
        >
          {/* Ambient Breathing Animation on Text */}
          <motion.span
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.95, 1, 0.95],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-block"
          >
            {text}
          </motion.span>
        </motion.h2>

        {/* Minimal Horizontal Line (Anchor) */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 0.4, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{
            duration: 1.5,
            delay: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="mt-8"
          style={{
            width: '120px',
            height: '1px',
            backgroundColor: '#f2f2f2',
          }}
        />
      </div>
    </section>
  );
};

export default VisualBreathingPoint;
