# Implementation

## Stack

Planned first release:

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- native form controls for dates / guest count where appropriate
- optimized local images in `public/`
- deployment on ClickDialog infrastructure

The implementation should remain inspectable and lightweight. The project does not need a CMS, database, animation library, booking SDK or component framework unless a real requirement justifies one.

## Information architecture

Initial route structure:

```text
/
```

The first release is intentionally one long-form landing page.

Anchor structure:

```text
#cabaña
#experiencia
#historia
#galeria
#ubicacion
#disponibilidad
```

Optional later route:

```text
/galeria
```

Only add the gallery route if the final approved image set is large enough to justify it.

## Page sections

```text
Header
Hero
SlowDownSection
CabinSection
ExperienceSection
StillnessSection
StorySection
AmenitiesSection
BeforeYouArriveSection
GallerySection
LocationSection
TrustSection
AvailabilitySection
Footer
```

The actual code does not need one component file per section if that would create unnecessary abstraction. Extract a component when it improves readability, reuse or isolation.

## Component architecture

Likely reusable pieces:

```text
SiteHeader
SectionIntro
EditorialImage
ImagePair
AvailabilityForm
WhatsAppCTA
AmenityList
PracticalNote
GalleryGrid
ExternalChannelLinks
SiteFooter
```

Avoid generic design-system abstraction before the page proves it needs it.

## Content model

Most first-release content can be static and typed.

Suggested data groups:

```ts
property
amenities
practicalNotes
experienceMoments
galleryImages
externalChannels
reviews
```

All values referring to real business facts should come from approved / verified information. Unknown values such as final guest capacity should not be guessed.

## Photography

Final photography should be stored locally or served from a deliberate asset source with clear permission.

Preferred repository structure:

```text
public/
  images/
    hero/
    landscape/
    cabin/
    experience/
    details/
    practical/
    gallery/
```

Image filenames should be descriptive rather than preserving arbitrary social-download names.

Example:

```text
hero-cabin-mountain.webp
creek-stones.webp
deck-valley-view.webp
horseback-trail.webp
sunset-silhouette.webp
```

Use Next.js image optimization where appropriate and provide meaningful alt text only when the image carries information.

## Availability enquiry

The first release does not query inventory.

Client-side flow:

```text
arrival date
+ departure date
+ guests
        ↓
validation
        ↓
structured WhatsApp message
        ↓
wa.me / WhatsApp deep link
```

Validation rules:

- arrival required
- departure required
- departure must be after arrival
- guest count required
- do not enforce an unconfirmed maximum capacity in code

The generated message must remain readable if the user edits it before sending.

## WhatsApp boundary

Use the public business contact supplied for the prospect demo only in the site configuration layer rather than scattering it through components.

Example shape:

```ts
const contact = {
  whatsapp: "...",
  instagram: "...",
  booking: "...",
  airbnb: "...",
  maps: "...",
};
```

If the client later changes contact channels, the UI should not require structural changes.

## Booking-system boundary

Do not design the internal architecture around a guessed provider.

The availability CTA should have a replaceable boundary:

```text
AvailabilityForm
       ↓
BookingAction adapter
       ↓
WhatsApp (demo)
```

A production version could later replace the action with:

```text
booking engine URL
embedded widget
provider SDK
provider API
custom ClickDialog integration
```

without rewriting the narrative page.

## External channels

Existing OTA/social channels are secondary exits.

- Airbnb
- Booking.com
- Instagram
- Google Maps
- WhatsApp

Open third-party destinations in an intentional way and make the external nature of the action clear where useful.

## SEO

Baseline metadata:

- page title focused on Brisas de la Cayana + Villa Alpina
- concise description based only on verified property positioning
- canonical URL once deployed
- Open Graph title / description / image
- semantic headings
- descriptive image metadata
- local-business / lodging structured data only when values are verified

Do not invent prices, ratings or availability inside structured data.

## Performance

Targets for the portfolio/demo release:

- avoid shipping unnecessary client JavaScript
- lazy-load below-the-fold images
- reserve image dimensions to prevent layout shift
- use modern formats where practical
- keep hero asset visually strong but compressed responsibly
- load only required font weights
- avoid animation libraries for simple transitions

The image-heavy nature of the project makes media optimization more important than micro-optimizing ordinary text components.

## Accessibility

Implementation checks:

- semantic `header`, `main`, `section`, `footer`
- logical heading hierarchy
- keyboard-accessible form and navigation
- visible focus
- labels associated with inputs
- descriptive validation errors
- sufficient color contrast
- appropriate alt text
- reduced-motion handling
- buttons and links use correct elements
- gallery is usable without drag/swipe gestures

## Responsive strategy

### Mobile

- image-first storytelling
- short navigation
- strong but non-intrusive sticky CTA
- stacked editorial compositions
- generous touch targets

### Tablet

- preserve editorial whitespace
- use selected two-column compositions

### Desktop

- asymmetric layouts
- wide landscape media
- controlled reading widths
- generous section pacing

## Deployment

Target production/demo host:

```text
brisas-de-la-cayana.clickdialog.site
```

Target infrastructure:

```text
GitHub
  -> ClickDialog server
  -> Next.js build
  -> managed Node process/container
  -> reverse proxy
  -> HTTPS subdomain
```

Deployment should not depend on Vercel.

A later CI/CD workflow can deploy automatically after merge to `main`, but the first release can be deployed manually while the infrastructure pattern is validated.

## Environment / secrets

The initial version should require no secret API credentials.

If integrations are later added:

- keep credentials out of Git
- use server-side environment variables
- document only variable names, never values
- avoid exposing provider secrets to client components

## QA gate before publication

Before moving from `building` to `qa`:

- production build passes
- all links tested
- WhatsApp message tested on desktop and mobile
- date validation tested
- responsive review on common viewport sizes
- keyboard navigation reviewed
- images checked for quality and crop
- copy checked against known business facts
- no placeholder / invented values remain

Before `published`:

- public URL works over HTTPS
- owner-controlled assets are appropriate for the intended public use
- final screenshots captured
- case study updated with verifiable evidence
