# AGENTS.md

## Project Overview

Alberta Bee Adventure — interactive educational web app for grades 1-6 about beekeeping in Alberta, Canada. Built with React 19, TypeScript, Vite, Tailwind CSS 4.

## Commands

- `npm run dev` — start dev server on port 3000
- `npm run build` — production build
- `npm run lint` — TypeScript typecheck (`tsc --noEmit`)

## Coding Conventions

### Image Paths — Always Use Relative Paths

The app is hosted on GitHub Pages at a subpath (`/alberta-bee-adventure/`). Vite is configured with `base: './'`, so all asset paths must be **relative** to work correctly on both localhost and the deployed subpath.

**Correct:**
```tsx
<img src="./images/bee-or-wasp/Bee.png" />
```

**Wrong:**
```tsx
<img src="/images/bee-or-wasp/Bee.png" />
```

Absolute paths (starting with `/`) resolve to the domain root, skipping the `/alberta-bee-adventure/` subpath, so images will 404 on GitHub Pages. This applies to all hand-written `src` and `href` attributes in JSX — Vite only rewrites paths for assets processed through `import` or CSS.

### Component Structure

- Each section is a standalone component in `src/components/`
- Components receive an `onNext` callback for navigation
- Fact/feature data is defined as typed arrays at the top of each component
- Images live in `public/images/` organized by section

### Styling

- Neo-brutalist design: bold borders (`border-4 border-black`), hard shadows (`shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`), bright colors
- Tailwind utility classes only — no custom CSS unless necessary
- lucide-react for icons

### Deployment

- GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages
- GitHub Pages `build_type` must be set to `workflow` (not `legacy`/`/docs`)
- Pushes to `master` trigger automatic deploys
