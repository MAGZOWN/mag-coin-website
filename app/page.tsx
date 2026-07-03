import type { CSSProperties } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.hero}>
          <img src="/mag-logo.png" alt="MAG COIN Logo" style={styles.logo} />

          <h2 style={styles.motto}>
            Built with Integrity. Trusted for Generations. Empowering Global Growth.
          </h2>

          <p style={styles.subtitle}>
            MAG Coin is a long-term blockchain project on Base, built with
            transparency, responsible stewardship, and continuous improvement.
          </p>

          <div style={styles.buttons}>
            <a href="/whitepaper" style={styles.button}>Read Whitepaper</a>
            <a href="/audit" style={styles.button}>View Audit Report</a>
            <a
              href="https://basescan.org/address/0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.button}
            >
              View on BaseScan
            </a>
          </div>

          <div style={styles.snapshot}>
            <h3 style={styles.cardTitle}>Official Project Snapshot</h3>
            <p><strong>Network:</strong> Base</p>
            <p><strong>Token Symbol:</strong> MAG</p>
            <p><strong>Total Supply:</strong> 1,000,000,000 MAG</p>
            <p style={styles.contract}>
              <strong>Official Contract:</strong><br />
              0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94
            </p>
          </div>

          <section style={styles.grid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Integrity</h3>
              <p>We build with honesty, accountability, and long-term responsibility.</p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Transparency</h3>
              <p>Major project decisions will be documented and publicly verifiable.</p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Stewardship</h3>
              <p>MAG Coin is designed with future generations and sustainable growth in mind.</p>
            </div>
          </section>

          <section style={styles.status}>
            <h2 style={styles.sectionTitle}>Project Status</h2>

            <div style={styles.statusGrid}>
              <div>
                <strong>Current Phase</strong>
                <br />
                Founder Edition – Phase 1
              </div>

              <div>
                <strong>Website Version</strong>
                <br />
                v1.0.0
              </div>

              <div>
                <strong>Last Updated</strong>
                <br />
                July 2026
              </div>

              <div>
                <strong>Status</strong>
                <br />
                Active Development
              </div>
            </div>

            <p style={styles.statusText}>
              Building a transparent and sustainable blockchain project one step at a time.
            </p>
          </section>
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

  hero: {
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
  },

  logo: {
    width: "185px",
    height: "185px",
    objectFit: "contain",
    display: "block",
    margin: "0 auto 28px",
  },

  motto: {
    fontSize: "28px",
    fontWeight: "bold",
    lineHeight: "1.45",
    marginBottom: "18px",
  },

  subtitle: {
    fontSize: "17px",
    color: "#d6d6d6",
    lineHeight: "1.6",
    maxWidth: "850px",
    margin: "0 auto 26px",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
    marginBottom: "34px",
  },

  button: {
    background: "#f5c542",
    color: "#000",
    textDecoration: "none",
    padding: "14px 24px",
    borderRadius: "999px",
    fontWeight: "bold",
  },

  snapshot: {
    maxWidth: "760px",
    margin: "0 auto",
    background: "rgba(17,17,17,0.92)",
    border: "1px solid #333",
    borderRadius: "18px",
    padding: "24px",
    color: "#e5e5e5",
  },

  contract: {
    wordBreak: "break-all",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: "24px",
    marginTop: "34px",
  },

  card: {
    background: "rgba(17,17,17,0.92)",
    border: "1px solid #333",
    borderRadius: "18px",
    padding: "24px",
    color: "#e5e5e5",
  },

  cardTitle: {
    color: "#f5c542",
    marginBottom: "12px",
  },

  status: {
    marginTop: "42px",
    marginBottom: "42px",
    background: "rgba(17,17,17,0.92)",
    border: "1px solid #333",
    borderRadius: "18px",
    padding: "28px",
  },

  statusGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
    gap: "24px",
    color: "#e5e5e5",
    lineHeight: "1.8",
    marginTop: "20px",
  },

  statusText: {
    color: "#bdbdbd",
    marginTop: "24px",
    fontSize: "16px",
  },

  sectionTitle: {
    color: "#f5c542",
    marginBottom: "10px",
  },
};
