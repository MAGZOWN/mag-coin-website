import type { CSSProperties, ReactNode } from "react";

type PrimaryButtonProps = {
  href: string;
  children: ReactNode;
  target?: string;
  rel?: string;
};

export default function PrimaryButton({
  href,
  children,
  target,
  rel,
}: PrimaryButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="primaryButton"
      style={styles.button}
    >
      {children}
    </a>
  );
}

const styles: Record<string, CSSProperties> = {
  button: {
    background: "#f5c542",
    color: "#000",
    textDecoration: "none",
    padding: "15px 34px",
    borderRadius: "999px",
    border: "2px solid #f5c542",
    fontWeight: 700,
    fontSize: "15px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
};
