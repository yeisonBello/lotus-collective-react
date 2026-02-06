# Lotus Collective — Style Guide
**Jazz Funk Visual Language**

> *"Where deep grooves meet brass shimmer and neon nights"*

This document defines the visual design system for the Lotus Collective brand. All future CSS, components, and visual decisions should reference this guide as the single source of truth.

---

## 1. Color Palette

### Foundation: Deep Blacks
The stage is set in darkness—rich, velvety blacks that let the music breathe.

```css
--black-deepest:    #050505;  /* Main background, the void */
--black-stage:      #0a0a0a;  /* Elevated surfaces */
--black-smoke:      #111111;  /* Secondary backgrounds */
--black-shadow:     #1a1a1a;  /* Card backgrounds */
```

**Usage:**
- Use `--black-deepest` for primary backgrounds
- Use `--black-stage` for elevated containers
- Use `--black-smoke` for gradient transitions
- Use `--black-shadow` for overlays and cards

---

### Brass & Golds: The Funk
Warm metallics that catch the stage lights—brass horns, golden highs.

```css
--brass-dark:       #8B6914;  /* Deep brass shadows */
--brass-mid:        #B8860B;  /* Classic brass */
--brass-bright:     #D4AF37;  /* Polished brass highlights */
--gold-shimmer:     #FFD700;  /* Gold accents, hover states */
--gold-glow:        #FFC947;  /* Bright gold for emphasis */
```

**Usage:**
- Use `--brass-dark` for subtle accents and borders
- Use `--brass-bright` for titles and important text
- Use `--gold-shimmer` for interactive hover states
- Use `--gold-glow` for active states and CTAs

---

### Neon Accents: Electric Energy
High-energy pops inspired by funk clubs and night-time Miami.

```css
--neon-coral:       #FF3B30;  /* Primary brand color (hot coral) */
--neon-electric:    #FF10F0;  /* Electric magenta */
--neon-cyan:        #00E5FF;  /* Cyan glow */
--neon-lime:        #CCFF00;  /* Lime burst */
--neon-purple:      #8B5CF6;  /* Deep purple funk */
```

**Neon Usage Rules:**
- **Primary CTA:** `--neon-coral` (current brand color)
- **Secondary accents:** Rotate through `--neon-cyan`, `--neon-purple`, `--neon-lime`
- **Hover effects:** Add glow with `box-shadow` and `filter: brightness(1.2)`
- **Never use more than 2 neon colors in a single component**

---

### Neutral Grays
Subtle supporting cast—readable text on dark backgrounds.

```css
--gray-100:         #fafafa;  /* Pure white text */
--gray-200:         #e5e5e5;  /* Primary body text (zinc-200) */
--gray-400:         #a3a3a3;  /* Secondary text */
--gray-500:         #737373;  /* Muted text (zinc-500) */
--gray-600:         #525252;  /* Disabled states */
--gray-800:         #262626;  /* Borders */
```

**Usage:**
- Use `--gray-100` for headings and high-emphasis text
- Use `--gray-200` for body text (default)
- Use `--gray-500` for supporting text and captions
- Use `--gray-800` for subtle borders

---

### Gradients: Atmospheric Depth

```css
/* Dark Stage Fade */
.gradient-stage {
  background: linear-gradient(180deg, var(--black-deepest) 0%, var(--black-smoke) 100%);
}

/* Brass Shimmer */
.gradient-brass {
  background: linear-gradient(135deg, var(--brass-dark) 0%, var(--gold-shimmer) 100%);
}

/* Neon Glow */
.gradient-neon {
  background: linear-gradient(90deg, var(--neon-coral) 0%, var(--neon-electric) 100%);
}

/* Spotlight Overlay */
.gradient-spotlight {
  background: radial-gradient(circle at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%);
}
```

---

## 2. Typography

### Font Stack

**Display (Titles, Headers):**
```css
font-family: 'Instrument Serif', serif;
```
- **Personality:** Groovy, editorial, sophisticated
- **Usage:** H1-H3, brand name, section titles
- **Weight Range:** 400 (Regular), 400 Italic

**Body (Readable Content):**
```css
font-family: 'Manrope', sans-serif;
```
- **Personality:** Clean, modern, highly readable
- **Usage:** Body text, UI labels, navigation
- **Weight Range:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extrabold)

**Fallback Stack:**
```css
--font-display: 'Instrument Serif', 'Georgia', serif;
--font-body: 'Manrope', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

---

### Type Scale (Responsive)

Based on a **1.250 Major Third** scale for harmony and rhythm.

```css
/* Desktop (base: 16px) */
--text-xs:      0.75rem;   /* 12px - labels, captions */
--text-sm:      0.875rem;  /* 14px - small text */
--text-base:    1rem;      /* 16px - body text */
--text-lg:      1.125rem;  /* 18px - emphasized body */
--text-xl:      1.25rem;   /* 20px - subheadings */
--text-2xl:     1.5rem;    /* 24px - H4 */
--text-3xl:     1.875rem;  /* 30px - H3 */
--text-4xl:     2.25rem;   /* 36px - H2 */
--text-5xl:     3rem;      /* 48px - H1 */
--text-6xl:     3.75rem;   /* 60px - Display Large */
--text-7xl:     4.5rem;    /* 72px - Hero Display */
--text-8xl:     6rem;      /* 96px - Mega Display */
```

**Mobile Adjustments:**
```css
@media (max-width: 768px) {
  --text-5xl: 2.5rem;   /* 40px */
  --text-6xl: 3rem;     /* 48px */
  --text-7xl: 3.5rem;   /* 56px */
  --text-8xl: 4rem;     /* 64px */
}
```

---

### Type Styles

**Hero Display:**
```css
.type-hero {
  font-family: var(--font-display);
  font-size: var(--text-8xl);
  line-height: 1;
  letter-spacing: -0.02em;
  font-weight: 400;
}
```

**Section Title:**
```css
.type-section-title {
  font-family: var(--font-display);
  font-size: var(--text-6xl);
  line-height: 1.1;
  letter-spacing: -0.015em;
}
```

**Body Text:**
```css
.type-body {
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.6;
  letter-spacing: 0;
}
```

**Label (Small Caps):**
```css
.type-label {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.3em;
}
```

---

### Typography Rules

1. **Display fonts only for titles** — Never use `Instrument Serif` for body text
2. **Line height rhythm:**
   - Display text: `1.0–1.2`
   - Body text: `1.5–1.7`
   - Small text: `1.4`
3. **Tracking (letter-spacing):**
   - Large display: `-0.02em` (tighter)
   - Small caps/labels: `0.3em` (wider)
   - Body: `0` (default)
4. **Color contrast:**
   - Always test text on dark backgrounds
   - Minimum: `--gray-400` on `--black-deepest`
   - Preferred: `--gray-200` or lighter

---

## 3. Spacing System

Based on an **8-point grid** for consistent rhythm and alignment.

### Spacing Scale

```css
--space-0:    0;
--space-1:    0.25rem;  /* 4px */
--space-2:    0.5rem;   /* 8px */
--space-3:    0.75rem;  /* 12px */
--space-4:    1rem;     /* 16px */
--space-5:    1.5rem;   /* 24px */
--space-6:    2rem;     /* 32px */
--space-8:    3rem;     /* 48px */
--space-10:   4rem;     /* 64px */
--space-12:   6rem;     /* 96px */
--space-16:   8rem;     /* 128px */
--space-20:   10rem;    /* 160px */
--space-24:   12rem;    /* 192px */
```

---

### Component Spacing Rules

**Cards & Containers:**
```css
padding: var(--space-6) var(--space-6); /* 32px all sides */
gap: var(--space-4);                    /* 16px between elements */
```

**Sections:**
```css
padding-block: var(--space-24);  /* 192px vertical (desktop) */
padding-inline: var(--space-6);  /* 32px horizontal */

@media (max-width: 768px) {
  padding-block: var(--space-12); /* 96px vertical (mobile) */
  padding-inline: var(--space-4); /* 16px horizontal */
}
```

**Navigation:**
```css
padding-block: var(--space-5);   /* 24px */
padding-inline: var(--space-6);  /* 32px */
gap: var(--space-8);             /* 48px between nav items */
```

**Grid Gaps:**
```css
gap: var(--space-4);  /* Default grid/flex gap: 16px */
```

---

### Vertical Rhythm

Elements should follow consistent vertical spacing:

```css
h1, h2, h3 {
  margin-bottom: var(--space-4);  /* 16px */
}

p {
  margin-bottom: var(--space-5);  /* 24px */
}

section {
  margin-bottom: var(--space-12); /* 96px */
}
```

---

## 4. Animation Principles

All animations should sync to a **100 BPM funk rhythm** (600ms per beat).

### Timing Constants

```css
/* Base Timing (Synced to 100 BPM) */
--timing-eighth:    75ms;   /* 1/8 note */
--timing-quarter:   150ms;  /* 1/4 note */
--timing-half:      300ms;  /* 1/2 note */
--timing-whole:     600ms;  /* Whole note (1 beat) */
--timing-double:    1200ms; /* 2 beats */

/* Easing Curves */
--ease-funk:        cubic-bezier(0.34, 1.56, 0.64, 1);      /* Bouncy, groovy */
--ease-smooth:      cubic-bezier(0.4, 0.0, 0.2, 1);         /* Material Design standard */
--ease-snap:        cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Sharp, snappy */
--ease-slide:       cubic-bezier(0.25, 0.46, 0.45, 0.94);   /* Smooth slide */
```

---

### Animation Categories

#### 1. **Micro-interactions** (Quick, Snappy)
For buttons, hovers, small UI elements.

```css
.button-hover {
  transition: all var(--timing-quarter) var(--ease-funk);
}

.hover\:scale {
  transition: transform var(--timing-eighth) var(--ease-snap);
}
```

**Examples:**
- Button hover: `150ms`
- Icon spin: `75ms`
- Color change: `150ms`

---

#### 2. **Content Reveals** (Smooth, Groovy)
For cards, sections, modals appearing.

```css
.fade-in {
  animation: fadeIn var(--timing-whole) var(--ease-smooth);
}

.slide-up {
  animation: slideUp var(--timing-double) var(--ease-slide);
}
```

**Examples:**
- Card fade-in: `600ms`
- Section reveal: `1200ms`
- Modal entrance: `600ms`

---

#### 3. **Page Transitions** (Epic, Sustained)
For route changes, major state shifts.

```css
.page-transition {
  transition: opacity var(--timing-double) var(--ease-smooth);
}
```

**Examples:**
- Page fade: `1200ms`
- Hero parallax: `1800ms` (3 beats)

---

### Keyframe Animations

**Fade In:**
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

**Slide Up:**
```css
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Brass Shimmer:**
```css
@keyframes brassShimmer {
  0%, 100% { filter: brightness(1); }
  50% { filter: brightness(1.3); }
}

.brass-shimmer {
  animation: brassShimmer var(--timing-double) var(--ease-smooth) infinite;
}
```

**Neon Pulse:**
```css
@keyframes neonPulse {
  0%, 100% {
    box-shadow: 0 0 5px var(--neon-coral),
                0 0 10px var(--neon-coral);
  }
  50% {
    box-shadow: 0 0 20px var(--neon-coral),
                0 0 30px var(--neon-coral),
                0 0 40px var(--neon-coral);
  }
}

.neon-pulse {
  animation: neonPulse var(--timing-double) var(--ease-smooth) infinite;
}
```

---

### Animation Rules

1. **Always sync to rhythm:**
   - Use multiples of `150ms` (quarter note) or `300ms` (half note)
   - Avoid random durations like `250ms` or `500ms`

2. **Respect user preferences:**
   ```css
   @media (prefers-reduced-motion: reduce) {
     *,
     *::before,
     *::after {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```

3. **Stagger group animations:**
   ```css
   .stagger-item:nth-child(1) { animation-delay: 0ms; }
   .stagger-item:nth-child(2) { animation-delay: 150ms; }
   .stagger-item:nth-child(3) { animation-delay: 300ms; }
   ```

4. **Use Framer Motion for complex sequences:**
   - Leverage `framer-motion` for orchestrated animations
   - Keep CSS for simple transitions only

---

## 5. Effects & Textures

### Texture Overlay

Applied globally for a gritty, analog feel.

```css
.texture-overlay {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
  pointer-events: none;
  mix-blend-mode: overlay;
}
```

**Usage:**
- Apply once globally (already in `App.jsx`)
- Do not apply to individual components

---

### Glow Effects

**Brass Glow:**
```css
.brass-glow {
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.3),
              0 0 40px rgba(212, 175, 55, 0.2);
}
```

**Neon Glow:**
```css
.neon-glow-coral {
  box-shadow: 0 0 10px var(--neon-coral),
              0 0 20px var(--neon-coral),
              0 0 30px var(--neon-coral);
}

.neon-glow-cyan {
  box-shadow: 0 0 10px var(--neon-cyan),
              0 0 20px var(--neon-cyan);
}
```

**Hover Glow:**
```css
.hover-glow {
  transition: box-shadow var(--timing-quarter) var(--ease-funk);
}

.hover-glow:hover {
  box-shadow: 0 8px 30px rgba(255, 59, 48, 0.4);
}
```

---

### Borders & Dividers

```css
/* Subtle Border */
border: 1px solid rgba(255, 255, 255, 0.05);

/* Brass Border */
border: 1px solid var(--brass-dark);

/* Neon Border */
border: 1px solid var(--neon-coral);

/* Gradient Divider */
.divider-brass {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--brass-bright), transparent);
}
```

---

## 6. Components

### Buttons

**Primary CTA:**
```css
.btn-primary {
  background: var(--neon-coral);
  color: var(--gray-100);
  padding: var(--space-3) var(--space-6);
  border-radius: 9999px; /* Fully rounded */
  font-size: var(--text-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all var(--timing-quarter) var(--ease-funk);
}

.btn-primary:hover {
  background: var(--gold-glow);
  box-shadow: 0 8px 30px rgba(255, 59, 48, 0.5);
  transform: translateY(-2px);
}
```

**Ghost Button:**
```css
.btn-ghost {
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--gray-200);
  padding: var(--space-2) var(--space-4);
  border-radius: 9999px;
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transition: all var(--timing-quarter) var(--ease-funk);
}

.btn-ghost:hover {
  background: var(--gray-100);
  color: var(--black-deepest);
  border-color: var(--gray-100);
}
```

---

### Cards

```css
.card {
  background: var(--black-shadow);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 0; /* Sharp edges for funk aesthetic */
  padding: var(--space-6);
  transition: all var(--timing-half) var(--ease-smooth);
}

.card:hover {
  border-color: var(--neon-coral);
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6);
}
```

---

## 7. Usage Guidelines

### Do's ✓

- **Use brass golds for premium, important elements**
- **Reserve neon accents for CTAs and interactive states**
- **Maintain deep blacks as the foundation**
- **Sync all animations to 100 BPM rhythm**
- **Test text contrast on dark backgrounds**
- **Apply texture overlay globally, once**

### Don'ts ✗

- **Don't use more than 2 neon colors per component**
- **Don't use display fonts for body text**
- **Don't create animations with random durations**
- **Don't add glow effects to every element**
- **Don't use light backgrounds (stay dark)**
- **Don't ignore reduced motion preferences**

---

## 8. Accessibility

### Color Contrast

All text must meet **WCAG AA standards** (minimum 4.5:1 for normal text).

**Safe Combinations:**
- `--gray-100` on `--black-deepest` ✓
- `--gray-200` on `--black-deepest` ✓
- `--gold-shimmer` on `--black-deepest` ✓
- `--neon-coral` on `--black-deepest` ✓

**Test with:** [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

### Focus States

All interactive elements must have visible focus states.

```css
*:focus-visible {
  outline: 2px solid var(--neon-coral);
  outline-offset: 4px;
}
```

---

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
```

---

## 9. Implementation

### CSS Variables

Define all variables in `index.css`:

```css
:root {
  /* Colors: Blacks */
  --black-deepest: #050505;
  --black-stage: #0a0a0a;
  --black-smoke: #111111;
  --black-shadow: #1a1a1a;

  /* Colors: Brass & Golds */
  --brass-dark: #8B6914;
  --brass-mid: #B8860B;
  --brass-bright: #D4AF37;
  --gold-shimmer: #FFD700;
  --gold-glow: #FFC947;

  /* Colors: Neon Accents */
  --neon-coral: #FF3B30;
  --neon-electric: #FF10F0;
  --neon-cyan: #00E5FF;
  --neon-lime: #CCFF00;
  --neon-purple: #8B5CF6;

  /* Colors: Grays */
  --gray-100: #fafafa;
  --gray-200: #e5e5e5;
  --gray-400: #a3a3a3;
  --gray-500: #737373;
  --gray-600: #525252;
  --gray-800: #262626;

  /* Typography */
  --font-display: 'Instrument Serif', 'Georgia', serif;
  --font-body: 'Manrope', 'Inter', -apple-system, sans-serif;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-8: 3rem;
  --space-10: 4rem;
  --space-12: 6rem;
  --space-16: 8rem;
  --space-20: 10rem;
  --space-24: 12rem;

  /* Timing (100 BPM) */
  --timing-eighth: 75ms;
  --timing-quarter: 150ms;
  --timing-half: 300ms;
  --timing-whole: 600ms;
  --timing-double: 1200ms;

  /* Easing */
  --ease-funk: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.4, 0.0, 0.2, 1);
  --ease-snap: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-slide: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

---

### Tailwind Config

Extend Tailwind with custom values in `tailwind.config.js`:

```js
export default {
  theme: {
    extend: {
      colors: {
        brass: {
          dark: '#8B6914',
          mid: '#B8860B',
          bright: '#D4AF37',
        },
        gold: {
          shimmer: '#FFD700',
          glow: '#FFC947',
        },
        neon: {
          coral: '#FF3B30',
          electric: '#FF10F0',
          cyan: '#00E5FF',
          lime: '#CCFF00',
          purple: '#8B5CF6',
        },
      },
      fontFamily: {
        display: ['Instrument Serif', 'Georgia', 'serif'],
        body: ['Manrope', 'Inter', 'sans-serif'],
      },
      transitionDuration: {
        'eighth': '75ms',
        'quarter': '150ms',
        'half': '300ms',
        'whole': '600ms',
        'double': '1200ms',
      },
      transitionTimingFunction: {
        'funk': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'snap': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'slide': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
};
```

---

## 10. Version History

| Version | Date       | Changes |
|---------|------------|---------|
| 1.0     | 2026-01-31 | Initial Jazz Funk style guide created |

---

**Questions or Suggestions?**
Reach out to the design team or open an issue in the project repo.

---

*Keep it groovy. Keep it gold. Keep it Lotus.* ✨🎷
