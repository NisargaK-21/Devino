export default function Footer() {
  return (
    <footer
      style={{
        background: "#050000",
        borderTop: "1px solid #8b0000",
        padding: "60px 20px 30px",
        color: "#aaa",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "40px",
        }}
      >
        {/* Brand */}
        <div>
          <h2
            style={{
              fontFamily: "Creepster, cursive",
              color: "#ff2020",
              marginBottom: "10px",
              letterSpacing: "2px",
            }}
          >
            DEVINO
          </h2>

          <p style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
            A horror-themed platform where developers survive
            the ultimate coding challenge.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3
            style={{
              color: "#ff2020",
              marginBottom: "12px",
              fontFamily: "Creepster, cursive",
            }}
          >
            Navigate
          </h3>

          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.9rem" }}>
            <li style={{ marginBottom: "8px" }}>Home</li>
            <li style={{ marginBottom: "8px" }}>Dashboard</li>
            <li style={{ marginBottom: "8px" }}>Projects</li>
            <li>Stages</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3
            style={{
              color: "#ff2020",
              marginBottom: "12px",
              fontFamily: "Creepster, cursive",
            }}
          >
            Resources
          </h3>

          <ul style={{ listStyle: "none", padding: 0, fontSize: "0.9rem" }}>
            <li style={{ marginBottom: "8px" }}>Documentation</li>
            <li style={{ marginBottom: "8px" }}>GitHub</li>
            <li style={{ marginBottom: "8px" }}>Support</li>
            <li>Community</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3
            style={{
              color: "#ff2020",
              marginBottom: "12px",
              fontFamily: "Creepster, cursive",
            }}
          >
            Follow Us
          </h3>

          <div style={{ display: "flex", gap: "12px" }}>
            <a href="#" style={{ color: "#aaa", textDecoration: "none" }}>
              GitHub
            </a>
            <a href="#" style={{ color: "#aaa", textDecoration: "none" }}>
              Twitter
            </a>
            <a href="#" style={{ color: "#aaa", textDecoration: "none" }}>
              Discord
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div
        style={{
          borderTop: "1px solid #8b0000",
          marginTop: "40px",
          paddingTop: "20px",
          textAlign: "center",
          fontSize: "0.8rem",
          color: "#777",
        }}
      >
        © 2026 Devino • Survive the coding challenge
      </div>
    </footer>
  );
}