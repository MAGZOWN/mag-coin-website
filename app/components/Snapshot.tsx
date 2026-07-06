import type { CSSProperties } from "react";

import { foundationData } from "../data/foundationData";

const iconStyle: CSSProperties = {
  width: "34px",
  height: "34px",
  margin: "0 auto 12px",
  color: "#f5c542",
};

function GlobeIcon() {
  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3.5 3 14 0 18" />
      <path d="M12 3c-3 3.5-3 14 0 18" />
    </svg>
  );
}

function CoinIcon() {
  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8" />
      <path d="M9 12h6" />
    </svg>
  );
}

function SupplyIcon() {
  return (
    <svg style={iconStyle} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
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

function shortenAddress(address: string) {
  return `${address.slice(0, 9)}...${address.slice(-6)}`;
}

export default function Snapshot() {
  return (
    <section style={styles.snapshot}>
      <h3 style={styles.snapshotTitle}>Official Project Snapshot</h3>

      <div style={styles.snapshotGrid}>
        <div style={styles.snapshotItem} className="cardHover">
          <GlobeIcon />
          <strong>Network</strong>
          <p>{foundationData.network}</p>
        </div>

        <div style={styles.snapshotItem} className="cardHover">
          <CoinIcon />
          <strong>Token Symbol</strong>
          <p>{foundationData.symbol}</p>
        </div>

        <div style={styles.snapshotItem} className="cardHover">
          <SupplyIcon />
          <strong>Total Supply</strong>
          <p>{foundationData.totalSupply}</p>
        </div>

        <div style={styles.snapshotItem} className="cardHover">
          <DocumentIcon />
          <strong>Official Contract</strong>
          <p style={styles.contract}>{shortenAddress(foundationData.contract)}</p>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  snapshot: {
    maxWidth: "1000px",
    margin: "42px auto 0",
    background:
      "linear-gradient(145deg, rgba(18,18,18,0.96), rgba(5,5,5,0.96))",
    border: "1px solid #3a3a3a",
    borderRadius: "22px",
    padding: "38px",
    color: "#e5e5e5",
    textAlign: "center",
  },

  snapshotTitle: {
    color: "#f5c542",
    fontSize: "24px",
    marginBottom: "32px",
  },

  snapshotGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))",
    gap: "26px",
  },

  snapshotItem: {
    background: "rgba(255,255,255,0.035)",
    border: "1px solid #2f2f2f",
    borderRadius: "18px",
    padding: "22px 18px",
    lineHeight: "1.7",
    minHeight: "130px",
  },

  contract: {
    wordBreak: "break-all",
    fontSize: "13px",
    color: "#d6d6d6",
  },
};
