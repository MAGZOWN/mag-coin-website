import type { Metadata } from "next";
import type { CSSProperties } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import TokenomicsHero from "../components/TokenomicsHero";
import TokenOverview from "../components/TokenOverview";
import SupplyDistribution from "../components/SupplyDistribution";
import TokenUtility from "../components/TokenUtility";
import TokenGovernance from "../components/TokenGovernance";

export const metadata: Metadata = {
  title: "Tokenomics",

  description:
    "Explore the official MAG COIN Tokenomics including total supply, token distribution, governance model, utility, and the long-term economic framework built on Base Mainnet.",

  alternates: {
    canonical: "/tokenomics",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/tokenomics",
    siteName: "MAG COIN",
    title: "Tokenomics | MAG COIN",
    description:
      "Explore the official MAG COIN Tokenomics including total supply, governance, utility, token distribution, and long-term sustainability.",
    images: [
      {
        url: "/mag-social-banner.png",
        width: 1360,
        height: 430,
        alt: "MAG COIN Tokenomics — Built with Integrity. Trusted for Generations.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tokenomics | MAG COIN",
    description:
      "Explore the official MAG COIN Tokenomics including total supply, governance, utility, token distribution, and long-term sustainability.",
    images: ["/mag-social-banner.png"],
    creator: "@MAGCOINBASE",
    site: "@MAGCOINBASE",
  },
};

export default function Tokenomics() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <TokenomicsHero />

          <TokenOverview />

          <SupplyDistribution />

          <TokenUtility />

          <TokenGovernance />
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
      "radial-gradient(circle at top,#171717 0%,#050505 45%,#000000 100%)",
    color: "#ffffff",
    padding: "60px 24px 0",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
};
