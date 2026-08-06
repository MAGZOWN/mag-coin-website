import type { CSSProperties } from "react";

import { blockchainService } from "../services/blockchainService";

import HeroTitle from "./ui/HeroTitle";
import PrimaryButton from "./ui/PrimaryButton";
import SecondaryButton from "./ui/SecondaryButton";

const BUY_MAG_URL =
  "https://app.uniswap.org/swap?outputCurrency=0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94&chain=base";

export default function Hero() {
  const token = blockchainService.getTokenSummary();

  return (
    <section style={styles.hero}>
      <img
        src="/mag-logo.png"
        alt={`${token.tokenName} Logo`}
        style={styles.logo}
        className="logoFloat fadeIn cardHover"
      />

      <HeroTitle>
        <>
          Built with Integrity.
          <br />
          Trusted for Generations.
        </>
      </HeroTitle>

      <p style={styles.subtitle}>
        A long-term blockchain project built on {token.network} with
        transparency, responsible stewardship, continuous improvement,
        and sustainable growth at its foundation.
      </p>

      <div style={styles.buttons}>
        <PrimaryButton
          href={BUY_MAG_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy MAG
        </PrimaryButton>

        <SecondaryButton href="/whitepaper">
          Read Whitepaper
        </SecondaryButton>

        <SecondaryButton href="/audit">
          Audit Report
        </SecondaryButton>

        <SecondaryButton
          href={blockchainService.getExplorerLink()}
          target="_blank"
          rel="noopener noreferrer"
        >
          BaseScan ↗
        </SecondaryButton>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  hero: {
    textAlign: "center",
    paddingTop: "20px",
    paddingBottom: "20px",
  },

  logo: {
    width: "210px",
    height: "210px",
    objectFit: "contain",
    display: "block",
    margin: "0 auto 28px",
  },

  subtitle: {
    fontSize: "18px",
    color: "#cfcfcf",
    lineHeight: "1.8",
    maxWidth: "760px",
    margin: "0 auto 38px",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "18px",
    flexWrap: "wrap",
  },
};
