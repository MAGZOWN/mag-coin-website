import type { CSSProperties } from "react";

export default function TransparencyCommitment() {
  return (
    <section style={styles.section} className="cardHover">
      <p style={styles.label}>TRANSPARENCY COMMITMENT</p>

      <h2 style={styles.title}>
        Transparency is a continuous commitment, not a one-time statement.
      </h2>

      <p style={styles.text}>
        MAG COIN is committed to maintaining clear and responsible communication
        throughout the project's development. Significant milestones, project
        updates, documentation improvements, and governance decisions will be
        shared through official channels whenever reasonably possible.
      </p>

      <p style={styles.text}>
        Our objective is to build confidence through openness, verifiable
        information, and consistent communication rather than speculation or
        unnecessary hype.
      </p>

      <div style={styles.box}>
        <h3 style={styles.boxTitle}>Transparency Principles</h3>

        <ul style={styles.list}>
          <li>Public documentation whenever possible</li>
          <li>Official BaseScan verification</li>
          <li>Continuous website updates</li>
          <li>Clear governance communication</li>
          <li>Responsible disclosure of project milestones</li>
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
