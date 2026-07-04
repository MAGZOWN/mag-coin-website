import type { CSSProperties } from "react";

const articles = [
  {
    title: "Preamble",
    text:
      "The MAG Foundation is established to steward the MAG ecosystem with integrity, transparency, accountability, and long-term responsibility.",
  },
  {
    title: "Article I — Purpose",
    text:
      "The purpose of the MAG Foundation is to support, maintain, document, and responsibly develop the MAG ecosystem.",
  },
  {
    title: "Article II — Foundational Principles",
    text:
      "The Foundation shall operate according to integrity, transparency, documentation, stewardship, sustainability, accountability, continuous improvement, and community respect.",
  },
  {
    title: "Article III — Governance",
    text:
      "The MAG Foundation shall be governed with honesty, accountability, transparency, and long-term responsibility.",
  },
  {
    title: "Article IV — Transparency",
    text:
      "Transparency is a permanent responsibility of the MAG Foundation and shall never be sacrificed for short-term marketing advantage.",
  },
  {
    title: "Article V — Treasury Stewardship",
    text:
      "Foundation-controlled assets shall be managed responsibly for the long-term strength of the MAG ecosystem.",
  },
  {
    title: "Article VI — Documentation",
    text:
      "Documentation shall preserve institutional memory and support continuity for future contributors.",
  },
  {
    title: "Article VII — Community",
    text:
      "The Foundation shall communicate respectfully, honestly, and responsibly with the community.",
  },
  {
    title: "Article VIII — Amendments",
    text:
      "This Constitution may evolve responsibly through documented decisions while preserving historical versions.",
  },
];

export default function ConstitutionArticles() {
  return (
    <section style={styles.section}>
      {articles.map((article) => (
        <div key={article.title} style={styles.card} className="cardHover">
          <h2 style={styles.heading}>{article.title}</h2>
          <p style={styles.text}>{article.text}</p>
        </div>
      ))}
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "24px",
    marginBottom: "60px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid #333",
    borderRadius: "22px",
    padding: "30px",
    color: "#e5e5e5",
  },

  heading: {
    color: "#f5c542",
    marginBottom: "14px",
    fontSize: "22px",
  },

  text: {
    color: "#d6d6d6",
    lineHeight: "1.8",
    margin: 0,
  },
};
