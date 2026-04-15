import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, Trash2, Home, RefreshCw, Upload, Camera, Film, Mic, Music, Archive, Zap, Calendar, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { lotusImages } from '../constants/galleryData.js';

const CATEGORIES = [
  { id: 'heroCarousel', label: 'Hero Carousel', icon: <Film size={18} />, folder: 'hero' },
  { id: 'studio', label: 'Studio', icon: <Mic size={18} />, folder: 'studio' },
  { id: 'energy', label: 'Live Energy', icon: <Zap size={18} />, folder: 'energy' },
  { id: 'gear', label: 'Branding', icon: <Music size={18} />, folder: 'branding' },
  { id: 'venue', label: 'Archive', icon: <Archive size={18} />, folder: 'archive' },
  { id: 'visualMoments', label: 'Visual Moments', icon: <Camera size={18} />, folder: 'moments' },
];

const AdminGallery = () => {
  const [activeTab, setActiveTab] = useState('visualMoments');
  const [allImages, setAllImages] = useState(lotusImages);

  const currentCategory = CATEGORIES.find(c => c.id === activeTab);
  const images = allImages[activeTab] || [];

  const handleDelete = (imagePath) => {
    if (window.confirm('Are you sure you want to delete this image?')) {
      const updatedImages = { ...allImages };
      updatedImages[activeTab] = (updatedImages[activeTab] || []).filter(img => img !== imagePath);
      setAllImages(updatedImages);
      alert('Simulation: Image removed from UI. In production, this would delete the physical file.');
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              <Camera className="text-[#FF3B30]" />
              Global Gallery Control
            </h1>
            <p className="text-zinc-400">Manage all visual assets from a single dashboard</p>
          </div>
          <div className="flex gap-4">
            <Link to="/" className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors">
              <Home size={18} />
              Back to Home
            </Link>
            <button 
              onClick={() => window.location.reload()}
              className="flex items-center gap-2 px-4 py-2 bg-[#FF3B30] rounded-lg hover:bg-[#D32F2F] transition-colors font-bold shadow-lg shadow-red-900/20"
            >
              <RefreshCw size={18} />
              Refresh
            </button>
          </div>
        </div>

        {/* Management Areas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Image Automation Guide */}
            <div className="lg:col-span-2 bg-zinc-900/50 border border-white/5 p-8 rounded-3xl">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Upload size={20} className="text-[#FF3B30]" />
                    Gallery Automation Guide
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-2">
                        <span className="text-xs uppercase tracking-widest text-[#FF3B30] font-bold">Step 1</span>
                        <p className="text-sm text-zinc-300">Run <code className="bg-black p-1 rounded">npm run optimize-gallery</code></p>
                    </div>
                    <div className="space-y-2">
                        <span className="text-xs uppercase tracking-widest text-[#FF3B30] font-bold">Step 2</span>
                        <p className="text-sm text-zinc-300">Drop photos in <code className="bg-black p-1 rounded">uploads/{currentCategory.folder}</code></p>
                    </div>
                    <div className="space-y-2">
                        <span className="text-xs uppercase tracking-widest text-[#FF3B30] font-bold">Step 3</span>
                        <p className="text-sm text-zinc-300">They will move to the web automatically!</p>
                    </div>
                </div>
            </div>

            {/* Live Content / Google Sheets */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-black border border-white/10 p-8 rounded-3xl flex flex-col justify-between group hover:border-[#D4AF37]/50 transition-all">
                <div>
                    <div className="w-12 h-12 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform">
                        <Calendar size={24} />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Live Show Dates</h2>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        The upcoming shows are managed via Google Sheets. Any changes there reflect instantly on the website.
                    </p>
                </div>
                <a 
                    href="https://docs.google.com/spreadsheets" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-[#D4AF37] text-black rounded-2xl font-bold hover:bg-[#B8860B] transition-colors"
                >
                    Edit Show Dates
                    <ExternalLink size={16} />
                </a>
            </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-zinc-900/30 p-2 rounded-2xl border border-white/5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all font-medium ${
                activeTab === cat.id 
                ? 'bg-[#FF3B30] text-white shadow-lg' 
                : 'text-zinc-500 hover:text-white hover:bg-zinc-800'
              }`}
            >
              {cat.icon}
              {cat.label}
              <span className="ml-2 text-[10px] bg-black/20 px-2 py-1 rounded-full">
                {(allImages[cat.id] || []).length}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="contents"
            >
              {images.map((img, index) => (
                <div
                  key={img}
                  className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 aspect-[4/5]"
                >
                  <img 
                    src={img} 
                    alt={`Gallery asset ${index}`} 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  
                  {/* Overlay Controls */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="w-full flex justify-between items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-[10px] font-mono text-zinc-400 overflow-hidden text-ellipsis whitespace-nowrap max-w-[120px]">
                        {img.split('/').pop()}
                      </span>
                      <button 
                        onClick={() => handleDelete(img)}
                        className="p-3 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500 hover:text-white transition-all backdrop-blur-xl border border-red-500/20"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Empty State / Add Placeholder */}
              <div className="border-2 border-dashed border-zinc-800 rounded-3xl flex flex-col items-center justify-center p-8 text-zinc-600 hover:border-[#FF3B30]/50 hover:text-zinc-400 transition-all min-h-[300px]">
                <div className="p-4 bg-zinc-900 rounded-2xl mb-4">
                    <Image size={32} />
                </div>
                <p className="text-center text-xs px-6">
                    Drop images in <strong>uploads/{currentCategory.folder}</strong> to update this section
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AdminGallery;
