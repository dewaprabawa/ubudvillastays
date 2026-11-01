export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  datePublished: string;
  dateModified: string;
  readingMinutes: number;
  primaryKeyword: string;
  secondaryKeywords: string[];
  heroImage: string;
  relatedVillaSlugs: string[];
  faqs?: { question: string; answer: string }[];
  sections: GuideSection[];
};

export const guides: Guide[] = [
  {
    slug: "why-ubud-is-a-top-bali-destination",
    title: "Why Ubud Is a Top Bali Destination (And Worth the Stay)",
    description:
      "Discover why Ubud remains Bali’s cultural and wellness capital—rice terraces, temples, yoga, food, and cooler highland air—plus tips for booking a private pool villa nearby.",
    eyebrow: "Destination guide",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    readingMinutes: 8,
    primaryKeyword: "why visit ubud",
    secondaryKeywords: [
      "is ubud worth visiting",
      "ubud bali destination",
      "things to do in ubud",
    ],
    heroImage: "/images/villas/sawah-retreat/hero.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    faqs: [
      {
        question: "Is Ubud worth visiting on a Bali trip?",
        answer:
          "Yes. Ubud is Bali’s cultural and wellness heart—temples, rice terraces, art, yoga, and food—ideal for 3–5 nights before or after beach time in the south.",
      },
      {
        question: "How many nights should I stay in Ubud?",
        answer:
          "Most travelers are happiest with 3–5 nights: enough for Tegallalang, temples, a ridge walk, yoga or spa time, and unhurried villa mornings.",
      },
      {
        question: "Where should I stay in Ubud?",
        answer:
          "Choose a private pool villa near Tirta Tawar or central Ubud if you want quiet nights with easy access to cafés, galleries, and temples.",
      },
    ],
    sections: [
      {
        heading: "Ubud is Bali’s cultural and wellness heart",
        paragraphs: [
          "Beach towns deliver surf and nightlife. Ubud delivers something else: highland air, emerald rice landscapes, Hindu temples, art villages, and a wellness scene that has drawn travelers for decades. That mix is why Ubud consistently ranks among Bali’s most searched destinations for longer stays—and why a private villa here feels like a base, not just a bed.",
          "If you are asking whether Ubud is worth visiting, the short answer is yes—especially if you want culture, nature, and calm mornings more than beach clubs.",
        ],
      },
      {
        heading: "Rice terraces, jungles, and cooler weather",
        paragraphs: [
          "Ubud sits inland in Gianyar, surrounded by sawah (rice fields), river gorges, and forest. Tegallalang and nearby terraces show Bali’s traditional subak irrigation system in dramatic green steps. The climate is typically cooler and less sticky than Seminyak or Canggu, which makes daytime walks and evening pool time more comfortable.",
          "Guests searching for an Ubud villa rental often specifically want jungle, garden, or rice-field views. That preference is not a trend—it is the geography of this place.",
        ],
        bullets: [
          "Tegallalang and local rice walks for classic Bali scenery",
          "Campuhan Ridge and riverside paths for easy outdoor time",
          "Waterfalls and north-of-Ubud day trips within reach",
        ],
      },
      {
        heading: "Temples, art, and living culture",
        paragraphs: [
          "Ubud Palace, nightly dance performances, museums, and artisan villages keep Balinese arts visible in daily life. Sacred sites like Tirta Empul and Goa Gajah sit within easy day-trip range. Neka Art Gallery and the Peliatan temple area are especially convenient if you stay on Tirta Tawar street—close enough to explore without living on the busiest tourist lanes.",
        ],
      },
      {
        heading: "Yoga, spas, and slower travel",
        paragraphs: [
          "Ubud’s reputation for yoga, meditation, organic cafés, and spa culture is well earned. Whether you book a formal retreat or simply want quiet mornings by a private pool, the town supports a slower rhythm. Longer average stays (often 3–7 nights) make villa living especially practical: kitchen space, room to gather, and privacy after temple crowds.",
        ],
      },
      {
        heading: "Why a private pool villa fits Ubud",
        paragraphs: [
          "Hotels are convenient; a private pool villa in Ubud gives you a courtyard or garden to return to, flexible meal times, and space for family or friends. On Tirta Tawar, you sit minutes from central Ubud while keeping quieter nights—ideal for couples in a 2-bedroom hideaway or groups in a 6-bedroom rice-field villa.",
          "Ready to plan dates? Explore our villas or message us on WhatsApp—we will help match the right home to your group size.",
        ],
      },
    ],
  },
  {
    slug: "best-area-to-stay-in-ubud-for-a-villa",
    title: "Best Area to Stay in Ubud for a Private Villa",
    description:
      "Compare Ubud neighborhoods for villa stays—central walkability vs rice-field quiet—and why Tirta Tawar balances both for private pool villas.",
    eyebrow: "Where to stay",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    readingMinutes: 7,
    primaryKeyword: "best area to stay in ubud",
    secondaryKeywords: [
      "where to stay in ubud villa",
      "tirta tawar ubud",
      "ubud villa location",
    ],
    heroImage: "/images/villas/the-hideaway/hero.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    faqs: [
      {
        question: "What is the best area to stay in Ubud for a villa?",
        answer:
          "For most visitors, a villa near central Ubud or Tirta Tawar offers the best balance: short drives or walks to cafés and temples, with quieter residential streets than the absolute center.",
      },
      {
        question: "Is Tirta Tawar a good place to stay in Ubud?",
        answer:
          "Yes. Tirta Tawar sits close to central Ubud, galleries, and Peliatan temples, while staying residential enough for private pool villas and calmer evenings.",
      },
    ],
    sections: [
      {
        heading: "What “best area” really means in Ubud",
        paragraphs: [
          "Ubud is not one street—it is a cluster of villages and lanes. The best area to stay in Ubud depends on whether you prioritize walkability, rice-field views, wellness campuses, or absolute seclusion. For a private pool villa rental, the sweet spot is usually near enough to restaurants and galleries, far enough from scooter congestion at peak hours.",
        ],
      },
      {
        heading: "Central Ubud",
        paragraphs: [
          "Staying in the absolute center puts Monkey Forest Road, the market, and Palace performances at your door. The trade-off is noise, traffic, and less of the garden quiet many villa guests want. Great for short stays; less ideal if you came for stillness.",
        ],
      },
      {
        heading: "Tirta Tawar and near-center lanes",
        paragraphs: [
          "Tirta Tawar (including Kutuh Kaja) is one of the strongest villa locations for travelers who want both access and calm. Central Ubud is typically about 5–8 minutes by car or a longer pleasant walk. Neka Art Gallery and Peliatan temples sit nearby, with cafés and daily needs close at hand.",
          "Our villas—The Hideaway and Sawah Retreat—are based here for exactly that reason: cultural Ubud without living on the loudest strip.",
        ],
        bullets: [
          "Short drive to town, temples, and yoga studios",
          "Residential feel suited to private courtyards and pools",
          "Easy base for Tegallalang and north-of-Ubud day trips",
        ],
      },
      {
        heading: "Tegallalang, Sayan, and further out",
        paragraphs: [
          "Tegallalang rewards guests who want iconic terrace views and do not mind driving for dinner. Sayan offers river-valley drama and resort seclusion. Both can be magical—and both add transfer time for every café, dance performance, or cooking class in town. Choose them when scenery outweighs convenience.",
        ],
      },
      {
        heading: "How to choose for your group",
        paragraphs: [
          "Couples and small families often prefer a compact 2-bedroom courtyard villa near Tirta Tawar. Larger families, friend groups, and yoga retreats need more bedrooms and communal space—sometimes with rice-field outlooks. Match location first, then scale the villa to your guest count.",
        ],
      },
    ],
  },
  {
    slug: "private-villa-vs-hotel-in-ubud",
    title: "Private Villa vs Hotel in Ubud: Which Should You Book?",
    description:
      "Compare a private pool villa rental in Ubud with a hotel stay—privacy, space, kitchens, group travel, and when each option wins.",
    eyebrow: "Booking guide",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    readingMinutes: 6,
    primaryKeyword: "private villa vs hotel ubud",
    secondaryKeywords: [
      "ubud villa rental",
      "private pool villa ubud",
      "where to stay ubud family",
    ],
    heroImage: "/images/villas/the-hideaway/space-07.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    faqs: [
      {
        question: "Is a private villa better than a hotel in Ubud?",
        answer:
          "For privacy, kitchens, and groups, a private pool villa is usually better. Hotels win for full-service convenience and when you prefer on-site restaurants and front-desk logistics.",
      },
    ],
    sections: [
      {
        heading: "The case for a private pool villa",
        paragraphs: [
          "A villa gives you the house: living spaces, a kitchen, bedrooms that do not share a corridor with strangers, and—when you choose well—a private pool and garden. In Ubud, that privacy pairs beautifully with early temple mornings and late café dinners. You control the rhythm.",
          "Villa living also scales. Two travelers can take a courtyard hideaway; twelve can take over an entire 6-bedroom home for a reunion or retreat without negotiating hotel suite blocks.",
        ],
        bullets: [
          "Private pool and outdoor space",
          "Kitchen and dining for flexible meals",
          "Better value for families and friend groups",
          "Quieter nights on residential lanes like Tirta Tawar",
        ],
      },
      {
        heading: "When a hotel still makes sense",
        paragraphs: [
          "Choose a hotel if you want daily housekeeping as a full package, multiple restaurants on-site, or you are staying one or two nights between flights. Some travelers also prefer hotels for accessibility logistics. There is no wrong answer—only fit.",
        ],
      },
      {
        heading: "Hybrid approach many guests love",
        paragraphs: [
          "Stay in an Ubud private villa for the cultural core of the trip, then move south for beach days. That split keeps Ubud focused on temples, yoga, and rice landscapes—and keeps your villa nights unhurried.",
        ],
      },
      {
        heading: "Book the villa that matches your group",
        paragraphs: [
          "If you want a private pool villa in Ubud, start with guest count and mood: intimate courtyard (The Hideaway) or rice-field gathering house (Sawah Retreat). Message us on WhatsApp with dates and we will confirm availability paths via Airbnb or direct inquiry.",
        ],
      },
    ],
  },
  {
    slug: "yoga-retreat-villa-stay-in-ubud",
    title: "Planning a Yoga Retreat Villa Stay in Ubud",
    description:
      "How to plan a yoga or wellness retreat in an Ubud villa—space needs, rice-field calm, group logistics, and why a 6-bedroom private villa works.",
    eyebrow: "Wellness & retreats",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    readingMinutes: 7,
    primaryKeyword: "yoga retreat villa ubud",
    secondaryKeywords: [
      "ubud yoga retreat accommodation",
      "wellness villa ubud",
      "group villa ubud",
    ],
    heroImage: "/images/villas/sawah-retreat/space-05.jpg",
    relatedVillaSlugs: ["sawah-retreat"],
    faqs: [
      {
        question: "Can I host a yoga retreat in a private Ubud villa?",
        answer:
          "Yes—many groups prefer an entire villa for privacy, shared meals, and flexible schedule. Confirm guest count, quiet hours, and any extra services (massage, airport transfer) with the host in advance.",
      },
    ],
    sections: [
      {
        heading: "Why Ubud for yoga and wellness",
        paragraphs: [
          "Ubud’s wellness ecosystem—yoga shalas, healers, organic food, spas—grew because the landscape invites inward attention. Cooler air, green views, and temple culture create a backdrop that beach destinations rarely match. A villa stay lets your group hold that atmosphere privately between classes and excursions.",
        ],
      },
      {
        heading: "What your retreat villa needs",
        paragraphs: [
          "Look for enough bedrooms that teachers and guests are not overcrowded, outdoor space for morning movement, a kitchen for shared meals or catering, reliable Wi‑Fi for hybrid facilitators, and a location that is calm at night. Rice-field or garden views help the first and last hour of every day feel intentional.",
        ],
        bullets: [
          "En-suite bedrooms for privacy between sessions",
          "Pool or courtyard for recovery and informal connection",
          "Room for massage or treatment setups on request",
          "Proximity to central Ubud without street noise",
        ],
      },
      {
        heading: "Sawah Retreat as a group base",
        paragraphs: [
          "Sawah Retreat is our 6-bedroom private villa on Tirta Tawar with capacity for up to 12 guests, a private pool, open kitchen, and rice-field outlooks. Booking the entire property means no shared facilities with other travelers—useful for retreat schedules and group cohesion.",
          "Staff can assist with luggage on the quiet access lane; airport pickup and in-house massage can be arranged. Pair villa mornings with studio classes in town, or keep practice on-site if your facilitator prefers.",
        ],
      },
      {
        heading: "Practical planning tips",
        paragraphs: [
          "Share your guest list early, clarify quiet hours with neighbors in mind, and plan transfers for airport days. Peak months (July–August and year-end) book out for large villas—reserve ahead. For smaller teacher trainings or couple wellness escapes, The Hideaway’s 2-bedroom courtyard can be the quieter alternative.",
        ],
      },
    ],
  },
  {
    slug: "2br-vs-6br-villa-ubud",
    title: "2-Bedroom vs 6-Bedroom Villa in Ubud: How to Choose",
    description:
      "Decide between a 2BR private courtyard villa and a 6BR rice-field villa in Ubud—guest count, budget feel, and trip style compared.",
    eyebrow: "Villa comparison",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    readingMinutes: 5,
    primaryKeyword: "2 bedroom villa ubud",
    secondaryKeywords: [
      "6 bedroom villa ubud",
      "family villa ubud",
      "ubud villa rental",
    ],
    heroImage: "/images/villas/sawah-retreat/space-02.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    sections: [
      {
        heading: "Start with people, not photos",
        paragraphs: [
          "The right Ubud villa rental is the one that fits how you travel together. Couples and young families rarely need six bedrooms. Multi-generation trips and retreats rarely thrive in two. Use guest count and privacy needs as your first filter—then refine for pool, views, and walkability.",
        ],
      },
      {
        heading: "Choose The Hideaway (2 bedrooms) when…",
        paragraphs: [
          "You are two to four guests who want a private courtyard pool, modern-Bali design, and an easy stroll or short drive into central Ubud. The Hideaway is built for unhurried couple travel, friends’ weekends, and small family stays with daily housekeeping and optional breakfast.",
        ],
      },
      {
        heading: "Choose Sawah Retreat (6 bedrooms) when…",
        paragraphs: [
          "You need up to twelve guests under one roof, en-suite rooms for everyone, an open kitchen for shared meals, and rice-field calm for gatherings or yoga retreats. Sawah Retreat is an entire-villa booking—your group only—on the same Tirta Tawar corridor.",
        ],
      },
      {
        heading: "Still unsure?",
        paragraphs: [
          "Send dates, guest count, and trip purpose on WhatsApp. We will recommend the villa that fits—and point you to live Airbnb availability when you are ready to reserve.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}
