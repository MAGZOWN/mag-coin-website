export default function VerifyPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          textAlign: "center",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "20px",
          padding: "50px",
          background: "#0d0d0d",
        }}
      >
        <h1
          style={{
            fontSize: "42px",
            color: "#FFD15C",
            marginBottom: "20px",
          }}
        >
          MAG Holder Verification
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#cfcfcf",
            marginBottom: "40px",
          }}
        >
          Verify whether a wallet holds MAG COIN on the Base Network.
        </p>

        <input
          type="text"
          placeholder="Enter Base Wallet Address"
          style={{
            width: "100%",
            padding: "16px",
            borderRadius: "12px",
            border: "1px solid #333",
            background: "#111",
            color: "#fff",
            fontSize: "16px",
            marginBottom: "20px",
          }}
        />

        <button
          style={{
            background: "#FFD15C",
            color: "#000",
            border: "none",
            padding: "15px 40px",
            borderRadius: "12px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Verify Wallet
        </button>

        <p
          style={{
            marginTop: "35px",
            color: "#999",
            fontSize: "15px",
          }}
        >
          Live blockchain verification will be connected in the next phase.
        </p>
      </div>
    </main>
  );
}
