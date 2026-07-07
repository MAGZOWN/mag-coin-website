import type { CSSProperties } from "react";

import { foundationUpdates } from "../data/foundationUpdates";

export default function FoundationUpdates() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Foundation Updates</h2>

      <p style={styles.subtitle}>
        Follow the latest documented milestones and development progress of the
        MAG Foundation.
      </p>

      <div style={styles.grid}>
        {foundationUpdates.map((update) => (
          <div key={update.title} style={styles.card} className="cardHover">
            <span style={styles.version}>{update.version}</span>

            <h3 style={styles.heading}>{update.title}</h3>

            <p style={styles.description}>{update.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginBottom: "80px",
  },

  title: {
    color: "#f5c542",
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "14px",
  },

  subtitle: {
    color: "#d6d6d6",
    textAlign: "center",
    lineHeight: "1.8",
    maxWidth: "760px",
    margin: "0 auto 34px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "22px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid #333",
    borderRadius: "20px",
    padding: "26px",
  },

  version: {
    color: "#f5c542",
    fontSize: "13px",
    fontWeight: "bold",
  },

  heading: {
    color: "#ffffff",
    marginTop: "12px",
    marginBottom: "14px",
    fontSize: "20px",
  },

  description: {
    color: "#d6d6d6",
    lineHeight: "1.7",
  },
};
