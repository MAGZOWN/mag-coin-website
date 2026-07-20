import type { CSSProperties } from "react";

const governanceStages = [
  {
    stage: "Stage 1",
    title: "Foundation-Led Stewardship",
    description:
      "During the early stage, decisions focus on security, documentation, liquidity clarity, technical verification, and responsible project administration.",
  },
  {
    stage: "Stage 2",
    title: "Structured Public Reporting",
    description:
      "As the project matures, major decisions, updates, and policy changes should be documented through public reports, changelogs, and official project channels.",
  },
  {
    stage: "Stage 3",
    title: "Community Consultation",
    description:
      "The project may gradually introduce structured community feedback, proposal discussions, and consultation on clearly defined non-security-critical matters.",
  },
  {
    stage: "Stage 4",
    title: "Broader Governance Participation",
    description:
      "Future participation mechanisms may be considered only when the technical, legal, security, and operational foundations are strong enough to support them responsibly.",
  },
];

const governancePrinciples = [
  "Security-sensitive decisions should never be rushed.",
  "Important decisions should be documented before implementation.",
  "Governance must not be used to create false decentralization claims.",
  "Treasury and liquidity decisions should remain traceable and reviewable.",
  "Community participation should be introduced gradually and responsibly.",
  "No governance mechanism should weaken contract, wallet, or treasury security.",
];

export default function Governance() {
  return (
    <section
      id="governance"
      style={styles.section}
      className="magCard cardHover fadeIn"
      aria-labelledby="governance-title"
    >
      <p style={styles.label}>GOVERNANCE PHILOSOPHY</p>

      <h2 id="governance-title" style={styles.title}>
        Decisions should strengthen trust, not chase attention.
      </h2>

      <p style={styles.text}>
        MAG COIN governance will develop gradually and responsibly. During the
        early stages, project decisions will prioritize documentation,
        transparency, technical security, treasury discipline, and long-term
        sustainability.
      </p>

      <p style={styles.text}>
        The project will not claim to be decentralized merely for appearance.
        Governance participation should expand only when the required
        operational, technical, legal, and security foundations are in place.
      </p>

      <p style={styles.text}>
        The guiding principle is simple: every meaningful decision should
        protect the credibility of the project and serve the long-term
        interests of the ecosystem.
      </p>

      <div style={styles.divider} />

      <p style={styles.subLabel}>GOVERNANCE DEVELOPMENT</p>

      <h3 style={styles.subTitle}>A Gradual and Responsible Framework</h3>

      <div style={styles.stageGrid}>
        {governanceStages.map((item) => (
          <div
            key={item.stage}
            style={styles.stageCard}
            className="magCard cardHover"
          >
            <span style={styles.stageBadge}>{item.stage}</span>

            <h4 style={styles.stageTitle}>{item.title}</h4>

            <p style={styles.stageText}>{item.description}</p>
          </div>
        ))}
      </div>

      <div
        style={styles.principlesBox}
        className="magCard cardHover"
      >
        <p style={styles.principlesTitle}>Governance Principles</p>

        <ul style={styles.list}>
          {governancePrinciples.map((principle) => (
            <li key={principle} style={styles.listItem}>
              {principle}
            </li>
          ))}
        </ul>
      </div>

      <div
        style={styles.noticeBox}
        className="magCard cardHover"
      >
        <p style={styles.noticeTitle}>Current Governance Position</p>

        <p style={styles.noticeText}>
          MAG COIN is currently in an early foundation-led stage. No public DAO,
          token-voting system, or decentralized treasury mechanism is being
          claimed at this time. Any future governance expansion should be
          introduced transparently, documented publicly, and reviewed for
          security and operational risk before implementation.
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

  divider: {
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(245,197,66,.35), transparent)",
    margin: "42px 0",
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
    margin: "0 0 24px",
    fontWeight: 850,
  },

  stageGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "18px",
  },

  stageCard: {
    padding: "24px",
    borderRadius: "18px",
    background:
      "linear-gradient(145deg, rgba(255,255,255,.055), rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.10)",
    boxShadow: "0 16px 38px rgba(0,0,0,.22)",
  },

  stageBadge: {
    display: "inline-block",
    color: "#f5c542",
    background: "rgba(245,197,66,.09)",
    border: "1px solid rgba(245,197,66,.24)",
    borderRadius: "999px",
    padding: "7px 12px",
    fontSize: "12px",
    fontWeight: 800,
    marginBottom: "16px",
  },

  stageTitle: {
    color: "#ffffff",
    fontSize: "19px",
    lineHeight: "1.4",
    margin: "0 0 12px",
    fontWeight: 800,
  },

  stageText: {
    color: "#d6d6d6",
    fontSize: "15px",
    lineHeight: "1.8",
    margin: 0,
  },

  principlesBox: {
    marginTop: "34px",
    padding: "28px",
    borderRadius: "18px",
    background:
      "linear-gradient(145deg, rgba(245,197,66,.10), rgba(245,197,66,.035))",
    border: "1px solid rgba(245,197,66,.23)",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
  },

  principlesTitle: {
    color: "#f5c542",
    fontSize: "19px",
    fontWeight: 850,
    margin: "0 0 18px",
  },

  list: {
    margin: 0,
    paddingLeft: "22px",
    color: "#d8d8d8",
  },

  listItem: {
    marginBottom: "12px",
    lineHeight: "1.75",
    fontSize: "15px",
  },

  noticeBox: {
    marginTop: "28px",
    padding: "26px",
    borderRadius: "18px",
    background:
      "linear-gradient(145deg, rgba(255,255,255,.055), rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.10)",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
  },

  noticeTitle: {
    color: "#ffffff",
    fontSize: "18px",
    fontWeight: 850,
    margin: "0 0 12px",
  },

  noticeText: {
    color: "#d1d1d1",
    fontSize: "15px",
    lineHeight: "1.85",
    margin: 0,
  },
};
