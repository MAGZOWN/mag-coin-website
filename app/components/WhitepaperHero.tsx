import type { CSSProperties } from "react";

export default function WhitepaperHero() {
  return (
    <section style={styles.hero}>
      <p style={styles.kicker}>MAG COIN WHITEPAPER</p>

      <h1 style={styles.title}>
        Building Trust Through
        <br />
        Transparency & Responsibility
      </h1>

      <p style={styles.subtitle}>
        This Whitepaper explains the philosophy, governance, development
        strategy, token foundation, and long-term vision behind MAG COIN.
        Every section reflects our commitment to responsible blockchain
        development rather than short-term speculation.
      </p>

      <div style={styles.badge}>
        Founder Edition • Version 1.0 • Living Document
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  hero: {
    textAlign: "center",
    padding: "40px 0 60px",
    maxWidth: "900px",
    margin: "0 auto",
  },

  kicker: {
    color: "#f5c542",
    letterSpacing: "3px",
    fontWeight: "bold",
    fontSize: "14px",
    marginBottom: "18px",
  },

  title: {
    fontSize: "52px",
    fontWeight: 800,
    lineHeight: "1.2",
    color: "#ffffff",
    marginBottom: "24px",
  },

  subtitle: {
    color: "#d0d0d0",
    fontSize: "18px",
    lineHeight: "1.9",
    marginBottom: "34px",
  },

  badge: {
    display: "inline-block",
    padding: "12px 22px",
    borderRadius: "999px",
    border: "1px solid rgba(245,197,66,.35)",
    background: "rgba(245,197,66,.08)",
    color: "#f5c542",
    fontWeight: "bold",
    fontSize: "14px",
  },
};
