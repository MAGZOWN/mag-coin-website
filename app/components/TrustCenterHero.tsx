import type { CSSProperties } from "react";

import { trustCenterHero } from "../data/trustCenterHero";

import HeroTitle from "./ui/HeroTitle";

export default function TrustCenterHero() {
  return (
    <section style={styles.hero} className="fadeIn">
      <p style={styles.label}>
        {trustCenterHero.label}
      </p>

      <HeroTitle>
        <>
          {trustCenterHero.title.split("\n").map((line, index) => (
            <span key={index}>
              {line}
              {index < trustCenterHero.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </>
      </HeroTitle>

      <p style={styles.subtitle}>
        {trustCenterHero.subtitle}
      </p>

      <div style={styles.badges}>
        {trustCenterHero.badges.map((badge) => (
          <a
            key={badge}
            href={getBadgeLink(badge)}
            style={styles.badge}
            className="cardHover"
          >
            {badge}
          </a>
        ))}
      </div>
    </section>
  );
}

function getBadgeLink(badge: string) {
  const value = badge.toLowerCase();

  if (value.includes("constitution")) return "/constitution";
  if (value.includes("whitepaper")) return "/whitepaper";
  if (value.includes("transparency")) return "/transparency";
  if (value.includes("governance")) return "/constitution";
  if (value.includes("security")) return "/security";

  return "/transparency";
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
    fontWeight: 700,
    marginBottom: "18px",
    textTransform: "uppercase",
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
    border: "1px solid rgba(245,197,66,.45)",
    color: "#f5c542",
    padding: "12px 24px",
    borderRadius: "999px",
    fontWeight: 800,
    fontSize: "14px",
    textDecoration: "none",
    boxShadow: "0 0 14px rgba(245,197,66,.08)",
  },
};
