import type { CSSProperties } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FAQ() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <h1 style={styles.title}>FAQ</h1>

          <p style={styles.subtitle}>
            Common questions about MAG COIN, its purpose, transparency, and
            responsible development.
          </p>

          <div style={styles.card} className="cardHover">
            <h2 style={styles.heading}>What is MAG COIN?</h2>

            <p>
              MAG COIN is a long-term blockchain project on the Base Network,
              built around integrity, transparency, and responsible
              stewardship.
            </p>
          </div>

          <div style={styles.card} className="cardHover">
            <h2 style={styles.heading}>
              Is MAG COIN an investment promise?
            </h2>

            <p>
              No. MAG COIN does not promise guaranteed returns, future prices,
              or investment outcomes. Users should always conduct independent
              research.
            </p>
          </div>

          <div style={styles.card} className="cardHover">
            <h2 style={styles.heading}>
              Where can I verify the contract?
            </h2>

            <p style={styles.contract}>
              The official contract is:
              <br />
              0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94
            </p>
          </div>

          <div style={styles.card} className="cardHover">
            <h2 style={styles.heading}>
              What network is MAG COIN on?
            </h2>

            <p>MAG COIN is built on the Base Network.</p>
          </div>

          <div style={styles.card} className="cardHover">
            <h2 style={styles.heading}>
              Will documentation be updated?
            </h2>

            <p>
              Yes. The Whitepaper, Audit Report, Roadmap, Transparency Reports,
              and other official documentation will continue to evolve as the
              project develops.
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
      "radial-gradient(circle at top,#171717 0%,#050505 45%,#000000 100%)",
    color: "#fff",
    padding: "60px 24px",
    fontFamily: "Arial,sans-serif",
  },

  container: {
    maxWidth: "900px",
    margin: "0 auto",
  },

  title: {
    fontSize: "56px",
    lineHeight: "1.2",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: "20px",
    background: "linear-gradient(180deg,#ffffff 0%,#f5c542 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    textAlign: "center",
    color: "#ddd",
    fontSize: "20px",
    lineHeight: "1.7",
    marginBottom: "50px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid #333",
    borderRadius: "18px",
    padding: "28px",
    marginBottom: "24px",
    color: "#e5e5e5",
    lineHeight: "1.8",
  },

  heading: {
    color: "#f5c542",
    marginBottom: "14px",
    fontSize: "30px",
  },

  contract: {
    wordBreak: "break-all",
  },
};
