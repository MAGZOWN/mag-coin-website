import type { CSSProperties } from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <div>
          <h3 style={styles.brand}>MAG COIN</h3>
          <p style={styles.text}>
            Built with Integrity. Trusted for Generations. Empowering Global Growth.
          </p>
        </div>

        <div style={styles.links}>
          <Link href="/about" style={styles.link}>About</Link>
          <Link href="/whitepaper" style={styles.link}>Whitepaper</Link>
          <Link href="/constitution" style={styles.link}>Constitution</Link>
          <Link href="/roadmap" style={styles.link}>Roadmap</Link>
          <Link href="/transparency" style={styles.link}>Transparency</Link>
          <Link href="/audit" style={styles.link}>Audit</Link>
        </div>

        <div style={styles.contractBox}>
          <p style={styles.smallTitle}>Official Contract</p>
          <p style={styles.contract}>
            0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94
          </p>
        </div>

        <p style={styles.disclaimer}>
          MAG COIN does not promise guaranteed returns, future prices, or investment outcomes.
          All users should conduct independent research.
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
    padding: "45px 24px",
    marginTop: "70px",
  },
  inner: {
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
  },
  brand: {
    color: "#f5c542",
    fontSize: "26px",
    letterSpacing: "1px",
    marginBottom: "10px",
  },
  text: {
    color: "#d6d6d6",
    marginBottom: "25px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "28px",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "14px",
  },
  contractBox: {
    background: "rgba(17,17,17,0.9)",
    border: "1px solid #333",
    borderRadius: "14px",
    padding: "18px",
    marginBottom: "24px",
  },
  smallTitle: {
    color: "#f5c542",
    marginBottom: "8px",
    fontWeight: "bold",
  },
  contract: {
    color: "#d6d6d6",
    wordBreak: "break-all",
    fontSize: "14px",
  },
  disclaimer: {
    color: "#999",
    fontSize: "13px",
    lineHeight: "1.6",
    maxWidth: "850px",
    margin: "0 auto 18px",
  },
  copyright: {
    color: "#777",
    fontSize: "13px",
  },
};
