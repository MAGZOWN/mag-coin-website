import type { CSSProperties } from "react";
import Navbar from "../components/Navbar";

export default function Constitution() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <h1 style={styles.title}>MAG COIN Constitution</h1>

          <p style={styles.lead}>
            This Constitution defines the guiding principles of MAG COIN. It
            represents the project's commitment to integrity, transparency,
            accountability, and long-term stewardship.
          </p>

          <div style={styles.card}>
            <h2 style={styles.heading}>Article I — Purpose</h2>
            <p>
              MAG COIN exists to build a trustworthy blockchain project focused
              on responsible innovation, public accountability, and sustainable
              long-term growth.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>Article II — Integrity</h2>
            <p>
              Every important decision should prioritize honesty, fairness,
              transparency, and the long-term interests of the community above
              short-term promotion.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>Article III — Transparency</h2>
            <p>
              Public documentation, blockchain records, and official reports
              will be published whenever reasonably possible so community
              members can independently verify project information.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>Article IV — Stewardship</h2>
            <p>
              MAG COIN is intended to be managed responsibly with decisions made
              for future sustainability rather than temporary popularity.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>Article V — Community</h2>
            <p>
              Every holder deserves respectful communication. Questions,
              feedback, and constructive criticism are welcomed as part of
              continuous improvement.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>Article VI — Continuous Improvement</h2>
            <p>
              This Constitution may evolve as the project grows. Any meaningful
              revisions will be documented publicly to maintain transparency.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>Founder's Declaration</h2>

            <p>
              MAG COIN is being developed with the intention of creating a
              responsible digital project built upon integrity, accountability,
              and long-term trust. Every future milestone should strengthen
              these principles rather than compromise them.
            </p>
          </div>

          <p style={styles.footer}>
            Version 1.0 — Official Founding Constitution of MAG COIN
          </p>
        </section>
      </main>
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

  footer: {
    color: "#888",
    textAlign: "center",
    marginTop: "40px",
    fontSize: "14px",
  },
};
