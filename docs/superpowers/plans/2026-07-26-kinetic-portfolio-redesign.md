# Kinetic Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn Ardre Malonzo's existing recruiter portfolio into a memorable, Gen-Z kinetic editorial experience with scroll-driven horizontal projects, expressive typography, rich interaction, and strong responsive behavior.

**Architecture:** Preserve the existing Next.js 14 App Router and static-export setup. Keep content server-rendered where possible, isolate viewport-dependent motion in small client components, and implement animation with CSS and `requestAnimationFrame` rather than adding a motion library.

**Tech Stack:** Next.js 14, React 18, TypeScript, Tailwind CSS 3, Lucide React, CSS transforms, Node test runner

## Global Constraints

- Preserve the user's untracked `public/3d-experience/` directory.
- Keep all six existing projects and factual portfolio claims.
- Maintain static GitHub Pages export compatibility.
- Provide keyboard navigation, strong focus states, reduced-motion behavior, and a usable touch/mobile layout.
- Avoid adding a runtime animation dependency.

---

### Task 1: Extend the content contract for the redesigned experience

**Files:**
- Modify: `tests/portfolio-content.test.mjs`

**Interfaces:**
- Consumes: the existing component source and six-project data model.
- Produces: assertions for the new motion client, horizontal work rail, semantic navigation, direct contact paths, and reduced-motion support.

- [ ] **Step 1: Add source-level assertions** for a client-side scroll progress implementation, a labelled project rail, a project progress indicator, the existing email/GitHub paths, and `prefers-reduced-motion`.
- [ ] **Step 2: Run `npm test`** and confirm the new motion and rail assertions fail before implementation.

### Task 2: Build the kinetic visual system and page choreography

**Files:**
- Create: `src/components/ScrollProgress.tsx`
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
- `ScrollProgress(): JSX.Element` exposes the document position as the CSS property `--page-progress`.
- `BentoGrid(): JSX.Element` maps vertical section progress to a horizontal desktop project track and renders the same projects as a touch-friendly mobile stack.
- Existing anchors remain `#work`, `#experience`, `#skills`, and `#contact`.

- [ ] **Step 1: Add `ScrollProgress`** using one passive scroll listener, `requestAnimationFrame`, and a cleanup function.
- [ ] **Step 2: Replace the restrained green visual language** with a warm paper/ink/cobalt/coral editorial palette, oversized display typography, grid texture, sticker-like labels, and varied borders/radii.
- [ ] **Step 3: Recompose the hero** around an oversized name, rotating developer seal, availability/status cards, a direct work CTA, and a continuously moving role ticker.
- [ ] **Step 4: Implement the project work rail** as a sticky, viewport-height desktop scene whose vertical progress drives leftward movement; retain a normal-flow stacked layout below the desktop breakpoint.
- [ ] **Step 5: Restyle the experience, capability, education, and contact areas** as distinct editorial scenes with clear hierarchy and interactive hover/focus feedback.
- [ ] **Step 6: Add responsive and reduced-motion rules** so no essential content depends on animation and all horizontal content remains reachable on touch screens.
- [ ] **Step 7: Run `npm test` and `npm run typecheck`** and correct source or type failures.

### Task 3: Validate and launch the finished portfolio

**Files:**
- Review: all modified source files

**Interfaces:**
- Produces: a successful static production build and a healthy local development URL opened in the Codex browser.

- [ ] **Step 1: Run `npm run build`** and fix any export or compilation failure.
- [ ] **Step 2: Start `npm run dev`** in a retained background process and capture the exact localhost URL.
- [ ] **Step 3: Open the local URL in the in-app browser** so the user can inspect the finished portfolio.
- [ ] **Step 4: Confirm the dev server remains healthy** and report the preview URL plus the major design outcomes.

## Self-Review

- Spec coverage: distinct design, animation, scroll-to-left/right behavior, Gen-Z tone, detail, responsiveness, and a running preview are explicitly covered.
- Placeholder scan: no deferred implementation placeholders are present.
- Type consistency: both the desktop rail and mobile stack consume the existing `Project` interface.
