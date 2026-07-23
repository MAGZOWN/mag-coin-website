"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  MAG_PROJECT_WALLET_ADDRESS,
  MAG_PROJECT_WALLET_BASESCAN_URL,
  MAG_PROJECT_WALLET_LABEL,
} from "../ecosystem/lib/config";
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

export default function TreasuryPage() {
  const [portfolio, setPortfolio] = useState<WalletPortfolio | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadTreasury() {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const treasuryPortfolio = await getWalletPortfolio(
          MAG_PROJECT_WALLET_ADDRESS,
        );

        if (!isMounted) {
          return;
        }

        setPortfolio(treasuryPortfolio);

        setLastUpdated(
          new Intl.DateTimeFormat("en-US", {
            dateStyle: "medium",
            timeStyle: "medium",
          }).format(new Date()),
        );
      } catch (error) {
        console.error("Unable to load MAG treasury information:", error);

        if (!isMounted) {
          return;
        }

        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Live treasury information is temporarily unavailable.",
        );
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadTreasury();

    const interval = window.setInterval(loadTreasury, 60_000);

    return () => {
      isMounted = false;
      window.clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <div style={styles.hero}>
            <span style={styles.kicker}>PUBLIC TREASURY TRANSPARENCY</span>

            <h1 className="goldGradient" style={styles.title}>
              MAG Treasury Dashboard
            </h1>

            <p style={styles.subtitle}>
              A read-only public view of the founder-controlled project wallet
              currently used for MAG COIN treasury, operational reserves and
              long-term project stewardship.
            </p>
          </div>

          <section style={styles.identityCard} className="cardHover">
            <div>
              <span style={styles.cardLabel}>Official Wallet Classification</span>

              <h2 style={styles.walletLabel}>
                {MAG_PROJECT_WALLET_LABEL}
              </h2>

              <code style={styles.walletAddress}>
                {MAG_PROJECT_WALLET_ADDRESS}
              </code>
            </div>

            <a
              href={MAG_PROJECT_WALLET_BASESCAN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="primaryButton"
              style={styles.verifyButton}
            >
              Verify on BaseScan ↗
            </a>
          </section>

          <section style={styles.statusSection}>
            <div style={styles.statusHeading}>
              <div>
                <span style={styles.kicker}>LIVE BASE MAINNET DATA</span>

                <h2 style={styles.sectionTitle}>Current Wallet Balances</h2>
              </div>

              <span
                style={{
                  ...styles.statusBadge,
                  ...(errorMessage
                    ? styles.errorBadge
                    : styles.connectedBadge),
                }}
              >
                {isLoading
                  ? "LOADING"
                  : errorMessage
                    ? "UNAVAILABLE"
                    : "LIVE"}
              </span>
            </div>

            {errorMessage ? (
              <div role="alert" style={styles.errorNotice}>
                {errorMessage}
              </div>
            ) : null}

            <div style={styles.grid}>
              <article style={styles.balanceCard} className="cardHover">
                <span style={styles.cardLabel}>ETH Reserve</span>

                <strong style={styles.balanceValue}>
                  {isLoading || !portfolio
                    ? "Loading…"
                    : formatBalance(portfolio.ethBalance, 8)}
                </strong>

                <span style={styles.assetSymbol}>ETH</span>
              </article>

              <article style={styles.balanceCard} className="cardHover">
                <span style={styles.cardLabel}>MAG Balance</span>

                <strong style={styles.balanceValue}>
                  {isLoading || !portfolio
                    ? "Loading…"
                    : formatBalance(portfolio.magBalance, 4)}
                </strong>

                <span style={styles.assetSymbol}>MAG</span>
              </article>

              <article style={styles.balanceCard} className="cardHover">
                <span style={styles.cardLabel}>USDC Reserve</span>

                <strong style={styles.balanceValue}>
                  {isLoading || !portfolio
                    ? "Loading…"
                    : formatBalance(portfolio.usdcBalance, 6)}
                </strong>

                <span style={styles.assetSymbol}>USDC</span>
              </article>

              <article style={styles.balanceCard} className="cardHover">
                <span style={styles.cardLabel}>MAG Holder Status</span>

                <strong style={styles.balanceValue}>
                  {isLoading || !portfolio
                    ? "Loading…"
                    : portfolio.holdsMag
                      ? "Confirmed"
                      : "Not Detected"}
                </strong>

                <span style={styles.assetSymbol}>
                  Verified through the MAG contract
                </span>
              </article>
            </div>

            <div style={styles.updatedRow}>
              <span>
                {lastUpdated
                  ? `Last updated: ${lastUpdated}`
                  : "Checking Base Mainnet…"}
              </span>

              <span>Automatically refreshed every 60 seconds</span>
            </div>
          </section>

          <section style={styles.policySection}>
            <div style={styles.sectionHeading}>
              <span style={styles.kicker}>TREASURY POLICY</span>

              <h2 style={styles.sectionTitle}>
                Preservation Before Expansion
              </h2>

              <p style={styles.sectionDescription}>
                MAG COIN currently uses one founder-controlled project wallet.
                This status is disclosed openly and must not be confused with a
                multisignature, institutional or independently governed
                treasury.
              </p>
            </div>

            <div style={styles.policyGrid}>
              <article style={styles.policyCard} className="cardHover">
                <span style={styles.policyNumber}>01</span>

                <h3 style={styles.policyTitle}>Preserve the Treasury</h3>

                <p style={styles.policyText}>
                  Project reserves should be protected and used only when an
                  expense improves security, trust, utility, visibility or
                  responsible adoption.
                </p>
              </article>

              <article style={styles.policyCard} className="cardHover">
                <span style={styles.policyNumber}>02</span>

                <h3 style={styles.policyTitle}>Gradual Liquidity Growth</h3>

                <p style={styles.policyText}>
                  Liquidity should be expanded in small, sustainable stages
                  without compromising long-term project stability.
                </p>
              </article>

              <article style={styles.policyCard} className="cardHover">
                <span style={styles.policyNumber}>03</span>

                <h3 style={styles.policyTitle}>Public Verification</h3>

                <p style={styles.policyText}>
                  Important treasury movements should remain visible on-chain
                  and be supported by transaction records and clear reasons.
                </p>
              </article>

              <article style={styles.policyCard} className="cardHover">
                <span style={styles.policyNumber}>04</span>

                <h3 style={styles.policyTitle}>Future Governance</h3>

                <p style={styles.policyText}>
                  As MAG COIN matures, separate operational wallets or
                  multisignature controls may be considered and documented
                  before implementation.
                </p>
              </article>
            </div>
          </section>

          <section style={styles.securityCard} className="cardHover">
            <h2 style={styles.securityHeading}>Read-Only Transparency</h2>

            <p style={styles.securityText}>
              This dashboard reads public blockchain balances only. It cannot
              access the wallet, move funds, request signatures, approve tokens
              or initiate transactions.
            </p>

            <ul style={styles.securityList}>
              <li>No wallet connection is required.</li>
              <li>No private key or seed phrase is requested.</li>
              <li>No transaction approval is requested.</li>
              <li>All balances can be independently verified on BaseScan.</li>
            </ul>
          </section>

          <div style={styles.disclaimer}>
            Wallet balances may change at any time. Displayed balances do not
            represent audited financial statements and do not constitute
            financial, legal, tax or investment advice.
          </div>
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
      "radial-gradient(circle at top, #171717 0%, #050505 44%, #000000 100%)",
    color: "#ffffff",
    padding: "75px 24px 110px",
    fontFamily: "Arial, sans-serif",
  },

  container: {
    maxWidth: "1160px",
    margin: "0 auto",
  },

  hero: {
    maxWidth: "900px",
    margin: "0 auto 52px",
    textAlign: "center",
  },

  kicker: {
    color: "#f5c542",
    fontSize: "12px",
    fontWeight: 900,
    letterSpacing: "1.6px",
  },

  title: {
    margin: "18px 0",
    fontSize: "clamp(44px, 7vw, 72px)",
    lineHeight: 1.08,
    fontWeight: 900,
  },

  subtitle: {
    maxWidth: "800px",
    margin: "0 auto",
    color: "#d0d0d0",
    fontSize: "clamp(17px, 2vw, 20px)",
    lineHeight: 1.75,
  },

  identityCard: {
    marginBottom: "60px",
    padding: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "26px",
    flexWrap: "wrap",
    border: "1px solid rgba(245,197,66,.22)",
    borderRadius: "20px",
    background:
      "linear-gradient(145deg, rgba(20,20,20,.97), rgba(5,5,5,.97))",
    boxShadow: "0 24px 70px rgba(0,0,0,.28)",
  },

  cardLabel: {
    display: "block",
    marginBottom: "12px",
    color: "#969696",
    fontSize: "12px",
    fontWeight: 800,
    letterSpacing: ".8px",
    textTransform: "uppercase",
  },

  walletLabel: {
    margin: "0 0 14px",
    color: "#ffffff",
    fontSize: "clamp(22px, 4vw, 31px)",
    lineHeight: 1.3,
  },

  walletAddress: {
    color: "#f5c542",
    fontSize: "13px",
    lineHeight: 1.7,
    overflowWrap: "anywhere",
  },

  verifyButton: {
    minHeight: "52px",
    padding: "0 24px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "999px",
    background: "linear-gradient(135deg, #f5c542, #ffd86a)",
    color: "#050505",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 900,
  },

  statusSection: {
    marginBottom: "85px",
  },

  statusHeading: {
    marginBottom: "28px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
  },

  sectionHeading: {
    maxWidth: "800px",
    marginBottom: "38px",
  },

  sectionTitle: {
    margin: "11px 0 12px",
    fontSize: "clamp(31px, 5vw, 48px)",
    lineHeight: 1.15,
    fontWeight: 900,
  },

  sectionDescription: {
    margin: 0,
    color: "#bdbdbd",
    fontSize: "16px",
    lineHeight: 1.75,
  },

  statusBadge: {
    display: "inline-flex",
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

  errorBadge: {
    border: "1px solid rgba(248,113,113,.30)",
    background: "rgba(248,113,113,.08)",
    color: "#fca5a5",
  },

  errorNotice: {
    marginBottom: "20px",
    padding: "16px 18px",
    border: "1px solid rgba(248,113,113,.30)",
    borderRadius: "13px",
    background: "rgba(248,113,113,.07)",
    color: "#fca5a5",
    fontSize: "14px",
    lineHeight: 1.65,
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(225px, 1fr))",
    gap: "18px",
  },

  balanceCard: {
    minHeight: "190px",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "18px",
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    boxShadow: "0 18px 50px rgba(0,0,0,.20)",
  },

  balanceValue: {
    color: "#ffffff",
    fontSize: "clamp(24px, 4vw, 34px)",
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
    lineHeight: 1.5,
  },

  updatedRow: {
    marginTop: "18px",
    display: "flex",
    justifyContent: "space-between",
    gap: "14px",
    flexWrap: "wrap",
    color: "#828282",
    fontSize: "12px",
  },

  policySection: {
    marginBottom: "75px",
  },

  policyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "18px",
  },

  policyCard: {
    minHeight: "250px",
    padding: "26px",
    border: "1px solid rgba(245,197,66,.14)",
    borderRadius: "18px",
    background:
      "linear-gradient(145deg, rgba(245,197,66,.04), rgba(255,255,255,.015))",
    boxShadow: "0 18px 50px rgba(0,0,0,.18)",
  },

  policyNumber: {
    color: "#f5c542",
    fontSize: "13px",
    fontWeight: 900,
    letterSpacing: "1px",
  },

  policyTitle: {
    margin: "20px 0 12px",
    color: "#ffffff",
    fontSize: "21px",
    lineHeight: 1.3,
  },

  policyText: {
    margin: 0,
    color: "#bdbdbd",
    fontSize: "14px",
    lineHeight: 1.75,
  },

  securityCard: {
    padding: "30px",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "18px",
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    boxShadow: "0 20px 55px rgba(0,0,0,.20)",
  },

  securityHeading: {
    margin: "0 0 14px",
    color: "#f5c542",
    fontSize: "30px",
  },

  securityText: {
    margin: "0 0 18px",
    color: "#d1d1d1",
    fontSize: "15px",
    lineHeight: 1.8,
  },

  securityList: {
    margin: 0,
    paddingLeft: "22px",
    color: "#bdbdbd",
    lineHeight: 2,
  },

  disclaimer: {
    marginTop: "22px",
    padding: "17px 20px",
    border: "1px solid rgba(245,197,66,.14)",
    borderRadius: "14px",
    background: "rgba(245,197,66,.035)",
    color: "#929292",
    fontSize: "13px",
    lineHeight: 1.7,
  },
};
