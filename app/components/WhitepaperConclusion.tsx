import type { CSSProperties } from "react";

export default function WhitepaperConclusion() {
  return (
    <section
      style={styles.section}
      className="cardHover fadeIn"
    >
      <h2 className="goldGradient" style={styles.title}>
        Founder Commitment
      </h2>

      <p style={styles.text}>
        MAG COIN is being developed with a long-term vision rather than
        short-term speculation. Every major milestone will be approached
        carefully, documented transparently, and implemented responsibly.
      </p>

      <p style={styles.text}>
        This Whitepaper is a living document. As MAG COIN evolves, new
        information, governance updates, security improvements, and ecosystem
        developments will be published through official project channels.
      </p>

      <div style={styles.signature}>
        Built with Integrity • Transparency • Long-Term Stewardship
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginTop: "40px",
    marginBottom: "60px",
    textAlign: "center",
    padding: "50px 40px",
    background:
      "linear-gradient(145deg, rgba(18,18,18,0.96), rgba(5,5,5,0.96))",
    border: "1px solid #333",
    borderRadius: "24px",
    color: "#e5e5e5",
  },

  title: {
    fontSize: "32px",
    marginBottom: "24px",
    fontWeight: 900,
  },

  text: {
    maxWidth: "850px",
    margin: "0 auto 22px",
    lineHeight: "1.9",
    fontSize: "17px",
    color: "#d6d6d6",
  },

  signature: {
    marginTop: "30px",
    color: "#f5c542",
    fontWeight: 700,
    letterSpacing: "1px",
    fontSize: "15px",
  },
};
