import type { CSSProperties } from "react";

export default function TrustCenterHero() {
  return (
    <section style={styles.hero} className="fadeIn">

      <p style={styles.label}>
        MAG FOUNDATION
      </p>

      <h1 style={styles.title}>
        Trust is Earned.
        <br />
        Verification Makes It Visible.
      </h1>

      <p style={styles.subtitle}>
        The MAG Trust Center is the official destination for governance,
        transparency, documentation, security, verification, and Foundation
        updates.
      </p>

      <div style={styles.badges}>

        <span style={styles.badge}>
          Constitution
        </span>

        <span style={styles.badge}>
          Whitepaper
        </span>

        <span style={styles.badge}>
          Transparency
        </span>

        <span style={styles.badge}>
          Governance
        </span>

        <span style={styles.badge}>
          Security
        </span>

      </div>

    </section>
  );
}

const styles: Record<string, CSSProperties> = {

  hero: {

    textAlign: "center",

    padding: "70px 20px 60px",

  },

  label: {

    color: "#f5c542",

    letterSpacing: "4px",

    fontSize: "13px",

    fontWeight: "bold",

    marginBottom: "18px",

  },

  title: {

    fontSize: "52px",

    lineHeight: "1.2",

    color: "#ffffff",

    marginBottom: "26px",

    fontWeight: "800",

  },

  subtitle: {

    color: "#d6d6d6",

    fontSize: "19px",

    lineHeight: "1.8",

    maxWidth: "820px",

    margin: "0 auto 40px",

  },

  badges: {

    display: "flex",

    justifyContent: "center",

    flexWrap: "wrap",

    gap: "14px",

  },

  badge: {

    background: "rgba(245,197,66,.10)",

    border: "1px solid rgba(245,197,66,.35)",

    color: "#f5c542",

    padding: "12px 24px",

    borderRadius: "999px",

    fontWeight: "bold",

    fontSize: "14px",

  },

};
