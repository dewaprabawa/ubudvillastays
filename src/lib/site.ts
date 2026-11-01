export type VillaSpace = {
  src: string;
  alt: string;
  title: string;
  copy: string;
};

export type VillaOfferActivity = {
  title: string;
  copy: string;
  url: string;
  image: string;
  imageAlt: string;
  mostPicked?: boolean;
};

export type VillaOffer = {
  priceLabel: string;
  pricePer: string;
  priceAmount: number;
  priceWasLabel: string;
  priceWasAmount: number;
  savingsPercent: number;
  savingsLabel: string;
  badge: string;
  currency: "IDR";
  eyebrow: string;
  headline: string;
  lede: string;
  activityIntro: string;
  activities: VillaOfferActivity[];
  accent: {
    src: string;
    alt: string;
    caption: string;
  };
  ctaNote: string;
};

export type VillaPitch = {
  eyebrow: string;
  headline: string;
  lede: string;
  bullets: string[];
  accent: {
    src: string;
    alt: string;
    caption: string;
  };
  ctaNote: string;
};

export type Villa = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  tagline: string;
  description: string;
  headline: string;
  support: string;
  storyTitle: string;
  story: [string, string];
  airbnbUrl: string;
  heroImage: string;
  ogImage: string;
  amenityImage: string;
  amenityImageSecondary: string;
  facts: {
    guests: number;
    bedrooms: number;
    beds: number;
    baths: number;
    rating: number;
    reviews: number;
  };
  reviewScores: { label: string; score: string }[];
  amenities: string[];
  extras: string[];
  spaces: VillaSpace[];
  idealFor: string;
  offer?: VillaOffer;
  pitch?: VillaPitch;
};

export const siteConfig = {
  name: "Ubud Villa Stays",
  tagline:
    "Private pool villas on Jl. Tirta Tawar, Ubud — stay for the experience, not just the bed.",
  description:
    "Book private pool villas in Tirta Tawar, Ubud, Bali — The Hideaway (2BR) and Sawah Retreat (6BR). Walk to the local market, Kecak at nearby temples, Monkey Forest and waterfalls close by. Holiday or investment stays with generous free extras. Inquire on WhatsApp.",
  url: "https://www.ubudvillastays.com",
  locale: "en_US",
  whatsappNumber: "+6281775723663",
  email: "sekarprivatebaliactivity@gmail.com",
  location: {
    area: "Tirta Tawar",
    city: "Ubud",
    region: "Bali",
    country: "Indonesia",
    addressHint: "Jl. Tirta Tawar, Kabupaten Gianyar, Bali",
    streetAddress: "Jl. Tirta Tawar",
    placeName: "Jl. Tirta Tawar, Kabupaten Gianyar, Bali",
    // Exact marker from Google Maps share link https://maps.app.goo.gl/5TpevFsUJeezD1gD8
    latitude: -8.4831533,
    longitude: 115.2706967,
    mapsUrl: "https://maps.app.goo.gl/5TpevFsUJeezD1gD8",
    walkToCenter: "15–20 minutes on foot",
    driveToCenter: "about 5–8 minutes by car",
    walkToMarket: "about 5 minutes on foot",
    nearby: [
      "Local traditional market — ~5-minute walk",
      "Kecak dance at the nearest temple",
      "Ubud Monkey Forest",
      "Waterfalls north of Ubud",
      "Neka Art Gallery & Peliatan temples",
      "Central Ubud cafés, yoga & spas",
    ],
  },
  experience: {
    title: "More than a bed in Ubud.",
    lede: "From Jl. Tirta Tawar you wake to a private pool — then step into markets, temple dance, forest paths, and waterfalls. Holiday stays and longer investment-friendly accommodation, with many free extras included.",
    gallery: [
      {
        src: "/images/marketing/ubud-art-market.jpg",
        alt: "Ubud traditional art market stalls under colorful umbrellas",
        caption: "Local market — about a five-minute walk",
        width: 1800,
        height: 1200,
      },
      {
        src: "/images/marketing/kecak-dance-ubud.jpg",
        alt: "Kecak dance performance at a temple near Ubud, Bali",
        caption: "Kecak at a nearby temple",
        width: 1800,
        height: 1570,
      },
      {
        src: "/images/marketing/monkey-forest-ubud.jpg",
        alt: "Macaques at Ubud Monkey Forest",
        caption: "Monkey Forest within easy reach",
        width: 1800,
        height: 1200,
      },
    ],
    points: [
      {
        title: "Traditional market nearby",
        copy: "Reach the local traditional market in about five minutes on foot — fresh produce, daily Bali rhythm, no tourist scramble required.",
      },
      {
        title: "Kecak at the nearest temple",
        copy: "Evening Kecak and temple ceremonies sit close to home. Culture is part of the neighborhood, not a long transfer away.",
      },
      {
        title: "Monkey Forest & waterfalls",
        copy: "Ubud Monkey Forest, Campuhan walks, and north-of-Ubud waterfalls are an easy base from Tirta Tawar — nature without giving up town access.",
      },
      {
        title: "Holiday or investment stay",
        copy: "Book a short escape or a longer stay. Both villas are built for comfortable living — private pools, kitchens, Wi‑Fi — with many free extras that hotels charge for.",
      },
    ],
  },
} as const;

export const villas: Villa[] = [
  {
    slug: "the-hideaway",
    name: "The Hideaway",
    shortName: "Hideaway",
    eyebrow: "2 bedrooms · private courtyard",
    tagline:
      "From Rp 4.9 juta / night on Jl. Tirta Tawar — plus one free Ubud activity.",
    description:
      "Book The Hideaway from Rp 4.9 juta per night — a 2-bedroom private pool villa on Jl. Tirta Tawar, Ubud, Bali. Stay includes your pick of one free activity: Ubud rice field cycling with lunch or a Balinese cooking class. Market, Kecak, Monkey Forest nearby. Inquire on WhatsApp.",
    headline: "Quiet mornings by the pool.\nUbud’s culture just beyond the gate.",
    support:
      "From Rp 4.9 juta per night — a modern-Bali 2-bedroom hideaway with private pool, plus your choice of one free activity: rice field cycling with lunch or a Balinese cooking class.",
    storyTitle: "A private courtyard base for real Ubud days.",
    story: [
      "The Hideaway blends contemporary comfort with Balinese craft—stone walls, warm timber, and a still private pool framed by tropical planting. Stay for the experience: market mornings, temple evenings, forest walks — then return to your own courtyard.",
      "You are close enough to walk to galleries, temples, and café streets, yet tucked away for real quiet. Daily housekeeping and free extras keep the villa easy; breakfast, scooters, transfers, and tours can be arranged when you want them.",
    ],
    offer: {
      priceLabel: "Rp 4.9 juta",
      pricePer: "per night",
      priceAmount: 4900000,
      // 15% off: Rp 5.765.000 → Rp 4.900.000
      priceWasLabel: "Rp 5.765.000",
      priceWasAmount: 5765000,
      savingsPercent: 15,
      savingsLabel: "Save 15%",
      badge: "Most picked",
      currency: "IDR",
      eyebrow: "Commercial stay · Tirta Tawar, Ubud",
      headline: "Villa nights with a free Ubud experience included.",
      lede: "Book The Hideaway at Rp 4.9 juta per night (15% off Rp 5.765.000) on Jl. Tirta Tawar — a holiday or longer investment-friendly stay with a private pool, and pick one complimentary activity from Sekar Bali Activity.",
      activityIntro:
        "Your stay includes one free activity (choose one for your party):",
      activities: [
        {
          title: "Ubud rice field cycling + lunch",
          copy: "Ride quiet paths through sawah landscapes, then enjoy lunch — classic Ubud outdoors without the logistics headache.",
          url: "https://www.sekarbaliactivity.com/tours/ubud-ricefield-cycling-tour",
          image: "/images/marketing/ubud-ricefield-cycling.jpg",
          imageAlt:
            "Guests cycling through green Ubud rice fields on a guided tour",
          mostPicked: true,
        },
        {
          title: "Balinese cooking class (rice terrace)",
          copy: "Cook local dishes with a rice-terrace backdrop — hands-on Bali flavor that turns a villa night into a memory.",
          url: "https://www.sekarbaliactivity.com/tours/balinese-cooking-class",
          image: "/images/marketing/cooking-class-ricefield.jpg",
          imageAlt:
            "Balinese cooking class set against rice terraces near Ubud",
        },
      ],
      accent: {
        src: "/images/marketing/canang-sari-ricefield.jpg",
        alt: "Canang sari offering placed beside an Ubud rice field",
        caption:
          "Rice-field mornings near Tirta Tawar — culture close to home.",
      },
      ctaNote:
        "Message WhatsApp with your dates and which free activity you prefer. Availability confirmed for your travel window.",
    },
    airbnbUrl: "https://www.airbnb.com/rooms/1429000075230755234",
    heroImage: "/images/villas/the-hideaway/hero.jpg",
    ogImage: "/images/villas/the-hideaway/og.jpg",
    amenityImage: "/images/villas/the-hideaway/space-05.jpg",
    amenityImageSecondary: "/images/villas/the-hideaway/space-08.jpg",
    facts: {
      guests: 4,
      bedrooms: 2,
      beds: 2,
      baths: 2,
      rating: 4.97,
      reviews: 64,
    },
    reviewScores: [
      { label: "Cleanliness", score: "5.0" },
      { label: "Check-in", score: "5.0" },
      { label: "Communication", score: "5.0" },
      { label: "Location", score: "4.9" },
      { label: "Value", score: "5.0" },
    ],
    amenities: [
      "Private swimming pool",
      "Tropical garden courtyard",
      "Fully equipped kitchen",
      "Spacious living & dining",
      "Fast Wi‑Fi",
      "Free on-property parking",
      "Hot tub / soaking bath",
      "Daily housekeeping",
      "Air conditioning",
      "Workspace with garden views",
      "Outdoor rain shower",
      "Breakfast available (extra)",
    ],
    extras: ["Scooter rental", "Airport transfers", "Local tours & activities"],
    idealFor: "Couples, friends, and small families",
    spaces: [
      {
        src: "/images/villas/the-hideaway/space-07.jpg",
        alt: "Canopy bedroom with white netting and warm timber finishes",
        title: "Two calm bedrooms",
        copy: "King beds, soft netting, and garden light—restful spaces after temple walks and long lunches.",
      },
      {
        src: "/images/villas/the-hideaway/hero.jpg",
        alt: "Private plunge pool and loungers in a tropical courtyard",
        title: "Pool & courtyard",
        copy: "Your own plunge pool, sun loungers, and a walled garden for quiet swims at dusk.",
      },
      {
        src: "/images/villas/the-hideaway/space-01.jpg",
        alt: "Wooden desk facing tropical garden windows",
        title: "Living & work nooks",
        copy: "A generous living area and a garden-facing desk when you need a few focused hours.",
      },
      {
        src: "/images/villas/the-hideaway/space-02.jpg",
        alt: "Outdoor rain shower with patterned tiles and volcanic stone",
        title: "Outdoor shower ritual",
        copy: "Patterned tiles, volcanic stone, and a rain shower open to the tropics.",
      },
    ],
  },
  {
    slug: "sawah-retreat",
    name: "Sawah Retreat",
    shortName: "Sawah",
    eyebrow: "6 bedrooms · rice field views",
    tagline:
      "6BR private villa on Jl. Tirta Tawar — rice-field calm for groups, retreats, and longer Ubud stays.",
    description:
      "Book Sawah Retreat — a 6-bedroom private pool villa with rice field views on Jl. Tirta Tawar, Ubud, Bali. Entire home for up to 12 guests near the local market, temple Kecak, Monkey Forest, and waterfalls. Ideal for families, friend groups, yoga retreats, and investment-friendly longer stays. Inquire on WhatsApp for current rates.",
    headline: "Rice fields at the edge of the pool.\nRoom for everyone to gather.",
    support:
      "Entire-villa privacy for up to 12 guests on Jl. Tirta Tawar—six en-suite bedrooms, private pool, open kitchen, and sawah views with markets, temples, and forest walks nearby. Message WhatsApp for current rates.",
    storyTitle: "Space to gather — culture and green outside the gate.",
    story: [
      "Sawah Retreat is the larger sibling on Tirta Tawar: an entire villa held just for your group, with rice field views and a private pool at the center of daily life. It suits multi-generation families, friend getaways, yoga retreats, and longer holiday or investment-friendly stays that need privacy and room to breathe.",
      "Each bedroom has its own bathroom and air conditioning. The open kitchen invites shared meals; many free extras and staff help keep logistics light. Airport pickup, in-house massage, scooters, and breakfast are easy to arrange when you want them. Ask on WhatsApp for current rates and group dates.",
    ],
    pitch: {
      eyebrow: "Group stay · Tirta Tawar, Ubud",
      headline: "A rice-field base for gatherings—not just bedrooms.",
      lede: "Sawah Retreat keeps your whole party under one roof on Jl. Tirta Tawar: private pool mornings, shared meals, and easy reach of Ubud’s market, temple Kecak, Monkey Forest, and waterfalls. Built for holiday groups, yoga retreats, and longer investment-friendly stays.",
      bullets: [
        "Entire 6-bedroom villa for your group only (up to 12 guests)",
        "Rice-field and garden outlooks with a private pool at the center",
        "~5-minute walk to the local traditional market; temples and forest days nearby",
        "Open kitchen, fast Wi‑Fi, luggage help, and extras on request",
        "Rates available on inquiry — message WhatsApp with dates and guest count",
      ],
      accent: {
        src: "/images/marketing/canang-sari-ricefield.jpg",
        alt: "Canang sari offering placed beside an Ubud rice field",
        caption:
          "Sawah mornings near Tirta Tawar — green calm with culture close by.",
      },
      ctaNote:
        "Tell us your travel window and party size on WhatsApp. We will confirm availability and current rates for Sawah Retreat.",
    },
    airbnbUrl: "https://www.airbnb.com/rooms/23112175",
    heroImage: "/images/villas/sawah-retreat/hero.jpg",
    ogImage: "/images/villas/sawah-retreat/og.jpg",
    amenityImage: "/images/villas/sawah-retreat/space-02.jpg",
    amenityImageSecondary: "/images/villas/sawah-retreat/space-04.jpg",
    facts: {
      guests: 12,
      bedrooms: 6,
      beds: 8,
      baths: 6,
      rating: 4.89,
      reviews: 176,
    },
    reviewScores: [
      { label: "Cleanliness", score: "4.7" },
      { label: "Check-in", score: "4.9" },
      { label: "Communication", score: "5.0" },
      { label: "Location", score: "4.7" },
      { label: "Value", score: "4.9" },
    ],
    amenities: [
      "Private swimming pool",
      "Rice field & garden views",
      "Six en-suite bedrooms with AC",
      "Open fully equipped kitchen",
      "Fast Wi‑Fi",
      "Dedicated workspace",
      "Entire villa for your group only",
      "Self check-in with lockbox",
      "Staff assistance with luggage",
      "Quiet lane near Tirta Tawar",
      "In-house massage on request",
      "Airport pickup available",
    ],
    extras: [
      "Breakfast arrangements",
      "Scooter rental",
      "Airport transfers",
      "Yoga / retreat setup support",
    ],
    idealFor: "Large families, groups, and yoga retreats",
    spaces: [
      {
        src: "/images/villas/sawah-retreat/hero.jpg",
        alt: "Private pool framed by tropical planting and villa wings",
        title: "Pool at the heart",
        copy: "A private pool sits within the villa compound—swim, stretch, or simply watch the green beyond.",
      },
      {
        src: "/images/villas/sawah-retreat/space-03.jpg",
        alt: "Open living area overlooking rice fields",
        title: "Rooms with field light",
        copy: "Six bedrooms with en-suite baths spread across the property so everyone has a quiet corner to return to.",
      },
      {
        src: "/images/villas/sawah-retreat/space-02.jpg",
        alt: "Kitchen and dining space for group meals",
        title: "Open kitchen & dining",
        copy: "Cook together or share catered meals—the kitchen and dining spaces are built for a full house.",
      },
      {
        src: "/images/villas/sawah-retreat/space-05.jpg",
        alt: "Garden and rice field outlook from the villa",
        title: "Sawah outlook",
        copy: "Park and garden views, with rice terraces close enough to set a calm rhythm for mornings and yoga.",
      },
    ],
  },
];

export function getVilla(slug: string): Villa | undefined {
  return villas.find((villa) => villa.slug === slug);
}

export function whatsappHref(villaName?: string, message?: string) {
  const digits = siteConfig.whatsappNumber.replace(/\D/g, "");
  const focus = villaName ?? "one of your villas";
  const text =
    message ??
    `Hi! I'm interested in staying at ${focus} (${siteConfig.name}) in Ubud.`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}

export function villaOfferWhatsApp(villa: Villa) {
  if (!villa.offer) return whatsappHref(villa.name);
  return whatsappHref(
    villa.name,
    `Hi! I'm interested in The Hideaway Most picked offer — Rp 4.9 juta per night (15% off Rp 5.765.000) on Jl. Tirta Tawar, Ubud — including one free activity (rice field cycling + lunch OR Balinese cooking class). My dates are:`,
  );
}
