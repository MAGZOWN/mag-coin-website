export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "22px 40px",
        borderBottom: "1px solid #333",
        background: "#050505",
      }}
    >
      <div
        style={{
          color: "#f5c542",
          fontWeight: "bold",
          fontSize: "24px",
        }}
      >
        MAG Coin
      </div>

      <div
        style={{
          display: "flex",
          gap: "28px",
          color: "#ffffff",
        }}
      >
        <span>Home</span>
        <span>Whitepaper</span>
        <span>Constitution</span>
        <span>Roadmap</span>
        <span>Transparency</span>
      </div>
    </nav>
  );
}
