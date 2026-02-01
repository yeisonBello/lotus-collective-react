import Hero from '../components/sections/Hero';
import BandStory from '../components/sections/BandStory';
import DiscographySection from '../components/sections/DiscographySection';
import CollectiveSection from '../components/sections/CollectiveSection';
import ShowsSection from '../components/sections/ShowsSection';
import VisualMoments from '../components/sections/VisualMoments';
import VisualBreathingPoint from '../components/sections/VisualBreathingPoint';
import { gallery } from '../data/content';

const Home = () => {
  return (
    <main>
      <Hero />
      <VisualBreathingPoint text="MIAMI ROOTS, FUNK SOUL" />
      <BandStory compactMode={true} />
      <VisualMoments data={{ gallery }} />
      <VisualBreathingPoint text="Pause. Breathe. Listen." />
      <DiscographySection />
      <CollectiveSection />
      <VisualBreathingPoint text="Feel the rhythm" />
      <ShowsSection />
    </main>
  );
};

export default Home;

