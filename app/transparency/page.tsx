import type { CSSProperties } from "react";
import type { Metadata } from "next";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import TrustCenterHero from "../components/TrustCenterHero";
import VerificationDashboard from "../components/VerificationDashboard";
import FoundationDocuments from "../components/FoundationDocuments";
import SecurityCenter from "../components/SecurityCenter";
import TransparencyTimeline from "../components/TransparencyTimeline";
import OfficialLinks from "../components/OfficialLinks";
import FoundationUpdates from "../components/FoundationUpdates";

export const metadata: Metadata = {
  title: "Transparency | MAG COIN",
  description:
    "MAG COIN transparency center with verified contract, liquidity, audit, documentation, and project milestone records.",
};

export default function Transparency() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <div style={styles.statusBanner}>
            <span style={styles.statusLabel}>Foundation Release v1.0</span>
            <span style={styles.statusText}>
              Contract verified • MAG/USDC liquidity live • DEXTools and
              DEXScreener indexed • Documentation archive in progress
            </span>
          </div>

          <TrustCenterHero />

          <section style={styles.noticeBox}>
            <h2 style={styles.noticeTitle}>Transparency First</h2>
            <p style={styles.noticeText}>
              MAG COIN is being built as a long-term blockchain project on Base
              Mainnet. Every major technical, liquidity, treasury, and
              governance milestone should be documented, verified, and preserved
              for public review.
            </p>
          </section>

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

  statusBanner: {
    border: "1px solid rgba(255, 203, 74, 0.35)",
    background: "rgba(255, 203, 74, 0.08)",
    borderRadius: "18px",
    padding: "18px 20px",
    marginBottom: "28px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },

  statusLabel: {
    color: "#ffcb4a",
    fontWeight: 800,
    fontSize: "0.95rem",
    letterSpacing: "0.04em",
    textTransform: "uppercase",
  },

  statusText: {
    color: "#e5e5e5",
    fontSize: "0.98rem",
    lineHeight: 1.6,
  },

  noticeBox: {
    border: "1px solid rgba(255, 255, 255, 0.12)",
    background: "rgba(255, 255, 255, 0.04)",
    borderRadius: "22px",
    padding: "28px",
    margin: "32px 0",
  },

  noticeTitle: {
    margin: "0 0 12px",
    color: "#ffcb4a",
    fontSize: "1.55rem",
  },

  noticeText: {
    margin: 0,
    color: "#d6d6d6",
    lineHeight: 1.8,
    fontSize: "1rem",
  },
};
