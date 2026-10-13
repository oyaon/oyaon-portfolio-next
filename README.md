# Oyaon Sultan — Portfolio (Next.js)

A new portfolio starter using Next.js App Router, TypeScript, Tailwind CSS v4 and static export for GitHub Pages. The art direction is editorial, restrained and concept-led, with a warm paper palette and acid-green accent.

## Requirements
- Node.js 20.9+ (Node 22 recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Build
```bash
npm run build
```
The static website is exported to `out/`.

## GitHub Pages deployment
1. Create a new public repository (recommended: `oyaon-portfolio-next`, unless you prefer another name).
2. Push this folder's contents to the repository's `main` branch.
3. In **Settings → Pages**, set **Build and deployment → Source** to **GitHub Actions**.
4. Push a commit; `.github/workflows/deploy.yml` builds and deploys the `out/` folder.

`next.config.ts` detects the GitHub Actions repository name and sets `basePath` for project Pages. If using the special `oyaon.github.io` repository, no project prefix is applied. Verify the final URL and asset paths after the first deployment.

## Before launch
Read `docs/CONTENT-AUDIT.md`. Some project descriptions are deliberately conservative and links are not yet attached to project cards. Replace generated abstract artwork with real screenshots or evidence-based visuals; don't publish unsupported metrics. Validate the current CV, dates, project URLs, privacy and mobile behaviour.

## Static export limitation
GitHub Pages serves static files; server-only features such as API routes, server actions, middleware and default Next.js image optimisation are not available in this configuration. See the official guide: https://nextjs.org/docs/app/guides/static-exports
