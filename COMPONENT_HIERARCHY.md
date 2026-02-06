# Component Hierarchy

## Application Structure

```
App (Router)
├── Global Texture Overlay (fixed)
├── Navbar (fixed top)
│   ├── Logo (Link to /)
│   ├── Navigation Links
│   │   ├── The Story (#experience)
│   │   ├── Discography (#music)
│   │   ├── Members (#collective)
│   │   └── Upcoming Shows (#shows)
│   └── Book Lotus CTA Button
│
├── Routes
│   │
│   ├── Route: / (Home)
│   │   ├── Hero
│   │   ├── VisualBreathingPoint
│   │   ├── BandStory
│   │   ├── VisualMoments
│   │   ├── VisualBreathingPoint
│   │   ├── DiscographySection
│   │   ├── CollectiveSection
│   │   ├── VisualBreathingPoint
│   │   └── ShowsSection
│   │
│   ├── Route: /the-edgar-experience
│   │   └── EdgarExperience
│   │       ├── Page Header
│   │       ├── Section: The Beginning
│   │       ├── Section: The Silence
│   │       ├── Section: Edgar Appears
│   │       └── Section: The Mystery
│   │
│   ├── Route: /discography
│   │   └── Discography
│   │       ├── Page Header
│   │       ├── Track Detail: Paraíso
│   │       ├── Track Detail: Caliente
│   │       └── Track Detail: South Point
│   │
│   └── Route: /news
│       └── News
│           ├── Page Header
│           └── News Grid
│               ├── Article: Cheo + Lotus at Zey Zey
│               ├── Article: Nights at Lagniappe
│               └── Article: Gozadera Social Club
│
└── Footer
    ├── Contact Section
    │   ├── Contact Info
    │   └── Inquiry Button
    ├── Footer Links
    │   ├── Explore Links
    │   └── Social Links
    └── Copyright Bar
```

## Component Props Flow

### Reusable Components with Data

```javascript
// DiscographySection.jsx
const tracks = [
  { id: '01', title: 'Paraíso', color: '#FF3B30', ... },
  { id: '02', title: 'Caliente', color: '#f97316', ... },
  { id: '03', title: 'South Point', color: '#10b981', ... }
];

// CollectiveSection.jsx
const members = [
  { name: 'Ivan Lotus', role: 'Frontman / Keys', color: '#FF3B30', ... },
  { name: 'Samuel Little', role: 'Frontman / Bass', color: '#10b981', ... },
  // ... etc
];

// ShowsSection.jsx
const shows = [
  { month: 'Jan', day: '30', venue: 'Historic Downtown Miami', ... },
  { month: 'Feb', day: '07', venue: 'Regener8 Farm', ... },
  // ... etc
];
```

## Component Responsibilities

### Layout Components
- **Navbar**: Global navigation, routing, CTA
- **Footer**: Contact form, links, branding

### Section Components (Composable)
- **Hero**: First impression, album showcase
- **BandStory**: Narrative content about the band
- **VisualMoments**: A gallery of images
- **VisualBreathingPoint**: A visual separator to give breathing room to the page.
- **DiscographySection**: Music catalog display
- **CollectiveSection**: Team/band member showcase
- **ShowsSection**: Event listing

### Page Components (Composition)
- **Home**: Composes all section components to create the main landing page.
- **EdgarExperience**: Standalone narrative page
- **Discography**: Detailed album/track information
- **News**: Article/update feed

## State Management

Currently using local component state. No global state management needed.

### Future Considerations
- Add Context API for theme switching
- Add state management (Redux/Zustand) if data becomes more complex
- Add form state management for contact form

## Styling Approach

### Global Styles (index.css)
- Font imports
- Tailwind directives
- Custom utilities (texture overlay, scrollbar)
- Selection styles

### Component Styles
- Tailwind utility classes in className
- Inline styles for dynamic colors (member cards, shows)
- Responsive breakpoints (sm, md, lg)

## Data Flow

```
Static Data → Component → Render
     ↓
Track/Member/Show Arrays → Map Function → UI Cards
```

### Example:
```jsx
{tracks.map((track) => (
  <TrackCard key={track.id} {...track} />
))}
```

## Navigation Flow

```
User Action → React Router → Page Component → Render
     │
     ├── Click Logo → Navigate to /
     ├── Click Link → Navigate to /the-edgar-experience
     ├── Hash Link → Scroll to #section
     └── Browser Back/Forward → Router handles
```

---

This hierarchy shows the complete component structure and how data flows through the application.
