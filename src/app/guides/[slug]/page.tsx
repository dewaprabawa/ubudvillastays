import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { GuideArticle } from "@/components/guides/GuideArticle";
import { GuideJsonLd } from "@/components/guides/GuideJsonLd";
import { getGuide, guides } from "@/content/guides";
import { siteConfig } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};

  const url = `${siteConfig.url}/guides/${guide.slug}`;

  return {
    title: guide.title,
    description: guide.description,
    keywords: [guide.primaryKeyword, ...guide.secondaryKeywords],
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.description,
      url,
      publishedTime: guide.datePublished,
      modifiedTime: guide.dateModified,
      images: [
        {
          url: guide.heroImage,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: [guide.heroImage],
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <>
      <GuideJsonLd guide={guide} />
      <Header />
      <main id="main">
        <GuideArticle guide={guide} />
      </main>
      <Footer />
    </>
  );
}
