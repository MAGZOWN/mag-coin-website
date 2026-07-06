import type { CSSProperties } from "react";

import { trustCenterHero } from "../data/trustCenterHero";

export default function TrustCenterHero() {
  return (
    <section style={styles.hero} className="fadeIn">
      <p style={styles.label}>
        {trustCenterHero.label}
      </p>

      <h1 style={styles.title}>
        {trustCenterHero.title.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < trustCenterHero.title.split("\n").length - 1 && <br />}
          </span>
        ))}
      </h1>

      <p style={styles.subtitle}>
        {trustCenterHero.subtitle}
      </p>

      <div style={styles.badges}>
        {trustCenterHero.badges.map((badge) => (
          <span
            key={badge}
            style={styles.badge}
          >
            {badge}
          </span>
        ))}
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
