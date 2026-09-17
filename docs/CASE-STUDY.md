# Portfolio Case Study

## Context

Brisas de la Cayana is a real accommodation in Villa Alpina, Córdoba. This project began as a **prospect demo** after the owner agreed to see a website proposal.

It must not be presented as paid client work unless the commercial relationship is later confirmed.

The business already had active channels such as Instagram, WhatsApp, Airbnb, Booking.com and Google Maps, but no strong owned website experience bringing the brand, photography, story and direct-contact path together.

## Problem

The property had strong raw material — location, photography, a real host story and an attractive mountain setting — but that material was fragmented across third-party platforms.

The challenge was not simply to make “a prettier listing.” It was to create an owned hospitality experience that:

- made the place desirable before listing features
- felt specific to Brisas rather than interchangeable with other cabins
- explained the remote mountain experience honestly
- supported direct contact without pretending to provide live booking infrastructure
- could later integrate with an existing booking system if the business already used one

## Strategy

The site was designed around a narrative progression rather than a traditional accommodation menu.

```text
Arrive
  -> discover
  -> imagine
  -> understand the cabin
  -> experience the place
  -> know the story
  -> trust
  -> enquire
```

The central positioning became:

**The landscape is the main character; the cabin is the refuge inside it.**

This influenced copy, photography selection, layout, conversion timing and technical scope.

## Solution

The implemented first version is a long-form hospitality landing page combining:

- landscape-led hero
- editorial storytelling
- cabin overview
- activity and stillness chapters
- host / origin story
- verified / conservative amenity presentation
- practical arrival guidance
- editorial gallery architecture
- location context
- external trust channels
- direct availability enquiry

The primary conversion is a structured WhatsApp enquiry containing dates and guest count.

Airbnb and Booking.com remain available as secondary options rather than becoming the site's main destination.

## What I built

Planning and design:

- commercial brief
- narrative UX strategy
- visual direction
- photography curation system
- full first-pass Spanish website copy
- section-by-section wireframe
- technical architecture
- booking-integration boundary
- portfolio metadata and registry entry

Implemented frontend:

- responsive Next.js 16 landing page
- React 19 + TypeScript
- Tailwind CSS 4 / custom editorial CSS
- mobile, tablet and desktop layouts
- structured WhatsApp availability form
- date and guest validation
- Airbnb / Booking.com / Instagram / Google Maps secondary links
- mobile sticky conversion CTA
- semantic page structure
- reduced-motion support
- production-build GitHub Actions workflow

## Photography status

The final original high-resolution owner photography has not yet been committed to the project.

The current build uses deliberate editorial placeholders that preserve the intended crops, proportions and narrative roles. They are implementation scaffolding, not fabricated representations of the real property.

The placeholders must be replaced with approved original Brisas photographs before the demo is considered visually final.

## Integration philosophy

The demo does not fabricate a booking engine.

No assumption is made about the property's PMS, channel manager, calendar synchronization or payment stack.

The first conversion endpoint is WhatsApp. If a real booking system is identified later, the booking action can be replaced without redesigning the storytelling layer.

## Role

Work performed in the project to date:

- business analysis
- hospitality positioning
- information architecture
- UX strategy
- conversion strategy
- copywriting
- visual direction
- photo curation planning
- wireframing
- frontend implementation
- integration design
- build verification

Pending:

- original-asset integration
- in-browser visual QA with real photography
- live deployment
- final screenshot production

## Technology

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- GitHub Actions
- planned ClickDialog deployment infrastructure

## Evidence

Repository:

`https://github.com/AlexiVion/hospitality-brisas-de-la-cayana`

Registry:

`https://github.com/VionWorks/portfolio-registry/blob/main/projects/DEMO-002.yaml`

Intended demo URL:

`https://brisas-de-la-cayana.clickdialog.site`

The live URL should not be cited as evidence until it is actually deployed and verified.

Verified engineering evidence:

- initial implementation merged to `main`
- repository production build workflow completed successfully

## Outcome

Current status: **building**.

The project now demonstrates the complete translation of a real hospitality prospect into a specific business brief, narrative system, responsive frontend and direct-contact conversion flow.

The main remaining dependency for a visually final demo is the approved original photography. After those assets are integrated, the project should move through browser/responsive QA and deployment before being marked `published`.

Do not claim conversion improvements, bookings, revenue or client satisfaction without evidence.
