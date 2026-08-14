# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Three confirmed audiences, all arriving at the same single-page site:

- **Recruiters and HR screeners** — non-technical, scanning fast for role fit, seniority, stack keywords, and a CV they can download and forward. They are usually on a shortlist pass with many tabs open.
- **Hiring engineers and tech leads** — technical evaluators judging actual depth: what was built, with what, and how well. They want evidence, not summary.
- **Peers and community** — other developers, students, and tutoring contacts who receive the link socially. They come for personality and recognition, not evaluation.

The two hiring audiences are the ones the site must win. Peers are a real audience but not the design's optimization target.

## Product Purpose

A personal portfolio for Salvatore D'Ambrosio — Computer Engineer (University of Salerno), working as a Software & Fullstack Developer. It exists to convert a hiring-side visitor from "who is this" to a concrete next step.

A successful visit ends in one of two confirmed outcomes:

1. **The visitor downloads the CV** — served in two locale variants, Italian and Swiss, from a single dropdown.
2. **The visitor makes contact** — email, phone, or LinkedIn.

Project inspection and passive recall are welcome side effects, not success conditions. Anything on the page that does not serve download-or-contact is secondary by definition.

## Positioning

A fullstack engineer with an unusually wide but *actually used* range: web frontend (Angular, Next.js, React, Vue), backend (Node.js, Go, Java/Spring, PHP, Python), data (PostgreSQL, MongoDB, Redis), infrastructure (Docker, DigitalOcean), plus two things most portfolios at this level cannot claim honestly — production blockchain work and hands-on RAG / LLM-as-a-Judge evaluation work.

The range is not aspirational listing; each cluster maps to a named employer or a shipped project. That verifiability is the position.

Secondary and genuine: a bilingual IT/CH job market posture, expressed in the dual CV.

## Operating Context

- **The scan is short and often mobile.** A recruiter pass is measured in seconds. The CV download and the contact details must survive a visitor who reads almost nothing.
- **The link is sent, not found.** Traffic is direct — from an application, a message, or a LinkedIn profile — not organic search. The first viewport is the whole first impression; there is no funnel before it.
- **Two job markets.** Italy and Switzerland, hence two CV PDFs at `assets/doc/Italy/` and `assets/doc/Switzerland/`, which must stay in sync when the CV changes.
- **Site copy is English; the author is Italian.** The one exception in the current build is the footer rights line ("Tutti i diritti riservati"), which is an inconsistency, not a bilingual feature.

## Capabilities and Constraints

**Confirmed structure.** One page, `index.html`, with same-page anchor navigation across `#about-me`, `#skills`, `#experiences`, `#projects`, and the `#contact` footer. An `#education` section exists as a commented-out placeholder and has no content.

**Confirmed roles.** Only the Scaling Parrots position is current — Software & Fullstack Developer, since December 2025, at a Brescia software house specializing in IT and blockchain solutions, responsible for development and maintenance of client projects. Every other entry is past experience and must read in past tense:

- Nexsoft (Salerno) — software developer internship: RAG systems with generative AI models, plus automatic evaluation frameworks using the "LLM as a Judge" approach.
- T30 Web Agency (Eboli, SA) — web developer from July 2024: client websites with WordPress, Elementor, plugins, and custom HTML/CSS/JS/PHP. **Not current.**
- Tutoring — from 2018, middle-school through university, in math, physics, and computer science; first at "Diversiamo" in Salerno, later privately. **Not current.**

The current build marks Scaling Parrots with a "Current Role" badge and leaves the other three unmarked, which is correct. Their tense is not.

**Confirmed: skill percentages are real self-assessments.** The Bootstrap progress bars and the circular CPB dials carry numbers Salvatore stands behind. They are meaningful signal, not decoration, and future work must not quietly re-scale, round, or drop them to serve a layout.

**Confirmed: no live demos exist.** Not for any of the nine projects. The nine cards currently ship a disabled "Live Demo" button and a `href="#"` GitHub button — both placeholders. The disabled Live Demo button is dead UI and should be removed rather than preserved. Future work must never invent a demo URL, and must not present a placeholder link as a real destination.

**Technical constraints, binding:**

- Static HTML/CSS/JS only, published from `main` as a GitHub Pages user site (`SDdev96.github.io`). No build step, no bundler, no package manager, no CI.
- Third-party dependencies stay CDN `<link>`/`<script>` tags in `index.html`. There is no lockfile.
- **Bootstrap 5 stays the base.** Local CSS remains a layer of overrides on top of it, not an independent system. This is a decision, not a default.

**Known defects the code carries today** (recorded so future work fixes rather than rediscovers them): the nav anchor `href="#experience"` and the hero "Contacts" button target ids that do not match their sections or do not exist as nav entries; there is no favicon; `<html>` and `<body>` mask horizontal overflow with inline `overflow-x: hidden`.

## Brand Commitments

- **Name and identity:** Salvatore D'Ambrosio. Titles used on the site: "Computer Engineer" and "Software & Fullstack developer".
- **Binding, explicitly confirmed:** the Kingdom Hearts quote *"May your heart be your guiding key"* and the stated passion for videogames alongside programming. These are personality, not filler — they stay, and they are allowed to be visible rather than tucked away.
- **Voice:** first person, direct, warm, a little earnest ("I'm a creative and motivated person and I'd love to keep growing"). Not corporate, not ironic.
- **Photo:** `assets/img/foto-CV.jpg` — a real portrait of Salvatore, currently the hero image and the OG image.

## Evidence on Hand

**Real, in-repo:**

- Two CV PDFs: `assets/doc/Italy/salvatore-dambrosio-cv.pdf`, `assets/doc/Switzerland/salvatore-dambrosio-cv.pdf`.
- Portrait: `assets/img/foto-CV.jpg`.
- Nine project screenshots in `assets/img/`, bound by CSS class rather than markup: `videogame-reviews-site.png`, `my-weather.png`, `spiderman-home.png`, `report-ingv.png`, `athletics.png`, `sensor-kit.png`, `intellicurtain.png`, `portfolio.png`, `tenzies-game.png`.
- Tech logos: `tailwind.svg`, `micropython.svg`, `java-spring.svg`, `postgresql.png`.

**Real contact details, live on the page:** Eboli (SA), Italy · +39 3384591601 · sd.io@hotmail.com · github.com/SDdev96 · linkedin.com/in/salvatore-d-ambrosio-2b6bb227a · plus Facebook and Instagram.

**Named employers and clients.** Scaling Parrots, Nexsoft, T30 Web Agency, and "Diversiamo" are real. A commented-out client block in `index.html` names Heychain (Casa Baglioni), Certyclick (Ferrari), CSA / Football Exchange (Juventus), Kiara Industries, and Martino Parisi. These are real relationships but are **deliberately hidden in the current build** — treat re-exposing them as a decision for Salvatore, not an improvement to make unasked.

**Absences future work must not fabricate:** no live demo URLs, no GitHub repo URLs wired into the project cards, no testimonials, no metrics, no client logos, no press, no graduation date or grade, and no education section content. Do not invent any of these to fill a layout.

## Product Principles

1. **Two outcomes, everything else supports them.** CV download and contact are the only success conditions. Any element that competes with them for the visitor's decision is in the wrong place.
2. **Range must stay verifiable.** Every technology shown traces to a named employer or a real project. Breadth is the asset only while it stays honest — never pad the stack.
3. **Survive the seconds-long scan.** A recruiter who reads nothing should still leave with the CV or a way to reach him. Depth for the technical evaluator layers underneath that, never in front of it.
4. **Personality is a feature, not noise.** The Kingdom Hearts quote, the videogames, the first-person warmth — these differentiate a portfolio in a category that defaults to interchangeable. Do not sand them off in the name of professionalism.
5. **No fabricated proof, ever.** Absent evidence stays absent. A placeholder must never be dressed as a real destination, and a missing demo is a link to remove, not a link to invent.

## Accessibility & Inclusion

No product-specific standard was established. Two facts constrain future work regardless: the existing build respects `prefers-reduced-motion` across every animation (CPB rings, AOS, Swiper autoplay, the pulse badge, the back-to-top button), and `index.css` sets `cursor: default` globally with `cursor: pointer` restored only for nav and links — so any new interactive element must be added there and must keep a visible `:focus-visible` ring.
