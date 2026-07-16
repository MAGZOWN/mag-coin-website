import type { Metadata } from "next";
import type { CSSProperties } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import RoadmapHero from "../components/RoadmapHero";
import RoadmapTimeline from "../components/RoadmapTimeline";
import CurrentProgress from "../components/CurrentProgress";
import RoadmapCommitment from "../components/RoadmapCommitment";

export const metadata: Metadata = {
  title: "Roadmap",

  description:
    "Follow the official MAG COIN Roadmap detailing completed milestones, current development progress, and the long-term vision for responsible ecosystem growth on Base Mainnet.",

  alternates: {
    canonical: "/roadmap",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/roadmap",
    siteName: "MAG COIN",
    title: "Roadmap | MAG COIN",
    description:
      "Explore the MAG COIN development roadmap, completed milestones, ongoing progress, and future plans for sustainable ecosystem growth.",
    images: [
      {
        url: "/mag-social-banner.png",
        width: 1360,
        height: 430,
        alt: "MAG COIN Roadmap — Built with Integrity. Trusted for Generations.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Roadmap | MAG COIN",
    description:
      "Explore the MAG COIN development roadmap, completed milestones, ongoing progress, and future plans for sustainable ecosystem growth.",
    images: ["/mag-social-banner.png"],
    creator: "@MAGCOINBASE",
    site: "@MAGCOINBASE",
  },
};

export default function Roadmap() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <RoadmapHero />

          <CurrentProgress />

          <RoadmapTimeline />

          <RoadmapCommitment />
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
