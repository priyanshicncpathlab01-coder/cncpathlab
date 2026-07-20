# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Next.js dev server (HMR)
npm run build      # Production build (.next/) — SSG for all routes
npm run start      # Serve the production build locally
npm run lint       # Run next lint (ESLint)
```

## Architecture

**CNC Path Lab** is a React 19 + **Next.js 15 (App Router)** marketing/services website for a clinical pathology laboratory. It was migrated from React + Vite; all routes are statically generated (SSG).

### Routing (`app/`)
- Each route is `app/<segment>/page.jsx` — a **Server Component** that exports `metadata` (SEO) and renders the matching view from `src/views/`. Home is `app/page.jsx` → `src/views/Home.jsx`.
- `app/layout.jsx` is the shared root layout: it loads `next/font` Inter (the `--font-inter` variable), sets default/OpenGraph/Twitter metadata + favicon, and wraps every page in `<SiteChrome>`.
- `src/components/layout/SiteChrome.jsx` (client) is the old `App.jsx` shell: persistent Navbar + Footer + `ContactModal`, and the global `openContactModal` custom-event listener — any component triggers the modal via `window.dispatchEvent(new CustomEvent('openContactModal'))`.
- **Navigation**: there is no react-router. `src/lib/navigation.js` re-implements `useNavigate()` / `useLocation()` on top of `next/navigation` so the existing components work unchanged. Unknown paths fall back to Home via `app/not-found.jsx`.
- SEO extras: `app/sitemap.js`, `app/robots.js`. Set `NEXT_PUBLIC_SITE_URL` for correct absolute URLs.

### Directory layout
- `app/` — App Router routes, layout, globals.css, sitemap/robots
- `src/sections/` — homepage sections composed in sequence by `src/views/Home.jsx` (Hero, IntroServices, BiomarkerAnalysis, etc.)
- `src/views/` — standalone route views (each a full page with its own hero + content; previously `src/pages/`, renamed to avoid the Pages Router)
- `src/components/layout/` — Navbar, Footer, SiteChrome (always rendered)
- `src/components/ui/` — shared primitives: `Button`, `Card`, `SectionHeader`, `ContactModal`
- `public/assets/` — static images and videos, referenced by absolute `/assets/...` string paths
- Any component using hooks, framer-motion, or event handlers begins with `'use client'`.

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
