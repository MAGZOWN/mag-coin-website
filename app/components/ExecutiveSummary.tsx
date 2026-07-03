import type { CSSProperties } from "react";

export default function ExecutiveSummary() {
  return (
    <section style={styles.section}>
      <div style={styles.card}>
        <p style={styles.label}>EXECUTIVE SUMMARY</p>

        <h2 style={styles.title}>
          Building a Responsible Blockchain Project for the Long Term
        </h2>

        <p style={styles.text}>
          MAG COIN is a long-term blockchain initiative built on the Base
          Network with a commitment to integrity, transparency, responsible
          stewardship, and continuous improvement. Rather than pursuing
          short-term hype or unrealistic promises, the project focuses on
          sustainable development supported by public documentation,
          verifiable blockchain records, and clear communication.
        </p>

        <p style={styles.text}>
          Every milestone is approached carefully to establish trust through
          openness and accountability. The objective is to build an ecosystem
          that can evolve responsibly while remaining accessible to its
          community and future contributors.
        </p>

        <div style={styles.highlight}>
          <strong>MAG COIN Commitment</strong>

          <p style={styles.commitment}>
            Build carefully.
            <br />
            Document everything.
            <br />
            Improve continuously.
            <br />
            Protect long-term trust.
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
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(7,7,7,.96))",
    border: "1px solid #333",
    borderRadius: "24px",
    padding: "48px",
    color: "#e5e5e5",
  },

  label: {
    color: "#f5c542",
    letterSpacing: "3px",
    fontWeight: "bold",
    fontSize: "13px",
    marginBottom: "18px",
  },

  title: {
    color: "#ffffff",
    fontSize: "38px",
    lineHeight: "1.3",
    marginBottom: "26px",
  },

  text: {
    color: "#d5d5d5",
    lineHeight: "1.9",
    fontSize: "18px",
    marginBottom: "22px",
  },

  highlight: {
    marginTop: "40px",
    background: "rgba(245,197,66,.08)",
    border: "1px solid rgba(245,197,66,.25)",
    borderRadius: "18px",
    padding: "28px",
  },

  commitment: {
    marginTop: "16px",
    color: "#f5c542",
    lineHeight: "2",
    fontWeight: "bold",
    fontSize: "17px",
  },
};
