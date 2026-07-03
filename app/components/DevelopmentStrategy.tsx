import type { CSSProperties } from "react";

const phases = [
  "Foundation and website structure",
  "Official documentation and transparency framework",
  "Security review and audit publication",
  "Community growth and education",
  "Long-term ecosystem expansion",
];

export default function DevelopmentStrategy() {
  return (
    <section style={styles.section} className="cardHover">
      <p style={styles.label}>DEVELOPMENT STRATEGY</p>

      <h2 style={styles.title}>
        Building steadily, documenting everything, improving continuously.
      </h2>

      <p style={styles.text}>
        MAG COIN follows a structured development strategy rather than pursuing
        rapid expansion. Every milestone is designed to strengthen trust,
        improve transparency, and establish a sustainable blockchain ecosystem.
      </p>

      <div style={styles.timeline}>
        {phases.map((phase, index) => (
          <div key={index} style={styles.item}>
            <div style={styles.number}>0{index + 1}</div>

            <div>
              <strong style={styles.phaseTitle}>
                Phase {index + 1}
              </strong>

              <p style={styles.phaseText}>
                {phase}
              </p>
            </div>
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
    marginBottom: "32px",
  },

  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    background: "rgba(255,255,255,.03)",
    border: "1px solid #2a2a2a",
    borderRadius: "18px",
    padding: "20px",
  },

  number: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "rgba(245,197,66,.12)",
    border: "1px solid rgba(245,197,66,.35)",
    color: "#f5c542",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    flexShrink: 0,
  },

  phaseTitle: {
    color: "#f5c542",
  },

  phaseText: {
    color: "#d6d6d6",
    marginTop: "6px",
    marginBottom: 0,
  },
};
