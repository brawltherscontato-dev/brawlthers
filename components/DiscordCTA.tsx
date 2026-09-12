import Reveal from "./Reveal";

const DISCORD_URL = "https://discord.gg/hwY4cv8met";

export default function DiscordCTA() {
  return (
    <section id="discord" className="discord-cta">
      <div className="discord-glow" aria-hidden="true" />
      <div className="container discord-cta-inner">
        <Reveal>
          <h2>Faça parte da Brawlthers.</h2>
          <p>
            Entre no nosso Discord para acompanhar campeonatos, inscrições,
            anúncios, regras, novidades e participar da comunidade.
          </p>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Entrar no Discord
          </a>
        </Reveal>
      </div>
    </section>
  );
}
