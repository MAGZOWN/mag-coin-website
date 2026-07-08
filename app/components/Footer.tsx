import type { CSSProperties } from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div style={styles.topBorder} />

        <h3 className="goldGradient" style={styles.title}>
          MAG COIN
        </h3>

        <p style={styles.motto}>
          Built with Integrity. Trusted for Generations.
        </p>

        <div style={styles.links}>
          <a href="/" className="navLink" style={styles.link}>Home</a>
          <a href="/about" className="navLink" style={styles.link}>About</a>
          <a href="/whitepaper" className="navLink" style={styles.link}>Whitepaper</a>
          <a href="/transparency" className="navLink" style={styles.link}>Transparency</a>
          <a href="/audit" className="navLink" style={styles.link}>Audit</a>
          <a href="/security" className="navLink" style={styles.link}>Security</a>
        </div>

        <p style={styles.disclaimer}>
          MAG COIN does not promise guaranteed returns, future prices, or
          investment outcomes. Cryptocurrency and blockchain projects involve
          risk. Always conduct your own independent research before making any
          financial decisions.
        </p>

        <p style={styles.values}>
          Transparency • Security • Long-term Stewardship • Responsible
          Development
        </p>

        <div style={styles.divider} />

        <p style={styles.copyright}>
          © 2026 MAG COIN Foundation. All rights reserved.
        </p>

        <p style={styles.version}>
          Foundation Release v1.0
        </p>
      </div>
    </footer>
  );
}

const styles: Record<string, CSSProperties> = {
  footer: {
    background: "#050505",
    padding: "40px 24px 30px",
    marginTop: "60px",
  },

  inner: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  },

  topBorder: {
    width: "120px",
    height: "3px",
    background: "#f5c542",
    margin: "0 auto 28px",
    borderRadius: "999px",
  },

  title: {
    fontSize: "34px",
    fontWeight: 900,
    margin: 0,
  },

  motto: {
    color: "#d9d9d9",
    marginTop: "12px",
    marginBottom: "28px",
    fontSize: "15px",
    lineHeight: 1.7,
  },

  links: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "30px",
  },

  link: {
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: 600,
    textDecoration: "none",
  },

  disclaimer: {
    color: "#a9a9a9",
    fontSize: "13px",
    lineHeight: "1.8",
    marginBottom: "18px",
  },

  values: {
    color: "#f5c542",
    fontSize: "12px",
    letterSpacing: "1px",
    marginBottom: "22px",
    fontWeight: 700,
    textTransform: "uppercase",
  },

  divider: {
    width: "100%",
    height: "1px",
    background: "rgba(255,255,255,.08)",
    margin: "24px 0",
  },

  copyright: {
    color: "#7a7a7a",
    fontSize: "12px",
    marginBottom: "8px",
  },

  version: {
    color: "#5d5d5d",
    fontSize: "11px",
    letterSpacing: "1px",
    textTransform: "uppercase",
  },
};
