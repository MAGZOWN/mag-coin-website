import type { CSSProperties } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import TrustCenterHero from "../components/TrustCenterHero";
import VerificationDashboard from "../components/VerificationDashboard";
import FoundationDocuments from "../components/FoundationDocuments";
import SecurityCenter from "../components/SecurityCenter";
import TransparencyTimeline from "../components/TransparencyTimeline";
import OfficialLinks from "../components/OfficialLinks";
import FoundationUpdates from "../components/FoundationUpdates";

export default function Transparency() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <TrustCenterHero />

          <VerificationDashboard />

          <FoundationDocuments />

          <SecurityCenter />

          <TransparencyTimeline />

          <OfficialLinks />

          <FoundationUpdates />
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
