import type { Metadata } from "next";
import "./globals.css";
import Analytics from "@/components/Analytics";

const BASE_URL = "https://www.invaluablessmediagroup.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "InvaluaBless Media Group — Digital Marketing Agency in San Antonio, TX",
    template: "%s | InvaluaBless Media Group",
  },

  description:
    "Performance-driven digital marketing agency based in San Antonio, TX. We help brands grow, scale, and dominate online through paid ads, social media management, Google Business Profile optimization, and lead generation.",

  keywords: [
    "digital marketing agency San Antonio",
    "social media management San Antonio",
    "Google Business Profile optimization",
    "paid ads San Antonio",
    "Facebook ads San Antonio",
    "lead generation San Antonio",
    "brand growth agency Texas",
    "InvaluaBless Media Group",
    "marketing agency San Antonio TX",
    "local SEO San Antonio",
  ],

  authors: [{ name: "InvaluaBless Media Group", url: BASE_URL }],
  creator: "InvaluaBless Media Group",
  publisher: "InvaluaBless Media Group",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "InvaluaBless Media Group",
    title: "InvaluaBless Media Group — Digital Marketing Agency in San Antonio, TX",
    description:
      "Performance-driven digital marketing strategies designed to increase visibility, drive qualified traffic, and turn leads into paying clients.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "InvaluaBless Media Group",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "InvaluaBless Media Group — Digital Marketing Agency in San Antonio, TX",
    description:
      "Performance-driven digital marketing strategies designed to increase visibility, drive qualified traffic, and turn leads into paying clients.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo_original.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}