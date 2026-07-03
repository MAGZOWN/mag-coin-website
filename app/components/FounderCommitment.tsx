import type { CSSProperties } from "react";

export default function FounderCommitment() {
  return (
    <section style={styles.section} className="cardHover">
      <p style={styles.kicker}>FOUNDER&apos;S COMMITMENT</p>

      <h2 style={styles.title}>
        Trust is earned through consistent action.
      </h2>

      <p style={styles.text}>
        MAG COIN is being built with patience, integrity, and responsibility.
        Every milestone will be completed carefully, documented transparently,
        and improved continuously. We believe that trust is earned through
        consistent actions rather than promises, and our commitment is to build
        something that can serve the community with credibility for generations
        to come.
      </p>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginTop: "28px",
    background:
      "linear-gradient(145deg, rgba(245,197,66,0.10), rgba(5,5,5,0.96))",
    border: "1px solid rgba(245,197,66,0.35)",
    borderRadius: "24px",
    padding: "38px",
    textAlign: "center",
    color: "#e5e5e5",
  },

  kicker: {
    color: "#f5c542",
    fontSize: "13px",
    letterSpacing: "3px",
    fontWeight: 700,
    marginBottom: "16px",
  },

  title: {
    color: "#ffffff",
    fontSize: "30px",
    marginBottom: "18px",
  },

  text: {
    color: "#d6d6d6",
    fontSize: "17px",
    lineHeight: "1.9",
    maxWidth: "850px",
    margin: "0 auto",
  },
};
