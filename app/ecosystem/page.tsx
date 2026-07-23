import type { CSSProperties } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LiveTokenData from "./components/LiveTokenData";
import LiveBlockchainStats from "./components/LiveBlockchainStats";

const CONTRACT_ADDRESS = "0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94";

const BASESCAN_TOKEN_URL = `https://basescan.org/token/${CONTRACT_ADDRESS}`;

const UNISWAP_POOL_URL =
  "https://app.uniswap.org/explore/pools/base/0xfb1bb0105d24b563d83376e2d7425dd5e9652ca0";

const liveModules = [
  {
    title: "MAG COIN on Base",
    description:
      "The verified MAG smart contract is deployed on Base Mainnet with a fixed total supply of 1,000,000,000 MAG.",
    status: "LIVE",
    href: BASESCAN_TOKEN_URL,
    action: "View on BaseScan",
    external: true,
  },
  {
    title: "MAG/USDC Market",
    description:
      "The official MAG/USDC liquidity market provides public, on-chain access to MAG trading and liquidity information.",
    status: "LIVE",
    href: UNISWAP_POOL_URL,
    action: "Open Market",
    external: true,
  },
  {
    title: "MAG Portfolio",
    description:
      "A read-only Base wallet tool for viewing ETH, MAG and USDC balances, checking MAG holder status and verifying addresses on BaseScan.",
    status: "LIVE",
    href: "/portfolio",
    action: "Open Portfolio",
    external: false,
  },
  {
    title: "Transparency Centre",
    description:
      "Project status, official references, development records and verification resources are available publicly.",
    status: "LIVE",
    href: "/transparency",
    action: "View Transparency",
    external: false,
  },
  {
    title: "Security Centre",
    description:
      "Official contract verification, safety guidance and project security commitments are documented openly.",
    status: "LIVE",
    href: "/security",
    action: "View Security",
    external: false,
  },
  {
    title: "Treasury Dashboard",
    description:
      "A read-only public view of the MAG COIN founder and project treasury wallet, including live ETH, MAG and USDC balances.",
    status: "LIVE",
    href: "/treasury",
    action: "Open Treasury",
    external: false,
  },
];

const developmentModules = [
  {
    title: "Liquidity Intelligence",
    phase: "Phase 2",
    description:
      "Clear analytics covering liquidity depth, market activity, concentration, price impact and ecosystem risk.",
  },
  {
    title: "Holder Reputation",
    phase: "Phase 2",
    description:
      "Non-financial badges for early holders, contributors, governance participants and community supporters.",
  },
  {
    title: "MAG Vault",
    phase: "Testnet First",
    description:
      "A future audited token-locking system with transparent terms and no guaranteed or fabricated returns.",
  },
  {
    title: "Governance",
    phase: "Future",
    description:
      "Proposal creation, public discussion, voting records and transparent execution under defined safeguards.",
  },
];

const revenuePaths = [
  {
    number: "01",
    title: "Ecosystem Services",
    description:
      "Optional premium tools, advanced analytics, APIs, reporting services or business integrations may create service revenue.",
  },
  {
    number: "02",
    title: "Protocol Fees",
    description:
      "Future audited MAG services may charge small, clearly disclosed fees for genuine functions performed for users.",
  },
  {
    number: "03",
    title: "Partnerships and Integrations",
    description:
      "Approved projects, merchants and platforms may pay for technical integration, promotion or ecosystem services.",
  },
  {
    number: "04",
    title: "Grants and Development Support",
    description:
      "Base ecosystem grants, builder programmes and aligned partners may help fund useful infrastructure without selling unrealistic promises.",
  },
  {
    number: "05",
    title: "Treasury Income",
    description:
      "Only genuine, documented treasury income or collected liquidity fees may support approved operations and community programmes.",
  },
  {
    number: "06",
    title: "Real-World Utility",
    description:
      "Long-term revenue may come from memberships, digital services, marketplace functions or payments that provide measurable value.",
  },
];

const principles = [
  "No guaranteed daily or fixed investment returns",
  "No multi-level recruitment or downline compensation",
  "No hidden minting or undisclosed token creation",
  "No access to wallet seed phrases or private keys",
  "No unaudited Mainnet financial contracts",
  "No treasury automation without defined controls",
  "Every reward must have a disclosed funding source",
  "Every important transaction must remain independently verifiable",
];

const plannedAnalytics = [
  "Liquidity Health",
  "Holder Concentration",
  "Treasury Runway",
  "Market Activity",
  "Governance Participation",
  "Security and Risk Alerts",
];

export default function EcosystemPage() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.hero}>
          <div style={styles.heroGlow} />

          <div style={styles.heroContent}>
            <div style={styles.kicker}>MAG COIN ECOSYSTEM</div>

            <h1 className="goldGradient" style={styles.title}>
              Building Utility with Integrity
            </h1>

            <p style={styles.subtitle}>
              A responsible ecosystem for holders, markets, transparency,
              governance, intelligence and sustainable long-term utility on
              Base.
            </p>

            <div style={styles.heroActions}>
              <a
                href={BASESCAN_TOKEN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="primaryButton"
                style={styles.primaryButton}
              >
                Verify MAG Contract ↗
              </a>

              <a
                href={UNISWAP_POOL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="secondaryButton"
                style={styles.secondaryButton}
              >
                Open MAG/USDC Market ↗
              </a>
            </div>

            <div style={styles.contractBox} className="cardHover">
              <span style={styles.contractLabel}>Official Contract</span>

              <code style={styles.contractAddress}>{CONTRACT_ADDRESS}</code>
            </div>
          </div>
        </section>

        <LiveTokenData />

        <LiveBlockchainStats />

        <section style={styles.section}>
          <div style={styles.sectionHeading}>
            <span style={styles.sectionKicker}>AVAILABLE NOW</span>

            <h2 style={styles.sectionTitle}>Live Ecosystem Foundation</h2>

            <p style={styles.sectionDescription}>
              These services, tools and resources are currently available and
              can be independently checked.
            </p>
          </div>

          <div style={styles.cardGrid}>
            {liveModules.map((module) => (
              <article
                key={module.title}
                className="ecosystemCard cardHover"
                style={styles.card}
              >
                <div style={styles.cardTop}>
                  <span style={styles.liveBadge}>{module.status}</span>
                </div>

                <h3 style={styles.cardTitle}>{module.title}</h3>

                <p style={styles.cardDescription}>{module.description}</p>

                <a
                  href={module.href}
                  target={module.external ? "_blank" : undefined}
                  rel={
                    module.external ? "noopener noreferrer" : undefined
                  }
                  style={styles.cardLink}
                  className="navLink"
                >
                  {module.action} {module.external ? "↗" : "→"}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section style={styles.sectionAlt}>
          <div style={styles.sectionHeading}>
            <span style={styles.sectionKicker}>DEVELOPMENT ROADMAP</span>

            <h2 style={styles.sectionTitle}>Planned Ecosystem Modules</h2>

            <p style={styles.sectionDescription}>
              Modules will be introduced gradually, tested carefully and
              documented before they are presented as operational.
            </p>
          </div>

          <div style={styles.cardGrid}>
            {developmentModules.map((module) => (
              <article
                key={module.title}
                className="ecosystemCard cardHover"
                style={styles.developmentCard}
              >
                <span style={styles.phaseBadge}>{module.phase}</span>

                <h3 style={styles.cardTitle}>{module.title}</h3>

                <p style={styles.cardDescription}>{module.description}</p>

                <div style={styles.developmentNotice}>
                  Development subject to testing, audit and available resources.
                </div>
              </article>
            ))}
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeading}>
            <span style={styles.sectionKicker}>SUSTAINABILITY</span>

            <h2 style={styles.sectionTitle}>
              How MAG COIN May Earn Over Time
            </h2>

            <p style={styles.sectionDescription}>
              MAG COIN will not depend on guaranteed-return promises.
              Sustainable income must come from real services, integrations,
              utility or transparently documented ecosystem activity.
            </p>
          </div>

          <div style={styles.revenueGrid}>
            {revenuePaths.map((item) => (
              <article
                key={item.number}
                className="ecosystemCard cardHover"
                style={styles.revenueCard}
              >
                <div style={styles.revenueNumber}>{item.number}</div>

                <h3 style={styles.cardTitle}>{item.title}</h3>

                <p style={styles.cardDescription}>{item.description}</p>
              </article>
            ))}
          </div>

          <div style={styles.revenueNotice} className="cardHover">
            <strong style={styles.noticeStrong}>Important:</strong> These are
            possible long-term business models, not current income guarantees.
            Each model requires proper development, demand, disclosure, legal
            review where applicable and transparent accounting.
          </div>
        </section>

        <section style={styles.sectionAlt}>
          <div style={styles.sectionHeading}>
            <span style={styles.sectionKicker}>INTELLIGENCE LAYER</span>

            <h2 style={styles.sectionTitle}>MAG Intelligence Centre</h2>

            <p style={styles.sectionDescription}>
              A future evidence-based intelligence layer will explain ecosystem
              conditions without giving uncontrolled authority to automated
              systems.
            </p>
          </div>

          <div style={styles.intelligenceLayout}>
            <div
              style={styles.intelligencePanel}
              className="ecosystemCard cardHover"
            >
              <h3 style={styles.panelTitle}>Planned Analytics</h3>

              <div style={styles.metricList}>
                {plannedAnalytics.map((metric) => (
                  <div
                    key={metric}
                    style={styles.metricItem}
                    className="cardHover"
                  >
                    <span>{metric}</span>

                    <span style={styles.plannedLabel}>Planned</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={styles.intelligencePanel}
              className="ecosystemCard cardHover"
            >
              <h3 style={styles.panelTitle}>Responsible Automation</h3>

              <p style={styles.panelText}>
                The intelligence system may analyse public information and
                produce recommendations, but it will not secretly mint tokens,
                move treasury assets, trade user funds or change protocol rules.
              </p>

              <div style={styles.analysisFlow}>
                <span style={styles.flowItem} className="cardHover">
                  Public Data
                </span>

                <span style={styles.flowArrow}>→</span>

                <span style={styles.flowItem} className="cardHover">
                  Risk Analysis
                </span>

                <span style={styles.flowArrow}>→</span>

                <span style={styles.flowItem} className="cardHover">
                  Human Review
                </span>
              </div>
            </div>
          </div>
        </section>

        <section style={styles.section}>
          <div style={styles.sectionHeading}>
            <span style={styles.sectionKicker}>NON-NEGOTIABLE PRINCIPLES</span>

            <h2 style={styles.sectionTitle}>Safety Before Speed</h2>
          </div>

          <div style={styles.principlesGrid}>
            {principles.map((principle) => (
              <div
                key={principle}
                className="ecosystemCard cardHover"
                style={styles.principleCard}
              >
                <span style={styles.checkmark}>✓</span>

                <span>{principle}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={styles.finalSection}>
          <div style={styles.finalCard} className="cardHover">
            <span style={styles.sectionKicker}>THE LONG-TERM DIRECTION</span>

            <h2 className="goldGradient" style={styles.finalTitle}>
              Build Slowly. Verify Everything. Create Real Value.
            </h2>

            <p style={styles.finalText}>
              MAG COIN begins with limited resources but a clear commitment to
              transparency, responsible development and long-term usefulness.
              Features will be added only when they can be built safely and
              honestly.
            </p>

            <div style={styles.heroActions}>
              <a
                href="/roadmap"
                className="primaryButton"
                style={styles.primaryButton}
              >
                View Roadmap
              </a>

              <a
                href="/transparency"
                className="secondaryButton"
                style={styles.secondaryButton}
              >
                Transparency Centre
              </a>
            </div>
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
      "radial-gradient(circle at top, #171717 0%, #050505 42%, #000000 100%)",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
    overflow: "hidden",
  },

  hero: {
    position: "relative",
    minHeight: "640px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "90px 24px 70px",
    borderBottom: "1px solid rgba(245,197,66,.10)",
  },

  heroGlow: {
    position: "absolute",
    width: "650px",
    height: "650px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(245,197,66,.15) 0%, rgba(245,197,66,.04) 42%, transparent 72%)",
    filter: "blur(12px)",
    pointerEvents: "none",
  },

  heroContent: {
    position: "relative",
    zIndex: 1,
    width: "100%",
    maxWidth: "1050px",
    margin: "0 auto",
    textAlign: "center",
  },

  kicker: {
    display: "inline-flex",
    padding: "8px 15px",
    border: "1px solid rgba(245,197,66,.30)",
    borderRadius: "999px",
    color: "#f5c542",
    background: "rgba(245,197,66,.06)",
    fontSize: "12px",
    fontWeight: 800,
    letterSpacing: "1.7px",
  },

  title: {
    maxWidth: "900px",
    margin: "28px auto 18px",
    fontSize: "clamp(42px, 7vw, 78px)",
    lineHeight: 1.04,
    fontWeight: 900,
    letterSpacing: "-2px",
  },

  subtitle: {
    maxWidth: "800px",
    margin: "0 auto",
    color: "#d2d2d2",
    fontSize: "clamp(17px, 2vw, 21px)",
    lineHeight: 1.75,
  },

  heroActions: {
    marginTop: "34px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "16px",
    flexWrap: "wrap",
  },

  primaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "210px",
    minHeight: "54px",
    padding: "0 26px",
    borderRadius: "999px",
    background: "linear-gradient(135deg, #f5c542, #ffd86a)",
    color: "#050505",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 800,
    boxShadow: "0 12px 35px rgba(245,197,66,.17)",
  },

  secondaryButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "210px",
    minHeight: "54px",
    padding: "0 26px",
    borderRadius: "999px",
    border: "1px solid rgba(245,197,66,.75)",
    background: "rgba(0,0,0,.30)",
    color: "#f5c542",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 800,
  },

  contractBox: {
    maxWidth: "760px",
    margin: "38px auto 0",
    padding: "18px 22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "14px",
    flexWrap: "wrap",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "16px",
    background: "rgba(255,255,255,.025)",
    boxShadow: "0 18px 45px rgba(0,0,0,.20)",
  },

  contractLabel: {
    color: "#f5c542",
    fontSize: "13px",
    fontWeight: 800,
  },

  contractAddress: {
    color: "#d8d8d8",
    fontSize: "13px",
    overflowWrap: "anywhere",
  },

  section: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "95px 24px",
  },

  sectionAlt: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "95px 24px",
    borderTop: "1px solid rgba(255,255,255,.06)",
    borderBottom: "1px solid rgba(255,255,255,.06)",
  },

  sectionHeading: {
    maxWidth: "790px",
    marginBottom: "42px",
  },

  sectionKicker: {
    color: "#f5c542",
    fontSize: "12px",
    fontWeight: 900,
    letterSpacing: "1.6px",
  },

  sectionTitle: {
    margin: "12px 0 14px",
    fontSize: "clamp(31px, 5vw, 48px)",
    lineHeight: 1.12,
    fontWeight: 900,
  },

  sectionDescription: {
    margin: 0,
    color: "#bcbcbc",
    fontSize: "17px",
    lineHeight: 1.75,
  },

  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(245px, 1fr))",
    gap: "20px",
  },

  card: {
    minHeight: "285px",
    padding: "26px",
    display: "flex",
    flexDirection: "column",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "20px",
    background:
      "linear-gradient(145deg, rgba(255,255,255,.05), rgba(255,255,255,.015))",
    boxShadow: "0 20px 55px rgba(0,0,0,.22)",
  },

  cardTop: {
    minHeight: "30px",
  },

  liveBadge: {
    display: "inline-flex",
    padding: "6px 10px",
    borderRadius: "999px",
    background: "rgba(74,222,128,.10)",
    border: "1px solid rgba(74,222,128,.30)",
    color: "#75e99d",
    fontSize: "11px",
    fontWeight: 900,
    letterSpacing: "1px",
  },

  phaseBadge: {
    alignSelf: "flex-start",
    display: "inline-flex",
    padding: "6px 10px",
    borderRadius: "999px",
    background: "rgba(245,197,66,.08)",
    border: "1px solid rgba(245,197,66,.25)",
    color: "#f5c542",
    fontSize: "11px",
    fontWeight: 900,
    letterSpacing: ".6px",
  },

  developmentCard: {
    minHeight: "300px",
    padding: "26px",
    display: "flex",
    flexDirection: "column",
    border: "1px solid rgba(245,197,66,.15)",
    borderRadius: "20px",
    background:
      "linear-gradient(145deg, rgba(245,197,66,.035), rgba(255,255,255,.015))",
    boxShadow: "0 20px 55px rgba(0,0,0,.18)",
  },

  cardTitle: {
    margin: "22px 0 12px",
    color: "#ffffff",
    fontSize: "21px",
    lineHeight: 1.3,
    fontWeight: 800,
  },

  cardDescription: {
    margin: 0,
    color: "#bcbcbc",
    fontSize: "15px",
    lineHeight: 1.7,
  },

  cardLink: {
    marginTop: "auto",
    paddingTop: "24px",
    color: "#f5c542",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: 800,
  },

  developmentNotice: {
    marginTop: "auto",
    paddingTop: "22px",
    color: "#777777",
    fontSize: "12px",
    lineHeight: 1.55,
  },

  revenueGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },

  revenueCard: {
    minHeight: "260px",
    padding: "26px",
    border: "1px solid rgba(255,255,255,.09)",
    borderRadius: "20px",
    background: "rgba(255,255,255,.025)",
    boxShadow: "0 20px 55px rgba(0,0,0,.18)",
  },

  revenueNumber: {
    color: "#f5c542",
    fontSize: "14px",
    fontWeight: 900,
    letterSpacing: "1px",
  },

  revenueNotice: {
    marginTop: "25px",
    padding: "22px",
    borderRadius: "16px",
    border: "1px solid rgba(245,197,66,.18)",
    background: "rgba(245,197,66,.045)",
    color: "#bdbdbd",
    fontSize: "14px",
    lineHeight: 1.7,
    boxShadow: "0 18px 45px rgba(0,0,0,.16)",
  },

  noticeStrong: {
    color: "#f5c542",
  },

  intelligenceLayout: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "22px",
  },

  intelligencePanel: {
    padding: "30px",
    border: "1px solid rgba(255,255,255,.09)",
    borderRadius: "20px",
    background:
      "linear-gradient(145deg, rgba(255,255,255,.045), rgba(255,255,255,.015))",
    boxShadow: "0 20px 55px rgba(0,0,0,.18)",
  },

  panelTitle: {
    margin: "0 0 22px",
    fontSize: "22px",
    fontWeight: 800,
  },

  panelText: {
    color: "#bdbdbd",
    fontSize: "15px",
    lineHeight: 1.75,
  },

  metricList: {
    display: "grid",
    gap: "12px",
  },

  metricItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "15px",
    padding: "14px",
    border: "1px solid rgba(255,255,255,.07)",
    borderRadius: "12px",
    background: "rgba(255,255,255,.018)",
    color: "#dedede",
    fontSize: "14px",
    boxShadow: "0 10px 28px rgba(0,0,0,.12)",
  },

  plannedLabel: {
    color: "#f5c542",
    fontSize: "11px",
    fontWeight: 800,
  },

  analysisFlow: {
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flexWrap: "wrap",
  },

  flowItem: {
    padding: "10px 13px",
    borderRadius: "10px",
    border: "1px solid rgba(245,197,66,.20)",
    background: "rgba(245,197,66,.05)",
    color: "#f5c542",
    fontSize: "12px",
    fontWeight: 800,
    boxShadow: "0 10px 26px rgba(0,0,0,.14)",
  },

  flowArrow: {
    color: "#777777",
  },

  principlesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "14px",
  },

  principleCard: {
    minHeight: "74px",
    padding: "18px 20px",
    display: "flex",
    alignItems: "center",
    gap: "14px",
    border: "1px solid rgba(255,255,255,.08)",
    borderRadius: "15px",
    background: "rgba(255,255,255,.025)",
    color: "#d4d4d4",
    fontSize: "14px",
    lineHeight: 1.5,
    boxShadow: "0 16px 40px rgba(0,0,0,.15)",
  },

  checkmark: {
    color: "#f5c542",
    fontSize: "19px",
    fontWeight: 900,
    flexShrink: 0,
  },

  finalSection: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "35px 24px 110px",
  },

  finalCard: {
    padding: "65px 30px",
    textAlign: "center",
    border: "1px solid rgba(245,197,66,.22)",
    borderRadius: "26px",
    background:
      "radial-gradient(circle at top, rgba(245,197,66,.10), rgba(255,255,255,.025) 50%, rgba(0,0,0,.20))",
    boxShadow: "0 30px 90px rgba(0,0,0,.30)",
  },

  finalTitle: {
    maxWidth: "820px",
    margin: "16px auto",
    fontSize: "clamp(34px, 5vw, 55px)",
    lineHeight: 1.13,
    fontWeight: 900,
  },

  finalText: {
    maxWidth: "760px",
    margin: "0 auto",
    color: "#c0c0c0",
    fontSize: "17px",
    lineHeight: 1.75,
  },
};
