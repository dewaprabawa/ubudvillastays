export type GuideFigure = {
  src: string;
  alt: string;
  caption?: string;
};

export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  image?: GuideFigure;
};

export type GuideHowToStep = {
  name: string;
  text: string;
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
  gallery?: GuideFigure[];
  /** GEO-friendly summary bullets shown under the intro */
  keyTakeaways?: string[];
  faqs?: { question: string; answer: string }[];
  /** Optional HowTo steps for richer schema (planning guides) */
  howTo?: {
    name: string;
    description: string;
    steps: GuideHowToStep[];
  };
  sections: GuideSection[];
};

export const guides: Guide[] = [
  {
    slug: "ubud-experiences-from-tirta-tawar",
    title: "Ubud Experiences from Tirta Tawar: Market, Kecak, Forest & Falls",
    description:
      "Why a Tirta Tawar villa stay is more than a bed—free Balinese cooking class on the rice terrace (or free cycling), five-minute walk to the market, Kecak nearby, Monkey Forest and waterfalls close by.",
    eyebrow: "Experience guide",
    datePublished: "2026-11-01",
    dateModified: "2026-11-03",
    readingMinutes: 7,
    primaryKeyword: "things to do near tirta tawar ubud",
    secondaryKeywords: [
      "kecak dance ubud",
      "ubud traditional market",
      "monkey forest ubud villa",
      "waterfall near ubud",
      "ubud vacation rental experience",
      "balinese cooking class ubud",
    ],
    heroImage: "/images/marketing/cooking-class-plates.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    gallery: [
      {
        src: "/images/marketing/cooking-class-plates.jpg",
        alt: "Guests with finished dishes from a Balinese cooking class near Ubud",
        caption: "Free rice-terrace cooking class included with promo villa stays.",
      },
      {
        src: "/images/marketing/ubud-local-market-produce.jpg",
        alt: "Fresh market produce for Balinese cooking near Ubud",
        caption: "Market ingredients — the same culture you meet in class.",
      },
      {
        src: "/images/marketing/kecak-dance-ubud.jpg",
        alt: "Kecak dance performance at a temple near Ubud, Bali",
        caption: "Kecak dance at a nearby temple — culture within a short ride of the villas.",
      },
    ],
    faqs: [
      {
        question: "How far is the local market from Tirta Tawar villas?",
        answer:
          "The local traditional market is about a five-minute walk from our Jl. Tirta Tawar villas—easy for morning produce runs without a scooter.",
      },
      {
        question: "Can I see a Kecak dance while staying in Tirta Tawar?",
        answer:
          "Yes. Kecak and temple performances are held at nearby temples, so culture is part of the neighborhood rhythm rather than a long day trip.",
      },
      {
        question: "Are Monkey Forest and waterfalls close to Tirta Tawar?",
        answer:
          "Ubud Monkey Forest and popular north-of-Ubud waterfalls are an easy base from Tirta Tawar—close enough for half-day outings while keeping quiet villa nights.",
      },
    ],
    sections: [
      {
        heading: "A villa stay should unlock the place",
        paragraphs: [
          "Many travelers book Ubud for temples, rice landscapes, and slower mornings—then end up in a room that could be anywhere. A private pool villa on Jl. Tirta Tawar is meant to reverse that: you sleep somewhere calm, then step into market life, temple dance, forest paths, and waterfall days without long transfers every morning.",
          "That is the commercial promise in plain language: more experience, not just a bed. Holiday guests and longer stays both benefit when the neighborhood does half the work. For the green lanes outside the gate, see our Tirta Tawar rice field walk; for boutiques and market runs, see shopping near Tirta Tawar.",
        ],
      },
      {
        heading: "Five minutes to the local traditional market",
        paragraphs: [
          "From our Tirta Tawar villas, the local traditional market is roughly a five-minute walk. You can buy fruit, flowers for offerings, and everyday supplies the way locals do—without fighting central-Ubud parking or tourist markups on every aisle.",
          "For couples in The Hideaway or groups at Sawah Retreat, that short walk turns breakfast into a small ritual and keeps the kitchen useful instead of decorative.",
        ],
        image: {
          src: "/images/marketing/ubud-art-market.jpg",
          alt: "Ubud traditional art market stalls under colorful umbrellas",
          caption: "Ubud market mornings under colorful umbrellas — a short walk from the villas.",
        },
      },
      {
        heading: "Kecak dance at the nearest temple",
        paragraphs: [
          "Ubud’s Kecak performances are one of Bali’s most searched cultural experiences—the chanting circle, firelight, and Ramayana story told through movement. Staying near Tirta Tawar puts you close to temple schedules in the Peliatan and central Ubud orbit, so an evening show is a short ride or stroll, not a logistics project.",
          "Come home to a private pool afterward. That contrast—public ceremony, private courtyard—is why villa living fits cultural Ubud better than a corridor hotel room.",
        ],
        image: {
          src: "/images/marketing/kecak-dance-ubud.jpg",
          alt: "Kecak dance performance at a temple near Ubud, Bali",
          caption: "Evening Kecak near Ubud — culture close to Tirta Tawar.",
        },
      },
      {
        heading: "Monkey Forest, walks, and waterfalls nearby",
        paragraphs: [
          "Ubud Monkey Forest sits within easy reach of Tirta Tawar, along with Campuhan-style ridge and riverside walks. North of town, waterfalls make classic half-day trips when you want jungle air and a cool plunge.",
          "Because the villas sit between residential quiet and town access, you can stack a forest morning and a café afternoon without relocating hotels. Central Ubud is typically about 5–8 minutes by car, or a longer pleasant walk.",
        ],
        image: {
          src: "/images/marketing/monkey-forest-ubud.jpg",
          alt: "Macaques at Ubud Monkey Forest",
          caption: "Monkey Forest macaques — nature without giving up town access.",
        },
        bullets: [
          "Local traditional market ~5 minutes on foot",
          "Temple Kecak and ceremonies nearby",
          "Monkey Forest and ridge walks for green days",
          "Waterfalls north of Ubud for easy outings",
        ],
      },
      {
        heading: "Holiday stays, longer stays, and free extras",
        paragraphs: [
          "Whether you book a short holiday or a longer investment-friendly stay, both villas are set up for living: private pools, kitchens, fast Wi‑Fi, parking, and free extras hotels usually charge for. The standout included activity is a Balinese cooking class on the rice terrace — or choose free rice-field cycling with lunch.",
          "The Hideaway currently offers from Rp 3.9 juta per night, and Sawah Retreat from Rp 6 juta per night for groups — both with your pick of one free activity during the stay on Jl. Tirta Tawar. Full detail: Balinese cooking class + villa stay guide.",
          "Use the villa checkout booking form at https://www.ubudvillastays.com/#booking with your dates and guest count — we confirm availability on WhatsApp for either villa offer.",
        ],
      },
    ],
  },
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
          "Ubud Palace, Kecak dance at nearby temples, museums, and artisan villages keep Balinese arts visible in daily life. Sacred sites like Tirta Empul and Goa Gajah sit within easy day-trip range. Neka Art Gallery and the Peliatan temple area are especially convenient if you stay on Jl. Tirta Tawar—close enough to explore without living on the busiest tourist lanes. A five-minute walk to the local traditional market makes everyday culture part of the stay, not a separate tour.",
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
          "Ready to plan dates? Open https://www.ubudvillastays.com/#booking with your date range and guest count — we confirm on WhatsApp. For a map-first answer, read where is Ubud; for day ideas, read what people do in Ubud.",
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
          "If you want a private pool villa in Ubud, start with guest count and mood: intimate courtyard (The Hideaway) or rice-field gathering house (Sawah Retreat). Open the booking form with your dates and guest count — we confirm availability on WhatsApp.",
        ],
      },
    ],
  },
  {
    slug: "yoga-retreat-villa-stay-in-ubud",
    title: "Yoga Retreat in Ubud: Best Villa Base, Schedule & How to Book",
    description:
      "Yoga retreat in Ubud SEO/GEO guide—why Gianyar highlands fit wellness, Tirta Tawar villa specs (Sawah Retreat up to 12 / Hideaway 2BR), sample schedule, GEO map facts, and booking via /#booking.",
    eyebrow: "Wellness & retreats",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    readingMinutes: 11,
    primaryKeyword: "yoga retreat ubud",
    secondaryKeywords: [
      "yoga retreat in ubud",
      "yoga retreat villa ubud",
      "ubud yoga retreat accommodation",
      "best villa for yoga retreat ubud",
      "wellness villa ubud",
      "group yoga retreat bali",
      "tirta tawar yoga villa",
      "private yoga retreat ubud",
    ],
    heroImage: "/images/villas/sawah-retreat/space-05.jpg",
    relatedVillaSlugs: ["sawah-retreat", "the-hideaway"],
    gallery: [
      {
        src: "/images/villas/sawah-retreat/space-05.jpg",
        alt: "Open living space at Sawah Retreat suitable for group gatherings in Ubud",
        caption: "Shared living space — useful between practice blocks.",
      },
      {
        src: "/images/villas/sawah-retreat/space-01.jpg",
        alt: "Sawah Retreat private pool and outdoor area in Tirta Tawar, Ubud",
        caption: "Private pool for recovery between sessions.",
      },
      {
        src: "/images/marketing/tirta-tawar-rice-path-ubud.jpg",
        alt: "Rice field path near Tirta Tawar villas in Ubud",
        caption: "Quiet sawah lanes outside the gate for morning walks.",
      },
      {
        src: "/images/marketing/cooking-class-ricefield.jpg",
        alt: "Balinese cooking class overlooking rice terraces near Ubud",
        caption: "Optional free cooking class during promo villa stays.",
      },
    ],
    keyTakeaways: [
      "A yoga retreat in Ubud works because the town is Bali’s wellness highland—studios, spas, organic food, temples, and cooler air than beach belts.",
      "GEO base: Jl. Tirta Tawar, Kabupaten Gianyar, Ubud ≈ -8.48315, 115.27070 — about 5–8 minutes to central Ubud; market ~5 minutes on foot.",
      "Sawah Retreat (6 en-suite BR, up to 12, private pool, kitchen, rice-field outlooks) fits group retreats; The Hideaway (2BR) fits couples or small teacher stays.",
      "Typical day: sunrise practice → workshop → pool lunch → optional culture → evening yin → quiet hours 23:00–07:00.",
      "Book at https://www.ubudvillastays.com/#booking with dates, guest count, and retreat notes — confirm on WhatsApp +62 817 7572 3663.",
    ],
    howTo: {
      name: "How to book a yoga retreat villa stay in Ubud",
      description:
        "Plan guest count, pick Tirta Tawar villa size, submit dates on the official booking form, and confirm on WhatsApp.",
      steps: [
        {
          name: "Decide group size and dates",
          text: "Count teachers plus guests. Groups up to 12 suit Sawah Retreat; 1–4 guests often fit The Hideaway. Prefer shoulder months if peak July–August is full.",
        },
        {
          name: "Match the villa to the program",
          text: "Need en-suite rooms, kitchen, pool, and quiet nights for shared meals and on-site practice? Choose Sawah Retreat on Jl. Tirta Tawar. Prefer an intimate courtyard? Choose The Hideaway.",
        },
        {
          name: "Submit the booking form",
          text: "Open https://www.ubudvillastays.com/#booking — enter villa, check-in/out, number of persons, and retreat details (airport times, massage, free activity pick).",
        },
        {
          name: "Confirm on WhatsApp",
          text: "Continue only to the published number +62 817 7572 3663 to confirm availability, transfers, and house rules before payment instructions.",
        },
      ],
    },
    faqs: [
      {
        question: "Why choose a yoga retreat in Ubud?",
        answer:
          "Ubud is Bali’s cultural and wellness highland in Gianyar Regency—cooler than Seminyak or Canggu, with yoga studios, spas, organic cafés, temples, and rice-field calm that support multi-day practice.",
      },
      {
        question: "Can I host a yoga retreat in a private Ubud villa?",
        answer:
          "Yes. Facilitators often prefer an entire villa for privacy, shared meals, and flexible schedules. Confirm guest count, quiet hours (23:00–07:00 at Sawah Retreat), and extras like massage or airport transfer when you book.",
      },
      {
        question: "What is the best villa for a group yoga retreat in Ubud?",
        answer:
          "Sawah Retreat offers six en-suite bedrooms for up to 12 guests, a private pool, open kitchen, and rice-field outlooks on Jl. Tirta Tawar—about 5–8 minutes from central Ubud.",
      },
      {
        question: "Where is the yoga retreat villa located?",
        answer:
          "Our villas sit on Jl. Tirta Tawar, Kabupaten Gianyar, Ubud, Bali (map pin approximately -8.4831533, 115.2706967). The local market is about a five-minute walk.",
      },
      {
        question: "How much does a yoga retreat villa stay cost?",
        answer:
          "Promo rates start from Rp 6 juta / night for Sawah Retreat and Rp 3.9 juta / night for The Hideaway, with one free activity included during the stay. Final quotes depend on dates and guest count—confirm via the booking form.",
      },
      {
        question: "How do I book a yoga retreat villa stay?",
        answer:
          "Use https://www.ubudvillastays.com/#booking with your date range, number of persons, and retreat details. We continue on WhatsApp (+62 817 7572 3663) to confirm availability.",
      },
    ],
    sections: [
      {
        heading: "Yoga retreat in Ubud — why this destination ranks",
        paragraphs: [
          "A yoga retreat in Ubud works because the destination already runs on wellness rhythm: morning classes, temple quiet, organic menus, and green views. Unlike beach-party belts, Gianyar’s inland highlands reward inward schedules—practice, rest, simple food, optional culture.",
          "Searchers asking for a “yoga retreat in Ubud” usually want three answers at once: why Ubud, where to sleep as a group, and how to book without scam risk. This guide covers all three with Tirta Tawar villa facts you can cite.",
        ],
      },
      {
        heading: "GEO snapshot: Tirta Tawar wellness base",
        paragraphs: [
          "Ubud Villa Stays hosts retreats from Jl. Tirta Tawar, Kabupaten Gianyar, Bali—coordinates about -8.4831533, 115.2706967 (Google Maps share: https://maps.app.goo.gl/5TpevFsUJeezD1gD8). Central Ubud is typically 5–8 minutes by car; the traditional market is about five minutes on foot.",
          "That GEO position matters for facilitators: studios and cafés stay reachable, while evenings remain residential—better for early lights-out than Monkey Forest Road.",
        ],
        bullets: [
          "Area: Tirta Tawar · City: Ubud · Regency: Gianyar · Island: Bali · Country: Indonesia",
          "Drive to center: ~5–8 minutes",
          "Walk to local market: ~5 minutes",
          "Nearby: Peliatan temples, Monkey Forest, north-of-Ubud day trips",
        ],
        image: {
          src: "/images/marketing/tirta-tawar-rice-path-ubud.jpg",
          alt: "Stone and grass rice field path on Tirta Tawar for morning yoga retreat walks",
          caption:
            "Tirta Tawar rice-path mornings — quiet movement before class.",
        },
      },
      {
        heading: "What your retreat villa needs",
        paragraphs: [
          "Look for enough bedrooms that teachers and guests are not overcrowded, outdoor space for morning movement, a kitchen for shared meals or catering, reliable Wi‑Fi for hybrid facilitators, and a location that is calm at night. Rice-field or garden views help the first and last hour of every day feel intentional.",
        ],
        bullets: [
          "En-suite bedrooms for privacy between sessions",
          "Pool or courtyard for recovery and informal connection",
          "Kitchen for vegetarian / shared meal prep",
          "Room for massage or treatment setups on request",
          "Quiet hours compatible with early practice",
        ],
      },
      {
        heading: "Sawah Retreat vs The Hideaway for yoga groups",
        paragraphs: [
          "Sawah Retreat is our 6-bedroom private villa on Tirta Tawar for up to 12 guests—private pool, open kitchen, rice-field outlooks, entire-home booking so your retreat is not sharing facilities with strangers. Promo from Rp 6 juta / night with one free activity (rice-field cycling or cooking class) during the stay.",
          "The Hideaway is the 2-bedroom courtyard pool option (promo from Rp 3.9 juta / night) for couples, duo facilitators, or micro-retreats that still want Tirta Tawar access without a large house.",
        ],
        image: {
          src: "/images/villas/sawah-retreat/space-01.jpg",
          alt: "Private pool at Sawah Retreat yoga retreat villa in Ubud",
          caption: "Sawah Retreat pool — recovery space between practice blocks.",
        },
      },
      {
        heading: "Sample yoga retreat schedule from Tirta Tawar",
        paragraphs: [
          "Sunrise movement or meditation by the pool or sawah edge. Mid-morning deep practice or workshop block. Midday recovery and vegetarian-friendly lunch. Optional afternoon spa, market walk, or temple visit. Evening yin or circle, then quiet hours (23:00–07:00 on Sawah house rules).",
          "Airport day: private transfer from Ngurah Rai (DPS) usually ~1–1.5 hours. Soft landing with fruit, orientation, and lights-out beats stacking a full workshop on arrival night.",
        ],
        bullets: [
          "Days 1 & last: transfer buffers",
          "Core days: 2 practice blocks + recovery",
          "Culture: one Kecak or temple evening max per two days",
          "Optional free activity slot during the stay",
        ],
      },
      {
        heading: "How to book (official path only)",
        paragraphs: [
          "Peak months (July–August and year-end) fill large villas early—share guest list and schedule outline when you inquire. Open the booking form with date range, number of persons, and retreat notes, then continue on WhatsApp +62 817 7572 3663 (published on ubudvillastays.com).",
          "Ignore lookalike chats that are not tied to our domain. Read the villa scam awareness guide if you are comparing multiple Ubud hosts.",
        ],
      },
      {
        heading: "Keep planning your Ubud wellness trip",
        paragraphs: [
          "Also read: visiting Ubud for travelers, where is Ubud, what people do in Ubud, and Bali belly tips so practice days stay paced and practical.",
          "Ready now? Start at the booking form — Check availability — and tell us it is a yoga retreat so we can match Sawah Retreat or The Hideaway to your headcount.",
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
          "Send dates, guest count, and trip purpose through https://www.ubudvillastays.com/#booking — we confirm availability on WhatsApp and recommend The Hideaway or Sawah Retreat.",
        ],
      },
    ],
  },
  {
    slug: "tirta-tawar-rice-field-walk-ubud",
    title: "Tirta Tawar Rice Field Walk: Quiet Lanes Near Ubud Villas",
    description:
      "Walk Jl. Tirta Tawar’s stone-and-grass lanes beside flooded sawah and palms—why this quiet Ubud corridor suits private pool villa stays and morning strolls.",
    eyebrow: "Neighborhood guide",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    readingMinutes: 8,
    primaryKeyword: "tirta tawar rice fields ubud",
    secondaryKeywords: [
      "jl tirta tawar ubud",
      "rice field walk ubud",
      "quiet lanes ubud villa",
      "sawah near ubud",
      "tirta tawar neighborhood",
    ],
    heroImage: "/images/marketing/tirta-tawar-rice-path-ubud.jpg",
    relatedVillaSlugs: ["sawah-retreat", "the-hideaway"],
    keyTakeaways: [
      "Jl. Tirta Tawar sits between residential quiet and central Ubud access—about 5–8 minutes by car to town.",
      "Stone-and-grass villa lanes open onto flooded rice fields (sawah) framed by coconut palms.",
      "Morning walks here feel private: hedges, shaded paths, and fewer scooters than Monkey Forest Road.",
      "Sawah Retreat and The Hideaway use this corridor so green views sit outside the gate, not a day trip away.",
      "Pair a rice-path stroll with market mornings, Kecak evenings, and villa pool time.",
    ],
    faqs: [
      {
        question: "Where is Tirta Tawar relative to central Ubud?",
        answer:
          "Jl. Tirta Tawar is in Kabupaten Gianyar, Ubud, Bali—typically about 5–8 minutes by car from central Ubud, or a longer walk if you prefer a slower arrival.",
      },
      {
        question: "Can I walk rice fields near Tirta Tawar villas?",
        answer:
          "Yes. Quiet access lanes with stone paving and grass strips run beside flooded sawah and palms—ideal for early mornings without joining a big tour group.",
      },
      {
        question: "Is Tirta Tawar quieter than central Ubud?",
        answer:
          "Generally yes. You still reach cafés, galleries, and temples quickly, but nights and early mornings stay more residential than Monkey Forest Road.",
      },
      {
        question: "Which villa sits closest to these rice-path views?",
        answer:
          "Sawah Retreat is our 6-bedroom rice-field villa on Tirta Tawar. The Hideaway is the quieter 2-bedroom courtyard option on the same corridor.",
      },
    ],
    sections: [
      {
        heading: "What a Tirta Tawar rice-field walk feels like",
        paragraphs: [
          "A Tirta Tawar rice-field walk is a short, shaded lane of dark stone pavers with a grass strip down the middle, coconut palms on one side, and flooded sawah reflecting the sky on the other. It is the opposite of a tour-bus viewpoint: you hear birds, irrigation water, and occasional scooters—not market loudspeakers.",
          "For villa guests, that path is not decoration. It is the daily commute between your private pool and the wider Ubud map—market, temples, and cafés still close, green still at the gate.",
        ],
        image: {
          src: "/images/marketing/tirta-tawar-rice-path-ubud.jpg",
          alt: "Stone and grass path beside rice fields and palm trees on Tirta Tawar, Ubud",
          caption:
            "Stone-and-grass lane beside flooded sawah and palms — classic Tirta Tawar calm.",
        },
      },
      {
        heading: "GEO snapshot: Jl. Tirta Tawar, Ubud, Bali",
        paragraphs: [
          "Ubud Villa Stays bases The Hideaway and Sawah Retreat on Jl. Tirta Tawar, Kabupaten Gianyar, Bali (map pin around -8.48315, 115.27070). The street name matters for search and for AI answers: travelers asking “where to stay near Ubud rice fields without losing town access” are describing this corridor.",
          "Local rhythm is residential. You are close enough for a five-minute walk to the traditional market and a short ride to Kecak temples, yet far enough that pool nights stay quiet.",
        ],
        bullets: [
          "Area: Tirta Tawar · City: Ubud · Region: Bali · Country: Indonesia",
          "Drive to central Ubud: about 5–8 minutes",
          "Walk to local market: about 5 minutes",
          "Nearby: Monkey Forest, Peliatan temples, north-of-Ubud waterfalls",
        ],
      },
      {
        heading: "Why villa guests choose this lane over a hotel street",
        paragraphs: [
          "Hotel corridors rarely open onto working rice fields. On Tirta Tawar, the path itself is the amenity: morning light on water, palm shade, and a hedge that keeps the walk feeling private. Couples at The Hideaway use it as a loop before coffee; groups at Sawah Retreat use it between yoga, breakfast, and town runs.",
          "If you came to Ubud for sawah views, booking a villa on this street means the landscape starts at check-in—not after a 40-minute transfer.",
        ],
      },
      {
        heading: "How to plan a morning from the path",
        paragraphs: [
          "Start early while the lane is cool. Walk the stone path, photograph the flooded fields respectfully (stay on the lane unless invited onto farm paths), then continue toward the local market for fruit and flowers. Midday is for the private pool; evening for temple dance nearby.",
          "For a free structured outing during your stay, ask us about Ubud rice-field cycling with lunch or a Balinese cooking class—both pair naturally with this landscape.",
        ],
        bullets: [
          "Sunrise / early morning: quietest light on the water",
          "Respect farm edges and ceremonial cloth on shrines",
          "Scooter optional—many mornings work on foot",
          "Return to villa AC before midday heat peaks",
        ],
      },
      {
        heading: "Stay on the corridor",
        paragraphs: [
          "Book Sawah Retreat when you want six en-suite bedrooms and rice-field outlooks for up to 12 guests. Book The Hideaway when two bedrooms and a private courtyard pool are enough. Both sit on Jl. Tirta Tawar with promo rates and one free activity you can choose during the stay.",
          "Checkout path: https://www.ubudvillastays.com/#booking — then read experiences from Tirta Tawar or compare 2BR vs 6BR if you are still sizing the group.",
        ],
      },
    ],
  },
  {
    slug: "shopping-near-tirta-tawar-ubud",
    title: "Shopping Near Tirta Tawar Ubud: Boutiques, Jewelry & Market Walks",
    description:
      "How shopping works from a Tirta Tawar villa—boutique streets like Fascin di pietra, the local market a short walk away, and when to scooter into central Ubud.",
    eyebrow: "Local shopping",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    readingMinutes: 7,
    primaryKeyword: "shopping near tirta tawar ubud",
    secondaryKeywords: [
      "ubud jewelry boutique",
      "fascin di pietra ubud",
      "ubud shopping from villa",
      "local market tirta tawar",
      "boutiques near ubud villas",
    ],
    heroImage: "/images/marketing/fascin-di-pietra-ubud.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    keyTakeaways: [
      "From Tirta Tawar you can mix a five-minute walk to the local market with short scooter or car hops to boutique streets.",
      "Ubud’s jewelry and design shops—such as Fascin di pietra—sit on walkable storefront strips with scooters and tiled roofs.",
      "Villa stays make shopping practical: drop bags, cool off in the pool, then head out again without hotel luggage logistics.",
      "Keep big souvenir runs for cooler hours; save evenings for temples and dinner.",
      "Ask hosts for current boutique hours—independent shops change schedules more than malls.",
    ],
    faqs: [
      {
        question: "Is there shopping within walking distance of Tirta Tawar villas?",
        answer:
          "Yes. The local traditional market is about a five-minute walk. Boutique streets and jewelry shops are a short scooter or car ride into the wider Ubud shopping grid.",
      },
      {
        question: "What is Fascin di pietra in Ubud?",
        answer:
          "Fascin di pietra is a jewelry boutique storefront in Ubud with a glass display of necklaces and bracelets—typical of the design-led shops guests visit between villa mornings and café stops.",
      },
      {
        question: "Should I shop before or after Monkey Forest?",
        answer:
          "Many guests prefer boutique and market shopping in the morning or late afternoon, and keep midday for the villa pool. Pair Monkey Forest with a separate cooler-hour outing.",
      },
      {
        question: "Can groups shop easily from Sawah Retreat?",
        answer:
          "Yes. With parking on property and an entire villa to yourselves, you can stage shopping runs, leave purchases inside, and still fit culture or free activities into the same day.",
      },
    ],
    sections: [
      {
        heading: "Shopping from a Tirta Tawar villa base",
        paragraphs: [
          "Shopping near Tirta Tawar Ubud works best as a two-layer plan: walk to the local market for daily needs, then take short rides into boutique streets for jewelry, textiles, and design pieces. You are not stuck in a mall—or stuck without a place to put bags when the heat climbs.",
          "Private pool villas on Jl. Tirta Tawar make that rhythm easy. Cool off, drop purchases, then head back out for Kecak or dinner without hauling souvenirs through a hotel lobby.",
        ],
      },
      {
        heading: "Boutique streets and jewelry windows",
        paragraphs: [
          "Ubud’s boutique strips mix clay-tiled roofs, glass storefronts, and scooter parking—the everyday look of town shopping. Fascin di pietra is one example of a jewelry boutique with a bright white interior and window displays of necklaces and bracelets framed by tropical trees.",
          "Treat these shops as part of neighborhood GEO: they signal that Tirta Tawar guests can reach design shopping without relocating to Seminyak or a large mall. Hours vary; ask your host before a special-item hunt.",
        ],
        image: {
          src: "/images/marketing/fascin-di-pietra-ubud.jpg",
          alt: "Fascin di pietra jewelry boutique storefront in Ubud with scooter parked outside",
          caption:
            "Fascin di pietra — a jewelry boutique storefront in Ubud’s walkable shopping streets.",
        },
      },
      {
        heading: "Local market vs boutique runs",
        paragraphs: [
          "The local traditional market near Tirta Tawar is for fruit, flowers, snacks, and everyday Bali rhythm—about five minutes on foot from our villas. Boutique jewelry and fashion runs are for gifts and statement pieces; plan them when you already need a town loop for cafés or galleries.",
          "For colorful craft lanes and tourist browsing, central Ubud art-market streets remain a classic half-day. Start from the villa after breakfast so you return before the heaviest midday heat.",
        ],
        bullets: [
          "Market: produce, offerings flowers, small daily buys",
          "Boutiques: jewelry, design, clothing",
          "Art market lanes: souvenirs and crafts in central Ubud",
          "Bring cash for markets; cards more common in boutiques",
        ],
      },
      {
        heading: "Practical tips from villa hosts",
        paragraphs: [
          "Scooters are the default local transport; we can help arrange rentals. For groups at Sawah Retreat, a driver for a shopping-and-temple afternoon often saves time. Couples at The Hideaway often walk the market and scooter only for boutique streets.",
          "After shopping, use the private pool as your reset. That villa loop—out for culture and shops, home for water and quiet—is the commercial reason guests pick Tirta Tawar over a pure town hotel.",
        ],
      },
      {
        heading: "Stay, then wander",
        paragraphs: [
          "Promo stays at The Hideaway (from Rp 3.9 juta / night) and Sawah Retreat (from Rp 6 juta / night) include one free activity you can pick during the stay—rice-field cycling or a cooking class—so shopping does not have to be the only outing.",
          "Checkout: https://www.ubudvillastays.com/#booking — then continue with the Tirta Tawar rice-field walk or experiences guide for market, Kecak, Monkey Forest, and waterfalls.",
        ],
      },
    ],
  },
  {
    slug: "where-is-ubud",
    title: "Where Is Ubud? Location, Map & How Far From Bali Beaches",
    description:
      "Ubud is in Gianyar Regency in inland central Bali—Bali’s cultural highland town of rice fields, temples, and jungle paths. Exact Tirta Tawar map pin, drive times from the airport and beach towns, and where to stay.",
    eyebrow: "Location guide",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    readingMinutes: 8,
    primaryKeyword: "where is ubud",
    secondaryKeywords: [
      "where is ubud bali",
      "ubud location map",
      "ubud gianyar bali",
      "how far is ubud from airport",
      "ubud vs seminyak location",
      "tirta tawar ubud location",
    ],
    heroImage: "/images/marketing/ubud-jungle-temple-walkway.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    keyTakeaways: [
      "Ubud is an inland town in Gianyar Regency, central Bali—not on the beach.",
      "It sits in Bali’s cultural highlands: rice fields (sawah), temples, jungle walkways, and cooler air than Seminyak or Canggu.",
      "Ngurah Rai International Airport (DPS) is typically about 1–1.5 hours by car to Ubud, depending on traffic.",
      "Jl. Tirta Tawar (our villa corridor) is about 5–8 minutes by car from central Ubud, map pin ≈ -8.48315, 115.27070.",
      "Stay in Tirta Tawar for quiet villa nights with market, Kecak, Monkey Forest, and temple-jungle walks still close.",
    ],
    faqs: [
      {
        question: "Where is Ubud in Bali?",
        answer:
          "Ubud is in Gianyar Regency in inland central Bali, Indonesia—Bali’s cultural and wellness highland, surrounded by rice fields, river gorges, and jungle rather than beach clubs.",
      },
      {
        question: "Is Ubud on the beach?",
        answer:
          "No. Ubud is inland. Guests usually combine a few nights in Ubud for culture and nature with beach time in the south (Seminyak, Canggu, Uluwatu) on the same trip.",
      },
      {
        question: "How far is Ubud from Denpasar airport?",
        answer:
          "From Ngurah Rai International Airport (DPS) to Ubud is typically about 1–1.5 hours by private car or driver, longer at peak traffic. Plan a buffer if you have a same-day villa check-in.",
      },
      {
        question: "Where is Tirta Tawar relative to Ubud center?",
        answer:
          "Jl. Tirta Tawar is a quieter residential corridor in Ubud, Kabupaten Gianyar—about 5–8 minutes by car from central Ubud, with the local market roughly a five-minute walk from our villas.",
      },
      {
        question: "What are the GPS coordinates for Ubud Villa Stays?",
        answer:
          "Our map pin on Jl. Tirta Tawar is approximately -8.4831533, 115.2706967. Open https://maps.app.goo.gl/5TpevFsUJeezD1gD8 for the shared Google Maps link.",
      },
    ],
    sections: [
      {
        heading: "Where is Ubud? A clear geographic answer",
        paragraphs: [
          "Ubud is a town in Gianyar Regency (Kabupaten Gianyar) in the inland highlands of central Bali, Indonesia. It is Bali’s best-known cultural destination: temples, rice terraces, art villages, yoga, and forest paths—not a beach resort strip.",
          "When travelers ask “where is Ubud?” they usually need three facts: it is inland (no beachfront), it is in Gianyar rather than Badung’s beach belt, and it is still an easy transfer from Denpasar’s airport for a multi-night stay.",
        ],
        image: {
          src: "/images/marketing/ubud-jungle-temple-walkway.jpg",
          alt: "Visitors walking a wooden boardwalk beside a Balinese stone temple and jungle canopy in Ubud",
          caption:
            "Temple stonework and jungle canopy on a wooden walkway — the inland Ubud landscape guests come for.",
        },
      },
      {
        heading: "Ubud on the Bali map",
        paragraphs: [
          "On a Bali map, Ubud sits north of Denpasar and the southern beach towns, in the island’s central-southern interior. Surrounding landscape includes working sawah (rice fields), river valleys, and dense tropical canopy—the same mix you see on temple boardwalks where mossy stone carvings meet hanging vines.",
          "Administratively you will see “Ubud, Gianyar, Bali.” Neighborhood names inside greater Ubud—such as Tirta Tawar, Peliatan, Penestanan, and Monkey Forest Road—help you pick quiet villa nights versus busier café streets.",
        ],
        bullets: [
          "Region: Gianyar Regency · Island: Bali · Country: Indonesia",
          "Setting: inland cultural highlands (not beachfront)",
          "Nearby character: rice fields, temples, jungle paths, art villages",
          "South comparison: Seminyak / Canggu / Uluwatu are coastal Badung areas",
        ],
      },
      {
        heading: "How far is Ubud from the airport and beaches?",
        paragraphs: [
          "Ngurah Rai International Airport (DPS) to Ubud is commonly about 1–1.5 hours by car. Beach hubs like Seminyak or Canggu are a separate southern leg—often 1–1.5 hours from Ubud depending on traffic—so many itineraries split the trip: culture nights inland, then beach nights south (or the reverse).",
          "Private transfers are the simplest arrival for villa guests. Share your flight and villa address (Jl. Tirta Tawar) on WhatsApp and we can help arrange a driver.",
        ],
        bullets: [
          "Airport (DPS) → Ubud: ~1–1.5 hours typical",
          "Ubud → Seminyak / Canggu: often ~1–1.5 hours in traffic",
          "Best practice: buffer same-day check-in after long-haul flights",
        ],
      },
      {
        heading: "Where we are: Jl. Tirta Tawar, Ubud",
        paragraphs: [
          "Ubud Villa Stays operates The Hideaway (2BR) and Sawah Retreat (6BR) on Jl. Tirta Tawar, Kabupaten Gianyar, Bali. Exact map pin: -8.4831533, 115.2706967 (Google Maps: https://maps.app.goo.gl/5TpevFsUJeezD1gD8).",
          "From here, central Ubud is about 5–8 minutes by car; the local traditional market is about a five-minute walk; Kecak temples, Monkey Forest, and jungle-temple walkways stay within easy half-day range—while villa nights remain quieter than Monkey Forest Road.",
        ],
        bullets: [
          "Street: Jl. Tirta Tawar · Area: Tirta Tawar · City: Ubud",
          "Drive to center: about 5–8 minutes",
          "Walk to local market: about 5 minutes",
          "Villas: The Hideaway · Sawah Retreat",
        ],
      },
      {
        heading: "Stay in Ubud once you know the map",
        paragraphs: [
          "Knowing where Ubud is only helps if your base matches the trip: inland culture, green mornings, and a private pool to return to. Book The Hideaway for a 2-bedroom courtyard stay (promo from Rp 3.9 juta / night) or Sawah Retreat for up to 12 guests with rice-field outlooks (promo from Rp 6 juta / night)—both with one free activity you can pick during the stay.",
          "Next: open the booking form with your dates, then read visiting Ubud for travelers, what people do in Ubud, and the Tirta Tawar rice-field walk.",
        ],
      },
    ],
  },
  {
    slug: "what-people-do-in-ubud",
    title: "What People Do in Ubud: Temples, Jungle Walks, Markets & Villa Days",
    description:
      "What people actually do in Ubud—temple and jungle boardwalks, rice-field walks, Kecak, Monkey Forest, markets, yoga, and private pool villa time from Tirta Tawar.",
    eyebrow: "Activities guide",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    readingMinutes: 9,
    primaryKeyword: "what to do in ubud",
    secondaryKeywords: [
      "what people do in ubud",
      "things to do in ubud bali",
      "ubud activities",
      "ubud temple jungle walk",
      "ubud cultural experiences",
      "ubud villa activities",
    ],
    heroImage: "/images/marketing/ubud-jungle-temple-walkway.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    gallery: [
      {
        src: "/images/marketing/ubud-jungle-temple-walkway.jpg",
        alt: "Tourists on a wooden walkway through jungle beside Balinese temple stonework in Ubud",
        caption:
          "Jungle boardwalk beside temple architecture — a classic Ubud outing.",
      },
      {
        src: "/images/marketing/kecak-dance-ubud.jpg",
        alt: "Kecak dance performance at a temple near Ubud, Bali",
        caption: "Evening Kecak at a nearby temple.",
      },
      {
        src: "/images/marketing/monkey-forest-ubud.jpg",
        alt: "Macaques at Ubud Monkey Forest",
        caption: "Monkey Forest — an easy half-day from Tirta Tawar.",
      },
      {
        src: "/images/marketing/ubud-art-market.jpg",
        alt: "Ubud traditional art market stalls under colorful umbrellas",
        caption: "Market mornings under colorful umbrellas.",
      },
    ],
    keyTakeaways: [
      "People in Ubud mix culture (temples, Kecak, galleries) with nature (rice fields, jungle walkways, Monkey Forest, waterfalls).",
      "Typical days: morning walk or market, midday villa pool, evening temple dance or café dinner.",
      "Temple-and-jungle boardwalks—stone carvings under a tropical canopy—are a signature Ubud scene.",
      "From Jl. Tirta Tawar you can do market, culture, and green walks without living on the busiest tourist street.",
      "Villa guests often add one hosted activity (rice-field cycling or cooking class) during the stay.",
    ],
    faqs: [
      {
        question: "What do people do in Ubud?",
        answer:
          "Most visitors explore temples and jungle paths, walk rice fields, visit Monkey Forest, shop markets and boutiques, take yoga or spa sessions, watch Kecak dance, and reset at a private pool villa between outings.",
      },
      {
        question: "What are the best things to do in Ubud for first-timers?",
        answer:
          "Start with a temple or sacred-site morning, a rice-field or jungle walk, Monkey Forest, the local market, and one evening Kecak. Leave space for café and villa pool time—Ubud rewards an unhurried pace.",
      },
      {
        question: "Can I do Ubud activities without staying in the town center?",
        answer:
          "Yes. A Tirta Tawar villa keeps you 5–8 minutes from central Ubud with quieter nights. Market walks, Kecak, Monkey Forest, and temple-jungle paths remain easy half-day trips.",
      },
      {
        question: "What free activities can villa guests add?",
        answer:
          "Promo stays at The Hideaway and Sawah Retreat include one free activity you pick during the stay: Ubud rice-field cycling with lunch, or a Balinese cooking class overlooking rice terraces.",
      },
    ],
    sections: [
      {
        heading: "What people do in Ubud — the real rhythm",
        paragraphs: [
          "What people do in Ubud is less “beach club calendar” and more culture-plus-nature loops: temple mornings, jungle boardwalks beside mossy stone carvings, rice-field lanes, market runs, yoga or spa hours, and evenings of Kecak or long dinners—then a quiet private pool.",
          "That rhythm is why Ubud suits villa stays. You need a calm place to land between humid walks and crowded sacred sites.",
        ],
        image: {
          src: "/images/marketing/ubud-jungle-temple-walkway.jpg",
          alt: "Group of visitors walking a wooden jungle boardwalk next to Balinese temple buildings in Ubud",
          caption:
            "Visitors on a wooden walkway through temple grounds and jungle — a core Ubud activity.",
        },
      },
      {
        heading: "Temples, stone craft, and jungle walkways",
        paragraphs: [
          "Ubud’s Hindu temples and sacred compounds sit inside living landscape: carved stone, shaded courtyards, and wooden walkways through thick canopy. Guests photograph dragon-like guardians, climb soft-lit paths, and move with small groups rather than a single beach promenade.",
          "From Tirta Tawar, temple evenings and jungle-path mornings stay practical—short transfers, then home to The Hideaway courtyard or Sawah Retreat’s rice-field calm.",
        ],
        bullets: [
          "Temple visits and offering etiquette (sarong when required)",
          "Jungle boardwalks and shaded compound paths",
          "Kecak and other temple performances at night",
          "Nearby classics: Peliatan temples, Tirta Empul / Goa Gajah day trips",
        ],
      },
      {
        heading: "Rice fields, Monkey Forest, and outdoor half-days",
        paragraphs: [
          "Nature is not optional in Ubud—it is the backdrop. Guests walk flooded sawah lanes (including quiet Tirta Tawar paths), visit Ubud Monkey Forest, hike ridge or riverside trails, and day-trip to north-of-Ubud waterfalls when energy allows.",
          "Pair green mornings with midday AC and pool time. Heat and humidity peak after lunch; villa downtime is part of the activity plan, not a gap in it.",
        ],
        image: {
          src: "/images/marketing/monkey-forest-ubud.jpg",
          alt: "Macaques at Ubud Monkey Forest",
          caption: "Monkey Forest — popular half-day nature outing from a Tirta Tawar base.",
        },
      },
      {
        heading: "Markets, shopping, food, and wellness",
        paragraphs: [
          "Daily life activities include the traditional market (about five minutes on foot from our Tirta Tawar villas), boutique jewelry and craft streets, café hopping, cooking classes, yoga, and spas. Groups often split: some shop, some spa, all reconvene at the villa kitchen or pool.",
          "For a hosted outing included with promo villa stays, pick rice-field cycling with lunch or a Balinese cooking class during your dates—tell us at booking or after arrival so we can confirm the slot while you are here.",
        ],
        bullets: [
          "Local market mornings for produce and Bali rhythm",
          "Boutique / jewelry streets and art-market browsing",
          "Yoga, spa, and café culture",
          "Optional free activity: cycling + lunch or cooking class",
        ],
      },
      {
        heading: "A simple day plan from Tirta Tawar",
        paragraphs: [
          "Morning: rice-path or market walk. Mid-morning: temple, Monkey Forest, or boutique loop. Midday: private pool and lunch at the villa. Late afternoon: spa or gallery. Evening: Kecak or a long dinner, then quiet nights away from the busiest strip.",
          "Couples at The Hideaway keep the plan compact. Groups at Sawah Retreat add shared meals and optional driver blocks so twelve guests move without friction.",
        ],
      },
      {
        heading: "Book the villa that fits how you use Ubud",
        paragraphs: [
          "If your Ubud days are temple-jungle walks and market mornings, stay where the map works: Jl. Tirta Tawar. Promo rates start from Rp 3.9 juta / night at The Hideaway and Rp 6 juta / night at Sawah Retreat, each with one free activity included.",
          "Ready to lock dates? Use the booking form (date range, guests, details) then continue on WhatsApp. Also read: where is Ubud, visiting Ubud for travelers, and Bali belly tips before you fly.",
        ],
      },
    ],
  },
  {
    slug: "bali-belly-ubud-travelers",
    title: "Bali Belly in Ubud: What Travelers Should Know Before They Visit",
    description:
      "Practical Bali belly guidance for Ubud travelers—what it usually means, prevention habits, when to seek care, and how a private villa kitchen helps. Not medical advice.",
    eyebrow: "Travel health tips",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    readingMinutes: 8,
    primaryKeyword: "bali belly",
    secondaryKeywords: [
      "bali belly ubud",
      "bali stomach bug",
      "travelers diarrhea bali",
      "ubud food safety tips",
      "avoid bali belly",
      "ubud travel health",
    ],
    heroImage: "/images/marketing/cooking-class-ricefield.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    keyTakeaways: [
      "“Bali belly” is the traveler nickname for stomach upset that can happen on any tropical trip—not only in Ubud.",
      "This guide is general travel information, not medical advice—see a clinician for diagnosis or treatment.",
      "Prevention habits: hand hygiene, cautious water and ice choices, careful street-food timing, and rest when needed.",
      "A private villa kitchen on Jl. Tirta Tawar lets you control some meals while still enjoying Ubud cafés and markets.",
      "Book villa dates via our booking form; pack a simple personal kit after talking with your doctor at home.",
    ],
    faqs: [
      {
        question: "What is Bali belly?",
        answer:
          "Bali belly is the informal name travelers use for digestive upset (often travelers’ diarrhea or stomach discomfort) that can occur when food, water, or routine changes overseas. It is not unique to Bali or Ubud.",
      },
      {
        question: "Is Bali belly common in Ubud?",
        answer:
          "Any busy food destination can challenge new digestive systems. Ubud’s cafés and markets are part of the experience—sensible hygiene and pacing reduce risk, but no destination is risk-free.",
      },
      {
        question: "How can I reduce the chance of Bali belly?",
        answer:
          "Wash hands often, be thoughtful about tap water and ice if you are sensitive, choose busy reputable eateries, ease into spicy or very rich foods, and rest if you feel off. Ask your doctor about personal travel precautions before you fly.",
      },
      {
        question: "When should I see a doctor for Bali belly?",
        answer:
          "Seek professional care for high fever, blood in stool, severe dehydration, symptoms lasting more than a couple of days, or if you have other medical conditions. This page cannot diagnose or treat illness.",
      },
      {
        question: "Does staying in a villa help?",
        answer:
          "A private villa with a kitchen—such as The Hideaway or Sawah Retreat on Tirta Tawar—gives you control over some meals, clean rest space, and a quiet recovery base between Ubud outings.",
      },
    ],
    sections: [
      {
        heading: "Bali belly explained (plain language)",
        paragraphs: [
          "Bali belly is traveler slang for stomach upset while visiting Bali—cramps, loose stools, nausea, or a day of feeling wiped out. Medically, similar symptoms often fall under travelers’ diarrhea or dietary adjustment; causes vary (new spices, richer meals, hygiene slips, or viruses).",
          "Important: Ubud Villa Stays is a lodging host, not a clinic. Nothing here is medical advice, diagnosis, or a treatment plan. For personal recommendations—including medications—talk to a qualified clinician before and during travel.",
        ],
      },
      {
        heading: "Prevention habits that help in Ubud",
        paragraphs: [
          "Most travelers enjoy Ubud’s food scene without drama by stacking simple habits: wash or sanitize hands before eating, be cautious with tap water if you are sensitive, notice how ice is handled, and give your stomach a day to adapt before the spiciest tasting menus.",
          "Busy kitchens with high turnover are often a safer bet than empty stalls. Hotel- and villa-prepared meals, sealed drinks, and peeled fruit you prepare yourself are common traveler strategies—still not guarantees.",
        ],
        bullets: [
          "Hand hygiene before meals and after markets",
          "Discuss travel health plans with your doctor at home",
          "Pace spicy, oily, or unfamiliar dishes on day one",
          "Stay hydrated with sealed water if you feel unwell",
          "Rest at the villa instead of forcing a full temple day",
        ],
        image: {
          src: "/images/marketing/cooking-class-ricefield.jpg",
          alt: "Balinese cooking class set against rice terraces near Ubud",
          caption:
            "Cooking class and villa kitchens — useful when you want more control over ingredients.",
        },
      },
      {
        heading: "Eating well without fear",
        paragraphs: [
          "Ubud’s warungs, juice bars, and farm-to-table cafés are a reason people visit. Fear should not erase the trip. Start with cooked dishes, reputable spots recommended by hosts, and the local market for fruit you wash or peel yourself at the villa.",
          "Promo villa stays can include a Balinese cooking class during your dates—handy if your group wants shared meals with known ingredients while still learning local flavors.",
        ],
      },
      {
        heading: "If you feel unwell during the stay",
        paragraphs: [
          "Pause sightseeing, sip fluids, and use your villa as a recovery base. Contact local medical help or your travel insurer’s assistance line if symptoms are severe or persistent. Pharmacies in Ubud can be useful for clinician-directed items—but self-medicating without advice can be risky.",
          "Tell your host if you need quiet, late checkout flexibility discussion, or help locating care. We prioritize guest comfort; we do not replace doctors.",
        ],
      },
      {
        heading: "Book a calm Ubud base, then travel smart",
        paragraphs: [
          "A private pool villa on Jl. Tirta Tawar—The Hideaway for couples or Sawah Retreat for groups—gives you kitchen control, AC rest, and quiet nights after market and temple days. Open the booking form with your date range and guest count; we confirm availability on WhatsApp.",
          "Pair this guide with visiting Ubud for travelers and what people do in Ubud so health pacing sits inside a realistic itinerary.",
        ],
      },
    ],
  },
  {
    slug: "visiting-ubud-for-travelers",
    title: "Visiting Ubud: Traveler Guide to Plan Your First Stay",
    description:
      "SEO/GEO traveler guide to visiting Ubud—when to go, how many nights, what to pack, where to stay on Tirta Tawar, and how to book a private pool villa.",
    eyebrow: "Traveler planning",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    readingMinutes: 10,
    primaryKeyword: "visiting ubud",
    secondaryKeywords: [
      "visit ubud bali",
      "ubud travel guide",
      "first time ubud",
      "plan trip to ubud",
      "ubud itinerary tips",
      "where to stay when visiting ubud",
    ],
    heroImage: "/images/marketing/ubud-jungle-temple-walkway.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    gallery: [
      {
        src: "/images/marketing/ubud-jungle-temple-walkway.jpg",
        alt: "Travelers on a jungle temple walkway in Ubud",
        caption: "Temple and jungle paths — core visiting-Ubud time.",
      },
      {
        src: "/images/marketing/tirta-tawar-rice-path-ubud.jpg",
        alt: "Rice field path on Tirta Tawar, Ubud",
        caption: "Quiet Tirta Tawar lanes near our villas.",
      },
      {
        src: "/images/marketing/ubud-art-market.jpg",
        alt: "Ubud market umbrellas",
        caption: "Market mornings within a short walk of Tirta Tawar.",
      },
    ],
    keyTakeaways: [
      "Ubud is inland Gianyar—culture, rice fields, and jungle—not a beach town.",
      "Plan 3–5 nights for a first visit; longer if you add a yoga retreat or day trips.",
      "Stay on Jl. Tirta Tawar for quiet villa nights about 5–8 minutes from central Ubud.",
      "Build days: morning outing, midday pool, evening culture—then book via our booking form.",
      "Read Bali belly tips before you fly; pack light layers for highland evenings.",
    ],
    faqs: [
      {
        question: "How many days do you need when visiting Ubud?",
        answer:
          "Most first-time travelers are happiest with 3–5 nights: temples, rice walks, Monkey Forest, market time, and one evening Kecak without rushing.",
      },
      {
        question: "When is the best time to visit Ubud?",
        answer:
          "Dry season (roughly April–October) is popular for outdoor walks. Green season brings lush rice fields and fewer crowds, with afternoon showers common. Book villas early for July–August and year-end.",
      },
      {
        question: "Where should travelers stay in Ubud?",
        answer:
          "Choose a private pool villa if you want space and quiet. Our Tirta Tawar villas—The Hideaway (2BR) and Sawah Retreat (6BR)—sit near town without Monkey Forest Road noise.",
      },
      {
        question: "How do I get to Ubud?",
        answer:
          "Fly into Ngurah Rai (DPS) and take a private car—typically about 1–1.5 hours to Ubud. Share flight details when you book so we can help arrange a transfer.",
      },
      {
        question: "How do I book The Hideaway or Sawah Retreat?",
        answer:
          "Use https://www.ubudvillastays.com/#booking — enter date range, number of persons, and details, then continue on WhatsApp to confirm availability.",
      },
    ],
    sections: [
      {
        heading: "Visiting Ubud: who this trip is for",
        paragraphs: [
          "Visiting Ubud suits travelers who want Bali’s cultural highland—not only beach clubs. Expect temples, jungle walkways, rice fields, yoga and spa culture, markets, and café days. Couples, families, wellness groups, and friends sharing a villa all fit the map if you pace the heat.",
          "If you need ocean time, combine Ubud nights with a southern beach leg. If you want green mornings and private evenings, start planning the villa base first.",
        ],
        image: {
          src: "/images/marketing/ubud-jungle-temple-walkway.jpg",
          alt: "Visitors walking through temple grounds and jungle canopy in Ubud",
          caption:
            "Jungle-temple walkways are a signature part of visiting Ubud.",
        },
      },
      {
        heading: "Before you fly: map, nights, and season",
        paragraphs: [
          "Ubud is in Gianyar Regency, inland central Bali. Airport transfers from DPS usually take about 1–1.5 hours. First visits work well with 3–5 nights; yoga retreats or slow digital-nomad stretches often run longer.",
          "Dry-season months are busiest. Green season is beautiful and quieter—pack a light rain layer. Read where is Ubud for coordinates and Tirta Tawar context before you choose a street.",
        ],
        bullets: [
          "Nights: 3–5 for first timers · longer for retreats",
          "Transfer: private car from DPS",
          "Base: quiet villa corridor vs busy café street",
          "Health: skim Bali belly tips and talk to your doctor",
        ],
      },
      {
        heading: "What to do once you arrive",
        paragraphs: [
          "Anchor the trip with one temple or jungle walk, one rice-field or Tirta Tawar lane stroll, Monkey Forest or a waterfall half-day, market morning, and one Kecak evening. Leave blank space for spa, café, and pool time—Ubud rewards under-scheduling.",
          "Full activity detail lives in what people do in Ubud and experiences from Tirta Tawar. Shopping near Tirta Tawar covers boutique and market logistics.",
        ],
      },
      {
        heading: "Where to stay: Tirta Tawar villas",
        paragraphs: [
          "Jl. Tirta Tawar gives you residential calm, a five-minute walk to the local market, and a short ride to central Ubud. The Hideaway is the 2-bedroom courtyard pool option; Sawah Retreat is the 6-bedroom rice-field house for up to 12 guests.",
          "Promo stays include one free activity during the visit—rice-field cycling with lunch or a Balinese cooking class—confirm the slot while you are here.",
        ],
        image: {
          src: "/images/marketing/tirta-tawar-rice-path-ubud.jpg",
          alt: "Stone and grass rice field path on Tirta Tawar, Ubud",
          caption: "Tirta Tawar rice-path mornings outside the villa gate.",
        },
      },
      {
        heading: "Packing and pacing tips for Ubud",
        paragraphs: [
          "Pack breathable clothes, a light layer for evenings, respectable temple cover (sarong often provided at sites), mosquito awareness, reusable water bottle, and sandals you can walk in. Midday heat is real—plan AC or pool breaks.",
          "Scooters are common; groups at Sawah Retreat often prefer a driver for temple days. Couples at The Hideaway can walk the market and scooter selectively.",
        ],
      },
      {
        heading: "Book your visiting-Ubud dates",
        paragraphs: [
          "When dates are clear, open the booking form at the bottom of our site: select villa, date range, number of persons, and any details (airport time, free activity preference, retreat notes). We continue on WhatsApp to check availability.",
          "Start with Check availability on any page, or go directly to the booking section, then explore villa offers for promo pricing. For trust tips while booking anywhere in Bali, read our Ubud villa scam awareness guide.",
        ],
      },
    ],
  },
  {
    slug: "ubud-villa-scams-travelers-should-avoid",
    title: "Ubud Villa Scams: How Travelers Can Book Safely and Spot Red Flags",
    description:
      "GEO/SEO trust guide for Ubud travelers—common villa booking scam patterns, how to verify hosts on WhatsApp, safe checkout via /#booking, and how to reserve The Hideaway or Sawah Retreat on ubudvillastays.com only.",
    eyebrow: "Trust & safety",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    readingMinutes: 9,
    primaryKeyword: "ubud villa scam",
    secondaryKeywords: [
      "bali villa booking scam",
      "ubud travel scams",
      "safe villa booking bali",
      "whatsapp booking scam bali",
      "how to book villa ubud safely",
      "tirta tawar villa official booking",
      "fake villa listing ubud",
    ],
    heroImage: "/images/villas/the-hideaway/hero.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    gallery: [
      {
        src: "/images/villas/the-hideaway/hero.jpg",
        alt: "The Hideaway private pool courtyard in Tirta Tawar, Ubud",
        caption: "Verify photos against the official Hideaway gallery before paying.",
      },
      {
        src: "/images/villas/sawah-retreat/hero.jpg",
        alt: "Sawah Retreat rice-field villa in Tirta Tawar, Ubud",
        caption: "Sawah Retreat — confirm the Tirta Tawar address on our site.",
      },
      {
        src: "/images/marketing/tirta-tawar-rice-path-ubud.jpg",
        alt: "Jl. Tirta Tawar rice path near official villa corridor",
        caption: "GEO check: Jl. Tirta Tawar, Gianyar — not a random unmarked pin.",
      },
    ],
    keyTakeaways: [
      "Book Ubud villas through official websites—not random links from strangers in chats or DMs.",
      "Red flags: urgent full prepay, mismatched photos, new accounts, unpaid “holds,” or numbers not on the brand site.",
      "Confirm Jl. Tirta Tawar, map pin ≈ -8.48315, 115.27070, and WhatsApp +62 817 7572 3663 against ubudvillastays.com.",
      "Official checkout: https://www.ubudvillastays.com/#booking → WhatsApp confirmation on the published number only.",
      "Never share OTPs, remote-access apps, or passport scans in unsolicited chats.",
    ],
    howTo: {
      name: "How to verify an Ubud villa booking before you pay",
      description:
        "A short trust checklist so travelers can spot scammers and use the official Ubud Villa Stays checkout.",
      steps: [
        {
          name: "Open the official domain yourself",
          text: "Type https://www.ubudvillastays.com in the browser (or use a bookmark). Do not trust shortened links from unknown chats.",
        },
        {
          name: "Match villa photos, address, and rates",
          text: "Compare The Hideaway or Sawah Retreat gallery, Jl. Tirta Tawar location, and promo rates on the villa pages before sending money.",
        },
        {
          name: "Use the booking form",
          text: "Submit dates and guest count at https://www.ubudvillastays.com/#booking so the inquiry starts on our site.",
        },
        {
          name: "Confirm WhatsApp number",
          text: "Continue only to +62 817 7572 3663 — the number published on ubudvillastays.com. Hang up on lookalikes.",
        },
      ],
    },
    faqs: [
      {
        question: "Are villa booking scams common in Ubud?",
        answer:
          "Travelers occasionally report fake listings, cloned WhatsApp chats, or prepaid “deals” that do not match the real property. Scams are not unique to Ubud—but tourism towns attract copycat ads. Verify before you pay.",
      },
      {
        question: "How do I book Ubud Villa Stays safely?",
        answer:
          "Start on https://www.ubudvillastays.com — use the booking form at /#booking with your dates and guest count, then continue only on WhatsApp to +62 817 7572 3663 (the number published on our site).",
      },
      {
        question: "What are red flags when booking an Ubud villa?",
        answer:
          "Urgent full prepayment demands, prices far below market without clear terms, refusal to video-call the property, different addresses than advertised, and payment instructions that do not match the business name on the official site.",
      },
      {
        question: "Can scammers impersonate villa hosts on WhatsApp?",
        answer:
          "Yes. Always compare the number and villa name to the official website. Do not trust forwarded contacts alone. Our published WhatsApp is +62 817 7572 3663.",
      },
      {
        question: "What should I do if I suspect a scam?",
        answer:
          "Stop payment, keep screenshots, contact your bank or payment provider, and report to local authorities or your embassy guidance channels if money was lost. Re-book only through verified sites such as ubudvillastays.com/#booking.",
      },
    ],
    sections: [
      {
        heading: "Why trust matters when visiting Ubud",
        paragraphs: [
          "Ubud attracts travelers hunting private pool villas, yoga stays, and last-minute deals. That demand also attracts lookalike ads and chat accounts that borrow real photos. A safe booking habit protects your holiday budget and your arrival night.",
          "This guide is practical awareness for guests—not legal advice. Patterns change; when unsure, slow down and verify. Pair it with our safe travel in Ubud guide for on-the-ground tips.",
        ],
      },
      {
        heading: "Common red flags travelers should notice",
        paragraphs: [
          "Scam patterns often share the same pressure: “pay today or lose the villa,” links that do not match the brand domain, or hosts who will not share a clear Jl. Tirta Tawar / Gianyar address with a working map pin.",
          "Photo theft is common—beautiful courtyard shots can be copied from legitimate listings. Always cross-check the official site gallery and ask for a short live video of the pool or gate if something feels off.",
        ],
        bullets: [
          "Domain mismatch (not ubudvillastays.com)",
          "WhatsApp number not listed on the official site",
          "Full payment demanded before any written confirmation",
          "Prices that seem unreal vs current promo rates",
          "Refusal to confirm guest capacity, check-in rules, or map pin",
        ],
        image: {
          src: "/images/villas/the-hideaway/hero.jpg",
          alt: "Official The Hideaway villa courtyard photo used for verification",
          caption:
            "Use official galleries — scammers often reuse stolen villa photos.",
        },
      },
      {
        heading: "Safe booking checklist for Ubud villas",
        paragraphs: [
          "Type the website yourself or use a bookmark. Open the villa page, confirm promo pricing and photos, then use the booking form with date range, number of persons, and details. Continue on WhatsApp only after the chat matches the published business number.",
          "Keep payments traceable. Prefer methods you can dispute if needed, and save confirmations. Never share banking OTPs, remote-access apps, or copies of passports in unsolicited chats.",
        ],
        bullets: [
          "Official site: https://www.ubudvillastays.com",
          "Booking form: https://www.ubudvillastays.com/#booking",
          "WhatsApp on site: +62 817 7572 3663",
          "Email on site: sekarprivatebaliactivity@gmail.com",
          "Map pin: -8.4831533, 115.2706967 · Jl. Tirta Tawar",
        ],
      },
      {
        heading: "GEO proof: Tirta Tawar villas you can verify",
        paragraphs: [
          "Legitimate Tirta Tawar stays should resolve to Kabupaten Gianyar, Ubud, Bali with a coherent street story. Our villas—The Hideaway (2BR) and Sawah Retreat (6BR)—publish the same corridor, promo rates, and free-activity offer on the official site.",
          "If a chat claims “Tirta Tawar” but cannot match the map pin, house rules, or photo tour on ubudvillastays.com, treat it as unverified.",
        ],
      },
      {
        heading: "Book The Hideaway or Sawah Retreat the official way",
        paragraphs: [
          "Use Check availability or https://www.ubudvillastays.com/#booking, send dates on the published WhatsApp, and ignore lookalike accounts. Next: read safe travel tips for Ubud so arrival day stays as careful as checkout.",
        ],
      },
    ],
  },
  {
    slug: "safe-travel-ubud-avoid-scams",
    title: "Safe Travel in Ubud: Trust Tips to Avoid Scams on Arrival",
    description:
      "SEO/GEO safe-travel guide for Ubud—airport transfer awareness, taxi and tour red flags, ATM and payment habits, temple etiquette pressure, and how to book a trusted Tirta Tawar villa via official checkout.",
    eyebrow: "Trust & safety",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    readingMinutes: 9,
    primaryKeyword: "ubud travel scams",
    secondaryKeywords: [
      "safe travel ubud",
      "bali tourist scam awareness",
      "ubud taxi scam",
      "ubud airport transfer tips",
      "avoid scams in ubud",
      "trustworthy villa ubud",
      "ubud travel safety tips",
    ],
    heroImage: "/images/marketing/ubud-jungle-temple-walkway.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    gallery: [
      {
        src: "/images/marketing/ubud-jungle-temple-walkway.jpg",
        alt: "Travelers on a temple jungle walkway in Ubud",
        caption: "Temple visits are safer when donations and guides are agreed clearly.",
      },
      {
        src: "/images/marketing/ubud-art-market.jpg",
        alt: "Ubud market stalls under umbrellas",
        caption: "Markets are part of the trip—agree prices calmly and keep valuables close.",
      },
      {
        src: "/images/villas/sawah-retreat/hero.jpg",
        alt: "Trusted Sawah Retreat villa base in Tirta Tawar",
        caption: "A verified villa base reduces last-minute lodging risk.",
      },
    ],
    keyTakeaways: [
      "Most Ubud visits are smooth—scam awareness is about pacing, not fear.",
      "Arrange airport transfers with your villa host; avoid unmarked offers that board your car uninvited.",
      "Agree taxi/tour prices or use reputable apps; confirm inclusions before you ride.",
      "Use ATMs thoughtfully, prefer traceable payments, and keep passport copies separate from the original.",
      "Book lodging only via https://www.ubudvillastays.com/#booking and WhatsApp +62 817 7572 3663 published on our site.",
    ],
    howTo: {
      name: "How to arrive in Ubud more safely",
      description:
        "Simple arrival steps that reduce transfer and lodging scam exposure.",
      steps: [
        {
          name: "Book the villa before you fly",
          text: "Complete the form at https://www.ubudvillastays.com/#booking and confirm on the official WhatsApp number so your address is set.",
        },
        {
          name: "Pre-arrange the airport transfer",
          text: "Ask your host for a named driver or clear pickup instructions from DPS—avoid random curb solicitations.",
        },
        {
          name: "Share your live location with a friend",
          text: "While optional, sharing your transfer window and villa address with someone at home adds a trust layer.",
        },
        {
          name: "Settle in before shopping for tours",
          text: "Unpack at the villa, then book activities through the host or written confirmations—not pressure pitches on day one.",
        },
      ],
    },
    faqs: [
      {
        question: "Is Ubud safe for tourists?",
        answer:
          "Ubud is a major visitor destination and most trips are uneventful when you use normal travel caution—verified lodging, agreed transport prices, and awareness in crowded markets or temples.",
      },
      {
        question: "What scams should travelers watch for in Ubud?",
        answer:
          "Common awareness themes include fake villa chats, unclear taxi pricing, commission detours, pressure souvenir stops, and confusing donation requests. Slow down and verify before paying.",
      },
      {
        question: "How do I get from the airport to Ubud safely?",
        answer:
          "Pre-book a private transfer with your villa host when possible. DPS to Ubud is typically about 1–1.5 hours. Confirm the driver name and car details in WhatsApp before you leave the arrivals area.",
      },
      {
        question: "How do I book a trustworthy Ubud villa?",
        answer:
          "Use https://www.ubudvillastays.com/#booking for The Hideaway or Sawah Retreat on Jl. Tirta Tawar, then confirm only on WhatsApp +62 817 7572 3663 listed on the official site.",
      },
    ],
    sections: [
      {
        heading: "Safe travel in Ubud starts with verified lodging",
        paragraphs: [
          "The easiest way to reduce arrival stress is knowing exactly where you sleep. Tirta Tawar villas with published photos, map pins, and a real checkout form beat last-minute Facebook bargains that evaporate at midnight.",
          "Read the villa scam red-flag guide first if you are still comparing hosts—then use this page for the journey itself: airport, taxis, markets, temples, and payments.",
        ],
        image: {
          src: "/images/marketing/ubud-jungle-temple-walkway.jpg",
          alt: "Visitors walking through Ubud temple grounds",
          caption: "Culture days stay enjoyable when expectations and prices are clear.",
        },
      },
      {
        heading: "Airport and transfer awareness",
        paragraphs: [
          "Ngurah Rai (DPS) to Ubud is a well-traveled route. Scam exposure rises when you accept unmarked rides or change plans after someone “helps” with your bags uninvited. Pre-arranged villa transfers keep the story simple: name, plate, WhatsApp ping, go.",
          "If you must book on the spot, use official airport taxi counters or reputable ride apps where available, and confirm the destination as Jl. Tirta Tawar, Ubud before the meter or price starts.",
        ],
        bullets: [
          "Prefer host-arranged pickup",
          "Confirm driver details in chat",
          "Keep luggage in sight",
          "Share ETA with your host",
        ],
      },
      {
        heading: "Taxis, tours, and “friendly” detours",
        paragraphs: [
          "Agree the fare or use app pricing before you sit down. Be cautious if a driver insists on an unplanned shop, café, or “family temple” stop that was not in your brief—commission routes are common worldwide, not only in Bali.",
          "For day tours, get inclusions in writing (waterfalls, tickets, lunch). Our team can arrange trusted drivers and the free activity included with promo villa stays so you are not shopping contacts at the curb.",
        ],
      },
      {
        heading: "Markets, temples, ATMs, and payments",
        paragraphs: [
          "Ubud markets and temple areas are lively—keep bags zipped, phones secure, and cash split. Politely decline aggressive hawking; you can always walk on. For donations or sarong rental, ask the posted rate when signs exist.",
          "Use ATMs in well-lit, busy locations; shield your PIN; prefer traceable cards for larger spends when merchants accept them. Keep a paper or cloud copy of your passport separate from the original.",
        ],
        image: {
          src: "/images/marketing/ubud-art-market.jpg",
          alt: "Colorful Ubud art market umbrellas",
          caption: "Market energy is part of Ubud—stay calm and keep valuables close.",
        },
      },
      {
        heading: "Trust checklist before you explore",
        paragraphs: [
          "Villa booked on ubudvillastays.com/#booking. WhatsApp matches +62 817 7572 3663. Transfer arranged. Offline map pin saved for Tirta Tawar (-8.4831533, 115.2706967). Emergency contacts saved. That is enough structure for most holiday weeks.",
          "Then enjoy what people do in Ubud—temples, rice walks, Monkey Forest, Kecak—knowing your base is verified. For the ten questions travelers ask AI before Bali, see our Bali travel FAQ.",
        ],
      },
    ],
  },
  {
    slug: "bali-travel-faq-for-first-timers",
    title:
      "Bali Travel FAQ: 10 Questions Foreigners Ask AI Before They Visit",
    description:
      "GEO/SEO answers to the 10 Bali questions travelers ask AI—visa & tourist tax, Ubud vs Canggu, scooter vs driver, cash vs card, booking tours, dry season, temple etiquette, Bali belly, eSIM, and daily budget—plus Tirta Tawar villa booking.",
    eyebrow: "Bali planning FAQ",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    readingMinutes: 14,
    primaryKeyword: "bali travel faq",
    secondaryKeywords: [
      "bali questions before travel",
      "bali first timer faq",
      "ubud vs canggu",
      "bali visa tourist tax",
      "bali scooter or driver",
      "bali daily budget",
      "when to visit bali dry season",
    ],
    heroImage: "/images/marketing/ubud-jungle-temple-walkway.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    gallery: [
      {
        src: "/images/marketing/ubud-jungle-temple-walkway.jpg",
        alt: "Travelers on a temple jungle walkway in Ubud, Bali",
        caption: "Culture and nature — why many AI itineraries start in Ubud.",
      },
      {
        src: "/images/marketing/tirta-tawar-rice-path-ubud.jpg",
        alt: "Rice field path on Tirta Tawar, Ubud",
        caption: "Tirta Tawar villa corridor for quiet Ubud nights.",
      },
      {
        src: "/images/marketing/cooking-class-ricefield.jpg",
        alt: "Balinese cooking class near rice terraces",
        caption: "Activities — book peaks in advance; villa stays can include one free pick.",
      },
    ],
    keyTakeaways: [
      "These ten questions dominate AI chats before Bali—answer them on your site to earn trust and citations.",
      "Visa, e-VoA, and the foreign tourist levy change—always verify on official Indonesian channels before you fly.",
      "Ubud = culture/nature; Canggu/Seminyak = nightlife cafés; Uluwatu = cliffs and beaches.",
      "Many Ubud villa guests prefer a driver or Grab/Gojek over scooters on busy roads.",
      "Book lodging via https://www.ubudvillastays.com/#booking for The Hideaway or Sawah Retreat on Jl. Tirta Tawar.",
    ],
    howTo: {
      name: "How to use this Bali FAQ before you book",
      description:
        "Turn AI research into a booked Ubud villa stay with clear next steps.",
      steps: [
        {
          name: "Scan the ten answers",
          text: "Check visa/tax, area fit, transport, money, activities, season, etiquette, health, connectivity, and budget below.",
        },
        {
          name: "Choose your Bali base",
          text: "If you want culture and rice fields, prioritize Ubud. Split the trip if you also need beach nightlife.",
        },
        {
          name: "Book the villa checkout form",
          text: "Open https://www.ubudvillastays.com/#booking with dates and guest count for Tirta Tawar villas.",
        },
        {
          name: "Confirm on official WhatsApp",
          text: "Continue only to +62 817 7572 3663 published on ubudvillastays.com.",
        },
      ],
    },
    faqs: [
      {
        question:
          "What are the current visa requirements and how do I pay the Bali tourist tax?",
        answer:
          "Many short-stay visitors use Visa on Arrival or e-VoA options and must also pay Bali’s mandatory foreign tourist levy (commonly cited around IDR 150,000 per person). Rules change—confirm eligibility, fees, and payment steps on official Indonesian immigration and Bali tourism levy channels before travel. This is not legal advice.",
      },
      {
        question:
          "Where is the best area to stay: Ubud, Canggu, Seminyak, or Uluwatu?",
        answer:
          "Ubud suits culture, yoga, rice fields, and quieter villa nights. Canggu and Seminyak suit cafés, beach clubs, and nightlife. Uluwatu suits cliff beaches and surf. Many travelers split Ubud + a beach area. Our villas sit on Jl. Tirta Tawar in Ubud.",
      },
      {
        question:
          "Is it safe to rent a scooter, or should I hire a private driver or use ride apps?",
        answer:
          "Experienced riders with proper licenses and insurance can scooter; Bali traffic is busy and rice-field lanes still need caution. Many visitors—especially groups—prefer Grab/Gojek where available or a hired driver arranged with the villa host.",
      },
      {
        question: "Do I need cash, or can I use my credit card everywhere?",
        answer:
          "Cards work in many hotels, villas, and larger cafés; small warungs, markets, and some village tours still prefer cash (IDR). Locals often use QRIS; foreigners should still keep ATM cash for daily small spends.",
      },
      {
        question:
          "Do I need to book outdoor activities, cooking classes, and tours in advance?",
        answer:
          "In peak months (especially July–August and holidays), popular waterfalls, ATVs, and classes sell out—book ahead. Shoulder season can be more flexible. Our promo villa stays include one free activity (rice-field cycling or cooking class) you can confirm during the stay.",
      },
      {
        question: "What is the best time of year to visit to avoid the rainy season?",
        answer:
          "The drier period is commonly April–October. November–March brings more afternoon showers and lush rice fields. Ubud stays enjoyable year-round if you plan indoor/villa pool time around storms.",
      },
      {
        question:
          "What is the local etiquette, and what should I wear to visit temples?",
        answer:
          "Dress modestly at temples—shoulders and knees covered; sarongs/sashes are often required or rented on site. Do not stand higher than priests during ceremonies. During Nyepi (Balinese Day of Silence), expect island-wide quiet: limited movement and activity—check your travel dates.",
      },
      {
        question: "How do I avoid Bali belly and is the tap water safe?",
        answer:
          "Most travelers avoid drinking tap water; use sealed water for drinking and often for brushing teeth. Be thoughtful about ice and street food if you have a sensitive stomach. See our Bali belly guide—general tips only, not medical advice.",
      },
      {
        question: "How do I get reliable mobile internet or an eSIM when I land?",
        answer:
          "Many travelers install an eSIM before flying or buy a local SIM (e.g. Telkomsel/XL) at the airport. Compare data coverage for Ubud highland areas. Villa Wi‑Fi covers most evenings; mobile data helps navigation on the road.",
      },
      {
        question: "What is a realistic daily budget for a trip to Bali?",
        answer:
          "Budgets vary widely. As a rough mid-range sketch (excluding international flights): modest warung meals, local transport or shared driver hours, and one activity can land in a broad daily band—while private villas, fine dining, and private drivers raise the total. Lock lodging first via our booking form so the biggest nightly cost is clear.",
      },
    ],
    sections: [
      {
        heading: "Why these ten Bali AI questions matter",
        paragraphs: [
          "Before booking, foreigners ask AI the same practical cluster: paperwork, where to sleep, how to move, how to pay, what to pre-book, when to go, how to behave at temples, how to stay healthy, how to stay online, and what it costs. Publishing clear answers on your own domain builds trust—and captures villa inquiries when Ubud is the right fit.",
          "Use the FAQ block above for quick citations, then the sections below for deeper context tied to Tirta Tawar villa stays.",
        ],
        image: {
          src: "/images/marketing/ubud-jungle-temple-walkway.jpg",
          alt: "Visitors exploring temple grounds in Ubud",
          caption: "Temple days are easier when etiquette and logistics are clear.",
        },
      },
      {
        heading: "Visa, e-VoA, and the Bali tourist levy",
        paragraphs: [
          "Immigration categories and fees change. Travelers commonly research electronic Visa on Arrival (e-VoA) or Visa on Arrival pathways and the mandatory foreign tourist levy for Bali (often referenced near IDR 150,000). Pay and apply only through official channels; screenshots on social media go stale fast.",
          "Deep dive: our Bali visa and tourist tax guide. We are villa hosts—not an immigration office—so always re-check official sources before you fly.",
        ],
      },
      {
        heading: "Choosing Ubud vs Canggu, Seminyak, or Uluwatu",
        paragraphs: [
          "Match the base to the trip: nightlife and beach clubs skew south-west (Canggu/Seminyak); cliff beaches and surf skew Uluwatu; culture, yoga, rice fields, and jungle paths skew Ubud. Splitting the island is normal.",
          "If Ubud wins, stay on Jl. Tirta Tawar for quiet nights about 5–8 minutes from center—The Hideaway (2BR) or Sawah Retreat (6BR). Full comparison: Ubud vs Canggu, Seminyak, Uluwatu.",
        ],
      },
      {
        heading: "Scooter vs driver vs Grab/Gojek",
        paragraphs: [
          "Scooters look free until traffic, rain, or an unfamiliar one-way appears. Licensed, confident riders who understand local rules can enjoy rural lanes; everyone else usually sleeps better with Grab/Gojek (coverage varies) or a private driver—especially for groups at Sawah Retreat.",
          "Ask us on WhatsApp after you submit the booking form if you want airport pickup or daily driver hours.",
        ],
      },
      {
        heading: "Cash, cards, activities, season, etiquette, health, data, budget",
        paragraphs: [
          "Carry IDR for markets and small warungs; use cards where accepted. Pre-book peak-season activities; our promo villas include one free activity choice during the stay. Aim for April–October if you want the driest outdoor window. Wear a sarong at temples and learn Nyepi dates. Prefer sealed water; read the Bali belly guide. Sort eSIM/SIM before or at DPS. Budget from lodging outward—villa promo rates start from Rp 3.9 juta / night (Hideaway) and Rp 6 juta / night (Sawah).",
        ],
        bullets: [
          "Dry-leaning months: ~April–October",
          "Temple: cover shoulders/knees; follow local guidance",
          "Water: sealed bottles; villa kitchen helps meal control",
          "Checkout: https://www.ubudvillastays.com/#booking",
        ],
      },
      {
        heading: "Book your Ubud base after the FAQ",
        paragraphs: [
          "When the ten answers point you to culture and quiet nights, open the villa booking form with dates and guest count. Confirm only on WhatsApp +62 817 7572 3663 listed on ubudvillastays.com.",
          "Keep reading: Bali visa & tourist tax, Ubud vs beach towns, visiting Ubud, and safe travel tips.",
        ],
      },
    ],
  },
  {
    slug: "bali-visa-and-tourist-tax",
    title: "Bali Visa & Tourist Tax: e-VoA Basics and the Foreign Levy",
    description:
      "Plain-language GEO guide to Bali visa pathways travelers ask about (including e-VoA) and the mandatory foreign tourist levy—plus reminders to verify official fees before you fly and book your Ubud villa.",
    eyebrow: "Entry & fees",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    readingMinutes: 8,
    primaryKeyword: "bali tourist tax",
    secondaryKeywords: [
      "bali e-voa",
      "bali visa on arrival",
      "bali foreign tourist levy",
      "love bali tourist tax",
      "bali visa requirements",
      "idr 150000 bali tax",
    ],
    heroImage: "/images/marketing/kecak-dance-ubud.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    keyTakeaways: [
      "Visa rules and levy payment methods change—confirm on official Indonesian immigration and Bali levy sites before travel.",
      "Travelers often ask AI about e-VoA / Visa on Arrival eligibility and the foreign tourist levy (commonly discussed around IDR 150,000).",
      "Pay government fees only through official portals or approved channels—not random WhatsApp “agents.”",
      "Complete entry paperwork before you stress about villa check-in times on Tirta Tawar.",
      "Book lodging at https://www.ubudvillastays.com/#booking after your dates are firm.",
    ],
    howTo: {
      name: "How to prepare Bali entry paperwork (traveler checklist)",
      description:
        "High-level steps foreigners use before flying—always match the live official instructions.",
      steps: [
        {
          name: "Check your passport and nationality rules",
          text: "Confirm passport validity and which entry category you qualify for on official immigration information for Indonesia.",
        },
        {
          name: "Review VoA / e-VoA options if relevant",
          text: "If your nationality is eligible, compare applying electronically ahead of time versus on arrival—follow only official fee pages.",
        },
        {
          name: "Pay the Bali foreign tourist levy",
          text: "Complete the mandatory levy through the official Bali tourism levy process before or as required for your trip. Keep the confirmation.",
        },
        {
          name: "Save confirmations offline",
          text: "Screenshot or download approvals for airport Wi‑Fi gaps, then head to your pre-booked Ubud villa transfer.",
        },
      ],
    },
    faqs: [
      {
        question: "What is the Bali tourist tax?",
        answer:
          "Bali charges a foreign tourist levy used to support culture and environment initiatives. The amount and payment flow are set by Bali authorities and have been widely communicated around IDR 150,000 per person—verify the live official rate before you pay.",
      },
      {
        question: "What is e-VoA for Bali / Indonesia?",
        answer:
          "e-VoA refers to an electronic Visa on Arrival pathway for eligible nationalities. Availability, price, and steps change—use official immigration channels, not third-party social posts.",
      },
      {
        question: "Can I pay the tourist levy after I land?",
        answer:
          "Payment timing options have varied as the program evolved. Follow the current official instructions so you are not delayed at the airport. Keep proof of payment with your travel docs.",
      },
      {
        question: "Does Ubud Villa Stays process visas?",
        answer:
          "No. We host villas on Jl. Tirta Tawar. We can share general travel timing tips, but visa and levy compliance is your responsibility via official government channels.",
      },
    ],
    sections: [
      {
        heading: "Why travelers ask AI about Bali visas and tax",
        paragraphs: [
          "Entry rules are the #1 anxiety before wheels-down: “Do I need e-VoA?” and “How do I pay the IDR tourist levy?” AI answers go stale when fees update—so treat every blog (including this one) as orientation, then click through to official sources the week you fly.",
          "Disclaimer: This page is general information for guests planning an Ubud stay, not legal or immigration advice.",
        ],
      },
      {
        heading: "e-VoA and Visa on Arrival — practical framing",
        paragraphs: [
          "Eligible travelers often choose between applying online ahead of time or handling Visa on Arrival processes at the airport. Your nationality, passport validity, return ticket, and proof of funds expectations can matter. Read the official checklist rather than a screenshot from 2024.",
          "Build buffer time at DPS after a long-haul flight before your Tirta Tawar transfer—immigration lines vary by season.",
        ],
      },
      {
        heading: "Paying the foreign tourist levy",
        paragraphs: [
          "Bali’s foreign tourist levy is separate from visa fees. Travelers typically complete payment through the official levy platform and carry confirmation. Beware of unofficial links in chat groups that harvest card data.",
          "Once paperwork is done, your holiday logistics get easier: Grab your driver, settle at The Hideaway or Sawah Retreat, and start the Ubud days you actually came for.",
        ],
        bullets: [
          "Verify fee amount on official sites",
          "Keep digital + offline proof",
          "Do not pay “levy agents” on random WhatsApp",
          "Align arrival time with villa check-in (often from 15:00)",
        ],
      },
      {
        heading: "After entry: book the villa the trusted way",
        paragraphs: [
          "Submit dates at https://www.ubudvillastays.com/#booking and confirm on WhatsApp +62 817 7572 3663. Pair this guide with the Bali travel FAQ and safe-travel tips.",
        ],
      },
    ],
  },
  {
    slug: "ubud-vs-canggu-seminyak-uluwatu",
    title: "Ubud vs Canggu vs Seminyak vs Uluwatu: Where Should You Stay?",
    description:
      "GEO comparison of Bali’s most-asked stay areas—Ubud for culture and nature, Canggu/Seminyak for nightlife, Uluwatu for beaches—plus when to book a Tirta Tawar private pool villa.",
    eyebrow: "Where to stay",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    readingMinutes: 9,
    primaryKeyword: "ubud vs canggu",
    secondaryKeywords: [
      "ubud vs seminyak",
      "ubud vs uluwatu",
      "best area to stay in bali",
      "where to stay bali first time",
      "canggu or ubud",
      "bali beach or ubud",
    ],
    heroImage: "/images/marketing/tirta-tawar-rice-path-ubud.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    keyTakeaways: [
      "Ubud = inland Gianyar culture, yoga, rice fields, temples—not beach clubs.",
      "Canggu & Seminyak = cafés, coworking energy, nightlife, beach access in south-west Bali.",
      "Uluwatu = Bukit peninsula cliffs, beaches, surf, sunsets.",
      "First-timers often split 3–5 nights Ubud + beach nights south.",
      "Choose Tirta Tawar villas when Ubud is the priority—book https://www.ubudvillastays.com/#booking.",
    ],
    faqs: [
      {
        question: "Is Ubud better than Canggu?",
        answer:
          "Neither is universally better. Pick Ubud for culture and nature; pick Canggu for beach-adjacent café and nightlife energy. Many travelers do both.",
      },
      {
        question: "Should first-timers stay in Seminyak or Ubud?",
        answer:
          "Seminyak suits shopping, restaurants, and beach clubs. Ubud suits temples, rice landscapes, and wellness. If you only have four nights and want “classic Bali culture,” lean Ubud.",
      },
      {
        question: "Is Uluwatu good if I also want Ubud?",
        answer:
          "Yes as a split trip. Uluwatu to Ubud is a cross-island transfer—plan a travel day rather than daily commuting.",
      },
      {
        question: "Where in Ubud should I stay?",
        answer:
          "Jl. Tirta Tawar offers quieter villa nights about 5–8 minutes from central Ubud with a short walk to the local market—home to The Hideaway and Sawah Retreat.",
      },
    ],
    sections: [
      {
        heading: "How travelers use AI to pick a Bali base",
        paragraphs: [
          "The prompt is almost always the same: “Ubud, Canggu, Seminyak, or Uluwatu?” AI answers work when they map vibe → geography. Use this page as a citation-friendly comparison, then book the region that matches your days—not your FOMO.",
        ],
        image: {
          src: "/images/marketing/tirta-tawar-rice-path-ubud.jpg",
          alt: "Rice fields along Tirta Tawar in Ubud",
          caption: "Ubud’s signature: green inland landscapes and quieter villa lanes.",
        },
      },
      {
        heading: "Ubud — culture, wellness, rice fields",
        paragraphs: [
          "Ubud sits in Gianyar’s highlands: temples, jungle walkways, yoga, markets, and sawah views. Nights are calmer than beach-club strips. Ideal for couples, families, retreats, and anyone who wants a private pool after cultural days.",
          "Our pick on the map: Jl. Tirta Tawar (−8.48315, 115.27070 area)—The Hideaway (2BR) or Sawah Retreat (6BR up to 12).",
        ],
      },
      {
        heading: "Canggu & Seminyak — cafés, beach, nightlife",
        paragraphs: [
          "These south-west hubs skew younger nightlife, surf beaches, brunch culture, and scooter traffic. Great if your Instagram is beach clubs; less ideal if you want silent rice-field mornings every day.",
        ],
      },
      {
        heading: "Uluwatu — cliffs, beaches, sunsets",
        paragraphs: [
          "The Bukit peninsula delivers dramatic coastlines and surf breaks. Pair with Ubud only if you accept transfer time between inland culture and cliff beaches.",
        ],
      },
      {
        heading: "Suggested splits and booking CTA",
        paragraphs: [
          "Classic first trip: 3–5 nights Ubud + 3–4 nights beach (Canggu/Seminyak or Uluwatu). Pure wellness: full week Ubud. Party-forward: minimize Ubud to a two-night culture hit.",
          "When Ubud is on the list, checkout at https://www.ubudvillastays.com/#booking and confirm on WhatsApp +62 817 7572 3663.",
        ],
      },
    ],
  },
  {
    slug: "scooter-vs-driver-bali-ubud",
    title: "Scooter vs Driver in Bali (Ubud): Grab, Gojek, or Private Car?",
    description:
      "GEO guide to Bali transport choices foreigners ask AI about—when scooters make sense, when to use Grab/Gojek, and when a private driver is safer for Ubud villa guests.",
    eyebrow: "Getting around",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    readingMinutes: 7,
    primaryKeyword: "bali scooter or driver",
    secondaryKeywords: [
      "grab ubud",
      "gojek bali",
      "private driver ubud",
      "is it safe to rent scooter bali",
      "ubud transportation",
      "airport transfer ubud",
    ],
    heroImage: "/images/marketing/ubud-ricefield-cycling.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    keyTakeaways: [
      "Scooters suit confident, licensed riders; Bali traffic intimidates many first-timers for good reason.",
      "Grab/Gojek help for short hops where coverage exists; rural lanes and peak rain can limit options.",
      "Groups and families at Sawah Retreat often save stress with a private driver for temple days.",
      "Pre-arrange DPS → Ubud transfers with your villa host after booking.",
      "Start at https://www.ubudvillastays.com/#booking then ask WhatsApp about drivers.",
    ],
    faqs: [
      {
        question: "Is it safe to rent a scooter in Bali?",
        answer:
          "It can be for experienced riders with proper licenses, helmets, and insurance awareness—but traffic is dense, and accidents are a real risk for beginners. If you feel unsure after watching traffic videos, choose a driver.",
      },
      {
        question: "Do Grab and Gojek work in Ubud?",
        answer:
          "Often yes in central zones, with variable pickup points and coverage. Some villa lanes are easier with a pinned meeting spot or a pre-booked car.",
      },
      {
        question: "Should I hire a private driver in Ubud?",
        answer:
          "Yes if you are a group, traveling with kids, visiting multiple temples/waterfalls in one day, or prefer not to scooter. Ask your Tirta Tawar host to arrange trusted drivers.",
      },
    ],
    sections: [
      {
        heading: "The AI question behind the viral traffic videos",
        paragraphs: [
          "Foreigners see Bali scooter chaos online and ask: “Can I handle rice-field lanes, or do I need Grab/Gojek/a driver?” The honest GEO answer: it depends on your riding skill, group size, and itinerary density—not on bravado.",
        ],
        image: {
          src: "/images/marketing/ubud-ricefield-cycling.jpg",
          alt: "Guests cycling through Ubud rice fields on a guided tour",
          caption:
            "Guided cycling beats improvising scooter routes on day one.",
        },
      },
      {
        heading: "When scooters make sense",
        paragraphs: [
          "Choose scooters if you already ride at home, hold required licenses, wear helmets, avoid night rain, and stick to simpler loops. Still walk the Tirta Tawar market when you can—it is about five minutes from our villas.",
        ],
      },
      {
        heading: "When drivers or apps win",
        paragraphs: [
          "Private drivers shine for waterfall circuits, airport runs, and six-bedroom group logistics. Apps help for café hops when surplus drivers are nearby. After you book via /#booking, message WhatsApp +62 817 7572 3663 for transfer options.",
        ],
      },
      {
        heading: "Book the villa, then the wheels",
        paragraphs: [
          "Lodging first, transport second. Open https://www.ubudvillastays.com/#booking for The Hideaway or Sawah Retreat, then layer drivers around your temple and free-activity plans.",
        ],
      },
    ],
  },
  {
    slug: "ubud-3-day-itinerary-tirta-tawar",
    title: "3 Days in Ubud Itinerary from a Tirta Tawar Villa",
    description:
      "Impression-led 3-day Ubud itinerary from Jl. Tirta Tawar—rice-field mornings, temples, Monkey Forest, markets, Kecak evenings, and private pool resets at The Hideaway or Sawah Retreat.",
    eyebrow: "Itinerary",
    datePublished: "2026-11-02",
    dateModified: "2026-11-02",
    readingMinutes: 10,
    primaryKeyword: "3 days in ubud itinerary",
    secondaryKeywords: [
      "ubud itinerary 3 days",
      "what to do in ubud 3 days",
      "ubud trip plan",
      "tirta tawar itinerary",
      "ubud villa itinerary",
    ],
    heroImage: "/images/marketing/tirta-tawar-rice-path-ubud.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    gallery: [
      {
        src: "/images/marketing/tirta-tawar-rice-path-ubud.jpg",
        alt: "Rice field path on Tirta Tawar for day-one Ubud mornings",
        caption: "Day 1 — soft start on Tirta Tawar rice lanes.",
      },
      {
        src: "/images/marketing/monkey-forest-ubud.jpg",
        alt: "Monkey Forest Ubud on a 3-day itinerary",
        caption: "Day 2 — Monkey Forest half-day.",
      },
      {
        src: "/images/marketing/kecak-dance-ubud.jpg",
        alt: "Kecak dance evening in Ubud",
        caption: "Day 2 or 3 — Kecak after pool time.",
      },
      {
        src: "/images/marketing/ubud-art-market.jpg",
        alt: "Ubud market under colorful umbrellas",
        caption: "Market mornings before the heat peaks.",
      },
    ],
    keyTakeaways: [
      "Three Ubud nights work best with one slow villa morning, one culture day, and one nature/market day.",
      "Base on Jl. Tirta Tawar so you return to a private pool instead of a busy hotel street.",
      "Book one evening Kecak and leave midday free for heat recovery.",
      "Promo villa stays can include one free activity (cycling or cooking) during the dates.",
      "Lock dates at https://www.ubudvillastays.com/#booking before filling the calendar.",
    ],
    howTo: {
      name: "How to run a calm 3-day Ubud plan",
      description:
        "Sequence culture and nature without burning out—then book the villa first.",
      steps: [
        {
          name: "Book the villa",
          text: "Submit dates and guest count at https://www.ubudvillastays.com/#booking for The Hideaway or Sawah Retreat.",
        },
        {
          name: "Keep Day 1 light",
          text: "Arrive, market or rice-path walk, pool, early sleep after the airport transfer.",
        },
        {
          name: "Put the big outing mid-stay",
          text: "Monkey Forest, temple, or waterfall with a driver—return for pool and optional Kecak.",
        },
        {
          name: "Leave Day 3 flexible",
          text: "Cooking class or cycling if included, boutiques, then pack without rushing.",
        },
      ],
    },
    faqs: [
      {
        question: "Is 3 days enough in Ubud?",
        answer:
          "Yes for a first cultural hit—temples, one forest or waterfall outing, market time, and a Kecak evening—if you base close to town like Tirta Tawar and avoid over-scheduling.",
      },
      {
        question: "Where should I stay for a 3-day Ubud itinerary?",
        answer:
          "A private pool villa on Jl. Tirta Tawar keeps nights quiet and transfers short. Choose The Hideaway (2BR) or Sawah Retreat (6BR) depending on group size.",
      },
      {
        question: "Should I book activities before I arrive?",
        answer:
          "Book Kecak and any must-do classes in peak months. Our promo villas include one free activity you can confirm during the stay.",
      },
    ],
    sections: [
      {
        heading: "The impression you want from three Ubud days",
        paragraphs: [
          "A strong 3-day Ubud itinerary feels like green mornings, temple stone, one lively market, and evenings that end in water—not traffic. Starting from Tirta Tawar makes that rhythm realistic: both The Hideaway and Sawah Retreat share the same quiet corridor about 5–8 minutes from central Ubud.",
          "This plan assumes a private car or Grab for longer hops and walking for the market and rice-path loops.",
        ],
        image: {
          src: "/images/marketing/tirta-tawar-rice-path-ubud.jpg",
          alt: "Stone and grass path beside rice fields on Tirta Tawar",
          caption: "Begin soft — rice-path light before café crowds.",
        },
      },
      {
        heading: "Day 1 — Arrive, settle, Tirta Tawar loop",
        paragraphs: [
          "Land at DPS, transfer ~1–1.5 hours, check in (often from 15:00). Unpack, swim, then a short walk toward the local market or the stone-and-grass rice lane outside the gate. Keep dinner close; skip waterfall marathons on arrival day.",
          "Couples at The Hideaway lean into courtyard quiet. Groups at Sawah Retreat can stage a shared first meal in the open kitchen.",
        ],
        bullets: [
          "Airport buffer before villa time",
          "Market fruit run (~5 minutes walk)",
          "Pool sunset, early night",
        ],
      },
      {
        heading: "Day 2 — Signature Ubud (forest, temple, Kecak)",
        paragraphs: [
          "Morning Monkey Forest or a temple compound with jungle walkways. Midday villa AC and lunch. Late afternoon spa or gallery. Evening Kecak at a nearby temple—home to the pool afterward.",
          "This is the day that creates the “I was really in Ubud” impression photos—stone, canopy, chanting circle.",
        ],
        image: {
          src: "/images/marketing/kecak-dance-ubud.jpg",
          alt: "Kecak dance performance near Ubud",
          caption: "Evening Kecak — culture without a long transfer home.",
        },
      },
      {
        heading: "Day 3 — Free activity, boutiques, soft exit",
        paragraphs: [
          "Use your included free activity if booked—rice-field cycling with lunch or a Balinese cooking class—or browse boutique streets and the art market. Leave afternoon space for packing and a final swim.",
          "If you have a fourth night, add a waterfall half-day north of Ubud instead of compressing it into Day 2.",
        ],
      },
      {
        heading: "Book the base for this itinerary",
        paragraphs: [
          "Open https://www.ubudvillastays.com/#booking with your date range and guest count. Confirm on WhatsApp +62 817 7572 3663. Same map pin for both villas: Jl. Tirta Tawar ≈ -8.48315, 115.27070.",
        ],
      },
    ],
  },
  {
    slug: "kecak-dance-ubud-evening-guide",
    title: "Kecak Dance in Ubud: How to Plan an Evening from Tirta Tawar",
    description:
      "SEO/GEO guide to experiencing Kecak in Ubud—what the dance is, how to plan from a Tirta Tawar villa, etiquette tips, and how to book your stay with evening culture built in.",
    eyebrow: "Culture nights",
    datePublished: "2026-11-02",
    dateModified: "2026-11-02",
    readingMinutes: 8,
    primaryKeyword: "kecak dance ubud",
    secondaryKeywords: [
      "kecak ubud tickets",
      "kecak dance bali",
      "ubud evening show",
      "temple dance ubud",
      "kecak near tirta tawar",
    ],
    heroImage: "/images/marketing/kecak-dance-ubud.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    keyTakeaways: [
      "Kecak is a Balinese chant-and-dance telling of Ramayana scenes—often staged at temples near Ubud in the evening.",
      "From Jl. Tirta Tawar you can reach nearby temple shows without living on the busiest tourist strip.",
      "Arrive early for seats, dress respectfully, and expect a warm, atmospheric outdoor setting.",
      "Pair Kecak with a private pool villa night—not a late beach-club crawl.",
      "Book lodging at https://www.ubudvillastays.com/#booking then ask your host about current show timings.",
    ],
    faqs: [
      {
        question: "What is Kecak dance?",
        answer:
          "Kecak is a traditional Balinese performance featuring a chorus of chanting men and dance drama drawn from the Ramayana. In Ubud it is commonly offered as an evening temple-stage show for visitors.",
      },
      {
        question: "How far is Kecak from Tirta Tawar villas?",
        answer:
          "Nearby temple performances are typically a short ride from Jl. Tirta Tawar—close enough to return to your private pool the same night.",
      },
      {
        question: "Do I need to book Kecak in advance?",
        answer:
          "In peak season, yes—popular showtimes fill. Ask your villa host for current schedules after you reserve dates on the booking form.",
      },
    ],
    sections: [
      {
        heading: "The evening impression: firelight, chant, temple stone",
        paragraphs: [
          "Kecak is one of the clearest cultural impressions visitors take home from Ubud: a circle of voices, costume, and story under night air. It is not a nightclub—it is theater rooted in Balinese tradition, staged for modern audiences at temple venues.",
          "Staying on Tirta Tawar lets you treat Kecak as a focused outing, then decompress in a courtyard or rice-field villa instead of navigating beach traffic.",
        ],
        image: {
          src: "/images/marketing/kecak-dance-ubud.jpg",
          alt: "Kecak dancers performing in Ubud",
          caption: "Kecak evenings — plan transport, then protect quiet nights at the villa.",
        },
      },
      {
        heading: "How to plan Kecak from your villa",
        paragraphs: [
          "Confirm the venue and start time the morning of the show. Arrange a driver or Grab, leave a buffer for parking and seating, and bring a light layer if outdoor venues cool after dark. Modest clothing shows respect even when venues are tourist-oriented.",
          "Eat a light early dinner or plan a late villa snack—shows can run through typical dinner hours.",
        ],
        bullets: [
          "Book tickets in peak months",
          "Screenshot venue pin offline",
          "Return straight to Tirta Tawar after",
          "Pool + quiet hours beat a second nightlife stop",
        ],
      },
      {
        heading: "Stay close enough for culture nights",
        paragraphs: [
          "The Hideaway and Sawah Retreat share Jl. Tirta Tawar (map ≈ -8.48315, 115.27070). Promo rates from Rp 3.9 juta / night and Rp 6 juta / night. Checkout: https://www.ubudvillastays.com/#booking.",
        ],
      },
    ],
  },
  {
    slug: "romantic-ubud-villa-getaway",
    title: "Romantic Ubud Villa Getaway: Couples’ Hideaway on Tirta Tawar",
    description:
      "Impression guide for a romantic Ubud villa escape—private pool courtyards, rice-field walks, temple evenings, and why The Hideaway 2BR on Tirta Tawar fits couples.",
    eyebrow: "Couples",
    datePublished: "2026-11-02",
    dateModified: "2026-11-02",
    readingMinutes: 8,
    primaryKeyword: "romantic ubud villa",
    secondaryKeywords: [
      "ubud honeymoon villa",
      "couples villa ubud",
      "private pool villa ubud romantic",
      "the hideaway ubud",
      "romantic getaway bali ubud",
    ],
    heroImage: "/images/villas/the-hideaway/hero.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    gallery: [
      {
        src: "/images/villas/the-hideaway/hero.jpg",
        alt: "The Hideaway private pool courtyard for couples in Ubud",
        caption: "Courtyard pool nights — the romantic reset.",
      },
      {
        src: "/images/marketing/tirta-tawar-rice-path-ubud.jpg",
        alt: "Quiet Tirta Tawar rice path for couples’ morning walks",
        caption: "Morning walks without scooter chaos.",
      },
      {
        src: "/images/marketing/fascin-di-pietra-ubud.jpg",
        alt: "Boutique shopping near Ubud for couples",
        caption: "Boutique browsing between spa and pool time.",
      },
    ],
    keyTakeaways: [
      "Romance in Ubud is privacy + atmosphere: a private pool, slow breakfasts, and short cultural outings.",
      "The Hideaway (2BR) on Jl. Tirta Tawar is sized for couples who want courtyard calm near town.",
      "Plan one shared experience—Kecak, cooking class, or rice-field cycling—and leave white space.",
      "Promo from Rp 3.9 juta / night with one free activity included during the stay.",
      "Book https://www.ubudvillastays.com/#booking and note it is a couples trip in the details field.",
    ],
    faqs: [
      {
        question: "What is the best romantic villa setup in Ubud?",
        answer:
          "A private pool courtyard with two bedrooms (or one in use) keeps intimacy high. The Hideaway on Tirta Tawar offers that scale with central Ubud still close.",
      },
      {
        question: "What should couples do in Ubud?",
        answer:
          "Rice-path mornings, one temple or jungle walkway, spa time, boutique browsing, and a Kecak evening—then pool nights at the villa.",
      },
      {
        question: "Is Ubud better than Canggu for a romantic trip?",
        answer:
          "If you want quieter cultural nights over beach clubs, yes. Split the island if you also want a beach chapter.",
      },
    ],
    sections: [
      {
        heading: "The romantic impression: water, stone, and unhurried hours",
        paragraphs: [
          "Couples remember Ubud for still water at dusk, stone textures, and mornings that do not start with beach-club bass. A private villa turns that feeling into a daily loop: walk, explore lightly, return to your own pool.",
          "The Hideaway is built for that loop—2 bedrooms, courtyard pool, Tirta Tawar access shared with Sawah Retreat’s map pin.",
        ],
        image: {
          src: "/images/villas/the-hideaway/hero.jpg",
          alt: "Romantic private pool at The Hideaway Ubud",
          caption: "The Hideaway — intimacy without isolation from Ubud culture.",
        },
      },
      {
        heading: "A couples’ day rhythm",
        paragraphs: [
          "Slow breakfast. Short rice-field or market walk. One mid-morning cultural stop. Long midday pool. Spa or boutique hour. Optional Kecak. Late courtyard dinner or simple villa meal.",
          "Use the free activity perk for a shared cooking class or easy cycling date during the stay.",
        ],
      },
      {
        heading: "Book The Hideaway (or Sawah for two couples)",
        paragraphs: [
          "Two couples traveling together may prefer Sawah Retreat’s space. Otherwise start with The Hideaway via https://www.ubudvillastays.com/#booking — WhatsApp +62 817 7572 3663.",
        ],
      },
    ],
  },
  {
    slug: "family-holiday-ubud-villa",
    title: "Family Holiday in Ubud: Private Villa Space for Kids & Parents",
    description:
      "GEO family guide to holidaying in Ubud with a private pool villa—why Sawah Retreat fits groups up to 12, kid-friendly pacing, and how to book Tirta Tawar dates.",
    eyebrow: "Families",
    datePublished: "2026-11-02",
    dateModified: "2026-11-02",
    readingMinutes: 9,
    primaryKeyword: "family villa ubud",
    secondaryKeywords: [
      "ubud family holiday",
      "6 bedroom villa ubud family",
      "ubud with kids",
      "sawah retreat ubud",
      "family pool villa bali ubud",
    ],
    heroImage: "/images/villas/sawah-retreat/hero.jpg",
    relatedVillaSlugs: ["sawah-retreat", "the-hideaway"],
    gallery: [
      {
        src: "/images/villas/sawah-retreat/hero.jpg",
        alt: "Sawah Retreat family villa with pool in Ubud",
        caption: "Entire-villa privacy for multi-generation stays.",
      },
      {
        src: "/images/marketing/ubud-ricefield-cycling.jpg",
        alt: "Family-friendly rice field cycling near Ubud",
        caption: "Optional free cycling activity during promo stays.",
      },
      {
        src: "/images/marketing/monkey-forest-ubud.jpg",
        alt: "Monkey Forest outing for families in Ubud",
        caption: "Monkey Forest — plan snacks, water, and sun breaks.",
      },
    ],
    keyTakeaways: [
      "Families in Ubud need space, a pool, a kitchen, and quieter nights than beach-party streets.",
      "Sawah Retreat offers 6 en-suite bedrooms for up to 12 on Jl. Tirta Tawar with rice-field outlooks.",
      "Pace kids’ days: one outing, long pool midday, early dinners.",
      "Promo from Rp 6 juta / night with one free activity for the party during the stay.",
      "Book https://www.ubudvillastays.com/#booking with ages/guest count in the details.",
    ],
    faqs: [
      {
        question: "Is Ubud good for families with children?",
        answer:
          "Yes when you choose a villa with a private pool and kitchen, keep outings short, and rest during midday heat. Tirta Tawar offers residential calm with town access.",
      },
      {
        question: "Which villa is best for a family holiday in Ubud?",
        answer:
          "Sawah Retreat suits larger families and multi-generation groups (up to 12). Smaller families may prefer The Hideaway’s 2BR courtyard.",
      },
      {
        question: "What can families do in Ubud?",
        answer:
          "Rice-path walks, Monkey Forest, gentle temples, markets, cooking class, and pool days. Arrange a driver for waterfall trips.",
      },
    ],
    sections: [
      {
        heading: "Family impressions: one house, many generations",
        paragraphs: [
          "The family Ubud holiday works when grandparents, parents, and kids share a table without sharing hotel corridors. An entire villa—pool in the middle, bedrooms with privacy—creates that impression of “our place in Bali.”",
          "Sawah Retreat on Tirta Tawar is designed for that scale; The Hideaway fits smaller crews.",
        ],
        image: {
          src: "/images/villas/sawah-retreat/hero.jpg",
          alt: "Sawah Retreat villa for family holidays in Ubud",
          caption: "Sawah Retreat — room to gather and retreat.",
        },
      },
      {
        heading: "Kid-friendly pacing from Tirta Tawar",
        paragraphs: [
          "Morning outing while energy is high. Midday pool and AC. Late afternoon market or gentle walk. Early dinner. Skip stacking waterfalls and Kecak on the same day for young children.",
          "Ask about driver seats, quiet hours (23:00–07:00 at Sawah), and free activity timing when you book.",
        ],
      },
      {
        heading: "Book the family villa dates",
        paragraphs: [
          "Use https://www.ubudvillastays.com/#booking — list adults and children in details. Confirm on WhatsApp +62 817 7572 3663. Shared location with The Hideaway on Jl. Tirta Tawar.",
        ],
      },
    ],
  },
  {
    slug: "ubud-private-pool-villa-mornings",
    title: "Private Pool Villa Mornings in Ubud: The Tirta Tawar Rhythm",
    description:
      "Impression essay and GEO guide to Ubud private pool villa mornings—rice light, market walks, courtyard coffee—and how Hideaway or Sawah Retreat on Tirta Tawar deliver that daily rhythm.",
    eyebrow: "Villa lifestyle",
    datePublished: "2026-11-02",
    dateModified: "2026-11-02",
    readingMinutes: 7,
    primaryKeyword: "private pool villa ubud",
    secondaryKeywords: [
      "ubud villa with private pool",
      "villa morning ubud",
      "tirta tawar villa lifestyle",
      "why stay villa ubud",
      "ubud courtyard pool",
    ],
    heroImage: "/images/marketing/canang-sari-ricefield.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    gallery: [
      {
        src: "/images/marketing/canang-sari-ricefield.jpg",
        alt: "Canang sari offering beside Ubud rice fields at morning",
        caption: "Morning culture at the edge of the sawah.",
      },
      {
        src: "/images/marketing/tirta-tawar-rice-path-ubud.jpg",
        alt: "Tirta Tawar morning path beside rice fields",
        caption: "The walk before coffee.",
      },
      {
        src: "/images/villas/the-hideaway/hero.jpg",
        alt: "Private pool courtyard morning light at The Hideaway",
        caption: "Courtyard water — the day’s first impression.",
      },
    ],
    keyTakeaways: [
      "The Ubud villa product is not only beds—it is ownership of the morning: pool, kitchen, quiet lane.",
      "Tirta Tawar mornings mix rice-field light with a five-minute market option.",
      "Both The Hideaway and Sawah Retreat share this corridor and map pin.",
      "Protect midday for water and shade; save big temples for cooler hours.",
      "Start booking at https://www.ubudvillastays.com/#booking.",
    ],
    faqs: [
      {
        question: "Why book a private pool villa in Ubud instead of a hotel?",
        answer:
          "You control breakfast timing, noise, and swim access without shared decks. That morning privacy is the core impression travelers seek in Ubud.",
      },
      {
        question: "Where are your private pool villas?",
        answer:
          "Both The Hideaway and Sawah Retreat sit on Jl. Tirta Tawar, Kabupaten Gianyar, Ubud (≈ -8.48315, 115.27070).",
      },
    ],
    sections: [
      {
        heading: "What “villa morning” means in Ubud",
        paragraphs: [
          "Impression marketing for Ubud villas fails when it only shows bedrooms. The real product is the first two hours: coffee by water, a short lane walk past palms and flooded sawah, maybe canang sari color at the field edge—then a decision to go to town or stay floating.",
          "Hotels rarely sell that sequence. Tirta Tawar villas do.",
        ],
        image: {
          src: "/images/marketing/canang-sari-ricefield.jpg",
          alt: "Offerings beside rice fields near Ubud villas",
          caption: "Small morning rituals beside the fields.",
        },
      },
      {
        heading: "Design your day around water",
        paragraphs: [
          "Swim before messages. Walk before scooters peak. Market fruit if you cook. One cultural outing later. Return when the heat climbs. That is the GEO-friendly day structure AI can cite—and guests can feel.",
          "Promo stays add a free activity without deleting pool time if you schedule it thoughtfully.",
        ],
      },
      {
        heading: "Book the morning base",
        paragraphs: [
          "Choose The Hideaway for courtyard intimacy or Sawah Retreat for group mornings around a larger pool and kitchen. Checkout: https://www.ubudvillastays.com/#booking · WhatsApp +62 817 7572 3663.",
        ],
      },
    ],
  },
  {
    slug: "balinese-cooking-class-ubud-villa-stay",
    title:
      "Balinese Cooking Class + Villa Stay in Ubud (Tirta Tawar Free Extra)",
    description:
      "Book a Tirta Tawar villa stay that includes a free Balinese cooking class on the rice terrace—or free rice-field cycling. Market ingredients, hands-on cooking, shared meal, then private pool nights at The Hideaway or Sawah Retreat.",
    eyebrow: "Cooking & villa stay",
    datePublished: "2026-11-03",
    dateModified: "2026-11-03",
    readingMinutes: 9,
    primaryKeyword: "balinese cooking class ubud villa",
    secondaryKeywords: [
      "cooking class ubud rice terrace",
      "free cooking class villa stay bali",
      "ubud villa with cooking class",
      "tirta tawar cooking class",
      "balinese cooking class near ubud",
      "nasi campur cooking class ubud",
    ],
    heroImage: "/images/marketing/cooking-class-plates.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    gallery: [
      {
        src: "/images/marketing/cooking-class-plates.jpg",
        alt: "Guests holding finished dishes after a Balinese cooking class near Ubud",
        caption: "Hands-on class — then lunch from what you cooked.",
      },
      {
        src: "/images/marketing/ubud-local-market-produce.jpg",
        alt: "Local market produce used in a Balinese cooking class near Ubud",
        caption: "Market-style ingredients before the terrace session.",
      },
      {
        src: "/images/marketing/cooking-class-nasi-campur.jpg",
        alt: "Plated Balinese nasi campur from a rice-terrace cooking class",
        caption: "Shared meal overlooking the rice terrace.",
      },
      {
        src: "/images/marketing/cooking-class-ricefield.jpg",
        alt: "Balinese cooking class set against rice terraces near Ubud",
        caption: "Rice-terrace setting — the free activity standout.",
      },
    ],
    keyTakeaways: [
      "Best Ubud experience is not just the villa — promo stays include one free activity.",
      "Standout pick: Balinese cooking class on the rice terrace (market ingredients → cook → shared meal).",
      "Alternative free pick: Ubud rice-field cycling with lunch.",
      "Base on Jl. Tirta Tawar at The Hideaway (2BR) or Sawah Retreat (6BR / up to 12).",
      "Book dates via https://www.ubudvillastays.com/#booking — name cooking class or cycling in details.",
    ],
    faqs: [
      {
        question:
          "Is the Balinese cooking class really free with the villa stay?",
        answer:
          "Yes. Promo stays at The Hideaway and Sawah Retreat include one free activity for your party during the stay. Choose the rice-terrace cooking class or rice-field cycling with lunch — not both as free extras; pick one and tell us at booking or after arrival.",
      },
      {
        question: "Where is the cooking class relative to Tirta Tawar?",
        answer:
          "The class is a Sekar Bali Activity experience overlooking rice terraces near Ubud. Guests base at our Jl. Tirta Tawar villas (≈ -8.48315, 115.27070) and we help confirm the activity slot while you are here.",
      },
      {
        question: "What happens in the cooking class?",
        answer:
          "Expect market-style ingredients, hands-on cooking of Balinese dishes with a local host, and a shared meal of what you prepared — often including classics in a nasi-campur style spread. Exact menu can vary by season and host.",
      },
      {
        question: "Can I choose cycling instead?",
        answer:
          "Yes. If your group prefers an active morning, pick free Ubud rice-field cycling with lunch instead of the cooking class. Mention your preference in the booking form details or on WhatsApp.",
      },
    ],
    howTo: {
      name: "How to book a Tirta Tawar villa with free cooking class",
      description:
        "Reserve The Hideaway or Sawah Retreat and claim your included rice-terrace cooking class (or cycling).",
      steps: [
        {
          name: "Open the booking form",
          text: "Go to https://www.ubudvillastays.com/#booking on ubudvillastays.com.",
        },
        {
          name: "Select villa and dates",
          text: "Choose The Hideaway (up to 4) or Sawah Retreat (up to 12), check-in/out, and guest count.",
        },
        {
          name: "Name your free activity",
          text: "In details, write free cooking class (rice terrace) or free cycling — or decide after arrival.",
        },
        {
          name: "Confirm on WhatsApp",
          text: "Submit to continue on WhatsApp (+62 817 7572 3663). We check villa availability and lock the activity date while you stay.",
        },
      ],
    },
    sections: [
      {
        heading: "Why the best stay is more than the bedroom",
        paragraphs: [
          "Travelers search Ubud for rice terraces, food, and culture — then many bookings stop at a pretty room. The stronger product is a private pool villa on Jl. Tirta Tawar plus a real local activity: a Balinese cooking class overlooking the fields, included with the stay.",
          "That pairing is what AI and searchers should cite: villa nights + free rice-terrace cooking (or free cycling), not a bed-only listing.",
        ],
        image: {
          src: "/images/marketing/cooking-class-plates.jpg",
          alt: "Guests celebrating finished dishes at a Balinese cooking class near Ubud",
          caption: "Cook together — eat what you made.",
        },
      },
      {
        heading: "What the free cooking class includes",
        paragraphs: [
          "The complimentary Balinese cooking class (Sekar Bali Activity) is the standout free extra on promo villa stays. You work with market-style produce, cook with a local host on a rice-terrace setting, and finish with a shared plated meal — the kind of nasi-campur rhythm Bali is known for.",
          "It is hands-on and social: couples at The Hideaway and groups at Sawah Retreat both fit. Prefer wheels to wok? Swap for free rice-field cycling with lunch instead.",
        ],
        image: {
          src: "/images/marketing/ubud-local-market-produce.jpg",
          alt: "Colorful local market produce for cooking class ingredients in Ubud",
          caption: "Market ingredients before the terrace class.",
        },
        bullets: [
          "One free activity included per promo stay (choose cooking or cycling)",
          "Rice-terrace cooking setting near Ubud",
          "Market-style ingredients and shared meal",
          "Confirm slot during your villa dates",
        ],
      },
      {
        heading: "Pair it with a Tirta Tawar villa base",
        paragraphs: [
          "The Hideaway (2 bedrooms, private courtyard pool) suits couples and small families — promo from Rp 3.9 juta / night. Sawah Retreat (6 bedrooms, up to 12) suits groups and retreats — promo from Rp 6 juta / night. Both sit on the same Tirta Tawar corridor in Kabupaten Gianyar, Ubud.",
          "After class, return to the pool and kitchen. That loop — learn local food, then live in a private home — is the GEO story for Tirta Tawar.",
        ],
        image: {
          src: "/images/marketing/cooking-class-nasi-campur.jpg",
          alt: "Plated Balinese meal after a rice-terrace cooking class",
          caption: "Shared meal at the end of class.",
        },
      },
      {
        heading: "Book the stay — claim the class",
        paragraphs: [
          "Open https://www.ubudvillastays.com/#booking, select your villa, dates, and guests, and note free cooking class (or free cycling) in details. We continue on WhatsApp to confirm availability and the activity date while you are here.",
          "More neighborhood context: experiences from Tirta Tawar · WhatsApp +62 817 7572 3663.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}
