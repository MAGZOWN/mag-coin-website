"use client";

import type { CSSProperties } from "react";
import { useState } from "react";

import PrimaryButton from "./ui/PrimaryButton";
import SecondaryButton from "./ui/SecondaryButton";

import { copyToClipboard } from "../lib/copy";
import { blockchainService } from "../services/blockchainService";

export default function ContractActions() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    const success = await copyToClipboard(
      blockchainService.getContract()
    );

    if (!success) return;

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  return (
    <div style={styles.actions}>
      <button
        type="button"
        onClick={handleCopy}
        style={styles.copyButton}
        className="primaryButton"
      >
        {copied ? "✓ Contract Copied" : "Copy Contract"}
      </button>

      <SecondaryButton
        href={blockchainService.getContractExplorer()}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on BaseScan ↗
      </SecondaryButton>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  actions: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
    marginTop: "16px",
  },

  copyButton: {
    background: "#f5c542",
    color: "#000",
    border: "2px solid #f5c542",
    borderRadius: "999px",
    padding: "15px 34px",
    fontWeight: 700,
    fontSize: "15px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
