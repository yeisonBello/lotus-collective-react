const members = [
  {
    name: 'Ivan Lotus',
    role: 'Frontman / Keys',
    color: '#FF3B30',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=800&auto=format&fit=crop',
    spiritAnimal: 'https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Samuel Little',
    role: 'Frontman / Bass',
    color: '#10b981',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
    spiritAnimal: 'https://images.unsplash.com/photo-1588167056840-13caf6e4562a?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Julian Bermudez',
    role: 'Drums / Jazz Prodigy',
    color: '#6366f1',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    spiritAnimal: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg',
  },
  {
    name: 'Marcelo Romero',
    role: 'Guitar / Jazz Prodigy',
    color: '#14b8a6',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    spiritAnimal: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Marvin Clairsaint',
    role: 'Virtuoso Drummer',
    color: '#f97316',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg',
    spiritAnimal: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp',
  },
];

const CollectiveSection = () => {
  return (
    <section id="collective" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 gradient-stage"></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20 fade-in">
          <span className="type-label" style={{ color: 'var(--brass-bright)' }}>
            The Musicians
          </span>
          <h2 className="type-section-title mt-4 brass-shimmer">The Collective</h2>
          <p className="text-zinc-500 mt-4 max-w-2xl mx-auto">
            Hand-selected artists from diverse backgrounds bringing a signature, unified Miami
            sound.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {members.map((member, index) => (
            <div
              key={member.name}
              className="group relative h-[400px] bg-zinc-900 overflow-hidden cursor-pointer border hover-glow slide-up"
              style={{
                borderColor: 'var(--brass-dark)',
                animationDelay: `${index * 150}ms`,
                transitionDuration: 'var(--timing-half)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--brass-bright)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--brass-dark)';
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:opacity-0 transition-opacity"
                style={{ transitionDuration: 'var(--timing-half)' }}
              />
              <img
                src={member.spiritAnimal}
                alt="Spirit Animal"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 scale-110 group-hover:scale-100 transition-all"
                style={{ transitionDuration: 'var(--timing-whole)' }}
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h3 className="font-serif-display text-2xl text-white">{member.name}</h3>
                <p
                  className="type-label mt-1"
                  style={{ color: 'var(--brass-bright)' }}
                >
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectiveSection;
