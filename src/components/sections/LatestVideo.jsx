import React from 'react';
import { motion } from 'framer-motion';

const LatestVideo = ({ videoId = "0TRzQCbaPzotUPiu1po7hr" }) => { // Placeholder ID or actual one if found
    // For demo, using a generic YouTube embed if videoId is provided, 
    // but the user asked for "Where is Edgar?" aesthetics.

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-[#FF3B30] font-body text-xs uppercase tracking-[0.4em] font-bold mb-4 block">New Experience</span>
                    <h2 className="font-serif-display text-6xl md:text-7xl text-white">Latest <span className="italic">Visuals</span></h2>
                </div>

                {/* Retro TV / Elegant Frame Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative group mt-20"
                >
                    {/* Retro TV Frame Styling via CSS classes */}
                    <div className="relative aspect-video bg-black rounded-sm overflow-hidden border-[12px] border-[#1a1a1a] shadow-2xl">
                        {/* Glossy Overlay */}
                        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-tr from-white/5 to-transparent mix-blend-overlay" />

                        {/* Iframe */}
                        <iframe
                            width="100%"
                            height="100%"
                            src={`https://www.youtube.com/embed/_1Tpe8g9eHQ`}
                            title="Lotus Collective - Latest Music Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="relative z-0"
                        />
                    </div>

                    {/* TV Knobs / Dials (Decorative) */}
                    <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8">
                        <div className="w-6 h-6 rounded-full bg-[#262626] border border-white/10 shadow-inner" />
                        <div className="w-6 h-6 rounded-full bg-[#262626] border border-white/10 shadow-inner" />
                    </div>

                    {/* Ambient Glow */}
                    <div className="absolute -inset-4 bg-[#FF3B30]/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </motion.div>

                <div className="mt-12 text-center text-[#a3a3a3] font-body text-sm tracking-widest uppercase">
                    Lotus Collective — Full Visual Experience
                </div>
            </div>
        </section>
    );
};

export default LatestVideo;
