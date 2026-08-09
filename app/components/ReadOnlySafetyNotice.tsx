import type { CSSProperties } from "react";

type ReadOnlySafetyNoticeProps = {
  heading: string;
  description: string;
  bullets: string[];
  disclaimer: string;
};

export default function ReadOnlySafetyNotice({
  heading,
  description,
  bullets,
  disclaimer,
}: ReadOnlySafetyNoticeProps) {
  return (
    <>
      <section style={styles.securityCard} className="cardHover">
        <h2 style={styles.securityHeading}>{heading}</h2>

        <p style={styles.securityText}>{description}</p>

        <ul style={styles.securityList}>
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </section>

      <div style={styles.disclaimer}>{disclaimer}</div>
    </>
  );
}

const styles: Record<string, CSSProperties> = {
  securityCard: {
    padding: "30px",
    marginTop: "30px",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "18px",
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    color: "#e5e5e5",
    lineHeight: 1.8,
  },

  securityHeading: {
    margin: "0 0 14px",
    color: "#f5c542",
    fontSize: "30px",
  },

  securityText: {
    margin: "0 0 18px",
    color: "#d3d3d3",
    fontSize: "15px",
    lineHeight: 1.8,
  },

  securityList: {
    margin: 0,
    paddingLeft: "22px",
    color: "#bdbdbd",
    lineHeight: 2,
  },

  disclaimer: {
    marginTop: "22px",
    padding: "17px 20px",
    border: "1px solid rgba(245,197,66,.14)",
    borderRadius: "14px",
    background: "rgba(245,197,66,.035)",
    color: "#929292",
    fontSize: "13px",
    lineHeight: 1.7,
  },
};
