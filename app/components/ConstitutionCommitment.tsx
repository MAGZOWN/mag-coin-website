import type { CSSProperties } from "react";

export default function ConstitutionCommitment() {
  return (
    <section style={styles.section} className="cardHover">
      <p style={styles.label}>FOUNDER COMMITMENT</p>

      <h2 style={styles.title}>
        No individual is greater than the mission of the Foundation.
      </h2>

      <p style={styles.text}>
        The Founding Custodian commits to protecting the principles established
        within this Constitution with humility, responsibility, accountability,
        and long-term thinking.
      </p>

      <p style={styles.text}>
        Every decision shall strive to strengthen the credibility,
        sustainability, and integrity of the MAG ecosystem.
      </p>

      <div style={styles.signature}>
        Built with Integrity. Trusted for Generations.
      </div>
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
    textAlign: "center",
    color: "#e5e5e5",
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

  signature: {
    marginTop: "30px",
    color: "#f5c542",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
};
