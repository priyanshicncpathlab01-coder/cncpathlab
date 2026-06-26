# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server (HMR)
npm run build      # Production build to dist/
npm run preview    # Preview production build locally
npm run lint       # Run ESLint
```

## Architecture

**CNC Path Lab** is a React 19 + Vite 8 marketing/services website for a clinical pathology laboratory.

### Routing (`src/App.jsx`)
- `BrowserRouter` wraps the app in `main.jsx`
- `App.jsx` owns the global `isContactModalOpen` state and listens for `window.dispatchEvent(new CustomEvent('openContactModal'))` — this is how any component anywhere triggers the contact modal without prop drilling
- Routes: `/` (HomePage), `/lab-services`, `/preclinical`, `/early-phase`, `/apostream`, `/immune-monitoring`, `/bioanalytical-testing`; unknown paths fall back to HomePage

### Directory layout
- `src/sections/` — homepage sections rendered in sequence inside `<HomePage>` (Hero, IntroServices, BiomarkerAnalysis, etc.)
- `src/pages/` — standalone route pages (each is a full page with its own hero + content)
- `src/components/layout/` — Navbar and Footer (always rendered)
- `src/components/ui/` — shared primitives: `Button`, `Card`, `SectionHeader`, `ContactModal`
- `src/assets/` — static images and videos imported directly into components

### Styling
- Tailwind CSS v4 loaded via `@import "tailwindcss"` in `src/index.css`; config at `tailwind.config.js`
- Custom color scales: `primary-*` (sky blue, 50–950) and `medical.teal` / `medical.indigo` / `medical.purple`
- Reusable CSS classes defined in `@layer components`: `.container-custom` (max-w-7xl centered), `.section-padding` (py-16/24), `.glass` (backdrop blur card)
- `cn()` utility (clsx + tailwind-merge) is exported from `src/components/ui/Button.jsx`

### Key patterns
- **Navigation + scroll reset**: always call `navigate(path)` then `window.scrollTo({ top: 0, behavior: 'instant' })` — see Navbar and page cards
- **Scroll-to-section from another route**: Navbar navigates to `/` first, then uses `setTimeout(() => element.scrollIntoView(...), 100)`
- **Animations**: Framer Motion `whileInView` with `viewport={{ once: true }}` for entrance animations; `AnimatePresence` for mount/unmount transitions
- **Hover state in JSX**: several components use a local `isHovered` state + `onMouseEnter/Leave` to drive inline style changes (glow effects, borders) that can't be expressed in Tailwind alone
- **Video backgrounds**: `<video autoPlay muted loop playsInline>` with an overlay `div` for darkening; video files are imported as assets
