import type { CSSProperties } from "react";

export default function TokenFoundation() {
  return (
    <section style={styles.section} className="cardHover">
      <p style={styles.label}>TOKEN FOUNDATION</p>

      <h2 style={styles.title}>
        A transparent foundation built on verifiable blockchain records.
      </h2>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3 style={styles.heading}>Network</h3>
          <p>Base</p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.heading}>Token Symbol</h3>
          <p>MAG</p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.heading}>Total Supply</h3>
          <p>1,000,000,000 MAG</p>
        </div>

        <div style={styles.card}>
          <h3 style={styles.heading}>Verification</h3>
          <p>Official BaseScan Contract</p>
        </div>
      </div>

      <p style={styles.note}>
        Users should always verify the official smart contract through the
        project's website and BaseScan before interacting with the token.
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
    marginBottom: "30px",
    lineHeight: "1.3",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginBottom: "28px",
  },

  card: {
    background: "rgba(255,255,255,.03)",
    border: "1px solid #2a2a2a",
    borderRadius: "18px",
    padding: "24px",
    textAlign: "center",
  },

  heading: {
    color: "#f5c542",
    marginBottom: "10px",
  },

  note: {
    color: "#bdbdbd",
    lineHeight: "1.8",
    textAlign: "center",
  },
};
