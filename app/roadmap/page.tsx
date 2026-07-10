import type { CSSProperties } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import RoadmapHero from "../components/RoadmapHero";
import RoadmapTimeline from "../components/RoadmapTimeline";
import CurrentProgress from "../components/CurrentProgress";
import RoadmapCommitment from "../components/RoadmapCommitment";

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
