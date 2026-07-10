import type { CSSProperties } from "react";

const utilityFramework = [
  {
    title: "Ecosystem Participation",
    status: "Future Development",
    description:
      "MAG may support participation within the MAG ecosystem as clearly defined products, services, tools, or community programs are developed and verified.",
  },
  {
    title: "Governance Participation",
    status: "Planned",
    description:
      "Governance participation may be introduced gradually after the required legal, technical, operational, and security foundations are sufficiently mature.",
  },
  {
    title: "Community Alignment",
    status: "Ongoing",
    description:
      "MAG is intended to support long-term community alignment through transparent communication, responsible development, and shared project objectives.",
  },
  {
    title: "Educational Utility",
    status: "Planned",
    description:
      "The token may support future education-first initiatives, project awareness, documentation access, or community learning programs where appropriate.",
  },
  {
    title: "Ecosystem Access",
    status: "Under Review",
    description:
      "Future access-based utility may be considered for services or features that provide genuine value without creating misleading investment expectations.",
  },
  {
    title: "Partnership Integration",
    status: "Long-Term",
    description:
      "MAG may be considered for responsible integrations or partnerships only after technical, compliance, security, and sustainability reviews.",
  },
];

const utilityRules = [
  "No utility should be promoted before it exists or can be verified.",
  "New utility should provide genuine ecosystem value rather than artificial demand.",
  "Security and legal considerations should be reviewed before implementation.",
  "Utility should be documented clearly through official project channels.",
  "No utility should imply guaranteed returns, passive income, or price appreciation.",
  "Failed, delayed, or discontinued utility plans should be disclosed honestly.",
];

function getStatusStyle(status: string): CSSProperties {
  if (status === "Ongoing") {
    return {
      background: "rgba(25,135,84,.14)",
      border: "1px solid rgba(25,135,84,.42)",
      color: "#63d99a",
    };
  }

  if (status === "Planned" || status === "Under Review") {
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

export default function TokenUtility() {
  return (
    <section
      id="token-utility"
      style={styles.section}
      className="fadeIn"
      aria-labelledby="token-utility-title"
    >
      <p style={styles.label}>RESPONSIBLE UTILITY</p>

      <h2 id="token-utility-title" style={styles.title}>
        Token Utility
      </h2>

      <p style={styles.subtitle}>
        MAG utility will develop gradually and responsibly. Future use cases
        should be documented, reviewed, and verified before public promotion.
        No utility should be announced merely to create speculative interest.
      </p>

      <div style={styles.noticeBox}>
        <h3 style={styles.noticeTitle}>Current Utility Position</h3>

        <p style={styles.noticeText}>
          MAG COIN is currently an early-stage token with developing ecosystem
          utility. No staking rewards, revenue rights, guaranteed benefits, or
          investment returns are being promised.
        </p>
      </div>

      <div style={styles.divider} />

      <div style={styles.grid}>
        {utilityFramework.map((item) => (
          <article
            key={item.title}
            style={styles.card}
            className="cardHover"
          >
            <div style={styles.cardHeader}>
              <h3 style={styles.heading}>{item.title}</h3>

              <span
                style={{
                  ...styles.statusBadge,
                  ...getStatusStyle(item.status),
                }}
              >
                {item.status}
              </span>
            </div>

            <p style={styles.text}>{item.description}</p>
          </article>
        ))}
      </div>

      <div style={styles.rulesBox}>
        <h3 style={styles.rulesTitle}>Utility Development Rules</h3>

        <ul style={styles.list}>
          {utilityRules.map((rule) => (
            <li key={rule} style={styles.listItem}>
              {rule}
            </li>
          ))}
        </ul>
      </div>

      <div style={styles.closingBox}>
        <h3 style={styles.closingTitle}>Utility Before Promotion</h3>

        <p style={styles.closingText}>
          MAG COIN will not describe proposed features as active utility.
          Planned integrations, access mechanisms, governance functions, or
          community benefits should be announced only when there is a credible
          implementation path and sufficient evidence to support the claim.
        </p>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginBottom: "60px",
    scrollMarginTop: "110px",
  },

  label: {
    color: "#f5c542",
    textAlign: "center",
    letterSpacing: "3px",
    fontWeight: 800,
    fontSize: "13px",
    marginBottom: "12px",
  },

  title: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "38px",
    lineHeight: "1.25",
    fontWeight: 900,
    marginBottom: "16px",
  },

  subtitle: {
    color: "#d6d6d6",
    textAlign: "center",
    maxWidth: "840px",
    margin: "0 auto 34px",
    lineHeight: "1.8",
    fontSize: "17px",
  },

  noticeBox: {
    padding: "28px",
    borderRadius: "20px",
    background:
      "linear-gradient(135deg, rgba(245,197,66,.10), rgba(245,197,66,.03))",
    border: "1px solid rgba(245,197,66,.24)",
    textAlign: "center",
  },

  noticeTitle: {
    color: "#f5c542",
    fontSize: "21px",
    fontWeight: 850,
    margin: "0 0 14px",
  },

  noticeText: {
    color: "#d6d6d6",
    maxWidth: "860px",
    margin: "0 auto",
    fontSize: "16px",
    lineHeight: "1.85",
  },

  divider: {
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(245,197,66,.35), transparent)",
    margin: "42px 0",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "22px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: "20px",
    padding: "26px",
    color: "#e5e5e5",
    boxShadow: "0 12px 30px rgba(0,0,0,.24)",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "14px",
    flexWrap: "wrap",
    marginBottom: "14px",
  },

  heading: {
    color: "#f5c542",
    fontSize: "19px",
    lineHeight: "1.4",
    fontWeight: 850,
    margin: 0,
  },

  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "999px",
    padding: "7px 12px",
    fontSize: "11px",
    fontWeight: 800,
    whiteSpace: "nowrap",
  },

  text: {
    color: "#d6d6d6",
    lineHeight: "1.8",
    fontSize: "15px",
    margin: 0,
  },

  rulesBox: {
    marginTop: "34px",
    padding: "30px",
    borderRadius: "20px",
    background:
      "linear-gradient(135deg, rgba(245,197,66,.09), rgba(245,197,66,.025))",
    border: "1px solid rgba(245,197,66,.23)",
  },

  rulesTitle: {
    color: "#f5c542",
    fontSize: "22px",
    fontWeight: 850,
    margin: "0 0 18px",
  },

  list: {
    margin: 0,
    paddingLeft: "22px",
    color: "#d6d6d6",
  },

  listItem: {
    fontSize: "15px",
    lineHeight: "1.8",
    marginBottom: "12px",
  },

  closingBox: {
    marginTop: "28px",
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
