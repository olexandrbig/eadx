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
| `/` | Homepage — hero video, about sections, global reach, services cards, contact form |
| `/services` | Services listing page |
| `/services/[slug]` | Individual service page (SSG via `generateStaticParams`) |
| `/contact` | Contact page with hero image (`contacts.jpg`) and form |
| `/company` | Company info (MDX) |
| `/career` | Career page (Coming Soon, MDX) |
| `/terms` | Terms and Conditions (MDX) |
| `/imprint` | Imprint / legal info (MDX) |
| `/privacy` | Privacy Policy (MDX) |
| `/compliance` | Compliance (MDX) |

### Content System

All content lives in `src/content/` as MDX files with YAML frontmatter:

- **Services**: `src/content/services/*.mdx` — frontmatter: title, excerpt, image
  - `src/lib/services.ts` — reads and parses service content
- **Legal/info pages**: `src/content/pages/*.mdx` — frontmatter: title, description, lastUpdated
  - `src/lib/pages.ts` — reads and parses page content
- `src/lib/mdx.tsx` — shared MDX component mappings (typography styles for h1-h3, p, lists, code, blockquotes, links)
- `src/components/mdx-remote.tsx` — server-side MDX compilation via `@mdx-js/mdx`
- `mdx-components.tsx` (project root) — Next.js MDX integration hook, delegates to `src/lib/mdx.tsx`

### Header

Split into server and client parts for scroll-aware behavior:
- `header.tsx` — server component, defines navigation items (Home, Services, Company, Career, Contact)
- `header-client.tsx` — client component, handles scroll detection
  - **On homepage at top**: transparent background, negative/white logo (`h-eadx-logo-negavitve.svg`), white nav text
  - **On scroll / other pages**: solid white background with drop shadow, dark logo (`h-eadx-logo.svg`), negative logo in dark mode
  - Stays transparent through all `h-screen` hero sections, switches to solid after last one
- `mobile-menu.tsx` — hamburger menu, slide-in panel from right, body scroll lock
  - Hamburger bar color adapts to transparent/solid header state

### Homepage Sections

1. **Hero section** — full viewport (`h-screen`), background video (`jump.mp4`/`.webm`), left-aligned heading + subtitle, scroll indicator on right
2. **"We are EADX"** — white bg, two-column: left = stylized X from logo (`eadx-x.svg` / `eadx-x-negative.svg`), right = heading + body text
3. **"Global reach, local expertise"** — full-width background video (`globe.mp4`/`.webm`), dark gradient overlay, text at bottom-left
4. **"EADX always on your side"** — white bg, two-column: left = vertical logo, right = heading + body text
5. **"Learn more about our services"** — light gray bg, 3 image cards (from service MDX frontmatter `image` field) linking to service pages
6. **Contact section** — centered heading, decorative logo watermark, redesigned form

### Services

- 3 services: Enterprise Integration, Data & AI, Cloud Operations
- `src/content/services/*.mdx` — service content with frontmatter (title, excerpt, image)
- `src/lib/services.ts` — reads/parses service MDX files
- Services listing page and individual detail pages with SSG

### Contact

- `contact-form.tsx` — client component: first name, last name, company, email, phone, message, privacy checkbox, submit button
- `contact-section.tsx` — centered layout with heading, subtitle, decorative logo watermark, form
- Form submit is client-side only (TODO: integrate with backend)

### Legal Pages

- `legal-page.tsx` — shared async component that reads MDX from `src/content/pages/` and renders it
- Used by `/terms`, `/imprint`, `/privacy`, `/compliance`, `/company`, `/career`

## Design System

### Brand Colors

Defined as CSS custom properties in `globals.css` and registered as Tailwind theme colors:

| Token | Value | Usage |
|-------|-------|-------|
| `--accent` / `accent` | `#005774` | Dark blue — links on light backgrounds, focus rings, buttons, contact form submit |
| `--accent-light` / `accent-light` | `#80D6F2` | Light blue — links on dark backgrounds, hover states |

### Typography
- Plus Jakarta Sans font via `next/font` (variable `--font-geist-sans`)
- Hero heading: 72px bold, 100% line-height
- Hero subtitle: 28px medium, 160% line-height
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
- Dark gray background (`bg-zinc-800`)
- Negative/white logo (`h-eadx-logo-negavitve.svg`)
- 4-column grid: logo, 2 link columns, scroll-to-top
- Bottom row: social icons (LinkedIn, Facebook, Instagram), copyright

## Logo Assets (public/)

| File | Usage |
|------|-------|
| `h-eadx-logo.svg` | Header on light/solid backgrounds |
| `h-eadx-logo-negavitve.svg` | Header (transparent/over video), header dark mode, footer |
| `eadx-avatar.svg` | Favicon, site icon, decorative watermarks on homepage |
| `eadx-x.svg` | "We are EADX" section (light mode) — stylized X with `#2E2D2D` left strokes |
| `eadx-x-negative.svg` | "We are EADX" section (dark mode) — stylized X with white left strokes |
| `v-01-eadx-logo.svg` | "EADX always on your side" section (light mode) |
| `v-01-eadx-logo-negative.svg` | "EADX always on your side" section (dark mode) |

## Performance

- **Video loading**: Hero video (`jump`) uses `preload="metadata"` (not `auto`) to avoid downloading the full file on page load; second video (`globe`) uses `preload="none"`
- **Scroll handler**: Header scroll detection uses `requestAnimationFrame` throttling with cached DOM queries (hero section boundary computed once on mount)
- **Package imports**: `experimental.optimizePackageImports` in `next.config.ts` tree-shakes `@mdx-js/mdx` and `@mdx-js/react`

## Security

Headers configured in `next.config.ts`: CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. `X-Powered-By` disabled.

## Conventions

- Minimize external dependencies — prefer built-in Next.js/React features
- Use Server Components by default; only add `"use client"` when interactivity is needed
- All imports use `@/*` alias mapping to `src/*`
- Navigation items are defined in `src/components/header.tsx` — update there to change nav
- Footer links are defined at the top of `src/components/footer.tsx`
- Background videos go in `public/` as `.mp4` + `.webm` files (webm preferred, mp4 fallback)
- Service card images are defined in MDX frontmatter (`image` field) — change in one place
- Content is always MDX in `src/content/` — never hardcode long-form text in components
