# UX Strategy

## UX principle

The site should behave less like an accommodation listing and more like a short travel story with a clear commercial destination.

The experience has two jobs:

1. make the visitor want to be there
2. make the next step toward direct contact obvious and easy

Emotion comes first, then proof, then practical information, then action.

## Primary journey

```text
Entry
  -> emotional orientation
  -> sense of place
  -> cabin evaluation
  -> imagined experience
  -> host / origin story
  -> practical confidence
  -> availability enquiry
  -> WhatsApp conversation
```

A shorter returning-user path must also exist:

```text
Entry
  -> Check availability
  -> dates + guests
  -> WhatsApp
```

## Narrative sequence

### 1. Arrive

The hero introduces Brisas with a strong landscape-led image, location and a restrained primary CTA.

User question: **What is this place and why should I care?**

### 2. Slow down

A short editorial section establishes Villa Alpina and the feeling of leaving urban noise behind.

User question: **What will it feel like to stay here?**

### 3. Find the refuge

Show the cabin exterior and selected interiors. Explain capacity and essential comforts without turning the section into a marketplace listing.

User question: **Will the cabin actually work for my stay?**

### 4. Imagine the stay

Use the strongest experiential photography and short copy around creek, mountains, horses, walking, outdoor meals, stillness and open sky.

User question: **What would I actually do there?**

### 5. Give permission to do nothing

Counterbalance activities with stillness. Brisas should sell both exploration and rest.

User question: **Can this simply be a place to stop?**

### 6. Tell the human story

Introduce the host's long relationship with Villa Alpina and the origin of Brisas in a concise, grounded way.

User question: **Is there a real person and a real story behind this place?**

### 7. Remove uncertainty

Present amenities, arrival guidance, energy considerations, shopping distance, fire care and any other approved practical information.

User question: **What do I need to know before I commit?**

### 8. Prove and locate

Show attributable reviews, map context and existing external channels.

User question: **Can I trust this and where exactly am I going?**

### 9. Act

Present a clean availability form and a direct WhatsApp handoff.

User question: **How do I check if I can go?**

## Key user questions

Before acting, a visitor should be able to answer:

- What is Brisas de la Cayana?
- Where is it?
- What makes this place different from another cabin?
- What does the cabin look like?
- How many guests can stay? (must be confirmed before final publication)
- What amenities are included?
- What is the surrounding environment like?
- What can I do there?
- What practical constraints come with the remote location?
- How do I arrive?
- How do I check availability?
- Can I still use Booking.com or Airbnb if I prefer?

## Primary conversion

**Consultar disponibilidad**

The availability module collects:

- check-in date
- check-out date
- guest count

On submit, it creates a structured WhatsApp message such as:

```text
Hola, quería consultar disponibilidad en Brisas de la Cayana.

Llegada: [fecha]
Salida: [fecha]
Huéspedes: [número]
```

The copy should feel human and editable rather than like an automated checkout.

## CTA hierarchy

### Primary

- Consultar disponibilidad
- Consultar por WhatsApp

### Secondary

- Ver la cabaña
- Ver galería
- Cómo llegar

### Tertiary / alternative channel

- Ver en Airbnb
- Ver en Booking.com
- Instagram

OTA links should be available for confidence and preference, but they should not visually compete with the direct-contact CTA.

## CTA placement

Use the primary CTA at:

- hero
- after the cabin section
- after the practical-information section
- final booking block
- mobile sticky action when appropriate

Avoid placing a conversion button after every paragraph. The narrative needs breathing room.

## Trust signals

Use only verifiable and attributable signals:

- real property photography
- real location
- real external Booking.com / Airbnb presence
- real review excerpts or scores only when source and current value are verified
- clear host identity / story when approved
- transparent practical information
- direct WhatsApp contact
- Google Maps context

Do not fabricate scarcity, review counts, prices or testimonials.

## Mobile behavior

Most social traffic is expected to arrive on mobile, so mobile is a primary design surface rather than a reduced desktop version.

Priorities:

- full-bleed photography without unreadable text overlays
- comfortable reading measure
- large tap targets
- availability CTA always reachable
- date and guest fields usable with native controls
- no hover-dependent interactions
- gallery gestures should be optional, with accessible controls
- external links clearly identified
- WhatsApp handoff should require minimal typing

A restrained sticky bottom CTA may appear after the hero:

```text
Consultar disponibilidad
```

It should not cover content or compete with system navigation.

## Desktop behavior

Desktop should use generous whitespace and editorial image composition rather than filling every horizontal area with cards.

Possible patterns:

- single large landscape image
- asymmetric image + text pair
- two-image editorial spread
- full-width transition image
- large typographic pause between chapters

## Information architecture

Initial release can remain a single primary route:

```text
/
```

Anchor navigation:

```text
#cabaña
#experiencia
#historia
#galeria
#ubicacion
#disponibilidad
```

A dedicated gallery route can be added only if the final photo set justifies it.

## Navigation

Keep the header minimal:

```text
Brisas de la Cayana
Cabaña
Experiencia
Ubicación
[Consultar]
```

On mobile, reduce navigation complexity. The brand and primary CTA matter more than exposing every anchor.

## Integration boundary

### Demo behavior

The demo owns:

- storytelling
- content presentation
- gallery
- date / guest capture
- WhatsApp message generation
- links to current channels

### Production systems not yet known

The project must not assume a specific:

- PMS
- channel manager
- booking engine
- payment provider
- calendar synchronization method

If one exists, the direct-booking CTA can later hand off to or embed the appropriate system.

Until then, WhatsApp is the honest conversion endpoint.

## Error / edge states

The first version should handle:

- missing dates
- departure before arrival
- missing guest count
- unavailable or unconfirmed capacity constraints
- WhatsApp opening failure / desktop fallback
- external link opening
- image loading failures

No fake “room unavailable” state should be generated without a real availability source.

## Accessibility

Baseline requirements:

- semantic section hierarchy
- keyboard-accessible navigation and forms
- visible focus states
- labels for all form controls
- descriptive image alt text where the image conveys content
- decorative images use empty alt text
- sufficient text/background contrast
- no essential information encoded only by color
- reduced-motion support
- no auto-playing sound or intrusive media
