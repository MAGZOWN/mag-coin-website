import type { CSSProperties } from "react";

const articles = [
  {
    number: "Preamble",
    title: "Purpose of the Constitution",
    text:
      "This Constitution establishes the enduring principles, governance framework, and stewardship responsibilities of the MAG Foundation. It is intended to provide long-term continuity, preserve institutional knowledge, and guide responsible development of the MAG ecosystem.",
  },
  {
    number: "Article I",
    title: "Mission and Purpose",
    text:
      "The Foundation exists to support, maintain, document, and responsibly develop the MAG ecosystem. Every major decision should strengthen long-term sustainability, transparency, and public confidence.",
  },
  {
    number: "Article II",
    title: "Foundational Principles",
    text:
      "Integrity, transparency, accountability, stewardship, sustainability, responsible communication, continuous improvement, and respect for the community shall remain the permanent guiding principles of the Foundation.",
  },
  {
    number: "Article III",
    title: "Governance",
    text:
      "Governance decisions should be documented, evidence-based, and made with the long-term interests of the ecosystem in mind. Short-term popularity shall never outweigh responsible stewardship.",
  },
  {
    number: "Article IV",
    title: "Transparency",
    text:
      "Material project information should be communicated accurately through official channels. Public records, blockchain verification, and documentation shall be maintained whenever reasonably possible.",
  },
  {
    number: "Article V",
    title: "Treasury Stewardship",
    text:
      "Foundation-controlled assets shall be managed prudently and only in ways that support the project's stability, security, and long-term objectives. Decisions affecting treasury resources should be documented.",
  },
  {
    number: "Article VI",
    title: "Documentation",
    text:
      "Documentation shall preserve institutional memory, provide continuity for future contributors, and ensure that important project knowledge remains accessible over time.",
  },
  {
    number: "Article VII",
    title: "Community",
    text:
      "The Foundation shall communicate honestly, respectfully, and responsibly. Community members should receive accurate information rather than unrealistic expectations or promotional exaggeration.",
  },
  {
    number: "Article VIII",
    title: "Amendments",
    text:
      "This Constitution may evolve through documented revisions when necessary. Historical versions should be preserved to maintain transparency and accountability.",
  },
];

export default function ConstitutionArticles() {
  return (
    <section
      id="constitution-articles"
      style={styles.section}
      className="fadeIn"
    >
      <div style={styles.header}>
        <p style={styles.label}>FOUNDATIONAL ARTICLES</p>

        <h2 style={styles.title}>
          Constitutional Framework
        </h2>

        <p style={styles.intro}>
          The following articles establish the enduring governance principles of
          the MAG Foundation. They are intended to guide decision-making,
          preserve transparency, and protect the long-term interests of the MAG
          ecosystem.
        </p>
      </div>

      <div style={styles.grid}>
        {articles.map((article) => (
          <article
            key={article.title}
            style={styles.card}
            className="cardHover"
          >
            <span style={styles.badge}>
              {article.number}
            </span>

            <h3 style={styles.heading}>
              {article.title}
            </h3>

            <p style={styles.text}>
              {article.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginBottom: "60px",
  },

  header: {
    textAlign: "center",
    marginBottom: "40px",
  },

  label: {
    color: "#f5c542",
    letterSpacing: "3px",
    fontWeight: 800,
    fontSize: "13px",
    marginBottom: "14px",
  },

  title: {
    color: "#ffffff",
    fontSize: "38px",
    fontWeight: 900,
    marginBottom: "20px",
  },

  intro: {
    color: "#d6d6d6",
    maxWidth: "820px",
    margin: "0 auto",
    lineHeight: "1.8",
    fontSize: "17px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "24px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: "22px",
    padding: "30px",
    color: "#e5e5e5",
    boxShadow: "0 12px 30px rgba(0,0,0,.25)",
  },

  badge: {
    display: "inline-block",
    color: "#f5c542",
    background: "rgba(245,197,66,.10)",
    border: "1px solid rgba(245,197,66,.25)",
    borderRadius: "999px",
    padding: "7px 14px",
    fontSize: "12px",
    fontWeight: 800,
    marginBottom: "18px",
  },

  heading: {
    color: "#f5c542",
    marginBottom: "14px",
    fontSize: "22px",
    lineHeight: "1.4",
    fontWeight: 850,
  },

  text: {
    color: "#d6d6d6",
    lineHeight: "1.9",
    fontSize: "16px",
    margin: 0,
  },
};
