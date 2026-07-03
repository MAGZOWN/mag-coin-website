import type { CSSProperties } from "react";

const sections = [
  {
    title: "Executive Summary",
    text:
      "MAG COIN is a long-term blockchain project built on the Base Network with a focus on transparency, responsible stewardship, continuous improvement, and sustainable growth.",
  },
  {
    title: "Project Purpose",
    text:
      "The purpose of MAG COIN is to build a trustworthy digital ecosystem supported by public documentation, verifiable blockchain records, and careful long-term development.",
  },
  {
    title: "Mission",
    text:
      "To create a responsible blockchain project where technology, accountability, community, and education work together for sustainable value creation.",
  },
  {
    title: "Vision",
    text:
      "To develop MAG COIN as a transparent, well-documented, and responsibly managed digital project designed to endure, improve, and grow over time.",
  },
  {
    title: "Technology Foundation",
    text:
      "MAG COIN is built on the Base Network, selected for its accessibility, efficiency, and alignment with modern blockchain infrastructure.",
  },
  {
    title: "Token Foundation",
    text:
      "MAG COIN has a fixed total supply of 1,000,000,000 MAG. The official contract address should always be verified through public blockchain records before any interaction.",
  },
  {
    title: "Governance Philosophy",
    text:
      "Governance will be developed carefully over time. Major decisions should prioritize transparency, accountability, community trust, and long-term sustainability.",
  },
  {
    title: "Transparency Framework",
    text:
      "Project information, roadmap updates, security notes, and important decisions will be documented publicly whenever reasonably possible.",
  },
];

export default function WhitepaperSections() {
  return (
    <section style={styles.wrapper}>
      {sections.map((section) => (
        <div key={section.title} style={styles.card} className="cardHover">
          <h2 style={styles.heading}>{section.title}</h2>
          <p>{section.text}</p>
        </div>
      ))}
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "24px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,0.96), rgba(5,5,5,0.96))",
    border: "1px solid #333",
    borderRadius: "22px",
    padding: "30px",
    color: "#e5e5e5",
    lineHeight: "1.8",
  },

  heading: {
    color: "#f5c542",
    marginBottom: "14px",
  },
};
