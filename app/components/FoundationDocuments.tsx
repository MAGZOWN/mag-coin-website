import type { CSSProperties } from "react";

import { foundationDocuments } from "../data/foundationDocuments";
import SectionTitle from "./ui/SectionTitle";
import StatusBadge from "./ui/StatusBadge";

function getBadgeVariant(status: string) {
  const normalized = status.toLowerCase();

  if (normalized.includes("complete") || normalized.includes("published")) {
    return "completed" as const;
  }

  if (normalized.includes("live")) {
    return "live" as const;
  }

  if (normalized.includes("progress")) {
    return "in-progress" as const;
  }

  if (normalized.includes("pending") || normalized.includes("soon")) {
    return "pending" as const;
  }

  return "planned" as const;
}

export default function FoundationDocuments() {
  return (
    <section style={styles.section}>
      <SectionTitle
        subtitle="Every major MAG COIN document should be easy to find, easy to verify, and connected to the relevant Trust Center page."
      >
        Foundation Documents
      </SectionTitle>

      <div style={styles.grid}>
        {foundationDocuments.map((doc) => (
          <a
            key={doc.title}
            href={doc.link}
            style={styles.card}
            className="cardHover"
            aria-label={`Open ${doc.title}`}
          >
            <h3 className="goldGradient" style={styles.heading}>
              {doc.title}
            </h3>

            <p style={styles.description}>{doc.description}</p>

            <StatusBadge variant={getBadgeVariant(doc.status)}>
              {doc.status}
            </StatusBadge>

            <span style={styles.linkHint}>Open document page →</span>
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
    display: "flex",
    flexDirection: "column",
    minHeight: "230px",
  },

  heading: {
    marginBottom: "12px",
    fontSize: "22px",
    fontWeight: 900,
  },

  description: {
    color: "#d6d6d6",
    lineHeight: "1.7",
    marginBottom: "18px",
    flexGrow: 1,
  },

  linkHint: {
    display: "block",
    marginTop: "18px",
    color: "#f5c542",
    fontSize: "13px",
    fontWeight: 800,
  },
};
