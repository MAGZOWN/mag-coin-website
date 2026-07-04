import type { CSSProperties } from "react";

type Props = {
  version: string;
  label?: string;
};

export default function VersionBadge({ version, label = "Version" }: Props) {
  return (
    <div style={styles.badge}>
      <span style={styles.label}>{label}</span>
      <strong style={styles.version}>{version}</strong>
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    background: "rgba(245,197,66,.10)",
    border: "1px solid rgba(245,197,66,.35)",
    color: "#f5c542",
    padding: "10px 18px",
    borderRadius: "999px",
    fontSize: "13px",
    fontWeight: "bold",
  },

  label: {
    color: "#bdbdbd",
    fontWeight: "normal",
  },

  version: {
    color: "#f5c542",
  },
};
