import type { CSSProperties } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Roadmap() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <h1 style={styles.title}>
            Roadmap
          </h1>

          <p style={styles.lead}>
            The MAG COIN roadmap is designed around responsible progress,
            public documentation, and long-term sustainability.
          </p>

          <div
            style={styles.card}
            className="cardHover"
          >
            <h2 style={styles.heading}>
              Phase I — Foundation
            </h2>

            <ul style={styles.list}>
              <li>Official website launch</li>
              <li>Logo and brand identity</li>
              <li>About, Whitepaper, Constitution, and Roadmap pages</li>
              <li>Initial transparency documentation</li>
            </ul>
          </div>

          <div
            style={styles.card}
            className="cardHover"
          >
            <h2 style={styles.heading}>
              Phase II — Documentation
            </h2>

            <ul style={styles.list}>
              <li>Founder Edition Whitepaper</li>
              <li>Master Audit Report</li>
              <li>Tokenomics framework</li>
              <li>Public changelog and version history</li>
            </ul>
          </div>

          <div
            style={styles.card}
            className="cardHover"
          >
            <h2 style={styles.heading}>
              Phase III — Blockchain Review
            </h2>

            <ul style={styles.list}>
              <li>Confirm official contract records</li>
              <li>Review liquidity history</li>
              <li>Document official pool strategy</li>
              <li>Improve public verification links</li>
            </ul>
          </div>

          <div
            style={styles.card}
            className="cardHover"
          >
            <h2 style={styles.heading}>
              Phase IV — Community
            </h2>

            <ul style={styles.list}>
              <li>Official community channels</li>
              <li>Educational resources</li>
              <li>FAQ and safety guidance</li>
              <li>Responsible public communication</li>
            </ul>
          </div>

          <div
            style={styles.card}
            className="cardHover"
          >
            <h2 style={styles.heading}>
              Phase V — Long-Term Growth
            </h2>

            <ul style={styles.list}>
              <li>Governance development</li>
              <li>Transparency reports</li>
              <li>Partnership exploration</li>
              <li>Continuous improvement of the MAG COIN ecosystem</li>
            </ul>
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
    fontSize: "52px",
    lineHeight: "1.2",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "20px",

    background:
      "linear-gradient(180deg,#ffffff 0%,#f5c542 100%)",

    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  lead: {
    color: "#d6d6d6",
    fontSize: "18px",
    lineHeight: "1.7",
    textAlign: "center",
    marginBottom: "40px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
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
    fontSize: "30px",
  },

  list: {
    paddingLeft: "22px",
    lineHeight: "1.8",
  },
};
