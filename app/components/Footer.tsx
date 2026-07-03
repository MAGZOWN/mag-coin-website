import type { CSSProperties } from "react";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <p style={styles.disclaimer}>
          MAG COIN does not promise guaranteed returns, future prices, or
          investment outcomes. Cryptocurrency and blockchain projects involve
          risk. Always conduct your own independent research before making any
          financial decisions.
        </p>

        <p style={styles.values}>
          Built with Integrity • Transparency • Long-term Stewardship
        </p>

        <p style={styles.copyright}>
          © 2026 MAG COIN Foundation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const styles: Record<string, CSSProperties> = {
  footer: {
    background: "#050505",
    borderTop: "1px solid #222",
    padding: "28px 24px",
    marginTop: "60px",
  },

  inner: {
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
  },

  disclaimer: {
    color: "#bdbdbd",
    fontSize: "14px",
    lineHeight: "1.8",
    marginBottom: "18px",
  },

  values: {
    color: "#f5c542",
    fontSize: "13px",
    letterSpacing: "0.8px",
    marginBottom: "16px",
    fontWeight: "bold",
  },

  copyright: {
    color: "#777",
    fontSize: "13px",
  },
};
