import type { CSSProperties } from "react";

import { transparencyCommitment } from "../data/transparencyCommitment";

export default function TransparencyCommitment() {
  return (
    <section
      id="transparency-commitment"
      style={styles.section}
      className="cardHover fadeIn"
      aria-labelledby="transparency-commitment-title"
    >
      <p style={styles.label}>{transparencyCommitment.label}</p>

      <h2 id="transparency-commitment-title" style={styles.title}>
        {transparencyCommitment.title}
      </h2>

      {transparencyCommitment.paragraphs.map((paragraph) => (
        <p key={paragraph} style={styles.text}>
          {paragraph}
        </p>
      ))}

      <div style={styles.divider} />

      <p style={styles.subLabel}>PUBLIC ACCOUNTABILITY</p>

      <h3 style={styles.subTitle}>How Transparency Is Maintained</h3>

      <div style={styles.commitmentGrid}>
        {transparencyCommitment.commitments.map((item) => (
          <article key={item.title} style={styles.commitmentCard}>
            <h4 style={styles.commitmentTitle}>{item.title}</h4>

            <p style={styles.commitmentText}>{item.description}</p>
          </article>
        ))}
      </div>

      <div style={styles.principlesBox}>
        <h3 style={styles.boxTitle}>Transparency Principles</h3>

        <ul style={styles.list}>
          {transparencyCommitment.principles.map((principle) => (
            <li key={principle} style={styles.listItem}>
              {principle}
            </li>
          ))}
        </ul>
      </div>

      <div style={styles.updateBox}>
        <h3 style={styles.updateTitle}>Living Documentation Policy</h3>

        <p style={styles.updateText}>
          {transparencyCommitment.updatePolicy}
        </p>

        <div style={styles.resourceLinks}>
          <a
            href="/transparency"
            style={styles.primaryLink}
            className="primaryButton"
          >
            Open Transparency Center
          </a>

          <a
            href="/audit"
            style={styles.secondaryLink}
            className="secondaryButton"
          >
            Review Audit Status
          </a>

          <a
            href="/security"
            style={styles.secondaryLink}
            className="secondaryButton"
          >
            Review Security Information
          </a>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginBottom: "60px",
    scrollMarginTop: "110px",
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid rgba(255,255,255,.14)",
    borderRadius: "24px",
    padding: "48px",
    color: "#e5e5e5",
    boxShadow: "0 18px 50px rgba(0,0,0,.28)",
  },

  label: {
    color: "#f5c542",
    letterSpacing: "3px",
    fontWeight: 800,
    fontSize: "13px",
    marginBottom: "18px",
  },

  title: {
    color: "#ffffff",
    fontSize: "36px",
    lineHeight: "1.3",
    marginBottom: "24px",
    fontWeight: 850,
  },

  text: {
    color: "#d6d6d6",
    fontSize: "18px",
    lineHeight: "1.9",
    marginBottom: "22px",
  },

  divider: {
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(245,197,66,.35), transparent)",
    margin: "42px 0",
  },

  subLabel: {
    color: "#f5c542",
    letterSpacing: "2px",
    fontSize: "12px",
    fontWeight: 800,
    marginBottom: "12px",
  },

  subTitle: {
    color: "#ffffff",
    fontSize: "28px",
    lineHeight: "1.35",
    fontWeight: 850,
    margin: "0 0 24px",
  },

  commitmentGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "18px",
  },

  commitmentCard: {
    padding: "24px",
    borderRadius: "18px",
    background:
      "linear-gradient(145deg, rgba(255,255,255,.05), rgba(255,255,255,.02))",
    border: "1px solid rgba(255,255,255,.10)",
  },

  commitmentTitle: {
    color: "#f5c542",
    fontSize: "19px",
    lineHeight: "1.4",
    fontWeight: 850,
    margin: "0 0 12px",
  },

  commitmentText: {
    color: "#d6d6d6",
    fontSize: "15px",
    lineHeight: "1.8",
    margin: 0,
  },

  principlesBox: {
    marginTop: "34px",
    background:
      "linear-gradient(135deg, rgba(245,197,66,.09), rgba(245,197,66,.025))",
    border: "1px solid rgba(245,197,66,.23)",
    borderRadius: "18px",
    padding: "28px",
  },

  boxTitle: {
    color: "#f5c542",
    fontSize: "20px",
    fontWeight: 850,
    margin: "0 0 18px",
  },

  list: {
    margin: 0,
    paddingLeft: "22px",
    color: "#d6d6d6",
  },

  listItem: {
    fontSize: "15px",
    lineHeight: "1.8",
    marginBottom: "12px",
  },

  updateBox: {
    marginTop: "28px",
    padding: "28px",
    borderRadius: "18px",
    background: "rgba(255,255,255,.035)",
    border: "1px solid rgba(255,255,255,.10)",
  },

  updateTitle: {
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: 850,
    margin: "0 0 13px",
  },

  updateText: {
    color: "#d3d3d3",
    fontSize: "15px",
    lineHeight: "1.85",
    margin: 0,
  },

  resourceLinks: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
    marginTop: "24px",
  },

  primaryLink: {
    background: "#f5c542",
    color: "#000000",
    border: "2px solid #f5c542",
    borderRadius: "999px",
    padding: "12px 20px",
    textDecoration: "none",
    fontWeight: 850,
    fontSize: "13px",
  },

  secondaryLink: {
    background: "transparent",
    color: "#f5c542",
    border: "2px solid rgba(245,197,66,.55)",
    borderRadius: "999px",
    padding: "12px 20px",
    textDecoration: "none",
    fontWeight: 850,
    fontSize: "13px",
  },
};
