---
name: ubud-villa-seo
description: Runs SEO and GEO work for Ubud Villa Stays (ubudvillastays.com) — keyword plan, Next.js metadata, LodgingBusiness/VacationRental schema, guides, llms.txt, sitemap. Use when adding or editing villa pages, guides, metadata, structured data, or when the user asks for SEO, GEO, AEO, or ranking improvements on this site.
disable-model-invocation: true
---

# Ubud Villa Stays SEO / GEO

Project playbook for https://www.ubudvillastays.com (Next.js App Router). For deep technical checklists, also open matching skills under `.agents/skills/` (seo-technical, schema-markup, geo-content, nextjs-seo, etc.).

## Always read first

1. `/cursor/stores/self/docs/seo-geo-keyword-plan.md` (or Project Context copy) — intent clusters and target URLs
2. `/cursor/stores/self/preferences.md` — live prices, contact, shared Maps pin
3. Existing patterns in `src` / `app`: `site.ts`, `JsonLd`, villa pages, `/guides/*`, `sitemap`, `robots`, `llms.txt`

## Brand and conversion rules

- Brand: **Ubud Villa Stays**. Villas: **The Hideaway** (2BR), **Sawah Retreat** (6BR / group).
- Shared location: Tirta Tawar, Ubud — pin (-8.4831533, 115.2706967); Maps https://maps.app.goo.gl/5TpevFsUJeezD1gD8
- Primary booking CTA: WhatsApp +62 817 7572 3663 and site booking form (`#booking` / modal). Do **not** add Airbnb CTAs unless the user asks.
- Promo copy must match preferences (Hideaway / Sawah night rates + free cooking class **or** ricefield cycling+lunch). Do not invent prices, reviews, star ratings, or awards.

## Page jobs

| Surface | SEO job |
| --- | --- |
| `/` | Head terms: Ubud villa rental, private pool villa Ubud; both villas |
| `/villas/the-hideaway` | 2 bedroom villa Ubud; couple / small stay |
| `/villas/sawah-retreat` | 6 bedroom / family / yoga retreat / rice field view |
| `/guides/*` | Informational → commercial; FAQ where natural; links to villas + booking |
| `/gallery` | Visual proof; alt text with place + villa entities |

Stay Ubud / culture / wellness / rice-field focused. Skip broad Bali beach / Canggu volume keywords as primary targets.

## On-page checklist (every new or edited URL)

- [ ] Unique `title` + `description` (App Router `metadata` / `generateMetadata`)
- [ ] One clear H1; entities: Ubud, Bali, Tirta Tawar / villa name where relevant
- [ ] Canonical + Open Graph / Twitter images
- [ ] Internal links: home ↔ villas ↔ guides ↔ booking
- [ ] Image `alt` with place + subject (no keyword stuffing)
- [ ] CTA to WhatsApp / `#booking` (not Airbnb)

## Structured data

Prefer existing `JsonLd` helpers. Use only accurate types:

- Site / org: `LodgingBusiness` (or brand `Organization` where already used)
- Villa pages: `VacationRental` / lodging offer facts that match live copy
- Guides: `Article` + `BreadcrumbList`; add `FAQPage` or `HowTo` only when the page has matching visible Q&A or steps
- `Place` / geo coordinates for Tirta Tawar when location is claimed

Validate mentally against visible content — no schema for claims the page does not show.

## GEO / AEO

- Repeat real place names in titles, intros, and FAQ answers (Tirta Tawar, Kutuh Kaja, Gianyar, Ubud, Bali).
- Keep `llms.txt` and sitemap in sync when adding guides or villa URLs.
- Write guides that answer search questions in plain prose (first answer early); end with villa + WhatsApp path.

## New guide workflow

1. Pick a P0/P1 phrase from the keyword plan (or user topic); one primary intent per URL.
2. Slug under `/guides/`; metadata + Article (+ FAQ if Q&A blocks exist).
3. 1–2 links to the best-fit villa; one booking CTA.
4. Register in sitemap + `llms.txt` + any guides index.
5. Do not duplicate an existing guide — extend or differentiate.

## Out of scope unless asked

- Paid ads, GSC API setup, inventing backlinks
- Changing brand palette / redesign for “SEO”
- Reinstalling the full `.agents/skills` seoskills pack

## Done when

- Target URL(s) match the keyword plan intent
- Metadata + schema + internal links + booking CTA are correct
- Sitemap / `llms.txt` updated if URLs were added
- Prices and contact match `preferences.md`
