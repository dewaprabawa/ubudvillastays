import { type Guide } from "@/content/guides";
import { siteConfig } from "@/lib/site";

export function GuideJsonLd({ guide }: { guide: Guide }) {
  const url = `${siteConfig.url}/guides/${guide.slug}`;

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.datePublished,
    dateModified: guide.dateModified,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/brand/logo-mark.png`,
      },
    },
    image: [`${siteConfig.url}${guide.heroImage}`],
    mainEntityOfPage: url,
    keywords: [guide.primaryKeyword, ...guide.secondaryKeywords].join(", "),
    about: {
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
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
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
        "@context": "https://schema.org",
        "@type": "FAQPage",
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      {faq ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
        />
      ) : null}
    </>
  );
}
