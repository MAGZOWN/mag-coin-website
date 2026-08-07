import type { CSSProperties } from "react";

export default function RoadmapCommitment() {
  return (
    <section
      style={styles.section}
      className="magCard cardHover fadeIn"
    >
      <p style={styles.label}>LONG-TERM COMMITMENT</p>

      <h2 style={styles.title}>
        Every milestone should strengthen trust before expanding the ecosystem.
      </h2>

      <p style={styles.text}>
        MAG COIN follows a documentation-first philosophy. Progress
        is measured through verified implementation, transparent reporting, and
        responsible stewardship rather than promotional announcements or
        unrealistic timelines.
      </p>

      <p style={styles.text}>
        This roadmap is a living document. As the project evolves, completed
        milestones, new objectives, and strategic priorities will be updated
        through official MAG COIN channels while preserving historical records
        for transparency.
      </p>

      <div style={styles.signature}>
        Built with Integrity • Trusted for Generations
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    boxShadow: "0 22px 50px rgba(0,0,0,.28)",
    marginTop: "40px",
    marginBottom: "70px",
    padding: "48px 40px",
    textAlign: "center",
    background:
      "linear-gradient(145deg, rgba(245,197,66,.10), rgba(5,5,5,.96))",
    border: "1px solid rgba(245,197,66,.35)",
    borderRadius: "24px",
    color: "#e5e5e5",
  },

  label: {
    color: "#f5c542",
    letterSpacing: "3px",
    fontWeight: 700,
    fontSize: "13px",
    marginBottom: "18px",
  },

  title: {
    color: "#ffffff",
    fontSize: "34px",
    lineHeight: "1.3",
    marginBottom: "24px",
    fontWeight: 800,
  },

  text: {
    maxWidth: "860px",
    margin: "0 auto 22px",
    color: "#d6d6d6",
    lineHeight: "1.9",
    fontSize: "17px",
  },

  signature: {
    marginTop: "30px",
    color: "#f5c542",
    fontWeight: 700,
    fontSize: "15px",
    letterSpacing: "1px",
  },
};
