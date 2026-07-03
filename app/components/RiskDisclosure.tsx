import type { CSSProperties } from "react";

export default function RiskDisclosure() {
  return (
    <section style={styles.section} className="cardHover">
      <p style={styles.kicker}>RISK DISCLOSURE</p>

      <h2 style={styles.title}>Responsible participation requires independent research.</h2>

      <p style={styles.text}>
        MAG COIN does not promise guaranteed returns, future prices, profit, or
        investment outcomes. Cryptocurrency and blockchain projects involve
        risk, including market volatility, liquidity risk, technology risk,
        regulatory uncertainty, and user error. Every participant should conduct
        independent research and make decisions responsibly.
      </p>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginTop: "28px",
    background:
      "linear-gradient(145deg, rgba(245,197,66,0.10), rgba(5,5,5,0.96))",
    border: "1px solid rgba(245,197,66,0.35)",
    borderRadius: "24px",
    padding: "38px",
    textAlign: "center",
    color: "#e5e5e5",
  },

  kicker: {
    color: "#f5c542",
    fontSize: "13px",
    letterSpacing: "3px",
    fontWeight: 700,
    marginBottom: "16px",
  },

  title: {
    color: "#ffffff",
    fontSize: "30px",
    marginBottom: "18px",
  },

  text: {
    color: "#d6d6d6",
    fontSize: "17px",
    lineHeight: "1.9",
    maxWidth: "850px",
    margin: "0 auto",
  },
};
