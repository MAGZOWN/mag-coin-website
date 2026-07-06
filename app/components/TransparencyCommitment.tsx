import type { CSSProperties } from "react";

import { transparencyCommitment } from "../data/transparencyCommitment";

export default function TransparencyCommitment() {
  return (
    <section style={styles.section} className="cardHover">
      <p style={styles.label}>{transparencyCommitment.label}</p>

      <h2 style={styles.title}>
        {transparencyCommitment.title}
      </h2>

      {transparencyCommitment.paragraphs.map((paragraph) => (
        <p key={paragraph} style={styles.text}>
          {paragraph}
        </p>
      ))}

      <div style={styles.box}>
        <h3 style={styles.boxTitle}>Transparency Principles</h3>

        <ul style={styles.list}>
          {transparencyCommitment.principles.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginBottom: "60px",
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid #333",
    borderRadius: "24px",
    padding: "44px",
    color: "#e5e5e5",
  },

  label: {
    color: "#f5c542",
    letterSpacing: "3px",
    fontWeight: "bold",
    fontSize: "13px",
    marginBottom: "18px",
  },

  title: {
    color: "#ffffff",
    fontSize: "34px",
    lineHeight: "1.3",
    marginBottom: "24px",
  },

  text: {
    color: "#d6d6d6",
    fontSize: "18px",
    lineHeight: "1.9",
    marginBottom: "20px",
  },

  box: {
    marginTop: "30px",
    background: "rgba(245,197,66,.06)",
    border: "1px solid rgba(245,197,66,.25)",
    borderRadius: "18px",
    padding: "24px",
  },

  boxTitle: {
    color: "#f5c542",
    marginBottom: "16px",
  },

  list: {
    margin: 0,
    paddingLeft: "22px",
    lineHeight: "2",
    color: "#d6d6d6",
  },
};
