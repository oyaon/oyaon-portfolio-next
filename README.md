# Oyaon Sultan — Portfolio (Next.js)

A Next.js App Router portfolio using TypeScript and static export for GitHub Pages. The visual direction is cinematic and editorial, with a charcoal palette, lime accents, restrained motion and a procedural 3D hero with a CSS fallback.

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
Read `docs/CONTENT-AUDIT.md` for the content sources and remaining evidence checks. The experience, education, certifications, and five selected projects follow the ATS Master CV supplied on 2026-10-13. Replace the illustrative project artwork with real screenshots before presenting it as captured product UI; do not publish unsupported metrics. The CV's current portfolio URL should be updated to `https://oyaon.github.io/oyaon-portfolio-next/` in its next revision.

## Static export limitation
GitHub Pages serves static files; server-only features such as API routes, server actions, middleware and default Next.js image optimisation are not available in this configuration. See the official guide: https://nextjs.org/docs/app/guides/static-exports
