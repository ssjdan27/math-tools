# Math Tools

A modular, frontend-only math visualization site built with Vite, React, TypeScript, React Router, and Tailwind CSS.

This project is designed for [math.danielgarza.dev](https://math.danielgarza.dev) and runs entirely in the browser with no backend.

## Tech stack

- Vite
- React + TypeScript
- React Router
- Tailwind CSS

## Routes

- `/` home page with tool cards
- `/cantor` Cantor set visualization (SVG)
- `/complex` complex plane transformations (Canvas)
- `/barycentric` barycentric coordinates (SVG + drag interaction)

## Local development

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Type check

```bash
npm run typecheck
```

### Build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project structure

```text
src/
  app/
    home/
      HomePage.tsx
    layout/
      AppLayout.tsx
    router/
      index.tsx
  components/
    ui/
      ControlPanel.tsx
      NumberField.tsx
      PageContainer.tsx
      SelectField.tsx
      SliderField.tsx
      ToolCard.tsx
  content/
    toolMetadata.ts
  lib/
    complex/
      complex.ts
    geometry/
      point.ts
    math/
      numbers.ts
    utils/
      classNames.ts
      format.ts
  tools/
    cantor/
      ToolPage.tsx
      components/
      math/
      render/
      types.ts
    complex/
      ToolPage.tsx
      components/
      math/
      render/
      types.ts
    barycentric/
      ToolPage.tsx
      components/
      math/
      render/
      types.ts
  index.css
  main.tsx
```

## Architecture notes

- Feature-first: each tool lives in `src/tools/<tool-name>/`.
- Tool modules are split by responsibility:
  - `math/` pure computation
  - `render/` visualization components
  - `components/` controls/readout UI
  - `ToolPage.tsx` page-level state wiring
- Shared UI and helper utilities are centralized in `src/components/ui/` and `src/lib/`.
- Home cards are metadata-driven from `src/content/toolMetadata.ts`.

## Add a new tool

Use this repeatable pattern:

1. Create a new folder: `src/tools/<new-tool>/`.
2. Add:
   - `ToolPage.tsx`
   - `types.ts`
   - `math/`
   - `render/`
   - optional `components/`
3. Register the route in `src/app/router/index.tsx`.
4. Add metadata in `src/content/toolMetadata.ts` so it appears on the home page.

## Static hosting notes

This app uses browser routes. For static hosting, configure SPA fallback rewrites so unknown paths return `index.html`.

Examples:

- Netlify: `_redirects` rule `/* /index.html 200`
- Vercel: `rewrites` to `/index.html`
- Nginx: `try_files $uri /index.html`

With rewrite fallback configured, direct links like `/complex` and `/barycentric` will work correctly.
