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

          <p style={styles.contract}>
            0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94
          </p>
        </div>
      </div>

      <a
        href="https://basescan.org/address/0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.button}
      >
        View on BaseScan ↗
      </a>
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
    padding: "34px",
    color: "#e5e5e5",
    textAlign: "center",
  },

  snapshotTitle: {
    color: "#f5c542",
    fontSize: "24px",
    marginBottom: "30px",
  },

  snapshotGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
    gap: "24px",
    marginBottom: "30px",
  },

  snapshotItem: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid #2a2a2a",
    borderRadius: "16px",
    padding: "18px",
    lineHeight: "1.7",
  },

  snapshotIcon: {
    display: "block",
    fontSize: "30px",
    marginBottom: "10px",
  },

  contract: {
    wordBreak: "break-all",
    fontSize: "13px",
  },

  button: {
    display: "inline-block",
    background: "#f5c542",
    color: "#000",
    textDecoration: "none",
    padding: "14px 28px",
    borderRadius: "999px",
    fontWeight: "bold",
  },
};
