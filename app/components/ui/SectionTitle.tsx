import type { CSSProperties, ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
  subtitle?: string;
};

export default function SectionTitle({ children, subtitle }: SectionTitleProps) {
  return (
    <div style={styles.wrapper}>
      <h2 className="goldGradient" style={styles.title}>
        {children}
      </h2>

      {subtitle ? <p style={styles.subtitle}>{subtitle}</p> : null}
    </div>
  );
}

const styles: Record<string, CSSProperties> = {
  wrapper: {
    textAlign: "center",
    marginBottom: "36px",
  },

  title: {
    fontSize: "32px",
    fontWeight: 900,
    lineHeight: 1.25,
    margin: "0 0 14px",
  },

  subtitle: {
    color: "#d6d6d6",
    maxWidth: "760px",
    margin: "0 auto",
    lineHeight: 1.8,
    fontSize: "16px",
  },
};
