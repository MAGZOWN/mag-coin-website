import type { CSSProperties } from "react";

export default function ConstitutionCommitment() {
  return (
    <section style={styles.section} className="cardHover fadeIn">
      <p style={styles.label}>FOUNDATION COMMITMENT</p>

      <h2 style={styles.title}>
        The Constitution exists to protect the mission, not the individuals.
      </h2>

      <p style={styles.text}>
        The MAG Foundation is committed to preserving the principles established
        within this Constitution through responsible stewardship, transparent
        governance, careful documentation, and long-term accountability. Every
        decision should strengthen trust, protect the ecosystem, and serve the
        interests of present and future community members.
      </p>

      <p style={styles.text}>
        This Constitution is a living governance document. Future amendments may
        be adopted only through documented, transparent processes while
        preserving historical versions for public reference. Institutional
        memory and accountability remain permanent responsibilities of the
        Foundation.
      </p>

      <div style={styles.commitmentBox}>
        <h3 style={styles.boxTitle}>Constitutional Commitments</h3>

        <ul style={styles.list}>
          <li>Protect integrity above popularity.</li>
          <li>Maintain transparent governance.</li>
          <li>Preserve historical documentation.</li>
          <li>Strengthen security continuously.</li>
          <li>Act responsibly for future generations.</li>
        </ul>
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
    textAlign: "center",
    color: "#e5e5e5",
  },

  label: {
    color: "#f5c542",
    letterSpacing: "3px",
    fontWeight: "bold",
    fontSize: "13px",
    marginBottom: "18px",
  },

  title: {
    color: "#ffffff",
    fontSize: "36px",
    lineHeight: "1.3",
    marginBottom: "28px",
    fontWeight: 800,
  },

  text: {
    color: "#d6d6d6",
    fontSize: "18px",
    lineHeight: "1.9",
    maxWidth: "860px",
    margin: "0 auto 22px",
  },

  commitmentBox: {
    marginTop: "36px",
    background: "rgba(245,197,66,.08)",
    border: "1px solid rgba(245,197,66,.25)",
    borderRadius: "18px",
    padding: "28px",
    maxWidth: "760px",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "left",
  },

  boxTitle: {
    color: "#f5c542",
    marginBottom: "18px",
    fontSize: "22px",
    fontWeight: 700,
  },

  list: {
    color: "#d6d6d6",
    lineHeight: "2",
    paddingLeft: "22px",
    margin: 0,
    fontSize: "17px",
  },

  signature: {
    marginTop: "34px",
    color: "#f5c542",
    fontWeight: 700,
    letterSpacing: "1px",
    fontSize: "15px",
  },
};
