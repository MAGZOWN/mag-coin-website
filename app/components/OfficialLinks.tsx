import type { CSSProperties } from "react";

const links = [
  {
    title: "Official Website",
    url: "https://coinmagbase.com",
    label: "coinmagbase.com",
  },
  {
    title: "BaseScan Contract",
    url: "https://basescan.org/address/0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94",
    label: "View Contract",
  },
  {
    title: "Official Email",
    url: "mailto:info@coinmagbase.com",
    label: "info@coinmagbase.com",
  },
  {
    title: "Whitepaper",
    url: "/whitepaper",
    label: "Read Whitepaper",
  },
  {
    title: "Constitution",
    url: "/constitution",
    label: "Read Constitution",
  },
];

export default function OfficialLinks() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Official Links</h2>

      <p style={styles.subtitle}>
        Use only official MAG Foundation links when verifying project
        information.
      </p>

      <div style={styles.grid}>
        {links.map((item) => (
          <a
            key={item.title}
            href={item.url}
            target={item.url.startsWith("http") ? "_blank" : undefined}
            rel={
              item.url.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            style={styles.card}
            className="magCard cardHover fadeIn"
          >
            <h3 style={styles.heading}>{item.title}</h3>

            <p style={styles.linkText}>{item.label}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginBottom: "60px",
  },

  title: {
    textAlign: "center",
    color: "#f5c542",
    fontSize: "32px",
    fontWeight: 800,
    marginBottom: "14px",
  },

  subtitle: {
    textAlign: "center",
    color: "#d6d6d6",
    maxWidth: "760px",
    margin: "0 auto 36px",
    lineHeight: "1.8",
    fontSize: "17px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: "22px",
  },

  card: {
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid rgba(255,255,255,.10)",
    borderRadius: "22px",
    padding: "28px",
    textAlign: "center",
    color: "#ffffff",
    textDecoration: "none",
    transition: "all .35s ease",
    boxShadow: "0 10px 30px rgba(0,0,0,.35)",
  },

  heading: {
    color: "#f5c542",
    fontSize: "22px",
    marginBottom: "14px",
  },

  linkText: {
    color: "#d6d6d6",
    margin: 0,
    lineHeight: "1.7",
  },
};
