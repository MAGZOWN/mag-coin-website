import type { CSSProperties } from "react";

export default function TokenGovernance() {
  return (
    <section style={styles.section} className="cardHover">
      <p style={styles.label}>GOVERNANCE & STEWARDSHIP</p>

      <h2 style={styles.title}>
        Token decisions should protect long-term trust.
      </h2>

      <p style={styles.text}>
        MAG token governance will develop carefully as the ecosystem matures.
        The Foundation will avoid rushed governance promises and will document
        any future governance model before implementation.
      </p>

      <p style={styles.text}>
        Stewardship means managing the token ecosystem responsibly, with clear
        communication, transparent records, and decisions that support long-term
        sustainability rather than short-term attention.
      </p>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginBottom: "70px",
    background:
      "linear-gradient(145deg, rgba(245,197,66,.10), rgba(5,5,5,.96))",
    border: "1px solid rgba(245,197,66,.35)",
    borderRadius: "24px",
    padding: "44px",
    color: "#e5e5e5",
    textAlign: "center",
  },

  label: {
    color: "#f5c542",
    letterSpacing: "3px",
    fontWeight: "bold",
    fontSize: "13px",
    marginBottom: "18px",
  },

  title: {
    color: "#ffffff",
    fontSize: "34px",
    lineHeight: "1.3",
    marginBottom: "24px",
  },

  text: {
    color: "#d6d6d6",
    fontSize: "18px",
    lineHeight: "1.9",
    maxWidth: "850px",
    margin: "0 auto 20px",
  },
};
