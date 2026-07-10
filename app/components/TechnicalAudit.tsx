import type { CSSProperties } from "react";

const technicalChecks = [
  {
    item: "Network",
    status: "Verified",
    value: "Base Mainnet",
  },
  {
    item: "Token Standard",
    status: "Verified",
    value: "ERC-20",
  },
  {
    item: "Contract Verification",
    status: "Verified",
    value: "Verified on BaseScan",
  },
  {
    item: "Token Symbol",
    status: "Verified",
    value: "MAG",
  },
  {
    item: "Decimals",
    status: "Verified",
    value: "18",
  },
  {
    item: "Total Supply",
    status: "Verified",
    value: "1,000,000,000 MAG",
  },
];

function badge(status: string): CSSProperties {
  return {
    background: "rgba(25,135,84,.14)",
    border: "1px solid rgba(25,135,84,.40)",
    color: "#63d99a",
  };
}

export default function TechnicalAudit() {
  return (
    <section style={styles.section} className="fadeIn">
      <p style={styles.label}>TECHNICAL REVIEW</p>

      <h2 style={styles.title}>
        Verified Technical Findings
      </h2>

      <p style={styles.subtitle}>
        The following information reflects the current verified technical
        characteristics of the MAG COIN smart contract and public blockchain
        records.
      </p>

      <div style={styles.grid}>
        {technicalChecks.map((item) => (
          <div
            key={item.item}
            style={styles.card}
            className="cardHover"
          >
            <div style={styles.header}>
              <h3 style={styles.heading}>
                {item.item}
              </h3>

              <span
                style={{
                  ...styles.status,
                  ...badge(item.status),
                }}
              >
                {item.status}
              </span>
            </div>

            <p style={styles.value}>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div style={styles.notice}>
        <h3 style={styles.noticeTitle}>
          Technical Observation
        </h3>

        <p style={styles.noticeText}>
          The smart contract remains intentionally simple and transparent.
          Future upgrades, integrations, or ecosystem features should be
          documented separately and should not be interpreted as existing
          functionality until implemented and verified.
        </p>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginBottom: "70px",
  },

  label: {
    color: "#f5c542",
    letterSpacing: "3px",
    textAlign: "center",
    fontSize: "13px",
    fontWeight: 800,
    marginBottom: "12px",
  },

  title: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "36px",
    fontWeight: 900,
    marginBottom: "16px",
  },

  subtitle: {
    color: "#d6d6d6",
    textAlign: "center",
    maxWidth: "850px",
    margin: "0 auto 36px",
    lineHeight: "1.8",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "22px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "20px",
    padding: "24px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    marginBottom: "16px",
    alignItems: "center",
    flexWrap: "wrap",
  },

  heading: {
    color: "#ffffff",
    fontSize: "18px",
    margin: 0,
  },

  status: {
    borderRadius: "999px",
    padding: "6px 12px",
    fontSize: "11px",
    fontWeight: 800,
  },

  value: {
    color: "#f5c542",
    fontWeight: 700,
    margin: 0,
    lineHeight: "1.8",
  },

  notice: {
    marginTop: "34px",
    padding: "30px",
    borderRadius: "20px",
    background:
      "linear-gradient(135deg, rgba(245,197,66,.10), rgba(245,197,66,.03))",
    border: "1px solid rgba(245,197,66,.24)",
  },

  noticeTitle: {
    color: "#f5c542",
    fontSize: "22px",
    marginBottom: "14px",
  },

  noticeText: {
    color: "#d6d6d6",
    lineHeight: "1.9",
    margin: 0,
  },
};
