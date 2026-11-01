# Ubud Villa Stays — site plan

## Goal
Ship a polished single-villa rental marketing site for **Ubud Villa Stays**, inspired by the calm editorial rhythm of betterplace.cc (structure/feel only)—not a visual clone.

## Brand
- **Name:** Ubud Villa Stays (villa: *The Hideaway*)
- **Feel:** Tropical calm, modern Bali, quiet luxury—not resort brochure or dark-mode tech.
- **Palette:** Deep canopy green, soft mist sage, limestone white, warm teak accent, pool teal. No purple gradients; no cream + terracotta serif kit.
- **Type:** Fraunces (display/brand) + Plus Jakarta Sans (UI/body).
- **Logo:** Original SVG leaf/pool mark + wordmark.

## Content source
Airbnb listing [1429000075230755234](https://www.airbnb.co.id/rooms/1429000075230755234) — rewrite for originality. Key facts:
- 2BR / 2 baths / 4 guests, private pool, kitchen, Wi‑Fi, free parking, hot tub
- Tirta Tawar area, ~5 min drive / 15–20 min walk to central Ubud
- Near Neka Gallery & Peliatan temples; host Kadek (Superhost)
- Guest favorite · 4.97 · 64 reviews

## Information architecture (one page + light secondary)
1. **Hero** — full-bleed villa photo; brand-first; one headline; one line; WhatsApp + Airbnb CTAs
2. **Story** — why this hideaway
3. **Spaces** — bedrooms, living, pool/garden
4. **Amenities** — scannable list (not card grid clutter)
5. **Location** — Ubud / Bali GEO keywords + nearby cues
6. **Reviews snapshot** — rating signals without inventing quotes
7. **Reserve CTA** — WhatsApp primary (TODO number), Airbnb secondary
8. **Footer** — contact, links, legal stubs

## Stack
Next.js App Router + TypeScript + CSS Modules (or global CSS variables). `next/image`, Metadata API, `sitemap.ts`, `robots.ts`, JSON-LD.

## SEO / GEO checklist
- Title/description with Ubud + Bali villa rental intent
- Open Graph + Twitter cards
- JSON-LD: `LodgingBusiness` / `VacationRental` / `Place`
- Semantic landmarks (`header`, `main`, `nav`, `footer`, section headings)
- `sitemap.xml`, `robots.txt`
- Local keywords: Ubud, Tirta Tawar, Bali, private pool villa
- Optimized local images (WebP-friendly via next/image)

## Booking
- Primary: WhatsApp inquiry (placeholder `+62XXXXXXXXXXX` marked TODO)
- Secondary: Airbnb listing URL

## Open questions
- Exact WhatsApp number for host/ops
- Custom domain
- Confirm villa display name vs. legal/business name
- Whether breakfast / scooter / airport transfer should be promoted as paid extras
