import React from 'react';
import { motion } from 'framer-motion';

const NewsletterSection = () => {
    return (
        <section className="py-32 relative bg-[#050505] overflow-hidden">
            {/* Textured Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/assets/gallery/studio/studio-1.jpg')] bg-cover bg-center grayscale contrast-125" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/90 to-black/80" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="font-serif-display text-5xl md:text-6xl text-white mb-6">Join the <span className="text-[#D4AF37] italic">Collective</span></h3>
                    <p className="text-[#a3a3a3] text-lg mb-12 max-w-xl mx-auto font-body">
                        Get the magic in your inbox. No spam, just pure funk, upcoming shows, and exclusive releases.
                    </p>

                    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="flex-1 bg-white/5 border border-white/10 px-6 py-4 text-white font-body focus:outline-none focus:border-[#FF3B30]/50 transition-colors"
                        />
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-[#FF3B30] text-white px-8 py-4 font-body font-bold uppercase tracking-widest text-sm hover:bg-[#D4AF37] transition-colors"
                        >
                            Subscribe
                        </motion.button>
                    </form>

                    <div className="mt-8 flex justify-center gap-6 text-[#525252] text-[10px] uppercase tracking-[0.2em] font-bold">
                        <span>Monthly Updates</span>
                        <span>•</span>
                        <span>Exclusive Content</span>
                        <span>•</span>
                        <span>VIP Access</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default NewsletterSection;
