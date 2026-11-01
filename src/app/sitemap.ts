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
    ...guides.map((guide) => ({
      url: `${siteConfig.url}/guides/${guide.slug}`,
      lastModified: new Date(guide.dateModified),
      changeFrequency: "monthly" as const,
      priority: [
        "where-is-ubud",
        "what-people-do-in-ubud",
        "visiting-ubud-for-travelers",
        "bali-belly-ubud-travelers",
        "yoga-retreat-villa-stay-in-ubud",
      ].includes(guide.slug)
        ? 0.85
        : 0.75,
      images: [guide.heroImage.startsWith("http")
        ? guide.heroImage
        : `${siteConfig.url}${guide.heroImage}`],
    })),
  ];
}
