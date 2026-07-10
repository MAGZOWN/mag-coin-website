import type { CSSProperties } from "react";

const principles = [
  {
    title: "Integrity First",
    description:
      "Every important decision should prioritize long-term credibility over short-term popularity.",
  },
  {
    title: "Transparency",
    description:
      "Documentation, blockchain verification, and public communication are essential parts of development.",
  },
  {
    title: "Responsible Growth",
    description:
      "Expansion should occur only after the required technical, governance, and security foundations are in place.",
  },
  {
    title: "Community Respect",
    description:
      "Community members deserve accurate information rather than unrealistic expectations or speculation.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Every release, document, and milestone should improve the project while preserving stability and trust.",
  },
  {
    title: "Long-Term Stewardship",
    description:
      "MAG COIN is intended to mature responsibly over time rather than pursue rapid unsustainable growth.",
  },
];

export default function ProjectPhilosophy() {
  return (
    <section
      id="project-philosophy"
      style={styles.section}
      className="cardHover fadeIn"
      aria-labelledby="project-philosophy-title"
    >
      <p style={styles.label}>PROJECT PHILOSOPHY</p>

      <h2 id="project-philosophy-title" style={styles.title}>
        Professional before impressive. Trust before excitement.
      </h2>

      <p style={styles.text}>
        MAG COIN is not being developed around hype, unrealistic promises, or
        short-term speculation. The project philosophy is based on careful
        planning, transparent documentation, responsible communication, and
        long-term stewardship.
      </p>

      <p style={styles.text}>
        In blockchain, trust cannot be demanded. It must be earned through
        consistent execution, public verification, accurate records, and honest
        acknowledgement of both opportunities and risks.
      </p>

      <div style={styles.quoteBox}>
        <p style={styles.quote}>
          "The objective is not simply to launch a token. The objective is to
          build something that can still earn trust years from now."
        </p>
      </div>

      <div style={styles.divider} />

      <p style={styles.subLabel}>CORE PRINCIPLES</p>

      <div style={styles.grid}>
        {principles.map((item) => (
          <div key={item.title} style={styles.card}>
            <h3 style={styles.cardTitle}>{item.title}</h3>

            <p style={styles.cardText}>{item.description}</p>
          </div>
        ))}
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

  quoteBox: {
    marginTop: "34px",
    padding: "28px",
    borderRadius: "18px",
    background:
      "linear-gradient(135deg, rgba(245,197,66,.09), rgba(245,197,66,.03))",
    border: "1px solid rgba(245,197,66,.22)",
  },

  quote: {
    color: "#f5c542",
    fontSize: "20px",
    lineHeight: "1.8",
    fontWeight: 700,
    fontStyle: "italic",
    textAlign: "center",
    margin: 0,
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
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "18px",
  },

  card: {
    padding: "24px",
    borderRadius: "18px",
    background:
      "linear-gradient(145deg, rgba(255,255,255,.05), rgba(255,255,255,.02))",
    border: "1px solid rgba(255,255,255,.10)",
  },

  cardTitle: {
    color: "#f5c542",
    fontSize: "20px",
    marginBottom: "14px",
    fontWeight: 800,
  },

  cardText: {
    color: "#d8d8d8",
    lineHeight: "1.8",
    fontSize: "15px",
    margin: 0,
  },
};
