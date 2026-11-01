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
import { VillaOffer } from "@/components/VillaOffer";
import { getVilla, siteConfig, villaOfferWhatsApp, villas } from "@/lib/site";

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
  const offerTitle = villa.offer
    ? `${villa.name} from ${villa.offer.priceLabel} ${villa.offer.pricePer} | Tirta Tawar Ubud`
    : `${villa.name} | ${villa.facts.bedrooms}BR Pool Villa Tirta Tawar Ubud`;

  return {
    title: offerTitle,
    description: villa.description,
    keywords: [
      `${villa.facts.bedrooms} bedroom villa ubud`,
      "private pool villa ubud",
      "ubud villa rental",
      "tirta tawar ubud",
      "jl tirta tawar",
      "ubud vacation rental",
      "kecak dance ubud",
      "monkey forest ubud villa",
      "ubud rice field cycling",
      "balinese cooking class ubud",
      "villa with free activity ubud",
      villa.name.toLowerCase(),
    ],
    alternates: { canonical: `/villas/${villa.slug}` },
    openGraph: {
      title: offerTitle,
      description: villa.tagline,
      url,
      images: [
        {
          url: villa.ogImage,
          width: 1200,
          height: 800,
          alt: `${villa.name} in Ubud, Bali`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: offerTitle,
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
      <Header
        inquireVillaName={villa.name}
        inquireHref={
          villa.offer ? villaOfferWhatsApp(villa) : undefined
        }
      />
      <main id="main">
        <Hero villa={villa} showBrand={false} />
        <VillaOffer villa={villa} />
        <Story villa={villa} />
        <Spaces villa={villa} />
        <Amenities villa={villa} />
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
