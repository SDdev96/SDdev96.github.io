# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the site

There is no build step, no package manager, and no test suite. The site is static HTML/CSS/JS served directly.

- **Local dev:** open `index.html` with the VS Code Live Server extension. The port is pinned to `5501` in `.vscode/settings.json`. Any static server works equally well (`python3 -m http.server`), but Live Server is what the project is configured for.
- **Deploy:** the repo name (`SDdev96.github.io`) makes this a GitHub Pages user site. Pushing to `main` publishes it. There is no CI workflow and no `.nojekyll`.

Because there is no bundler, **all third-party dependencies are CDN `<link>`/`<script>` tags in `index.html`** — Bootstrap 5.3.8, Bootstrap Icons 1.13.1, Font Awesome 7.3.0, AOS 2.3.4, Swiper 14. Upgrading a library means editing the URL (and the SRI `integrity` hash where present, on the two Bootstrap tags). There is no lockfile to keep in sync.

Regenerate an SRI hash after changing a Bootstrap URL:

```sh
curl -s <cdn-url> | openssl dgst -sha384 -binary | openssl base64 -A
```

Two version notes worth knowing before upgrading further:

- **Font Awesome 7 renamed icons.** v7 defines glyphs via a `--fa` custom property and dropped some v6 names (`fa-arrow-down-long` → `fa-long-arrow-down`). Verify any icon class you add exists in the pinned version before relying on it.
- **AOS is effectively unmaintained** — 2.3.4 was published in 2018 and is the newest stable release. It works, but treat it as frozen; a `3.0.0-beta` exists and has for years.

## Architecture

### One page, section-scoped assets

`index.html` is the entire site — ~1600 lines containing every section inline: `#about-me`, `#skills`, `#education`, `#experiences`, `#projects`. Navigation is same-page anchors.

CSS and JS are split by *section*, not by component, and each folder owns one feature:

| Path | Owns |
|---|---|
| `index.css` | Global reset only, plus a deliberate `cursor: default` on everything with `cursor: pointer` restored for nav/links. Keep that pairing intact when adding interactive elements. |
| `cpb/` | The circular percentage-bar skill widgets ("cpb") |
| `section-experiences/` | Responsive border helpers + the pulsing "current job" badge |
| `section-project/` | The Swiper coverflow carousel and per-project card images |
| `back-to-top.css` | The floating back-to-top button |

Load order in `<head>` matters: Bootstrap's CDN CSS comes first, and every local stylesheet after it wins on equal specificity. Local CSS is written as *overrides on top of Bootstrap defaults* rather than as an independent system — there are no CSS custom properties or design tokens anywhere in the project.

Bootstrap's JS bundle must stay at the bottom of `<body>` (there's an existing comment saying so); the tooltip and `AOS.init()` initializers run after it and depend on it.

### The circular skill widgets (`cpb/`)

This is the most intricate part of the codebase and spans markup + CSS + JS.

Each widget is a nested `.cpb-skill > .cpb-outer > .cpb-inner > .cpb-number` stack producing a neumorphic dial via layered `box-shadow`, with a sibling `<svg><circle>` drawing the progress ring.

The contract between markup and `cpb/cpb.js`:

- `data-cpb-value` on `.cpb-number` is the target percentage.
- `data-cpb-duration` is the animation duration in ms; it is empty in the current markup, so the `DEFAULT_DURATION_MS` fallback applies.
- The ring is animated by `stroke-dashoffset`. The circumference lives in **one** place — the `--cpb-circumference` custom property on `.cpb-skill` in `cpb.css` — and `cpb.js` reads it via `getComputedStyle`. Changing the radius means updating `--cpb-radius` / `--cpb-circumference` and the SVG `r` attribute; the JS follows automatically.
- Animation uses `requestAnimationFrame` with a cubic ease-out, not `setInterval`.
- `prefers-reduced-motion` snaps values to their target instead of animating.

An `IntersectionObserver` (threshold `0.35`) counts up when a widget scrolls into view and rewinds it when it leaves downward, so the animation replays on scroll-back.

**Adding a widget:** the markup is copy-pasted per skill, and each instance needs its **own** `<linearGradient>` id (`GradientColor1`…`N`) referenced by its circle's `stroke="url(#GradientColorN)"`. The gradient must be unique per widget — ids are document-global, so a duplicate would make every ring resolve to the first gradient. The `.cpb-svg` class (not an id) carries the positioning.

### Projects carousel

`section-project/project.js` initializes Swiper with the coverflow effect, autoplay, loop, and keyboard nav. Project card imagery is *not* in the HTML — it's bound by CSS class: `.card-image.project1` … `.project9` each set a `background-image` in `project.css`. Adding a project means adding both a slide in `index.html` and a numbered rule in `project.css`. Nav arrows are hidden under 768px by design.

### Author-facing details

- Two CV PDFs are served by locale: `assets/doc/Italy/` and `assets/doc/Switzerland/`, linked separately from the about section. Keep both in sync when the CV changes.
- Bootstrap tooltips require `data-bs-toggle="tooltip"` on the wrapping `<span>` — an inline comment in `index.html` calls this out because it's easy to put on the wrong element.
- Inline `<script>` blocks in `index.html` handle nav item spacing, back-to-top visibility (hardcoded scroll threshold of `1300`), tooltips, and AOS init. New behavior generally follows this inline pattern unless it belongs to a section folder.
- Comments in `cpb/cpb.js` are in Italian; the user-facing site copy is in English.

## Conventions to keep

- **Motion is opt-out.** Every animation in the project respects `prefers-reduced-motion` — the CPB rings, AOS, Swiper autoplay, the pulse badge, and the back-to-top button. New motion should do the same.
- **Animate compositor properties only.** Use `transform` / `opacity`. The back-to-top button's width "animation" goes through a registered `@property --button-width` custom property specifically to avoid a layout reflow — don't revert it to `transition: width`.
- **`index.css` sets `cursor: default` globally**, so any new interactive element must be added to the `cursor: pointer` list there or it will feel dead. The same file provides the `:focus-visible` ring the global reset would otherwise suppress.
- **External links** carry `rel="noopener noreferrer"` alongside `target="_blank"`.

## Known issues (pre-existing, not yet fixed)

- **Two nav anchors point at nothing:** `href="#experience"` (the section id is `experiences`) and `href="#contact"` (no such section — the nav item is commented out, but the hero "Contacts" button still links there).
- **No favicon**, so browsers request `/favicon.ico` and get a 404 on every load.
- `<html>` and `<body>` carry inline `overflow-x: hidden`, masking horizontal overflow rather than fixing it. Verified as no actual overflow at 390px today, but it would hide any regression.

## Tooling note

The Impeccable design detector (`detect.mjs`) reports `transition: width` in `back-to-top.css` as a layout-thrash warning. This is a **false positive** in its degraded regex mode — it substring-matches `width` inside `--button-width`, which is a registered custom property, not the `width` layout property.
