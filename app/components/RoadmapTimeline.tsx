import type { CSSProperties } from "react";

const phases = [
  {
    phase: "Phase 1",
    status: "Completed",
    title: "Foundation",
    items: [
      "Official website launched",
      "Project identity established",
      "Core documentation published",
      "Base contract verified",
    ],
  },
  {
    phase: "Phase 2",
    status: "In Progress",
    title: "Documentation & Trust",
    items: [
      "Whitepaper refinement",
      "Constitution framework",
      "Tokenomics documentation",
      "Master Audit Report",
    ],
  },
  {
    phase: "Phase 3",
    status: "Planned",
    title: "Security & Infrastructure",
    items: [
      "Security review",
      "Expanded transparency",
      "Verification improvements",
      "Infrastructure optimization",
    ],
  },
  {
    phase: "Phase 4",
    status: "Future",
    title: "Community Development",
    items: [
      "Official community channels",
      "Educational resources",
      "Governance expansion",
      "Safety awareness",
    ],
  },
  {
    phase: "Phase 5",
    status: "Long-Term",
    title: "Ecosystem Growth",
    items: [
      "Strategic partnerships",
      "Long-term stewardship",
      "Continuous improvement",
      "Global ecosystem expansion",
    ],
  },
];

export default function RoadmapTimeline() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Development Timeline</h2>

      <p style={styles.subtitle}>
        Every phase builds on verified progress. MAG COIN follows a
        documentation-first approach where trust is established before
        expansion.
      </p>

      <div style={styles.grid}>
        {phases.map((phase) => (
          <div
            key={phase.phase}
            style={styles.card}
            className="magCard cardHover"
          >
            <div style={styles.header}>
              <span style={styles.phase}>
                {phase.phase}
              </span>

              <span style={styles.badge}>
                {phase.status}
              </span>
            </div>

            <h3 style={styles.heading}>
              {phase.title}
            </h3>

            <ul style={styles.list}>
              {phase.items.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    boxShadow: "0 22px 50px rgba(0,0,0,.28)",
    marginBottom: "70px",
  },

  title: {
    color: "#f5c542",
    textAlign: "center",
    fontSize: "34px",
    marginBottom: "16px",
  },

  subtitle: {
    color: "#d6d6d6",
    textAlign: "center",
    maxWidth: "850px",
    margin: "0 auto 42px",
    lineHeight: "1.8",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "24px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid #333",
    borderRadius: "22px",
    padding: "28px",
    color: "#e5e5e5",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "18px",
  },

  phase: {
    color: "#f5c542",
    fontWeight: "bold",
    fontSize: "18px",
  },

  badge: {
    background: "rgba(245,197,66,.10)",
    border: "1px solid rgba(245,197,66,.35)",
    color: "#f5c542",
    padding: "6px 12px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "bold",
  },

  heading: {
    color: "#ffffff",
    marginBottom: "18px",
    fontSize: "24px",
  },

  list: {
    paddingLeft: "22px",
    lineHeight: "1.9",
    color: "#d6d6d6",
    margin: 0,
  },
};
