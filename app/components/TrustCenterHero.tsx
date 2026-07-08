import type { CSSProperties } from "react";

import { trustCenterHero } from "../data/trustCenterHero";

import HeroTitle from "./ui/HeroTitle";
import StatusBadge from "./ui/StatusBadge";

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
              {index <
                trustCenterHero.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </>
      </HeroTitle>

      <p style={styles.subtitle}>
        {trustCenterHero.subtitle}
      </p>

      <div style={styles.badges}>
        {trustCenterHero.badges.map((badge) => (
          <StatusBadge
            key={badge}
            variant={
              badge.toLowerCase().includes("verified")
                ? "completed"
                : badge.toLowerCase().includes("live")
                ? "live"
                : badge.toLowerCase().includes("progress")
                ? "in-progress"
                : "planned"
            }
          >
            {badge}
          </StatusBadge>
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
};
