export default function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  return (
    <span className={`logo logo-${size}`}>
      <img src="/logo.jpg" alt="Brawlthers" width="1280" height="1280" className="logo-mark-img" />
      {size === "md" && <span className="logo-word" aria-hidden="true">BRAWLTHERS<span>JOGUE. COMPITA. EVOLUA.</span></span>}
    </span>
  );
}
