import React, { useEffect } from 'react';
import LotusBentoGallery from '../components/sections/LotusBentoGallery';

const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="pt-20 min-h-screen bg-black">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl md:text-6xl font-serif text-center mb-8 text-white tracking-widest uppercase">
                    Gallery
                </h1>
                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto font-light tracking-wide">
                    A visual journey through our performances, studio sessions, and the vibrant energy of the Lotus Collective.
                </p>
            </div>
            <LotusBentoGallery />
        </main>
    );
};

export default Gallery;
