import type { CSSProperties } from "react";

import { foundationData } from "../data/foundationData";

export default function Hero() {
  return (
    <section style={styles.hero}>
      <img
        src="/mag-logo.png"
        alt={`${foundationData.tokenName} Logo`}
        style={styles.logo}
        className="logoFloat fadeIn cardHover"
      />

      <h1 style={styles.title}>
        Built with Integrity.
        <br />
        Trusted for Generations.
      </h1>

      <p style={styles.subtitle}>
        A long-term blockchain project built on {foundationData.network} with
        transparency, responsible stewardship, continuous improvement,
        and sustainable growth at its foundation.
      </p>

      <div style={styles.buttons}>
        <a href="/whitepaper" style={styles.primaryButton} className="primaryButton">
          Read Whitepaper
        </a>

        <a href="/audit" style={styles.secondaryButton} className="secondaryButton">
          Audit Report
        </a>

        <a
          href={foundationData.explorer}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.secondaryButton}
          className="secondaryButton"
        >
          BaseScan ↗
        </a>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  hero: {
    textAlign: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
  },

  logo: {
    width: "210px",
    height: "210px",
    objectFit: "contain",
    display: "block",
    margin: "0 auto 28px",
  },

  title: {
    fontSize: "42px",
    lineHeight: "1.25",
    fontWeight: "800",
    marginBottom: "22px",
    color: "#ffffff",
  },

  subtitle: {
    fontSize: "18px",
    color: "#cfcfcf",
    lineHeight: "1.8",
    maxWidth: "760px",
    margin: "0 auto 38px",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "18px",
    flexWrap: "wrap",
  },

  primaryButton: {
    background: "#f5c542",
    color: "#000",
    textDecoration: "none",
    padding: "15px 34px",
    borderRadius: "999px",
    fontWeight: "bold",
    fontSize: "15px",
    border: "2px solid #f5c542",
  },

  secondaryButton: {
    background: "transparent",
    color: "#f5c542",
    textDecoration: "none",
    padding: "15px 34px",
    borderRadius: "999px",
    fontWeight: "bold",
    fontSize: "15px",
    border: "2px solid #f5c542",
  },
};
