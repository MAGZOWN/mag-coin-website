import type { CSSProperties } from "react";
import type { ReactNode } from "react";

type Props = {
  title: string;
  description: string;
  status?: string;
  children?: ReactNode;
};

export default function DocumentCard({
  title,
  description,
  status,
  children,
}: Props) {
  return (
    <div style={styles.card} className="cardHover">
      {status && (
        <div style={styles.status}>
          {status}
        </div>
      )}

      <h3 style={styles.title}>
        {title}
      </h3>

      <p style={styles.description}>
        {description}
      </p>

      {children}
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid rgba(255,255,255,.08)",
    borderRadius: "22px",
    padding: "28px",
    color: "#e5e5e5",
    boxShadow: "0 10px 30px rgba(0,0,0,.35)",
  },

  status: {
    display: "inline-block",
    marginBottom: "16px",
    padding: "6px 12px",
    borderRadius: "999px",
    background: "rgba(245,197,66,.10)",
    border: "1px solid rgba(245,197,66,.35)",
    color: "#f5c542",
    fontSize: "12px",
    fontWeight: "bold",
  },

  title: {
    color: "#f5c542",
    marginBottom: "14px",
    fontSize: "24px",
  },

  description: {
    color: "#d6d6d6",
    lineHeight: "1.8",
    marginBottom: "18px",
  },
};
