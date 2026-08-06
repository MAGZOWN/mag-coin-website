import type { CSSProperties } from "react";
import type { Metadata } from "next";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AboutHero from "../components/AboutHero";
import AboutSections from "../components/AboutSections";
import AboutProof from "../components/AboutProof";
import FounderCommitment from "../components/FounderCommitment";

export const metadata: Metadata = {
  title: "About",

  description:
    "Learn about MAG COIN, its long-term vision, foundation principles, transparent development approach, responsible stewardship, and commitment to sustainable growth on Base Mainnet.",

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/about",
    siteName: "MAG COIN",
    title: "About | MAG COIN",
    description:
      "Learn about MAG COIN, its long-term vision, foundation principles, transparent development approach, responsible stewardship, and commitment to sustainable growth on Base Mainnet.",
    images: [
      {
        url: "/mag-social-banner.png",
        width: 1360,
        height: 430,
        alt: "About MAG COIN — Built with Integrity. Trusted for Generations.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About | MAG COIN",
    description:
      "Learn about MAG COIN, its long-term vision, foundation principles, transparent development approach, responsible stewardship, and commitment to sustainable growth on Base Mainnet.",
    images: ["/mag-social-banner.png"],
    creator: "@MAGCOINBASE",
    site: "@MAGCOINBASE",
  },
};

export default function About() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <AboutHero />
          <AboutSections />
          <AboutProof />
          <FounderCommitment />
        </section>
      </main>

      <Footer />
    </>
  );
}

const styles: Record<string, CSSProperties> = {
  main: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #171717 0%, #050505 45%, #000000 100%)",
    color: "#ffffff",
    padding: "60px 24px 0",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
};
