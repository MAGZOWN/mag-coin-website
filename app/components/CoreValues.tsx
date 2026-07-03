import type { CSSProperties } from "react";

const iconStyle: CSSProperties = {
  width: "30px",
  height: "30px",
  color: "#f5c542",
};

function ShieldIcon() {
  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l7 3v5c0 5-3.2 8.5-7 10-3.8-1.5-7-5-7-10V6z" />
      <path d="M9 12l2 2 4-5" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 3h7l5 5v13H7z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 21V10" />
      <path d="M12 10c-4 0-7-2-8-6 4 0 7 2 8 6z" />
      <path d="M12 10c4 0 7-2 8-6-4 0-7 2-8 6z" />
    </svg>
  );
}

export default function CoreValues() {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Core Values</h2>

      <div style={styles.grid}>
        <div style={styles.card}>
          <div style={styles.icon}><ShieldIcon /></div>
          <h3 style={styles.cardTitle}>Integrity</h3>
          <p>We build with honesty, accountability, and long-term responsibility.</p>
        </div>

        <div style={styles.card}>
          <div style={styles.icon}><DocumentIcon /></div>
          <h3 style={styles.cardTitle}>Transparency</h3>
          <p>Major project decisions will be documented and publicly verifiable.</p>
        </div>

        <div style={styles.card}>
          <div style={styles.icon}><GrowthIcon /></div>
          <h3 style={styles.cardTitle}>Stewardship</h3>
          <p>MAG Coin is designed with future generations and sustainable growth in mind.</p>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginTop: "42px",
  },
  sectionTitle: {
    color: "#f5c542",
    marginBottom: "10px",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: "24px",
    marginTop: "22px",
  },
  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,0.96), rgba(7,7,7,0.96))",
    border: "1px solid #333",
    borderRadius: "22px",
    padding: "30px 24px",
    color: "#e5e5e5",
    minHeight: "190px",
    textAlign: "center",
  },
  icon: {
    width: "54px",
    height: "54px",
    borderRadius: "50%",
    background: "rgba(245,197,66,0.12)",
    border: "1px solid rgba(245,197,66,0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 18px",
  },
  cardTitle: {
    color: "#f5c542",
    marginBottom: "12px",
  },
};
