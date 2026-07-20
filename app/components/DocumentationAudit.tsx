import type { CSSProperties } from "react";

const documents = [
  {
    name: "Whitepaper",
    status: "Completed",
    description:
      "Founder Edition with project philosophy, governance, tokenomics, roadmap, transparency, and risk disclosure.",
  },
  {
    name: "Constitution",
    status: "Completed",
    description:
      "Foundation governance framework defining stewardship, principles, accountability, and amendments.",
  },
  {
    name: "Tokenomics",
    status: "Completed",
    description:
      "Supply, liquidity, governance, utility, and concentration disclosures aligned with verified project information.",
  },
  {
    name: "Roadmap",
    status: "Completed",
    description:
      "Living roadmap documenting completed milestones, current progress, and future strategic direction.",
  },
  {
    name: "Transparency",
    status: "Operational",
    description:
      "Transparency framework providing official links, verification records, and project updates.",
  },
  {
    name: "Security",
    status: "In Progress",
    description:
      "Security policies and operational safeguards continue to be expanded as the project evolves.",
  },
];

function badge(status: string): CSSProperties {
  if (status === "Completed" || status === "Operational") {
    return {
      background: "rgba(25,135,84,.14)",
      border: "1px solid rgba(25,135,84,.40)",
      color: "#63d99a",
    };
  }

  return {
    background: "rgba(13,110,253,.13)",
    border: "1px solid rgba(13,110,253,.38)",
    color: "#7eb3ff",
  };
}

export default function DocumentationAudit() {
  return (
    <section style={styles.section} className="magCard cardHover fadeIn">
      <p style={styles.label}>DOCUMENTATION REVIEW</p>

      <h2 style={styles.title}>
        Public Documentation Assessment
      </h2>

      <p style={styles.subtitle}>
        Documentation is a core part of MAG COIN's commitment to transparency.
        Every major document is reviewed for consistency, clarity, and alignment
        with verified project information.
      </p>

      <div style={styles.grid}>
        {documents.map((doc) => (
          <article
            key={doc.name}
            style={styles.card}
            className="magCard cardHover"
          >
            <div style={styles.header}>
              <h3 style={styles.heading}>{doc.name}</h3>

              <span
                style={{
                  ...styles.status,
                  ...badge(doc.status),
                }}
              >
                {doc.status}
              </span>
            </div>

            <p style={styles.text}>{doc.description}</p>
          </article>
        ))}
      </div>

      <div style={styles.box}>
        <h3 style={styles.boxTitle}>
          Documentation Standard
        </h3>

        <p style={styles.boxText}>
          MAG COIN follows a documentation-first approach. Significant changes
          should be reflected consistently across the website, official reports,
          and public communications to preserve transparency and long-term
          trust.
        </p>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    boxShadow: "0 22px 50px rgba(0,0,0,.28)",
    marginBottom: "70px",
  },

  label: {
    color: "#f5c542",
    letterSpacing: "3px",
    textAlign: "center",
    fontSize: "13px",
    fontWeight: 800,
    marginBottom: "12px",
  },

  title: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "36px",
    fontWeight: 900,
    marginBottom: "16px",
  },

  subtitle: {
    color: "#d6d6d6",
    textAlign: "center",
    maxWidth: "850px",
    margin: "0 auto 36px",
    lineHeight: "1.8",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "22px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "20px",
    padding: "24px",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "12px",
    marginBottom: "14px",
    flexWrap: "wrap",
  },

  heading: {
    color: "#ffffff",
    fontSize: "20px",
    margin: 0,
  },

  status: {
    borderRadius: "999px",
    padding: "6px 12px",
    fontSize: "11px",
    fontWeight: 800,
  },

  text: {
    color: "#d6d6d6",
    lineHeight: "1.8",
    margin: 0,
    fontSize: "15px",
  },

  box: {
    marginTop: "34px",
    padding: "30px",
    borderRadius: "20px",
    background:
      "linear-gradient(135deg, rgba(245,197,66,.10), rgba(245,197,66,.03))",
    border: "1px solid rgba(245,197,66,.24)",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
  },

  boxTitle: {
    color: "#f5c542",
    fontSize: "22px",
    marginBottom: "14px",
  },

  boxText: {
    color: "#d6d6d6",
    lineHeight: "1.9",
    margin: 0,
  },
};
