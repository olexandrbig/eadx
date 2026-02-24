# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server with Turbopack (http://localhost:3000)
- `npm run build` — Production build
- `npm run start` — Serve production build
- `npm run lint` — Run ESLint (flat config, ESLint 9+)

## Tech Stack

- **Next.js 16** with App Router, Turbopack, React 19
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (CSS-first config via `@import "tailwindcss"` in globals.css, no tailwind.config)
- **MDX** for content (`@next/mdx` + `@mdx-js/mdx` + `gray-matter`)
- **Node.js 24+** required (`.nvmrc` and `engines` field set)

## Architecture

### Routing

App Router with `src/` directory. All routes under `src/app/`:

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero videos, scrolling text sections, latest posts, contact form |
| `/blog` | Blog listing with client-side keyword search |
| `/blog/[slug]` | Individual blog post (SSG via `generateStaticParams`) |
| `/contact` | Contact page with form |
| `/terms` | Terms and Conditions (MDX) |
| `/imprint` | Imprint / legal info (MDX) |
| `/privacy` | Privacy Policy (MDX) |

### Content System

All content lives in `src/content/` as MDX files with YAML frontmatter:

- **Blog posts**: `src/content/posts/*.mdx` — frontmatter: title, date, excerpt, author
  - `src/lib/posts.ts` — reads, parses, sorts posts by date
- **Legal pages**: `src/content/pages/*.mdx` — frontmatter: title, description, lastUpdated
  - `src/lib/pages.ts` — reads and parses page content
- `src/lib/mdx.tsx` — shared MDX component mappings (typography styles for h1-h3, p, lists, code, blockquotes, links)
- `src/components/mdx-remote.tsx` — server-side MDX compilation via `@mdx-js/mdx`
- `mdx-components.tsx` (project root) — Next.js MDX integration hook, delegates to `src/lib/mdx.tsx`

### Header

Split into server and client parts for scroll-aware behavior:
- `header.tsx` — server component, defines navigation items
- `header-client.tsx` — client component, handles scroll detection
  - **On homepage at top**: transparent background, negative/white logo (`h-eadx-logo-negavitve.svg`), white nav text
  - **On scroll / other pages**: solid white background with drop shadow, dark logo (`h-eadx-logo.svg`), negative logo in dark mode
  - Stays transparent through all `h-screen` hero sections, switches to solid after last one
- `mobile-menu.tsx` — hamburger menu, slide-in panel from right, body scroll lock
  - Hamburger bar color adapts to transparent/solid header state

### Homepage Sections

1. **Hero section** — full viewport (`h-screen`), background video (`hero-video-1.mp4`), centered text, scroll indicator
2. **Video expand section** (`video-expand-section.tsx`) — sticky scroll-linked animation:
   - Video starts at 80% scale with rounded corners, expands to 100% on scroll
   - Two text boxes in dark cards travel bottom→top sequentially (right side first, left side second)
   - First text box uses accent blue background (`#005774`), second uses black
   - `h-[200vh]` scroll container with sticky viewport
3. **Latest posts** — shows 2 most recent posts with "View all articles" link
4. **Contact section** — reusable component with form

### Blog

- `blog-search.tsx` — client-side keyword filter over posts (title, excerpt, author)
- `post-card.tsx` — full-width card with date, title, excerpt, centered arrow button
- Blog page has light gray background (`bg-zinc-100`)

### Contact

- `contact-form.tsx` — client component: name, company, email, country dropdown, message, privacy checkbox, submit button
- `contact-section.tsx` — two-column layout: left = heading + address info, right = form
- Form submit is client-side only (TODO: integrate with backend)

### Legal Pages

- `legal-page.tsx` — shared async component that reads MDX from `src/content/pages/` and renders it
- Used by `/terms`, `/imprint`, `/privacy`

## Design System

### Brand Colors

Defined as CSS custom properties in `globals.css` and registered as Tailwind theme colors:

| Token | Value | Usage |
|-------|-------|-------|
| `--accent` / `accent` | `#005774` | Dark blue — links on light backgrounds, focus rings, text box backgrounds |
| `--accent-light` / `accent-light` | `#80D6F2` | Light blue — links on dark backgrounds, submit button, hover states |

### Typography
- Inter font via `next/font` (variable `--font-geist-sans`)
- Dark mode via `prefers-color-scheme` media query

### Link Style Convention
All links across the site use the same hover pattern:
- No underline by default
- On hover: underline appears with `decoration-accent` (light bg) or `decoration-accent-light` (dark bg)
- Classes: `underline-offset-4 decoration-2 transition-all hover:underline`

### Header
- Height: `h-20` (80px), full-width padding `px-8 lg:px-12`
- Drop shadow: `shadow-[0_4px_12px_0_rgba(0,0,0,0.06)]`
- Nav links: `text-lg font-semibold`, `gap-12`

### Footer
- Full black background (`bg-zinc-950`)
- Negative/white logo (`h-eadx-logo-negavitve.svg`)
- 4-column grid on desktop, includes address, phone, email
- Bottom row: LinkedIn icon, copyright, scroll-to-top button

## Logo Assets (public/)

| File | Usage |
|------|-------|
| `h-eadx-logo.svg` | Header on light/solid backgrounds |
| `h-eadx-logo-negavitve.svg` | Header (transparent/over video), header dark mode, footer |
| `h-eadx-logo-white.svg` | Legacy white logo (unused in components, kept in public/) |
| `eadx-avatar.svg` | Favicon, site icon |
| `eadx-avatar-dark.svg` / `eadx-avatar-white.svg` | Avatar variants |
| `v-01-*`, `v-02-*` | Vertical logo variants |

## Security

Headers configured in `next.config.ts`: CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. `X-Powered-By` disabled.

## Conventions

- Minimize external dependencies — prefer built-in Next.js/React features
- Use Server Components by default; only add `"use client"` when interactivity is needed
- All imports use `@/*` alias mapping to `src/*`
- Navigation items are defined in `src/components/header.tsx` — update there to change nav
- Footer links are defined at the top of `src/components/footer.tsx`
- Background videos go in `public/` as `.mp4` files
- Content is always MDX in `src/content/` — never hardcode long-form text in components
