import Logo from "./Logo";
import Icon from "./Icon";
import { DISCORD_URL } from "@/lib/site";

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="eyebrow hero-kicker hero-anim"><span /> BRAWL STARS · ESSA É A SUA ARENA</div>
          <h1 className="hero-title">
            <span className="hero-anim" style={{ animationDelay: "80ms" }}>SEU JOGO.</span>
            <span className="hero-anim" style={{ animationDelay: "180ms" }}>OUTRO</span>
            <span className="hero-anim hero-title-accent" style={{ animationDelay: "280ms" }}>NÍVEL.</span>
          </h1>
          <p className="hero-lede hero-anim" style={{ animationDelay: "380ms" }}>
            <strong>Encontre sua próxima grande partida.</strong>
            Do treino ao desafio valendo prêmio. Encontre seu adversário,
            mostre seu jogo e cresça com uma comunidade que vive a competição.
          </p>
          <div className="hero-actions hero-anim" style={{ animationDelay: "460ms" }}>
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Entrar no Discord</a>
            <a href="#modalidades" className="btn btn-ghost">Escolha sua disputa</a>
          </div>
          <a className="hero-news hero-anim" style={{ animationDelay: "540ms" }} href="#como-jogar">
            <span className="news-tag">PRIMEIRA PARTIDA?</span>
            <span>Do Discord para a arena em quatro passos</span>
            <Icon name="arrow" />
          </a>
        </div>

        <div className="hero-art hero-anim" style={{ animationDelay: "200ms" }}>
          <div className="arena-halo" aria-hidden="true" />
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <span className="art-cross art-cross-top" aria-hidden="true">+</span>
          <span className="art-cross art-cross-bottom" aria-hidden="true">+</span>
          <div className="hero-emblem"><Logo size="lg" /></div>
          <div className="arena-label arena-label-duel" aria-hidden="true">
            <Icon name="swords" /><div><span>PRONTO PARA O DESAFIO?</span><strong>Seu próximo duelo.</strong></div>
          </div>
          <div className="arena-label arena-label-solo" aria-hidden="true">
            <Icon name="trophy" /><div><span>COMBATE SOLO</span><strong>Cada eliminação conta.</strong></div>
          </div>
          <div className="art-caption"><span>BRAWLTHERS</span><span>JOGUE. COMPITA. EVOLUA.</span></div>
        </div>

        <div className="hero-highlights" aria-label="Encontre sua modalidade">
          <a href="#amistoso"><span className="highlight-icon"><Icon name="gamepad" /></span><strong>SEM PRESSÃO</strong><span>Treine no 1v1 Amistoso</span><span aria-hidden="true">↗</span></a>
          <a href="#duelo"><span className="highlight-icon"><Icon name="swords" /></span><strong>SEU DUELO</strong><span>Desafie no 1v1 Apostado</span><span aria-hidden="true">↗</span></a>
          <a href="#combate-solo"><span className="highlight-icon"><Icon name="trophy" /></span><strong>ATÉ O FIM</strong><span>Encare o Combate Solo</span><span aria-hidden="true">↗</span></a>
        </div>
        <a href="#modalidades" className="scroll-cue"><span aria-hidden="true">↓</span> EXPLORE A ARENA</a>
      </div>
    </section>
  );
}
