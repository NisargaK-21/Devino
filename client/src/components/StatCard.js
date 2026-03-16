export default function StatCard({ stat }) {
  return (
    <div style={{ textAlign: "center", padding: "0 20px" }}>
      <div style={{
        fontFamily: "Creepster, cursive",
        fontSize: "3rem",
        color: "#ff2020"
      }}>
        {stat.number}
      </div>

      <div style={{
        color: "#b0a0a0",
        fontSize: "0.78rem",
        letterSpacing: "3px",
        marginTop: "6px"
      }}>
        {stat.label.toUpperCase()}
      </div>
    </div>
  );
}