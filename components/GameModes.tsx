import Reveal from "./Reveal";
import Icon from "./Icon";
import { DISCORD_URL, DUEL_PLANS, SOLO_PLANS, formatBRL } from "@/lib/site";

export default function GameModes() {
  return (
    <section id="modalidades" aria-labelledby="modes-title">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">01 / ESCOLHA SUA DISPUTA</span>
            <h2 id="modes-title">Tem uma arena<br />para o seu momento.</h2>
            <p>Quer treinar um duelo, desafiar um amigo ou entrar numa partida valendo prêmio? Escolha a modalidade e encontre sua fila no Discord.</p>
          </div>
        </Reveal>

        <div className="mode-grid">
          <Reveal className="mode-reveal">
            <article className="mode-card mode-friendly">
              <div className="mode-top"><span className="mode-symbol"><Icon name="gamepad" /></span><span className="mode-badge">GRATUITO</span></div>
              <span className="mode-format">1X1 NOCAUTE</span>
              <h3>1v1 Amistoso</h3>
              <p className="mode-description">Seu próximo rival também pode ser seu próximo parceiro de treino.</p>
              <div className="friendly-highlight"><strong>Seu talento.<br />Sem taxa de entrada.</strong><span>Uma fila. Dois jogadores. Bora jogar.</span></div>
              <ul className="mode-features">
                <li><Icon name="check" />Toque em Entrar e apareça na fila.</li>
                <li><Icon name="check" />Combinou com um amigo? Escolham a mesma fila vazia.</li>
                <li><Icon name="check" />Com 2 jogadores, o bot prepara o canal privado com a Staff.</li>
              </ul>
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Encontrar um adversário</a>
            </article>
          </Reveal>

          <Reveal className="mode-reveal" delay={80}>
            <article className="mode-card mode-duel">
              <div className="mode-top"><span className="mode-symbol"><Icon name="swords" /></span><span className="mode-badge">APOSTADO · PIX</span></div>
              <span className="mode-format">1X1 NOCAUTE</span>
              <h3>1v1 Apostado</h3>
              <p className="mode-description">Um adversário. Um vencedor. Escolha o valor e entre na disputa.</p>
              <table className="price-table">
                <caption className="visually-hidden">Valores do 1v1 Apostado: entrada por jogador e prêmio do vencedor</caption>
                <thead><tr><th scope="col">Entrada</th><th scope="col">Vencedor leva</th></tr></thead>
                <tbody>{DUEL_PLANS.map((plan) => <tr key={plan.entry}><td>{formatBRL(plan.entry)}</td><td>{formatBRL(plan.victory)}</td></tr>)}</tbody>
              </table>
              <ul className="mode-features">
                <li><Icon name="check" />Filas separadas por valor, com 2 vagas.</li>
                <li><Icon name="check" />Seu nome aparece após a confirmação do Pix.</li>
                <li><Icon name="check" />Com 2 pagamentos confirmados, a dupla ganha um canal privado.</li>
              </ul>
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Ver as filas de 1v1</a>
            </article>
          </Reveal>

          <Reveal className="mode-reveal" delay={160}>
            <article id="combate-solo" className="mode-card mode-solo">
              <div className="mode-top"><span className="mode-symbol"><Icon name="trophy" /></span><span className="mode-badge">APOSTADO · PIX</span></div>
              <span className="mode-format">9 JOGADORES + 1 ADM</span>
              <h3>Combate Solo</h3>
              <p className="mode-description">Cada eliminação conta. Sobreviva à arena e busque a vitória.</p>
              <table className="price-table solo-price-table">
                <caption className="visually-hidden">Valores do Combate Solo: entrada, prêmio por eliminação e prêmio pela vitória</caption>
                <thead><tr><th scope="col">Entrada</th><th scope="col">Por elim.</th><th scope="col">Vitória</th></tr></thead>
                <tbody>{SOLO_PLANS.map((plan) => <tr key={plan.entry}><td>{formatBRL(plan.entry)}</td><td>{formatBRL(plan.elimination)}</td><td>{formatBRL(plan.victory)}</td></tr>)}</tbody>
              </table>
              <ul className="mode-features">
                <li><Icon name="check" />9 vagas de jogadores; a 10ª é do ADM.</li>
                <li><Icon name="check" />Horário e prazo definidos em cada partida.</li>
                <li><Icon name="check" />Canal privado após os 9 pagamentos confirmados.</li>
              </ul>
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Ver partidas de Solo</a>
            </article>
          </Reveal>
        </div>
        <p className="mode-note">Entradas por jogador. Confira os valores e as regras na mensagem da fila antes de se inscrever. A Staff organiza a entrega das premiações.</p>
      </div>
    </section>
  );
}
