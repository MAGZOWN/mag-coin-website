import type { CSSProperties } from "react";

const tokenInformation = [
  {
    label: "Token",
    value: "MAG COIN",
  },
  {
    label: "Symbol",
    value: "MAG",
  },
  {
    label: "Network",
    value: "Base Mainnet",
  },
  {
    label: "Standard",
    value: "ERC-20",
  },
];

export default function TokenomicsHero() {
  return (
    <section
      id="tokenomics-hero"
      style={styles.hero}
      className="fadeIn"
      aria-labelledby="tokenomics-title"
    >
      <p style={styles.label}>MAG FOUNDATION</p>

      <h1 id="tokenomics-title" style={styles.title}>
        Transparent
        <br />
        Tokenomics
      </h1>

      <p style={styles.subtitle}>
        The MAG COIN tokenomics framework is designed around transparency,
        responsible stewardship, verifiable blockchain information, and
        sustainable long-term development rather than short-term speculation.
      </p>

      <div style={styles.badge}>
        Fixed Supply • 1,000,000,000 MAG • ERC-20
      </div>

      <div style={styles.divider} />

      <div style={styles.grid}>
        {tokenInformation.map((item) => (
          <div key={item.label} style={styles.card}>
            <span style={styles.cardLabel}>
              {item.label}
            </span>

            <strong style={styles.cardValue}>
              {item.value}
            </strong>
          </div>
        ))}
      </div>

      <div style={styles.notice}>
        <h3 style={styles.noticeTitle}>
          Tokenomics Philosophy
        </h3>

        <p style={styles.noticeText}>
          Tokenomics should explain how the token functions—not create unrealistic
          expectations. MAG COIN is committed to presenting factual, verifiable
          token information while clearly distinguishing completed features from
          future plans.
        </p>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  hero: {
    textAlign: "center",
    padding: "70px 20px 60px",
    scrollMarginTop: "110px",
  },

  label: {
    color: "#f5c542",
    letterSpacing: "4px",
    fontSize: "13px",
    fontWeight: 800,
    marginBottom: "18px",
    textTransform: "uppercase",
  },

  title: {
    fontSize: "52px",
    lineHeight: "1.2",
    marginBottom: "26px",
    fontWeight: 900,
    background:
      "linear-gradient(180deg,#ffffff 0%,#f5c542 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    color: "#d6d6d6",
    fontSize: "19px",
    lineHeight: "1.8",
    maxWidth: "860px",
    margin: "0 auto 34px",
  },

  badge: {
    display: "inline-block",
    background: "rgba(245,197,66,.10)",
    border: "1px solid rgba(245,197,66,.35)",
    color: "#f5c542",
    padding: "12px 24px",
    borderRadius: "999px",
    fontWeight: 800,
    fontSize: "14px",
  },

  divider: {
    height: "1px",
    maxWidth: "800px",
    margin: "50px auto",
    background:
      "linear-gradient(90deg, transparent, rgba(245,197,66,.35), transparent)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "18px",
    marginBottom: "38px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(255,255,255,.05), rgba(255,255,255,.02))",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "18px",
    padding: "22px",
  },

  cardLabel: {
    display: "block",
    color: "#9ca3af",
    fontSize: "12px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    marginBottom: "10px",
    fontWeight: 700,
  },

  cardValue: {
    color: "#ffffff",
    fontSize: "17px",
    fontWeight: 800,
    lineHeight: "1.5",
  },

  notice: {
    marginTop: "10px",
    padding: "30px",
    borderRadius: "20px",
    background:
      "linear-gradient(135deg, rgba(245,197,66,.10), rgba(245,197,66,.03))",
    border: "1px solid rgba(245,197,66,.24)",
  },

  noticeTitle: {
    color: "#f5c542",
    fontSize: "22px",
    fontWeight: 850,
    marginBottom: "16px",
  },

  noticeText: {
    color: "#d6d6d6",
    fontSize: "16px",
    lineHeight: "1.9",
    margin: 0,
  },
};
