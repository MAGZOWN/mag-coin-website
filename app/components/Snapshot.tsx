import type { CSSProperties, ReactNode } from "react";

import { blockchainService } from "../services/blockchainService";
import ContractActions from "./ContractActions";

const MAG_USDC_POOL_URL =
  "https://app.uniswap.org/explore/pools/base/0xfb1bb0105d24b563d83376e2d7425dd5e9652ca0";

const iconStyle: CSSProperties = {
  width: "34px",
  height: "34px",
  margin: "0 auto 12px",
  color: "#f5c542",
};

type SnapshotLinkCardProps = {
  href: string;
  icon: ReactNode;
  title: string;
  value: string;
  hint: string;
  external?: boolean;
};

function SnapshotLinkCard({
  href,
  icon,
  title,
  value,
  hint,
  external = false,
}: SnapshotLinkCardProps) {
  return (
    <a
      href={href}
      style={styles.snapshotItem}
      className="cardHover"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {icon}

      <strong style={styles.cardTitle}>{title}</strong>

      <p style={styles.cardValue}>{value}</p>

      <span style={styles.linkHint}>
        {hint}
        {external ? " ↗" : ""}
      </span>
    </a>
  );
}

function GlobeIcon() {
  return (
    <svg
      style={iconStyle}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c3 3.5 3 14 0 18" />
      <path d="M12 3c-3 3.5-3 14 0 18" />
    </svg>
  );
}

function CoinIcon() {
  return (
    <svg
      style={iconStyle}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8" />
      <path d="M9 12h6" />
    </svg>
  );
}

function SupplyIcon() {
  return (
    <svg
      style={iconStyle}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
      <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      style={iconStyle}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M7 3h7l5 5v13H7z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </svg>
  );
}

function VerifiedIcon() {
  return (
    <svg
      style={iconStyle}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M12 3l2.2 1.5 2.7-.1.8 2.6 2.2 1.6-.9 2.5.9 2.5-2.2 1.6-.8 2.6-2.7-.1L12 21l-2.2-1.5-2.7.1-.8-2.6-2.2-1.6.9-2.5-.9-2.5L6.3 7l.8-2.6 2.7.1z" />
      <path d="M8.5 12l2.2 2.2 4.8-5" />
    </svg>
  );
}

function LiquidityIcon() {
  return (
    <svg
      style={iconStyle}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M12 3s6 6.2 6 11a6 6 0 0 1-12 0c0-4.8 6-11 6-11z" />
      <path d="M9 15a3 3 0 0 0 3 2" />
    </svg>
  );
}

function SecurityIcon() {
  return (
    <svg
      style={iconStyle}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M12 3l7 3v5c0 4.6-2.9 8.1-7 10-4.1-1.9-7-5.4-7-10V6z" />
      <path d="M9 12l2 2 4-5" />
    </svg>
  );
}

function EcosystemIcon() {
  return (
    <svg
      style={iconStyle}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="5" r="2.5" />
      <circle cx="5" cy="18" r="2.5" />
      <circle cx="19" cy="18" r="2.5" />
      <path d="M10.7 7.2L6.3 15.8" />
      <path d="M13.3 7.2l4.4 8.6" />
      <path d="M7.5 18h9" />
    </svg>
  );
}

export default function Snapshot() {
  const token = blockchainService.getTokenSummary();

  return (
    <section style={styles.snapshot} className="magCard">
      <h2 className="goldGradient" style={styles.snapshotTitle}>
        MAG COIN at a Glance
      </h2>

      <p style={styles.subtitle}>
        Essential project information and current development progress,
        presented through official and independently verifiable sources.
      </p>

      <div style={styles.group}>
        <p style={styles.groupLabel}>Core Project Information</p>

        <div style={styles.snapshotGrid}>
          <SnapshotLinkCard
            href="/about"
            icon={<GlobeIcon />}
            title="Network"
            value={blockchainService.getNetwork()}
            hint="Learn about Base deployment"
          />

          <SnapshotLinkCard
            href="/whitepaper"
            icon={<CoinIcon />}
            title="Token Symbol"
            value={blockchainService.getSymbol()}
            hint="Read the project overview"
          />

          <SnapshotLinkCard
            href="/tokenomics"
            icon={<SupplyIcon />}
            title="Total Supply"
            value={token.totalSupply}
            hint="View official tokenomics"
          />

          <div style={styles.snapshotItem} className="cardHover">
            <DocumentIcon />

            <strong style={styles.cardTitle}>Official Contract</strong>

            <p style={styles.contract}>
              {blockchainService.getShortContract()}
            </p>

            <ContractActions />
          </div>
        </div>
      </div>

      <div style={styles.divider} />

      <div style={styles.group}>
        <p style={styles.groupLabel}>Live Project Progress</p>

        <div style={styles.snapshotGrid}>
          <SnapshotLinkCard
            href={blockchainService.getExplorerLink()}
            icon={<VerifiedIcon />}
            title="Contract Status"
            value="Verified"
            hint="Verify on BaseScan"
            external
          />

          <SnapshotLinkCard
            href={MAG_USDC_POOL_URL}
            icon={<LiquidityIcon />}
            title="MAG/USDC Liquidity"
            value="Live"
            hint="View the Uniswap pool"
            external
          />

          <SnapshotLinkCard
            href="/security"
            icon={<SecurityIcon />}
            title="Security Centre"
            value="Active"
            hint="Review security information"
          />

          <SnapshotLinkCard
            href="/ecosystem"
            icon={<EcosystemIcon />}
            title="Ecosystem"
            value="Growing"
            hint="Explore live project modules"
          />
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
    fontSize: "28px",
    marginBottom: "14px",
    fontWeight: 900,
  },

  subtitle: {
    maxWidth: "760px",
    margin: "0 auto 34px",
    color: "#bdbdbd",
    fontSize: "15px",
    lineHeight: "1.8",
  },

  group: {
    width: "100%",
  },

  groupLabel: {
    marginBottom: "18px",
    color: "#f5c542",
    fontSize: "14px",
    fontWeight: 800,
    letterSpacing: "1px",
    textTransform: "uppercase",
  },

  snapshotGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
    gap: "22px",
  },

  snapshotItem: {
    background: "rgba(255,255,255,0.035)",
    border: "1px solid #2f2f2f",
    borderRadius: "18px",
    padding: "24px 18px",
    lineHeight: "1.7",
    minHeight: "178px",
    color: "#e5e5e5",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  cardTitle: {
    color: "#ffffff",
    fontSize: "15px",
  },

  cardValue: {
    color: "#d6d6d6",
    marginTop: "8px",
    marginBottom: "0",
    fontSize: "15px",
    fontWeight: 700,
  },

  contract: {
    wordBreak: "break-all",
    fontSize: "13px",
    color: "#d6d6d6",
    marginTop: "8px",
    marginBottom: "14px",
  },

  linkHint: {
    display: "block",
    marginTop: "auto",
    paddingTop: "12px",
    color: "#f5c542",
    fontSize: "12px",
    fontWeight: 700,
  },

  divider: {
    width: "100%",
    height: "1px",
    margin: "34px 0",
    background:
      "linear-gradient(90deg, transparent, rgba(245,197,66,0.45), transparent)",
  },
};
