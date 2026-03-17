---
name: pixel-perfect
description: Pixel-perfect visual QA skill for Next.js + Tailwind CSS pages using screenshots as reference. Use this skill whenever the user provides a design image (screenshot, mockup, Figma export, or photo) and wants to verify or fix a Next.js / Tailwind page to match it visually. Triggers include "match this design", "pixel perfect", "fix my layout", "compare to mockup", "does this look like the screenshot", "visual regression", "UI looks wrong", "make it look like the image", or any request combining a reference image with a Next.js or Tailwind codebase. Also trigger when the user uploads a before/after image pair and mentions React, JSX, or CSS classes. Always use this skill before attempting visual fixes — it contains the complete browser-based inspection workflow.
---

# Next.js + Tailwind Visual QA Skill

A step-by-step workflow for comparing a reference design image against a live Next.js page,
identifying visual discrepancies, and applying pixel-accurate Tailwind fixes.
 
---

## Prerequisites

Before starting, confirm:
- Node.js project with `next` and `tailwindcss` installed
- A reference image (screenshot, mockup, or design export) provided by the user
- Dev server can be started (`npm run dev` or `next dev`)

Tools you will use: `bash`, `str_replace` / `file_create`, and browser automation via
`playwright` (installed on demand if missing).
 
---

## Phase 1 — Environment Setup

```bash
# 1. Install dev dependencies if not present
cd <project-root>
npm ls playwright || npx playwright install --with-deps chromium
 
# 2. Start the Next.js dev server in the background
npm run dev &
DEV_PID=$!
echo "Dev server PID: $DEV_PID"
 
# 3. Wait for server to be ready (max 30 s)
npx wait-on http://localhost:3000 --timeout 30000
```

> If the project uses a port other than 3000, check `package.json` or `.env.local` for `PORT`.
 
---

## Phase 2 — Capture Live Screenshot

Use the Playwright script below to capture the current rendered page.

```bash
cat > /tmp/capture.js << 'EOF'
const { chromium } = require('playwright');
 
(async () => {
  const url  = process.argv[2] || 'http://localhost:3000';
  const out  = process.argv[3] || '/tmp/actual.png';
  const w    = parseInt(process.argv[4] || '1440');
  const h    = parseInt(process.argv[5] || '900');
 
  const browser = await chromium.launch();
  const page    = await browser.newPage();
  await page.setViewportSize({ width: w, height: h });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.screenshot({ path: out, fullPage: true });
  await browser.close();
  console.log(`Screenshot saved: ${out}`);
})();
EOF
 
node /tmp/capture.js http://localhost:3000/<path> /tmp/actual.png 1440 900
```

> Adjust `<path>`, width, and height to match the reference image dimensions.
 
---

## Phase 3 — Side-by-Side Visual Diff Analysis

### 3a. Load both images into context

Read `/tmp/actual.png` (captured) and the user-provided reference image.
Use the `view` tool on both so you can see them simultaneously.

### 3b. Systematic comparison checklist

Go through each category below. For every discrepancy, note:
- **Location** (element / section)
- **Expected** (from reference)
- **Actual** (in screenshot)
- **Probable cause** (missing class, wrong value, wrong breakpoint)

#### Layout & Spacing
- [ ] Overall page width and max-width container
- [ ] Section padding (`py-*`, `px-*`, `p-*`)
- [ ] Gap between flex/grid children (`gap-*`, `space-x-*`, `space-y-*`)
- [ ] Margin between sections (`mt-*`, `mb-*`)
- [ ] Alignment: flex-start / center / end / between / around

#### Typography
- [ ] Font size (`text-xs` → `text-9xl`)
- [ ] Font weight (`font-thin` → `font-black`)
- [ ] Line height (`leading-*`)
- [ ] Letter spacing (`tracking-*`)
- [ ] Text color (`text-*`)
- [ ] Text transform (`uppercase`, `capitalize`)

#### Colors & Backgrounds
- [ ] Background color / gradient
- [ ] Border color
- [ ] Shadow (`shadow-*`, `drop-shadow-*`)
- [ ] Opacity

#### Components
- [ ] Button size, shape, color, hover state
- [ ] Input / form styling
- [ ] Card border-radius (`rounded-*`)
- [ ] Image sizing and aspect ratio

#### Responsive / Breakpoints
- [ ] Is the reference image a mobile (< 640 px), tablet (640–1024 px), or desktop (≥ 1024 px) view?
- [ ] Are breakpoint prefixes (`sm:`, `md:`, `lg:`, `xl:`) correct?

---

## Phase 4 — Generate Fix Plan

Before touching code, write out a numbered fix list:

```
Fix #1 — Hero section top padding
  File: app/page.tsx  (or components/Hero.tsx)
  Current class: pt-8
  Required class: pt-24
  Reason: reference shows ~96px top space; pt-8 = 32px
 
Fix #2 — Heading font weight
  File: components/Hero.tsx
  Current class: font-medium
  Required class: font-bold
  ...
```

Show this list to the user and get confirmation (or proceed if they said "just fix it").
 
---

## Phase 5 — Apply Fixes

For each fix, use `str_replace` to change only the targeted class(es). Never rewrite entire files.

```
Pattern:
  old: className="... pt-8 ..."
  new: className="... pt-24 ..."
```

After every **3–5 fixes**, re-capture the screenshot and compare again:

```bash
node /tmp/capture.js http://localhost:3000/<path> /tmp/actual_v2.png 1440 900
```
 
---

## Phase 6 — Pixel-Perfect Verification Loop

Repeat until all checklist items pass:

1. Capture new screenshot → `/tmp/actual_vN.png`
2. View both images side by side
3. Identify remaining differences
4. Apply targeted fixes
5. Increment N, go to step 1

When confident the page matches, run a final full-page capture at the same viewport as the
reference, then show both images to the user for sign-off.
 
---

## Phase 7 — Cleanup

```bash
# Stop the dev server
kill $DEV_PID 2>/dev/null
rm -f /tmp/capture.js /tmp/actual*.png
```
 
---

## Common Tailwind Pitfalls

| Symptom | Likely cause | Fix |
|---|---|---|
| Extra whitespace at top | Default `body` margin from browser | Add `m-0` or check global CSS |
| Font looks different | Missing `font-sans` on root | Add to `<html>` or `body` in `layout.tsx` |
| Colors wrong | Tailwind config uses custom palette | Check `tailwind.config.js` for `theme.extend.colors` |
| Shadows missing | Class purged | Ensure class appears literally in source (no dynamic concat) |
| Layout breaks at tablet | Wrong breakpoint prefix | Verify `md:` vs `lg:` thresholds |
| Image not filling container | Missing `w-full h-full object-cover` | Add to `<img>` or `<Image>` |
| Flex children overflow | Missing `min-w-0` on children | Add `min-w-0` to flex children |
 
---

## Dark Mode Support

### 1. Detect which dark mode strategy the project uses

Check `tailwind.config.js` (or `tailwind.config.ts`):

```js
// Strategy A — class-based (most common in Next.js)
darkMode: 'class'   // dark mode is ON when <html> has class="dark"
 
// Strategy B — media-query-based
darkMode: 'media'   // dark mode follows the OS preference
 
// Strategy C — selector (Tailwind v4+)
darkMode: ['selector', '[data-theme="dark"]']
```

### 2. Capture a dark-mode screenshot

#### Class-based (`darkMode: 'class'`)

Inject the `dark` class on `<html>` before snapshotting:

```bash
cat > /tmp/capture-dark.js << 'EOF'
const { chromium } = require('playwright');
 
(async () => {
  const url  = process.argv[2] || 'http://localhost:3000';
  const out  = process.argv[3] || '/tmp/actual-dark.png';
  const w    = parseInt(process.argv[4] || '1440');
  const h    = parseInt(process.argv[5] || '900');
 
  const browser = await chromium.launch();
  const page    = await browser.newPage();
  await page.setViewportSize({ width: w, height: h });
  await page.goto(url, { waitUntil: 'networkidle' });
 
  // Inject dark class (works for next-themes, custom toggles, etc.)
  await page.evaluate(() => {
    document.documentElement.classList.add('dark');
  });
  await page.waitForTimeout(300); // allow CSS transitions to settle
 
  await page.screenshot({ path: out, fullPage: true });
  await browser.close();
  console.log(`Dark screenshot saved: ${out}`);
})();
EOF
 
node /tmp/capture-dark.js http://localhost:3000/<path> /tmp/actual-dark.png 1440 900
```

#### Media-query-based (`darkMode: 'media'`)

Force the OS dark preference via Playwright's `colorScheme`:

```bash
cat > /tmp/capture-dark-media.js << 'EOF'
const { chromium } = require('playwright');
 
(async () => {
  const url = process.argv[2] || 'http://localhost:3000';
  const out = process.argv[3] || '/tmp/actual-dark.png';
  const w   = parseInt(process.argv[4] || '1440');
  const h   = parseInt(process.argv[5] || '900');
 
  const browser = await chromium.launch();
  const context = await browser.newContext({ colorScheme: 'dark' });
  const page    = await context.newPage();
  await page.setViewportSize({ width: w, height: h });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.screenshot({ path: out, fullPage: true });
  await browser.close();
  console.log(`Dark (media) screenshot saved: ${out}`);
})();
EOF
 
node /tmp/capture-dark-media.js http://localhost:3000/<path> /tmp/actual-dark.png 1440 900
```

#### Selector-based (`darkMode: ['selector', '[data-theme="dark"]']`)

```js
// In the capture script, replace the evaluate block with:
await page.evaluate(() => {
  document.documentElement.setAttribute('data-theme', 'dark');
});
```

### 3. Dark mode comparison checklist

Run through these in addition to the standard checklist (Phase 3b):

#### Colors
- [ ] Background switches from light to dark token (e.g., `bg-white` → `dark:bg-zinc-900`)
- [ ] Text switches to light token (`text-gray-900` → `dark:text-gray-100`)
- [ ] Borders are visible against dark backgrounds (`dark:border-zinc-700`)
- [ ] Cards/panels have distinct dark background (`dark:bg-zinc-800`)
- [ ] Accent / brand colors still pass contrast ratio in dark context

#### Shadows & Depth
- [ ] Box shadows may need to be stronger or replaced with borders in dark mode
- [ ] `dark:shadow-*` utilities applied where needed

#### Images & Icons
- [ ] SVG icons using `currentColor` inherit dark text color correctly
- [ ] Any hardcoded `fill="#000"` or `stroke="#fff"` in SVGs — need `dark:` overrides
- [ ] Images with white backgrounds may look harsh — consider `dark:opacity-90` or rounded borders

#### Common dark mode pitfalls

| Symptom | Likely cause | Fix |
|---|---|---|
| Page stays light after `dark` class added | `next-themes` uses a `<ThemeProvider>` with SSR — class may be overwritten on hydration | Use `forcedTheme` prop or capture after hydration delay |
| Some elements don't go dark | Missing `dark:` variants on those elements | Add `dark:bg-*` / `dark:text-*` / `dark:border-*` |
| Flash of wrong theme on load | Missing `suppressHydrationWarning` on `<html>` | Add `suppressHydrationWarning` in `layout.tsx` |
| Dark bg but light scrollbar | Browser default scrollbar | Add `color-scheme: dark` to `html` in global CSS |
| Input placeholder still dark | Placeholder needs separate utility | Add `dark:placeholder-gray-400` |

### 4. Simultaneous light + dark QA

When the reference contains both a light and dark version:

```bash
# Capture both in one pass
node /tmp/capture.js      http://localhost:3000/ /tmp/actual-light.png 1440 900
node /tmp/capture-dark.js http://localhost:3000/ /tmp/actual-dark.png  1440 900
```

View and compare all four images (reference-light, actual-light, reference-dark, actual-dark)
before writing the fix plan, so shared components are fixed once rather than twice.
 
---

## Prompt Template (copy-paste for Claude Code)

Use this prompt when starting a visual QA session:

```
I need pixel-perfect visual QA on a Next.js + Tailwind page.
 
Reference image: [attach your design screenshot here]
Page URL path: /your-page-path
Viewport: 1440×900   (or specify mobile: 390×844)
Project root: /path/to/project   (or "current directory")
Dark mode: yes / no   (if yes, also attach the dark reference image)
 
Please:
1. Start the dev server
2. Capture a screenshot of the page at the specified viewport
3. If dark mode — detect the darkMode strategy in tailwind.config, capture a dark screenshot too
4. Compare each screenshot side-by-side with the matching reference using the visual QA checklist
5. List every discrepancy with element location, expected value, and actual value
6. Apply all fixes one by one, re-capturing after every few changes
7. Show me the final screenshot(s) when they match the reference
```
 
---

## Notes

- Always match viewport size to the reference image before comparing.
- If the reference is a Figma export, check the pixel density — Figma exports at 2x by default;
  use half the pixel dimensions for the viewport.
- For dark-mode designs, follow the **Dark Mode Support** section — detect the `darkMode` strategy first, then use the matching capture script.
- If fonts are from Google Fonts, ensure the dev server has internet access so they load correctly.
 