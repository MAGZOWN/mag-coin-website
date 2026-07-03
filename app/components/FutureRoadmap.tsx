import type { CSSProperties } from "react";

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Foundation",
    text: "Website structure, project identity, core documentation, and public-facing transparency pages.",
  },
  {
    phase: "Phase 2",
    title: "Documentation Expansion",
    text: "Whitepaper refinement, audit publication, tokenomics updates, and stronger public reporting.",
  },
  {
    phase: "Phase 3",
    title: "Community Development",
    text: "Official communication channels, education resources, community guidance, and safety awareness.",
  },
  {
    phase: "Phase 4",
    title: "Ecosystem Growth",
    text: "Partnership exploration, governance development, utility planning, and long-term ecosystem structure.",
  },
];

export default function FutureRoadmap() {
  return (
    <section style={styles.section} className="cardHover">
      <p style={styles.label}>FUTURE ROADMAP</p>

      <h2 style={styles.title}>
        A long-term path built through steady, transparent progress.
      </h2>

      <div style={styles.grid}>
        {roadmapItems.map((item) => (
          <div key={item.phase} style={styles.card}>
            <p style={styles.phase}>{item.phase}</p>
            <h3 style={styles.heading}>{item.title}</h3>
            <p style={styles.text}>{item.text}</p>
          </div>
        ))}
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
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: "22px",
  },

  card: {
    background: "rgba(255,255,255,.03)",
    border: "1px solid #2a2a2a",
    borderRadius: "18px",
    padding: "24px",
  },

  phase: {
    color: "#f5c542",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  heading: {
    color: "#ffffff",
    marginBottom: "12px",
  },

  text: {
    color: "#d6d6d6",
    lineHeight: "1.8",
  },
};
