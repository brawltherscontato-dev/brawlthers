import Reveal from "./Reveal";

const PILLARS = [
  {
    title: "Comunidade",
    text: "Um espaço para jogadores se conectarem, formarem equipes e participarem dos nossos projetos.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="3.4" stroke="#F4C430" strokeWidth="1.6" />
        <circle cx="16" cy="9" r="2.4" stroke="#F4C430" strokeWidth="1.6" />
        <path d="M2 18c0-3 2.5-5 5-5s5 2 5 5" stroke="#F4C430" strokeWidth="1.6" />
        <path d="M13 18c.3-2.2 1.7-3.6 3.5-3.9" stroke="#F4C430" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Competição",
    text: "Campeonatos e eventos organizados com regras claras, acompanhamento e organização.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path
          d="M11 2 20 6.5v6.3C20 17 16 20 11 20S2 17 2 12.8V6.5L11 2Z"
          stroke="#F4C430"
          strokeWidth="1.6"
        />
        <path d="M8 11.5 10.2 14 14.5 8.5" stroke="#F4C430" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Evolução",
    text: "Um ambiente para competir, aprender, evoluir e construir novas experiências dentro do jogo.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M2 17 8 10l4 4 8-9" stroke="#F4C430" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M15 5h5v5" stroke="#F4C430" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="quem-somos">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <h2>Quem Somos</h2>
            <p>
              A Brawlthers é uma organização voltada para a comunidade e para o
              cenário competitivo de Brawl Stars. Nosso objetivo é criar
              experiências competitivas, organizar eventos e conectar
              jogadores em um ambiente organizado, ativo e profissional.
            </p>
          </div>
        </Reveal>

        <div className="pillar-grid">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="bracket-card pillar-card">
                <div className="pillar-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
