/**
 * Placeholder de identidade visual.
 *
 * Nenhuma logo foi fornecida ainda. Assim que você tiver o arquivo oficial,
 * salve como /public/logo.svg (ou .png) e troque o bloco abaixo por:
 *
 *   <img src="/logo.svg" alt="Brawlthers" className="logo-mark-img" />
 *
 * Mantendo a marca "BRAWLTHERS" como está, para não perder o wordmark caso
 * a logo seja só o símbolo.
 */
export default function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  return (
    <img
      src="/logo.jpg"
      alt="Brawlthers"
      className={`logo-mark-img logo-${size}`}
    />
  );
}