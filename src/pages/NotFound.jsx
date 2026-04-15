import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF3B30] opacity-[0.06] blur-[120px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-center relative z-10 px-6"
      >
        <h1
          className="font-serif text-8xl md:text-[12rem] mb-4 tracking-tighter leading-none"
          style={{ color: 'var(--brass-bright)', fontFamily: 'var(--font-display)' }}
        >
          404
        </h1>
        <p
          className="text-lg md:text-xl text-zinc-400 mb-10 font-light"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          This page got lost — just like Edgar.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[#FF3B30] hover:text-white transition-colors uppercase text-sm font-bold tracking-widest border-b border-[#FF3B30] pb-1"
        >
          ← Return Home
        </a>
      </motion.div>
    </div>
  );
};

export default NotFound;
