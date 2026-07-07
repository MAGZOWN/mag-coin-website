"use client";

import type { CSSProperties } from "react";
import { useState } from "react";

import { copyToClipboard } from "../lib/copy";
import { blockchainService } from "../services/blockchainService";

export default function ContractActions() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const success = await copyToClipboard(blockchainService.getContract());

    if (success) {
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }

  return (
    <div style={styles.actions}>
      <button
        type="button"
        onClick={handleCopy}
        style={styles.button}
      >
        {copied ? "Copied ✓" : "Copy Contract"}
      </button>

      <a
        href={blockchainService.getContractExplorer()}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        View on BaseScan ↗
      </a>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    marginTop: "14px",
  },

  button: {
    background: "#f5c542",
    color: "#000",
    border: "none",
    borderRadius: "999px",
    padding: "9px 16px",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "12px",
  },

  link: {
    background: "transparent",
    color: "#f5c542",
    border: "1px solid rgba(245,197,66,.55)",
    borderRadius: "999px",
    padding: "8px 16px",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "12px",
  },
};
