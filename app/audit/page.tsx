import type { CSSProperties } from "react";
import Navbar from "../components/Navbar";

export default function Audit() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <h1 style={styles.title}>Audit Report</h1>

          <p style={styles.lead}>
            The MAG COIN audit section documents project review findings,
            blockchain verification notes, liquidity observations, and risk disclosures.
          </p>

          <div style={styles.card}>
            <h2 style={styles.heading}>Master Audit Status</h2>
            <p>
              Status: In progress. The audit report is being prepared carefully
              and will be published after review.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>Audit Scope</h2>
            <ul style={styles.list}>
              <li>Official contract verification</li>
              <li>Token supply review</li>
              <li>Liquidity and pool records</li>
              <li>Wallet and ownership observations</li>
              <li>Website and documentation consistency</li>
              <li>Risk and transparency disclosures</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>Transparency Note</h2>
            <p>
              MAG COIN does not present audit work as a guarantee of safety,
              profit, or future performance. Audit documentation is intended to
              improve transparency and help users conduct independent review.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

const styles: Record<string, CSSProperties> = {
  main: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #171717 0%, #050505 45%, #000000 100%)",
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
};
