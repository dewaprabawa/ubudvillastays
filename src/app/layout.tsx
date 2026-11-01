import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
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
    default: `${siteConfig.name} | ${siteConfig.villaName} — Ubud Bali Villa Rental`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Ubud villa rental",
    "Bali private pool villa",
    "Tirta Tawar Ubud",
    "2 bedroom villa Ubud",
    "vacation rental Bali",
    "Ubud Hideaway villa",
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
    title: `${siteConfig.villaName} · Private pool villa in Ubud, Bali`,
    description: siteConfig.tagline,
    images: [
      {
        url: "/images/villa/og.jpg",
        width: 1200,
        height: 800,
        alt: `${siteConfig.villaName} private pool courtyard in Ubud`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.villaName} · Ubud Villa Stays`,
    description: siteConfig.tagline,
    images: ["/images/villa/og.jpg"],
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
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
