import Logo from "./Logo";

const DISCORD_URL = "https://discord.gg/hwY4cv8met";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
        <div className="eyebrow hero-kicker hero-anim"><span /> BRAWL STARS · COMUNIDADE COMPETITIVA</div>

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
        <div className="hero-art hero-anim" style={{ animationDelay: "200ms" }}>
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <span className="art-cross art-cross-top" aria-hidden="true">+</span>
          <span className="art-cross art-cross-bottom" aria-hidden="true">+</span>
          <div className="hero-emblem"><Logo size="lg" /></div>
          <div className="art-caption"><span>BRAWLTHERS</span><span>JOGUE. COMPITA. EVOLUA.</span></div>
        </div>
        <div className="hero-bottom"><span>COMUNIDADE. COMPETIÇÃO. EVOLUÇÃO.</span><a href="#quem-somos">EXPLORE A BRAWLTHERS <span aria-hidden="true">↓</span></a></div>
      </div>
    </section>
  );
}
