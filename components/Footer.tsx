import Logo from "./Logo";
import { DISCORD_URL, NAV_LINKS } from "@/lib/site";

const LINKS = [
  ...NAV_LINKS,
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#regras", label: "Regras" },
  { href: DISCORD_URL, label: "Discord", external: true },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>Amistosos, apostados e uma comunidade<br />que vive Brawl Stars.</p>
        </div>

        <nav className="footer-links" aria-label="Links do rodapé">
          {LINKS.map((link) =>
            "external" in link && link.external ? (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ) : (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            )
          )}
        </nav>
      </div>

      <div className="container">
        <p className="footer-copy">© 2026 Brawlthers. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
