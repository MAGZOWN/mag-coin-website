import type { CSSProperties } from "react";

export default function Snapshot() {
  return (
    <section style={styles.snapshot}>
      <h3 style={styles.snapshotTitle}>Official Project Snapshot</h3>

      <div style={styles.snapshotGrid}>
        <div style={styles.snapshotItem}>
          <span style={styles.snapshotIcon}>🌐</span>
          <strong>Network</strong>
          <p>Base</p>
        </div>

        <div style={styles.snapshotItem}>
          <span style={styles.snapshotIcon}>🪙</span>
          <strong>Token Symbol</strong>
          <p>MAG</p>
        </div>

        <div style={styles.snapshotItem}>
          <span style={styles.snapshotIcon}>🟡</span>
          <strong>Total Supply</strong>
          <p>1,000,000,000 MAG</p>
        </div>

        <div style={styles.snapshotItem}>
          <span style={styles.snapshotIcon}>📄</span>
          <strong>Official Contract</strong>
          <p style={styles.contract}>0xbBd9041...F51A94</p>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  snapshot: {
    maxWidth: "1000px",
    margin: "42px auto 0",
    background:
      "linear-gradient(145deg, rgba(18,18,18,0.96), rgba(5,5,5,0.96))",
    border: "1px solid #3a3a3a",
    borderRadius: "22px",
    padding: "38px",
    color: "#e5e5e5",
    textAlign: "center",
  },

  snapshotTitle: {
    color: "#f5c542",
    fontSize: "24px",
    marginBottom: "32px",
  },

  snapshotGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))",
    gap: "26px",
  },

  snapshotItem: {
    background: "rgba(255,255,255,0.035)",
    border: "1px solid #2f2f2f",
    borderRadius: "18px",
    padding: "22px 18px",
    lineHeight: "1.7",
    minHeight: "130px",
  },

  snapshotIcon: {
    display: "block",
    fontSize: "32px",
    marginBottom: "12px",
  },

  contract: {
    wordBreak: "break-all",
    fontSize: "13px",
    color: "#d6d6d6",
  },
};
