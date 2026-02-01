/**
 * VisualBreathingPoint Usage Examples
 *
 * This file demonstrates how to use the VisualBreathingPoint component
 * throughout the Lotus Collective website.
 */

import Hero from './Hero';
import BandStory from './BandStory';
import DiscographySection from './DiscographySection';
import CollectiveSection from './CollectiveSection';
import ShowsSection from './ShowsSection';
import VisualBreathingPoint from './VisualBreathingPoint';

const ExamplePage = () => {
  return (
    <main>
      <Hero />

      {/* Visual Reset after Hero section */}
      <VisualBreathingPoint text="Pause. Breathe. Listen." />

      <BandStory />

      {/* Another breathing point with different text */}
      <VisualBreathingPoint text="The story continues" />

      <DiscographySection />

      {/* Short, impactful phrase */}
      <VisualBreathingPoint text="Feel the rhythm" />

      <CollectiveSection />

      {/* Philosophical pause */}
      <VisualBreathingPoint text="Where music meets soul" />

      <ShowsSection />
    </main>
  );
};

/**
 * USAGE GUIDELINES
 *
 * 1. Text Props:
 *    - Keep phrases short and poetic (3-8 words)
 *    - Use title case or sentence case (component converts to uppercase)
 *    - Examples:
 *      ✓ "Pause. Breathe. Listen."
 *      ✓ "The journey continues"
 *      ✓ "Where is Edgar?"
 *      ✓ "Feel the funk"
 *
 * 2. Placement:
 *    - Between content-heavy sections (e.g., after long text blocks)
 *    - Before major thematic shifts
 *    - To create anticipation before key content
 *
 * 3. Spacing:
 *    - No additional margins needed (component is self-contained)
 *    - Works with any section order
 *
 * 4. Accessibility:
 *    - Text is semantic <h2> for screen readers
 *    - Respects prefers-reduced-motion
 *    - High contrast ratio (#f2f2f2 on #0a0a0a)
 *
 * 5. Performance:
 *    - Animations trigger only when scrolled into view
 *    - Uses hardware-accelerated transforms
 *    - Minimal re-renders (animations handled by Framer Motion)
 */

export default ExamplePage;
