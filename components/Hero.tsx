import Logo from "./Logo";
import { CUP_MEMBER_GOAL, DISCORD_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
        <div className="eyebrow hero-kicker hero-anim"><span /> BRAWL STARS · ESSA É A SUA ARENA</div>

        <h1 className="hero-title">
          <span className="hero-anim" style={{ animationDelay: "80ms" }}>
            SEU JOGO.
          </span>
          <span className="hero-anim" style={{ animationDelay: "180ms" }}>
            OUTRO
          </span>
          <span className="hero-anim hero-title-accent" style={{ animationDelay: "280ms" }}>
            NÍVEL.
          </span>
        </h1>

        <p className="hero-lede hero-anim" style={{ animationDelay: "380ms" }}>
          <strong>A melhor org de Brawl Stars.</strong>
          Do amistoso ao apostado, do duelo à Cup. Encontre seu adversário,
          mostre seu jogo e cresça com uma comunidade que vive a competição.
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
          <a href="#modalidades" className="btn btn-ghost">
            Escolha sua disputa
          </a>
        </div>
        <a className="hero-news hero-anim" style={{ animationDelay: "540ms" }} href="#eventos">
          <span className="news-tag">EM BREVE</span>
          <span>Cup Season 2 · rumo aos {CUP_MEMBER_GOAL} membros</span>
          <span aria-hidden="true">→</span>
        </a>
        </div>
        <div className="hero-art hero-anim" style={{ animationDelay: "200ms" }}>
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <span className="art-cross art-cross-top" aria-hidden="true">+</span>
          <span className="art-cross art-cross-bottom" aria-hidden="true">+</span>
          <div className="hero-emblem"><Logo size="lg" /></div>
          <div className="art-caption"><span>BRAWLTHERS</span><span>JOGUE. COMPITA. EVOLUA.</span></div>
        </div>
        <div className="hero-highlights">
          <a href="#modalidades"><strong>1v1</strong><span>Nocaute amistoso e apostado</span><span aria-hidden="true">↗</span></a>
          <a href="#combate-solo"><strong>9 + 1</strong><span>Jogadores + ADM no Combate Solo</span><span aria-hidden="true">↗</span></a>
          <a href="#eventos"><strong>SEASON 2</strong><span>A próxima era da Brawlthers Cup</span><span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
