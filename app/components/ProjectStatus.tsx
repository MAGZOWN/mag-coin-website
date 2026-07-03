import type { CSSProperties } from "react";

export default function ProjectStatus() {
  return (
    <section style={styles.status}>
      <h2 style={styles.title}>Project Status</h2>

      <div style={styles.grid}>
        <div style={styles.item}>
          <div style={styles.icon}>🚀</div>
          <strong>Current Phase</strong>
          <p>Founder Edition – Phase 1</p>
        </div>

        <div style={styles.item}>
          <div style={styles.icon}>💻</div>
          <strong>Website Version</strong>
          <p>v1.0.0</p>
        </div>

        <div style={styles.item}>
          <div style={styles.icon}>📅</div>
          <strong>Last Updated</strong>
          <p>July 2026</p>
        </div>

        <div style={styles.item}>
          <div style={styles.icon}>✅</div>
          <strong>Status</strong>
          <p>Active Development</p>
        </div>
      </div>

      <p style={styles.note}>
        Building a transparent and sustainable blockchain project one step at a time.
      </p>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  status: {
    marginTop: "42px",
    marginBottom: "42px",
    background: "linear-gradient(145deg, rgba(18,18,18,0.96), rgba(5,5,5,0.96))",
    border: "1px solid #333",
    borderRadius: "22px",
    padding: "34px",
    textAlign: "center",
    color: "#e5e5e5",
  },

  title: {
    color: "#f5c542",
    fontSize: "24px",
    marginBottom: "28px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
    gap: "24px",
  },

  item: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid #2a2a2a",
    borderRadius: "16px",
    padding: "20px",
    lineHeight: "1.8",
  },

  icon: {
    fontSize: "30px",
    marginBottom: "10px",
  },

  note: {
    marginTop: "30px",
    color: "#bdbdbd",
    fontSize: "16px",
  },
};
