export default function Skull({ size = 60 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="#8b0000">
      <ellipse cx="50" cy="42" rx="35" ry="38" />
      <rect x="22" y="65" width="56" height="25" rx="4" />
      <circle cx="36" cy="38" r="12" fill="#0a0000" />
      <circle cx="64" cy="38" r="12" fill="#0a0000" />
      <rect x="28" y="72" width="10" height="14" rx="2" fill="#0a0000" />
      <rect x="45" y="72" width="10" height="14" rx="2" fill="#0a0000" />
      <rect x="62" y="72" width="10" height="14" rx="2" fill="#0a0000" />
      <ellipse cx="50" cy="58" rx="6" ry="4" fill="#0a0000" />
    </svg>
  );
}