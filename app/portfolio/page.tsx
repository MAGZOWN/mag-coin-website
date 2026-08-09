"use client";

import type { CSSProperties, FormEvent } from "react";
import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReadOnlySafetyNotice from "../components/ReadOnlySafetyNotice";
import {
  getWalletPortfolio,
  type WalletPortfolio,
} from "../ecosystem/lib/portfolio";

function formatBalance(value: string, maximumFractionDigits = 6) {
  const numberValue = Number(value);

  if (!Number.isFinite(numberValue)) {
    return value;
  }

  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits,
  }).format(numberValue);
}

function shortenAddress(address: string) {
  return `${address.slice(0, 8)}...${address.slice(-6)}`;
}

export default function PortfolioPage() {
  const [walletAddress, setWalletAddress] = useState("");
  const [portfolio, setPortfolio] = useState<WalletPortfolio | null>(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErrorMessage("");
    setPortfolio(null);

    if (!walletAddress.trim()) {
      setErrorMessage("Please enter a Base wallet address.");
      return;
    }

    setIsLoading(true);

    try {
      const walletPortfolio = await getWalletPortfolio(walletAddress);
      setPortfolio(walletPortfolio);
    } catch (error) {
      console.error("Unable to load wallet portfolio:", error);

      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to read this wallet. Please check the address and try again.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <div style={styles.hero}>
            <span style={styles.kicker}>READ-ONLY BASE WALLET TOOL</span>

            <h1 style={styles.title}>MAG Portfolio</h1>

            <p style={styles.subtitle}>
              Enter any public Base wallet address to view its ETH, MAG and USDC
              balances directly from the blockchain.
            </p>
          </div>

          <div style={styles.searchCard} className="cardHover">
            <form onSubmit={handleSubmit}>
              <label htmlFor="wallet-address" style={styles.label}>
                Base Wallet Address
              </label>

              <div style={styles.formRow}>
                <input
                  id="wallet-address"
                  type="text"
                  value={walletAddress}
                  onChange={(event) => setWalletAddress(event.target.value)}
                  placeholder="Enter any Base wallet address..."
                  autoComplete="off"
                  spellCheck={false}
                  style={styles.input}
                  aria-describedby="wallet-help"
                />

                <button
                  type="submit"
                  disabled={isLoading}
                  className="primaryButton"
                  style={{
                    ...styles.button,
                    ...(isLoading ? styles.disabledButton : {}),
                  }}
                >
                  {isLoading ? "Analyzing..." : "Analyze Portfolio"}
                </button>
              </div>

              <p id="wallet-help" style={styles.helpText}>
                Example format: 0x followed by the wallet address.
              </p>
            </form>

            {errorMessage ? (
              <div role="alert" style={styles.errorNotice}>
                {errorMessage}
              </div>
            ) : null}
          </div>

          {portfolio ? (
            <section style={styles.resultsSection}>
              <div style={styles.resultsHeading}>
                <div>
                  <span style={styles.kicker}>LIVE BLOCKCHAIN RESULT</span>

                  <h2 style={styles.resultsTitle}>Wallet Overview</h2>
                </div>

                <span
                  style={{
                    ...styles.holderBadge,
                    ...(portfolio.holdsMag
                      ? styles.activeHolderBadge
                      : styles.nonHolderBadge),
                  }}
                >
                  {portfolio.holdsMag ? "MAG HOLDER" : "NO MAG DETECTED"}
                </span>
              </div>

              <div style={styles.walletCard} className="cardHover">
                <span style={styles.cardLabel}>Analyzed Wallet</span>

                <strong style={styles.walletAddress}>
                  {portfolio.address}
                </strong>

                <span style={styles.mobileAddress}>
                  {shortenAddress(portfolio.address)}
                </span>
              </div>

              <div style={styles.grid}>
                <article style={styles.balanceCard} className="cardHover">
                  <span style={styles.cardLabel}>ETH Balance</span>

                  <strong style={styles.balanceValue}>
                    {formatBalance(portfolio.ethBalance, 8)}
                  </strong>

                  <span style={styles.assetSymbol}>ETH</span>
                </article>

                <article style={styles.balanceCard} className="cardHover">
                  <span style={styles.cardLabel}>MAG Balance</span>

                  <strong style={styles.balanceValue}>
                    {formatBalance(portfolio.magBalance, 4)}
                  </strong>

                  <span style={styles.assetSymbol}>MAG</span>
                </article>

                <article style={styles.balanceCard} className="cardHover">
                  <span style={styles.cardLabel}>USDC Balance</span>

                  <strong style={styles.balanceValue}>
                    {formatBalance(portfolio.usdcBalance, 6)}
                  </strong>

                  <span style={styles.assetSymbol}>USDC</span>
                </article>

                <article style={styles.balanceCard} className="cardHover">
                  <span style={styles.cardLabel}>MAG Holder Status</span>

                  <strong style={styles.balanceValue}>
                    {portfolio.holdsMag ? "Yes" : "No"}
                  </strong>

                  <span style={styles.assetSymbol}>
                    {portfolio.holdsMag
                      ? "MAG detected in wallet"
                      : "No MAG balance detected"}
                  </span>
                </article>
              </div>

              <div style={styles.actionRow}>
                <a
                  href={portfolio.basescanAddressUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="primaryButton"
                  style={styles.primaryLink}
                >
                  Verify Wallet on BaseScan ↗
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setWalletAddress("");
                    setPortfolio(null);
                    setErrorMessage("");
                  }}
                  className="secondaryButton"
                  style={styles.secondaryButton}
                >
                  Analyze Another Wallet
                </button>
              </div>
            </section>
          ) : null}

          <ReadOnlySafetyNotice
            heading="Read-Only Security"
            description="MAG Portfolio reads only publicly available blockchain information. It does not connect to wallets, request signatures, approve tokens, initiate transactions or charge gas fees."
            bullets={[
              "Never share your private key or seed phrase.",
              "No wallet connection is required.",
              "No transaction approval is requested.",
              "All displayed balances can be independently verified.",
            ]}
            disclaimer="Blockchain balances may change at any time. This tool provides public informational data and does not constitute financial advice."
          />
        </section>
      </main>

      <Footer />
    </>
  );
}

const styles: Record<string, CSSProperties> = {
  main: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top,#171717 0%,#050505 45%,#000000 100%)",
    color: "#ffffff",
    padding: "70px 24px 100px",
    fontFamily: "Arial, sans-serif",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },

  hero: {
    maxWidth: "850px",
    margin: "0 auto 50px",
    textAlign: "center",
  },

  kicker: {
    display: "inline-block",
    color: "#f5c542",
    fontSize: "12px",
    fontWeight: 900,
    letterSpacing: "1.6px",
  },

  title: {
    margin: "16px 0 18px",
    fontSize: "clamp(46px, 8vw, 72px)",
    lineHeight: 1.08,
    fontWeight: 900,
    background: "linear-gradient(180deg,#ffffff 0%,#f5c542 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  subtitle: {
    maxWidth: "760px",
    margin: "0 auto",
    color: "#dddddd",
    fontSize: "clamp(17px, 2.2vw, 20px)",
    lineHeight: 1.75,
  },

  searchCard: {
    padding: "30px",
    marginBottom: "50px",
    border: "1px solid rgba(245,197,66,.22)",
    borderRadius: "20px",
    background:
      "linear-gradient(145deg, rgba(18,18,18,.97), rgba(5,5,5,.97))",
    boxShadow: "0 24px 70px rgba(0,0,0,.30)",
  },

  label: {
    display: "block",
    marginBottom: "12px",
    color: "#f5c542",
    fontSize: "14px",
    fontWeight: 800,
  },

  formRow: {
    display: "flex",
    alignItems: "stretch",
    gap: "14px",
    flexWrap: "wrap",
  },

  input: {
    flex: "1 1 550px",
    minWidth: 0,
    minHeight: "56px",
    padding: "0 18px",
    border: "1px solid #3a3a3a",
    borderRadius: "12px",
    outline: "none",
    background: "#080808",
    color: "#ffffff",
    fontSize: "15px",
    fontFamily: "monospace",
  },

  button: {
    minWidth: "210px",
    minHeight: "56px",
    padding: "0 24px",
    border: "none",
    borderRadius: "999px",
    background: "linear-gradient(135deg,#f5c542,#ffd86a)",
    color: "#050505",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: 900,
  },

  disabledButton: {
    cursor: "not-allowed",
    opacity: 0.65,
  },

  helpText: {
    margin: "12px 0 0",
    color: "#777777",
    fontSize: "12px",
    lineHeight: 1.6,
  },

  errorNotice: {
    marginTop: "18px",
    padding: "15px 18px",
    border: "1px solid rgba(248,113,113,.30)",
    borderRadius: "12px",
    background: "rgba(248,113,113,.07)",
    color: "#fca5a5",
    fontSize: "14px",
    lineHeight: 1.6,
  },

  resultsSection: {
    marginBottom: "55px",
  },

  resultsHeading: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "22px",
    flexWrap: "wrap",
    marginBottom: "24px",
  },

  resultsTitle: {
    margin: "10px 0 0",
    fontSize: "clamp(31px, 5vw, 46px)",
    lineHeight: 1.15,
    fontWeight: 900,
  },

  holderBadge: {
    display: "inline-flex",
    padding: "8px 13px",
    borderRadius: "999px",
    fontSize: "11px",
    fontWeight: 900,
    letterSpacing: "1px",
  },

  activeHolderBadge: {
    border: "1px solid rgba(74,222,128,.30)",
    background: "rgba(74,222,128,.08)",
    color: "#75e99d",
  },

  nonHolderBadge: {
    border: "1px solid rgba(245,197,66,.25)",
    background: "rgba(245,197,66,.06)",
    color: "#f5c542",
  },

  walletCard: {
    padding: "24px",
    marginBottom: "18px",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "18px",
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
  },

  cardLabel: {
    display: "block",
    marginBottom: "14px",
    color: "#969696",
    fontSize: "12px",
    fontWeight: 800,
    letterSpacing: ".8px",
    textTransform: "uppercase",
  },

  walletAddress: {
    display: "block",
    color: "#ffffff",
    fontFamily: "monospace",
    fontSize: "15px",
    lineHeight: 1.6,
    overflowWrap: "anywhere",
  },

  mobileAddress: {
    display: "none",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
  },

  balanceCard: {
    minHeight: "185px",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    border: "1px solid #333333",
    borderRadius: "18px",
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
  },

  balanceValue: {
    color: "#ffffff",
    fontSize: "clamp(25px, 4vw, 34px)",
    lineHeight: 1.2,
    fontWeight: 900,
    overflowWrap: "anywhere",
  },

  assetSymbol: {
    marginTop: "auto",
    paddingTop: "20px",
    color: "#f5c542",
    fontSize: "13px",
    fontWeight: 800,
  },

  actionRow: {
    marginTop: "26px",
    display: "flex",
    alignItems: "center",
    gap: "14px",
    flexWrap: "wrap",
  },

  primaryLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "52px",
    padding: "0 24px",
    borderRadius: "999px",
    background: "linear-gradient(135deg,#f5c542,#ffd86a)",
    color: "#050505",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 900,
  },

  secondaryButton: {
    minHeight: "52px",
    padding: "0 24px",
    border: "1px solid rgba(245,197,66,.65)",
    borderRadius: "999px",
    background: "transparent",
    color: "#f5c542",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: 900,
  },
};
