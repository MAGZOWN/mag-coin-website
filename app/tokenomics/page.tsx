import type { CSSProperties } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import TokenomicsHero from "../components/TokenomicsHero";
import TokenOverview from "../components/TokenOverview";
import SupplyDistribution from "../components/SupplyDistribution";
import TokenUtility from "../components/TokenUtility";
import TokenGovernance from "../components/TokenGovernance";

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
