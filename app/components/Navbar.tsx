"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Tools", "/trust-checker.html"],
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
  const [open, setOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <a href="/" style={styles.brand} aria-label="MAG COIN Home">
          <img src="/mag-logo.png" alt="MAG COIN logo" style={styles.logo} />
        </a>

        <nav
          style={styles.nav}
          aria-label="Main navigation"
          className="navDesktop"
        >
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

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="navToggle"
          style={styles.toggleBtn}
        >
          <span
            style={{
              ...styles.toggleBar,
              ...(open ? styles.toggleBarOpenTop : {}),
            }}
          />
          <span
            style={{
              ...styles.toggleBar,
              ...(open ? styles.toggleBarOpenMid : {}),
            }}
          />
          <span
            style={{
              ...styles.toggleBar,
              ...(open ? styles.toggleBarOpenBottom : {}),
            }}
          />
        </button>
      </div>

      <nav
        aria-label="Mobile navigation"
        className={`navMobile${open ? " navMobileOpen" : ""}`}
        style={styles.mobileNav}
      >
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            className="navLink"
            style={styles.mobileLink}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>

      <style>{`
        .navToggle { display: none; }
        @media (max-width: 880px) {
          .navDesktop { display: none !important; }
          .navToggle { display: inline-flex !important; }
          .navMobile.navMobileOpen { display: flex !important; }
        }
      `}</style>
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

  toggleBtn: {
    width: "40px",
    height: "40px",
    marginLeft: "auto",
    display: "none",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    background: "transparent",
    border: "1px solid rgba(245,197,66,.35)",
    borderRadius: "10px",
    cursor: "pointer",
  },

  toggleBar: {
    width: "20px",
    height: "2px",
    background: "#f5c542",
    borderRadius: "2px",
    transition: "transform .2s ease, opacity .2s ease",
  },

  toggleBarOpenTop: {
    transform: "translateY(7px) rotate(45deg)",
  },
  toggleBarOpenMid: {
    opacity: 0,
  },
  toggleBarOpenBottom: {
    transform: "translateY(-7px) rotate(-45deg)",
  },

  mobileNav: {
    display: "none",
    flexDirection: "column",
    padding: "8px 28px 20px",
    borderTop: "1px solid rgba(245,197,66,.14)",
    background: "rgba(5,5,5,.98)",
  },

  mobileLink: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 600,
    padding: "12px 4px",
    borderBottom: "1px solid rgba(255,255,255,.06)",
  },
};
