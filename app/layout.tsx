import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://coinmagbase.com/#organization",
  name: "MAG COIN Foundation",
  alternateName: "MAG COIN",
  url: "https://coinmagbase.com",
  logo: {
    "@type": "ImageObject",
    url: "https://coinmagbase.com/mag-logo.png",
  },
  image: "https://coinmagbase.com/mag-social-banner.png",
  description:
    "MAG COIN is an ERC-20 token on Base focused on transparency, responsible development, long-term sustainability, and community trust through public documentation and verifiable on-chain information.",
  email: "info@coinmagbase.com",
  sameAs: [
    "https://x.com/MAGCOINBASE",
    "https://t.me/MAGCOINBASE",
    "https://web.facebook.com/profile.php?id=61592146070481",
    "https://www.instagram.com/coinbasemag/",
    "https://github.com/MAGZOWN",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Project enquiries",
    email: "info@coinmagbase.com",
    url: "https://coinmagbase.com/contact",
    availableLanguage: ["English"],
  },
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://coinmagbase.com/#website",
  url: "https://coinmagbase.com",
  name: "MAG COIN",
  alternateName: "MAG COIN Foundation",
  description:
    "The official website of MAG COIN, a long-term blockchain project built on Base Mainnet.",
  publisher: {
    "@id": "https://coinmagbase.com/#organization",
  },
  inLanguage: "en",
};

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

  openGraph: {
    type: "website",
    locale: "en_US",
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
      <head>
        <script
          id="mag-coin-organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />

        <script
          id="mag-coin-website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-7GFJ914612"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7GFJ914612', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
