import type { CSSProperties } from "react";

const documents = [
  {
    title: "Whitepaper",
    description:
      "The official technical and strategic overview of the MAG Foundation.",
    status: "Available",
    link: "/whitepaper",
  },
  {
    title: "Constitution",
    description:
      "The governance framework guiding the Foundation and its long-term stewardship.",
    status: "In Progress",
    link: "/constitution",
  },
  {
    title: "Foundation Charter",
    description:
      "Defines the mission, vision, values, and purpose of the MAG Foundation.",
    status: "Internal",
    link: "#",
  },
  {
    title: "Manifesto",
    description:
      "The guiding philosophy and principles behind MAG COIN.",
    status: "Internal",
    link: "#",
  },
];

export default function FoundationDocuments() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Foundation Documents</h2>

      <p style={styles.subtitle}>
        Every important aspect of the MAG Foundation is documented to promote
        transparency, accountability, and long-term trust.
      </p>

      <div style={styles.grid}>
        {documents.map((doc) => (
          <a
            key={doc.title}
            href={doc.link}
            style={styles.card}
            className="cardHover"
          >
            <h3 style={styles.heading}>{doc.title}</h3>

            <p style={styles.description}>{doc.description}</p>

            <span style={styles.badge}>{doc.status}</span>
          </a>
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
    color: "#f5c542",
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "14px",
  },

  subtitle: {
    color: "#d6d6d6",
    textAlign: "center",
    lineHeight: "1.7",
    maxWidth: "760px",
    margin: "0 auto 34px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "22px",
  },

  card: {
    textDecoration: "none",
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid #333",
    borderRadius: "20px",
    padding: "26px",
    color: "#ffffff",
    display: "block",
  },

  heading: {
    color: "#f5c542",
    marginBottom: "12px",
    fontSize: "22px",
  },

  description: {
    color: "#d6d6d6",
    lineHeight: "1.7",
    marginBottom: "18px",
  },

  badge: {
    display: "inline-block",
    background: "rgba(245,197,66,.10)",
    border: "1px solid rgba(245,197,66,.35)",
    color: "#f5c542",
    padding: "8px 14px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "bold",
  },
};
