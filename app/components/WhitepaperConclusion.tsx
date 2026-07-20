import type { CSSProperties } from "react";

const resources = [
  {
    title: "Whitepaper",
    href: "/whitepaper",
  },
  {
    title: "Constitution",
    href: "/constitution",
  },
  {
    title: "Tokenomics",
    href: "/tokenomics",
  },
  {
    title: "Roadmap",
    href: "/roadmap",
  },
  {
    title: "Transparency",
    href: "/transparency",
  },
  {
    title: "Security",
    href: "/security",
  },
  {
    title: "Audit",
    href: "/audit",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function WhitepaperConclusion() {
  return (
    <section
      id="founder-commitment"
      style={styles.section}
      className="magCard cardHover fadeIn"
      aria-labelledby="founder-commitment-title"
    >
      <h2
        id="founder-commitment-title"
        className="goldGradient"
        style={styles.title}
      >
        Founder Commitment
      </h2>

      <p style={styles.text}>
        MAG COIN is being developed with a long-term vision rather than
        short-term speculation. Every significant milestone should be carefully
        planned, technically verified, transparently documented, responsibly
        implemented, and publicly reviewed where appropriate.
      </p>

      <p style={styles.text}>
        Trust is not created by announcements alone. It is built through
        consistent execution, verifiable blockchain records, responsible
        communication, disciplined governance, and continuous improvement over
        time.
      </p>

      <p style={styles.text}>
        This Whitepaper is maintained as a living document. As MAG COIN
        develops, material governance updates, security improvements,
        documentation revisions, and ecosystem developments should be reflected
        through the official project channels and supporting documentation.
      </p>

      <div style={styles.divider} />

      <h3 style={styles.resourcesTitle}>
        Official Project Resources
      </h3>

      <div style={styles.grid}>
        {resources.map((item) => (
          <a
            key={item.title}
            href={item.href}
            style={styles.resource}
            className="magCard cardHover navLink"
          >
            {item.title}
          </a>
        ))}
      </div>

      <div style={styles.quoteBox} className="magCard cardHover">
        <p style={styles.quote}>
          "The objective is not simply to launch a token.
          <br />
          The objective is to build a project that can continue earning trust
          for generations."
        </p>
      </div>

      <div style={styles.signature}>
        Built with Integrity • Documented with Transparency • Stewarded for
        Generations
      </div>

      <p style={styles.version}>
        MAG COIN Whitepaper
        <br />
        Version 1.0 • Founder Edition • Living Document
      </p>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginTop: "40px",
    marginBottom: "60px",
    textAlign: "center",
    padding: "52px 40px",
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid rgba(255,255,255,.14)",
    borderRadius: "24px",
    color: "#e5e5e5",
    boxShadow: "0 18px 50px rgba(0,0,0,.28)",
    scrollMarginTop: "110px",
  },

  title: {
    fontSize: "34px",
    marginBottom: "26px",
    fontWeight: 900,
  },

  text: {
    maxWidth: "900px",
    margin: "0 auto 24px",
    lineHeight: "1.9",
    fontSize: "17px",
    color: "#d6d6d6",
  },

  divider: {
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(245,197,66,.35), transparent)",
    margin: "42px auto",
    maxWidth: "700px",
  },

  resourcesTitle: {
    color: "#f5c542",
    fontSize: "22px",
    marginBottom: "24px",
    fontWeight: 850,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
    gap: "14px",
    marginBottom: "38px",
  },

  resource: {
    textDecoration: "none",
    color: "#ffffff",
    background: "linear-gradient(145deg, rgba(255,255,255,.055), rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "14px",
    padding: "16px",
    fontWeight: 700,
    boxShadow: "0 14px 32px rgba(0,0,0,.20)",
  },

  quoteBox: {
    marginTop: "20px",
    marginBottom: "28px",
    padding: "28px",
    borderRadius: "18px",
    background:
      "linear-gradient(135deg, rgba(245,197,66,.10), rgba(245,197,66,.03))",
    border: "1px solid rgba(245,197,66,.24)",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
  },

  quote: {
    color: "#f5c542",
    fontSize: "20px",
    lineHeight: "1.8",
    fontWeight: 700,
    fontStyle: "italic",
    margin: 0,
  },

  signature: {
    marginTop: "18px",
    color: "#f5c542",
    fontWeight: 800,
    letterSpacing: "1px",
    fontSize: "16px",
  },

  version: {
    marginTop: "28px",
    color: "#9ca3af",
    fontSize: "13px",
    lineHeight: "1.8",
    letterSpacing: ".5px",
  },
};
