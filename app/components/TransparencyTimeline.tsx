import type { CSSProperties } from "react";

import { transparencyTimeline } from "../data/transparencyTimeline";

import SectionTitle from "./ui/SectionTitle";
import StatusBadge from "./ui/StatusBadge";

function getVariant(status: string) {
  const value = status.toLowerCase();

  if (value.includes("completed")) return "completed";
  if (value.includes("live")) return "live";
  if (value.includes("progress")) return "in-progress";

  return "planned";
}

export default function TransparencyTimeline() {
  return (
    <section style={styles.section}>
      <SectionTitle
        subtitle="MAG COIN believes progress should be visible, documented and independently verifiable."
      >
        Transparency Timeline
      </SectionTitle>

      <div style={styles.timeline}>
        {transparencyTimeline.map((item) => (
          <div
            key={item.title}
            style={styles.card}
            className="cardHover magCard"
          >
            <h3 className="goldGradient" style={styles.heading}>
              {item.title}
            </h3>

            <StatusBadge
              variant={getVariant(item.status) as any}
            >
              {item.status}
            </StatusBadge>
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

  timeline: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "22px",
  },

  card: {
    borderRadius: "20px",
    padding: "26px",
    textAlign: "center",
    minHeight: "165px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  heading: {
    marginBottom: "22px",
    fontSize: "20px",
    fontWeight: 900,
    lineHeight: "1.4",
  },
};
