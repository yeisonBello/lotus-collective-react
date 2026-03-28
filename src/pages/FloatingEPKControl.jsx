import React from 'react';
import { motion } from 'framer-motion';

const FloatingEPKControl = () => {
  const handleDownload = () => {
    // Reemplaza esto con la ruta real a tu PDF de EPK
    const pdfUrl = '/assets/EPK_Lotus_Collective.pdf';
    
    // Crear un elemento <a> temporal para forzar la descarga
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Lotus_Collective_EPK.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      layout
      onClick={handleDownload}
      className="fixed bottom-8 left-8 z-50 flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-cyan-500/50 bg-zinc-900/90 text-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.3)] backdrop-blur-xl transition-all hover:bg-zinc-800 hover:border-cyan-400 md:bottom-12 md:left-12 md:h-16 md:w-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 0 25px rgba(0, 229, 255, 0.6)"
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="Download EPK"
    >
      {/* Efecto de pulso (Latido) constante para llamar la atención */}
      <motion.div
        className="absolute inset-0 rounded-full bg-cyan-400/20"
        animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
      />
      
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-cyan-400 drop-shadow-[0_0_5px_rgba(0,229,255,0.8)]">
          EPK
        </span>
      </div>
    </motion.button>
  );
};

export default FloatingEPKControl;
