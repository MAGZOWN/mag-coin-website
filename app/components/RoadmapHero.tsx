import type { CSSProperties } from "react";

export default function RoadmapHero() {
  return (
    <section style={styles.hero} className="magCard cardHover fadeIn">
      <p style={styles.label}>MAG FOUNDATION</p>

      <h1 style={styles.title}>
        Strategic
        <br />
        Roadmap
      </h1>

      <p style={styles.subtitle}>
        The MAG COIN roadmap reflects our commitment to responsible
        development, transparent documentation, and long-term ecosystem
        stewardship. Every milestone is designed to strengthen trust before
        expanding the project.
      </p>

      <div style={styles.badge}>
        Living Roadmap • Updated Continuously
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  hero: {
    textAlign: "center",
    padding: "70px 20px 60px",
    boxShadow: "0 22px 50px rgba(0,0,0,.28)",
  },

  label: {
    color: "#f5c542",
    letterSpacing: "4px",
    fontSize: "13px",
    fontWeight: "bold",
    marginBottom: "18px",
    textTransform: "uppercase",
  },

  title: {
    fontSize: "52px",
    lineHeight: "1.2",
    marginBottom: "24px",
    fontWeight: 800,

    background:
      "linear-gradient(180deg,#ffffff 0%,#f5c542 100%)",

    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    color: "#d6d6d6",
    fontSize: "19px",
    lineHeight: "1.8",
    maxWidth: "850px",
    margin: "0 auto 34px",
  },

  badge: {
    display: "inline-block",
    background: "rgba(245,197,66,.10)",
    border: "1px solid rgba(245,197,66,.35)",
    color: "#f5c542",
    padding: "12px 24px",
    borderRadius: "999px",
    fontWeight: "bold",
    fontSize: "14px",
  },
};
