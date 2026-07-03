import type { CSSProperties } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import Snapshot from "./components/Snapshot";
import CoreValues from "./components/CoreValues";
import ProjectStatus from "./components/ProjectStatus";
import LatestProjectUpdates from "./components/LatestProjectUpdates";
import DevelopmentTimeline from "./components/DevelopmentTimeline";

export default function Home() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <Hero />
          <Snapshot />
          <CoreValues />
          <ProjectStatus />
          <LatestProjectUpdates />
          <DevelopmentTimeline />
        </section>
      </main>

      <Footer />
    </>
  );
}

const styles: Record<string, CSSProperties> = {
  main: {
    background:
      "radial-gradient(circle at top, #171717 0%, #050505 45%, #000000 100%)",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
    padding: "35px 24px 0",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
};
