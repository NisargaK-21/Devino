export default function Ghost({ size = 100 }) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 100 120" fill="white">
      <ellipse cx="50" cy="45" rx="38" ry="42" />
      <rect x="12" y="45" width="76" height="55" />
      <ellipse cx="25" cy="100" rx="13" ry="13" fill="#0a0000" />
      <ellipse cx="50" cy="100" rx="13" ry="13" fill="#0a0000" />
      <ellipse cx="75" cy="100" rx="13" ry="13" fill="#0a0000" />
      <circle cx="38" cy="42" r="7" fill="#0a0000" />
      <circle cx="62" cy="42" r="7" fill="#0a0000" />
      <circle cx="40" cy="40" r="3" fill="white" />
      <circle cx="64" cy="40" r="3" fill="white" />
    </svg>
  );
}