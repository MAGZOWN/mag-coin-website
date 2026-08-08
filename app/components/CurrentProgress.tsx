import type { CSSProperties } from "react";

const progressItems = [
  {
    area: "Smart Contract",
    status: "Completed",
    details: "Verified on BaseScan with fixed supply and standard ERC-20 behavior.",
  },
  {
    area: "Website Foundation",
    status: "Completed",
    details: "Core pages, navigation, branding, and contact infrastructure are live.",
  },
  {
    area: "Whitepaper",
    status: "Completed",
    details: "Professional Founder Edition with governance, risk, and roadmap sections.",
  },
  {
    area: "Constitution",
    status: "Completed",
    details: "Governance charter, principles, safeguards, and stewardship commitments published.",
  },
  {
    area: "Tokenomics",
    status: "Completed",
    details: "Supply, utility, liquidity, governance, and concentration disclosures documented.",
  },
  {
    area: "Liquidity",
    status: "Active • Locked",
    details: "MAG/USDC liquidity is active and locked through FlokiFi (locked 5 August 2026, unlocking 4 August 2028), with legacy WETH/MAG liquidity documented separately.",
  },
  {
    area: "Master Audit Report v2.0",
    status: "Completed",
    details: "Smart contract permission review published, covering owner, mint, pause, blacklist, tax, and upgrade functions. Live on the Audit page.",
  },
  {
    area: "Trading Platform Branding",
    status: "Next Priority",
    details: "Official logo and token profile information will be submitted after website Version 1.0 is finalized.",
  },
];

function getStatusStyle(status: string): CSSProperties {
  if (status === "Completed" || status === "Active" || status === "Active • Locked") {
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

export default function CurrentProgress() {
  return (
    <section
      id="current-progress"
      style={styles.section}
      className="magCard cardHover fadeIn"
      aria-labelledby="current-progress-title"
    >
      <p style={styles.label}>CURRENT PROJECT STATUS</p>

      <h2 id="current-progress-title" style={styles.title}>
        Verified Progress
      </h2>

      <p style={styles.subtitle}>
        This section reflects the current documented state of MAG COIN. Completed
        work is distinguished from ongoing and future milestones to avoid
        overstating project readiness.
      </p>

      <div style={styles.grid}>
        {progressItems.map((item) => (
          <article
            key={item.area}
            style={styles.card}
            className="magCard cardHover"
          >
            <div style={styles.cardHeader}>
              <h3 style={styles.heading}>{item.area}</h3>

              <span
                style={{
                  ...styles.statusBadge,
                  ...getStatusStyle(item.status),
                }}
              >
                {item.status}
              </span>
            </div>

            <p style={styles.text}>{item.details}</p>
          </article>
        ))}
      </div>

      <div style={styles.notice}>
        <h3 style={styles.noticeTitle}>Progress Standard</h3>

        <p style={styles.noticeText}>
          MAG COIN will classify milestones as completed only when they are
          implemented, documented, and reasonably verifiable. Planned activity
          will not be presented as finished work.
        </p>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    boxShadow: "0 22px 50px rgba(0,0,0,.28)",
    marginBottom: "70px",
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
    margin: "0 auto 38px",
    lineHeight: "1.8",
    fontSize: "17px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "22px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: "20px",
    padding: "26px",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
  },

  cardHeader: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "14px",
    flexWrap: "wrap",
    marginBottom: "14px",
  },

  heading: {
    color: "#ffffff",
    fontSize: "20px",
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
    fontSize: "15px",
    lineHeight: "1.8",
    margin: 0,
  },

  notice: {
    marginTop: "34px",
    padding: "30px",
    borderRadius: "20px",
    background:
      "linear-gradient(135deg, rgba(245,197,66,.10), rgba(245,197,66,.03))",
    border: "1px solid rgba(245,197,66,.24)",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
    textAlign: "center",
  },

  noticeTitle: {
    color: "#f5c542",
    fontSize: "22px",
    fontWeight: 850,
    margin: "0 0 14px",
  },

  noticeText: {
    color: "#d6d6d6",
    maxWidth: "900px",
    margin: "0 auto",
    fontSize: "16px",
    lineHeight: "1.9",
  },
};
