import type { CSSProperties } from "react";

import { blockchainService } from "@/app/services/blockchainService";

const contractAddress = "0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94";

export default function TokenOverview() {
  const token = blockchainService.getTokenSummary();

  const overviewItems = [
    {
      label: "Network",
      value: token.network,
      note: "Base Mainnet",
    },
    {
      label: "Token Standard",
      value: token.tokenStandard,
      note: "Ethereum-compatible fungible token",
    },
    {
      label: "Token Symbol",
      value: token.symbol,
      note: "Official ticker: MAG",
    },
    {
      label: "Decimals",
      value: "18",
      note: "Standard ERC-20 display precision",
    },
    {
      label: "Total Supply",
      value: token.totalSupply,
      note: "Minted once at deployment",
    },
    {
      label: "Supply Model",
      value: "Fixed Supply",
      note: "No public mint function",
    },
  ];

  return (
    <section
      id="token-overview"
      style={styles.section}
      className="magCard cardHover fadeIn"
      aria-labelledby="token-overview-title"
    >
      <p style={styles.label}>VERIFIABLE TOKEN DATA</p>

      <h2 id="token-overview-title" style={styles.title}>
        Token Overview
      </h2>

      <p style={styles.subtitle}>
        MAG is the native token of the MAG ecosystem on Base Mainnet. MAG COIN
        is committed to publishing clear, accurate, and verifiable
        token information through official project channels and public
        blockchain records.
      </p>

      <div style={styles.grid}>
        {overviewItems.map((item) => (
          <article
            key={item.label}
            style={styles.card}
            className="magCard cardHover"
          >
            <h3 style={styles.heading}>{item.label}</h3>

            <p style={styles.value}>{item.value}</p>

            <p style={styles.note}>{item.note}</p>
          </article>
        ))}
      </div>

      <div style={styles.contractBox}>
        <div style={styles.contractContent}>
          <p style={styles.contractLabel}>Official MAG COIN Contract</p>

          <code style={styles.contractAddress}>{contractAddress}</code>

          <p style={styles.contractNote}>
            Always verify the complete contract address before interacting with
            MAG COIN.
          </p>
        </div>

        <a
          href={`https://basescan.org/token/${contractAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
          className="primaryButton"
        >
          Verify on BaseScan ↗
        </a>
      </div>

      <div style={styles.disclosureBox}>
        <h3 style={styles.disclosureTitle}>Supply Disclosure</h3>

        <p style={styles.disclosureText}>
          The recorded total supply is 1,000,000,000 MAG with 18 decimals. The
          verified contract source does not expose a public minting function,
          and the initial supply was created during contract deployment.
        </p>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginBottom: "60px",
    scrollMarginTop: "110px",
  },

  label: {
    color: "#f5c542",
    textAlign: "center",
    letterSpacing: "3px",
    fontWeight: 800,
    fontSize: "13px",
    marginBottom: "12px",
  },

  title: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: "38px",
    lineHeight: "1.25",
    fontWeight: 900,
    marginBottom: "16px",
  },

  subtitle: {
    color: "#d6d6d6",
    textAlign: "center",
    maxWidth: "820px",
    margin: "0 auto 38px",
    lineHeight: "1.8",
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
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: "20px",
    padding: "26px",
    textAlign: "center",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
  },

  heading: {
    color: "#f5c542",
    marginBottom: "12px",
    fontSize: "17px",
    fontWeight: 800,
  },

  value: {
    color: "#ffffff",
    fontSize: "22px",
    lineHeight: "1.4",
    fontWeight: 850,
    margin: "0 0 10px",
    overflowWrap: "anywhere",
  },

  note: {
    color: "#a9a9a9",
    fontSize: "13px",
    lineHeight: "1.7",
    margin: 0,
  },

  contractBox: {
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "22px",
    flexWrap: "wrap",
    padding: "28px",
    borderRadius: "20px",
    background:
      "linear-gradient(135deg, rgba(245,197,66,.10), rgba(245,197,66,.03))",
    border: "1px solid rgba(245,197,66,.24)",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
  },

  contractContent: {
    flex: "1 1 560px",
    minWidth: 0,
  },

  contractLabel: {
    color: "#f5c542",
    fontWeight: 850,
    fontSize: "16px",
    margin: "0 0 12px",
  },

  contractAddress: {
    display: "block",
    color: "#ffffff",
    fontSize: "14px",
    lineHeight: "1.8",
    wordBreak: "break-all",
    overflowWrap: "anywhere",
    fontFamily:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },

  contractNote: {
    color: "#bdbdbd",
    fontSize: "13px",
    lineHeight: "1.7",
    margin: "12px 0 0",
  },

  button: {
    background: "#f5c542",
    color: "#000000",
    border: "2px solid #f5c542",
    borderRadius: "999px",
    padding: "13px 22px",
    textDecoration: "none",
    fontWeight: 850,
    fontSize: "13px",
    whiteSpace: "nowrap",
  },

  disclosureBox: {
    marginTop: "26px",
    padding: "28px",
    borderRadius: "18px",
    background: "linear-gradient(145deg, rgba(255,255,255,.05), rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.10)",
    boxShadow: "0 18px 42px rgba(0,0,0,.22)",
  },

  disclosureTitle: {
    color: "#ffffff",
    fontSize: "20px",
    fontWeight: 850,
    margin: "0 0 13px",
  },

  disclosureText: {
    color: "#d3d3d3",
    fontSize: "15px",
    lineHeight: "1.85",
    margin: 0,
  },
};
