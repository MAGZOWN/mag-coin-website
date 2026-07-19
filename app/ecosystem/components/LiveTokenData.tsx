import type { CSSProperties } from "react";

import { getMagTokenInfo } from "../lib/token";

function formatSupply(value: string) {
  const supply = Number(value);

  if (!Number.isFinite(supply)) {
    return value;
  }

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(supply);
}

export default async function LiveTokenData() {
  try {
    const token = await getMagTokenInfo();

    const liveItems = [
      {
        label: "Token Name",
        value: token.name,
      },
      {
        label: "Symbol",
        value: token.symbol,
      },
      {
        label: "Decimals",
        value: String(token.decimals),
      },
      {
        label: "Live Total Supply",
        value: `${formatSupply(token.totalSupply)} ${token.symbol}`,
      },
    ];

    return (
      <section style={styles.wrapper}>
        <div style={styles.headingRow}>
          <div>
            <span style={styles.kicker}>LIVE BASE BLOCKCHAIN DATA</span>

            <h2 style={styles.title}>Verified MAG Token Information</h2>

            <p style={styles.description}>
              The information below is read directly from the official MAG
              smart contract on Base Mainnet.
            </p>
          </div>

          <span style={styles.liveBadge}>
            <span style={styles.liveDot} />
            LIVE
          </span>
        </div>

        <div style={styles.grid}>
          {liveItems.map((item) => (
            <article
              key={item.label}
              className="magCard cardHover"
              style={styles.card}
            >
              <span style={styles.label}>{item.label}</span>

              <strong style={styles.value}>{item.value}</strong>
            </article>
          ))}
        </div>

        <div className="cardHover" style={styles.notice}>
          Read-only blockchain verification. No wallet connection, signature,
          approval, transaction or gas fee is required.
        </div>
      </section>
    );
  } catch (error) {
    console.error("Unable to read live MAG token information:", error);

    return (
      <section style={styles.wrapper}>
        <div className="magCard cardHover" style={styles.errorCard}>
          <span style={styles.kicker}>BASE BLOCKCHAIN STATUS</span>

          <h2 style={styles.errorTitle}>
            Live token information is temporarily unavailable
          </h2>

          <p style={styles.errorText}>
            The official MAG contract remains available through BaseScan.
            Please refresh this page later.
          </p>

          <a
            href="https://basescan.org/token/0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94"
            target="_blank"
            rel="noopener noreferrer"
            className="navLink externalLink"
            style={styles.errorLink}
          >
            Verify MAG on BaseScan
          </a>
        </div>
      </section>
    );
  }
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "90px 24px",
  },

  headingRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "28px",
    flexWrap: "wrap",
    marginBottom: "38px",
  },

  kicker: {
    color: "#f5c542",
    fontSize: "12px",
    fontWeight: 900,
    letterSpacing: "1.6px",
  },

  title: {
    margin: "12px 0 12px",
    color: "#ffffff",
    fontSize: "clamp(30px, 5vw, 46px)",
    lineHeight: 1.12,
    fontWeight: 900,
  },

  description: {
    maxWidth: "730px",
    margin: 0,
    color: "#bcbcbc",
    fontSize: "16px",
    lineHeight: 1.75,
  },

  liveBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 13px",
    border: "1px solid rgba(74,222,128,.30)",
    borderRadius: "999px",
    background: "rgba(74,222,128,.08)",
    color: "#75e99d",
    fontSize: "11px",
    fontWeight: 900,
    letterSpacing: "1px",
  },

  liveDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "#75e99d",
    boxShadow: "0 0 12px rgba(117,233,157,.75)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
  },

  card: {
    minHeight: "150px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "20px",
    border: "1px solid rgba(245,197,66,.16)",
    borderRadius: "18px",
    background:
      "linear-gradient(145deg, rgba(245,197,66,.055), rgba(255,255,255,.018))",
    boxShadow: "0 18px 50px rgba(0,0,0,.22)",
  },

  label: {
    color: "#9d9d9d",
    fontSize: "12px",
    fontWeight: 800,
    letterSpacing: ".8px",
    textTransform: "uppercase",
  },

  value: {
    color: "#ffffff",
    fontSize: "clamp(20px, 3vw, 27px)",
    lineHeight: 1.25,
    overflowWrap: "anywhere",
  },

  notice: {
    marginTop: "20px",
    padding: "17px 20px",
    border: "1px solid rgba(255,255,255,.08)",
    borderRadius: "14px",
    background: "rgba(255,255,255,.025)",
    color: "#8f8f8f",
    fontSize: "13px",
    lineHeight: 1.65,
    boxShadow: "0 14px 38px rgba(0,0,0,.16)",
  },

  errorCard: {
    padding: "34px",
    border: "1px solid rgba(245,197,66,.18)",
    borderRadius: "20px",
    background: "rgba(245,197,66,.035)",
    boxShadow: "0 20px 55px rgba(0,0,0,.22)",
  },

  errorTitle: {
    margin: "12px 0",
    color: "#ffffff",
    fontSize: "28px",
    lineHeight: 1.25,
  },

  errorText: {
    margin: "0 0 22px",
    color: "#bcbcbc",
    fontSize: "15px",
    lineHeight: 1.7,
  },

  errorLink: {
    color: "#f5c542",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 800,
  },
};
