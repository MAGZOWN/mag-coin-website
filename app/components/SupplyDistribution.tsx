import type { CSSProperties } from "react";

const supplyFacts = [
  {
    label: "Total Supply",
    value: "1,000,000,000 MAG",
    status: "Verified",
  },
  {
    label: "Supply Model",
    value: "Fixed Supply",
    status: "Verified",
  },
  {
    label: "Decimals",
    value: "18",
    status: "Verified",
  },
  {
    label: "Network",
    value: "Base Mainnet",
    status: "Verified",
  },
];

const distributionRecords = [
  {
    title: "Project-Controlled Supply",
    status: "Current",
    description:
      "The majority of MAG remains under project or founder control during the early development stage. A detailed public allocation framework should be published before broader distribution or promotional activity.",
  },
  {
    title: "Official MAG/USDC Liquidity",
    status: "Active",
    description:
      "An active MAG/USDC liquidity position exists on Uniswap v3. Liquidity remains limited and should not be presented as deep or mature market liquidity.",
  },
  {
    title: "Legacy WETH/MAG Liquidity",
    status: "Locked",
    description:
      "A historical WETH/MAG Uniswap v3 position is locked through FlokiFi. It is preserved as legacy liquidity evidence and is not presented as the primary MAG COIN market.",
  },
  {
    title: "Community Allocation",
    status: "Not Finalized",
    description:
      "No final community-distribution percentage is being published until a documented allocation policy has been approved and can be implemented transparently.",
  },
  {
    title: "Founder Allocation",
    status: "To Be Disclosed",
    description:
      "A formal founder and project allocation policy remains to be completed. Future disclosures should distinguish founder holdings, treasury reserves, liquidity, and ecosystem allocations.",
  },
  {
    title: "Treasury and Ecosystem Reserve",
    status: "Under Development",
    description:
      "Treasury and ecosystem reserves should be governed through documented movement records, defined purposes, and responsible spending controls.",
  },
];

function getStatusStyle(status: string): CSSProperties {
  if (status === "Verified" || status === "Active") {
    return {
      background: "rgba(25,135,84,.14)",
      border: "1px solid rgba(25,135,84,.42)",
      color: "#63d99a",
    };
  }

  if (status === "Locked") {
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

export default function SupplyDistribution() {
  return (
    <section
      id="supply-distribution"
      style={styles.section}
      className="magCard cardHover fadeIn"
      aria-labelledby="supply-distribution-title"
    >
      <p style={styles.label}>SUPPLY ACCOUNTABILITY</p>

      <h2 id="supply-distribution-title" style={styles.title}>
        Supply &amp; Distribution
      </h2>

      <p style={styles.subtitle}>
        MAG COIN distribution information is presented according to the current
        verified state of the ecosystem. The Foundation will not publish
        speculative allocation percentages or describe planned distributions
        as completed.
      </p>

      <div style={styles.factsGrid}>
        {supplyFacts.map((item) => (
          <article
            key={item.label}
            style={styles.factCard}
            className="magCard cardHover"
          >
            <div style={styles.factHeader}>
              <h3 style={styles.factLabel}>{item.label}</h3>

              <span
                style={{
                  ...styles.statusBadge,
                  ...getStatusStyle(item.status),
                }}
              >
                {item.status}
              </span>
            </div>

            <p style={styles.factValue}>{item.value}</p>
          </article>
        ))}
      </div>

      <div style={styles.divider} />

      <p style={styles.subLabel}>CURRENT DISTRIBUTION RECORD</p>

      <h3 style={styles.subTitle}>
        Verified Status and Outstanding Disclosures
      </h3>

      <div style={styles.distributionGrid}>
        {distributionRecords.map((item) => (
          <article
            key={item.title}
            style={styles.distributionCard}
            className="magCard cardHover"
          >
            <div style={styles.distributionHeader}>
              <h4 style={styles.distributionTitle}>{item.title}</h4>

              <span
                style={{
                  ...styles.statusBadge,
                  ...getStatusStyle(item.status),
                }}
              >
                {item.status}
              </span>
            </div>

            <p style={styles.distributionText}>{item.description}</p>
          </article>
        ))}
      </div>

      <div style={styles.policyBox}>
        <h3 style={styles.policyTitle}>Distribution Policy</h3>

        <p style={styles.policyText}>
          No token allocation should be described as final until it has been
          approved, documented, and reflected accurately in project records.
          Future allocation disclosures should clearly identify project
          treasury, founder holdings, liquidity, community distribution,
          ecosystem development, and any other material supply category.
        </p>

        <p style={styles.policyText}>
          Any material transfer of project-controlled MAG should be recorded
          with its purpose, amount, recipient category, transaction hash, and
          resulting balance whenever disclosure is reasonably possible.
        </p>
      </div>

      <div style={styles.riskBox}>
        <h3 style={styles.riskTitle}>Concentration Disclosure</h3>

        <p style={styles.riskText}>
          MAG COIN remains an early-stage project with highly concentrated
          holdings. Concentration can create governance, liquidity, market, and
          confidence risks. This condition should be disclosed honestly and
          addressed through a clear, gradual, and documented allocation policy.
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
    margin: "0 auto 38px",
    lineHeight: "1.8",
    fontSize: "17px",
  },

  factsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
    gap: "20px",
  },

  factCard: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: "20px",
    padding: "24px",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
  },

  factHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "18px",
  },

  factLabel: {
    color: "#f5c542",
    fontSize: "17px",
    fontWeight: 800,
    margin: 0,
  },

  factValue: {
    color: "#ffffff",
    fontSize: "22px",
    lineHeight: "1.4",
    fontWeight: 850,
    margin: 0,
    overflowWrap: "anywhere",
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

  divider: {
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(245,197,66,.35), transparent)",
    margin: "44px 0",
  },

  subLabel: {
    color: "#f5c542",
    letterSpacing: "2px",
    fontSize: "12px",
    fontWeight: 800,
    marginBottom: "12px",
  },

  subTitle: {
    color: "#ffffff",
    fontSize: "28px",
    lineHeight: "1.35",
    fontWeight: 850,
    margin: "0 0 26px",
  },

  distributionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "20px",
  },

  distributionCard: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: "20px",
    padding: "26px",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
  },

  distributionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "14px",
    flexWrap: "wrap",
    marginBottom: "14px",
  },

  distributionTitle: {
    color: "#ffffff",
    fontSize: "19px",
    lineHeight: "1.4",
    fontWeight: 850,
    margin: 0,
  },

  distributionText: {
    color: "#d6d6d6",
    fontSize: "15px",
    lineHeight: "1.8",
    margin: 0,
  },

  policyBox: {
    marginTop: "32px",
    padding: "30px",
    borderRadius: "20px",
    background:
      "linear-gradient(135deg, rgba(245,197,66,.10), rgba(245,197,66,.03))",
    border: "1px solid rgba(245,197,66,.24)",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
  },

  policyTitle: {
    color: "#f5c542",
    fontSize: "22px",
    fontWeight: 850,
    margin: "0 0 16px",
  },

  policyText: {
    color: "#d6d6d6",
    fontSize: "15px",
    lineHeight: "1.85",
    margin: "0 0 14px",
  },

  riskBox: {
    marginTop: "26px",
    padding: "28px",
    borderRadius: "18px",
    background: "linear-gradient(145deg, rgba(255,255,255,.05), rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.10)",
    boxShadow: "0 18px 42px rgba(0,0,0,.22)",
  },

  riskTitle: {
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: 850,
    margin: "0 0 13px",
  },

  riskText: {
    color: "#d3d3d3",
    fontSize: "15px",
    lineHeight: "1.85",
    margin: 0,
  },
};
