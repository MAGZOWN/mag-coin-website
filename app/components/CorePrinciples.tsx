import type { CSSProperties } from "react";

const principles = [
  {
    title: "Integrity",
    text: "We choose honesty, accountability, and long-term responsibility over shortcuts.",
    icon: "🛡️",
  },
  {
    title: "Transparency",
    text: "Major decisions, documentation, and project progress are shared openly.",
    icon: "📖",
  },
  {
    title: "Stewardship",
    text: "MAG COIN is developed carefully for future generations rather than short-term speculation.",
    icon: "🌱",
  },
  {
    title: "Sustainability",
    text: "Every milestone is planned with responsible growth and lasting value in mind.",
    icon: "🌍",
  },
];

export default function CorePrinciples() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Core Principles</h2>

      <div style={styles.grid}>
        {principles.map((item) => (
          <div
            key={item.title}
            style={styles.card}
            className="cardHover"
          >
            <div style={styles.icon}>{item.icon}</div>

            <h3 style={styles.heading}>{item.title}</h3>

            <p style={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginTop: "50px",
  },

  title: {
    textAlign: "center",
    color: "#f5c542",
    fontSize: "32px",
    marginBottom: "34px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: "24px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid #333",
    borderRadius: "22px",
    padding: "30px",
    textAlign: "center",
    color: "#e5e5e5",
  },

  icon: {
    fontSize: "38px",
    marginBottom: "18px",
  },

  heading: {
    color: "#f5c542",
    marginBottom: "14px",
  },

  text: {
    lineHeight: "1.8",
    color: "#d6d6d6",
  },
};
