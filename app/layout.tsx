import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Squish Toy Guide — Reviews, Scorecards & Buying Guides",
    template: "%s | Squish Toy Guide",
  },
  description:
    "Your ultimate guide to squish toys — expert reviews, sensory scorecards, and buying guides for Needoh and more.",
  metadataBase: new URL("https://squishtoyguide.com"),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    siteName: "Squish Toy Guide",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Squish Toy Guide — Reviews, Scorecards & Buying Guides",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white text-gray-900">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-md"
        >
          Skip to main content
        </a>
        <StickyHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
