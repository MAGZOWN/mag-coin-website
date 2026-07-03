import type { CSSProperties } from "react";

export default function AboutHero() {
  return (
    <section style={styles.hero} className="fadeIn">

      <p style={styles.kicker}>
        ABOUT MAG COIN
      </p>

      <h1 style={styles.title}>
        Built with Integrity.
        <br />
        Developed for Generations.
      </h1>

      <p style={styles.subtitle}>
        MAG COIN is a long-term blockchain project built on the Base Network,
        dedicated to transparency, responsible stewardship, continuous
        improvement, and sustainable growth for the global community.
      </p>

    </section>
  );
}

const styles: Record<string, CSSProperties> = {

  hero: {
    textAlign: "center",
    paddingTop: "20px",
    paddingBottom: "60px",
    maxWidth: "900px",
    margin: "0 auto",
  },

  kicker: {
    color: "#f5c542",
    fontSize: "15px",
    letterSpacing: "3px",
    fontWeight: 700,
    marginBottom: "18px",
  },

  title: {
    fontSize: "52px",
    fontWeight: 800,
    lineHeight: "1.2",
    marginBottom: "24px",

    background:
      "linear-gradient(180deg,#ffffff 0%,#f5c542 100%)",

    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    color: "#cfcfcf",
    fontSize: "19px",
    lineHeight: "1.9",
    maxWidth: "760px",
    margin: "0 auto",
  },

};
