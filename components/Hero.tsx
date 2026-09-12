import Logo from "./Logo";

const DISCORD_URL = "https://discord.gg/hwY4cv8met";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-logo hero-anim" style={{ animationDelay: "0ms" }}>
          <Logo size="lg" />
        </div>

        <h1 className="hero-title">
          <span className="hero-anim" style={{ animationDelay: "80ms" }}>
            JOGUE.
          </span>
          <span className="hero-anim" style={{ animationDelay: "180ms" }}>
            COMPITA.
          </span>
          <span className="hero-anim hero-title-accent" style={{ animationDelay: "280ms" }}>
            EVOLUA.
          </span>
        </h1>

        <p className="hero-lede hero-anim" style={{ animationDelay: "380ms" }}>
          A Brawlthers é uma organização criada para reunir jogadores, promover
          competições e construir uma comunidade competitiva dentro do Brawl
          Stars.
        </p>

        <div className="hero-actions hero-anim" style={{ animationDelay: "460ms" }}>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Entrar no Discord
          </a>
          <a href="#quem-somos" className="btn btn-ghost">
            Conhecer a Brawlthers
          </a>
        </div>
      </div>
    </section>
  );
}
