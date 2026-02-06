<!-- .github/copilot-instructions.md - guidance for AI coding agents -->
# Copilot Instructions — Lotus Collective React

Summary
- This is a Vite + React + Tailwind project (no backend). Pages are composed from small reusable sections and mounted via React Router in `src/App.jsx`.

Quick wins for edits
- Hot dev: run `npm run dev` (Vite at http://localhost:5173). Build: `npm run build`. Preview: `npm run preview`.
- Lint: `npm run lint` (ESLint configured; fix issues in place before committing).

Architecture notes (big picture)
- Entry: `src/main.jsx` → `src/App.jsx` mounts `Navbar`, `Footer` and `Routes`.
- Pages: `src/pages/*` are route-level containers (e.g., `Home.jsx`, `Discography.jsx`).
- Sections: `src/components/sections/*` hold composed UI blocks (Hero, StorySection, ShowsSection, etc.).
- Layout: `src/components/layout/*` contains `Navbar.jsx` and `Footer.jsx`.
- Data: `src/data/content.js` centralizes copy/structured content used across pages.
- Static assets: `public/assets/*` (covers, gallery, videos). Use `/assets/...` URLs in markup.

Project-specific conventions
- Styling: Tailwind utility classes are used inline in JSX; global tokens live in `tailwind.config.js` and `src/index.css`.
- Composition: Pages import and assemble `sections` rather than embedding heavy markup. When adding features follow that pattern.
- Animations: `framer-motion` is present; search `framer-motion` imports to find animated components.
- Routing: Routes are declared in `src/App.jsx` using `react-router-dom` `Routes/Route` and map directly to files under `src/pages`.

Integration points & edges to watch
- Texture overlay: `App.jsx` includes a full-screen `texture-overlay` div (fixed, z-50) used globally — avoid removing unless updating global visual treatment.
- Content source: `src/data/content.js` drives most textual content; update there to change copy across the site.
- Images: Many components reference assets under `public/assets` via relative paths — prefer adding files to that folder and referencing them from components.

New content sources (recent additions)
- `lotus-visual-identity.md`: Authoritative design/art-direction notes (palette, motifs, typography). When updating visuals:
	- Sync color tokens in `tailwind.config.js` (add named colors under `theme.extend.colors`).
	- Update global styles in `src/index.css` when adding font fallbacks or display rules.
	- Add or replace imagery under `public/assets/*` and reference via `/assets/...` in components.
- `musica-profile-lotus.md`: Tone-of-voice, genres, and band persona. Use this as the source-of-truth when editing copy in `src/data/content.js` or writing new marketing text.

Developer workflows
- Local dev: `npm install` then `npm run dev` (HMR active). Port 5173 by default.
- Release: `npm run build` then `npm run preview` to sanity-check the production bundle.
- Linting: `npm run lint` (fix before PRs).

What not to change lightly
- `App.jsx` route structure and the fixed overlay div; both affect global rendering.
- `tailwind.config.js` tokens (colors/fonts) — adjusting these affects site-wide styles.

Examples (where to look)
- Routing and global layout: `src/App.jsx` and `src/main.jsx`
- Page composition: `src/pages/Home.jsx` imports sections from `src/components/sections/`
- Central content: `src/data/content.js`
- Assets: `public/assets/covers` and `public/assets/lotus_gallery`

When adding tests or new scripts
- This repo currently has no test harness. If you add tests, include `npm test` in `package.json` and document setup in `README.md`.

If you need more context
- Read the project README: `README.md` and `QUICK_START.md` for developer expectations and common commands.

Feedback
- If anything here is unclear or you want more examples (component lifecycle patterns, typical prop shapes, or preferred commit message style), tell me which area to expand.
