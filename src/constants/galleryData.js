// Pull the URL from the .env file
const BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

export const lotusImages = {
  // 1. Carousel Section (Array of images)
  heroCarousel: [
    `${BASE_URL}/hero-carousel/hero-carousel-01.png`,
    `${BASE_URL}/hero-carousel/hero-carousel-01.png`,
    `${BASE_URL}/hero-carousel/hero-carousel-01.png`,
  ],

  // 2. Studio Section (2x1)
  studio: `${BASE_URL}/studio/studio-01.png`,

  // 4. Live Energy Section (1x2)
  energy: `${BASE_URL}/live-energy/live-energy-01.png`,

  // 6. Detail Section (1x1)
  gear: `${BASE_URL}/branding/branding-01.png`,

  // 7. Venue Section (1x1)
  venue: `${BASE_URL}/archive/archive-01.png`,
};
