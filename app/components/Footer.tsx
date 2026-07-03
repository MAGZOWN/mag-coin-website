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
    padding: "18px 24px 24px",
  },

  inner: {
    maxWidth: "820px",
    margin: "0 auto",
    textAlign: "center",
  },

  disclaimer: {
    color: "#a9a9a9",
    fontSize: "13px",
    lineHeight: "1.7",
    marginBottom: "14px",
  },

  values: {
    color: "#f5c542",
    fontSize: "12px",
    letterSpacing: "1px",
    marginBottom: "12px",
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  copyright: {
    color: "#666",
    fontSize: "12px",
  },
};
