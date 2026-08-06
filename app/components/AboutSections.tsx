import type { CSSProperties } from "react";

export default function AboutSections() {
  return (
    <section style={styles.wrapper}>
      <div style={styles.card} className="cardHover">
        <h2 style={styles.heading}>Our Story</h2>
        <p>
          MAG COIN began with a simple intention: build it honestly, in the
          open, step by step. No paid hype, no manufactured volume — just
          public documentation and verifiable on-chain records as the project
          grows.
        </p>
      </div>

      <div style={styles.grid}>
        <div style={styles.card} className="cardHover">
          <h2 style={styles.heading}>Mission</h2>
          <p>
            To create a trustworthy digital ecosystem where blockchain
            technology, accountability, community, and education work together
            for sustainable growth.
          </p>
        </div>

        <div style={styles.card} className="cardHover">
          <h2 style={styles.heading}>Vision</h2>
          <p>
            To grow MAG COIN into a well-documented, carefully managed project
            designed to endure and improve over time — not a short-term
            trade.
          </p>
        </div>
      </div>

      <div style={styles.card} className="cardHover">
        <h2 style={styles.heading}>Why Base?</h2>
        <p>
          Base gives us low fees, fast transactions, and a growing ecosystem
          of builders — a practical foundation to develop on without pricing
          out everyday participants.
        </p>
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "24px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,0.96), rgba(5,5,5,0.96))",
    border: "1px solid #333",
    borderRadius: "22px",
    padding: "32px",
    color: "#e5e5e5",
    lineHeight: "1.8",
  },

  heading: {
    color: "#f5c542",
    marginBottom: "14px",
  },
};
