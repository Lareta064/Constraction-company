# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static marketing website for a construction-documentation company. No backend, no framework, no tests. Source is authored in Pug (HTML templates), SCSS, and vanilla JS, then compiled by Gulp into a static `build/` directory served by browser-sync. UI text and most code comments are in Russian.

## Commands

- `npm start` — clean, build everything, launch browser-sync dev server with live reload, and watch all sources (the default `gulp` task).
- `npm run build` — clean and produce a one-off production build into `build/` (no server/watch).

There is no lint, test, or typecheck step. To verify a change, run `npm start` and inspect the rendered pages in the browser.

## Build pipeline (`gulpfile.mjs`)

The gulpfile is ESM (`"type": "module"` in package.json). Output always lands in `build/` (gitignored). Key transforms:

- **Pug → HTML**: `src/pug/pages/**/*.pug` compile flat into `build/` (e.g. `pages/home.pug` → `build/home.html`, `pages/sections/hero.pug` → `build/sections/hero.html`). A separate `pugUi` task compiles `src/pug/ui/**/*.pug` into `build/ui/` as a standalone UI kit.
- **SCSS → CSS**: only `src/scss/main.scss` is compiled (with autoprefixer, media-query grouping, sourcemaps) → `build/css/main.css`. All other `.scss` files must be reached via `@use` from `main.scss` or they are dead.
- **JS**: all of `src/js/**/*.js` is `concat`'d into `build/js/main.js` — no bundling/transpiling, so the source is plain browser JS.
- **Images**: jpg/png are run through imagemin + converted to `.webp`; SVGs are copied as-is; other assets copied. **References to raster images in markup must use `.webp` extensions** since originals are converted.
- **Fonts**: `.ttf` → `.woff2` via ttf2woff2; existing `.woff/.woff2` copied through.
- **Libs/video**: `src/libs/**` and `src/video/**` copied verbatim into `build/`.

## Pug architecture

Three distinct roles under `src/pug/`:

- **`layouts/layout.pug`** — the single base template. Defines `<head>` (inline critical CSS, CSS `:root` design tokens, `@font-face`, hero `image-set` rules), and `block content`. It includes the search/form popups and the script tags (swiper, fancybox, `main.js`) at the end of `<body>`. `_mixins-links.pug` is included here.
- **`pages/*.pug`** — each `extends ../layouts/layout.pug`, fills `block content`, and sets the page title via `block variables` (`-var title = "..."`). `index.pug` is a link hub listing all pages. Pages compose a layout out of section partials.
- **`sections/_*.pug`** — underscore-prefixed reusable partials (`_header`, `_hero-main`, `_footer`, etc.) pulled into pages with `include`. These are NOT under `pages/` so they are never compiled directly.

Note `src/pug/pages/sections/` (no underscore) is a separate, partly-legacy set of standalone section preview pages that DO compile to `build/sections/*.html`. The active, included partials are the underscore-prefixed files in `src/pug/sections/`. When editing a section that appears on a page, edit the `_`-prefixed partial in `src/pug/sections/`.

## SCSS architecture

`main.scss` is the only entry point and is an explicit `@use` manifest of partials under `base/`, `blocks/`, `sections/`, `ui/`. Design tokens (colors, fonts) live as CSS custom properties in `layout.pug`'s inline `<head>` style, not in SCSS variables. Several `@use`/`@import` lines in `main.scss` are commented out — a partial existing on disk does not mean it is active; check `main.scss` to confirm a stylesheet is actually included.

## JS

`src/js/main.js` is a single `DOMContentLoaded` handler wiring up UI behaviors (mobile menu toggle, expandable cards, sliders, popups) via `querySelector` + class toggling, each guarded by a presence check. Third-party libs (Swiper, Fancybox) are loaded separately from `src/libs/` and referenced globally.
