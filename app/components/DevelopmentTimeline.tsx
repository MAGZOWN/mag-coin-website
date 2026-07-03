import type { CSSProperties } from "react";

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "Completed",
  },
  {
    phase: "Phase 2",
    title: "Documentation",
    status: "In Progress",
  },
  {
    phase: "Phase 3",
    title: "Community Growth",
    status: "Planned",
  },
  {
    phase: "Phase 4",
    title: "Ecosystem Expansion",
    status: "Planned",
  },
  {
    phase: "Phase 5",
    title: "Long-Term Sustainability",
    status: "Future",
  },
];

export default function DevelopmentTimeline() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Development Timeline</h2>

      <p style={styles.subtitle}>
        MAG COIN is being developed in carefully planned phases to ensure
        responsible growth and long-term sustainability.
      </p>

      <div style={styles.timeline}>
        {phases.map((item, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.phase}>{item.phase}</div>

            <h3 style={styles.heading}>{item.title}</h3>

            <span
              style={{
                ...styles.badge,
                background:
                  item.status === "Completed"
                    ? "#198754"
                    : item.status === "In Progress"
                    ? "#0d6efd"
                    : "#6c757d",
              }}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginTop: "50px",
    background:
      "linear-gradient(145deg, rgba(18,18,18,0.96), rgba(5,5,5,0.96))",
    border: "1px solid #333",
    borderRadius: "22px",
    padding: "36px",
  },

  title: {
    color: "#f5c542",
    textAlign: "center",
    fontSize: "28px",
    marginBottom: "16px",
  },

  subtitle: {
    color: "#bdbdbd",
    textAlign: "center",
    lineHeight: "1.7",
    marginBottom: "34px",
  },

  timeline: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
    gap: "22px",
  },

  card: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid #2a2a2a",
    borderRadius: "16px",
    padding: "24px",
    textAlign: "center",
  },

  phase: {
    color: "#f5c542",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  heading: {
    color: "#ffffff",
    marginBottom: "18px",
    fontSize: "18px",
  },

  badge: {
    display: "inline-block",
    color: "#fff",
    padding: "8px 16px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "bold",
  },
};
