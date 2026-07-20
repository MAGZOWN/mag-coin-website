import type { CSSProperties } from "react";

const risks = [
  {
    title: "Market Risk",
    description:
      "Digital assets may experience significant price volatility. Market value can increase or decrease substantially over short or long periods.",
  },
  {
    title: "Technology Risk",
    description:
      "Blockchain networks, wallets, smart contracts, software, and supporting infrastructure may experience bugs, failures, outages, or unexpected technical issues.",
  },
  {
    title: "Regulatory Risk",
    description:
      "Laws and regulations relating to digital assets may change across jurisdictions and could affect the project, its participants, or related services.",
  },
  {
    title: "Liquidity Risk",
    description:
      "Trading liquidity may fluctuate over time. Participants may not always be able to buy or sell tokens at expected prices or volumes.",
  },
  {
    title: "Operational Risk",
    description:
      "Project priorities, resources, documentation, partnerships, and development timelines may evolve as the ecosystem matures.",
  },
  {
    title: "User Responsibility",
    description:
      "Every participant is responsible for protecting wallet credentials, verifying official information, and exercising appropriate security practices.",
  },
];

export default function RiskDisclosure() {
  return (
    <section
      id="risk-disclosure"
      style={styles.section}
      className="magCard cardHover fadeIn"
      aria-labelledby="risk-disclosure-title"
    >
      <p style={styles.kicker}>RISK DISCLOSURE</p>

      <h2
        id="risk-disclosure-title"
        style={styles.title}
      >
        Responsible participation requires independent research.
      </h2>

      <p style={styles.text}>
        MAG COIN does not promise guaranteed returns, future prices,
        investment performance, or financial outcomes. Participation in
        blockchain networks and digital assets involves risks that should be
        understood before making any decision.
      </p>

      <div style={styles.divider} />

      <div style={styles.grid}>
        {risks.map((risk) => (
          <article key={risk.title} style={styles.card} className="magCard cardHover">
            <h3 style={styles.cardTitle}>{risk.title}</h3>

            <p style={styles.cardText}>
              {risk.description}
            </p>
          </article>
        ))}
      </div>

      <div style={styles.notice} className="magCard cardHover">
        <h3 style={styles.noticeTitle}>
          Important Notice
        </h3>

        <p style={styles.noticeText}>
          Nothing contained within this Whitepaper, the MAG COIN website,
          project documentation, or public communications should be interpreted
          as investment, legal, financial, accounting, or tax advice.
        </p>

        <p style={styles.noticeText}>
          Prospective participants should conduct their own independent
          research, verify official blockchain information, assess their own
          financial circumstances, and consult appropriately qualified
          professional advisers where necessary before making decisions.
        </p>
      </div>

      <div style={styles.reminder}>
        <strong>Always Verify:</strong>

        <p style={styles.reminderText}>
          Official website • BaseScan contract • Official documentation •
          Official communication channels
        </p>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginTop: "28px",
    marginBottom: "60px",
    scrollMarginTop: "110px",
    background:
      "linear-gradient(145deg, rgba(245,197,66,.10), rgba(5,5,5,.96))",
    border: "1px solid rgba(245,197,66,.35)",
    borderRadius: "24px",
    padding: "44px",
    color: "#e5e5e5",
    boxShadow: "0 18px 50px rgba(0,0,0,.28)",
  },

  kicker: {
    color: "#f5c542",
    fontSize: "13px",
    letterSpacing: "3px",
    fontWeight: 800,
    marginBottom: "16px",
  },

  title: {
    color: "#ffffff",
    fontSize: "34px",
    lineHeight: "1.3",
    marginBottom: "24px",
    fontWeight: 850,
  },

  text: {
    color: "#d6d6d6",
    fontSize: "18px",
    lineHeight: "1.9",
    maxWidth: "900px",
    margin: "0 auto 24px",
    textAlign: "center",
  },

  divider: {
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(245,197,66,.35), transparent)",
    margin: "40px 0",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "18px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(255,255,255,.055), rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "18px",
    padding: "24px",
    boxShadow: "0 16px 38px rgba(0,0,0,.22)",
  },

  cardTitle: {
    color: "#f5c542",
    fontSize: "20px",
    marginBottom: "12px",
    fontWeight: 800,
  },

  cardText: {
    color: "#d6d6d6",
    lineHeight: "1.8",
    fontSize: "15px",
    margin: 0,
  },

  notice: {
    marginTop: "34px",
    padding: "28px",
    borderRadius: "18px",
    background: "linear-gradient(145deg, rgba(245,197,66,.10), rgba(245,197,66,.035))",
    border: "1px solid rgba(245,197,66,.22)",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
  },

  noticeTitle: {
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: 850,
    margin: "0 0 14px",
  },

  noticeText: {
    color: "#d3d3d3",
    fontSize: "15px",
    lineHeight: "1.85",
    margin: "0 0 14px",
  },

  reminder: {
    marginTop: "26px",
    textAlign: "center",
    color: "#f5c542",
  },

  reminderText: {
    marginTop: "12px",
    color: "#d6d6d6",
    fontSize: "15px",
    lineHeight: "1.8",
  },
};
