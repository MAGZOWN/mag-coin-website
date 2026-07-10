import type { CSSProperties } from "react";

const phases = [
  {
    number: "01",
    title: "Foundation",
    status: "Completed",
    description:
      "Establish the MAG COIN identity, deploy the token on Base Mainnet, verify the contract, secure the official domain, and create the core website structure.",
    priorities: [
      "Token deployment and verification",
      "Official website and branding",
      "Foundational project records",
    ],
  },
  {
    number: "02",
    title: "Documentation and Trust",
    status: "In Progress",
    description:
      "Develop the Whitepaper, Constitution, Tokenomics, Transparency Center, Security guidance, Audit records, and supporting public documentation.",
    priorities: [
      "Living project documentation",
      "Public verification resources",
      "Consistent risk communication",
    ],
  },
  {
    number: "03",
    title: "Security and Operational Readiness",
    status: "In Progress",
    description:
      "Review contract permissions, wallet practices, liquidity records, project infrastructure, and operational safeguards before wider public promotion.",
    priorities: [
      "Contract and permission review",
      "Infrastructure hardening",
      "Liquidity and wallet verification",
    ],
  },
  {
    number: "04",
    title: "Community Education",
    status: "Planned",
    description:
      "Introduce responsible public communication, educational resources, community support channels, and transparent progress reporting.",
    priorities: [
      "Education-first communication",
      "Official community channels",
      "Responsible public engagement",
    ],
  },
  {
    number: "05",
    title: "Ecosystem Development",
    status: "Long-Term",
    description:
      "Explore sustainable utilities, partnerships, governance development, integrations, and ecosystem expansion only after the project foundation is sufficiently mature.",
    priorities: [
      "Practical utility exploration",
      "Responsible partnerships",
      "Long-term governance development",
    ],
  },
];

function getStatusStyle(status: string): CSSProperties {
  if (status === "Completed") {
    return {
      background: "rgba(25,135,84,.14)",
      border: "1px solid rgba(25,135,84,.42)",
      color: "#63d99a",
    };
  }

  if (status === "In Progress") {
    return {
      background: "rgba(13,110,253,.13)",
      border: "1px solid rgba(13,110,253,.38)",
      color: "#7eb3ff",
    };
  }

  return {
    background: "rgba(245,197,66,.09)",
    border: "1px solid rgba(245,197,66,.28)",
    color: "#f5c542",
  };
}

export default function DevelopmentStrategy() {
  return (
    <section
      id="development-strategy"
      style={styles.section}
      className="cardHover fadeIn"
      aria-labelledby="development-strategy-title"
    >
      <p style={styles.label}>DEVELOPMENT STRATEGY</p>

      <h2 id="development-strategy-title" style={styles.title}>
        Building steadily, documenting everything, improving continuously.
      </h2>

      <p style={styles.text}>
        MAG COIN follows a structured development strategy rather than pursuing
        rapid or speculative expansion. Each phase is intended to strengthen
        security, improve transparency, preserve institutional memory, and
        establish a sustainable foundation for future development.
      </p>

      <p style={styles.text}>
        The roadmap is directional rather than promotional. A phase should not
        be treated as complete until its important technical, operational, and
        documentation requirements have been verified.
      </p>

      <div style={styles.strategyNotice}>
        <p style={styles.noticeTitle}>Development Rule</p>

        <p style={styles.noticeText}>
          Plan → Verify → Document → Implement → Test → Review → Record
        </p>
      </div>

      <div style={styles.divider} />

      <div style={styles.timeline}>
        {phases.map((phase) => (
          <article key={phase.number} style={styles.item}>
            <div style={styles.number}>{phase.number}</div>

            <div style={styles.phaseContent}>
              <div style={styles.phaseHeader}>
                <div>
                  <p style={styles.phaseLabel}>PHASE {phase.number}</p>

                  <h3 style={styles.phaseTitle}>{phase.title}</h3>
                </div>

                <span
                  style={{
                    ...styles.statusBadge,
                    ...getStatusStyle(phase.status),
                  }}
                >
                  {phase.status}
                </span>
              </div>

              <p style={styles.phaseText}>{phase.description}</p>

              <div style={styles.priorityGrid}>
                {phase.priorities.map((priority) => (
                  <div key={priority} style={styles.priorityItem}>
                    <span style={styles.priorityMarker}>✓</span>
                    <span>{priority}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div style={styles.closingBox}>
        <h3 style={styles.closingTitle}>Responsible Progress</h3>

        <p style={styles.closingText}>
          MAG COIN will not introduce features, utilities, partnerships, or
          governance mechanisms merely to create attention. New initiatives
          should be pursued only when they improve security, transparency,
          utility, adoption, or long-term project resilience.
        </p>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginBottom: "60px",
    scrollMarginTop: "110px",
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid rgba(255,255,255,.14)",
    borderRadius: "24px",
    padding: "48px",
    color: "#e5e5e5",
    boxShadow: "0 18px 50px rgba(0,0,0,.28)",
  },

  label: {
    color: "#f5c542",
    letterSpacing: "3px",
    fontWeight: 800,
    fontSize: "13px",
    marginBottom: "18px",
  },

  title: {
    color: "#ffffff",
    fontSize: "36px",
    lineHeight: "1.3",
    marginBottom: "24px",
    fontWeight: 850,
  },

  text: {
    color: "#d6d6d6",
    fontSize: "18px",
    lineHeight: "1.9",
    marginBottom: "22px",
  },

  strategyNotice: {
    marginTop: "32px",
    padding: "24px",
    borderRadius: "18px",
    background:
      "linear-gradient(135deg, rgba(245,197,66,.10), rgba(245,197,66,.03))",
    border: "1px solid rgba(245,197,66,.25)",
    textAlign: "center",
  },

  noticeTitle: {
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: 800,
    margin: "0 0 10px",
  },

  noticeText: {
    color: "#f5c542",
    fontSize: "16px",
    lineHeight: "1.7",
    fontWeight: 800,
    letterSpacing: ".4px",
    margin: 0,
  },

  divider: {
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(245,197,66,.35), transparent)",
    margin: "42px 0",
  },

  timeline: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  item: {
    display: "flex",
    alignItems: "flex-start",
    gap: "22px",
    background:
      "linear-gradient(145deg, rgba(255,255,255,.05), rgba(255,255,255,.02))",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "20px",
    padding: "26px",
  },

  number: {
    width: "58px",
    height: "58px",
    borderRadius: "50%",
    background: "rgba(245,197,66,.11)",
    border: "1px solid rgba(245,197,66,.34)",
    color: "#f5c542",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 850,
    fontSize: "15px",
    flexShrink: 0,
  },

  phaseContent: {
    flex: 1,
    minWidth: 0,
  },

  phaseHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "18px",
    flexWrap: "wrap",
    marginBottom: "14px",
  },

  phaseLabel: {
    color: "#9f9f9f",
    fontSize: "11px",
    letterSpacing: "1.5px",
    fontWeight: 800,
    margin: "0 0 7px",
  },

  phaseTitle: {
    color: "#f5c542",
    fontSize: "22px",
    lineHeight: "1.35",
    fontWeight: 850,
    margin: 0,
  },

  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "999px",
    padding: "8px 14px",
    fontSize: "12px",
    fontWeight: 800,
    whiteSpace: "nowrap",
  },

  phaseText: {
    color: "#d6d6d6",
    fontSize: "15px",
    lineHeight: "1.8",
    margin: "0 0 18px",
  },

  priorityGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gap: "10px",
  },

  priorityItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    color: "#cfcfcf",
    background: "rgba(0,0,0,.18)",
    border: "1px solid rgba(255,255,255,.07)",
    borderRadius: "12px",
    padding: "11px 13px",
    fontSize: "14px",
    lineHeight: "1.55",
  },

  priorityMarker: {
    color: "#f5c542",
    fontWeight: 900,
    flexShrink: 0,
  },

  closingBox: {
    marginTop: "34px",
    padding: "28px",
    borderRadius: "18px",
    background: "rgba(255,255,255,.035)",
    border: "1px solid rgba(255,255,255,.10)",
  },

  closingTitle: {
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: 850,
    margin: "0 0 13px",
  },

  closingText: {
    color: "#d3d3d3",
    fontSize: "15px",
    lineHeight: "1.85",
    margin: 0,
  },
};
