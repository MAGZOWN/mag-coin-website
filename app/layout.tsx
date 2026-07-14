import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coinmagbase.com"),

  title: {
    default: "MAG COIN | Built with Integrity. Trusted for Generations.",
    template: "%s | MAG COIN",
  },

  description:
    "MAG COIN is a long-term blockchain project built on Base Mainnet with transparency, responsible stewardship, continuous improvement, and sustainable growth at its foundation.",

  keywords: [
    "MAG COIN",
    "MAG token",
    "Base Mainnet",
    "Base blockchain",
    "MAG cryptocurrency",
    "blockchain transparency",
    "responsible blockchain development",
    "MAG COIN ecosystem",
  ],

  authors: [
    {
      name: "MAG COIN Foundation",
      url: "https://coinmagbase.com",
    },
  ],

  creator: "MAG COIN Foundation",
  publisher: "MAG COIN Foundation",

  applicationName: "MAG COIN",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coinmagbase.com",
    siteName: "MAG COIN",
    title: "MAG COIN | Built with Integrity. Trusted for Generations.",
    description:
      "A long-term blockchain project built on Base Mainnet with transparency, responsible stewardship, continuous improvement, and sustainable growth.",
    images: [
      {
        url: "/mag-social-banner.png",
        width: 1360,
        height: 430,
        alt: "MAG COIN — Built with Integrity. Trusted for Generations.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MAG COIN | Built with Integrity. Trusted for Generations.",
    description:
      "A long-term blockchain project built on Base Mainnet with transparency, responsible stewardship, continuous improvement, and sustainable growth.",
    images: ["/mag-social-banner.png"],
    creator: "@MAGCOINBASE",
    site: "@MAGCOINBASE",
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/mag-logo.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/mag-logo.png",
  },

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

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
