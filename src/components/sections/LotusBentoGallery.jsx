import React, { useState, useEffect, useCallback } from 'react';
import { lotusImages } from '../../constants/galleryData.js';

const LotusBentoGallery = () => {
  // --- CAROUSEL STATE (Hero) ---
  const [heroIndex, setHeroIndex] = useState(0);

  // --- LIGHTBOX STATE ---
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Autoplay for Hero Carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % lotusImages.heroCarousel.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Keyboard Navigation for Lightbox
  const handleKeyDown = useCallback((e) => {
    if (!lightboxOpen) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showPrevImage();
    if (e.key === 'ArrowRight') showNextImage();
  }, [lightboxOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const openLightbox = (images, initialIndex = 0) => {
    if (!images || images.length === 0) return;
    setCurrentImages(images);
    setLightboxIndex(initialIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImages([]);
    setLightboxIndex(0);
  };

  const showNextImage = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % currentImages.length);
  };

  const showPrevImage = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

  // --- BENTO ITEM COMPONENT ---
  const BentoItem = ({ title, subtitle, images, className, children, isCarousel }) => {
    // Determine which image to show in the grid
    // For carousel: uses heroIndex state
    // For static: uses images[0]

    // Check if we have multiple images to show an indicator
    const hasMultiple = images && images.length > 1;

    return (
      <div
        onClick={() => openLightbox(images)}
        className={`group relative flex flex-col justify-end overflow-hidden rounded-[2.5rem] bg-gray-900 text-white shadow-xl cursor-pointer ${className}`}
      >
        {isCarousel ? (
          images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Carousel"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === heroIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))
        ) : (
          images && images.length > 0 && (
            <img
              src={images[0]}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          )
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

        {/* Content */}
        <div className="relative z-10 p-8">
          {title && <h3 className="text-xl font-bold tracking-tight leading-tight">{title}</h3>}
          {subtitle && <p className="text-sm opacity-70 font-medium mt-1">{subtitle}</p>}
          {/* Multiple images indicator */}
          {hasMultiple && !isCarousel && (
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M15 8h.01" /><rect width="16" height="16" x="4" y="4" rx="3" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" /></svg>
            </div>
          )}
          {children}
        </div>
      </div>
    );
  };

  return (
    <>
      <section className="bg-black py-12 px-4 md:px-8 min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[18rem] gap-6 w-full max-w-7xl mx-auto">

          {/* 1. HERO CAROUSEL */}
          <BentoItem
            isCarousel
            images={lotusImages.heroCarousel}
            title="The Big Stage: Zey Zey"
            subtitle="Featuring Cheo Pardo — May 2025"
            className="md:col-span-2 md:row-span-2"
          />

          {/* 2. STUDIO */}
          <BentoItem
            images={lotusImages.studio}
            title="Inside the Studio"
            subtitle='Recording "Where is Edgar?"'
            className="md:col-span-2"
          />

          {/* 3. STATS (Static, no lightbox needed unless desired, but user didn't ask) */}
          <div className="flex items-center justify-center rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl text-center p-6 hover:bg-white/10 transition-colors">
            <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              2025:<br />+50 SHOWS.<br />1 ALBUM.
            </p>
          </div>

          {/* 4. ENERGY */}
          <BentoItem
            images={lotusImages.energy}
            title="Nightly Magic"
            subtitle="Gozadera Social Club"
            className="md:row-span-2"
          />

          {/* 5. CTA LINK */}
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

          {/* 6. GEAR */}
          <BentoItem
            images={lotusImages.gear}
            title="The Sound"
            subtitle="Analog Vibes"
          />

          {/* 7. VENUE */}
          <BentoItem
            images={lotusImages.venue}
            title="Miami Scenes"
            subtitle="Cultural Collective"
          />

        </div>
      </section>

      {/* LIGHTBOX OVERLAY */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>

          {/* Navigation - Left */}
          {currentImages.length > 1 && (
            <button
              onClick={showPrevImage}
              className="absolute left-4 md:left-8 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            </button>
          )}

          {/* Main Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full flex items-center justify-center p-2"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          >
            <img
              key={lightboxIndex} // Force re-render for animation
              src={currentImages[lightboxIndex]}
              alt={`Gallery image ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl transition-transform duration-300 transform scale-100"
            />

            {/* Counter */}
            {currentImages.length > 1 && (
              <div className="absolute bottom-[-3rem] left-1/2 -translate-x-1/2 text-white/50 text-sm font-medium">
                {lightboxIndex + 1} / {currentImages.length}
              </div>
            )}
          </div>

          {/* Navigation - Right */}
          {currentImages.length > 1 && (
            <button
              onClick={showNextImage}
              className="absolute right-4 md:right-8 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default LotusBentoGallery;