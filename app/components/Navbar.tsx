import type { CSSProperties } from "react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Whitepaper", "/whitepaper"],
  ["Constitution", "/constitution"],
  ["Tokenomics", "/tokenomics"],
  ["Roadmap", "/roadmap"],
  ["Transparency", "/transparency"],
  ["Audit", "/audit"],
  ["Security", "/security"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <a href="/" style={styles.brand} aria-label="MAG COIN Home">
          <img src="/mag-logo.png" alt="MAG COIN logo" style={styles.logo} />

          <span className="goldGradient" style={styles.brandText}>
            MAG COIN
          </span>
        </a>

        <nav style={styles.nav} aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="navLink"
              style={styles.link}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

const styles: Record<string, CSSProperties> = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 999,
    background: "rgba(5,5,5,.92)",
    backdropFilter: "blur(14px)",
    borderBottom: "1px solid rgba(245,197,66,.14)",
    boxShadow: "0 12px 32px rgba(0,0,0,.35)",
  },

  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "14px 32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "28px",
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    color: "#f5c542",
    textDecoration: "none",
    fontWeight: 800,
    letterSpacing: ".6px",
    flexShrink: 0,
  },

  logo: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    boxShadow: "0 0 18px rgba(245,197,66,.20)",
  },

  brandText: {
    fontSize: "18px",
    fontWeight: 900,
  },

  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "22px",
    flexWrap: "wrap",
  },

  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 600,
    letterSpacing: ".2px",
    whiteSpace: "nowrap",
  },
};
