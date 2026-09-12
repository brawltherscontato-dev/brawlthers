export default function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <svg viewBox="0 0 1200 46" preserveAspectRatio="none">
        <line
          x1="0"
          y1="40"
          x2="1200"
          y2="8"
          stroke="var(--line-flat)"
          strokeWidth="1"
        />
        <line x1="560" y1="24" x2="640" y2="18" stroke="var(--gold)" strokeWidth="2" />
      </svg>
    </div>
  );
}
