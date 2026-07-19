# Ardre Malonzo — Developer Portfolio

A recruiter-focused portfolio for Ardre N. Malonzo, a full-stack developer working across web, mobile, AI-assisted products, automation, and backend systems.

## What is included

- Fast-scanning home page with selected work first
- Six static project case-study routes
- Experience, capabilities, education, and direct contact details
- Responsive, keyboard-accessible navigation
- Reduced-motion support and visible focus states
- Static export configured for GitHub Pages

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm test
npm run lint
npm run typecheck
npm run build
```

The production export is written to `out/`.

## Content

Project summaries and case-study details live in `src/data/projects.ts`. The site intentionally uses no CMS, analytics, service worker, or animation runtime.

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`, build the static export, and publish it with GitHub Pages.
