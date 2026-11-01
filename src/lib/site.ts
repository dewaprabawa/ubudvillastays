export type VillaSpace = {
  src: string;
  alt: string;
  title: string;
  copy: string;
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
};

export const siteConfig = {
  name: "Ubud Villa Stays",
  tagline: "Private pool villas in Tirta Tawar, Ubud — for quiet escapes and gatherings alike.",
  description:
    "Ubud Villa Stays offers private pool villas on Tirta Tawar street in Ubud, Bali — The Hideaway (2BR) and Sawah Retreat (6BR). Inquire on WhatsApp or reserve on Airbnb.",
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
    nearby: [
      "Central Ubud markets & cafés",
      "Neka Art Gallery",
      "Pura Dalem Puri Peliatan",
      "Yoga studios & spas",
      "Local restaurants & supermarket",
    ],
  },
} as const;

export const villas: Villa[] = [
  {
    slug: "the-hideaway",
    name: "The Hideaway",
    shortName: "Hideaway",
    eyebrow: "2 bedrooms · private courtyard",
    tagline: "A private 2-bedroom pool villa steps from the heart of Ubud.",
    description:
      "Book The Hideaway — a calm 2-bedroom villa with private pool in Tirta Tawar, Ubud, Bali. Walk to cafés, galleries, and temples. Inquire on WhatsApp or reserve on Airbnb.",
    headline: "Quiet mornings by the pool.\nUbud just beyond the gate.",
    support:
      "A modern-Bali 2-bedroom hideaway with a private pool, tropical garden, and an easy stroll to cafés, galleries, and temples.",
    storyTitle: "A private courtyard retreat in the cultural heart of Bali.",
    story: [
      "The Hideaway blends contemporary comfort with Balinese craft—stone walls, warm timber, and a still private pool framed by tropical planting. It is designed for unhurried mornings and easy evenings after exploring Ubud.",
      "You are close enough to walk to galleries, temples, and café streets, yet tucked away for real quiet. Daily housekeeping keeps the villa fresh; breakfast, scooters, transfers, and tours can be arranged when you want them.",
    ],
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
    tagline: "An exclusive 6-bedroom villa with private pool and rice field views for families and retreats.",
    description:
      "Book Sawah Retreat — a private 6-bedroom villa with pool and rice field views in Tirta Tawar, Ubud, Bali. Ideal for large families, groups, and yoga retreats. Inquire on WhatsApp or reserve on Airbnb.",
    headline: "Rice fields at the edge of the pool.\nRoom for everyone to gather.",
    support:
      "A full-villa stay for up to 12 guests—six en-suite bedrooms, a private pool, open kitchen, and serene sawah views minutes from central Ubud.",
    storyTitle: "Space to gather, green to quiet the mind.",
    story: [
      "Sawah Retreat is the larger sibling on Tirta Tawar: an entire villa held just for your group, with rice field views and a private pool at the center of daily life. It suits multi-generation families, friend getaways, and yoga or meditation retreats that need privacy and room to breathe.",
      "Each bedroom has its own bathroom and air conditioning. The open kitchen invites shared meals, staff can help with luggage along the quiet lane, and extras—airport pickup, in-house massage, scooters, and breakfast—are easy to arrange.",
    ],
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
