import type { CSSProperties, ReactNode } from "react";

type StatusBadgeVariant =
  | "completed"
  | "live"
  | "in-progress"
  | "planned"
  | "pending"
  | "warning";

type StatusBadgeProps = {
  children: ReactNode;
  variant?: StatusBadgeVariant;
};

export default function StatusBadge({
  children,
  variant = "planned",
}: StatusBadgeProps) {
  return (
    <span style={{ ...styles.badge, ...variantStyles[variant] }}>
      {children}
    </span>
  );
}

const styles: Record<string, CSSProperties> = {
  badge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 18px",
    borderRadius: "999px",
    fontWeight: 800,
    fontSize: "13px",
    lineHeight: 1,
    letterSpacing: ".2px",
    whiteSpace: "nowrap",
  },
};

const variantStyles: Record<StatusBadgeVariant, CSSProperties> = {
  completed: {
    color: "#ffffff",
    background: "#198754",
    border: "1px solid rgba(255,255,255,.18)",
  },

  live: {
    color: "#07140c",
    background: "#41d66f",
    border: "1px solid rgba(65,214,111,.55)",
    boxShadow: "0 0 18px rgba(65,214,111,.18)",
  },

  "in-progress": {
    color: "#ffffff",
    background: "#0d6efd",
    border: "1px solid rgba(255,255,255,.18)",
  },

  planned: {
    color: "#ffffff",
    background: "#6c757d",
    border: "1px solid rgba(255,255,255,.18)",
  },

  pending: {
    color: "#000000",
    background: "#f5c542",
    border: "1px solid rgba(245,197,66,.55)",
  },

  warning: {
    color: "#000000",
    background: "#ffc107",
    border: "1px solid rgba(255,193,7,.55)",
  },
};
