import type { CSSProperties } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.hero}>
          <img src="/mag-logo.png" alt="MAG Coin Logo" style={styles.logo} />

          <h1 style={styles.title}>MAG Coin</h1>

          <h2 style={styles.motto}>
            Built with Integrity. Trusted for Generations. Empowering Global Growth.
          </h2>

          <p style={styles.subtitle}>
            MAG Coin is a long-term blockchain project on Base, built with
            transparency, responsible stewardship, and continuous improvement.
          </p>

          <div style={styles.buttons}>
            <a href="#documentation" style={styles.button}>Read Whitepaper</a>
            <a href="#audit" style={styles.button}>View Audit Report</a>
            <a
              href="https://basescan.org/token/0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94"
              style={styles.button}
            >
              BaseScan
            </a>
          </div>

          <div style={styles.snapshot}>
            <h3 style={styles.cardTitle}>Official Project Snapshot</h3>
            <p><strong>Network:</strong> Base</p>
            <p><strong>Token Symbol:</strong> MAG</p>
            <p><strong>Total Supply:</strong> 1,000,000,000 MAG</p>
            <p style={styles.contract}>
              <strong>Official Contract:</strong><br />
              0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94
            </p>
          </div>

          <section style={styles.grid}>
            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Integrity</h3>
              <p>We build with honesty, accountability, and long-term responsibility.</p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Transparency</h3>
              <p>Major project decisions will be documented and publicly verifiable.</p>
            </div>

            <div style={styles.card}>
              <h3 style={styles.cardTitle}>Stewardship</h3>
              <p>MAG Coin is designed with future generations and sustainable growth in mind.</p>
            </div>
          </section>

          <section id="documentation" style={styles.docs}>
            <h2 style={styles.sectionTitle}>Documentation</h2>
            <p>
              Constitution, Whitepaper, Master Audit Report, Roadmap and Transparency
              Reports will be published here.
            </p>
          </section>

          <footer style={styles.footer}>
            <p>MAG Coin Foundation</p>
            <p>
              Every major claim on this website should be supported by public
              documentation or verifiable blockchain data.
            </p>
          </footer>
        </section>
      </main>
    </>
  );
}

const styles: Record<string, CSSProperties> = {
  main: {
    minHeight: "100vh",
    background: "radial-gradient(circle at top, #171717 0%, #050505 45%, #000 100%)",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
    padding: "50px 24px",
  },
  hero: {
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
  },
  logo: {
    width: "200px",
    height: "200px",
    objectFit: "contain",
    marginBottom: "28px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    fontSize: "56px",
    color: "#f5c542",
    marginBottom: "14px",
  },
  motto: {
    fontSize: "28px",
    marginBottom: "24px",
  },
  subtitle: {
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#d6d6d6",
    maxWidth: "850px",
    margin: "0 auto 34px",
  },
  buttons: {
    display: "flex",
    gap: "14px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "46px",
  },
  button: {
    background: "#f5c542",
    color: "#000",
    padding: "14px 22px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "bold",
  },
  snapshot: {
    background: "rgba(17,17,17,0.9)",
    border: "1px solid #333",
    borderRadius: "20px",
    padding: "30px",
    color: "#eaeaea",
    maxWidth: "760px",
    margin: "0 auto",
  },
  grid: {
    marginTop: "55px",
    display: "grid",
    gap: "24px",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  },
  card: {
    background: "rgba(17,17,17,0.9)",
    border: "1px solid #333",
    borderRadius: "18px",
    padding: "28px",
    color: "#eaeaea",
  },
  cardTitle: {
    color: "#f5c542",
    fontSize: "22px",
  },
  contract: {
    wordBreak: "break-all",
  },
  docs: {
    marginTop: "65px",
    color: "#d6d6d6",
  },
  sectionTitle: {
    color: "#f5c542",
  },
  footer: {
    marginTop: "75px",
    color: "#999",
    fontSize: "14px",
  },
};
