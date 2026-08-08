import type { CSSProperties } from "react";

const documentDetails = [
  {
    label: "Document Version",
    value: "Version 1.0",
  },
  {
    label: "Edition",
    value: "Founder Edition",
  },
  {
    label: "Status",
    value: "Living Governance Document",
  },
  {
    label: "Last Updated",
    value: "Updated Regularly",
  },
];

const foundationDetails = [
  {
    label: "Project",
    value: "MAG COIN",
  },
  {
    label: "Network",
    value: "Base Mainnet",
  },
  {
    label: "Token",
    value: "MAG COIN",
  },
  {
    label: "Purpose",
    value: "Long-Term Stewardship",
  },
];

export default function ConstitutionHero() {
  return (
    <section
      id="constitution-hero"
      style={styles.hero}
      className="magCard cardHover fadeIn"
      aria-labelledby="constitution-title"
    >
      <p style={styles.label}>MAG COIN CONSTITUTION</p>

      <h1 id="constitution-title" style={styles.title}>
        Constitution of
        <br />
        MAG COIN
      </h1>

      <p style={styles.subtitle}>
        The Constitution establishes the governance principles, stewardship
        responsibilities, transparency commitments, ethical standards, and
        long-term operating framework of MAG COIN. It serves as the guiding
        charter for the project&apos;s responsible development and related
        ecosystem activities.
      </p>

      <div style={styles.badge}>
        Version 1.0 • Founder Edition • Living Governance Document
      </div>

      <div style={styles.divider} />

      <div style={styles.sectionHeading}>
        <p style={styles.sectionLabel}>DOCUMENT INFORMATION</p>

        <h2 style={styles.sectionTitle}>
          Constitutional Reference
        </h2>
      </div>

      <div style={styles.grid}>
        {documentDetails.map((item) => (
          <div key={item.label} style={styles.card} className="magCard cardHover">
            <span style={styles.cardLabel}>
              {item.label}
            </span>

            <strong style={styles.cardValue}>
              {item.value}
            </strong>
          </div>
        ))}
      </div>

      <div style={styles.sectionHeading}>
        <p style={styles.sectionLabel}>PROJECT PROFILE</p>

        <h2 style={styles.sectionTitle}>
          Constitutional Scope
        </h2>
      </div>

      <div style={styles.grid}>
        {foundationDetails.map((item) => (
          <div key={item.label} style={styles.card} className="magCard cardHover">
            <span style={styles.cardLabel}>
              {item.label}
            </span>

            <strong style={styles.cardValue}>
              {item.value}
            </strong>
          </div>
        ))}
      </div>

      <div style={styles.notice} className="magCard cardHover">
        <h3 style={styles.noticeTitle}>
          Constitutional Purpose
        </h3>

        <p style={styles.noticeText}>
          This Constitution establishes the enduring principles under which
          MAG COIN should operate. It complements the Whitepaper, Tokenomics,
          Roadmap, Transparency, Security, and Audit documentation while
          providing a stable governance framework intended to guide the
          project for the long term.
        </p>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  hero: {
    textAlign: "center",
    padding: "70px 20px 60px",
    scrollMarginTop: "110px",
  },

  label: {
    color: "#f5c542",
    letterSpacing: "4px",
    fontSize: "13px",
    fontWeight: 800,
    marginBottom: "18px",
    textTransform: "uppercase",
  },

  title: {
    fontSize: "52px",
    lineHeight: "1.2",
    marginBottom: "26px",
    fontWeight: 900,
    background:
      "linear-gradient(180deg,#ffffff 0%,#f5c542 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    color: "#d6d6d6",
    fontSize: "19px",
    lineHeight: "1.8",
    maxWidth: "860px",
    margin: "0 auto 34px",
  },

  badge: {
    display: "inline-block",
    background: "rgba(245,197,66,.10)",
    border: "1px solid rgba(245,197,66,.35)",
    color: "#f5c542",
    padding: "12px 24px",
    borderRadius: "999px",
    fontWeight: 800,
    fontSize: "14px",
  },

  divider: {
    height: "1px",
    maxWidth: "800px",
    margin: "50px auto",
    background:
      "linear-gradient(90deg, transparent, rgba(245,197,66,.35), transparent)",
  },

  sectionHeading: {
    marginBottom: "24px",
  },

  sectionLabel: {
    color: "#f5c542",
    letterSpacing: "2px",
    fontSize: "12px",
    fontWeight: 800,
    marginBottom: "10px",
  },

  sectionTitle: {
    color: "#ffffff",
    fontSize: "28px",
    fontWeight: 850,
    margin: 0,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "18px",
    marginBottom: "40px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(255,255,255,.055), rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "18px",
    padding: "22px",
    boxShadow: "0 16px 38px rgba(0,0,0,.22)",
  },

  cardLabel: {
    display: "block",
    color: "#9ca3af",
    fontSize: "12px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    marginBottom: "10px",
    fontWeight: 700,
  },

  cardValue: {
    color: "#ffffff",
    fontSize: "17px",
    fontWeight: 800,
    lineHeight: "1.5",
  },

  notice: {
    marginTop: "10px",
    padding: "30px",
    borderRadius: "20px",
    background:
      "linear-gradient(135deg, rgba(245,197,66,.10), rgba(245,197,66,.03))",
    border: "1px solid rgba(245,197,66,.24)",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
  },

  noticeTitle: {
    color: "#f5c542",
    fontSize: "22px",
    fontWeight: 850,
    marginBottom: "16px",
  },

  noticeText: {
    color: "#d6d6d6",
    fontSize: "16px",
    lineHeight: "1.9",
    margin: 0,
  },
};
