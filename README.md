# Lotus Collective - React Website

A professional React application for Lotus Collective, a Miami-based jazz fusion band. Built with Vite, React Router, and Tailwind CSS.

## Features

- **Modern React Architecture**: Component-based structure with React Router for navigation
- **Tailwind CSS**: Professional styling with custom design system
- **Responsive Design**: Mobile-first approach that works on all devices
- **Route-Based Navigation**: Multiple pages based on sitemap structure
- **Performance Optimized**: Fast loading with Vite build system

## Pages

- **Home** (`/`) - Main landing page with Hero, Band Story, Visual Moments, Discography, Collective, and Shows sections.
- **The Edgar Experience** (`/the-edgar-experience`) - Deep dive into the band's origin story
- **Discography** (`/discography`) - Full album exploration with track details
- **News** (`/news`) - Latest updates and show recaps

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── BandStory.jsx
│       ├── VisualMoments.jsx
│       ├── VisualBreathingPoint.jsx
│       ├── DiscographySection.jsx
│       ├── CollectiveSection.jsx
│       └── ShowsSection.jsx
├── pages/
│   ├── Home.jsx
│   ├── EdgarExperience.jsx
│   ├── Discography.jsx
│   └── News.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Installation

```bash
cd lotus-collective-react
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Technologies

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router 6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Fonts** - Manrope (sans-serif) and Instrument Serif (display)

## Customization

### Colors

The primary brand color is defined in `tailwind.config.js`:
- Lotus Red: `#FF3B30`

### Fonts

Two Google Fonts are used:
- **Manrope** - Body text (sans-serif)
- **Instrument Serif** - Display headings (serif)

## License

All rights reserved - Lotus Collective 2026
