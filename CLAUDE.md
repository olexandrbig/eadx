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
- **MDX** for blog content (`@next/mdx` + `@mdx-js/mdx` + `gray-matter`)
- **Node.js 24+** required

## Architecture

### Routing
App Router with `src/` directory. All routes under `src/app/`.

### Blog System
- Posts are `.mdx` files in `src/content/posts/` with YAML frontmatter (title, date, excerpt, author)
- `src/lib/posts.ts` — reads, parses, and sorts posts from the filesystem
- `src/lib/mdx.tsx` — shared MDX component mappings (typography styles)
- `src/components/mdx-remote.tsx` — server-side MDX compilation and rendering
- `mdx-components.tsx` (project root) — Next.js MDX integration hook, delegates to `src/lib/mdx.tsx`
- Blog listing at `/blog`, individual posts at `/blog/[slug]`
- Posts are statically generated at build time via `generateStaticParams`

### Components
- `src/components/header.tsx` — Fixed header with logo + nav
- `src/components/footer.tsx` — Site footer
- `src/components/post-card.tsx` — Blog post preview card

### Design System
- Inter font via `next/font`
- Dark mode via `prefers-color-scheme` media query
- Color tokens defined as CSS custom properties in `globals.css`
- Tailwind theme extended inline with `@theme` directive

### Security
Headers configured in `next.config.ts`: CSP, HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. `X-Powered-By` disabled.

## Conventions

- Minimize external dependencies — prefer built-in Next.js/React features
- Use Server Components by default; only add `"use client"` when needed
- Logo at `public/logo.svg` — replace file to change branding
- All imports use `@/*` alias mapping to `src/*`
