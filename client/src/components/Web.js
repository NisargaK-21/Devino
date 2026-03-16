export default function Web({ size = 220 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 220 220">
      {[0,30,60,90,120,150].map((angle, i) => (
        <line
          key={i}
          x1="0"
          y1="0"
          x2={Math.cos(angle * Math.PI / 180) * 220}
          y2={Math.sin(angle * Math.PI / 180) * 220}
          stroke="#cc0000"
          strokeWidth="1.2"
        />
      ))}

      {[35,70,105,145,185].map((r, i) => (
        <path
          key={i}
          d={`M ${r} 0 Q ${r*0.7} ${r*0.7} 0 ${r}`}
          fill="none"
          stroke="#cc0000"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}