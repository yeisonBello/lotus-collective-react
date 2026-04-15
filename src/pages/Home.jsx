import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import LatestVideo from '../components/sections/LatestVideo';
import BandStory from '../components/sections/BandStory';
import DiscographySection from '../components/sections/DiscographySection';
import CollectiveSection from '../components/sections/CollectiveSection';
import ShowsSection from '../components/sections/ShowsSection';
import VisualMoments from '../components/sections/VisualMoments';
import VisualBreathingPoint from '../components/sections/VisualBreathingPoint';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // Un pequeño retraso para asegurar que la página se renderizó correcta
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <VisualBreathingPoint text="MIAMI ROOTS, FUNK SOUL" />
      <LatestVideo showText={false} />
      <BandStory compactMode={true} />
      
      {/* Bento Gallery movida aquí para mayor impacto visual y reemplazo de la galería simple */}
      <VisualMoments />

      <VisualBreathingPoint text="Pause. Breathe. Listen." />
      <DiscographySection />
      <CollectiveSection />
      <VisualBreathingPoint text="Feel the rhythm" />
      <ShowsSection />
    </main>
  );
};

export default Home;
