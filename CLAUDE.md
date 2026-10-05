# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

MenuvemPB is a static, multi-page marketing/landing site (no framework, no bundler, no build step) for a regional reseller of the Menuvem SaaS platform (digital menu / order management), operated by NUC Tecnologia from Paraíba (PB) and serving the Brazilian Northeast. All content is in Portuguese (pt-BR). It's deployed to `menuvempb.com.br` (see `CNAME`), almost certainly via GitHub Pages given the plain static structure.

## Running locally

There is no build system, package manager, or dependency install step — just plain HTML/CSS/JS files. Open a page directly in a browser or serve the directory with any static file server, e.g.:

```bash
python -m http.server 8000
```

There is no lint or test tooling configured in this repo currently (`.gitignore` excludes `package.json`/`node_modules`, suggesting Node-based tooling may be added later, but none exists today).

## Architecture

**Pages** (each is a standalone `.html` file, no client-side routing):
- `index.html` — main landing page: hero, plans, features, support, client-logo strips, FAQ.
- `planos.html` — plans/pricing page with the full comparison table (accepts `?plano=1|2|3` to highlight a plan).
- `funcionalidades.html` — feature catalog (categories, sticky nav, search; old `#anchor` ids are kept on purpose because other pages/links point to them).
- `duvidas.html` — FAQ with accent-insensitive search and topic filters (accepts `?q=`).
- `cadastro-etapas.html` — the 3-step signup/activation flow. The signup link `painel.menuvem.com.br/#/cadastro/23/clovis` is the reseller's referral link: never change it.
- `privacidade.html` (served as `/privacidade`) and `privacidade-atendimento.html` — privacy policies registered in the Google OAuth consent screen and the Meta app. Keep their URLs and policy text unchanged unless explicitly asked.
- `plano-secreto.html` — **archived** "Plano 0": still online in the old dark design, `noindex`, with no links pointing to it. Don't link or mention it.
- `site.html`, `status/`, `threads/` — redirect shims (legacy URL and short links with UTM).

**Visual identity**: the site follows the official Menuvem brand (source of truth: `~/menuvempb-instagram/assets/marca/identidade-visual.md`): deep purple `#4B0FA5`, purple `#7418E4`, mid purple `#5A13BB`, yellow `#FFC700`, lavender `#F6F5FA`; Bricolage Grotesque (titles) + IBM Plex Sans (text) from Google Fonts; white logo in `img/marca/`. Light/purple sections, no dark theme and no theme toggle.

**CSS**: `css/marca.css` is the shared base loaded by every page in the new design (tokens, header, footer, buttons, pills, page header `.pagina-topo`, plan cards, FAQ, reveal animations, mobile CTA bar). Each page then loads its own `css/<page>.css` (`home.css` for `index.html`). `css/style.css`, `css/site.css` and `css/index.css` belong to the old dark design and are only used by `plano-secreto.html` (style.css) or no page at all.

**JS**: `js/site.js` is shared (header, mobile menu, scroll reveal, plan comparison in the cards, plans table built from the `RECURSOS` list, FAQ accordion, mobile CTA bar); every function no-ops when its elements aren't on the page. Page scripts: `home.js` (client-logo strips from `img/clientes/clientes.json`), `planos` uses only `site.js`, `duvidas.js`, `cadastro.js`, `funcionalidades.js`. `js/main.js` is the old script, only used by `plano-secreto.html`.

**Plans data**: the feature list per plan lives once in `RECURSOS` (`js/site.js`) and feeds both the home cards comparison and the `planos.html` table; names/prices in the table come from the plan cards' markup (`data-plano`, `data-curto`).

**Client logos**: originals go in `img/clientes/originais/` (git-ignored); `tools/logos_clientes.py` (local, `*.py` is git-ignored) turns them into round WebP badges + `img/clientes/clientes.json` with menu links (domain only, from `menuvem-client-panel/lojas-links.csv` — never the token links), UTM `utm_source=menuvempb&utm_medium=referral&utm_campaign=site_clientes`, and the "N lojas" tag for multi-unit chains. Run it with `~/menuvempb-instagram/.venv/bin/python tools/logos_clientes.py`.

**Cache busting**: assets are referenced with a version query string (e.g. `css/marca.css?v=2`, `js/site.js?v=3`). Bump the number in every page that references a file whenever you edit it.

**Analytics**: the same Google Analytics (`gtag.js`) snippet is duplicated inline in the `<head>` of every page — there's no shared partial/include mechanism, so any tracking changes must be applied per-file. The Chatwoot widget snippet is duplicated the same way.

**docs/**: contains historical planning artifacts in Portuguese (`docs/plans/PLAN-*.md`, `docs/tasks/TASK-*.md`, `docs/implementations/*.md`) documenting prior feature work and decisions (pricing history, copy changes, support-hours policy, etc.). Useful for background context on *why* current copy/pricing reads the way it does.

## Conventions

- Commit messages: written in Portuguese (pt-BR) — see `.vscode/settings.json` which configures this for Copilot, and the existing git history (e.g. `feat: atualiza botoes dos cards de planos e adiciona tooltip explicativo no Plano Secreto`).
- No theme toggle — the site uses the official Menuvem brand identity (light/purple), not a dark theme.
- Header and footer markup is duplicated in every page (no includes): change all pages together.
- Content rules (decided by the owner): don't publish third-party fees/prices (payment fees, Z-API cost), TEF, service hours, support cities, or the Plano Secreto. Feature claims must come from `~/menuvempb-instagram/pesquisa/funcionalidades/BASE-DE-CONHECIMENTO.md` (items marked ✅).
