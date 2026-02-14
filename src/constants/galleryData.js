// Use Vite's glob import to get all images from src/assets/gallery
// eager: true ensures they are imported synchronously
// as: 'url' gives us the string path to the asset
const modules = import.meta.glob('/src/assets/gallery/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default'
});

// Helper function to group images by their parent folder
const getImagesByFolder = (folderName) => {
  return Object.keys(modules)
    .filter((path) => path.includes(`/src/assets/gallery/${folderName}/`))
    .sort() // Ensure alphabetical order
    .map((path) => modules[path]);
};

export const lotusImages = {
  // 1. Carousel Section
  heroCarousel: getImagesByFolder('hero-carousel'),

  // 2. Studio Section
  studio: getImagesByFolder('studio'),

  // 4. Live Energy Section
  energy: getImagesByFolder('live-energy'),

  // 6. Detail Section
  gear: getImagesByFolder('branding'),

  // 7. Venue Section
  venue: getImagesByFolder('archive'),
};
