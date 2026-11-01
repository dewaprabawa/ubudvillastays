import { type Guide } from "@/content/guides";
import {
  bookingFaq,
  bookingUrl,
  siteConfig,
  villas,
} from "@/lib/site";

export function GuideJsonLd({ guide }: { guide: Guide }) {
  const url = `${siteConfig.url}/guides/${guide.slug}`;
  const hero = `${siteConfig.url}${guide.heroImage}`;
  const orgId = `${siteConfig.url}/#organization`;
  const websiteId = `${siteConfig.url}/#website`;
  const bookingId = `${siteConfig.url}/#booking`;

  const relatedVillas = guide.relatedVillaSlugs
    .map((slug) => villas.find((villa) => villa.slug === slug))
    .filter(Boolean);

  const faqs = [...(guide.faqs ?? [])];
  if (!faqs.some((item) => /book/i.test(item.question))) {
    faqs.push(bookingFaq);
  }

  const organization = {
    "@type": "Organization",
    "@id": orgId,
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.whatsappNumber,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/brand/logo-mark.png`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.streetAddress,
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: "ID",
    },
    sameAs: [siteConfig.location.mapsUrl],
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: { "@id": orgId },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "ReserveAction",
      name: "Book villa dates",
      target: bookingUrl,
    },
  };

  const bookingPage = {
    "@type": "WebPage",
    "@id": bookingId,
    url: bookingUrl,
    name: "Villa booking form — check availability",
    description:
      "Select villa, date range, number of persons, and details, then continue on WhatsApp to confirm availability.",
    isPartOf: { "@id": websiteId },
    about: relatedVillas.map((villa) => ({
      "@type": "LodgingBusiness",
      name: villa!.name,
      url: `${siteConfig.url}/villas/${villa!.slug}`,
    })),
  };

  const villaOffers = {
    "@type": "ItemList",
    "@id": `${url}#villas`,
    name: "Tirta Tawar villas to book",
    itemListElement: villas.map((villa, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${siteConfig.url}/villas/${villa.slug}`,
      name: villa.name,
      item: {
        "@type": ["LodgingBusiness", "VacationRental"],
        name: villa.name,
        url: `${siteConfig.url}/villas/${villa.slug}`,
        telephone: siteConfig.whatsappNumber,
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
        ...(villa.offer
          ? {
              offers: {
                "@type": "Offer",
                url: `${siteConfig.url}/villas/${villa.slug}#offer`,
                price: villa.offer.priceAmount,
                priceCurrency: villa.offer.currency,
                availability: "https://schema.org/InStock",
                category: "VacationRental",
              },
            }
          : {}),
      },
    })),
  };

  const article = {
    "@type": ["Article", "BlogPosting"],
    "@id": `${url}#article`,
    headline: guide.title,
    name: guide.title,
    description: guide.description,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    author: { "@id": orgId },
    publisher: { "@id": orgId },
    image: {
      "@type": "ImageObject",
      url: hero,
      caption: guide.title,
    },
    thumbnailUrl: hero,
    mainEntityOfPage: { "@id": url },
    isPartOf: { "@id": websiteId },
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
    mentions: [
      ...relatedVillas.map((villa) => ({
        "@type": "LodgingBusiness",
        name: villa!.name,
        url: `${siteConfig.url}/villas/${villa!.slug}`,
        telephone: siteConfig.whatsappNumber,
      })),
      {
        "@type": "WebPage",
        "@id": bookingId,
        name: "Villa booking checkout",
        url: bookingUrl,
      },
    ],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".takeaways", "h1", "h2", ".ctaBand"],
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
      ? { abstract: guide.keyTakeaways.join(" ") }
      : {}),
  };

  const webpage = {
    "@type": "WebPage",
    "@id": url,
    url,
    name: guide.title,
    description: guide.description,
    isPartOf: { "@id": websiteId },
    primaryImageOfPage: { "@type": "ImageObject", url: hero },
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    inLanguage: "en-US",
    mainEntity: { "@id": `${url}#article` },
    significantLink: [
      bookingUrl,
      `${siteConfig.url}/villas/the-hideaway#offer`,
      `${siteConfig.url}/villas/sawah-retreat#offer`,
      `${siteConfig.url}/guides`,
    ],
    relatedLink: [bookingUrl],
    potentialAction: [
      {
        "@type": "ReadAction",
        target: url,
      },
      {
        "@type": "ReserveAction",
        name: "Go to villa booking form",
        target: bookingUrl,
      },
    ],
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
      {
        "@type": "ListItem",
        position: 4,
        name: "Book villa dates",
        item: bookingUrl,
      },
    ],
  };

  const faq = faqs.length
    ? {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
    : null;

  const howTo = guide.howTo
    ? {
        "@type": "HowTo",
        "@id": `${url}#howto`,
        name: guide.howTo.name,
        description: guide.howTo.description,
        totalTime: "PT20M",
        step: guide.howTo.steps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.name,
          text: step.text,
          url: `${url}#howto-step-${index + 1}`,
        })),
      }
    : null;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website,
      bookingPage,
      webpage,
      article,
      villaOffers,
      breadcrumb,
      ...(faq ? [faq] : []),
      ...(howTo ? [howTo] : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
