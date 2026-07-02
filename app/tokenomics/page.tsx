import type { CSSProperties } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Tokenomics() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <h1 style={styles.title}>Tokenomics</h1>

          <p style={styles.subtitle}>
            MAG COIN is designed around transparency, sustainability, and
            responsible long-term growth. The token supply is fixed with no
            hidden minting functions or inflation mechanisms.
          </p>

          <div style={styles.card}>
            <h2 style={styles.heading}>Token Information</h2>

            <p><strong>Network:</strong> Base</p>
            <p><strong>Token Symbol:</strong> MAG</p>
            <p><strong>Total Supply:</strong> 1,000,000,000 MAG</p>
            <p><strong>Decimals:</strong> 18</p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>Supply Philosophy</h2>

            <ul style={styles.list}>
              <li>Fixed maximum supply</li>
              <li>No hidden mint function</li>
              <li>No inflation after launch</li>
              <li>Transparent on-chain verification</li>
              <li>Long-term community stewardship</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>Future Allocation Reports</h2>

            <p>
              Any future allocation, ecosystem funding, community incentives,
              or treasury decisions will be documented publicly through the
              Transparency and Audit sections of this website.
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
    background:
      "radial-gradient(circle at top,#171717 0%,#050505 45%,#000000 100%)",
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
    marginBottom: "28px",
    color: "#e5e5e5",
  },

  heading: {
    color: "#f5c542",
    marginBottom: "18px",
  },

  list: {
    paddingLeft: "22px",
    lineHeight: "2",
  },
};
