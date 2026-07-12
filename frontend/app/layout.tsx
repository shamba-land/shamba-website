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
  title: "Shamba | Putting smallholders on the map",
  description: "Shamba is the platform for smallholder organizations. Manage your farmer network from the office and capture farm data offline in the field, with plot mapping, surveys, traceability, and program management in one shared record.",
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
    title: "Shamba | Putting smallholders on the map",
    description: "Manage your farmer network from the office and capture farm data offline in the field. Plot mapping, surveys, traceability, and program management in one shared record.",
    url: "https://shamba.com",
    siteName: "Shamba",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shamba | Putting smallholders on the map",
    description: "Manage your farmer network from the office and capture farm data offline in the field.",
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
  description: "The platform for smallholder organizations. Manage your farmer network from the office and capture farm data offline in the field, with plot mapping, surveys, traceability, and program management in one shared record.",
  url: "https://shamba.com",
  author: {
    "@type": "Organization",
    name: "Shamba",
    url: "https://shamba.com",
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
