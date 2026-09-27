import Reveal from "./Reveal";
import Icon from "./Icon";
import { DISCORD_URL } from "@/lib/site";

export default function Rules() {
  return (
    <section id="regras">
      <div className="container">
        <Reveal>
          <div className="rules-box">
            <div>
              <span className="rules-kicker"><Icon name="shield" /> RESPEITO FAZ PARTE DO JOGO</span>
              <h2>Disputa boa tem regra clara.</h2>
              <p>
                Leia o regulamento da modalidade antes de entrar, respeite os
                adversários e combine os detalhes no canal da partida. Regras,
                resultados e dúvidas são acompanhados pela Staff no Discord.
              </p>
            </div>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Ver Regras no Discord
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
