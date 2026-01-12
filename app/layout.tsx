import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Testimonials from "@/components/sections/Testimonials";
import CallToAction from "@/components/sections/CallToAction";

export const metadata: Metadata = {
  metadataBase: new URL("https://lyxvaraconcierge.com"),

  title: {
    default: "Lyxvara Concierge | World-Class Luxury Concierge Services",
    template: "%s | Lyxvara Concierge",
  },

  description:
    "Lyxvara Concierge is a premium luxury concierge company delivering bespoke lifestyle, travel, and corporate concierge services with world-class attention to detail.",

  keywords: [
    "Luxury concierge",
    "Premium concierge services",
    "Corporate concierge",
    "Lifestyle management",
    "Travel concierge",
    "VIP services",
    "Luxury concierge Nigeria",
    "Concierge services Africa",
  ],

  authors: [{ name: "Lyxvara Concierge" }],
  creator: "Lyxvara Concierge",
  publisher: "Lyxvara Concierge",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lyxvaraconcierge.com",
    siteName: "Lyxvara Concierge",
    title: "Lyxvara Concierge | Luxury, Simplified",
    description:
      "World-class concierge services curated for discerning individuals and corporate clients. Your world, expertly managed.",
    images: [
      {
        url: "/og/lyxvara-og.jpg",
        width: 1200,
        height: 630,
        alt: "Lyxvara Concierge — Luxury Concierge Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lyxvara Concierge | Luxury Concierge Services",
    description:
      "Bespoke concierge solutions for lifestyle, travel, and corporate needs. Luxury, without compromise.",
    images: ["/og/lyxvara-og.jpg"],
    creator: "@lyxvaraconcierge", // update if different
  },

  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon-32x32.png",
    apple: "/assets/apple-touch-icon.png",
  },

  alternates: {
    canonical: "https://lyxvaraconcierge.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div className="min-h-screen bg-background">
          <Header />
          {children}
          <CallToAction />
          <Footer />
        </div>
      </body>
    </html>
  );
}
