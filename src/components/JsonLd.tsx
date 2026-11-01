import { type Villa, siteConfig, villas } from "@/lib/site";

const postalAddress = {
  "@type": "PostalAddress" as const,
  streetAddress: siteConfig.location.streetAddress,
  addressLocality: siteConfig.location.city,
  addressRegion: siteConfig.location.region,
  addressCountry: "ID",
};

const geo = {
  "@type": "GeoCoordinates" as const,
  latitude: siteConfig.location.latitude,
  longitude: siteConfig.location.longitude,
};

function lodgingSchema(villa?: Villa) {
  if (villa) {
    return {
      "@context": "https://schema.org",
      "@type": ["LodgingBusiness", "VacationRental"],
      name: `${villa.name} — ${siteConfig.name}`,
      description: villa.description,
      url: `${siteConfig.url}/villas/${villa.slug}`,
      image: [`${siteConfig.url}${villa.ogImage}`],
      telephone: siteConfig.whatsappNumber,
      email: siteConfig.email,
      address: postalAddress,
      geo,
      hasMap: siteConfig.location.mapsUrl,
      numberOfRooms: villa.facts.bedrooms,
      occupancy: {
        "@type": "QuantitativeValue",
        maxValue: villa.facts.guests,
      },
      amenityFeature: villa.amenities.map((name) => ({
        "@type": "LocationFeatureSpecification",
        name,
        value: true,
      })),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: villa.facts.rating,
        reviewCount: villa.facts.reviews,
        bestRating: 5,
      },
      sameAs: [villa.airbnbUrl, siteConfig.location.mapsUrl],
      priceRange: "$$",
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.whatsappNumber,
    description: siteConfig.description,
    address: postalAddress,
    location: {
      "@type": "Place",
      name: siteConfig.location.placeName,
      address: postalAddress,
      geo,
      hasMap: siteConfig.location.mapsUrl,
    },
    makesOffer: villas.map((item) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": ["LodgingBusiness", "VacationRental"],
        name: item.name,
        url: `${siteConfig.url}/villas/${item.slug}`,
      },
    })),
  };
}

export function JsonLd({ villa }: { villa?: Villa }) {
  const place = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: villa
      ? `${villa.name}, ${siteConfig.location.placeName}`
      : siteConfig.location.placeName,
    description: villa
      ? villa.description
      : `Private pool villa vacation rentals in ${siteConfig.location.area}, ${siteConfig.location.city}, ${siteConfig.location.region}, Indonesia.`,
    address: postalAddress,
    geo,
    hasMap: siteConfig.location.mapsUrl,
  };

  const breadcrumb = villa
    ? {
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
            name: "Villas",
            item: `${siteConfig.url}/#villas`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: villa.name,
            item: `${siteConfig.url}/villas/${villa.slug}`,
          },
        ],
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema(villa)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(place) }}
      />
      {breadcrumb ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
        />
      ) : null}
    </>
  );
}
