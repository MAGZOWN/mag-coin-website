export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#050505",
      color: "#ffffff",
      fontFamily: "Arial, sans-serif",
      padding: "60px 24px"
    }}>
      <section style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ fontSize: "56px", color: "#f5c542", marginBottom: "16px" }}>
          MAG Coin
        </h1>

        <h2 style={{ fontSize: "30px", marginBottom: "24px" }}>
          Built with Integrity. Trusted for Generations. Empowering Global Growth.
        </h2>

        <p style={{ fontSize: "18px", lineHeight: "1.7", color: "#d6d6d6", maxWidth: "850px", margin: "0 auto 36px" }}>
          MAG Coin is a long-term blockchain project on Base, built with transparency,
          responsible stewardship, and continuous improvement.
        </p>

        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap", marginBottom: "50px" }}>
          <a href="#documentation" style={buttonStyle}>Read Whitepaper</a>
          <a href="#audit" style={buttonStyle}>View Audit Report</a>
          <a href="https://basescan.org/token/0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94" style={buttonStyle}>BaseScan</a>
        </div>

        <div style={cardStyle}>
          <h3 style={{ color: "#f5c542", fontSize: "24px" }}>Official Project Snapshot</h3>
          <p><strong>Network:</strong> Base</p>
          <p><strong>Token Symbol:</strong> MAG</p>
          <p><strong>Total Supply:</strong> 1,000,000,000 MAG</p>
          <p style={{ wordBreak: "break-all" }}>
            <strong>Official Contract:</strong><br />
            0xbBd90410031Ed51023EF26Cca4e3e4f638F51A94
          </p>
        </div>

        <section style={{ marginTop: "60px", display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          <div style={cardStyle}>
            <h3 style={{ color: "#f5c542" }}>Integrity</h3>
            <p>We build with honesty, accountability, and long-term responsibility.</p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ color: "#f5c542" }}>Transparency</h3>
            <p>Major project decisions will be documented and publicly verifiable.</p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ color: "#f5c542" }}>Stewardship</h3>
            <p>MAG Coin is designed with future generations and sustainable growth in mind.</p>
          </div>
        </section>

        <section id="documentation" style={{ marginTop: "70px" }}>
          <h2 style={{ color: "#f5c542" }}>Documentation</h2>
          <p style={{ color: "#d6d6d6" }}>
            Constitution, Whitepaper, Master Audit Report, Roadmap and Transparency Reports will be published here.
          </p>
        </section>

        <footer style={{ marginTop: "80px", color: "#999", fontSize: "14px" }}>
          <p>MAG Coin Foundation</p>
          <p>Every major claim on this website should be supported by public documentation or verifiable blockchain data.</p>
        </footer>
      </section>
    </main>
  );
}

const buttonStyle = {
  background: "#f5c542",
  color: "#000",
  padding: "14px 22px",
  borderRadius: "999px",
  textDecoration: "none",
  fontWeight: "bold"
};

const cardStyle = {
  background: "#111",
  border: "1px solid #333",
  borderRadius: "18px",
  padding: "28px",
  color: "#eaeaea"
};
