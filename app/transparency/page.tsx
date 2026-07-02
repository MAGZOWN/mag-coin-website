import type { CSSProperties } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Transparency() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <h1 style={styles.title}>Transparency</h1>

          <p style={styles.lead}>
            MAG COIN is committed to clear communication, public records,
            documented decisions, and verifiable blockchain information.
          </p>

          <div style={styles.card}>
            <h2 style={styles.heading}>Official Token Information</h2>

            <p><strong>Network:</strong> Base</p>
            <p><strong>Token Symbol:</strong> MAG</p>
            <p><strong>Total Supply:</strong> 1,000,000,000 MAG</p>

            <p style={styles.contract}>
              <strong>Official Contract:</strong>
              <br />
              0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>Public Verification</h2>

            <ul style={styles.list}>
              <li>BaseScan contract records</li>
              <li>Public website version history</li>
              <li>GitHub commit history</li>
              <li>Documented project roadmap</li>
              <li>Official transparency reports</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>Risk Statement</h2>

            <p>
              MAG COIN does not promise guaranteed returns, future prices, or
              investment outcomes. Blockchain projects carry risk, and every
              participant should perform independent research before making
              decisions.
            </p>
          </div>
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
    fontFamily: "Arial, sans-serif",
    padding: "60px 24px",
  },

  container: {
    maxWidth: "900px",
    margin: "0 auto",
  },

  title: {
    color: "#f5c542",
    fontSize: "52px",
    textAlign: "center",
    marginBottom: "20px",
  },

  lead: {
    color: "#d6d6d6",
    fontSize: "18px",
    lineHeight: "1.7",
    textAlign: "center",
    marginBottom: "40px",
  },

  card: {
    background: "rgba(17,17,17,0.92)",
    border: "1px solid #333",
    borderRadius: "18px",
    padding: "28px",
    marginBottom: "24px",
    lineHeight: "1.8",
    color: "#e5e5e5",
  },

  heading: {
    color: "#f5c542",
    marginBottom: "14px",
  },

  list: {
    paddingLeft: "22px",
    lineHeight: "1.8",
  },

  contract: {
    wordBreak: "break-all",
  },
};
