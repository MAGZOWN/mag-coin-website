import type { Metadata } from "next";
import type { CSSProperties } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ConstitutionHero from "../components/ConstitutionHero";
import ConstitutionArticles from "../components/ConstitutionArticles";
import FoundationPrinciples from "../components/FoundationPrinciples";
import ConstitutionCommitment from "../components/ConstitutionCommitment";

export const metadata: Metadata = {
  title: "Constitution",

  description:
    "Read the official MAG COIN Constitution, outlining the project's founding principles, governance philosophy, ethical commitments, transparency standards, and long-term stewardship.",

  alternates: {
    canonical: "/constitution",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/constitution",
    siteName: "MAG COIN",
    title: "Constitution | MAG COIN",
    description:
      "Explore the official MAG COIN Constitution defining the project's principles, governance framework, transparency commitments, and long-term vision.",
    images: [
      {
        url: "/mag-social-banner.png",
        width: 1360,
        height: 430,
        alt: "MAG COIN Constitution — Built with Integrity. Trusted for Generations.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Constitution | MAG COIN",
    description:
      "Explore the official MAG COIN Constitution defining the project's principles, governance framework, transparency commitments, and long-term vision.",
    images: ["/mag-social-banner.png"],
    creator: "@MAGCOINBASE",
    site: "@MAGCOINBASE",
  },
};

export default function Constitution() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <ConstitutionHero />

          <ConstitutionArticles />

          <FoundationPrinciples />

          <ConstitutionCommitment />
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
