import React, { useState, useEffect } from 'react';
// Importamos el mapa de imágenes que creamos antes
import { lotusImages } from '../../constants/galleryData.js';

const LotusBentoGallery = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Lógica del Carrusel Automático para la celda principal
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % lotusImages.heroCarousel.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Sub-componente para mantener el código limpio (DRY)
  const BentoItem = ({ title, subtitle, imgSrc, className, children, isCarousel }) => (
    <div className={`group relative flex flex-col justify-end overflow-hidden rounded-[2.5rem] bg-gray-900 text-white shadow-xl ${className}`}>
      {isCarousel ? (
        lotusImages.heroCarousel.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="Carousel"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === currentIdx ? 'opacity-100' : 'opacity-0'}`}
          />
        ))
      ) : (
        imgSrc && (
          <img 
            src={imgSrc} 
            alt={title} 
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
        )
      )}
      
      {/* Overlay de gradiente para legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
      
      <div className="relative z-10 p-8">
        {title && <h3 className="text-xl font-bold tracking-tight leading-tight">{title}</h3>}
        {subtitle && <p className="text-sm opacity-70 font-medium mt-1">{subtitle}</p>}
        {children}
      </div>
    </div>
  );

  return (
    <section className="bg-black py-12 px-4 md:px-8 min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[18rem] gap-6 w-full max-w-7xl mx-auto">
        
        {/* 1. CELDA PRINCIPAL CON CARRUSEL (2x2) */}
        <BentoItem 
          isCarousel 
          title="The Big Stage: Zey Zey" 
          subtitle="Featuring Cheo Pardo — May 2025" 
          className="md:col-span-2 md:row-span-2" 
        />

        {/* 2. RECORDING SESSION (2x1) */}
        <BentoItem 
          imgSrc={lotusImages.studio} 
          title="Inside the Studio" 
          subtitle='Recording "Where is Edgar?"' 
          className="md:col-span-2" 
        />

        {/* 3. BLOQUE DE ESTADÍSTICAS (1x1) */}
        <div className="flex items-center justify-center rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl text-center p-6 hover:bg-white/10 transition-colors">
          <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
            2025:<br/>+50 SHOWS.<br/>1 ALBUM.
          </p>
        </div>

        {/* 4. LIVE ENERGY (1x2) */}
        <BentoItem 
          imgSrc={lotusImages.energy} 
          title="Nightly Magic" 
          subtitle="Gozadera Social Club" 
          className="md:row-span-2" 
        />

        {/* 5. PRÓXIMO SHOW / CTA (1x1) */}
        <a 
          href="#tickets" 
          className="flex flex-col items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-purple-700 p-6 text-center hover:brightness-110 transition-all active:scale-95 shadow-lg group"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.2em] mb-1 opacity-80">Next Appearance</span>
          <p className="text-sm font-bold text-white">FEB 15 - Lagniappe</p>
          <div className="mt-4 px-6 py-2 bg-white text-black rounded-full text-xs font-black uppercase group-hover:bg-gray-200 transition-colors">
            Get Tickets
          </div>
        </a>

        {/* 6. GEAR & TEXTURE (1x1) */}
        <BentoItem 
          imgSrc={lotusImages.gear} 
          title="The Sound" 
          subtitle="Analog Vibes" 
        />

        {/* 7. VENUE ATMOSPHERE (1x1) */}
        <BentoItem 
          imgSrc={lotusImages.venue} 
          title="Miami Scenes" 
          subtitle="Cultural Collective" 
        />

      </div>
    </section>
  );
};

export default LotusBentoGallery;