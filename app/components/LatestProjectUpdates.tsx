import type { CSSProperties } from "react";

import { projectUpdates } from "../data/projectUpdates";

export default function LatestProjectUpdates() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Latest Project Updates</h2>

      <p style={styles.subtitle}>
        MAG COIN is being developed continuously. Major milestones and
        documentation updates are published here for transparency.
      </p>

      <div style={styles.list}>
        {projectUpdates.map((update, index) => (
          <div key={index} style={styles.item}>
            <div style={styles.left}>
              <span style={styles.check}>✓</span>
              <span>{update.title}</span>
            </div>

            <span
              style={{
                ...styles.badge,
                background:
                  update.status === "Active"
                    ? "#0d6efd"
                    : "#198754",
              }}
            >
              {update.status}
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
    marginBottom: "30px",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid #2a2a2a",
    borderRadius: "14px",
    padding: "18px 20px",
    color: "#e5e5e5",
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
  },

  check: {
    color: "#22c55e",
    fontWeight: "bold",
    fontSize: "20px",
  },

  badge: {
    color: "#fff",
    padding: "6px 14px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "bold",
  },
};
