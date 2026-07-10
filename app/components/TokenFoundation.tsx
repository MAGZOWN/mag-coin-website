import type { CSSProperties } from "react";

const contractAddress =
  "0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94";

const tokenFacts = [
  {
    title: "Network",
    value: "Base Mainnet",
  },
  {
    title: "Token Standard",
    value: "ERC-20",
  },
  {
    title: "Token Symbol",
    value: "MAG",
  },
  {
    title: "Decimals",
    value: "18",
  },
  {
    title: "Total Supply",
    value: "1,000,000,000 MAG",
  },
  {
    title: "Supply Model",
    value: "Fixed Supply",
  },
  {
    title: "Contract Status",
    value: "Verified on BaseScan",
  },
  {
    title: "Development Approach",
    value: "Transparency First",
  },
];

export default function TokenFoundation() {
  return (
    <section
      id="token-foundation"
      style={styles.section}
      className="cardHover fadeIn"
      aria-labelledby="token-foundation-title"
    >
      <p style={styles.label}>TOKEN FOUNDATION</p>

      <h2
        id="token-foundation-title"
        style={styles.title}
      >
        A transparent foundation built on verifiable blockchain records.
      </h2>

      <p style={styles.text}>
        MAG COIN has been designed with simplicity,
        transparency, and verifiable blockchain data as
        core principles. The project intentionally avoids
        unnecessary contract complexity while making key
        token information publicly available.
      </p>

      <div style={styles.grid}>
        {tokenFacts.map((item) => (
          <div key={item.title} style={styles.card}>
            <h3 style={styles.heading}>
              {item.title}
            </h3>

            <p style={styles.value}>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div style={styles.contractBox}>
        <p style={styles.contractLabel}>
          Official Smart Contract
        </p>

        <code style={styles.contract}>
          {contractAddress}
        </code>

        <a
          href={`https://basescan.org/token/${contractAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Verify on BaseScan ↗
        </a>
      </div>

      <div style={styles.notice}>
        <h3 style={styles.noticeTitle}>
          Verification Reminder
        </h3>

        <p style={styles.noticeText}>
          Always verify the complete smart contract
          address through the official MAG COIN website
          and BaseScan before interacting with the
          token. Never rely solely on social media,
          screenshots, or unofficial sources when
          confirming blockchain information.
        </p>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginBottom: "60px",
    scrollMarginTop: "110px",
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid rgba(255,255,255,.14)",
    borderRadius: "24px",
    padding: "48px",
    color: "#e5e5e5",
    boxShadow: "0 18px 50px rgba(0,0,0,.28)",
  },

  label: {
    color: "#f5c542",
    letterSpacing: "3px",
    fontWeight: 800,
    fontSize: "13px",
    marginBottom: "18px",
  },

  title: {
    color: "#ffffff",
    fontSize: "36px",
    lineHeight: "1.3",
    marginBottom: "24px",
    fontWeight: 850,
  },

  text: {
    color: "#d6d6d6",
    lineHeight: "1.9",
    fontSize: "18px",
    marginBottom: "34px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",
    gap: "18px",
    marginBottom: "34px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(255,255,255,.05), rgba(255,255,255,.02))",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "18px",
    padding: "24px",
    textAlign: "center",
  },

  heading: {
    color: "#f5c542",
    marginBottom: "12px",
    fontSize: "16px",
    fontWeight: 800,
  },

  value: {
    color: "#ffffff",
    fontSize: "17px",
    fontWeight: 700,
    lineHeight: "1.6",
  },

  contractBox: {
    background:
      "rgba(245,197,66,.08)",
    border:
      "1px solid rgba(245,197,66,.24)",
    borderRadius: "18px",
    padding: "26px",
    marginBottom: "30px",
  },

  contractLabel: {
    color: "#f5c542",
    fontWeight: 800,
    marginBottom: "12px",
  },

  contract: {
    display: "block",
    color: "#ffffff",
    fontSize: "14px",
    lineHeight: "1.8",
    wordBreak: "break-all",
    marginBottom: "22px",
  },

  button: {
    display: "inline-block",
    background: "#f5c542",
    color: "#000",
    padding: "12px 22px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: 800,
    border: "2px solid #f5c542",
  },

  notice: {
    background:
      "rgba(255,255,255,.03)",
    border:
      "1px solid rgba(255,255,255,.08)",
    borderRadius: "18px",
    padding: "28px",
  },

  noticeTitle: {
    color: "#ffffff",
    marginBottom: "14px",
    fontSize: "20px",
    fontWeight: 800,
  },

  noticeText: {
    color: "#d6d6d6",
    lineHeight: "1.9",
    fontSize: "16px",
    margin: 0,
  },
};
