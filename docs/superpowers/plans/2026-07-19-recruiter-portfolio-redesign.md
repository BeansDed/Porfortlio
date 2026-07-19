# Recruiter-First Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the portfolio into a polished, fast-scanning experience that helps recruiters understand Ardre's role, evidence, and contact path within one minute.

**Architecture:** Keep the existing Next.js 14 App Router static-export architecture, but make the home page server-rendered and data-driven. Replace broad, repetitive section components with focused recruiter sections, preserve static project detail pages, and remove dependencies and files that have no runtime or deployment purpose.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS 3, Lucide React, Node test runner

## Global Constraints

- Preserve the user's untracked `public/3d-experience/` work.
- Do not invent employment metrics, client names, or project outcomes not present in the repository.
- Maintain GitHub Pages static export compatibility.
- Keep keyboard navigation, visible focus states, reduced-motion support, and responsive layouts.

---

### Task 1: Recruiter-facing content model

**Files:**
- Modify: `src/data/projects.ts`
- Create: `tests/portfolio-content.test.mjs`
- Modify: `package.json`

**Interfaces:**
- Produces: `Project` records with concise `title`, `category`, `description`, `details`, `tags`, and optional `link` values used by both list and detail pages.

- [ ] **Step 1: Write a failing Node test** that requires six unique project IDs, recruiter-readable summaries, at least three contribution bullets, and no placeholder social URL.
- [ ] **Step 2: Run `npm test`** and confirm it fails against the current source because the redesigned content contract is absent.
- [ ] **Step 3: Update the project data and shared portfolio copy** with concise, evidence-led language based only on existing facts.
- [ ] **Step 4: Run `npm test`** and confirm the content contract passes.

### Task 2: Recruiter-first home page and visual system

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Hero.tsx`
- Modify: `src/components/BentoGrid.tsx`
- Modify: `src/components/ProjectCard.tsx`
- Modify: `src/components/About.tsx`
- Modify: `src/components/Experience.tsx`
- Modify: `src/components/Education.tsx`
- Modify: `src/components/Footer.tsx`
- Modify: `tailwind.config.ts`

**Interfaces:**
- Consumes: the `projects` array from Task 1.
- Produces: semantic anchors `#work`, `#experience`, `#skills`, and `#contact`; a zero-state recruiter CTA path; responsive project and skills grids.

- [ ] **Step 1: Extend the failing test** to require the new section order, accessible navigation labels, a resume-style availability signal, and direct email/GitHub calls to action.
- [ ] **Step 2: Run `npm test`** and confirm the new assertions fail against the old page.
- [ ] **Step 3: Implement the editorial dark visual system** with compact typography, warm accent color, restrained cards, visible focus rings, and reduced-motion support.
- [ ] **Step 4: Replace the client-side show-more flow** with an all-project server-rendered grid and a CSS-only mobile navigation.
- [ ] **Step 5: Run `npm test`, `npm run lint`, and `npm run build`** and correct any regression.

### Task 3: Project details, metadata, and cleanup

**Files:**
- Modify: `src/app/projects/[id]/page.tsx`
- Modify: `src/components/ProjectDetailClient.tsx`
- Modify: `README.md`
- Modify: `.github/workflows/deploy.yml`
- Delete: `src/lib/utils.ts`
- Delete: `public/sw.js`
- Delete: `dev.log`
- Delete: `netlify.toml`
- Modify: `package.json`
- Modify: `package-lock.json`

**Interfaces:**
- Consumes: `Project` records from Task 1.
- Produces: statically generated detail routes with project-specific metadata and GitHub Pages-compatible URLs.

- [ ] **Step 1: Extend the failing test** to require `generateMetadata`, static params, and absence of tracked no-op/runtime-dead files.
- [ ] **Step 2: Run `npm test`** and confirm metadata/cleanup assertions fail.
- [ ] **Step 3: Add per-project metadata and simplify the detail layout** so it mirrors the home-page visual language.
- [ ] **Step 4: Remove the unused service worker, debug log, Netlify config, utility module, and unused packages** while retaining GitHub Pages deployment.
- [ ] **Step 5: Rewrite the README** to match the final feature set and commands.
- [ ] **Step 6: Run the full verification suite**: tests, lint, type checking, production export, browser checks at desktop/mobile widths, and link/navigation checks.

### Task 4: Review, commit, and publish

**Files:**
- Review: all changed files

**Interfaces:**
- Produces: a reviewed commit on `main`, pushed to `origin/main`, and a live GitHub Pages URL.

- [ ] **Step 1: Review `git diff`** for regressions, invented claims, secrets, accessibility gaps, and unrelated changes.
- [ ] **Step 2: Request a focused code review** and resolve all critical or important findings.
- [ ] **Step 3: Re-run `npm test && npm run lint && npm run build`** after review fixes.
- [ ] **Step 4: Commit only the intended tracked changes** without staging `public/3d-experience/`.
- [ ] **Step 5: Push `main` to `origin`** and verify the remote branch and live GitHub Pages deployment.

## Self-Review

- Spec coverage: critique, redesign, recruiter focus, cleanup, verification, push, and visual handoff are covered.
- Placeholder scan: no unfinished implementation placeholders remain.
- Type consistency: home and detail pages consume the same `Project` interface and `projects` array.
