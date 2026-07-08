import type { CSSProperties } from "react";

import { blockchainService } from "../services/blockchainService";
import ContractActions from "./ContractActions";

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

export default function Snapshot() {
  return (
    <section style={styles.snapshot} className="magCard">
      <h3 className="goldGradient" style={styles.snapshotTitle}>
        Official Project Snapshot
      </h3>

      <div style={styles.snapshotGrid}>
        <a href="/about" style={styles.snapshotItem} className="cardHover">
          <GlobeIcon />
          <strong>Network</strong>
          <p>{blockchainService.getNetwork()}</p>
          <span style={styles.linkHint}>Learn about Base deployment</span>
        </a>

        <a href="/whitepaper" style={styles.snapshotItem} className="cardHover">
          <CoinIcon />
          <strong>Token Symbol</strong>
          <p>{blockchainService.getSymbol()}</p>
          <span style={styles.linkHint}>Read project overview</span>
        </a>

        <a href="/tokenomics" style={styles.snapshotItem} className="cardHover">
          <SupplyIcon />
          <strong>Total Supply</strong>
          <p>{blockchainService.getTokenSummary().totalSupply}</p>
          <span style={styles.linkHint}>View tokenomics</span>
        </a>

        <div style={styles.snapshotItem} className="cardHover">
          <DocumentIcon />
          <strong>Official Contract</strong>

          <p style={styles.contract}>
            {blockchainService.getShortContract()}
          </p>

          <ContractActions />
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  snapshot: {
    maxWidth: "1000px",
    margin: "42px auto 0",
    padding: "38px",
    color: "#e5e5e5",
    textAlign: "center",
  },

  snapshotTitle: {
    fontSize: "26px",
    marginBottom: "32px",
    fontWeight: 900,
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
    minHeight: "160px",
    color: "#e5e5e5",
    textDecoration: "none",
    display: "block",
  },

  contract: {
    wordBreak: "break-all",
    fontSize: "13px",
    color: "#d6d6d6",
    marginBottom: "14px",
  },

  linkHint: {
    display: "block",
    marginTop: "10px",
    color: "#f5c542",
    fontSize: "12px",
    fontWeight: 700,
  },
};
