import { type Villa, siteConfig, villas } from "@/lib/site";

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
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.location.city,
        addressRegion: siteConfig.location.region,
        addressCountry: "ID",
        streetAddress: siteConfig.location.addressHint,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -8.5069,
        longitude: 115.2625,
      },
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
      sameAs: [villa.airbnbUrl],
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
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: "ID",
      streetAddress: siteConfig.location.addressHint,
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
      ? `${villa.name}, ${siteConfig.location.city}`
      : `${siteConfig.name}, ${siteConfig.location.city}`,
    description: villa
      ? villa.description
      : `Private pool villa vacation rentals in ${siteConfig.location.area}, ${siteConfig.location.city}, ${siteConfig.location.region}, Indonesia.`,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: "ID",
      streetAddress: siteConfig.location.addressHint,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -8.5069,
      longitude: 115.2625,
    },
  };

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
    </>
  );
}
