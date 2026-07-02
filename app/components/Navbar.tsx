export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.brand}>MAG Coin</div>

      <div style={styles.links}>
        <span>Home</span>
        <span>Whitepaper</span>
        <span>Constitution</span>
        <span>Roadmap</span>
        <span>Transparency</span>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "22px 40px",
    borderBottom: "1px solid #333",
    background: "#050505",
    color: "#ffffff",
  },
  brand: {
    color: "#f5c542",
    fontWeight: "bold",
    fontSize: "24px",
  },
  links: {
    display: "flex",
    gap: "26px",
    fontSize: "14px",
  },
};
