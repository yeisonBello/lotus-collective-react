import React, { useEffect } from 'react';
import LotusBentoGallery from '../components/sections/LotusBentoGallery';
import SoundwaveDivider from '../components/ui/SoundwaveDivider';
import heroImage from '../assets/gallery/hero-carousel/image-024.webp';
import avatar1 from '../assets/gallery/live-energy/rs=w_984,h_656 (1).webp';
import avatar2 from '../assets/gallery/archive/rs=w_984,h_740 (1).webp';
import avatar3 from '../assets/gallery/studio/qt=q_97 (1).webp';

const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const testimonials = [
        {
            quote: "The energy Lotus Collective brings to the stage is unmatched. A true Miami gem with deep grooves and brass shimmer.",
            author: "SRI LEKHA",
            role: "MNC",
            title: "MUSIC CRITIC - MNC",
            avatar: avatar1,
            rating: 5
        },
        {
            quote: "Seeing them at Zey Zey was a religious experience. The funk is deep with this one. Sophisticated arrangements with a gritty soul.",
            author: "ELENA R.",
            role: "FAN",
            title: "LONGTIME FAN",
            avatar: avatar2,
            rating: 5
        },
        {
            quote: "A masterclass in Jazz-Funk. They capture the essence of Miami nights and high-energy tropical fusion.",
            author: "THE GROOVE",
            role: "COLLECTIVE",
            title: "BLOG - THE GROOVE",
            avatar: avatar3,
            rating: 5
        }
    ];

    return (
        <main className="min-h-screen bg-black overflow-x-hidden">
            {/* Impact Header */}
            <header className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
                {/* Hero Background */}
                <div className="absolute inset-0">
                    <img
                        src={heroImage}
                        alt="Lotus Collective Performance"
                        className="w-full h-full object-cover brightness-75 transition-transform duration-[2000ms] hover:scale-105"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 fade-in">
                    <h1 className="type-hero text-[#D4AF37] mb-4 drop-shadow-2xl uppercase">
                        Gallery
                    </h1>
                    <p className="type-body text-gray-300 max-w-2xl mx-auto font-light tracking-wide opacity-80">
                        A visual journey through performances, studio sessions, and the vibrant energy of the collective.
                    </p>
                </div>
            </header>

            <SoundwaveDivider color="#FF3B30" className="-mt-8 relative z-20" />

            {/* Bento Gallery Section */}
            <section className="py-12">
                <LotusBentoGallery />
            </section>

            <SoundwaveDivider color="#D4AF37" />

            {/* Testimonials Wall (Press & Reviews) */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="type-section-title text-white mb-4">Press & Reviews</h2>
                    <div className="h-px w-24 bg-[#B8860B] mx-auto opacity-50" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-[#1a1a1a] border border-[#FF3B30]/30 p-10 rounded-xl flex flex-col items-center text-center hover:border-[#FF3B30] transition-all duration-500 group slide-up relative"
                            style={{ animationDelay: `${i * 150}ms` }}
                        >
                            {/* Inner Border Effect like the photo */}
                            <div className="absolute inset-2 border border-[#FF3B30]/10 rounded-lg pointer-events-none group-hover:border-[#FF3B30]/30 transition-colors duration-500" />

                            {/* Avatar */}
                            <div className="relative w-32 h-32 mb-8 z-10">
                                <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37]/50 group-hover:border-[#D4AF37] transition-colors duration-500" />
                                <img
                                    src={t.avatar}
                                    alt={t.author}
                                    className="w-full h-full object-cover rounded-full p-1"
                                />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-8 z-10">
                                {[...Array(t.rating)].map((_, starI) => (
                                    <svg
                                        key={starI}
                                        className="w-5 h-5 text-[#FFD700]"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="type-body text-[#e5e5e5] italic font-light mb-10 leading-relaxed z-10 max-w-xs">
                                "{t.quote}"
                            </p>

                            {/* Divider */}
                            <div className="w-12 h-px bg-[#FF3B30]/40 mb-10 z-10" />

                            {/* Author Info */}
                            <div className="z-10">
                                <p className="type-label text-[#a3a3a3] mb-1 tracking-[0.3em]">
                                    {t.role}
                                </p>
                                <p className="type-section-title text-[#D4AF37] text-2xl mb-4 tracking-wider uppercase">
                                    {t.author}
                                </p>
                                <div className="h-px w-32 bg-[#262626] mx-auto mb-4" />
                                <p className="type-label text-[#737373] text-[10px]">
                                    {t.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Gallery;
