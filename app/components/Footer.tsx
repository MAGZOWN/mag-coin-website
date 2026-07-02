import type { CSSProperties } from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <h3 style={styles.brand}>MAG COIN</h3>

        <div style={styles.links}>
          <Link href="/" style={styles.link}>Home</Link>

          <Link href="/about" style={styles.link}>About</Link>

          <Link href="/whitepaper" style={styles.link}>Whitepaper</Link>

          <Link href="/constitution" style={styles.link}>Constitution</Link>

          <Link href="/tokenomics" style={styles.link}>Tokenomics</Link>

          <Link href="/roadmap" style={styles.link}>Roadmap</Link>

          <Link href="/transparency" style={styles.link}>Transparency</Link>

          <Link href="/audit" style={styles.link}>Audit</Link>

          <Link href="/security" style={styles.link}>Security</Link>

          <Link href="/faq" style={styles.link}>FAQ</Link>
        </div>

        <p style={styles.contract}>
          Official Contract:
          <br />
          0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94
        </p>

        <p style={styles.disclaimer}>
          MAG COIN does not promise guaranteed returns, future prices, or
          investment outcomes. Users should always conduct independent
          research before interacting with any blockchain project.
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
    padding: "32px 24px",
  },

  inner: {
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
  },

  brand: {
    color: "#f5c542",
    fontSize: "22px",
    fontWeight: "bold",
    letterSpacing: "1px",
    marginBottom: "18px",
  },

  links: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "18px",
    marginBottom: "22px",
  },

  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "14px",
  },

  contract: {
    color: "#d6d6d6",
    fontSize: "13px",
    wordBreak: "break-all",
    marginBottom: "16px",
    lineHeight: "1.7",
  },

  disclaimer: {
    color: "#999999",
    fontSize: "13px",
    maxWidth: "900px",
    margin: "0 auto 14px",
    lineHeight: "1.7",
  },

  copyright: {
    color: "#777777",
    fontSize: "12px",
  },
};
