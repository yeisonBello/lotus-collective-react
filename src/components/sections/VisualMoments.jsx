import React, { useState } from 'react';

const VisualMoments = ({ data }) => {
  const sectionTitle = data?.gallery?.title || "Visual moments";
  const sectionDesc = data?.gallery?.description || "Scenes from Miami nights and the stages where Lotus Collective comes alive";
  
  // Array of image paths
  const galleryImages = [
    '/assets/lotus_gallery/image-019.jpg',
    '/assets/lotus_gallery/image-024.jpg',
    '/assets/lotus_gallery/image-043.jpg',
    '/assets/lotus_gallery/image-062.jpg',
    '/assets/lotus_gallery/image-082.jpg',
    '/assets/lotus_gallery/image-120.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        
        {/* Lado del Texto */}
        <div className="md:w-1/3 mb-10 md:mb-0 pr-10">
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
            {sectionTitle}
          </h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            {sectionDesc}
          </p>
        </div>

        {/* Lado del Slider / Galería */}
        <div className="md:w-2/3 relative">
          <div className="relative group">
            {/* Contenedor de Imagen Principal */}
            <div className="aspect-square bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border border-white/5">
              {galleryImages.length > 0 ? (
                <img src={galleryImages[currentIndex]} alt={`Visual moment ${currentIndex + 1}`} className="w-full h-full object-cover" />
              ) : (
                <div className="text-zinc-700">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c0 1.1.9 2-2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                </div>
              )}

              {/* Botones de Navegación (Flechas) */}
              <button onClick={handlePrev} className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full shadow-lg text-white hover:bg-[#FF3B30] transition-all backdrop-blur-sm border border-white/10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              
              <button onClick={handleNext} className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full shadow-lg text-white hover:bg-[#FF3B30] transition-all backdrop-blur-sm border border-white/10">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            {/* Indicadores (Puntos) en la esquina inferior derecha */}
            <div className="absolute -bottom-10 right-0 flex space-x-2">
              {galleryImages.map((_, i) => (
                <span 
                  key={i} 
                  className={`h-2 w-2 rounded-full transition-colors ${i === currentIndex ? 'bg-[#FF3B30]' : 'bg-zinc-700'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualMoments;