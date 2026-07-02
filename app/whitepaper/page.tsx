import type { CSSProperties } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Whitepaper() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <h1 style={styles.title}>Whitepaper</h1>

          <p style={styles.lead}>
            The MAG COIN Whitepaper explains the project vision, principles,
            token foundation, roadmap, and long-term development philosophy.
          </p>

          <div style={styles.card}>
            <h2 style={styles.heading}>Founder Edition</h2>

            <p>
              This document is currently being prepared as the first official
              public version of the MAG COIN Whitepaper. It will be published
              in stages as the project documentation is finalized.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>Whitepaper Sections</h2>

            <ul style={styles.list}>
              <li>Project Introduction</li>
              <li>Mission and Vision</li>
              <li>Token Information</li>
              <li>Governance Philosophy</li>
              <li>Transparency Framework</li>
              <li>Roadmap and Future Development</li>
              <li>Risk Disclosures</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>Publication Status</h2>

            <p>
              Status: Draft in progress. The official downloadable Whitepaper
              will be added here after review and approval.
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
      "radial-gradient(circle at top, #171717 0%, #050505 45%, #000 100%)",
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
    marginBottom: "20px",
    textAlign: "center",
  },

  lead: {
    color: "#d6d6d6",
    fontSize: "18px",
    lineHeight: "1.7",
    textAlign: "center",
    marginBottom: "40px",
  },

  card: {
    background: "rgba(17,17,17,0.9)",
    border: "1px solid #333",
    borderRadius: "18px",
    padding: "28px",
    marginBottom: "24px",
    color: "#eaeaea",
    lineHeight: "1.7",
  },

  heading: {
    color: "#f5c542",
    marginBottom: "12px",
  },

  list: {
    paddingLeft: "22px",
    lineHeight: "1.8",
  },
};
