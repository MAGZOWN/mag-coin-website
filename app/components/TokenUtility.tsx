import type { CSSProperties } from "react";

const utilities = [
  {
    title: "Ecosystem Participation",
    text: "MAG may support future participation within the MAG ecosystem as the project develops.",
  },
  {
    title: "Governance Development",
    text: "Future governance features may be introduced carefully and transparently as the Foundation matures.",
  },
  {
    title: "Community Alignment",
    text: "MAG is intended to support long-term community alignment rather than short-term speculation.",
  },
  {
    title: "Documentation-First Growth",
    text: "Any future utility will be documented before promotion and reviewed for long-term sustainability.",
  },
];

export default function TokenUtility() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Token Utility</h2>

      <p style={styles.subtitle}>
        MAG utility will develop gradually and responsibly. Future use cases
        will be documented clearly before being publicly promoted.
      </p>

      <div style={styles.grid}>
        {utilities.map((item) => (
          <div key={item.title} style={styles.card} className="cardHover">
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
    marginBottom: "60px",
  },

  title: {
    color: "#f5c542",
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "14px",
  },

  subtitle: {
    color: "#d6d6d6",
    textAlign: "center",
    maxWidth: "760px",
    margin: "0 auto 36px",
    lineHeight: "1.8",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: "22px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid #333",
    borderRadius: "20px",
    padding: "28px",
    color: "#e5e5e5",
  },

  heading: {
    color: "#f5c542",
    marginBottom: "14px",
  },

  text: {
    color: "#d6d6d6",
    lineHeight: "1.8",
    margin: 0,
  },
};
