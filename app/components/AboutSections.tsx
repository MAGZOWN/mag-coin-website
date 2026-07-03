import type { CSSProperties } from "react";

export default function AboutSections() {
  return (
    <section style={styles.wrapper}>
      <div style={styles.card} className="cardHover">
        <h2 style={styles.heading}>Our Story</h2>
        <p>
          MAG COIN began with a simple intention: to build a project honestly,
          carefully, and transparently. Rather than depending on hype, the
          project is being developed step by step with public documentation,
          verifiable blockchain records, and long-term responsibility.
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
            To develop MAG COIN as a transparent, well-documented, and
            responsibly managed digital project designed to endure and improve
            over time.
          </p>
        </div>
      </div>

      <div style={styles.card} className="cardHover">
        <h2 style={styles.heading}>Why Base?</h2>
        <p>
          MAG COIN is built on the Base Network to support accessible,
          efficient, and transparent blockchain participation while maintaining
          a clear focus on responsible long-term development.
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
