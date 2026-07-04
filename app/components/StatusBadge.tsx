import type { CSSProperties } from "react";

type Status = "verified" | "available" | "in-progress" | "planned" | "coming-soon";

type Props = {
  status: Status;
  label?: string;
};

const statusStyles: Record<Status, CSSProperties> = {
  verified: {
    background: "rgba(25,135,84,.18)",
    border: "1px solid rgba(25,135,84,.45)",
    color: "#75d99c",
  },

  available: {
    background: "rgba(245,197,66,.10)",
    border: "1px solid rgba(245,197,66,.35)",
    color: "#f5c542",
  },

  "in-progress": {
    background: "rgba(13,110,253,.16)",
    border: "1px solid rgba(13,110,253,.45)",
    color: "#8bb9ff",
  },

  planned: {
    background: "rgba(108,117,125,.18)",
    border: "1px solid rgba(108,117,125,.45)",
    color: "#c4c9ce",
  },

  "coming-soon": {
    background: "rgba(245,197,66,.08)",
    border: "1px solid rgba(245,197,66,.25)",
    color: "#f5c542",
  },
};

export default function StatusBadge({ status, label }: Props) {
  return (
    <span style={{ ...styles.badge, ...statusStyles[status] }}>
      {label || status.replace("-", " ").toUpperCase()}
    </span>
  );
}

const styles: Record<string, CSSProperties> = {
  badge: {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: "999px",
    fontSize: "12px",
    fontWeight: "bold",
    letterSpacing: ".6px",
  },
};
