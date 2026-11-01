import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const lodging = {
    "@context": "https://schema.org",
    "@type": ["LodgingBusiness", "VacationRental"],
    name: `${siteConfig.name} — ${siteConfig.villaName}`,
    description: siteConfig.description,
    url: siteConfig.url,
    image: [`${siteConfig.url}/images/villa/og.jpg`],
    telephone: siteConfig.whatsappTodo ? undefined : siteConfig.whatsappNumber,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location.city,
      addressRegion: siteConfig.location.region,
      addressCountry: "ID",
      streetAddress: siteConfig.location.addressHint,
    },
    geo: {
      "@type": "GeoCoordinates",
      // Approximate Ubud / Tirta Tawar area — refine when exact coords confirmed
      latitude: -8.5069,
      longitude: 115.2625,
    },
    numberOfRooms: siteConfig.facts.bedrooms,
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: siteConfig.facts.guests,
    },
    amenityFeature: siteConfig.amenities.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.facts.rating,
      reviewCount: siteConfig.facts.reviews,
      bestRating: 5,
    },
    sameAs: [siteConfig.airbnbUrl],
    priceRange: "$$",
  };

  const place = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: `${siteConfig.villaName}, ${siteConfig.location.city}`,
    description: `Private pool villa vacation rental in ${siteConfig.location.area}, ${siteConfig.location.city}, ${siteConfig.location.region}, Indonesia.`,
    address: lodging.address,
    geo: lodging.geo,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lodging) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(place) }}
      />
    </>
  );
}
