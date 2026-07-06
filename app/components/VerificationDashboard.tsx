import type { CSSProperties } from "react";

import { verificationData } from "../data/verificationData";

export default function VerificationDashboard() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Verification Dashboard</h2>

      <p style={styles.subtitle}>
        Official MAG Foundation information should always be verified through
        trusted project channels and public blockchain records.
      </p>

      <div style={styles.grid}>
        {verificationData.map((item) => (
          <div key={item.label} style={styles.card} className="cardHover">
            <p style={styles.label}>{item.label}</p>
            <h3 style={styles.value}>{item.value}</h3>
            <span style={styles.badge}>{item.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginTop: "40px",
    marginBottom: "50px",
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
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: "22px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid #333",
    borderRadius: "20px",
    padding: "26px",
    textAlign: "center",
    color: "#e5e5e5",
  },

  label: {
    color: "#999",
    fontSize: "13px",
    marginBottom: "10px",
  },

  value: {
    color: "#ffffff",
    fontSize: "18px",
    marginBottom: "16px",
  },

  badge: {
    display: "inline-block",
    background: "rgba(245,197,66,.10)",
    border: "1px solid rgba(245,197,66,.35)",
    color: "#f5c542",
    padding: "7px 14px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "bold",
  },
};
