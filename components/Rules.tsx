import Reveal from "./Reveal";

const DISCORD_URL = "https://discord.gg/hwY4cv8met";

export default function Rules() {
  return (
    <section id="regras">
      <div className="container">
        <Reveal>
          <div className="rules-box">
            <div>
              <h2>Regras e Regulamento</h2>
              <p>
                Os regulamentos completos dos eventos e da comunidade ficam
                disponíveis no nosso Discord, sempre atualizados antes de cada
                competição.
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
