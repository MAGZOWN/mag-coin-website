import type { CSSProperties } from "react";

import { foundationPrinciples } from "@/app/data/foundationPrinciples";

export default function FoundationPrinciples() {
  return (
    <section
      id="foundation-principles"
      style={styles.section}
      className="magCard cardHover fadeIn"
      aria-labelledby="foundation-principles-title"
    >
      <p style={styles.label}>ENDURING PRINCIPLES</p>

      <h2 id="foundation-principles-title" style={styles.title}>
        Foundation Principles
      </h2>

      <p style={styles.subtitle}>
        These principles guide every constitutional, technical, financial, and
        strategic decision made by the MAG Foundation. They are intended to
        remain stable even as the project, technology, and ecosystem evolve.
      </p>

      <div style={styles.grid}>
        {foundationPrinciples.map((item, index) => (
          <article
            key={item.title}
            style={styles.card}
            className="magCard cardHover"
          >
            <div style={styles.cardHeader}>
              <span style={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <span style={styles.icon}>◆</span>
            </div>

            <h3 style={styles.heading}>{item.title}</h3>

            <p style={styles.principle}>{item.principle}</p>

            <p style={styles.text}>{item.description}</p>
          </article>
        ))}
      </div>

      <div style={styles.safeguardsBox}>
        <h3 style={styles.safeguardsTitle}>
          Constitutional Safeguards
        </h3>

        <p style={styles.safeguardsText}>
          No amendment, policy, partnership, treasury decision, governance
          mechanism, or development initiative should weaken the
          Foundation&apos;s commitment to integrity, transparency, security,
          documentation, accountability, and long-term stewardship.
        </p>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginBottom: "70px",
    scrollMarginTop: "110px",
  },

  label: {
    color: "#f5c542",
    textAlign: "center",
    letterSpacing: "3px",
    fontWeight: 800,
    fontSize: "13px",
    marginBottom: "12px",
  },

  title: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "38px",
    lineHeight: "1.25",
    fontWeight: 900,
    marginBottom: "16px",
  },

  subtitle: {
    color: "#d6d6d6",
    textAlign: "center",
    lineHeight: "1.8",
    fontSize: "17px",
    maxWidth: "820px",
    margin: "0 auto 38px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "22px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: "20px",
    padding: "26px",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
  },

  cardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "18px",
  },

  number: {
    color: "#9ca3af",
    fontSize: "12px",
    letterSpacing: "1px",
    fontWeight: 800,
  },

  icon: {
    color: "#f5c542",
    fontSize: "18px",
    fontWeight: 900,
  },

  heading: {
    color: "#ffffff",
    fontSize: "21px",
    lineHeight: "1.4",
    fontWeight: 850,
    margin: "0 0 10px",
  },

  principle: {
    color: "#f5c542",
    fontSize: "16px",
    lineHeight: "1.7",
    fontWeight: 800,
    margin: "0 0 12px",
  },

  text: {
    color: "#d6d6d6",
    fontSize: "15px",
    lineHeight: "1.8",
    margin: 0,
  },

  safeguardsBox: {
    marginTop: "34px",
    padding: "30px",
    borderRadius: "20px",
    background:
      "linear-gradient(135deg, rgba(245,197,66,.10), rgba(245,197,66,.03))",
    border: "1px solid rgba(245,197,66,.24)",
    textAlign: "center",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
  },

  safeguardsTitle: {
    color: "#f5c542",
    fontSize: "22px",
    fontWeight: 850,
    margin: "0 0 14px",
  },

  safeguardsText: {
    color: "#d6d6d6",
    maxWidth: "900px",
    margin: "0 auto",
    fontSize: "16px",
    lineHeight: "1.9",
  },
};
