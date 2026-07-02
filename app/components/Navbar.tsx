import type { CSSProperties } from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link href="/" style={styles.brand}>
        MAG COIN
      </Link>

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
    </nav>
  );
}

const styles: Record<string, CSSProperties> = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    borderBottom: "1px solid #222",
    background: "#050505",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  brand: {
    color: "#f5c542",
    fontWeight: "bold",
    fontSize: "22px",
    letterSpacing: "1px",
    textDecoration: "none",
  },

  links: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    flexWrap: "wrap",
  },

  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "15px",
    transition: "0.25s",
  },
};
