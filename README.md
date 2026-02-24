# EADX

A modern blog and content website built with Next.js 16, TypeScript, and Tailwind CSS.

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first CSS
- [MDX](https://mdxjs.com/) — Markdown with React components

## Prerequisites

- Node.js 24 or later

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Create production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/                    # Routes and layouts
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── blog/               # Blog routes
├── components/             # Reusable components
├── content/posts/          # Blog posts (MDX)
└── lib/                    # Utilities and helpers
```

## Writing Blog Posts

Create a new `.mdx` file in `src/content/posts/`:

```mdx
---
title: "Your Post Title"
date: "2026-01-01"
excerpt: "A brief description of the post."
author: "Author Name"
---

Your content here. Supports full Markdown and React components.
```

## Customization

Replace `public/logo.svg` with your own logo file.
