import type { CSSProperties } from "react";

const governancePrinciples = [
  "Governance should strengthen long-term trust rather than short-term popularity.",
  "Major governance decisions should be documented and communicated transparently.",
  "Material policy changes should be supported by verifiable public documentation.",
  "Treasury stewardship should prioritize sustainability, security, and accountability.",
  "Future governance participation should be introduced gradually and responsibly.",
  "Historical governance records should remain available whenever reasonably possible.",
];

export default function TokenGovernance() {
  return (
    <section
      id="token-governance"
      style={styles.section}
      className="cardHover fadeIn"
      aria-labelledby="token-governance-title"
    >
      <p style={styles.label}>GOVERNANCE &amp; STEWARDSHIP</p>

      <h2 id="token-governance-title" style={styles.title}>
        Token decisions should strengthen long-term trust.
      </h2>

      <p style={styles.text}>
        Governance of MAG COIN should evolve responsibly as the ecosystem,
        community, and operational capabilities mature. The Foundation will
        avoid making governance commitments that cannot yet be implemented or
        verified.
      </p>

      <p style={styles.text}>
        Stewardship extends beyond technical development. It includes responsible
        treasury management, transparent communication, accurate documentation,
        security oversight, and preserving the long-term credibility of the MAG
        ecosystem.
      </p>

      <div style={styles.principlesBox}>
        <h3 style={styles.boxTitle}>
          Governance Principles
        </h3>

        <ul style={styles.list}>
          {governancePrinciples.map((principle) => (
            <li key={principle} style={styles.listItem}>
              {principle}
            </li>
          ))}
        </ul>
      </div>

      <div style={styles.notice}>
        <h3 style={styles.noticeTitle}>
          Responsible Governance Commitment
        </h3>

        <p style={styles.noticeText}>
          Governance mechanisms, voting systems, treasury policies, delegation,
          or community participation models should only be introduced after
          appropriate technical, operational, and security readiness. Until
          then, governance decisions remain guided by the Foundation's published
          Constitution, Whitepaper, and Transparency commitments.
        </p>
      </div>

      <div style={styles.signature}>
        Built with Integrity • Transparency • Long-Term Stewardship
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginBottom: "70px",
    background:
      "linear-gradient(145deg, rgba(245,197,66,.10), rgba(5,5,5,.96))",
    border: "1px solid rgba(245,197,66,.35)",
    borderRadius: "24px",
    padding: "50px 44px",
    color: "#e5e5e5",
    textAlign: "center",
    scrollMarginTop: "110px",
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
    marginBottom: "28px",
    fontWeight: 900,
  },

  text: {
    color: "#d6d6d6",
    fontSize: "18px",
    lineHeight: "1.9",
    maxWidth: "860px",
    margin: "0 auto 22px",
  },

  principlesBox: {
    marginTop: "36px",
    background: "rgba(245,197,66,.08)",
    border: "1px solid rgba(245,197,66,.25)",
    borderRadius: "18px",
    padding: "28px",
    textAlign: "left",
    maxWidth: "900px",
    marginLeft: "auto",
    marginRight: "auto",
  },

  boxTitle: {
    color: "#f5c542",
    marginBottom: "18px",
    fontSize: "22px",
    fontWeight: 800,
  },

  list: {
    margin: 0,
    paddingLeft: "22px",
  },

  listItem: {
    color: "#d6d6d6",
    lineHeight: "1.9",
    fontSize: "16px",
    marginBottom: "10px",
  },

  notice: {
    marginTop: "32px",
    padding: "28px",
    borderRadius: "18px",
    background: "rgba(255,255,255,.035)",
    border: "1px solid rgba(255,255,255,.10)",
  },

  noticeTitle: {
    color: "#ffffff",
    fontSize: "21px",
    fontWeight: 850,
    marginBottom: "14px",
  },

  noticeText: {
    color: "#d6d6d6",
    fontSize: "16px",
    lineHeight: "1.9",
    margin: 0,
  },

  signature: {
    marginTop: "34px",
    color: "#f5c542",
    fontWeight: 800,
    letterSpacing: "1px",
    fontSize: "15px",
  },
};
