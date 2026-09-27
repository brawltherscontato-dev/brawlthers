import Logo from "./Logo";
import Reveal from "./Reveal";
import { CUP_MEMBER_GOAL, DISCORD_URL } from "@/lib/site";

export default function DiscordCTA() {
  return (
    <section id="discord" className="discord-cta">
      <div className="discord-glow" aria-hidden="true" />
      <div className="container discord-cta-inner">
        <Reveal>
          <div className="discord-logo"><Logo size="lg" /></div>
          <span className="eyebrow">SEU PRÓXIMO JOGO COMEÇA AQUI</span>
          <h2>Seu lugar na arena<br />é com a Brawlthers.</h2>
          <p>
            Encontre sua fila, chame seu adversário e venha construir a próxima
            fase com a gente. Rumo aos {CUP_MEMBER_GOAL} membros e à Cup Season 2.
          </p>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Quero fazer parte
          </a>
        </Reveal>
      </div>
    </section>
  );
}
