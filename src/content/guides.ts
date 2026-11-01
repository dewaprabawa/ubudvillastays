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
  sections: GuideSection[];
};

export const guides: Guide[] = [
  {
    slug: "ubud-experiences-from-tirta-tawar",
    title: "Ubud Experiences from Tirta Tawar: Market, Kecak, Forest & Falls",
    description:
      "Why a Tirta Tawar villa stay is more than a bed—five-minute walk to the local market, Kecak at nearby temples, Monkey Forest and waterfalls close by, plus holiday or longer stays with free extras.",
    eyebrow: "Experience guide",
    datePublished: "2026-11-01",
    dateModified: "2026-11-01",
    readingMinutes: 7,
    primaryKeyword: "things to do near tirta tawar ubud",
    secondaryKeywords: [
      "kecak dance ubud",
      "ubud traditional market",
      "monkey forest ubud villa",
      "waterfall near ubud",
      "ubud vacation rental experience",
    ],
    heroImage: "/images/marketing/kecak-dance-ubud.jpg",
    relatedVillaSlugs: ["the-hideaway", "sawah-retreat"],
    gallery: [
      {
        src: "/images/marketing/ubud-art-market.jpg",
        alt: "Ubud traditional art market stalls under colorful umbrellas",
        caption: "Traditional / art market under colorful umbrellas — about five minutes on foot from Tirta Tawar.",
      },
      {
        src: "/images/marketing/kecak-dance-ubud.jpg",
        alt: "Kecak dance performance at a temple near Ubud, Bali",
        caption: "Kecak dance at a nearby temple — culture within a short ride of the villas.",
      },
      {
        src: "/images/marketing/monkey-forest-ubud.jpg",
        alt: "Macaques at Ubud Monkey Forest",
        caption: "Macaques at Ubud Monkey Forest — an easy outing from Jl. Tirta Tawar.",
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
          "Whether you book a short holiday or a longer investment-friendly stay, both villas are set up for living: private pools, kitchens, fast Wi‑Fi, parking, and many free extras that boutique hotels often meter. Daily housekeeping, optional breakfast, scooters, transfers, and tours can be layered on when you want them.",
          "The Hideaway currently offers from Rp 4.9 juta per night, and Sawah Retreat from Rp 7 juta per night for groups — both with your pick of one free activity (Ubud rice field cycling with lunch or a Balinese cooking class) during the stay on Jl. Tirta Tawar.",
          "Use the links at the end of this guide for either villa offer — or message WhatsApp and we will match the home to your group.",
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
          "Read next: our Ubud experiences guide from Tirta Tawar, or compare 2BR vs 6BR villas if you are still sizing the group.",
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
          "Promo stays at The Hideaway (from Rp 4.9 juta / night) and Sawah Retreat (from Rp 7 juta / night) include one free activity you can pick during the stay—rice-field cycling or a cooking class—so shopping does not have to be the only outing.",
          "Continue with our Tirta Tawar rice-field walk guide for the green lanes outside the gate, or the full experiences guide for market, Kecak, Monkey Forest, and waterfalls.",
        ],
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}
