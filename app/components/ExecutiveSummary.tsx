import type { CSSProperties } from "react";

const contractAddress = "0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94";

const documentDetails = [
  {
    label: "Document Version",
    value: "Version 1.0",
  },
  {
    label: "Edition",
    value: "Founder Edition",
  },
  {
    label: "Document Status",
    value: "Living Document",
  },
  {
    label: "Last Updated",
    value: "Updated Regularly",
  },
];

const tokenDetails = [
  {
    label: "Network",
    value: "Base Mainnet",
  },
  {
    label: "Token Standard",
    value: "ERC-20",
  },
  {
    label: "Token Symbol",
    value: "MAG",
  },
  {
    label: "Decimals",
    value: "18",
  },
  {
    label: "Total Supply",
    value: "1,000,000,000 MAG",
  },
  {
    label: "Official Website",
    value: "coinmagbase.com",
  },
];

const contents = [
  {
    number: "01",
    title: "Executive Summary",
    href: "#executive-summary",
  },
  {
    number: "02",
    title: "Project Philosophy",
    href: "#project-philosophy",
  },
  {
    number: "03",
    title: "Governance Philosophy",
    href: "#governance",
  },
  {
    number: "04",
    title: "Token Foundation",
    href: "#token-foundation",
  },
  {
    number: "05",
    title: "Development Strategy",
    href: "#development-strategy",
  },
  {
    number: "06",
    title: "Transparency Commitment",
    href: "#transparency-commitment",
  },
  {
    number: "07",
    title: "Future Roadmap",
    href: "#future-roadmap",
  },
  {
    number: "08",
    title: "Risk Disclosure",
    href: "#risk-disclosure",
  },
  {
    number: "09",
    title: "Founder Commitment",
    href: "#founder-commitment",
  },
];

export default function ExecutiveSummary() {
  return (
    <section
      id="executive-summary"
      style={styles.section}
      aria-labelledby="executive-summary-title"
    >
      <div style={styles.card} className="cardHover fadeIn">
        <p style={styles.label}>EXECUTIVE SUMMARY</p>

        <h2 id="executive-summary-title" style={styles.title}>
          Building a Responsible Blockchain Project for the Long Term
        </h2>

        <p style={styles.text}>
          MAG COIN is a long-term blockchain initiative built on Base Mainnet
          with a commitment to integrity, transparency, responsible
          stewardship, and continuous improvement. Rather than pursuing
          short-term hype or making unrealistic promises, the project focuses
          on sustainable development supported by public documentation,
          verifiable blockchain records, and clear communication.
        </p>

        <p style={styles.text}>
          Every milestone is approached carefully to strengthen trust through
          openness, accountability, and evidence. The objective is to develop
          an ecosystem that can evolve responsibly while remaining accessible
          to its community, future contributors, service providers, and
          independent reviewers.
        </p>

        <div style={styles.commitmentBox} className="magCard cardHover">
          <p style={styles.commitmentTitle}>MAG COIN Commitment</p>

          <div style={styles.commitmentGrid}>
            <span style={styles.commitmentItem} className="magCard cardHover">
              Build carefully.
            </span>
            <span style={styles.commitmentItem} className="magCard cardHover">
              Document everything.
            </span>
            <span style={styles.commitmentItem} className="magCard cardHover">
              Improve continuously.
            </span>
            <span style={styles.commitmentItem} className="magCard cardHover">
              Protect long-term trust.
            </span>
          </div>
        </div>

        <div style={styles.divider} />

        <div style={styles.metadataSection}>
          <div style={styles.sectionHeadingRow}>
            <div>
              <p style={styles.subLabel}>DOCUMENT CONTROL</p>
              <h3 style={styles.subTitle}>Whitepaper Information</h3>
            </div>

            <span style={styles.statusBadge}>Living Document</span>
          </div>

          <div style={styles.detailsGrid}>
            {documentDetails.map((item) => (
              <div
                key={item.label}
                style={styles.detailCard}
                className="magCard cardHover"
              >
                <span style={styles.detailLabel}>{item.label}</span>
                <strong style={styles.detailValue}>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.metadataSection}>
          <p style={styles.subLabel}>TOKEN INFORMATION</p>

          <h3 style={styles.subTitle}>Official MAG COIN Details</h3>

          <div style={styles.detailsGrid}>
            {tokenDetails.map((item) => (
              <div
                key={item.label}
                style={styles.detailCard}
                className="magCard cardHover"
              >
                <span style={styles.detailLabel}>{item.label}</span>
                <strong style={styles.detailValue}>{item.value}</strong>
              </div>
            ))}
          </div>

          <div style={styles.contractBox} className="magCard cardHover">
            <div style={styles.contractContent}>
              <span style={styles.contractLabel}>
                Official MAG COIN Contract
              </span>

              <code style={styles.contractAddress}>{contractAddress}</code>
            </div>

            <a
              href={`https://basescan.org/token/${contractAddress}`}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.contractLink}
              aria-label="Verify MAG COIN contract on BaseScan"
            >
              Verify on BaseScan ↗
            </a>
          </div>

          <p style={styles.verificationNote}>
            Always verify the complete contract address through the official
            MAG COIN website and BaseScan before interacting with the token.
          </p>
        </div>

        <div style={styles.divider} />

        <div style={styles.contentsSection}>
          <p style={styles.subLabel}>DOCUMENT NAVIGATION</p>

          <h3 style={styles.subTitle}>Table of Contents</h3>

          <p style={styles.contentsIntro}>
            Use the sections below to navigate through the MAG COIN
            Whitepaper.
          </p>

          <nav style={styles.contentsGrid} aria-label="Whitepaper contents">
            {contents.map((item) => (
              <a
                key={item.number}
                href={item.href}
                style={styles.contentsLink}
                className="navLink magCard cardHover"
              >
                <span style={styles.contentsNumber}>{item.number}</span>

                <span style={styles.contentsTitle}>{item.title}</span>

                <span style={styles.contentsArrow} aria-hidden="true">
                  ↓
                </span>
              </a>
            ))}
          </nav>
        </div>

        <div style={styles.purposeBox} className="magCard cardHover">
          <p style={styles.purposeTitle}>Purpose of This Whitepaper</p>

          <p style={styles.purposeText}>
            This document presents the philosophy, governance direction,
            development strategy, token foundation, transparency commitments,
            risk considerations, and long-term vision of MAG COIN. It should
            be read together with the project&apos;s Constitution, Tokenomics,
            Roadmap, Transparency, Security, and Audit materials.
          </p>

          <p style={styles.purposeText}>
            As a living document, this Whitepaper may be updated when material
            information, governance practices, security arrangements, or
            ecosystem plans change. Significant revisions should be identified
            through updated version information and official project
            communications.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginTop: "60px",
    marginBottom: "60px",
    scrollMarginTop: "110px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.97), rgba(7,7,7,.97))",
    border: "1px solid rgba(255,255,255,.14)",
    borderRadius: "24px",
    padding: "48px",
    color: "#e5e5e5",
    boxShadow: "0 18px 50px rgba(0,0,0,.28)",
  },

  label: {
    color: "#f5c542",
    letterSpacing: "3px",
    fontWeight: 800,
    fontSize: "13px",
    marginBottom: "18px",
  },

  title: {
    color: "#ffffff",
    fontSize: "38px",
    lineHeight: "1.3",
    margin: "0 0 26px",
    maxWidth: "900px",
    fontWeight: 850,
  },

  text: {
    color: "#d5d5d5",
    lineHeight: "1.9",
    fontSize: "18px",
    margin: "0 0 22px",
  },

  commitmentBox: {
    marginTop: "36px",
    background:
      "linear-gradient(135deg, rgba(245,197,66,.11), rgba(245,197,66,.04))",
    border: "1px solid rgba(245,197,66,.30)",
    borderRadius: "18px",
    padding: "28px",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
  },

  commitmentTitle: {
    color: "#ffffff",
    fontWeight: 800,
    fontSize: "16px",
    margin: "0 0 18px",
  },

  commitmentGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
    gap: "12px",
  },

  commitmentItem: {
    color: "#f5c542",
    background: "rgba(0,0,0,.20)",
    border: "1px solid rgba(245,197,66,.16)",
    borderRadius: "12px",
    padding: "13px 15px",
    fontWeight: 750,
    fontSize: "15px",
    lineHeight: "1.5",
    boxShadow: "0 10px 26px rgba(0,0,0,.20)",
  },

  divider: {
    height: "1px",
    background:
      "linear-gradient(90deg, transparent, rgba(245,197,66,.35), transparent)",
    margin: "46px 0",
  },

  metadataSection: {
    marginTop: "34px",
  },

  sectionHeadingRow: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
  },

  subLabel: {
    color: "#f5c542",
    letterSpacing: "2.5px",
    fontWeight: 800,
    fontSize: "12px",
    margin: "0 0 10px",
  },

  subTitle: {
    color: "#ffffff",
    fontSize: "27px",
    lineHeight: "1.3",
    margin: "0 0 24px",
    fontWeight: 850,
  },

  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#f5c542",
    background: "rgba(245,197,66,.09)",
    border: "1px solid rgba(245,197,66,.28)",
    borderRadius: "999px",
    padding: "9px 16px",
    fontSize: "13px",
    fontWeight: 750,
    whiteSpace: "nowrap",
  },

  detailsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(205px, 1fr))",
    gap: "16px",
  },

  detailCard: {
    minHeight: "92px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "9px",
    padding: "20px",
    background:
      "linear-gradient(145deg, rgba(255,255,255,.055), rgba(255,255,255,.025))",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "16px",
    boxShadow: "0 14px 34px rgba(0,0,0,.22)",
  },

  detailLabel: {
    color: "#a9a9a9",
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "1.1px",
    fontWeight: 700,
  },

  detailValue: {
    color: "#ffffff",
    fontSize: "16px",
    lineHeight: "1.5",
    overflowWrap: "anywhere",
  },

  contractBox: {
    marginTop: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
    padding: "22px",
    background: "rgba(245,197,66,.07)",
    border: "1px solid rgba(245,197,66,.25)",
    borderRadius: "16px",
    boxShadow: "0 16px 38px rgba(0,0,0,.23)",
  },

  contractContent: {
    minWidth: 0,
    flex: "1 1 560px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  contractLabel: {
    color: "#f5c542",
    fontSize: "13px",
    fontWeight: 800,
    letterSpacing: ".5px",
  },

  contractAddress: {
    color: "#ffffff",
    fontSize: "14px",
    lineHeight: "1.7",
    overflowWrap: "anywhere",
    wordBreak: "break-word",
    fontFamily:
      "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  },

  contractLink: {
    color: "#000000",
    background: "#f5c542",
    border: "2px solid #f5c542",
    borderRadius: "999px",
    padding: "12px 19px",
    textDecoration: "none",
    fontWeight: 850,
    fontSize: "13px",
    whiteSpace: "nowrap",
  },

  verificationNote: {
    color: "#a9a9a9",
    fontSize: "13px",
    lineHeight: "1.7",
    margin: "14px 2px 0",
  },

  contentsSection: {
    marginTop: "10px",
  },

  contentsIntro: {
    color: "#bdbdbd",
    fontSize: "15px",
    lineHeight: "1.7",
    margin: "-10px 0 22px",
  },

  contentsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "14px",
  },

  contentsLink: {
    display: "grid",
    gridTemplateColumns: "45px 1fr auto",
    alignItems: "center",
    gap: "12px",
    minHeight: "70px",
    padding: "14px 17px",
    color: "#ffffff",
    textDecoration: "none",
    background: "rgba(255,255,255,.035)",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "15px",
    boxShadow: "0 12px 30px rgba(0,0,0,.21)",
  },

  contentsNumber: {
    color: "#f5c542",
    fontSize: "13px",
    fontWeight: 850,
    letterSpacing: "1px",
  },

  contentsTitle: {
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: 700,
    lineHeight: "1.4",
  },

  contentsArrow: {
    color: "#f5c542",
    fontSize: "18px",
    fontWeight: 800,
  },

  purposeBox: {
    marginTop: "38px",
    padding: "28px",
    background:
      "linear-gradient(145deg, rgba(245,197,66,.09), rgba(245,197,66,.025))",
    border: "1px solid rgba(245,197,66,.23)",
    borderRadius: "18px",
    boxShadow: "0 18px 42px rgba(0,0,0,.24)",
  },

  purposeTitle: {
    color: "#f5c542",
    fontSize: "18px",
    fontWeight: 850,
    margin: "0 0 14px",
  },

  purposeText: {
    color: "#d3d3d3",
    fontSize: "15px",
    lineHeight: "1.85",
    margin: "0 0 14px",
  },
};
