import type { CSSProperties } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AuditHero from "../components/AuditHero";
import ExecutiveAudit from "../components/ExecutiveAudit";
import TechnicalAudit from "../components/TechnicalAudit";
import DocumentationAudit from "../components/DocumentationAudit";
import AuditCommitment from "../components/AuditCommitment";

export default function Audit() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <AuditHero />

          <ExecutiveAudit />

          <TechnicalAudit />

          <DocumentationAudit />

          <AuditCommitment />
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
