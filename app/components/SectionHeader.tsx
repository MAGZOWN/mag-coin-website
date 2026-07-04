import type { CSSProperties } from "react";

type Props = {
  title: string;
  subtitle: string;
};

export default function SectionHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div style={styles.wrapper}>

      <h2 style={styles.title}>
        {title}
      </h2>

      <p style={styles.subtitle}>
        {subtitle}
      </p>

    </div>
  );
}

const styles: Record<string, CSSProperties> = {

  wrapper: {

    textAlign: "center",

    marginBottom: "38px",

  },

  title: {

    color: "#f5c542",

    fontSize: "34px",

    marginBottom: "14px",

    fontWeight: "700",

  },

  subtitle: {

    color: "#d6d6d6",

    maxWidth: "760px",

    margin: "0 auto",

    lineHeight: "1.8",

    fontSize: "17px",

  },

};
