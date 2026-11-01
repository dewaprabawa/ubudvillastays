export type VillaSpace = {
  src: string;
  alt: string;
  title: string;
  copy: string;
};

export type VillaGalleryImage = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  tall?: boolean;
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
  priceWasLabel?: string;
  priceWasAmount?: number;
  savingsPercent?: number;
  savingsLabel?: string;
  /** Short label on the current rate, e.g. "Promo" */
  promoLabel?: string;
  /** Urgency line under the price, e.g. before rates rise */
  priceRiseNote?: string;
  badge?: string;
  currency: "IDR";
  eyebrow: string;
  headline: string;
  lede: string;
  activityIntro: string;
  activityTiming: string;
  activities: VillaOfferActivity[];
  accent: {
    src: string;
    alt: string;
    caption: string;
  };
  ctaNote: string;
};

const freeStayActivities: VillaOfferActivity[] = [
  {
    title: "Ubud rice field cycling + lunch",
    copy: "A guided bike ride through quiet rice-field paths around Ubud, with lunch included. Easy pace — good for couples and small families who want green views without a long day trip.",
    url: "https://www.sekarbaliactivity.com/tours/ubud-ricefield-cycling-tour",
    image: "/images/marketing/ubud-ricefield-cycling.jpg",
    imageAlt:
      "Guests cycling through green Ubud rice fields on a guided tour",
    mostPicked: true,
  },
  {
    title: "Balinese cooking class (rice terrace)",
    copy: "Learn to cook Balinese dishes with a local host overlooking rice terraces — market-style ingredients, hands-on steps, and a shared meal at the end.",
    url: "https://www.sekarbaliactivity.com/tours/balinese-cooking-class",
    image: "/images/marketing/cooking-class-ricefield.jpg",
    imageAlt: "Balinese cooking class set against rice terraces near Ubud",
  },
];

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
  gallery?: VillaGalleryImage[];
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
      "Promo from Rp 4.9 juta / night on Jl. Tirta Tawar — plus one free Ubud activity.",
    description:
      "Book The Hideaway at the promo rate from Rp 4.9 juta per night (15% off regular Rp 5.765.000) — a 2-bedroom private pool villa on Jl. Tirta Tawar, Ubud, Bali. Stay includes your pick of one free activity: Ubud rice field cycling with lunch or a Balinese cooking class. Market, Kecak, Monkey Forest nearby. Inquire on WhatsApp.",
    headline: "Quiet mornings by the pool.\nUbud’s culture just beyond the gate.",
    support:
      "Promo from Rp 4.9 juta per night — a modern-Bali 2-bedroom hideaway with private pool, plus your choice of one free activity: rice field cycling with lunch or a Balinese cooking class.",
    storyTitle: "A private courtyard base for real Ubud days.",
    story: [
      "The Hideaway blends contemporary comfort with Balinese craft—stone walls, warm timber, and a still private pool framed by tropical planting. Stay for the experience: market mornings, temple evenings, forest walks — then return to your own courtyard.",
      "You are close enough to walk to galleries, temples, and café streets, yet tucked away for real quiet. Daily housekeeping and free extras keep the villa easy; breakfast, scooters, transfers, and tours can be arranged when you want them.",
    ],
    offer: {
      priceLabel: "Rp 4.9 juta",
      pricePer: "per night",
      priceAmount: 4900000,
      // Promo vs regular: Rp 5.765.000 → Rp 4.900.000 (15% off)
      priceWasLabel: "Rp 5.765.000",
      priceWasAmount: 5765000,
      savingsPercent: 15,
      savingsLabel: "Save 15%",
      promoLabel: "Promo",
      priceRiseNote: "Promo rate now — book before the regular rate rises.",
      badge: "Most picked",
      currency: "IDR",
      eyebrow: "Promo stay · Tirta Tawar, Ubud",
      headline: "Villa nights + one free Ubud activity.",
      lede: "Promo rate Rp 4.9 juta / night on Jl. Tirta Tawar (15% off the regular Rp 5.765.000). Choose one complimentary Sekar Bali Activity during your stay.",
      activityIntro: "Free activity choice — pick one for your party:",
      activityTiming:
        "You can choose during your stay period — tell us at booking or once you arrive, as long as we confirm the activity date while you are here.",
      activities: freeStayActivities,
      accent: {
        src: "/images/marketing/canang-sari-ricefield.jpg",
        alt: "Canang sari offering placed beside an Ubud rice field",
        caption:
          "Rice-field mornings near Tirta Tawar — culture close to home.",
      },
      ctaNote:
        "WhatsApp your dates — pick cycling or cooking now, or during your stay. We confirm the activity slot while you are here.",
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
      "Promo from Rp 7 juta / night on Jl. Tirta Tawar — groups, retreats, plus free activity choice.",
    description:
      "Book Sawah Retreat at the promo rate from Rp 7 juta per night (15% off regular Rp 8.235.000) — a 6-bedroom private pool villa with rice field views on Jl. Tirta Tawar, Ubud, Bali. Entire home for up to 12 guests, with your pick of one free activity (rice field cycling + lunch or Balinese cooking class) during the stay. Inquire on WhatsApp.",
    headline: "Rice fields at the edge of the pool.\nRoom for everyone to gather.",
    support:
      "Promo from Rp 7 juta per night — entire-villa privacy for up to 12 guests on Jl. Tirta Tawar, with rice-field views and one free activity you can choose during your stay.",
    storyTitle: "Space to gather — culture and green outside the gate.",
    story: [
      "Sawah Retreat is the larger sibling on Tirta Tawar: an entire villa held just for your group, with rice field views and a private pool at the center of daily life. It suits multi-generation families, friend getaways, yoga retreats, and longer holiday or investment-friendly stays that need privacy and room to breathe.",
      "Each bedroom has its own bathroom and air conditioning. The open kitchen invites shared meals; many free extras and staff help keep logistics light. Airport pickup, in-house massage, scooters, and breakfast are easy to arrange when you want them.",
    ],
    offer: {
      priceLabel: "Rp 7 juta",
      pricePer: "per night",
      priceAmount: 7000000,
      // Promo vs regular: Rp 8.235.000 → Rp 7.000.000 (15% off)
      priceWasLabel: "Rp 8.235.000",
      priceWasAmount: 8235000,
      savingsPercent: 15,
      savingsLabel: "Save 15%",
      promoLabel: "Promo",
      priceRiseNote: "Promo rate now — book before the regular rate rises.",
      badge: "Group stay",
      currency: "IDR",
      eyebrow: "Promo stay · Tirta Tawar, Ubud",
      headline: "Group villa nights + one free Ubud activity.",
      lede: "Promo rate Rp 7 juta / night on Jl. Tirta Tawar (15% off the regular Rp 8.235.000) — for families, friend groups, and retreats. Choose one complimentary Sekar Bali Activity during your stay.",
      activityIntro: "Free activity choice — pick one for your party:",
      activityTiming:
        "You can choose during your stay period — tell us at booking or once you arrive, as long as we confirm the activity date while you are here.",
      activities: freeStayActivities,
      accent: {
        src: "/images/marketing/canang-sari-ricefield.jpg",
        alt: "Canang sari offering placed beside an Ubud rice field",
        caption:
          "Sawah mornings near Tirta Tawar — green calm with culture close by.",
      },
      ctaNote:
        "WhatsApp your dates and guest count — pick cycling or cooking now, or during your stay. We confirm the activity slot while you are here.",
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
      "Pool, garden, yard & beautiful outdoor views",
      "Six bedrooms with AC, mosquito nets & blackout curtains",
      "En-suite bathrooms with hot water & outdoor shower",
      "Frangipani bath amenities, shampoo, conditioner & hair dryer",
      "Fully equipped kitchen — fridge, freezer, stove, microwave, rice cooker, blender, toaster & kettle",
      "Cooking basics, dishes, glassware & wine glasses",
      "Dining table indoors plus outdoor dining & outdoor kitchen",
      "Private patio/balcony, backyard & outdoor furniture",
      "Private charcoal BBQ",
      "Fast Wi‑Fi & dedicated workspace (desk + chair)",
      "TV & Bluetooth sound system",
      "Books and reading materials",
      "Essentials — towels, sheets, soap & toilet paper",
      "Hangers, wardrobe storage, clothes drying rack & iron",
      "In-room safe",
      "Free on-property parking & free street parking",
      "Private entrance",
      "Self check-in with lockbox",
      "Breakfast provided",
      "Luggage drop-off allowed",
      "Long stays welcome (28+ nights)",
      "Smoking allowed",
      "Host welcome on arrival",
    ],
    extras: [
      "Pack ’n play / travel crib on request",
      "High chair",
      "Scooter rental",
      "Airport transfers",
      "In-house massage",
      "Yoga / retreat setup support",
    ],
    idealFor: "Large families, groups, and yoga retreats — six en-suite bedrooms",
    spaces: [
      {
        src: "/images/villas/sawah-retreat/room-01.jpg",
        alt: "Sawah Retreat bedroom 1 with en-suite comfort",
        title: "Bedroom 1",
        copy: "A calm en-suite room for rest after pool time and Ubud days — air-conditioned privacy for couples or parents.",
      },
      {
        src: "/images/villas/sawah-retreat/room-02.jpg",
        alt: "Sawah Retreat bedroom 2 with soft natural light",
        title: "Bedroom 2",
        copy: "Another quiet en-suite bedroom so guests are not sharing corridors or bathrooms with strangers.",
      },
      {
        src: "/images/villas/sawah-retreat/room-03.jpg",
        alt: "Sawah Retreat bedroom 3 ready for group stays",
        title: "Bedroom 3",
        copy: "Part of the six-room layout that makes multi-generation and friend-group stays easy.",
      },
      {
        src: "/images/villas/sawah-retreat/room-04.jpg",
        alt: "Sawah Retreat bedroom 4 with en-suite bath",
        title: "Bedroom 4",
        copy: "En-suite comfort spread through the villa so everyone has a private corner to return to.",
      },
      {
        src: "/images/villas/sawah-retreat/room-05.jpg",
        alt: "Sawah Retreat bedroom 5 for retreat guests",
        title: "Bedroom 5",
        copy: "Ideal for retreat participants or extended family who need quiet nights near the rice fields.",
      },
      {
        src: "/images/villas/sawah-retreat/room-06.jpg",
        alt: "Sawah Retreat bedroom 6 completing the six-room villa",
        title: "Bedroom 6",
        copy: "Completes the 6BR private villa — up to 12 guests under one roof, your group only.",
      },
      {
        src: "/images/villas/sawah-retreat/hero.jpg",
        alt: "Private pool framed by tropical planting and villa wings",
        title: "Pool at the heart",
        copy: "A private pool sits within the villa compound—swim, stretch, or simply watch the green beyond.",
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
    gallery: [
      {
        src: "/images/villas/sawah-retreat/gallery/living-01.jpg",
        alt: "Living room at Sawah Retreat, Tirta Tawar Ubud",
        caption: "Living room",
        width: 1600,
        height: 1066,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/living-03.jpg",
        alt: "Open living area with tropical light at Sawah Retreat",
        caption: "Living room",
        width: 1600,
        height: 1100,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/living-05.jpg",
        alt: "Lounge seating at Sawah Retreat",
        caption: "Living room",
        width: 1280,
        height: 849,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/kitchen-01.jpg",
        alt: "Fully equipped kitchen at Sawah Retreat",
        caption: "Kitchen",
        width: 1600,
        height: 1066,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/kitchen-02.jpg",
        alt: "Kitchen counter and cooking space at Sawah Retreat",
        caption: "Kitchen",
        width: 1600,
        height: 1066,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/kitchen-04.jpg",
        alt: "Kitchen details at Sawah Retreat",
        caption: "Kitchen",
        width: 1600,
        height: 1200,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/dining-01.jpg",
        alt: "Indoor dining table at Sawah Retreat",
        caption: "Dining",
        width: 1400,
        height: 1047,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/dining-03.jpg",
        alt: "Group dining space at Sawah Retreat",
        caption: "Dining",
        width: 1400,
        height: 1050,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/dining-06.jpg",
        alt: "Outdoor dining at Sawah Retreat",
        caption: "Dining",
        width: 900,
        height: 1600,
        tall: true,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/garden-01.jpg",
        alt: "Garden and backyard at Sawah Retreat",
        caption: "Garden",
        width: 1400,
        height: 932,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/garden-03.jpg",
        alt: "Tropical garden path at Sawah Retreat",
        caption: "Garden",
        width: 960,
        height: 1280,
        tall: true,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/garden-05.jpg",
        alt: "Lush backyard planting at Sawah Retreat",
        caption: "Garden",
        width: 1280,
        height: 960,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/exterior-01.jpg",
        alt: "Sawah Retreat villa exterior on Tirta Tawar",
        caption: "Exterior",
        width: 1400,
        height: 1050,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/exterior-02.jpg",
        alt: "Villa façade and entrance at Sawah Retreat",
        caption: "Exterior",
        width: 1057,
        height: 1280,
        tall: true,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/exterior-03.jpg",
        alt: "Outside view of Sawah Retreat",
        caption: "Exterior",
        width: 787,
        height: 1400,
        tall: true,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/yoga-01.jpg",
        alt: "Morning yoga session at Sawah Retreat",
        caption: "Yoga",
        width: 1200,
        height: 1600,
        tall: true,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/yoga-02.jpg",
        alt: "Yoga retreat guests at Sawah Retreat",
        caption: "Yoga",
        width: 1050,
        height: 1400,
        tall: true,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/misc-01.jpg",
        alt: "Balinese offering ritual before activity at Sawah Retreat",
        caption: "Offering",
        width: 1600,
        height: 1066,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/bath1-01.jpg",
        alt: "En-suite bathroom at Sawah Retreat",
        caption: "Bathroom",
        width: 1600,
        height: 1066,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/bath3-02.jpg",
        alt: "Outdoor shower and bath at Sawah Retreat",
        caption: "Bathroom",
        width: 1200,
        height: 1600,
        tall: true,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/bath5-02.jpg",
        alt: "En-suite bath with tropical detail at Sawah Retreat",
        caption: "Bathroom",
        width: 1200,
        height: 1600,
        tall: true,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/bath6-01.jpg",
        alt: "Private bathroom at Sawah Retreat",
        caption: "Bathroom",
        width: 1392,
        height: 1600,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/bed1-02.jpg",
        alt: "Bedroom 1 second view at Sawah Retreat",
        caption: "Bedroom",
        width: 1600,
        height: 1200,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/bed2-02.jpg",
        alt: "Bedroom 2 second view at Sawah Retreat",
        caption: "Bedroom",
        width: 1600,
        height: 1200,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/bed3-02.jpg",
        alt: "Bedroom 3 second view at Sawah Retreat",
        caption: "Bedroom",
        width: 1200,
        height: 1600,
        tall: true,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/bed4-02.jpg",
        alt: "Bedroom 4 second view at Sawah Retreat",
        caption: "Bedroom",
        width: 1600,
        height: 1200,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/bed5-05.jpg",
        alt: "Bedroom 5 alternate angle at Sawah Retreat",
        caption: "Bedroom",
        width: 1253,
        height: 1600,
        tall: true,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/bed6-02.jpg",
        alt: "Bedroom 6 second view at Sawah Retreat",
        caption: "Bedroom",
        width: 1600,
        height: 1066,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/extra-02.jpg",
        alt: "Additional villa space at Sawah Retreat",
        caption: "More",
        width: 1600,
        height: 1066,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/extra-04.jpg",
        alt: "Villa atmosphere at Sawah Retreat",
        caption: "More",
        width: 1017,
        height: 1400,
        tall: true,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/extra-07.jpg",
        alt: "Poolside and outdoor living at Sawah Retreat",
        caption: "More",
        width: 960,
        height: 1280,
        tall: true,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/extra-10.jpg",
        alt: "Sawah Retreat grounds and outlook",
        caption: "More",
        width: 1400,
        height: 1050,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/extra-12.jpg",
        alt: "Villa detail at Sawah Retreat",
        caption: "More",
        width: 787,
        height: 1400,
        tall: true,
      },
      {
        src: "/images/villas/sawah-retreat/gallery/extra-17.jpg",
        alt: "Evening mood at Sawah Retreat",
        caption: "More",
        width: 719,
        height: 1280,
        tall: true,
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
  const offer = villa.offer;
  if (!offer) return whatsappHref(villa.name);
  const savings =
    offer.savingsPercent && offer.priceWasLabel
      ? ` (${offer.savingsPercent}% off regular ${offer.priceWasLabel})`
      : "";
  const badge = offer.badge ? `${offer.badge} ` : "";
  const promo = offer.promoLabel ? `${offer.promoLabel} ` : "";
  return whatsappHref(
    villa.name,
    `Hi! I'm interested in ${villa.name} ${badge}${promo}rate — ${offer.priceLabel} ${offer.pricePer}${savings} on Jl. Tirta Tawar, Ubud — including one free activity I can pick during my stay (rice field cycling + lunch OR Balinese cooking class). My dates are:`,
  );
}
