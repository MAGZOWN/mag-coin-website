import type { CSSProperties } from "react";

const milestones = [
  {
    title: "Foundation Established",
    status: "Completed",
  },
  {
    title: "Website Development",
    status: "In Progress",
  },
  {
    title: "Constitution v1.0",
    status: "Completed",
  },
  {
    title: "Tokenomics Publication",
    status: "Upcoming",
  },
  {
    title: "MAG/USDC Pair",
    status: "Planned",
  },
  {
    title: "Security Audit",
    status: "Planned",
  },
];

export default function TransparencyTimeline() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Transparency Timeline</h2>

      <p style={styles.subtitle}>
        MAG Foundation believes progress should be visible, documented, and
        verifiable.
      </p>

      <div style={styles.timeline}>
        {milestones.map((item) => (
          <div
            key={item.title}
            style={styles.card}
            className="cardHover"
          >
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
    marginBottom: "60px",
  },

  title: {
    textAlign: "center",
    color: "#f5c542",
    fontSize: "32px",
    marginBottom: "14px",
  },

  subtitle: {
    textAlign: "center",
    color: "#d6d6d6",
    maxWidth: "760px",
    margin: "0 auto 36px",
    lineHeight: "1.8",
  },

  timeline: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "22px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid #333",
    borderRadius: "20px",
    padding: "24px",
    textAlign: "center",
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
    fontWeight: "bold",
    fontSize: "12px",
  },

};
