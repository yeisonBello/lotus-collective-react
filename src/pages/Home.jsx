import Hero from '../components/sections/Hero';
import BandStory from '../components/sections/BandStory';
import DiscographySection from '../components/sections/DiscographySection';
import CollectiveSection from '../components/sections/CollectiveSection';
import ShowsSection from '../components/sections/ShowsSection';
 import VisualMoments from '../components/sections/VisualMoments';
import VisualBreathingPoint from '../components/sections/VisualBreathingPoint';
import { gallery } from '../data/content';
import LotusBentoGallery from '../components/sections/LotusBentoGallery';
import FloatingAudioControl from './FloatingAudioControl';

const Home = () => {
  return (
    <main>
      <Hero />
      <VisualBreathingPoint text="MIAMI ROOTS, FUNK SOUL" />
      <BandStory compactMode={true} />
      
      {/* Bento Gallery movida aquí para mayor impacto visual y reemplazo de la galería simple */}
      <VisualMoments />

      <VisualBreathingPoint text="Pause. Breathe. Listen." />
      <DiscographySection />
      <CollectiveSection />
      <VisualBreathingPoint text="Feel the rhythm" />
      <ShowsSection />
      <FloatingAudioControl />
    </main>
  );
};

export default Home;
