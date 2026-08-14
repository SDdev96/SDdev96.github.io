---
name: Salvatore D'Ambrosio Portfolio
description: A bright, earnest single-page portfolio where progress fills as you scroll and blue marks the way forward.
colors:
  heart-magenta: "#e91e63"
  heart-magenta-deep: "#c2185b"
  heart-violet: "#673ab7"
  wayfinder-blue: "#0d6efd"
  ink: "#212529"
  paper: "#f8f9fa"
  surface-white: "#ffffff"
  muted-slate: "#6c757d"
  divider-mist: "#dee2e6"
  signal-cyan: "#0dcaf0"
  signal-amber: "#ffc107"
  signal-crimson: "#dc3545"
typography:
  display:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  headline:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "4.5rem"
    fontWeight: 300
    lineHeight: 1.2
    letterSpacing: "normal"
  title:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 300
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  sm: "0.25rem"
  md: "0.5rem"
  lg: "1rem"
  pill: "50rem"
  circle: "50%"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "3rem"
  xl: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.wayfinder-blue}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.sm}"
    padding: "0.25rem 0.5rem"
  button-outline-primary:
    backgroundColor: "transparent"
    textColor: "{colors.wayfinder-blue}"
    rounded: "{rounded.sm}"
    padding: "0.25rem 0.5rem"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.sm}"
    padding: "0.375rem 0.75rem"
  badge-tech:
    backgroundColor: "{colors.wayfinder-blue}"
    textColor: "{colors.wayfinder-blue}"
    rounded: "{rounded.pill}"
    padding: "0.35em 0.65em"
  badge-current-role:
    backgroundColor: "{colors.wayfinder-blue}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 1rem"
  card-project:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "1.5rem"
  panel-skills:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "3rem"
  back-to-top:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.circle}"
    height: "40px"
    width: "40px"
---

# Design System: Salvatore D'Ambrosio Portfolio

## Overview

**Creative North Star: "The Guiding Key"**

The name comes from the Kingdom Hearts line the hero actually carries — *"May your heart be your guiding key"* — and it describes the system's mechanics as precisely as its mood. This is a bright, light-surface world where the visitor is always being shown the way: blue marks every place you can act or every place you currently are, gradient rings fill as you scroll so progress is something you *watch* rather than read, and a slow pulse marks "you are here" on the one role that is current. Nothing hides. Nothing is coy.

The material is soft. Depth is built from paired light-and-dark shadows implying a light source above and to the left, never from borders — the skill dials are literal neumorphic objects, pillowy and pressable, and the cards float on diffuse shadow with `border-0` applied ten separate times to make sure no line interrupts the effect. Against that softness sits hard technical content: language proficiency bars, framework badges, blockchain and RAG work. That tension between soft physics and engineering substance is the visual signature, and it is what keeps an earnest personal site from reading as either sterile or twee.

Personality is a feature here, not a risk. The videogame quote, the magenta-to-violet gradient, the counting dials, the back-to-top button that stretches open and swallows its own arrow — these are the differentiators in a category where nearly every entry is interchangeable. The system is warm and a little game-like on purpose. What it is *not* is dark, brutalist, or minimal-to-the-point-of-anonymous; it does not use hairline dividers to organize space, and it does not treat restraint as a virtue in itself.

**Key Characteristics:**

- Light, airy surfaces — near-white paper (`#f8f9fa`) with pure white panels lifted on top
- Depth exclusively from light-source shadow; borders removed wherever they would compete
- Blue reserved for wayfinding: interaction, focus, and current state
- One authored gradient (magenta → violet) as the brand's emotional signature
- Native system typography, zero webfont requests, very wide weight range (300 → 700)
- Every animation opt-out via `prefers-reduced-motion`, without exception
- Generous vertical rhythm — sections breathe on `my-5 py-5` stacks

## Colors

A bright, high-key palette: a near-white ground, one saturated blue doing all the wayfinding, and a single authored gradient carrying the brand's warmth.

### Primary

- **Wayfinder Blue** (`#0d6efd`): The interaction color, and it means exactly one thing — *you can act on this, or you are here*. It carries nav links, the tech badges, the "Current Role" pill, the carousel arrows and active pagination bullet, the focus-visible ring, the section accent borders, and the pulse around the current job. It is never decorative, and the discipline is what makes it legible: when everything blue is either actionable or a position marker, the visitor learns the code in one scroll.

### Secondary

- **Heart Magenta** (`#e91e63`) and **Heart Violet** (`#673ab7`): The one gradient authored by hand rather than inherited, and the emotional counterweight to blue's utility. It sweeps magenta to violet across the soft-skill dial rings, and now also fills the CV download buttons and the Blockchain signature badge. It is deliberately **not** rationed — this is the brand's real accent, and extending it to CTAs and section accents is sanctioned.
- **Heart Magenta Deep** (`#c2185b`): The same hue one step deeper, used **wherever the gradient carries white text**. White on `#e91e63` measures only 4.35:1 and fails AA for normal text; on `#c2185b` it reaches 5.87:1. The bright value stays on the dial rings, which carry no text. Picking the wrong one of these two is an accessibility regression, not a stylistic variation.

### Tertiary

- **Signal Cyan** (`#0dcaf0`): Fills the primary language proficiency bars — the top-level skill readouts.
- **Signal Amber** (`#ffc107`): Fills the nested framework bars, one rung below the languages, and highlights the word "videogames" in the intro.
- **Signal Crimson** (`#dc3545`): Emphasis only, and rare — the Kingdom Hearts quote and the "Web Development & Design" phrase. Roughly two appearances on the page. Its scarcity is the point.

### Neutral

- **Ink** (`#212529`): Body text, the theme-color meta value, the dark CTA, and the back-to-top button. The darkest value in the system.
- **Paper** (`#f8f9fa`): The page ground — a warm near-white that lets pure-white panels read as lifted rather than merely present.
- **Surface White** (`#ffffff`): Panels and cards that sit above the ground. Also the light half of every neumorphic shadow pair, at 70% opacity.
- **Muted Slate** (`#6c757d`): Secondary and supporting text — the role subtitle, project descriptions, the footer rights line.
- **Divider Mist** (`#dee2e6`): Inactive carousel pagination bullets. Nearly the only place the system draws anything resembling a line.

### Named Rules

**The Wayfinding Rule.** Blue is reserved for interaction and current state. If an element is neither actionable nor a position marker, it is not blue. Adding blue for emphasis alone breaks the visitor's learned code and is the fastest way to make this page illegible.

**The Two-Voice Rule.** Blue is the system's utility voice; the Heart Gradient is its emotional one. Blue says *here is what you can do*. The gradient says *here is who this is*. Never use one to do the other's job — a gradient focus ring or a blue hero flourish inverts the whole scheme.

**The Ground-Panel Rule.** Content lives on white panels floating over the paper ground, never directly on the ground itself. The two-value separation (`#f8f9fa` under `#ffffff`) is what makes shadow read as elevation instead of as smudge.

## Typography

**Display Font:** Native system stack (`system-ui`, `-apple-system`, `Segoe UI`, `Roboto`, `Helvetica Neue`, Arial, sans-serif)
**Body Font:** Same native system stack
**Label/Mono Font:** None distinct

**Character:** The system font stack is a deliberate commitment, not an unexamined default. Zero webfont requests fit the no-build-step, CDN-only constraint and mean type paints on the first frame with no layout shift and no FOUT — on a page a recruiter may look at for eight seconds, that is real. The stack renders as San Francisco on Apple devices, Segoe on Windows, Roboto on Android, so the site speaks each visitor's native voice. Character comes from the extreme weight range instead of from a face: hairline 300 for long-form warmth against heavy 700 for names and titles, a contrast wide enough to build hierarchy without a single decorative font.

### Hierarchy

- **Display** (700, `5rem` / `display-1`): The name itself, once. The largest thing on the page, and the only element at this size.
- **Headline** (300–400, `4.5rem` / `display-2`, `display-3`): Job titles — "Computer Engineer" in the hero and each of the four experience headings. Light weight at enormous size is the system's most distinctive typographic move: authority through scale, not through weight.
- **Title** (700, `1.5rem` / `fs-4`, `h4`): Project card names and skill labels under the dials.
- **Body** (300, `1.25rem` / `fs-3`, `lead`): All prose — the intro, the experience descriptions. Light weight at generous size, which is what makes an earnest first-person voice read as warm rather than heavy.
- **Label** (600, `0.75rem` / badge text): Tech badges and the "Current Role" pill. The only small type in the system.

### Named Rules

**The Light-At-Scale Rule.** The bigger the type, the lighter it gets. `display-2` runs at weight 300; body copy runs at 300; only names, titles, and labels go bold. Setting a `display-*` heading in 700 outside the hero name breaks the page's voice and makes it shout.

**The One-Name Rule.** `display-1` appears exactly once, on Salvatore's name. Nothing else in the system may claim that size.

## Layout

Bootstrap's 12-column responsive grid with a single `768px` hinge, expressed through `container-lg` on content sections and `container-fluid` on the projects carousel so slides can bleed past the container edge.

**Vertical rhythm** is the system's most consistent spatial habit: every section opens with `my-5 py-5` (3rem margin plus 3rem padding, roughly `5rem` of combined breathing room), and experience blocks stack on `pb-5 mb-5`. Space is generous to the point of being a design position — the page is long and unhurried rather than dense.

**The 768px hinge** is where the design genuinely changes rather than merely reflowing:

- Text alignment flips from centered (mobile) to edge-aligned (desktop) via `text-md-start` / `text-md-end`. Experience entries alternate sides — Scaling Parrots and Tutoring hang left, Nexsoft and T30 hang right — creating a zigzag reading path that only exists above the hinge.
- Accent borders rotate axis with it: `border-md-start` / `border-md-end` draw a vertical rule on the appropriate side at desktop; below 768px that becomes `border-sm-bottom`, a horizontal rule underneath. Same accent, reoriented to the reading direction.
- The nav collapses to a hamburger; carousel arrows are hidden entirely, leaving swipe and pagination.

**Carousel slides** step down explicitly rather than fluidly: `400px` at desktop, `300px` under 768px, `260px` under 480px, with card images at `220px` / `200px` / `150px` tall across the same breaks.

### Named Rules

**The Alternating Margin Rule.** Above 768px, consecutive experience entries alternate left and right alignment with their accent border on the outer edge. Below it, everything centers and the border moves underneath. A new entry must continue the alternation or the zigzag reads as a mistake.

**The Breathing Room Rule.** Sections get `my-5 py-5`. Tightening a section to fit more above the fold contradicts the page's whole posture — this design would rather be scrolled than crammed.

## Elevation & Depth

**Depth comes from light, never from lines.** The system models a light source above and to the left, and every raised surface is described by a *pair* of shadows: a dark one below-right and a light white one above-left. That neumorphic pairing is what makes the skill dials read as physical objects rather than as drawn circles, and it is the reason `border-0` appears on ten separate cards — a border would flatten the illusion by asserting an edge the light hasn't earned.

Elevation is also a ranking system. The paper ground sits at zero; white panels lift on `shadow-lg`; the active carousel slide lifts furthest at `0 20px 40px` and scales to `1.05` while its neighbors drop to `0.7` opacity and `0.9` scale. Depth marks importance and focus simultaneously.

### Shadow Vocabulary

- **Dial outer** (`box-shadow: 6px 6px 10px -1px rgb(0 0 0 / 0.15), -6px -6px 10px -1px rgb(255 255 255 / 0.7)`): The raised neumorphic ring housing. The signature shadow of the entire system.
- **Dial inner** (`box-shadow: inset 4px 4px 6px -1px rgb(0 0 0 / 0.2), inset -4px -4px 6px -1px rgb(255 255 255 / 0.7), -0.5px -0.5px 0px rgb(255 255 255 / 1), 0.5px 0.5px 0px rgb(0 0 0 / 0.15), 0px 12px 10px -10px rgb(0 0 0 / 0.05)`): The pressed-in well at the dial's center, five layers deep — two inset shadows for the depression, two hairline offsets for the rim highlight, one ambient drop beneath.
- **Panel lift** (`shadow-lg`): White content panels, the hero portrait, project cards at rest.
- **Active slide** (`box-shadow: 0 20px 40px rgb(0 0 0 / 0.15)`): The centered carousel card. The highest elevation on the page.
- **Control float** (`box-shadow: 0 4px 15px rgb(0 0 0 / 0.1)`): Carousel arrow buttons floating over content.
- **Badge whisper** (`shadow-sm`): The "Current Role" pill only.
- **Attention pulse** (`box-shadow: 0 0 0 0 → 0 0 0 10px rgb(13 110 253 / 0.4 → 0)`): An expanding blue halo, 2s infinite, on the current role. Not depth — a temporal signal wearing depth's clothing. Under reduced motion it freezes as a static `0 0 0 3px` ring so the highlight survives without the loop.

### Named Rules

**The No-Border Rule.** Where a shadow describes an edge, a border must not also describe it. `border-0` is applied deliberately on every card in this system; restoring a border to "define" a shadowed surface breaks the light model.

**The Paired-Shadow Rule.** Neumorphic surfaces always carry both halves — dark below-right *and* white above-left. A single-sided shadow on a dial is a bug, not a variant; the effect collapses without its highlight.

## Shapes

The form language is soft and overwhelmingly circular. Corners are never sharp: `rounded-pill` appears 23 times (every badge), `rounded-circle` 16 times (the portrait, every social icon, both dial layers, the back-to-top button), `rounded-4` on project cards. The system has no square corner anywhere by choice.

Circles are load-bearing rather than stylistic. The hero portrait is circular, the dials are concentric circles with a `20px` stroke ring at `r=70`, social icons sit in circular hit areas, and the pulse propagates as an expanding ring. The recurring silhouette is a **ring around a center** — which is also, not incidentally, what a key's bow looks like.

Borders exist in exactly one role: the `2px` cyan accent rule beside experience entries, which rotates axis at the 768px hinge. That is the system's only structural line, and it is an accent, not a container.

### Named Rules

**The Ring Rule.** Circular geometry is the system's signature. New display elements should reach for a ring or pill before a rectangle, and any new rectangle needs a radius of at least `rounded-3` (`0.5rem`).

## Components

### Buttons

- **Shape:** Gently rounded (`0.25rem`) — the one place the system permits near-square corners, inherited from Bootstrap's button default.
- **Primary:** Wayfinder Blue fill, white text, small size (`btn-sm`) throughout the project cards.
- **Outline Primary:** Transparent with a blue rule and blue text — the paired secondary action on project cards.
- **Dark:** Ink fill (`#212529`) with white text, reserved for the hero's Contacts CTA. The only dark button on the page.
- **Hover / Focus:** Bootstrap's default darkening transition, plus the global `:focus-visible` ring — `3px solid #0d6efd` at `2px` offset, restored explicitly in `index.css` because the global reset would otherwise suppress it.
- **Dropdown:** The Download CV control is a `btn-group` with an outline-dark toggle opening a two-item locale menu (Italian CV / Swiss CV).

### Chips

- **Style:** Pill-shaped (`rounded-pill`) with Wayfinder Blue text over the same blue at 10% opacity (`bg-primary bg-opacity-10 text-primary`) — a tinted wash rather than a fill, so a dense row of badges stays quiet. No border.
- **Variants:** Blue-at-10% for current-role and project technologies; slate-at-25% (`bg-secondary bg-opacity-25 text-secondary`) for the past Nexsoft role, visually receding to mark it as history. The **Current Role** badge is the exception — a solid blue pill with white text and `shadow-sm`, absolutely positioned at the card's top-right on `translate-middle-y` so it straddles the edge.

### Cards / Containers

- **Corner Style:** `rounded-4` (`1rem`) on project cards; `rounded` (`0.25rem`) on the skills panel.
- **Background:** Surface White over the Paper ground.
- **Shadow Strategy:** `shadow-lg` at rest; the active carousel slide overrides to `0 20px 40px rgb(0 0 0 / 0.15)` and scales to `1.05`. See Elevation.
- **Border:** None. `border-0` explicitly, per The No-Border Rule.
- **Internal Padding:** `p-4` (`1.5rem`) on card bodies; `p-5` (`3rem`) on the skills panel.
- **Image:** A `200px` CSS background block (`220px` ≥1200px, `150px` ≤480px) with `background-size: cover`, bound by numbered class (`.project1`…`.project9`) rather than by markup.

### Navigation

- **Style:** Transparent navbar, no background of its own, sitting directly on the page ground. Links at `fs-4` with `px-3` spacing injected by inline script rather than markup.
- **States:** Bootstrap's default link treatment plus the global focus ring. Anchors scroll smoothly via `scroll-behavior: smooth`, downgraded to `auto` under reduced motion.
- **Mobile:** Collapses to a hamburger toggler below 768px, expanding to a centered stack.

### The Skill Dial (signature component)

The system's defining custom component, and the most intricate thing in the codebase. A nested `.cpb-skill > .cpb-outer > .cpb-inner > .cpb-number` stack builds a neumorphic dial from layered box-shadows — a raised `160px` housing with a pressed-in well at 75% scale — with a sibling `<svg><circle>` at `r=70` and `20px` stroke drawing the progress ring in the Heart Gradient, `stroke-linecap: round`.

Behavior is what makes it: an `IntersectionObserver` at `0.35` threshold starts a `requestAnimationFrame` count-up on a cubic ease-out (`1 - (1-t)³`, `1200ms` default) when the dial scrolls into view, and **rewinds it to zero when it leaves downward** so the animation replays on scroll-back. Under `prefers-reduced-motion` values snap to target instantly.

Two contracts future work must respect. The circumference lives in exactly one place — `--cpb-circumference` on `.cpb-skill` — and the JS reads it via `getComputedStyle`, so changing the radius means updating `--cpb-radius`, `--cpb-circumference`, and the SVG `r` together. And **every instance needs its own `<linearGradient>` id** (`GradientColor1`…`N`): ids are document-global, so a duplicate would silently make every ring on the page resolve to the first gradient.

### The Back-to-Top Button (signature component)

A `40px` ink circle fixed at `30px` from the bottom-right, hidden until the page scrolls past `1300px`. On hover or focus it morphs — widening to `100px`, softening from a circle to `10px` corners, sliding its arrow up and out of view (`translateY(-200%)`) while the label "Back to Top" rises into the vacated space.

The width transition runs through a **registered `@property --button-width`** (`syntax: "<length>"`) specifically so it interpolates as a paint rather than triggering layout reflow on every frame. Never revert this to `transition: width`. Both hover and `:focus-visible` trigger the full morph, so keyboard users get the identical affordance. All transitions are disabled under reduced motion.

### Progress Bars

Two-tier skill readouts. Primary language bars run `25px` tall in Signal Cyan with a percentage label; nested framework bars run `18px` in Signal Amber with a word instead of a number ("master", "advanced"). Both animate in on AOS `fade-right`. The in-progress Go bar uses Bootstrap's striped-animated variant with the label "in progress…". All carry proper `role="progressbar"` and `aria-valuenow` attributes.

## Do's and Don'ts

### Do:

- **Do** keep Wayfinder Blue (`#0d6efd`) for interaction and current state only, per The Wayfinding Rule.
- **Do** spread the Heart Gradient (`#e91e63` → `#673ab7`) into CTAs, hero, and section accents. It is the brand's real signature and is currently confined to four dials — expanding it is sanctioned, not a risk.
- **Do** build depth from paired light-and-dark shadows, and pass both halves to any new neumorphic surface.
- **Do** give every new animation a `prefers-reduced-motion` opt-out. Every single one in this system has one; that consistency is a commitment, not a coincidence.
- **Do** animate `transform` and `opacity` only. Where another property must animate, register it with `@property` as the back-to-top button does.
- **Do** add any new interactive element to the `cursor: pointer` list in `index.css` — the global reset sets `cursor: default` on everything, so a new button feels dead until it is listed there.
- **Do** set large headings light (300) and small labels bold (600–700), per The Light-At-Scale Rule.
- **Do** give each new skill dial a unique `<linearGradient>` id, and update `--cpb-radius`, `--cpb-circumference`, and the SVG `r` together when changing ring geometry.
- **Do** continue the left/right alternation when adding an experience entry.
- **Do** keep local CSS as overrides layered after Bootstrap's CDN stylesheet — load order is load-bearing, and Bootstrap's JS bundle must stay at the bottom of `<body>`.

### Don't:

- **Don't** add borders to shadowed surfaces. `border-0` is deliberate on ten cards; a border collapses the light model.
- **Don't** use a single-sided shadow on a neumorphic element. Without its white highlight the dial stops reading as an object.
- **Don't** introduce a webfont. Zero font requests is a recorded decision tied to the no-build-step constraint, and the native stack lets the page speak each platform's own voice.
- **Don't** set a `display-*` heading at weight 700 outside the hero name, and don't use `display-1` for anything but the name.
- **Don't** revert the back-to-top width animation to `transition: width`. The registered custom property exists specifically to avoid per-frame layout reflow.
- **Don't** use sharp corners. Nothing in this system has a square corner; new rectangles need `rounded-3` or softer.
- **Don't** introduce hairline dividers to organize space. Vertical rhythm and elevation do that work, and the only line in the system is the `2px` cyan experience accent.
- **Don't** tighten section spacing below `my-5 py-5` to fit more content above the fold.
- **Don't** spend Signal Crimson freely. It appears about twice on the page; its scarcity is what makes it land.
- **Don't** go dark-mode, brutalist, or minimal-anonymous. This is a bright, warm, earnest world, and its personality is the differentiator in a category of interchangeable portfolios.
