import type { CSSProperties } from "react";

export default function ProjectPhilosophy() {
  return (
    <section style={styles.section} className="cardHover">
      <p style={styles.label}>PROJECT PHILOSOPHY</p>

      <h2 style={styles.title}>
        Professional before impressive. Trust before excitement.
      </h2>

      <p style={styles.text}>
        MAG COIN is not being developed around hype, unrealistic promises, or
        short-term speculation. The project philosophy is based on careful
        progress, transparent documentation, responsible communication, and
        long-term stewardship.
      </p>

      <p style={styles.text}>
        In blockchain, trust cannot be demanded. It must be earned through
        consistent actions, public verification, clear records, and honest
        acknowledgement of risk. MAG COIN is being built around that principle.
      </p>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginBottom: "60px",
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid #333",
    borderRadius: "24px",
    padding: "44px",
    color: "#e5e5e5",
    lineHeight: "1.9",
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
    marginBottom: "20px",
  },
};
