import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AlbumCard from '../components/ui/AlbumCard';
import SmartLinkModal from '../components/ui/SmartLinkModal';
import SoundwaveDivider from '../components/ui/SoundwaveDivider';
import LatestVideo from '../components/sections/LatestVideo';
import NewsletterSection from '../components/sections/NewsletterSection';
import './Discography.css';

const Discography = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const releases = [
    {
      id: 'edgar',
      title: 'Where Is Edgar?',
      type: 'Debut Album',
      year: '2025',
      cover: '/assets/covers/south-pointe.png',
      spotifyUrl: 'https://open.spotify.com/album/7lDNcPipBYcfxFXwKYjqy5',
      soundcloudUrl: 'https://soundcloud.com/lotuscollective/sets/where-is-edgar-1',
      youtubeUrl: 'https://www.youtube.com/playlist?list=OLAK5uy_kk_y6hxv_1I_70TB0RH95rxljPKO8rjk8'
    },
    {
      id: 'paraiso',
      title: 'Paraíso',
      type: 'Single',
      year: '2025',
      cover: '/assets/covers/paraiso.png',
      spotifyUrl: 'https://open.spotify.com/album/2mBwlYV1SgJABIHXs29ObF',
      soundcloudUrl: 'https://soundcloud.com/lotuscollective/paraiso?in=lotuscollective/sets/where-is-edgar-1',
      youtubeUrl: 'https://www.youtube.com/watch?v=rAYSxrSKOrQ&list=OLAK5uy_kk_y6hxv_1I_70TB0RH95rxljPKO8rjk8&index=5'
    },
    {
      id: 'caliente',
      title: 'Caliente',
      type: 'Single',
      year: '2025',
      cover: '/assets/covers/caliente.png',
      spotifyUrl: 'https://open.spotify.com/track/6NSw3Uep0oq9iMUWD7AkrT',
      soundcloudUrl: 'https://soundcloud.com/lotuscollective/caliente?in=lotuscollective/sets/paraiso-902906447',
      youtubeUrl: 'https://www.youtube.com/watch?v=i4LsD6uui3E&list=OLAK5uy_kk_y6hxv_1I_70TB0RH95rxljPKO8rjk8&index=4'
    }
  ];

  const handleOpenModal = (album) => {
    setSelectedAlbum(album);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-black overflow-hidden relative">
      {/* Background Texture Overlay */}
      <div className="texture-overlay absolute inset-0 z-0 pointer-events-none opacity-20" />

      {/* Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF3B30] opacity-[0.03] blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00E5FF] opacity-[0.03] blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif-display text-8xl md:text-9xl mb-6 tracking-tighter"
          >
            DISCO<span className="italic text-[#FF3B30]">GRAPHY</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="h-[1px] w-12 bg-[#D4AF37]" />
            <p className="text-[#D4AF37] text-sm uppercase tracking-[0.4em] font-bold">
              Explora el Sonido Lotus
            </p>
            <div className="h-[1px] w-12 bg-[#D4AF37]" />
          </motion.div>
        </div>

        {/* Visual Hub Grid */}
        <div className="discography-grid">
          {releases.map((release, index) => (
            <motion.div
              key={release.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
            >
              <AlbumCard
                title={release.title}
                cover={release.cover}
                onOpenModal={() => handleOpenModal(release)}
              />
              <div className="mt-4 flex justify-between items-center px-1">
                <div>
                  <h4 className="font-serif-display text-2xl text-white">{release.title}</h4>
                  <p className="text-[#a3a3a3] text-xs uppercase tracking-widest">{release.type} • {release.year}</p>
                </div>
                <div className="h-8 flex items-end gap-[2px]">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-[1.5px] bg-[#FF3B30]/30 h-full animate-[soundwave-data_1s_ease-in-out_infinite_alternate]" style={{ animationDelay: `${i * 0.2}s` }} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Latest Video Section */}
        <SoundwaveDivider color="#FF3B30" className="mt-20" />
        <LatestVideo />
        <SoundwaveDivider color="#D4AF37" />

        {/* Newsletter Section */}
        <NewsletterSection />

        {/* Bottom CTA */}
        <div className="mt-32 text-center pb-20">
          <motion.a
            href="/"
            whileHover={{ x: -10 }}
            className="inline-flex items-center gap-4 text-[#FF3B30] hover:text-[#D4AF37] transition-colors text-sm uppercase tracking-[0.3em] font-bold"
          >
            <span className="text-xl">←</span> Back to the Magic
          </motion.a>
        </div>
      </div>

      {/* Smart Link Modal */}
      {selectedAlbum && (
        <SmartLinkModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          albumTitle={selectedAlbum.title}
          cover={selectedAlbum.cover}
          spotifyUrl={selectedAlbum.spotifyUrl}
          soundcloudUrl={selectedAlbum.soundcloudUrl}
          youtubeUrl={selectedAlbum.youtubeUrl}
        />
      )}
    </div>
  );
};

export default Discography;
