import type { CSSProperties, ReactNode } from "react";

type SecondaryButtonProps = {
  href: string;
  children: ReactNode;
  target?: string;
  rel?: string;
};

export default function SecondaryButton({
  href,
  children,
  target,
  rel,
}: SecondaryButtonProps) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="secondaryButton"
      style={styles.button}
    >
      {children}
    </a>
  );
}

const styles: Record<string, CSSProperties> = {
  button: {
    background: "transparent",
    color: "#f5c542",
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
