import React from 'react';
import { motion } from 'framer-motion';
import { Play, Music, Youtube } from 'lucide-react';

const AlbumCard = ({ title, cover, onOpenModal }) => {
    return (
        <motion.div
            className="group relative aspect-square overflow-hidden cursor-pointer bg-black"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }} // --ease-funk
            onClick={onOpenModal}
        >
            {/* Cover Image */}
            <img
                src={cover}
                alt={title}
                className="w-full h-full object-cover transition-all duration-600 ease-smooth group-hover:scale-110 group-hover:blur-sm group-hover:opacity-60"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-serif-display text-4xl md:text-5xl text-white mb-6 text-center px-4 leading-tight">
                    {title}
                </h3>

                <div className="flex gap-6 items-center">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="text-[#1DB954]" // Spotify Green
                    >
                        <Music size={32} />
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="text-[#FF5500]" // SoundCloud Orange
                    >
                        <Play size={32} fill="currentColor" />
                    </motion.div>
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="text-[#FF0000]" // YouTube Red
                    >
                        <Youtube size={32} />
                    </motion.div>
                </div>

                {/* Listen Label */}
                <span className="mt-8 font-body text-xs uppercase tracking-[0.3em] font-bold text-white border-b border-white pb-1">
                    Escuchar ahora
                </span>

                {/* Soundwave Micro-animation */}
                <div className="absolute bottom-8 flex items-end gap-[3px] h-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                            key={i}
                            className="w-[2px] bg-white opacity-40"
                            animate={{
                                height: [4, 16, 8, 14, 4],
                            }}
                            transition={{
                                duration: 0.6, // 1 beat
                                repeat: Infinity,
                                delay: i * 0.1
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Edge Accent */}
            <div className="absolute inset-0 border border-white/10 group-hover:border-[#FF3B30]/50 transition-colors duration-300" />
        </motion.div>
    );
};

export default AlbumCard;
