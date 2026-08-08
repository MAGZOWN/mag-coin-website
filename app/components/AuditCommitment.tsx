import type { CSSProperties } from "react";

const priorities = [
  "Complete token-logo propagation across major trading and data platforms.",
  "Keep the Master Audit Report v2.0 accurate as new features or code changes are introduced.",
  "Continue expanding security documentation and operational safeguards.",
  "Keep liquidity, holder concentration, and project-controlled supply clearly disclosed.",
  "Maintain consistent information across the website, BaseScan, DEX platforms, and official documents.",
  "Avoid paid shortcuts, unsupported claims, and premature listing promises.",
];

export default function AuditCommitment() {
  return (
    <section
      id="audit-commitment"
      style={styles.section}
      className="magCard cardHover fadeIn"
      aria-labelledby="audit-commitment-title"
    >
      <p style={styles.label}>AUDIT CONCLUSION</p>

      <h2 id="audit-commitment-title" style={styles.title}>
        Progress is credible only when it remains verifiable.
      </h2>

      <p style={styles.text}>
        MAG COIN has progressed from an early token deployment into a documented
        Base ecosystem project with a verified smart contract, an operational
        website, active MAG/USDC liquidity, structured governance documents, and
        a growing transparency framework.
      </p>

      <p style={styles.text}>
        The project is not being presented as risk-free, fully decentralized, or
        commercially mature. Liquidity remains limited, supply concentration
        remains material, token-profile branding is still incomplete across
        trading platforms, and external legal, financial, and independent
        technical review may still be required before wider promotion or
        institutional engagement.
      </p>

      <div style={styles.priorityBox}>
        <h3 style={styles.priorityTitle}>Priority Actions</h3>

        <ul style={styles.list}>
          {priorities.map((priority) => (
            <li key={priority} style={styles.listItem}>
              {priority}
            </li>
          ))}
        </ul>
      </div>

      <div style={styles.verdictBox}>
        <h3 style={styles.verdictTitle}>Current Audit Verdict</h3>

        <p style={styles.verdictText}>
          MAG COIN has a strong documented foundation for an early-stage
          blockchain project. The verified contract is simple, fixed-supply,
          and does not expose owner, mint, pause, blacklist, tax, or upgrade
          controls in the reviewed source. Public documentation and website
          infrastructure have improved substantially. The next practical
          priority is ecosystem identity: submitting the official MAG COIN logo
          and metadata to the relevant token-information and trading platforms.
        </p>
      </div>

      <div style={styles.disclaimer}>
        <h3 style={styles.disclaimerTitle}>Important Limitation</h3>

        <p style={styles.disclaimerText}>
          This project review is an evidence-based internal assessment and does
          not replace an independent third-party smart-contract audit, legal
          opinion, financial audit, tax advice, or investment due diligence. No
          statement in this report guarantees future performance, liquidity,
          market value, adoption, or regulatory treatment.
        </p>
      </div>

      <div style={styles.links}>
        <a
          href="/transparency"
          style={styles.primaryLink}
          className="primaryButton"
        >
          Open Transparency Center
        </a>

        <a
          href="/security"
          style={styles.secondaryLink}
          className="secondaryButton"
        >
          Review Security
        </a>

        <a
          href="/contact"
          style={styles.secondaryLink}
          className="secondaryButton"
        >
          Contact MAG COIN
        </a>
      </div>

      <div style={styles.signature}>
        Built with Integrity • Documented with Transparency • Reviewed
        Continuously
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    boxShadow: "0 22px 50px rgba(0,0,0,.28)",
    marginTop: "40px",
    marginBottom: "70px",
    padding: "50px 44px",
    textAlign: "center",
    background:
      "linear-gradient(145deg, rgba(245,197,66,.10), rgba(5,5,5,.96))",
    border: "1px solid rgba(245,197,66,.35)",
    borderRadius: "24px",
    color: "#e5e5e5",
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
    maxWidth: "900px",
    margin: "0 auto 22px",
  },

  priorityBox: {
    marginTop: "36px",
    maxWidth: "900px",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "30px",
    textAlign: "left",
    borderRadius: "20px",
    background: "rgba(245,197,66,.08)",
    border: "1px solid rgba(245,197,66,.24)",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
  },

  priorityTitle: {
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
    lineHeight: "1.85",
    marginBottom: "11px",
  },

  verdictBox: {
    marginTop: "28px",
    padding: "30px",
    borderRadius: "20px",
    background: "linear-gradient(145deg, rgba(255,255,255,.05), rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.11)",
    boxShadow: "0 18px 42px rgba(0,0,0,.22)",
  },

  verdictTitle: {
    color: "#ffffff",
    fontSize: "22px",
    fontWeight: 850,
    margin: "0 0 15px",
  },

  verdictText: {
    color: "#d6d6d6",
    fontSize: "16px",
    lineHeight: "1.9",
    margin: 0,
  },

  disclaimer: {
    marginTop: "26px",
    padding: "28px",
    borderRadius: "18px",
    background: "rgba(0,0,0,.24)",
    border: "1px solid rgba(245,197,66,.20)",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
  },

  disclaimerTitle: {
    color: "#f5c542",
    fontSize: "20px",
    fontWeight: 850,
    margin: "0 0 13px",
  },

  disclaimerText: {
    color: "#cfcfcf",
    fontSize: "14px",
    lineHeight: "1.85",
    margin: 0,
  },

  links: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "14px",
    marginTop: "30px",
  },

  primaryLink: {
    background: "#f5c542",
    color: "#000000",
    border: "2px solid #f5c542",
    borderRadius: "999px",
    padding: "13px 22px",
    textDecoration: "none",
    fontWeight: 850,
    fontSize: "13px",
  },

  secondaryLink: {
    background: "transparent",
    color: "#f5c542",
    border: "2px solid rgba(245,197,66,.55)",
    borderRadius: "999px",
    padding: "13px 22px",
    textDecoration: "none",
    fontWeight: 850,
    fontSize: "13px",
  },

  signature: {
    marginTop: "34px",
    color: "#f5c542",
    fontSize: "15px",
    fontWeight: 800,
    letterSpacing: "1px",
  },
};
