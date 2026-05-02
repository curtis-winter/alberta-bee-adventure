<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Alberta Bee Adventure

An interactive educational web application for children in grades 1-6 to learn about beekeeping in Alberta, Canada. Fully offline with no external API dependencies.

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
`npm install`
2. Run the app:
`npm run dev`

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start dev server on port 3000 |
| `npm run build` | Production build |
| `npm run lint` | TypeScript typecheck |

## Deployment

Pushes to `master` automatically deploy to GitHub Pages via GitHub Actions. The GitHub Pages `build_type` must be set to **workflow** (not legacy/docs).

## Coding Conventions

See [AGENTS.md](./AGENTS.md) for full details. Key points:

- **Image paths must be relative** (`./images/...`) not absolute (`/images/...`) — the app is hosted at a subpath on GitHub Pages
- Neo-brutalist design with Tailwind utility classes only
- Each section is a standalone component in `src/components/`
