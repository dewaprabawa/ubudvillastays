export const siteConfig = {
  name: "Ubud Villa Stays",
  villaName: "The Hideaway",
  tagline: "A private 2-bedroom pool villa steps from the heart of Ubud.",
  description:
    "Book The Hideaway — a calm 2-bedroom villa with private pool in Tirta Tawar, Ubud, Bali. Walk to cafés, galleries, and temples. Inquire on WhatsApp or reserve on Airbnb.",
  url: "https://ubudvillastays.com",
  locale: "en_US",
  airbnbUrl:
    "https://www.airbnb.com/rooms/1429000075230755234",
  // TODO: replace with the real host WhatsApp number (digits only after country code)
  whatsappNumber: "+62XXXXXXXXXXX",
  whatsappTodo: true,
  email: "hello@ubudvillastays.com",
  location: {
    area: "Tirta Tawar",
    city: "Ubud",
    region: "Bali",
    country: "Indonesia",
    addressHint: "Tirta Tawar, Ubud, Gianyar, Bali",
    walkToCenter: "15–20 minutes on foot",
    driveToCenter: "about 5 minutes by car",
    nearby: [
      "Central Ubud markets & cafés",
      "Neka Art Gallery",
      "Pura Dalem Puri Peliatan",
      "Yoga studios & spas",
    ],
  },
  facts: {
    guests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 2,
    rating: 4.97,
    reviews: 64,
  },
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
  extras: [
    "Scooter rental",
    "Airport transfers",
    "Local tours & activities",
  ],
} as const;

export function whatsappHref(message?: string) {
  const digits = siteConfig.whatsappNumber.replace(/\D/g, "");
  const text =
    message ??
    `Hi! I'm interested in staying at ${siteConfig.villaName} (${siteConfig.name}) in Ubud.`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(text)}`;
}
