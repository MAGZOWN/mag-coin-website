import type { CSSProperties } from "react";

export default function SectionDivider() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.line} />
      <div style={styles.dot} />
      <div style={styles.line} />
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    margin: "70px 0",
  },

  line: {
    width: "120px",
    height: "1px",
    background:
      "linear-gradient(to right, transparent, rgba(245,197,66,.55), transparent)",
  },

  dot: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: "#f5c542",
    boxShadow: "0 0 14px rgba(245,197,66,.45)",
  },
};
