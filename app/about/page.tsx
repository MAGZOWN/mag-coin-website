import type { CSSProperties } from "react";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <main style={styles.main}>
        <section style={styles.container}>
          <h1 style={styles.title}>About MAG COIN</h1>

          <p style={styles.lead}>
            MAG COIN is a long-term blockchain project built on the Base network,
            guided by integrity, transparency, responsible stewardship, and continuous improvement.
          </p>

          <div style={styles.card}>
            <h2 style={styles.heading}>Our Story</h2>
            <p>
              MAG COIN began with a simple intention: to build a project honestly,
              carefully, and transparently. Rather than depending on hype, the project
              is being developed step by step with public documentation, verifiable
              blockchain records, and long-term responsibility.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>Mission</h2>
            <p>
              To create a trustworthy digital ecosystem where blockchain technology,
              accountability, community, and education work together for sustainable growth.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>Vision</h2>
            <p>
              To develop MAG COIN as a transparent, well-documented, and responsibly
              managed digital project designed to endure and improve over time.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.heading}>Core Values</h2>
            <ul style={styles.list}>
              <li>Integrity before shortcuts.</li>
              <li>Transparency before promotion.</li>
              <li>Stewardship before speculation.</li>
              <li>Documentation before expansion.</li>
              <li>Long-term trust before short-term attention.</li>
            </ul>
          </div>

          <p style={styles.footerNote}>
            MAG COIN does not promise guaranteed returns or future prices. The project
            focuses on responsible development, clear communication, and verifiable progress.
          </p>
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
    padding: "60px 24px",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
  },
  title: {
    color: "#f5c542",
    fontSize: "48px",
    marginBottom: "20px",
    textAlign: "center",
  },
  lead: {
    color: "#d6d6d6",
    fontSize: "18px",
    lineHeight: "1.7",
    textAlign: "center",
    marginBottom: "40px",
  },
  card: {
    background: "rgba(17,17,17,0.9)",
    border: "1px solid #333",
    borderRadius: "18px",
    padding: "28px",
    marginBottom: "24px",
    color: "#eaeaea",
    lineHeight: "1.7",
  },
  heading: {
    color: "#f5c542",
    marginBottom: "12px",
  },
  list: {
    paddingLeft: "22px",
    lineHeight: "1.8",
  },
  footerNote: {
    color: "#999",
    fontSize: "14px",
    textAlign: "center",
    marginTop: "40px",
  },
};
