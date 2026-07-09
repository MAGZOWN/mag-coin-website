import type { CSSProperties } from "react";

import { verificationData } from "../data/verificationData";
import { verificationService } from "../services/verificationService";

export default function VerificationDashboard() {
  const verification = verificationService.getVerificationSummary();

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Verification Dashboard</h2>

      <p style={styles.subtitle}>
        Official MAG Foundation information should always be verified through
        trusted project channels and public blockchain records.
      </p>

      <div style={styles.grid}>
        {verificationData.map((item) => (
          <div
            key={item.label}
            style={styles.card}
            className="cardHover fadeIn"
          >
            <p style={styles.label}>{item.label}</p>

            <h3 style={styles.value}>{item.value}</h3>

            <span style={styles.badge}>{item.status}</span>
          </div>
        ))}

        <div
          style={styles.card}
          className="cardHover fadeIn"
        >
          <p style={styles.label}>Live Verification</p>

          <h3 style={styles.value}>
            {verification.verificationStatus}
          </h3>

          <span style={styles.badge}>
            {verification.sourceCode}
          </span>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginTop: "40px",
    marginBottom: "60px",
  },

  title: {
    color: "#f5c542",
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "14px",
    fontWeight: 800,
  },

  subtitle: {
    color: "#d6d6d6",
    textAlign: "center",
    lineHeight: "1.8",
    maxWidth: "760px",
    margin: "0 auto 40px",
    fontSize: "17px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: "22px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "22px",
    padding: "28px",
    textAlign: "center",
    color: "#e5e5e5",
    transition: "all .35s ease",
    boxShadow: "0 10px 30px rgba(0,0,0,.35)",
  },

  label: {
    color: "#9ca3af",
    fontSize: "13px",
    marginBottom: "12px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },

  value: {
    color: "#ffffff",
    fontSize: "22px",
    fontWeight: 700,
    marginBottom: "18px",
    wordBreak: "break-word",
  },

  badge: {
    display: "inline-block",
    background: "rgba(245,197,66,.10)",
    border: "1px solid rgba(245,197,66,.35)",
    color: "#f5c542",
    padding: "8px 16px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: 700,
  },
};
