import type { CSSProperties } from "react";

export default function Hero() {
  return (
    <section style={styles.hero}>
      <img src="/mag-logo.png" alt="MAG COIN Logo" style={styles.logo} />

      <h2 style={styles.motto}>
        Built with Integrity. Trusted for Generations. Empowering Global Growth.
      </h2>

      <p style={styles.subtitle}>
        MAG Coin is a long-term blockchain project on Base, built with
        transparency, responsible stewardship, and continuous improvement.
      </p>

      <div style={styles.buttons}>
        <a href="/whitepaper" style={styles.button}>Read Whitepaper</a>
        <a href="/audit" style={styles.button}>View Audit Report</a>
        <a
          href="https://basescan.org/address/0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          View on BaseScan
        </a>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  hero: {
    textAlign: "center",
  },
  logo: {
    width: "185px",
    height: "185px",
    objectFit: "contain",
    display: "block",
    margin: "0 auto 28px",
  },
  motto: {
    fontSize: "28px",
    fontWeight: "bold",
    lineHeight: "1.45",
    marginBottom: "18px",
  },
  subtitle: {
    fontSize: "17px",
    color: "#d6d6d6",
    lineHeight: "1.6",
    maxWidth: "850px",
    margin: "0 auto 26px",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
    marginBottom: "34px",
  },
  button: {
    background: "#f5c542",
    color: "#000",
    textDecoration: "none",
    padding: "14px 24px",
    borderRadius: "999px",
    fontWeight: "bold",
  },
};
