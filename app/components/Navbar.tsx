import type { CSSProperties } from "react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Whitepaper", "/whitepaper"],
  ["Constitution", "/constitution"],
  ["Tokenomics", "/tokenomics"],
  ["Roadmap", "/roadmap"],
  ["Transparency", "/transparency"],
  ["Ecosystem", "/ecosystem"],
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

        <div style={styles.balanceSpacer} aria-hidden="true" />
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
    width: "100%",
    maxWidth: "1600px",
    margin: "0 auto",
    padding: "12px 28px",
    display: "grid",
    gridTemplateColumns: "52px minmax(0, 1fr) 52px",
    alignItems: "center",
    columnGap: "24px",
  },

  brand: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    color: "#f5c542",
    textDecoration: "none",
  },

  logo: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    boxShadow: "0 0 18px rgba(245,197,66,.20)",
  },

  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "22px",
    flexWrap: "wrap",
  },

  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 600,
    letterSpacing: ".1px",
    whiteSpace: "nowrap",
  },

  balanceSpacer: {
    width: "52px",
    height: "1px",
  },
};
