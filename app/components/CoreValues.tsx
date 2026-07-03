import type { CSSProperties } from "react";

export default function CoreValues() {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Core Values</h2>

      <div style={styles.grid}>
        <div style={styles.card}>
          <div style={styles.icon}>🛡️</div>
          <h3 style={styles.cardTitle}>Integrity</h3>
          <p>We build with honesty, accountability, and long-term responsibility.</p>
        </div>

        <div style={styles.card}>
          <div style={styles.icon}>📘</div>
          <h3 style={styles.cardTitle}>Transparency</h3>
          <p>Major project decisions will be documented and publicly verifiable.</p>
        </div>

        <div style={styles.card}>
          <div style={styles.icon}>🌱</div>
          <h3 style={styles.cardTitle}>Stewardship</h3>
          <p>MAG Coin is designed with future generations and sustainable growth in mind.</p>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginTop: "42px",
  },
  sectionTitle: {
    color: "#f5c542",
    marginBottom: "10px",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: "24px",
    marginTop: "22px",
  },
  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,0.96), rgba(7,7,7,0.96))",
    border: "1px solid #333",
    borderRadius: "22px",
    padding: "30px 24px",
    color: "#e5e5e5",
    minHeight: "190px",
    textAlign: "center",
  },
  icon: {
    width: "54px",
    height: "54px",
    borderRadius: "50%",
    background: "rgba(245,197,66,0.12)",
    border: "1px solid rgba(245,197,66,0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 18px",
    fontSize: "26px",
  },
  cardTitle: {
    color: "#f5c542",
    marginBottom: "12px",
  },
};
