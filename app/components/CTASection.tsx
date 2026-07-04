import type { CSSProperties } from "react";

type Props = {
  title: string;
  text: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTASection({
  title,
  text,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: Props) {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>{title}</h2>

      <p style={styles.text}>{text}</p>

      <div style={styles.buttons}>
        <a href={primaryHref} style={styles.primaryButton} className="primaryButton">
          {primaryLabel}
        </a>

        {secondaryLabel && secondaryHref && (
          <a href={secondaryHref} style={styles.secondaryButton} className="secondaryButton">
            {secondaryLabel}
          </a>
        )}
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    margin: "70px 0",
    padding: "46px 30px",
    textAlign: "center",
    background:
      "linear-gradient(145deg, rgba(245,197,66,.10), rgba(5,5,5,.96))",
    border: "1px solid rgba(245,197,66,.35)",
    borderRadius: "26px",
  },

  title: {
    color: "#ffffff",
    fontSize: "34px",
    lineHeight: "1.3",
    marginBottom: "18px",
  },

  text: {
    color: "#d6d6d6",
    fontSize: "17px",
    lineHeight: "1.8",
    maxWidth: "760px",
    margin: "0 auto 30px",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    flexWrap: "wrap",
  },

  primaryButton: {
    background: "#f5c542",
    color: "#000",
    textDecoration: "none",
    padding: "14px 28px",
    borderRadius: "999px",
    fontWeight: "bold",
  },

  secondaryButton: {
    background: "transparent",
    color: "#f5c542",
    textDecoration: "none",
    padding: "14px 28px",
    borderRadius: "999px",
    fontWeight: "bold",
    border: "1px solid rgba(245,197,66,.65)",
  },
};
