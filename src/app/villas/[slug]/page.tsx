import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Amenities } from "@/components/Amenities";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Location } from "@/components/Location";
import { Reserve } from "@/components/Reserve";
import { Reviews } from "@/components/Reviews";
import { SisterVillas } from "@/components/SisterVillas";
import { Spaces } from "@/components/Spaces";
import { Story } from "@/components/Story";
import { ThingsToKnow } from "@/components/ThingsToKnow";
import { VillaGallery } from "@/components/VillaGallery";
import { VillaOffer } from "@/components/VillaOffer";
import { VillaPitch } from "@/components/VillaPitch";
import { getVilla, siteConfig, villas } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return villas.map((villa) => ({ slug: villa.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const villa = getVilla(slug);
  if (!villa) return {};

  const url = `${siteConfig.url}/villas/${villa.slug}`;
  const pageTitle = villa.offer
    ? `${villa.name} from ${villa.offer.priceLabel} ${villa.offer.pricePer} | Tirta Tawar Ubud`
    : `${villa.name} | ${villa.facts.bedrooms}BR Rice Field Villa Tirta Tawar Ubud`;

  const keywords = [
    `${villa.facts.bedrooms} bedroom villa ubud`,
    "private pool villa ubud",
    "ubud villa rental",
    "tirta tawar ubud",
    "jl tirta tawar",
    "ubud vacation rental",
    "kecak dance ubud",
    "monkey forest ubud villa",
    villa.name.toLowerCase(),
  ];

  if (villa.offer) {
    keywords.push(
      "ubud rice field cycling",
      "balinese cooking class ubud",
      "villa with free activity ubud",
    );
  }

  if (villa.slug === "sawah-retreat") {
    keywords.push(
      "6 bedroom villa ubud",
      "rice field villa ubud",
      "yoga retreat villa ubud",
      "group villa ubud",
      "family villa tirta tawar",
    );
  }

  return {
    title: pageTitle,
    description: villa.description,
    keywords,
    alternates: { canonical: `/villas/${villa.slug}` },
    openGraph: {
      title: pageTitle,
      description: villa.tagline,
      url,
      type: "website",
      images: [
        {
          url: villa.ogImage,
          width: 1200,
          height: 800,
          alt: `${villa.name} private pool villa in Tirta Tawar, Ubud, Bali`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: villa.tagline,
      images: [villa.ogImage],
    },
  };
}

export default async function VillaPage({ params }: PageProps) {
  const { slug } = await params;
  const villa = getVilla(slug);
  if (!villa) notFound();

  return (
    <>
      <JsonLd villa={villa} />
      <Header villa={villa} />
      <main id="main">
        <Hero villa={villa} showBrand={false} />
        <VillaOffer villa={villa} />
        <VillaPitch villa={villa} />
        <Story villa={villa} />
        <Spaces villa={villa} />
        <VillaGallery villa={villa} />
        <Amenities villa={villa} />
        <ThingsToKnow villa={villa} />
        <Experience />
        <Location />
        <Reviews villa={villa} />
        <SisterVillas current={villa} />
        <Reserve villa={villa} />
      </main>
      <Footer />
    </>
  );
}
