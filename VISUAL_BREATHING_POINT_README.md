# VisualBreathingPoint Component

A highly reusable React component for the **Lotus Collective** website, designed to provide elegant visual resets between content-heavy sections.

## 📦 Component Location

```
src/components/sections/VisualBreathingPoint.jsx
```

## 🎯 Purpose

Creates breathing space and visual rhythm throughout the site with:
- Elegant serif typography
- Scroll-triggered entrance animations
- Subtle ambient "breathing" effect
- Film grain texture for organic feel
- Full mobile responsiveness

## 🚀 Usage

### Basic Implementation

```jsx
import VisualBreathingPoint from './components/sections/VisualBreathingPoint';

function MyPage() {
  return (
    <>
      <SomeSection />
      <VisualBreathingPoint text="Pause. Breathe. Listen." />
      <AnotherSection />
    </>
  );
}
```

### Real-World Example (Home.jsx)

```jsx
import Hero from '../components/sections/Hero';
import BandStory from '../components/sections/BandStory';
import VisualBreathingPoint from '../components/sections/VisualBreathingPoint';

const Home = () => {
  return (
    <main>
      <Hero />
      <VisualBreathingPoint text="The story begins" />
      <BandStory />
      <VisualBreathingPoint text="Feel the funk" />
      {/* More sections... */}
    </main>
  );
};
```

## 🎨 Visual Specifications

| Property | Value | Description |
|----------|-------|-------------|
| **Container Height** | `60vh` | Consistent breathing space |
| **Background** | `#0a0a0a` | Deep black (matching brand) |
| **Text Color** | `#f2f2f2` | High-contrast light gray |
| **Font Family** | `Instrument Serif` | Elegant serif (from project fonts) |
| **Font Weight** | `200` | Ultra-light for elegance |
| **Letter Spacing** | `0.3em` | Wide tracking for impact |
| **Text Transform** | `uppercase` | Consistent typographic style |
| **Max Width** | `800px` | Readable line length |

## ✨ Animation Features

### 1. Scroll-Triggered Entrance
- **Effect**: Text glides up (Y-offset) with fade-in
- **Trigger**: When 30% of component enters viewport
- **Duration**: 1.2 seconds
- **Runs**: Once per page load

### 2. Ambient Breathing
- **Effect**: Subtle scale and opacity oscillation
- **Duration**: 6 seconds per cycle
- **Loop**: Infinite
- **Purpose**: Creates calm, living atmosphere

### 3. Divider Line Animation
- **Effect**: Horizontal scale from center
- **Delay**: 0.5 seconds after text
- **Duration**: 1.5 seconds

## 📱 Responsive Design

The component automatically adjusts for all screen sizes:

```css
/* Font size scales fluidly */
font-size: clamp(1.25rem, 3vw, 2rem);

/* Breakpoints */
- Mobile (< 640px): 1.25rem (20px)
- Tablet (640-1024px): 3vw (fluid)
- Desktop (> 1024px): 2rem (32px)
```

**Letter spacing** also adjusts to prevent text overflow on mobile.

## 🎬 Technical Details

### Dependencies
- ✅ `framer-motion` (already installed)
- ✅ `react` & `react-dom`

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `text` | `string` | Yes | The phrase to display (e.g., "Pause. Breathe.") |

### Performance
- **Lazy Animation**: Only animates when scrolled into view
- **Hardware Accelerated**: Uses CSS transforms for smooth 60fps
- **Accessibility**: Respects `prefers-reduced-motion`

## 💡 Best Practices

### Text Recommendations
- **Length**: 3-8 words (optimal readability)
- **Style**: Poetic, contemplative, or thematic
- **Examples**:
  - ✅ "Pause. Breathe. Listen."
  - ✅ "The journey continues"
  - ✅ "Where is Edgar?"
  - ✅ "Feel the rhythm"
  - ❌ "This is a very long sentence that doesn't fit the aesthetic"

### Placement Strategy
1. **After content-heavy sections** (long text, image galleries)
2. **Before thematic shifts** (transitioning between topics)
3. **To create anticipation** (before key reveals)
4. **Between emotional beats** (matching musical pacing)

### Spacing
- ❌ **Don't add extra margins** - Component is self-contained
- ✅ **Place directly between sections** - Built-in padding handles spacing

## 🎼 Design Philosophy

This component embodies the **Lotus Collective** aesthetic:

- **Elegant Minimalism**: Clean design, no visual clutter
- **Organic Feel**: Film grain prevents flat digital look
- **Musical Timing**: Animation durations match site's 100 BPM timing
- **Breathing Space**: Literal "breathing" animation reinforces purpose

## 🧪 Testing

The component has been verified to:
- ✅ Build successfully with Vite
- ✅ Follow project's design system
- ✅ Use existing CSS variables and fonts
- ✅ Match animation patterns from other components
- ✅ Support mobile responsiveness

## 🔗 Related Components

- `Hero.jsx` - Uses similar Framer Motion patterns
- `index.css` - Global styles and CSS variables
- `BandStory.jsx` - Content-heavy section that benefits from breathing points

## 📄 Example File

See `VisualBreathingPoint.example.jsx` for comprehensive usage examples.

---

**Created for**: Lotus Collective Website
**Version**: 1.0.0
**Last Updated**: 2026-02-01
