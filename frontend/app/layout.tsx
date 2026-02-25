import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shamba | Agricultural Data Platform",
  description: "Shamba is a geospatial CRM platform for managing smallholder farmers with offline-first mobile data collection, GPS boundary mapping, and program management.",
  keywords: [
    "smallholder farmer CRM",
    "agricultural CRM",
    "farm management software",
    "geospatial mapping",
    "farmer relationship management",
    "mobile data collection",
    "agricultural program management",
    "field organization tools",
    "KoboToolbox alternative",
    "SurveyCTO alternative",
    "ODK alternative",
    "getODK alternative",
    "offline data collection",
    "GPS farm mapping",
    "field boundary mapping",
    "agricultural survey tool",
    "farmer enrollment platform",
    "smallholder farm management",
  ],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Shamba - Geospatial CRM for Smallholder Farmers",
    description: "Powerful geospatial CRM platform for organizations supporting smallholder farmers. Mapping, mobile data collection, and agricultural program management.",
    url: "https://shamba.land",
    siteName: "Shamba",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shamba - Geospatial CRM for Smallholder Farmers",
    description: "Powerful geospatial CRM platform for organizations supporting smallholder farmers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Shamba",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android, iOS",
  description: "Geospatial CRM platform for organizations supporting smallholder farmers with mapping, mobile data collection, and agricultural program management tools.",
  url: "https://shamba.land",
  author: {
    "@type": "Organization",
    name: "Shamba.land",
    url: "https://shamba.land",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/ComingSoon",
  },
  keywords: "KoboToolbox alternative, SurveyCTO alternative, ODK alternative, smallholder farmer CRM, agricultural data collection, GPS farm mapping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
