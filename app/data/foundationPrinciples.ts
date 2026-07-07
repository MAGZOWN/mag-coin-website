import type { CSSProperties } from "react";

import { foundationPrinciples } from "@/app/data/foundationPrinciples";

export default function FoundationPrinciples() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Foundation Principles</h2>

      <p style={styles.subtitle}>
        These principles guide every constitutional, technical, and strategic
        decision made by the MAG Foundation.
      </p>

      <div style={styles.grid}>
        {foundationPrinciples.map((principle) => (
          <div key={principle} style={styles.card} className="cardHover">
            <span style={styles.icon}>◆</span>
            <p style={styles.text}>{principle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginBottom: "70px",
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
    lineHeight: "1.8",
    maxWidth: "760px",
    margin: "0 auto 36px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "22px",
  },

  card: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid #333",
    borderRadius: "20px",
    padding: "24px",
  },

  icon: {
    color: "#f5c542",
    fontSize: "20px",
    fontWeight: "bold",
  },

  text: {
    color: "#e5e5e5",
    margin: 0,
    lineHeight: "1.7",
  },
};
