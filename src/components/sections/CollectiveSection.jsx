const members = [
  {
    name: 'Ivan Lotus',
    role: 'Frontman / Keys',
    color: '#FF3B30',
    image: '/assets/profile_photo/ivan.webp',
    spiritAnimal: '/assets/profile_photo/leon.png',
    social: {
    instagram: 'https://www.instagram.com/ivanlotus_/',
      facebook: '#',
      email: 'mailto:ivan@lotuscollective.com'
    }
  },
  {
    name: 'Samuel Little',
    role: 'Frontman / Bass',
    color: '#10b981',
    image: '/assets/profile_photo/sam.webp',
    spiritAnimal: '/assets/profile_photo/panther.png',
    social: {
    instagram: 'https://www.instagram.com/samiheadd/?hl=en',
      facebook: '#',
      email: 'mailto:sam@lotuscollective.com'
    }
  },
  {
    name: 'Julian Bermudez',
    role: 'Drums / Jazz Prodigy',
    color: '#6366f1',
    image: '/assets/profile_photo/julian.webp',
    spiritAnimal: '/assets/profile_photo/turtle.png',
    social: {
    instagram: 'https://www.instagram.com/bad_juju_bad/?hl=en',
      facebook: '#',
      email: 'mailto:julian@lotuscollective.com'
    }
  },
  {
    name: 'Marcelo Romero',
    role: 'Guitar / Jazz Prodigy',
    color: '#14b8a6',
    image: '/assets/profile_photo/marcelo.webp',
    spiritAnimal: '/assets/profile_photo/Polecat.png',
    social: {
    instagram: 'https://www.instagram.com/mromero_/?hl=en',
      facebook: '#',
      email: 'mailto:marcelo@lotuscollective.com'
    }
  },
  {
    name: 'Marvin Clairsaint',
    role: 'Virtuoso Drummer',
    color: '#f97316',
    image: '/assets/profile_photo/marvin.webp',
    spiritAnimal: '/assets/profile_photo/bear.png',
    social: {
    instagram: 'https://www.instagram.com/muzix_martian/?hl=en',
      facebook: '#',
      email: 'mailto:marvin@lotuscollective.com'
    }
  },
];

import { Facebook, Instagram, Mail } from 'lucide-react';

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
                            {/* Overlay with info and social icons */}
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col justify-end h-full">
                                <div className='mt-auto'>
                                    <h3 className="font-serif-display text-2xl text-white">{member.name}</h3>
                                    <p
                                        className="type-label mt-1 block"
                                        style={{ color: 'var(--brass-bright)' }}
                                    >
                                        {member.role}
                                    </p>
                                    
                                    {/* Social Icons - Visible on Hover */}
                                    <div className="flex gap-4 mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-out">
                                        <a 
                                            href={member.social.instagram} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-zinc-400 hover:text-[#d4af37] transition-colors"
                                            aria-label={`${member.name} Instagram`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Instagram size={20} />
                                        </a>
                                        <a 
                                            href={member.social.facebook} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="text-zinc-400 hover:text-[#d4af37] transition-colors"
                                            aria-label={`${member.name} Facebook`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Facebook size={20} />
                                        </a>
                                        <a 
                                            href={member.social.email} 
                                            className="text-zinc-400 hover:text-[#d4af37] transition-colors"
                                            aria-label={`Email ${member.name}`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Mail size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CollectiveSection;
