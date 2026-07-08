import type { CSSProperties } from "react";

export default function TokenomicsHero() {
  return (
    <section style={styles.hero} className="fadeIn">
      <p style={styles.label}>
        MAG FOUNDATION
      </p>

      <h1 style={styles.title}>
        Transparent
        <br />
        Tokenomics
      </h1>

      <p style={styles.subtitle}>
        The MAG token is designed with transparency,
        responsible stewardship,
        and long-term sustainability as its guiding principles.
      </p>

      <div style={styles.badge}>
        Total Supply • 1,000,000,000 MAG
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  hero: {
    textAlign: "center",
    padding: "70px 20px 60px",
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
    maxWidth: "820px",
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
