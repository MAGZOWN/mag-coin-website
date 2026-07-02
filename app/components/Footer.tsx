import type { CSSProperties } from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <h3 style={styles.brand}>MAG COIN</h3>

        <div style={styles.links}>
          <Link href="/about" style={styles.link}>About</Link>
          <Link href="/whitepaper" style={styles.link}>Whitepaper</Link>
          <Link href="/constitution" style={styles.link}>Constitution</Link>
          <Link href="/roadmap" style={styles.link}>Roadmap</Link>
          <Link href="/transparency" style={styles.link}>Transparency</Link>
          <Link href="/audit" style={styles.link}>Audit</Link>
        </div>

        <p style={styles.contract}>
          Contract: 0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94
        </p>

        <p style={styles.disclaimer}>
          MAG COIN does not promise guaranteed returns, future prices, or investment outcomes.
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
    color: "#ffffff",
    padding: "26px 24px",
  },
  inner: {
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
  },
  brand: {
    color: "#f5c542",
    fontSize: "18px",
    letterSpacing: "1px",
    marginBottom: "14px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "18px",
    flexWrap: "wrap",
    marginBottom: "14px",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "13px",
  },
  contract: {
    color: "#d6d6d6",
    fontSize: "12px",
    wordBreak: "break-all",
    marginBottom: "10px",
  },
  disclaimer: {
    color: "#999",
    fontSize: "12px",
    marginBottom: "8px",
  },
  copyright: {
    color: "#777",
    fontSize: "12px",
  },
};
