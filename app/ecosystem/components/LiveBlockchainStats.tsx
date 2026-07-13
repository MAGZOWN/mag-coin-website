"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

import { publicClient } from "../lib/blockchain";
import {
  BASE_CHAIN_ID,
  BASE_NETWORK_NAME,
  MAG_BASESCAN_URL,
  MAG_CONTRACT_ADDRESS,
} from "../lib/config";

type BlockchainStatus = {
  blockNumber: string;
  contractStatus: "Deployed" | "Not detected";
  networkStatus: "Connected" | "Unavailable";
};

const initialStatus: BlockchainStatus = {
  blockNumber: "Loading…",
  contractStatus: "Not detected",
  networkStatus: "Unavailable",
};

export default function LiveBlockchainStats() {
  const [status, setStatus] = useState<BlockchainStatus>(initialStatus);
  const [lastUpdated, setLastUpdated] = useState("Checking Base Mainnet…");

  useEffect(() => {
    let isMounted = true;

    async function loadBlockchainStatus() {
      try {
        const [blockNumber, bytecode] = await Promise.all([
          publicClient.getBlockNumber(),
          publicClient.getBytecode({
            address: MAG_CONTRACT_ADDRESS,
          }),
        ]);

        if (!isMounted) {
          return;
        }

        setStatus({
          blockNumber: new Intl.NumberFormat("en-US").format(blockNumber),
          contractStatus: bytecode ? "Deployed" : "Not detected",
          networkStatus: "Connected",
        });

        setLastUpdated(
          new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "medium",
          }).format(new Date()),
        );
      } catch (error) {
        console.error("Unable to read Base blockchain statistics:", error);

        if (!isMounted) {
          return;
        }

        setStatus({
          blockNumber: "Unavailable",
          contractStatus: "Not detected",
          networkStatus: "Unavailable",
        });

        setLastUpdated("Live connection temporarily unavailable");
      }
    }

    loadBlockchainStatus();

    const interval = window.setInterval(loadBlockchainStatus, 30_000);

    return () => {
      isMounted = false;
      window.clearInterval(interval);
    };
  }, []);

  const statistics = [
    {
      label: "Network",
      value: BASE_NETWORK_NAME,
      detail: `Chain ID ${BASE_CHAIN_ID}`,
    },
    {
      label: "Network Status",
      value: status.networkStatus,
      detail: "Read-only Base RPC connection",
    },
    {
      label: "Latest Base Block",
      value: status.blockNumber,
      detail: "Automatically refreshed every 30 seconds",
    },
    {
      label: "MAG Contract",
      value: status.contractStatus,
      detail: "Contract bytecode checked on Base",
    },
  ];

  return (
    <section style={styles.wrapper}>
      <div style={styles.headingRow}>
        <div>
          <span style={styles.kicker}>LIVE NETWORK STATUS</span>

          <h2 style={styles.title}>Base Blockchain Statistics</h2>

          <p style={styles.description}>
            Live read-only checks confirm the Base network connection and the
            deployment status of the official MAG smart contract.
          </p>
        </div>

        <span
          style={{
            ...styles.statusBadge,
            ...(status.networkStatus === "Connected"
              ? styles.connectedBadge
              : styles.unavailableBadge),
          }}
        >
          <span
            style={{
              ...styles.statusDot,
              ...(status.networkStatus === "Connected"
                ? styles.connectedDot
                : styles.unavailableDot),
            }}
          />

          {status.networkStatus}
        </span>
      </div>

      <div style={styles.grid}>
        {statistics.map((item) => (
          <article key={item.label} style={styles.card}>
            <span style={styles.label}>{item.label}</span>

            <strong style={styles.value}>{item.value}</strong>

            <span style={styles.detail}>{item.detail}</span>
          </article>
        ))}
      </div>

      <div style={styles.footerRow}>
        <span style={styles.updatedText}>Last checked: {lastUpdated}</span>

        <a
          href={MAG_BASESCAN_URL}
          target="_blank"
          rel="noreferrer"
          style={styles.explorerLink}
        >
          Verify MAG on BaseScan ↗
        </a>
      </div>

      <div style={styles.notice}>
        Holder and transfer statistics will be added only after connecting a
        reliable explorer or indexing service. MAG COIN will not publish
        estimated or unverified figures.
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px 24px 90px",
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
    margin: "12px 0",
    color: "#ffffff",
    fontSize: "clamp(30px, 5vw, 46px)",
    lineHeight: 1.12,
    fontWeight: 900,
  },

  description: {
    maxWidth: "760px",
    margin: 0,
    color: "#bcbcbc",
    fontSize: "16px",
    lineHeight: 1.75,
  },

  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px 13px",
    borderRadius: "999px",
    fontSize: "11px",
    fontWeight: 900,
    letterSpacing: "1px",
  },

  connectedBadge: {
    border: "1px solid rgba(74,222,128,.30)",
    background: "rgba(74,222,128,.08)",
    color: "#75e99d",
  },

  unavailableBadge: {
    border: "1px solid rgba(248,113,113,.30)",
    background: "rgba(248,113,113,.08)",
    color: "#fca5a5",
  },

  statusDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
  },

  connectedDot: {
    background: "#75e99d",
    boxShadow: "0 0 12px rgba(117,233,157,.75)",
  },

  unavailableDot: {
    background: "#fca5a5",
    boxShadow: "0 0 12px rgba(252,165,165,.60)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
  },

  card: {
    minHeight: "168px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    border: "1px solid rgba(255,255,255,.09)",
    borderRadius: "18px",
    background:
      "linear-gradient(145deg, rgba(255,255,255,.045), rgba(255,255,255,.015))",
    boxShadow: "0 18px 50px rgba(0,0,0,.20)",
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

  detail: {
    marginTop: "auto",
    color: "#7f7f7f",
    fontSize: "12px",
    lineHeight: 1.55,
  },

  footerRow: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
    flexWrap: "wrap",
  },

  updatedText: {
    color: "#858585",
    fontSize: "12px",
  },

  explorerLink: {
    color: "#f5c542",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: 800,
  },

  notice: {
    marginTop: "18px",
    padding: "17px 20px",
    border: "1px solid rgba(245,197,66,.14)",
    borderRadius: "14px",
    background: "rgba(245,197,66,.035)",
    color: "#969696",
    fontSize: "13px",
    lineHeight: 1.65,
  },
};
