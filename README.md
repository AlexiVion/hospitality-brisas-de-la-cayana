# Brisas de la Cayana

**Hospitality Storytelling & Direct-Booking Prospect Demo — DEMO-002**

Brisas de la Cayana is a real accommodation in Villa Alpina, Córdoba. This repository contains a prospect demo created to explore how its existing photography, story, location, and booking channels can be transformed into a coherent owned web experience.

> This is not presented as paid client work. The business is real, but the website is currently a proposal/demo. No production booking integration, conversion lift, revenue impact, or client outcome is claimed unless it is later verified and documented.

## Project objective

Create a high-quality hospitality website that does more than list amenities. The experience should tell the story of the place, help visitors imagine themselves there, answer practical questions honestly, and guide them toward a direct availability enquiry.

The intended emotional sequence is:

```text
arrive
  -> discover
  -> imagine
  -> understand the cabin
  -> experience the place
  -> know the story
  -> trust
  -> enquire
```

## Core positioning

Brisas should not feel like a generic cabin listing or a luxury-hotel template.

The visual and verbal direction is:

- editorial
- natural
- warm
- quiet
- authentic
- mountain-led rather than building-led

The landscape, creek, weather, horses, paths, wood, mist, sun, and changing sky are part of the product rather than background decoration.

## Primary conversion

The first version is designed around **direct availability enquiries**.

The visitor chooses:

- arrival date
- departure date
- guest count

The interface then prepares a WhatsApp enquiry with those details. Booking.com and Airbnb remain secondary alternatives rather than the main CTA.

## Implemented page structure

The first release is a long-form storytelling landing page:

```text
Hero
  -> A place to slow down
  -> Arrival / road transition
  -> Your refuge in the sierras
  -> Here you come to...
  -> Or do nothing at all
  -> The story of Brisas
  -> Everything you need
  -> Before you arrive
  -> Editorial gallery
  -> Location
  -> External trust channels
  -> Availability enquiry
  -> Closing chapter
```

## Current visual state

The complete responsive layout and visual system are implemented, but original high-resolution owner photography has not yet been added to the repository.

The current build therefore uses intentional editorial photo placeholders that preserve the planned crops, proportions and narrative roles. These placeholders are temporary and should be replaced with approved original photographs before the demo is treated as visually final.

## Integration boundary

The demo does **not** pretend to provide:

- live inventory
- payment processing
- confirmed reservations
- PMS synchronization
- OTA synchronization
- a channel manager

If the accommodation already uses a booking engine, PMS, channel manager, or calendar synchronization layer, the production version can connect to that system after it is identified and validated.

## Implemented stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4 / custom editorial CSS
- structured WhatsApp availability flow
- responsive mobile / tablet / desktop layouts
- GitHub Actions production-build verification
- deployment target: ClickDialog infrastructure
- intended demo URL: `brisas-de-la-cayana.clickdialog.site`

## Documentation

- [`docs/BRIEF.md`](docs/BRIEF.md) — business problem, audience, objectives, scope and non-goals
- [`docs/UX.md`](docs/UX.md) — narrative journey, conversion logic and booking boundary
- [`docs/VISUAL-DIRECTION.md`](docs/VISUAL-DIRECTION.md) — visual system and art direction
- [`docs/PHOTO-DIRECTION.md`](docs/PHOTO-DIRECTION.md) — image roles and curation rules
- [`docs/COPY.md`](docs/COPY.md) — first-pass website copy
- [`docs/WIREFRAME.md`](docs/WIREFRAME.md) — section-by-section content architecture
- [`docs/IMPLEMENTATION.md`](docs/IMPLEMENTATION.md) — technical plan and deployment boundary
- [`docs/CASE-STUDY.md`](docs/CASE-STUDY.md) — honest portfolio narrative

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

## Project status

`building`

The site structure, responsive system, storytelling flow and direct WhatsApp conversion are implemented. The main remaining visual dependency is the approved original photography, followed by browser QA, deployment and final portfolio evidence.

## Registry

Permanent project ID: **DEMO-002**

Canonical metadata: [VionWorks Portfolio Registry](https://github.com/VionWorks/portfolio-registry/blob/main/projects/DEMO-002.yaml)
