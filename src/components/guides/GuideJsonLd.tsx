import { type Guide } from "@/content/guides";
import { siteConfig, villas } from "@/lib/site";

export function GuideJsonLd({ guide }: { guide: Guide }) {
  const url = `${siteConfig.url}/guides/${guide.slug}`;
  const hero = `${siteConfig.url}${guide.heroImage}`;
  const bookingUrl = `${siteConfig.url}/#booking`;
  const relatedVillas = guide.relatedVillaSlugs
    .map((slug) => villas.find((villa) => villa.slug === slug))
    .filter(Boolean);

  const article = {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: guide.title,
    name: guide.title,
    description: guide.description,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    author: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: siteConfig.whatsappNumber,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/brand/logo-mark.png`,
      },
    },
    image: {
      "@type": "ImageObject",
      url: hero,
      caption: guide.title,
    },
    thumbnailUrl: hero,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      url: siteConfig.url,
    },
    keywords: [guide.primaryKeyword, ...guide.secondaryKeywords].join(", "),
    articleSection: guide.eyebrow,
    about: [
      {
        "@type": "TouristDestination",
        name: "Ubud",
        description:
          "Cultural highland town in Gianyar Regency, inland central Bali, Indonesia.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ubud",
          addressRegion: "Bali",
          addressCountry: "ID",
        },
      },
      {
        "@type": "Place",
        name: siteConfig.location.placeName,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.location.streetAddress,
          addressLocality: siteConfig.location.city,
          addressRegion: siteConfig.location.region,
          addressCountry: "ID",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.location.latitude,
          longitude: siteConfig.location.longitude,
        },
        hasMap: siteConfig.location.mapsUrl,
      },
    ],
    mentions: relatedVillas.map((villa) => ({
      "@type": "LodgingBusiness",
      name: villa!.name,
      url: `${siteConfig.url}/villas/${villa!.slug}`,
      telephone: siteConfig.whatsappNumber,
    })),
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".takeaways", "h1", "h2"],
    },
    potentialAction: {
      "@type": "ReserveAction",
      name: "Check villa availability",
      target: {
        "@type": "EntryPoint",
        urlTemplate: bookingUrl,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "LodgingReservation",
        name: "Ubud villa stay inquiry",
      },
    },
    ...(guide.keyTakeaways?.length
      ? {
          abstract: guide.keyTakeaways.join(" "),
        }
      : {}),
  };

  const webpage = {
    "@type": "WebPage",
    "@id": url,
    url,
    name: guide.title,
    description: guide.description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    primaryImageOfPage: { "@type": "ImageObject", url: hero },
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    inLanguage: "en-US",
    about: { "@id": `${url}#article` },
    significantLink: [
      bookingUrl,
      `${siteConfig.url}/villas/the-hideaway#offer`,
      `${siteConfig.url}/villas/sawah-retreat#offer`,
    ],
    potentialAction: {
      "@type": "ReadAction",
      target: url,
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Guides",
        item: `${siteConfig.url}/guides`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: url,
      },
    ],
  };

  const faq = guide.faqs?.length
    ? {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: guide.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [webpage, article, breadcrumb, ...(faq ? [faq] : [])],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
