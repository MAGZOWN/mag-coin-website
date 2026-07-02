import type { CSSProperties } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Security() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <h1 style={styles.title}>Security</h1>

          <p style={styles.subtitle}>
            MAG COIN is committed to responsible security practices, public verification,
            and clear risk communication.
          </p>

          <div style={styles.card}>
            <h2 style={styles.heading}>Contract Verification</h2>
            <p>
              The official MAG COIN contract is publicly visible on BaseScan and should
              always be verified before any interaction.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>Liquidity Review</h2>
            <p>
              Liquidity records, pool information, and related blockchain activity will be
              reviewed and documented through audit and transparency reports.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>User Safety</h2>
            <ul style={styles.list}>
              <li>Always verify the official contract address.</li>
              <li>Do not trust unofficial links or impersonators.</li>
              <li>Never share private keys or seed phrases.</li>
              <li>Use only verified public information.</li>
              <li>Conduct independent research before taking action.</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>Security Disclaimer</h2>
            <p>
              Security documentation improves transparency but does not remove blockchain
              risk. Users remain responsible for their own decisions and wallet safety.
            </p>
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
    background: "radial-gradient(circle at top,#171717 0%,#050505 45%,#000000 100%)",
    color: "#fff",
    padding: "60px 24px",
    fontFamily: "Arial,sans-serif",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  title: {
    color: "#f5c542",
    fontSize: "56px",
    textAlign: "center",
    marginBottom: "20px",
  },
  subtitle: {
    textAlign: "center",
    color: "#ddd",
    fontSize: "20px",
    lineHeight: "1.7",
    marginBottom: "50px",
  },
  card: {
    background: "#111",
    border: "1px solid #333",
    borderRadius: "18px",
    padding: "28px",
    marginBottom: "24px",
    color: "#e5e5e5",
    lineHeight: "1.8",
  },
  heading: {
    color: "#f5c542",
    marginBottom: "14px",
  },
  list: {
    paddingLeft: "22px",
    lineHeight: "2",
  },
};
