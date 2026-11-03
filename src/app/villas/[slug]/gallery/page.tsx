import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { VillaGalleryFull } from "@/components/VillaGalleryFull";
import { getVilla, siteConfig, villas } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return villas
    .filter((villa) => (villa.gallery?.length ?? 0) > 0)
    .map((villa) => ({ slug: villa.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const villa = getVilla(slug);
  if (!villa?.gallery?.length) return {};

  const url = `${siteConfig.url}/villas/${villa.slug}/gallery`;
  const title = `${villa.name} Photo Tour | ${villa.gallery.length} Photos · Tirta Tawar Ubud`;
  const description = `Full photo tour of ${villa.name} on Jl. Tirta Tawar, Ubud — living, kitchen, dining, gardens, baths, and bedrooms.`;

  return {
    title,
    description,
    alternates: { canonical: `/villas/${villa.slug}/gallery` },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: villa.ogImage,
          width: 1200,
          height: 800,
          alt: `${villa.name} photo tour`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [villa.ogImage],
    },
  };
}

export default async function VillaGalleryPage({ params }: PageProps) {
  const { slug } = await params;
  const villa = getVilla(slug);
  if (!villa?.gallery?.length) notFound();

  return (
    <>
      <Header villa={villa} tone="dark" />
      <main id="main">
        <VillaGalleryFull villa={villa} />
      </main>
      <Footer />
    </>
  );
}
