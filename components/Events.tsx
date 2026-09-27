import Logo from "./Logo";
import Reveal from "./Reveal";
import { CUP_MEMBER_GOAL, DISCORD_URL } from "@/lib/site";

export default function Events() {
  return (
    <section id="eventos" aria-labelledby="cup-title">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">03 / O PRÓXIMO CAPÍTULO</span>
            <h2 id="cup-title">Uma nova temporada.<br />Uma nova era.</h2>
            <p>A comunidade cresce. A competição acompanha. A próxima Brawlthers Cup vem para marcar uma nova fase da nossa história — e você faz parte dela.</p>
          </div>
        </Reveal>

        <Reveal>
          <article className="event-feature cup-feature">
            <div className="event-copy">
              <div className="event-feature-tag">EM BREVE · SEASON 2</div>
              <h3>BRAWLTHERS<br /><span>CUP</span></h3>
              <p className="cup-statement">O próximo grande encontro da nossa comunidade.</p>
              <p>Quando chegarmos a <strong>{CUP_MEMBER_GOAL} membros no Discord</strong>, será a hora da Brawlthers Cup Season 2. Uma edição para elevar a experiência competitiva e transformar cada confronto em parte da nossa história.</p>
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Fazer parte dessa nova fase</a>
              <p className="cup-details">Data, formato, premiação e inscrições serão anunciados no Discord oficial.</p>
            </div>
            <div className="event-art cup-art">
              <span className="event-season" aria-hidden="true">02</span>
              <Logo size="lg" />
              <span className="event-art-label">A PRÓXIMA ERA COMEÇA COM VOCÊ</span>
              <div className="cup-goal"><strong>{CUP_MEMBER_GOAL}</strong><span>membros no Discord<br /><b>é a nossa meta para a Season 2</b></span></div>
            </div>
          </article>
        </Reveal>

        <div className="cup-milestones">
          <div><span>01 / AGORA</span><strong>A comunidade se fortalece</strong><p>Entre, jogue e convide quem vai somar.</p></div>
          <div><span>02 / NOSSA META</span><strong>{CUP_MEMBER_GOAL} membros no Discord</strong><p>O marco que abre a próxima temporada.</p></div>
          <div><span>03 / PRÓXIMO CAPÍTULO</span><strong>Brawlthers Cup Season 2</strong><p>Acompanhe os anúncios e prepare seu jogo.</p></div>
        </div>
      </div>
    </section>
  );
}
