import Logo from "./Logo";

const DISCORD_URL = "https://discord.gg/hwY4cv8met";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#eventos", label: "Eventos" },
  { href: "#regras", label: "Regras" },
  { href: DISCORD_URL, label: "Discord", external: true },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo />
          <p>Organização competitiva de Brawl Stars.</p>
        </div>

        <nav className="footer-links" aria-label="Links do rodapé">
          {LINKS.map((link) =>
            link.external ? (
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
