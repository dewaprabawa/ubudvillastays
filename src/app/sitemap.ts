import type { MetadataRoute } from "next";
import { guides } from "@/content/guides";
import { siteConfig, villas } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}/guides`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...villas.map((villa) => ({
      url: `${siteConfig.url}/villas/${villa.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...villas
      .filter((villa) => (villa.gallery?.length ?? 0) > 0)
      .map((villa) => ({
        url: `${siteConfig.url}/villas/${villa.slug}/gallery`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      })),
    ...guides.map((guide) => ({
      url: `${siteConfig.url}/guides/${guide.slug}`,
      lastModified: new Date(guide.dateModified),
      changeFrequency: "monthly" as const,
      priority: [
        "villa-ubud",
        "private-pool-villa-ubud",
        "tirta-tawar-ubud-villa-stay",
        "ubud-villa-rental-guide",
        "group-villa-ubud",
        "where-is-ubud",
        "what-people-do-in-ubud",
        "visiting-ubud-for-travelers",
        "bali-belly-ubud-travelers",
        "ubud-villa-scams-travelers-should-avoid",
        "safe-travel-ubud-avoid-scams",
        "yoga-retreat-villa-stay-in-ubud",
        "bali-travel-faq-for-first-timers",
        "bali-visa-and-tourist-tax",
        "ubud-vs-canggu-seminyak-uluwatu",
        "scooter-vs-driver-bali-ubud",
        "ubud-3-day-itinerary-tirta-tawar",
        "kecak-dance-ubud-evening-guide",
        "romantic-ubud-villa-getaway",
        "family-holiday-ubud-villa",
        "ubud-private-pool-villa-mornings",
        "balinese-cooking-class-ubud-villa-stay",
        "ubud-experiences-from-tirta-tawar",
      ].includes(guide.slug)
        ? 0.85
        : 0.75,
      images: [guide.heroImage.startsWith("http")
        ? guide.heroImage
        : `${siteConfig.url}${guide.heroImage}`],
    })),
  ];
}
