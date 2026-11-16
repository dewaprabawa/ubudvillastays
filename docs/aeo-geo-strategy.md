# AEO / GEO strategy — Ubud Villa Stays

Implemented in the repo on 16 November 2026: `llms.txt` and `llms-full.txt` cover every guide, including villa-vs-hotel and the new long-stay URL; the morning-routine guide no longer uses “private pool villa ubud” as its primary keyword; the homepage states both villas, guest counts, and promo rates; each guide shows a host byline, a formatted updated date, and three related-guide links; guides-index images have alt text; `next.config.ts` 308s the apex host to `https://www`. Still outside the repo: a Google Business Profile, and a live AI-citation retest. The HTTP apex hop (`http://` → `https://` on the bare domain, then `www`) is applied by the host before this redirect and will not collapse until the domain settings send port 80 straight to `https://www`.

Site: https://www.ubudvillastays.com  
Checked: 16 November 2026 against the live site and the Next.js source.  
Exact monthly search volumes and AI-answer citations were not measured. Tiers below come from the existing keyword plan and a live SERP spot-check. Do not treat them as Keyword Planner or rank-tracker numbers.

## 1. Current AI visibility

Not verified inside ChatGPT, Perplexity, Gemini, or Google AI Overviews. A web search for the brand name returns the homepage, both villa pages, and guides. A web search for “private pool villa ubud” returned hotel villa collections (Bisma Eight, Samsara Ubud, Kayumanis, Alaya) and one direct-book independent compound (JCM Villas). This site was not in that result set.

What that means: branded queries can find the site. The head commercial query is owned by larger lodging brands and Airbnb-style listings. Citation in AI answers for “best private pool villa in Ubud” is unlikely until those pages are more extractable and the entity is repeated on third-party sources.

## 2. Five-layer scorecard

| Layer | Score | Evidence |
| --- | --- | --- |
| Extractable structure | Partial | Guides open with takeaways, FAQs, and direct answers. Homepage H1 is “Private villas. Real Ubud days.” and does not state the head query. Guide templates link to villas and booking, not to sibling guides. |
| Citation worthiness | Partial | Real prices, address, map pin, and walk times are specific. No named author, no first-party dataset, no dated “last updated” line in the article UI beyond schema dates. |
| Structured data | Strong | Live homepage HTML includes JSON-LD. Villa pages use LodgingBusiness / VacationRental. Guide checked (`private-villa-vs-hotel-in-ubud`) includes FAQPage. Ratings in schema must stay tied to real review counts. |
| AI-readable access | Partial | `robots.txt` allows `*`, GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, and Google-Extended. Pages are server-rendered. `llms.txt` omits one live guide. `llms-full.txt` omits four. |
| Entity signals | Partial | Consistent NAP, coordinates, and Maps pin on site and in `llms.txt`. No Wikipedia / Wikidata requirement at this size. Off-site consensus (Google Business Profile, press, forums) was not audited. |

## 3. Priority queries

Cite-and-convert targets, in order:

1. private pool villa Ubud
2. ubud villa rental
3. 2 bedroom villa Ubud
4. 6 bedroom villa Ubud
5. family villa Ubud / group villa Ubud
6. ubud villa with rice field view
7. yoga retreat villa Ubud
8. tirta tawar ubud villa
9. best area to stay in Ubud
10. private villa vs hotel Ubud
11. romantic ubud villa
12. balinese cooking class with villa stay
13. why visit Ubud / is Ubud worth visiting
14. ubud vs canggu (where to stay)
15. 3 days in Ubud itinerary
16. where is Ubud
17. kecak dance Ubud
18. bali visa and tourist tax
19. ubud villa scams
20. long stay villa Ubud (no dedicated URL yet)

Skip beach and Canggu head terms as primary targets. Mention them only on the comparison guide.

## 4. Layer-by-layer plan

### Extractable structure

- Rewrite the homepage opening so the first sentences answer “private pool villas in Tirta Tawar, Ubud” with both villa names, guest counts, and promo rates. Keep the current headline tone if desired; put the factual answer in the support paragraph and a visible subheading.
- Give each commercial query one URL. `private pool villa ubud` is the primary keyword on both `/guides/private-pool-villa-ubud` and `/guides/ubud-private-pool-villa-mornings`. Keep it on the pool guide and the homepage. Retarget the mornings guide to the morning routine.
- Add a “Related guides” block on guide pages (3 links: one commercial, one place, one planning). The index already links every guide, so nothing is an orphan, but spokes do not reinforce each other.
- Guides index card images use empty `alt`. Use the guide title plus Tirta Tawar or Ubud.

### Citation worthiness

- Show `dateModified` on each guide.
- Add a short author line for Ubud Villa Stays (host on Jl. Tirta Tawar) without inventing credentials.
- Keep prices, walk times, and the shared map pin as the citable facts. Do not add awards or review scores that are not on the page.

### Structured data

- Leave FAQ and HowTo schema only on pages that show the same questions and steps.
- After any price change, update visible copy, Offers, `llms.txt`, and villa metadata together.

### AI-readable access

- Add the missing guide to `public/llms.txt`.
- Regenerate `public/llms-full.txt` so it includes:
  - `why-ubud-is-a-top-bali-destination`
  - `best-area-to-stay-in-ubud-for-a-villa`
  - `private-villa-vs-hotel-in-ubud`
  - `2br-vs-6br-villa-ubud`
- At the host, send `http://ubudvillastays.com` straight to `https://www.ubudvillastays.com` in one hop. Today it is `http` apex → `https` apex → `https` www.

### Entity signals

- One Google Business Profile for the Tirta Tawar address, with the same name, phone, and pin as the site.
- Third-party mentions (guest articles, local directories, Maps reviews) matter more for AI recommendations than another on-site listicle.

## 5. Implementation roadmap

| Order | Work | Why |
| --- | --- | --- |
| 1 | Sync `llms.txt` and `llms-full.txt` with all 29 guides | AI indexes are already allowed; they are just stale |
| 2 | One-hop canonical host redirect | Stops a two-step fetch on the insecure apex |
| 3 | Split the duplicated “private pool villa ubud” keyword | Stops two guides competing for the head term |
| 4 | Homepage answer block for the head terms | Money page should be extractable without opening a guide |
| 5 | Related-guide links on spokes | Builds the cluster inside 2 clicks |
| 6 | One new commercial guide only if a gap remains after 3–5: long-stay / 28+ nights on Sawah Retreat | Matches a real villa fact and a query with no URL |

## 6. Re-test

Quarterly, and after the homepage and keyword-ownership edits:

- Repeat the 20 queries in Google (AI Overview on or off), ChatGPT search, and Perplexity.
- Record cited domain only. Do not infer a citation from a traditional ranking.
- Re-fetch `/robots.txt`, `/sitemap.xml`, `/llms.txt`, and confirm guide count stays 29 in sitemap, llms, and `src/content/guides.ts`.

## Crawlability notes (same date)

- 35 sitemap URLs: home, `/guides`, 2 villas, 2 galleries, 29 guides. Unknown guide slugs return 404.
- Canonicals on home, `/guides`, both villas, and sampled guides point at the `www` URL without a trailing slash.
- Trailing slash on `/guides/` is one 308 to `/guides`.
- No redirect loops. No infinite scroll. Important URLs are 1–2 clicks from the homepage via the header and `/guides`.
- AI bots are allowed. Critical copy is in the initial HTML (homepage body checked: H1, Tirta Tawar, booking form, JSON-LD).
