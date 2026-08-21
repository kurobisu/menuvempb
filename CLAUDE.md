# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

MenuvemPB is a static, multi-page marketing/landing site (no framework, no bundler, no build step) for a regional reseller of the Menuvem SaaS platform (digital menu / order management) targeting the Paraíba (PB) region of Brazil. All content is in Portuguese (pt-BR). It's deployed to `menuvempb.com.br` (see `CNAME`), almost certainly via GitHub Pages given the plain static structure.

## Running locally

There is no build system, package manager, or dependency install step — just plain HTML/CSS/JS files. Open a page directly in a browser or serve the directory with any static file server, e.g.:

```bash
python -m http.server 8000
```

There is no lint or test tooling configured in this repo currently (`.gitignore` excludes `package.json`/`node_modules`, suggesting Node-based tooling may be added later, but none exists today).

## Architecture

**Pages** (each is a standalone `.html` file, no client-side routing):
- `index.html` — main landing page (the canonical homepage, per commit `c0c779a`).
- `cadastro-etapas.html` — explains the 3-step signup/activation flow.
- `funcionalidades.html` — searchable/filterable feature catalog with a sidebar of categories.
- `planos.html` — plans/pricing page.
- `plano-secreto.html` — a specific "secret plan" page.
- `duvidas.html` — FAQ page.
- `site.html` — legacy redirect shim that immediately forwards to `index.html` (preserves old bookmarks/links).

**CSS**: `css/style.css` is the shared design system loaded on every page — CSS custom properties in `:root` define the fixed dark theme (there is no light mode / theme toggle; brand colors are `--primary: #641DDE` purple and `--secondary: #F2C200` yellow). Each page then loads its own dedicated stylesheet (`css/<page-name>.css`) for page-specific styles. `css/site.css` holds a few extra site-wide overrides used mainly by `index.html`.

**JS**: `js/main.js` is a single shared script loaded by `index.html`, `cadastro-etapas.html`, `planos.html`, `duvidas.html`, and `plano-secreto.html`. It follows an init-function-per-feature pattern, all wired up in one `DOMContentLoaded` listener (header scroll state, mobile menu, `IntersectionObserver` scroll-reveal animations, bento card mouse spotlight, the interactive plans/pricing calculator, FAQ accordion, and the tabbed features carousel). `funcionalidades.html` is the exception — it does **not** load `main.js`; it has its own self-contained inline `<script>` at the bottom of the file implementing a different sidebar-category/filter interaction pattern for its feature catalog.

**Cache busting**: shared assets are referenced with a version query string, e.g. `css/style.css?v=4` and `js/main.js?v=4`. Bump this version number across all pages that reference the file whenever you edit `css/style.css` or `js/main.js`, so browsers don't serve stale cached copies.

**Analytics**: the same Google Analytics (`gtag.js`) snippet is duplicated inline in the `<head>` of every page — there's no shared partial/include mechanism, so any tracking changes must be applied per-file.

**docs/**: contains historical planning artifacts in Portuguese (`docs/plans/PLAN-*.md`, `docs/tasks/TASK-*.md`, `docs/implementations/*.md`) documenting prior feature work and decisions (pricing history, copy changes, support-hours policy, etc.). Useful for background context on *why* current copy/pricing reads the way it does.

## Conventions

- Commit messages: written in Portuguese (pt-BR) — see `.vscode/settings.json` which configures this for Copilot, and the existing git history (e.g. `feat: atualiza botoes dos cards de planos e adiciona tooltip explicativo no Plano Secreto`).
- No dark/light theme toggle — the site is intentionally fixed to the official dark theme; don't reintroduce theme-switching logic.
