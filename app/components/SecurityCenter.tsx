import type { CSSProperties } from "react";

const items = [
  "Always verify the official contract address before interacting with MAG COIN.",
  "Use only links published on the official MAG COIN website.",
  "Never share your private keys or recovery phrase with anyone.",
  "Beware of fake social media accounts impersonating MAG COIN.",
  "Double-check wallet addresses before sending any transaction.",
  "Report suspicious activity to the MAG COIN team through official channels."
];

export default function SecurityCenter() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Security Center</h2>

      <p style={styles.subtitle}>
        Protecting the community begins with education, verification,
        and responsible blockchain practices.
      </p>

      <div style={styles.auditNotice} className="cardHover">
        <p style={styles.auditText}>
          The MAG smart contract has been reviewed for owner, mint, pause,
          blacklist, tax, and upgrade permissions. Full findings are published
          in the{" "}
          <a href="/audit" style={styles.auditLink}>
            Master Audit Report
          </a>
          , alongside current liquidity and holder concentration disclosures.
        </p>
      </div>

      <div style={styles.card} className="cardHover">

        {items.map((item, index) => (
          <div key={index} style={styles.row}>
            <span style={styles.check}>✓</span>
            <p style={styles.text}>{item}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {

  section: {

    marginBottom: "60px",

  },

  title: {

    textAlign: "center",

    color: "#f5c542",

    fontSize: "32px",

    marginBottom: "14px",

  },

  subtitle: {

    textAlign: "center",

    color: "#d6d6d6",

    maxWidth: "760px",

    margin: "0 auto 34px",

    lineHeight: "1.7",

  },

  auditNotice: {

    maxWidth: "760px",

    margin: "0 auto 28px",

    padding: "22px 26px",

    borderRadius: "18px",

    background:
      "linear-gradient(145deg, rgba(245,197,66,.10), rgba(245,197,66,.035))",

    border: "1px solid rgba(245,197,66,.28)",

  },

  auditText: {

    color: "#e5e5e5",

    lineHeight: "1.8",

    margin: 0,
    textAlign: "center",

  },

  auditLink: {

    color: "#f5c542",
    fontWeight: 700,
    textDecoration: "underline",

  },

  card: {

    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",

    border: "1px solid #333",

    borderRadius: "22px",

    padding: "30px",

  },

  row: {

    display: "flex",

    alignItems: "flex-start",

    gap: "14px",

    marginBottom: "18px",

  },

  check: {

    color: "#f5c542",

    fontSize: "22px",

    fontWeight: "bold",

    marginTop: "-2px",

  },

  text: {

    color: "#d6d6d6",

    lineHeight: "1.8",

    margin: 0,

  },

};
