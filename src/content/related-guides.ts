import { getGuide, type Guide } from "@/content/guides";

/** One commercial URL, one place URL, one planning URL. Never the page itself. */
const RELATED_GUIDE_SLUGS: Record<string, [string, string, string]> = {
  "ubud-experiences-from-tirta-tawar": [
    "private-pool-villa-ubud",
    "tirta-tawar-ubud-villa-stay",
    "ubud-3-day-itinerary-tirta-tawar",
  ],
  "why-ubud-is-a-top-bali-destination": [
    "villa-ubud",
    "best-area-to-stay-in-ubud-for-a-villa",
    "visiting-ubud-for-travelers",
  ],
  "best-area-to-stay-in-ubud-for-a-villa": [
    "private-pool-villa-ubud",
    "tirta-tawar-ubud-villa-stay",
    "ubud-vs-canggu-seminyak-uluwatu",
  ],
  "private-villa-vs-hotel-in-ubud": [
    "private-pool-villa-ubud",
    "best-area-to-stay-in-ubud-for-a-villa",
    "visiting-ubud-for-travelers",
  ],
  "yoga-retreat-villa-stay-in-ubud": [
    "group-villa-ubud",
    "tirta-tawar-ubud-villa-stay",
    "ubud-3-day-itinerary-tirta-tawar",
  ],
  "2br-vs-6br-villa-ubud": [
    "villa-ubud",
    "tirta-tawar-ubud-villa-stay",
    "visiting-ubud-for-travelers",
  ],
  "tirta-tawar-rice-field-walk-ubud": [
    "group-villa-ubud",
    "where-is-ubud",
    "ubud-private-pool-villa-mornings",
  ],
  "shopping-near-tirta-tawar-ubud": [
    "villa-ubud",
    "tirta-tawar-ubud-villa-stay",
    "ubud-experiences-from-tirta-tawar",
  ],
  "where-is-ubud": [
    "ubud-villa-rental-guide",
    "best-area-to-stay-in-ubud-for-a-villa",
    "visiting-ubud-for-travelers",
  ],
  "what-people-do-in-ubud": [
    "balinese-cooking-class-ubud-villa-stay",
    "ubud-experiences-from-tirta-tawar",
    "ubud-3-day-itinerary-tirta-tawar",
  ],
  "bali-belly-ubud-travelers": [
    "villa-ubud",
    "tirta-tawar-ubud-villa-stay",
    "visiting-ubud-for-travelers",
  ],
  "visiting-ubud-for-travelers": [
    "ubud-villa-rental-guide",
    "where-is-ubud",
    "ubud-3-day-itinerary-tirta-tawar",
  ],
  "ubud-villa-scams-travelers-should-avoid": [
    "ubud-villa-rental-guide",
    "tirta-tawar-ubud-villa-stay",
    "safe-travel-ubud-avoid-scams",
  ],
  "safe-travel-ubud-avoid-scams": [
    "ubud-villa-rental-guide",
    "where-is-ubud",
    "ubud-villa-scams-travelers-should-avoid",
  ],
  "bali-travel-faq-for-first-timers": [
    "villa-ubud",
    "best-area-to-stay-in-ubud-for-a-villa",
    "bali-visa-and-tourist-tax",
  ],
  "bali-visa-and-tourist-tax": [
    "ubud-villa-rental-guide",
    "where-is-ubud",
    "visiting-ubud-for-travelers",
  ],
  "ubud-vs-canggu-seminyak-uluwatu": [
    "private-pool-villa-ubud",
    "best-area-to-stay-in-ubud-for-a-villa",
    "why-ubud-is-a-top-bali-destination",
  ],
  "scooter-vs-driver-bali-ubud": [
    "villa-ubud",
    "where-is-ubud",
    "visiting-ubud-for-travelers",
  ],
  "ubud-3-day-itinerary-tirta-tawar": [
    "private-pool-villa-ubud",
    "tirta-tawar-ubud-villa-stay",
    "kecak-dance-ubud-evening-guide",
  ],
  "kecak-dance-ubud-evening-guide": [
    "romantic-ubud-villa-getaway",
    "ubud-experiences-from-tirta-tawar",
    "ubud-3-day-itinerary-tirta-tawar",
  ],
  "romantic-ubud-villa-getaway": [
    "private-pool-villa-ubud",
    "tirta-tawar-ubud-villa-stay",
    "ubud-private-pool-villa-mornings",
  ],
  "family-holiday-ubud-villa": [
    "group-villa-ubud",
    "best-area-to-stay-in-ubud-for-a-villa",
    "ubud-3-day-itinerary-tirta-tawar",
  ],
  "ubud-private-pool-villa-mornings": [
    "private-pool-villa-ubud",
    "tirta-tawar-ubud-villa-stay",
    "ubud-3-day-itinerary-tirta-tawar",
  ],
  "balinese-cooking-class-ubud-villa-stay": [
    "villa-ubud",
    "ubud-experiences-from-tirta-tawar",
    "ubud-3-day-itinerary-tirta-tawar",
  ],
  "villa-ubud": [
    "private-pool-villa-ubud",
    "best-area-to-stay-in-ubud-for-a-villa",
    "why-ubud-is-a-top-bali-destination",
  ],
  "private-pool-villa-ubud": [
    "villa-ubud",
    "tirta-tawar-ubud-villa-stay",
    "ubud-private-pool-villa-mornings",
  ],
  "tirta-tawar-ubud-villa-stay": [
    "ubud-villa-rental-guide",
    "tirta-tawar-rice-field-walk-ubud",
    "ubud-experiences-from-tirta-tawar",
  ],
  "ubud-villa-rental-guide": [
    "private-pool-villa-ubud",
    "tirta-tawar-ubud-villa-stay",
    "ubud-villa-scams-travelers-should-avoid",
  ],
  "group-villa-ubud": [
    "long-stay-villa-ubud",
    "tirta-tawar-ubud-villa-stay",
    "ubud-3-day-itinerary-tirta-tawar",
  ],
  "long-stay-villa-ubud": [
    "group-villa-ubud",
    "tirta-tawar-ubud-villa-stay",
    "visiting-ubud-for-travelers",
  ],
};

const FALLBACK: [string, string, string] = [
  "private-pool-villa-ubud",
  "tirta-tawar-ubud-villa-stay",
  "ubud-3-day-itinerary-tirta-tawar",
];

export function getRelatedGuides(slug: string): Guide[] {
  const picked = RELATED_GUIDE_SLUGS[slug] ?? FALLBACK;
  return picked
    .filter((item) => item !== slug)
    .map((item) => getGuide(item))
    .filter((guide): guide is Guide => Boolean(guide));
}
