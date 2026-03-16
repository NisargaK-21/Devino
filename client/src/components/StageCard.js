import Skull from "./Skull";

export default function StageCard({ stage, index }) {
  return (
    <div
      className="card-horror"
      style={{
        textAlign: "center",
        padding: "36px 18px",
        background: "#0d0000",
        border: "1px solid #8b0000",
        transition: "all 0.3s ease",
        boxShadow: "0 0 10px rgba(255,0,0,0.15)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "16px",
        }}
      >
        <Skull size={50} />
      </div>

      <div
        style={{
          fontSize: "1.2rem",
          color: "#8b0000",
          fontFamily: "Creepster, cursive",
          marginBottom: "6px",
        }}
      >
        {stage.icon}
      </div>

      <h3
        style={{
          fontFamily: "Creepster, cursive",
          fontSize: "1.35rem",
          color: "#ff2020",
          marginBottom: "10px",
          letterSpacing: "2px",
        }}
      >
        {stage.title}
      </h3>

      <p
        style={{
          color: "#b0a0a0",
          fontSize: "0.9rem",
          lineHeight: 1.7,
        }}
      >
        {stage.desc}
      </p>

      <div
        style={{
          marginTop: "18px",
          padding: "6px 14px",
          background: "#1a0505",
          border: "1px solid #8b0000",
          display: "inline-block",
          fontSize: "0.75rem",
          color: "#999",
          letterSpacing: "1px",
        }}
      >
        STAGE {index + 1}
      </div>
    </div>
  );
}