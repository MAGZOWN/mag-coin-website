import type { CSSProperties } from "react";

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "Completed",
    text: "Establish the project identity, deploy and verify the token, secure the official domain, launch the website, and create the initial public documentation structure.",
    milestones: [
      "Token deployment on Base Mainnet",
      "Verified contract source code",
      "Official website and branding",
      "Core project documentation",
    ],
  },
  {
    phase: "Phase 2",
    title: "Documentation & Trust",
    status: "Completed",
    text: "Strengthen the Whitepaper, Constitution, Tokenomics, Audit, Security, Transparency Center, and public reporting framework.",
    milestones: [
      "Whitepaper refinement",
      "Living governance documents",
      "Public security guidance",
      "Audit and transparency records",
    ],
  },
  {
    phase: "Phase 3",
    title: "Security & Infrastructure",
    status: "In Progress",
    text: "Improve infrastructure security, wallet practices, liquidity clarity, contact systems, metadata consistency, and public verification resources.",
    milestones: [
      "Infrastructure hardening",
      "Liquidity documentation",
      "Metadata and token profile preparation",
      "Operational security procedures",
    ],
  },
  {
    phase: "Phase 4",
    title: "Community Development",
    status: "Planned",
    text: "Establish official communication channels, educational resources, community guidance, safety awareness, and responsible public engagement.",
    milestones: [
      "Official social channels",
      "Education-first communication",
      "Community safety guidance",
      "Regular project updates",
    ],
  },
  {
    phase: "Phase 5",
    title: "Ecosystem Growth",
    status: "Long-Term",
    text: "Explore practical utility, responsible partnerships, governance development, integrations, and sustainable ecosystem expansion.",
    milestones: [
      "Utility research",
      "Partnership evaluation",
      "Governance development",
      "Long-term ecosystem planning",
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

export default function FutureRoadmap() {
  return (
    <section
      id="future-roadmap"
      style={styles.section}
      className="magCard cardHover fadeIn"
      aria-labelledby="future-roadmap-title"
    >
      <p style={styles.label}>FUTURE ROADMAP</p>

      <h2 id="future-roadmap-title" style={styles.title}>
        A long-term path built through steady, transparent progress.
      </h2>

      <p style={styles.intro}>
        The MAG COIN roadmap is designed as a directional framework rather than
        a promise of fixed dates or guaranteed outcomes. Priorities may evolve
        as technical, operational, legal, security, and community requirements
        become clearer.
      </p>

      <div style={styles.noticeBox} className="magCard cardHover">
        <p style={styles.noticeTitle}>Roadmap Principle</p>

        <p style={styles.noticeText}>
          Progress should be measured by verified milestones, not promotional
          deadlines.
        </p>
      </div>

      <div style={styles.divider} />

      <div style={styles.grid}>
        {roadmapItems.map((item) => (
          <article
            key={item.phase}
            style={styles.card}
            className="magCard cardHover"
          >
            <div style={styles.cardHeader}>
              <div>
                <p style={styles.phase}>{item.phase}</p>

                <h3 style={styles.heading}>{item.title}</h3>
              </div>

              <span
                style={{
                  ...styles.statusBadge,
                  ...getStatusStyle(item.status),
                }}
              >
                {item.status}
              </span>
            </div>

            <p style={styles.text}>{item.text}</p>

            <div style={styles.milestoneList}>
              {item.milestones.map((milestone) => (
                <div
                  key={milestone}
                  style={styles.milestoneItem}
                  className="magCard cardHover"
                >
                  <span style={styles.marker}>✓</span>
                  <span>{milestone}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div style={styles.closingBox} className="magCard cardHover">
        <h3 style={styles.closingTitle}>No Artificial Deadlines</h3>

        <p style={styles.closingText}>
          MAG COIN will not announce unrealistic delivery dates merely to create
          attention. Milestones should be communicated when there is a credible
          plan, adequate resources, and a reasonable basis for completion.
        </p>
      </div>

      <div style={styles.resourceLinks}>
        <a
          href="/roadmap"
          style={styles.primaryLink}
          className="primaryButton"
        >
          View Full Roadmap
        </a>

        <a
          href="/transparency"
          style={styles.secondaryLink}
          className="secondaryButton"
        >
          Review Progress Updates
        </a>
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

  intro: {
    color: "#d6d6d6",
    fontSize: "18px",
    lineHeight: "1.9",
    marginBottom: "28px",
  },

  noticeBox: {
    padding: "24px",
    borderRadius: "18px",
    background:
      "linear-gradient(145deg, rgba(245,197,66,.10), rgba(245,197,66,.035))",
    border: "1px solid rgba(245,197,66,.25)",
    textAlign: "center",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
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
    margin: 0,
  },

  divider: {
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(245,197,66,.35), transparent)",
    margin: "42px 0",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "22px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(255,255,255,.055), rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "20px",
    padding: "26px",
    boxShadow: "0 18px 44px rgba(0,0,0,.24)",
  },

  cardHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "16px",
    flexWrap: "wrap",
    marginBottom: "16px",
  },

  phase: {
    color: "#f5c542",
    fontWeight: 800,
    fontSize: "13px",
    letterSpacing: "1px",
    margin: "0 0 8px",
  },

  heading: {
    color: "#ffffff",
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

  text: {
    color: "#d6d6d6",
    fontSize: "15px",
    lineHeight: "1.8",
    margin: "0 0 20px",
  },

  milestoneList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  milestoneItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
    color: "#cfcfcf",
    background:
      "linear-gradient(145deg, rgba(0,0,0,.24), rgba(255,255,255,.018))",
    border: "1px solid rgba(255,255,255,.08)",
    borderRadius: "12px",
    padding: "11px 13px",
    fontSize: "14px",
    lineHeight: "1.55",
    boxShadow: "0 12px 28px rgba(0,0,0,.18)",
  },

  marker: {
    color: "#f5c542",
    fontWeight: 900,
    flexShrink: 0,
  },

  closingBox: {
    marginTop: "34px",
    padding: "28px",
    borderRadius: "18px",
    background:
      "linear-gradient(145deg, rgba(255,255,255,.055), rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.10)",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
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

  resourceLinks: {
    display: "flex",
    flexWrap: "wrap",
    gap: "14px",
    marginTop: "26px",
  },

  primaryLink: {
    background: "#f5c542",
    color: "#000000",
    border: "2px solid #f5c542",
    borderRadius: "999px",
    padding: "12px 20px",
    textDecoration: "none",
    fontWeight: 850,
    fontSize: "13px",
  },

  secondaryLink: {
    background: "transparent",
    color: "#f5c542",
    border: "2px solid rgba(245,197,66,.55)",
    borderRadius: "999px",
    padding: "12px 20px",
    textDecoration: "none",
    fontWeight: 850,
    fontSize: "13px",
  },
};

