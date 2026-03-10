import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Music, Play, Youtube, ExternalLink } from 'lucide-react';

const SmartLinkModal = ({ isOpen, onClose, albumTitle, cover, spotifyUrl, soundcloudUrl, youtubeUrl }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/90 backdrop-blur-md"
                />

                {/* Modal Container */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 overflow-hidden"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-10 p-2 text-white/50 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>

                    {/* Header with Title */}
                    <div className="relative h-48 overflow-hidden">
                        <img
                            src={cover}
                            alt={albumTitle}
                            className="w-full h-full object-cover opacity-40 blur-sm"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-t from-[#0a0a0a] to-transparent">
                            <span className="text-[#D4AF37] font-body text-[10px] uppercase tracking-[0.4em] mb-2">Escucha en tu plataforma</span>
                            <h2 className="font-serif-display text-4xl text-white tracking-tight">{albumTitle}</h2>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="p-8 space-y-4">
                        {/* Spotify */}
                        <a
                            href={spotifyUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-white/5 hover:bg-[#1DB954] group transition-all duration-300 border border-white/5"
                        >
                            <div className="flex items-center gap-4">
                                <Music className="text-[#1DB954] group-hover:text-black" />
                                <span className="font-body font-bold text-white group-hover:text-black">Spotify</span>
                            </div>
                            <ExternalLink size={18} className="text-white/20 group-hover:text-black" />
                        </a>

                        {/* SoundCloud */}
                        <a
                            href={soundcloudUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-white/5 hover:bg-[#FF5500] group transition-all duration-300 border border-white/5"
                        >
                            <div className="flex items-center gap-4">
                                <Play className="text-[#FF5500] group-hover:text-black" fill="currentColor" />
                                <span className="font-body font-bold text-white group-hover:text-black">SoundCloud</span>
                            </div>
                            <ExternalLink size={18} className="text-white/20 group-hover:text-black" />
                        </a>

                        {/* YouTube */}
                        <a
                            href={youtubeUrl || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-4 bg-white/5 hover:bg-[#FF0000] group transition-all duration-300 border border-white/5"
                        >
                            <div className="flex items-center gap-4">
                                <Youtube className="text-[#FF0000] group-hover:text-black" />
                                <span className="font-body font-bold text-white group-hover:text-black">YouTube</span>
                            </div>
                            <ExternalLink size={18} className="text-white/20 group-hover:text-black" />
                        </a>
                    </div>

                    {/* Footer Decoration */}
                    <div className="h-1 w-full bg-gradient-to-r from-[#FF3B30] via-[#D4AF37] to-[#00E5FF]" />
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default SmartLinkModal;
