import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Amenities } from "@/components/Amenities";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { Location } from "@/components/Location";
import { Reserve } from "@/components/Reserve";
import { Reviews } from "@/components/Reviews";
import { Spaces } from "@/components/Spaces";
import { Story } from "@/components/Story";
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

  return {
    title: `${villa.name} | ${villa.facts.bedrooms}BR Pool Villa in Ubud`,
    description: villa.description,
    alternates: { canonical: `/villas/${villa.slug}` },
    openGraph: {
      title: `${villa.name} · ${siteConfig.name}`,
      description: villa.tagline,
      url,
      images: [
        {
          url: villa.ogImage,
          width: 1200,
          height: 800,
          alt: `${villa.name} in Ubud`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${villa.name} · ${siteConfig.name}`,
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
      <Header />
      <main id="main">
        <Hero villa={villa} showBrand={false} />
        <Story villa={villa} />
        <Spaces villa={villa} />
        <Amenities villa={villa} />
        <Location />
        <Reviews villa={villa} />
        <Reserve villa={villa} />
      </main>
      <Footer />
    </>
  );
}
