import type { CSSProperties } from "react";

export default function SupplyDistribution() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Supply & Distribution</h2>

      <p style={styles.subtitle}>
        MAG COIN tokenomics will be documented according to the current verified
        state of the ecosystem. Future changes will be clearly identified and
        updated transparently.
      </p>

      <div style={styles.card} className="cardHover">
        <div style={styles.row}>
          <span>Total Supply</span>
          <strong>1,000,000,000 MAG</strong>
        </div>

        <div style={styles.row}>
          <span>Network</span>
          <strong>Base</strong>
        </div>

        <div style={styles.row}>
          <span>Distribution Status</span>
          <strong>Founder Edition Documentation</strong>
        </div>

        <div style={styles.row}>
          <span>Liquidity Status</span>
          <strong>To be documented after verification</strong>
        </div>

        <p style={styles.note}>
          The Foundation will not publish speculative allocation percentages.
          Distribution, liquidity, treasury, and ecosystem figures will be
          updated only when they can be verified and documented responsibly.
        </p>
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

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid #333",
    borderRadius: "22px",
    padding: "34px",
    color: "#e5e5e5",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: "20px",
    borderBottom: "1px solid #2a2a2a",
    padding: "18px 0",
    color: "#d6d6d6",
  },

  note: {
    marginTop: "26px",
    color: "#bdbdbd",
    lineHeight: "1.8",
    textAlign: "center",
  },
};
