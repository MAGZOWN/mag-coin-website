import type { CSSProperties } from "react";

const phases = [
  "Foundation and website structure",
  "Official documentation and transparency framework",
  "Security review and audit publication",
  "Community channels and education",
  "Long-term ecosystem development",
];

export default function DevelopmentStrategy() {
  return (
    <section style={styles.section} className="cardHover">
      <p style={styles.label}>DEVELOPMENT STRATEGY</p>

      <h2 style={styles.title}>
        MAG COIN will grow through careful, documented milestones.
      </h2>

      <p style={styles.text}>
        The development strategy of MAG COIN is based on steady progress rather
        than rushed expansion. Each stage is intended to strengthen trust,
        improve documentation, and support responsible long-term growth.
      </p>

      <div style={styles.list}>
        {phases.map((phase, index) => (
          <div key={index} style={styles.item}>
            <span style={styles.number}>0{index + 1}</span>
            <span>{phase}</span>
          </div>
        ))}
      </div>
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
    marginBottom: "28px",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  item: {
    display: "flex",
    gap: "18px",
    alignItems: "center",
    background: "rgba(255,255,255,.03)",
    border: "1px solid #2a2a2a",
    borderRadius: "16px",
    padding:
