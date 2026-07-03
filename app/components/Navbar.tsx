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
];

export default function Navbar() {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <a href="/" style={styles.brand}>
          <img
            src="/mag-logo.png"
            alt="MAG Coin"
            style={styles.logo}
          />

          <span style={styles.brandText}>
            MAG COIN
          </span>
        </a>

        <nav style={styles.nav}>
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
    borderBottom: "1px solid rgba(255,255,255,.08)",
  },

  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "14px 32px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  brand: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    color: "#f5c542",
    textDecoration: "none",
    fontWeight: 700,
    letterSpacing: ".5px",
  },

  logo: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
  },

  brandText: {
    fontSize: "18px",
    fontWeight: 700,
  },

  nav: {
    display: "flex",
    alignItems: "center",
    gap: "28px",
    flexWrap: "wrap",
  },

  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 500,
  },
};
