import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Private Pool Villas in Ubud, Bali`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Ubud villa rental",
    "Bali private pool villa",
    "Tirta Tawar Ubud",
    "Jl Tirta Tawar villa",
    "2 bedroom villa Ubud",
    "6 bedroom villa Ubud",
    "yoga retreat villa Ubud",
    "rice field villa Bali",
    "vacation rental Bali",
    "Kecak dance Ubud",
    "Monkey Forest Ubud villa",
    "Ubud traditional market",
    siteConfig.name,
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} · Private pool villas in Tirta Tawar, Ubud`,
    description:
      "The Hideaway from Rp 4.9 juta per night with a free Ubud activity, plus Sawah Retreat for groups — private pool villas on Jl. Tirta Tawar, Ubud, Bali.",
    images: [
      {
        url: "/images/villas/the-hideaway/og.jpg",
        width: 1200,
        height: 800,
        alt: "The Hideaway private pool villa courtyard in Tirta Tawar, Ubud",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} · Tirta Tawar Ubud villas`,
    description:
      "Hideaway from Rp 4.9 juta / night with free activity · Sawah Retreat for groups on Jl. Tirta Tawar.",
    images: ["/images/villas/the-hideaway/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180" }],
  },
  category: "travel",
};

export const viewport: Viewport = {
  themeColor: "#4A6572",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="1f4bNPYEdgRWvVOiD9QLBQ"
          strategy="afterInteractive"
        />
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
