import type { CSSProperties } from "react";

import { developmentTimeline } from "../data/developmentTimeline";

export default function DevelopmentTimeline() {
  return (
    <section
      style={styles.section}
      className="magCard cardHover"
    >
      <h2 style={styles.title}>Development Timeline</h2>

      <p style={styles.subtitle}>
        MAG COIN is being developed in carefully planned phases to ensure
        responsible growth and long-term sustainability.
      </p>

      <div style={styles.timeline}>
        {developmentTimeline.map((item, index) => (
          <div
            key={index}
            style={styles.card}
            className="magCard cardHover"
          >
            <div style={styles.phase}>{item.phase}</div>

            <h3 style={styles.heading}>{item.title}</h3>

            <span
              style={{
                ...styles.badge,
                background:
                  item.status === "Completed"
                    ? "#198754"
                    : item.status === "In Progress"
                    ? "#0d6efd"
                    : "#6c757d",
                boxShadow:
                  item.status === "Completed"
                    ? "0 10px 24px rgba(25,135,84,0.20)"
                    : item.status === "In Progress"
                    ? "0 10px 24px rgba(13,110,253,0.20)"
                    : "0 10px 24px rgba(108,117,125,0.20)",
              }}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginTop: "50px",
    background:
      "linear-gradient(145deg, rgba(18,18,18,0.96), rgba(5,5,5,0.96))",
    border: "1px solid #333",
    borderRadius: "22px",
    padding: "36px",
    boxShadow: "0 28px 75px rgba(0,0,0,0.28)",
  },

  title: {
    color: "#f5c542",
    textAlign: "center",
    fontSize: "28px",
    marginBottom: "16px",
  },

  subtitle: {
    color: "#bdbdbd",
    textAlign: "center",
    lineHeight: "1.7",
    marginBottom: "34px",
  },

  timeline: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "22px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(255,255,255,0.045), rgba(255,255,255,0.018))",
    border: "1px solid #2a2a2a",
    borderRadius: "16px",
    padding: "24px",
    textAlign: "center",
    minHeight: "170px",
    boxShadow: "0 16px 40px rgba(0,0,0,0.20)",
  },

  phase: {
    color: "#f5c542",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  heading: {
    color: "#ffffff",
    marginBottom: "18px",
    fontSize: "18px",
  },

  badge: {
    display: "inline-block",
    color: "#ffffff",
    padding: "8px 16px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "bold",
  },
};
