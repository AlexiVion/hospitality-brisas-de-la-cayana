# Wireframe — Long-Form Landing Page

This wireframe describes content hierarchy and spatial rhythm before detailed UI implementation.

It is intentionally low-fidelity and should guide the build without locking the page into a generic template.

---

## 0. Global header

Desktop:

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│ Brisas de la Cayana        La cabaña  Experiencia  Historia  Ubicación     │
│                                                       [ Consultar ]         │
└─────────────────────────────────────────────────────────────────────────────┘
```

Mobile:

```text
┌──────────────────────────────┐
│ Brisas de la Cayana   [Menú] │
└──────────────────────────────┘
```

After the hero, a restrained sticky mobile CTA may appear:

```text
[ Consultar disponibilidad ]
```

---

## 1. Hero — Arrive

Full viewport / near-full viewport image.

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                  [ cabin in large mountain landscape ]                      │
│                                                                             │
│                  VILLA ALPINA · CÓRDOBA                                    │
│                                                                             │
│                  Un refugio entre las sierras,                              │
│                  el arroyo y el cielo abierto.                              │
│                                                                             │
│                  Un lugar para bajar el ritmo...                            │
│                                                                             │
│                  [ Consultar disponibilidad ]                               │
│                  Descubrir Brisas ↓                                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

Design note: the photograph should dominate. Do not cover the image with a large booking card.

---

## 2. Editorial pause

Warm-paper background.

```text
┌───────────────────────────────────────────────┐
│                                               │
│   Hay lugares a los que uno va para hacer    │
│   cosas. Y otros a los que uno va para       │
│   dejar de hacerlas.                          │
│                                               │
└───────────────────────────────────────────────┘
```

Large serif, narrow measure, lots of vertical space.

---

## 3. Un lugar para bajar el ritmo

Desktop asymmetric composition:

```text
┌──────────────────────────────┬──────────────────────────────────────────────┐
│                              │                                              │
│   VILLA ALPINA               │          [ wide landscape / creek ]          │
│                              │                                              │
│   Acá el tiempo              │                                              │
│   se siente distinto.        │                                              │
│                              │                                              │
│   Short body copy...         │                                              │
│                              │                                              │
└──────────────────────────────┴──────────────────────────────────────────────┘
```

Mobile: text, then image.

---

## 4. Arrival visual transition

Full-width road image.

Tiny caption only if needed:

```text
Mientras más te alejás del ruido, más cerca estás.
```

---

## 5. La cabaña

Section intro + two-image composition.

```text
LA CABAÑA

Simple, cálida y rodeada de naturaleza.

[ exterior large ]    [ deck / interior portrait ]

Short paragraph.

CAPACIDAD    DORMITORIO    COCINA    BAÑO
CONFIRMAR    CONFIRMAR     Equipada  Privado

[ Consultar disponibilidad ]
```

Avoid amenity cards here. This is about understanding the refuge.

---

## 6. Acá venís a...

Series of editorial moments rather than one feature grid.

Pattern A:

```text
[ large horse / trail image ]

Recorrer las sierras a caballo.
Short supporting line.
```

Pattern B:

```text
                       [ creek image ]
                       Acercarte al arroyo.
```

Pattern C:

```text
[ walking / mountain image ]    [ food / view image ]
Seguir un sendero.               Comer mirando las sierras.
```

Each moment should feel like a chapter, not a tile.

---

## 7. Stillness chapter

Use the outdoor-chair image if a clean original is available.

```text
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│                    [ two chairs facing nature ]                             │
│                                                                             │
│                    Sentarse también puede ser un plan.                      │
│                                                                             │
│                    Una silla. Algo para tomar.                              │
│                    El sonido del viento.                                    │
│                    Ningún lugar al que llegar.                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

This section should be visually sparse.

---

## 8. Story — Gustavo / origin

Warm background, human pace.

```text
┌───────────────────────────────────────────┬─────────────────────────────────┐
│                                           │                                 │
│   LA HISTORIA DE BRISAS                   │      [ contextual image ]       │
│                                           │                                 │
│   Un lugar elegido mucho antes            │                                 │
│   de ser un alojamiento.                  │                                 │
│                                           │                                 │
│   Story copy...                           │                                 │
│                                           │                                 │
│   No como un hotel.                       │                                 │
│   Como un lugar que valía la pena         │                                 │
│   compartir.                              │                                 │
└───────────────────────────────────────────┴─────────────────────────────────┘
```

Do not overuse a portrait if no strong / approved portrait exists. Landscape can carry the story.

---

## 9. Amenities — practical reset

Clean, high-legibility section.

```text
LO ESENCIAL

Todo lo que necesitás. Nada de más.

Cocina equipada      Wi‑Fi             Parrilla
Baño privado         Estacionamiento   Vista a las sierras
Espacio exterior     ...
```

Use simple rows / columns, not large cards.

---

## 10. Antes de venir

Four practical notes.

```text
LA MONTAÑA TIENE SUS TIEMPOS

Vení preparado para desconectarte.

┌────────────────────┐ ┌────────────────────┐
│ Llegá con luz      │ │ Traé lo necesario │
│ de día             │ │                    │
└────────────────────┘ └────────────────────┘

┌────────────────────┐ ┌────────────────────┐
│ Energía consciente│ │ Cuidemos el monte │
└────────────────────┘ └────────────────────┘
```

On mobile, stack vertically.

These are the only section elements that may reasonably use card-like grouping.

---

## 11. Gallery

Avoid a standard ecommerce grid.

Desktop editorial mosaic:

```text
[ large landscape                 ] [ portrait ]
[ portrait ] [ medium landscape                 ]
[ wide creek                                      ]
```

Initial inline gallery: roughly 8–12 images.

Optional CTA:

```text
[ Ver todas las fotos ]
```

Only if separate gallery view exists.

---

## 12. Location

Two-column layout:

```text
┌──────────────────────────────────┬──────────────────────────────────────────┐
│ VILLA ALPINA                     │                                          │
│                                  │              [ map ]                     │
│ Lo suficientemente lejos         │                                          │
│ del ruido.                       │                                          │
│                                  │                                          │
│ Short access / location copy.    │                                          │
│                                  │                                          │
│ [ Abrir en Google Maps ]         │                                          │
└──────────────────────────────────┴──────────────────────────────────────────┘
```

Do not expose a needlessly precise location if the business prefers arrival instructions after booking. Use the public map location supplied by the business.

---

## 13. Trust / reviews

Only render when final data is current and attributable.

Possible pattern:

```text
LO QUE CUENTAN QUIENES YA VINIERON

"Short verified excerpt..."
Source · platform

[ See more on Booking / Airbnb ]
```

Do not create fake testimonial cards to fill space.

---

## 14. Availability

Strong conversion block with a clean background and no distraction.

```text
TU PRÓXIMA PAUSA

¿Cuándo querés venir?

┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ Llegada      │ │ Salida       │ │ Huéspedes    │
│ [ date ]     │ │ [ date ]     │ │ [ number ]   │
└──────────────┘ └──────────────┘ └──────────────┘

[ Consultar disponibilidad por WhatsApp ]

Preferís una plataforma?
Airbnb · Booking.com
```

Mobile: fields stack; CTA full width.

---

## 15. Closing image

Full-width sunset / evening image.

```text
Quizás lo que necesitás está
un poco más lejos del ruido.

Brisas de la Cayana
Villa Alpina · Córdoba

[ Consultar disponibilidad ]
```

---

## 16. Footer

```text
Brisas de la Cayana
Villa Alpina · Córdoba

Instagram · WhatsApp · Airbnb · Booking.com · Google Maps

Prospect-demo disclosure while applicable.
```

---

# Responsive rhythm

## Desktop

Use a chapter-like rhythm:

```text
large image
   ↓
quiet text
   ↓
asymmetric composition
   ↓
full-width image
   ↓
practical information
```

## Mobile

Do not attempt to reproduce the desktop composition literally.

Use:

```text
image
text
space
image
text
space
```

Keep the narrative order intact and let photography remain large.

# Build priority

First build should focus on:

1. hero
2. narrative typography
3. image composition system
4. cabin section
5. experience / stillness chapters
6. availability CTA
7. practical sections
8. gallery
9. location / external links

Do not spend time on sophisticated animation before the static composition is excellent.
