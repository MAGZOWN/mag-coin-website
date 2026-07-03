import type { CSSProperties } from "react";

const iconStyle: CSSProperties = {
  width: "30px",
  height: "30px",
  color: "#f5c542",
};

function RocketIcon() {
  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M14 4c3 1 6 4 7 7-2 4-6 8-10 10l-3-3c2-4 6-8 10-10z" />
      <path d="M7 17l-3 3" />
      <path d="M8 16l-4 1 1-4" />
      <circle cx="15.5" cy="8.5" r="1.2" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </svg>
  );
}

function StatusIcon() {
  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l2.5 2.5L16 9" />
    </svg>
  );
}

export default function ProjectStatus() {
  return (
    <section style={styles.status}>
      <h2 style={styles.title}>Project Status</h2>

      <div style={styles.grid}>
        <div style={styles.item}>
          <div style={styles.icon}>
            <RocketIcon />
          </div>
          <h3 style={styles.heading}>Current Phase</h3>
          <p style={styles.value}>Founder Edition – Phase 1</p>
        </div>

        <div style={styles.item}>
          <div style={styles.icon}>
            <MonitorIcon />
          </div>
          <h3 style={styles.heading}>Website Version</h3>
          <p style={styles.value}>v1.0.0</p>
        </div>

        <div style={styles.item}>
          <div style={styles.icon}>
            <CalendarIcon />
          </div>
          <h3 style={styles.heading}>Last Updated</h3>
          <p style={styles.value}>July 2026</p>
        </div>

        <div style={styles.item}>
          <div style={styles.icon}>
            <StatusIcon />
          </div>
          <h3 style={styles.heading}>Project Status</h3>
          <span style={styles.badge}>ACTIVE DEVELOPMENT</span>
        </div>
      </div>

      <div style={styles.footer}>
        <strong>Founder Commitment</strong>

        <p style={styles.note}>
          Every milestone is being completed carefully with transparency,
          responsible stewardship, and long-term sustainability at the core of
          MAG COIN.
        </p>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  status: {
    marginTop: "50px",
    marginBottom: "50px",
    background:
      "linear-gradient(145deg, rgba(18,18,18,0.96), rgba(5,5,5,0.96))",
    border: "1px solid #333",
    borderRadius: "24px",
    padding: "38px",
    textAlign: "center",
    color: "#e5e5e5",
  },

  title: {
    color: "#f5c542",
    fontSize: "30px",
    marginBottom: "34px",
    fontWeight: "bold",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
    gap: "26px",
  },

  item: {
    background: "rgba(255,255,255,0.035)",
    border: "1px solid #2f2f2f",
    borderRadius: "18px",
    padding: "28px 22px",
    minHeight: "170px",
  },

  icon: {
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    background: "rgba(245,197,66,0.12)",
    border: "1px solid rgba(245,197,66,0.35)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 18px",
  },

  heading: {
    color: "#f5c542",
    marginBottom: "12px",
    fontSize: "18px",
  },

  value: {
    color: "#d6d6d6",
    lineHeight: "1.7",
  },

  badge: {
    display: "inline-block",
    marginTop: "12px",
    background: "#198754",
    color: "#ffffff",
    padding: "8px 18px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "bold",
    letterSpacing: "1px",
  },

  footer: {
    marginTop: "40px",
    paddingTop: "28px",
    borderTop: "1px solid #2f2f2f",
    color: "#d6d6d6",
  },

  note: {
    marginTop: "14px",
    lineHeight: "1.8",
    fontSize: "16px",
  },
};
