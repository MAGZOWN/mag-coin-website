import type { CSSProperties } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import WhitepaperHero from "../components/WhitepaperHero";
import ExecutiveSummary from "../components/ExecutiveSummary";
import ProjectPhilosophy from "../components/ProjectPhilosophy";
import WhitepaperSections from "../components/WhitepaperSections";
import RiskDisclosure from "../components/RiskDisclosure";
import WhitepaperConclusion from "../components/WhitepaperConclusion";

export default function Whitepaper() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <WhitepaperHero />

          <ExecutiveSummary />

          <ProjectPhilosophy />

          <WhitepaperSections />

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
