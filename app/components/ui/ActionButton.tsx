import type { CSSProperties, ReactNode } from "react";

type ActionButtonProps = {
  children: ReactNode;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
};

export default function ActionButton({
  children,
  onClick,
  type = "button",
}: ActionButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="primaryButton"
      style={styles.button}
    >
      {children}
    </button>
  );
}

const styles: Record<string, CSSProperties> = {
  button: {
    background: "#f5c542",
    color: "#000",
    border: "2px solid #f5c542",
    borderRadius: "999px",
    padding: "15px 34px",
    fontWeight: 700,
    fontSize: "15px",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
