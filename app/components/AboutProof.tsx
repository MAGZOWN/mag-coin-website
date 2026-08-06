import type { CSSProperties } from "react";

const proofPoints = [
  {
    title: "Audited On-Chain",
    text: "Independent contract review confirmed no mint, pause, blacklist, tax, or upgrade functions — checkable directly on BaseScan.",
    icon: "✅",
    href: "/audit",
  },
  {
    title: "Liquidity Locked",
    text: "The official MAG/USDC pool is locked via FlokiFi Locker until 2028, with the lock transaction publicly verifiable on-chain.",
    icon: "🔒",
    href: "/transparency",
  },
  {
    title: "A Free Public Tool",
    text: "We built and shipped Base Trust Checker, a free security scanner for any Base token — not just MAG — open for the whole ecosystem to use.",
    icon: "🛠️",
    href: "/trust-checker.html",
  },
];

export default function AboutProof() {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>Proof, Not Promises</h2>

      <p style={styles.intro}>
        Anyone can say they value transparency. Here&apos;s what we&apos;ve
        actually put on the record.
      </p>

      <div style={styles.grid}>
        {proofPoints.map((item) => (
          <a
            key={item.title}
            href={item.href}
            style={styles.card}
            className="cardHover"
          >
            <div style={styles.icon}>{item.icon}</div>

            <h3 style={styles.heading}>{item.title}</h3>

            <p style={styles.text}>{item.text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

const styles: Record<string, CSSProperties> = {
  section: {
    marginTop: "50px",
  },

  title: {
    textAlign: "center",
    color: "#f5c542",
    fontSize: "32px",
    marginBottom: "12px",
  },

  intro: {
    textAlign: "center",
    color: "#a9a9a9",
    fontSize: "16px",
    maxWidth: "620px",
    margin: "0 auto 34px",
    lineHeight: "1.7",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: "24px",
  },

  card: {
    display: "block",
    background:
      "linear-gradient(145deg, rgba(18,18,18,.96), rgba(5,5,5,.96))",
    border: "1px solid #333",
    borderRadius: "22px",
    padding: "30px",
    textAlign: "center",
    color: "#e5e5e5",
    textDecoration: "none",
  },

  icon: {
    fontSize: "38px",
    marginBottom: "18px",
  },

  heading: {
    color: "#f5c542",
    marginBottom: "14px",
  },

  text: {
    lineHeight: "1.8",
    color: "#d6d6d6",
  },
};
