import Reveal from "./Reveal";

const DISCORD_URL = "https://discord.gg/hwY4cv8met";

export default function Events() {
  return (
    <section id="eventos">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <h2>Nossos Eventos</h2>
            <p>
              A BrawlthersCup é uma competição criada pela Brawlthers para
              reunir equipes e jogadores em partidas organizadas.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="event-feature">
            <div className="event-feature-tag">Season 1</div>
            <h3>BrawlthersCup</h3>
            <p>
              Uma competição criada pela Brawlthers para reunir equipes e
              jogadores em partidas organizadas. Inscrições, chaveamento e
              regulamento completo ficam disponíveis no nosso Discord.
            </p>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Participar
            </a>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="event-placeholder">
            <span>Novos eventos em breve</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
