import type { CSSProperties, ReactNode } from "react";

type HeroTitleProps = {
  children: ReactNode;
};

export default function HeroTitle({ children }: HeroTitleProps) {
  return (
    <h1 className="goldGradient" style={styles.title}>
      {children}
    </h1>
  );
}

const styles: Record<string, CSSProperties> = {
  title: {
    fontSize: "46px",
    lineHeight: "1.22",
    fontWeight: 900,
    margin: "0 0 24px",
    textAlign: "center",
    letterSpacing: "-0.8px",
  },
};
