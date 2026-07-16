import type { Metadata } from "next";
import type { CSSProperties } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import WhitepaperHero from "../components/WhitepaperHero";
import ExecutiveSummary from "../components/ExecutiveSummary";
import ProjectPhilosophy from "../components/ProjectPhilosophy";
import Governance from "../components/Governance";
import TokenFoundation from "../components/TokenFoundation";
import DevelopmentStrategy from "../components/DevelopmentStrategy";
import TransparencyCommitment from "../components/TransparencyCommitment";
import FutureRoadmap from "../components/FutureRoadmap";
import RiskDisclosure from "../components/RiskDisclosure";
import WhitepaperConclusion from "../components/WhitepaperConclusion";

export const metadata: Metadata = {
  title: "Whitepaper",

  description:
    "Read the official MAG COIN Whitepaper outlining the project's vision, governance, transparency, token foundation, development strategy, roadmap, and long-term commitment to responsible blockchain innovation.",

  alternates: {
    canonical: "/whitepaper",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/whitepaper",
    siteName: "MAG COIN",
    title: "Whitepaper | MAG COIN",
    description:
      "Read the official MAG COIN Whitepaper covering the project's vision, governance framework, token foundation, transparency commitments, development strategy, risk disclosures, and future roadmap.",
    images: [
      {
        url: "/mag-social-banner.png",
        width: 1360,
        height: 430,
        alt: "MAG COIN Whitepaper — Built with Integrity. Trusted for Generations.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Whitepaper | MAG COIN",
    description:
      "Read the official MAG COIN Whitepaper covering the project's vision, governance framework, token foundation, transparency commitments, development strategy, risk disclosures, and future roadmap.",
    images: ["/mag-social-banner.png"],
    creator: "@MAGCOINBASE",
    site: "@MAGCOINBASE",
  },
};

export default function Whitepaper() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <WhitepaperHero />

          <ExecutiveSummary />

          <ProjectPhilosophy />

          <Governance />

          <TokenFoundation />

          <DevelopmentStrategy />

          <TransparencyCommitment />

          <FutureRoadmap />

          <RiskDisclosure />

          <WhitepaperConclusion />
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
