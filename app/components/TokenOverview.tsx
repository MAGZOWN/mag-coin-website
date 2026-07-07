import type { CSSProperties } from "react";

import { blockchainService } from "@/app/services/blockchainService";

export default function TokenOverview() {
  const token = blockchainService.getTokenSummary();

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Token Overview</h2>

      <p style={styles.subtitle}>
        MAG is the native token of the MAG ecosystem on the Base network.
        The Foundation is committed to publishing clear, accurate, and
        verifiable token information.
      </p>

      <div style={styles.grid}>
        <div style={styles.card} className="cardHover">
          <h3 style={styles.heading}>Network</h3>
          <p style={styles.value}>{token.network}</p>
        </div>

        <div style={styles.card} className="cardHover">
          <h3 style={styles.heading}>Token Standard</h3>
          <p style={styles.value}>{token.tokenStandard}</p>
        </div>

        <div style={styles.card} className="cardHover">
          <h3 style={styles.heading}>Token Symbol</h3>
          <p style={styles.value}>{token.symbol}</p>
        </div>

        <div style={styles.card} className="cardHover">
          <h3 style={styles.heading}>Maximum Supply</h3>
          <p style={styles.value}>{token.totalSupply}</p>
        </div>
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
    padding: "26px",
    textAlign: "center",
  },

  heading: {
    color: "#f5c542",
    marginBottom: "12px",
    fontSize: "18px",
  },

  value: {
    color: "#ffffff",
    fontSize: "22px",
    fontWeight: "bold",
    margin: 0,
  },
};
