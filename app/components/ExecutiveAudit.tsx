import type { CSSProperties } from "react";

const auditSummary = [
  {
    area: "Smart Contract",
    status: "Verified",
    finding:
      "The MAG COIN contract is verified on BaseScan and uses a simple OpenZeppelin ERC-20 implementation.",
  },
  {
    area: "Token Supply",
    status: "Verified",
    finding:
      "Total supply is 1,000,000,000 MAG with 18 decimals. The verified source does not expose a public mint function.",
  },
  {
    area: "Website",
    status: "Operational",
    finding:
      "The official website is live with Whitepaper, Constitution, Tokenomics, Roadmap, Transparency, Audit, Security, FAQ, and Contact pages.",
  },
  {
    area: "Liquidity",
    status: "Active • Locked",
    finding:
      "The official MAG/USDC pool is active and locked via FlokiFi Locker (locked 5 August 2026, unlocking 4 August 2028), while legacy WETH/MAG liquidity remains documented separately. Current liquidity remains limited.",
  },
  {
    area: "Documentation",
    status: "Substantially Complete",
    finding:
      "Core public documents have been expanded and aligned around transparency, risk disclosure, and long-term stewardship.",
  },
  {
    area: "Branding & Visibility",
    status: "In Progress",
    finding:
      "Official logo assets are prepared, but token-profile propagation across trading and data platforms remains unfinished.",
  },
];

function getStatusStyle(status: string): CSSProperties {
  if (
    status === "Verified" ||
    status === "Operational" ||
    status === "Substantially Complete"
  ) {
    return {
      background: "rgba(25,135,84,.14)",
      border: "1px solid rgba(25,135,84,.42)",
      color: "#63d99a",
    };
  }

  if (status.includes("Active")) {
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

export default function ExecutiveAudit() {
  return (
    <section
      id="executive-audit"
      style={styles.section}
      className="magCard cardHover fadeIn"
      aria-labelledby="executive-audit-title"
    >
      <p style={styles.label}>EXECUTIVE AUDIT SUMMARY</p>

      <h2 id="executive-audit-title" style={styles.title}>
        Current Project Assessment
      </h2>

      <p style={styles.subtitle}>
        This summary reflects the current documented state of MAG COIN based on
        verified contract data, public blockchain records, website
        functionality, project documentation, and observed market
        infrastructure.
      </p>

      <div style={styles.grid}>
        {auditSummary.map((item) => (
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

            <p style={styles.text}>{item.finding}</p>
          </article>
        ))}
      </div>

      <div style={styles.scopeBox}>
        <h3 style={styles.scopeTitle}>Audit Scope</h3>

        <p style={styles.scopeText}>
          This review covers the verified smart contract, token metadata,
          public website, project documentation, liquidity observations,
          governance statements, security disclosures, and branding readiness.
          It does not constitute a formal third-party code audit, legal opinion,
          financial audit, or guarantee of future performance.
        </p>
      </div>

      <div style={styles.methodBox}>
        <h3 style={styles.methodTitle}>Review Methodology</h3>

        <ul style={styles.list}>
          <li style={styles.listItem}>
            Review verified BaseScan contract source and read-only contract data.
          </li>
          <li style={styles.listItem}>
            Compare token facts across website, explorer, and project records.
          </li>
          <li style={styles.listItem}>
            Review liquidity records and current market visibility.
          </li>
          <li style={styles.listItem}>
            Test website pages, navigation, contact functionality, and public links.
          </li>
          <li style={styles.listItem}>
            Evaluate Whitepaper, Constitution, Tokenomics, Roadmap, Transparency,
            Security, and Audit documentation for consistency.
          </li>
          <li style={styles.listItem}>
            Record known limitations, unresolved risks, and recommended next steps.
          </li>
        </ul>
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
    maxWidth: "860px",
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
    justifyContent: "space-between",
    alignItems: "flex-start",
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

  scopeBox: {
    marginTop: "34px",
    padding: "30px",
    borderRadius: "20px",
    background:
      "linear-gradient(135deg, rgba(245,197,66,.10), rgba(245,197,66,.03))",
    border: "1px solid rgba(245,197,66,.24)",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
  },

  scopeTitle: {
    color: "#f5c542",
    fontSize: "22px",
    fontWeight: 850,
    margin: "0 0 14px",
  },

  scopeText: {
    color: "#d6d6d6",
    fontSize: "15px",
    lineHeight: "1.85",
    margin: 0,
  },

  methodBox: {
    marginTop: "26px",
    padding: "28px",
    borderRadius: "18px",
    background: "linear-gradient(145deg, rgba(255,255,255,.05), rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.10)",
    boxShadow: "0 18px 42px rgba(0,0,0,.22)",
  },

  methodTitle: {
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: 850,
    margin: "0 0 16px",
  },

  list: {
    margin: 0,
    paddingLeft: "22px",
    color: "#d6d6d6",
  },

  listItem: {
    fontSize: "15px",
    lineHeight: "1.8",
    marginBottom: "10px",
  },
};
