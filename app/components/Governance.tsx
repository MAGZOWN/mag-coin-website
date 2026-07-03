import type { CSSProperties } from "react";

export default function Governance() {
  return (
    <section style={styles.section} className="cardHover">
      <p style={styles.label}>GOVERNANCE PHILOSOPHY</p>

      <h2 style={styles.title}>
        Decisions should strengthen trust, not chase attention.
      </h2>

      <p style={styles.text}>
        MAG COIN governance will develop gradually and responsibly. In the early
        stages, project decisions will focus on documentation, transparency,
        security, and long-term sustainability.
      </p>

      <p style={styles.text}>
        As the ecosystem matures, governance practices may evolve to include
        wider community participation, structured proposals, public reporting,
        and clearer decision-making processes.
      </p>

      <p style={styles.text}>
        The guiding principle is simple: every meaningful decision should protect
        the credibility of the project and serve the long-term interests of the
        community.
      </p>
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
    lineHeight: "1.9",
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
    marginBottom: "20px",
  },
};
