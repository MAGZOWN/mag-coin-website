import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function PremiumCard({ children }: Props) {
  return (
    <div style={styles.card} className="cardHover">
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

    padding: "30px",

    color: "#e5e5e5",

    transition: "all .3s ease",

    boxShadow:
      "0 10px 30px rgba(0,0,0,.35)",

    overflow: "hidden",
  },
};
