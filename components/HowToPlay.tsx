import Icon from "./Icon";
import Reveal from "./Reveal";
import { DISCORD_URL } from "@/lib/site";

const STEPS = [
  { icon: "people", title: "Entre na comunidade", text: "Acesse o Discord oficial, conheça as regras e encontre os canais de partidas e filas." },
  { icon: "gamepad", title: "Escolha sua modalidade", text: "Amistoso, 1v1 apostado ou Combate Solo. Confira formato, entrada e premiação antes de entrar." },
  { icon: "bolt", title: "Confirme sua entrada", text: "No amistoso, basta entrar na fila. No apostado, preencha os dados pedidos pelo bot e pague o Pix no prazo informado." },
  { icon: "swords", title: "Partiu confronto", text: "Com todos os jogadores confirmados, o bot abre o canal privado. Organize a partida com a Staff e mostre seu jogo." },
];

export default function HowToPlay() {
  return (
    <section id="como-jogar" className="how-section" aria-labelledby="how-title">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">02 / DO DISCORD PARA A ARENA</span>
            <h2 id="how-title">Menos complicação.<br />Mais jogo.</h2>
            <p>O bot cuida da inscrição e da confirmação. Você acompanha tudo no Discord, inclusive pelo celular.</p>
          </div>
        </Reveal>
        <ol className="steps-grid">
          {STEPS.map((step, index) => <li key={step.title}><Reveal delay={index * 70}><div className="step-top"><span>0{index + 1}</span><Icon name={step.icon} /></div><h3>{step.title}</h3><p>{step.text}</p></Reveal></li>)}
        </ol>
        <Reveal>
          <div className="pix-strip">
            <span className="pix-strip-icon"><Icon name="bolt" /></span>
            <div><h3>Pix no seu banco, confirmação no Discord.</h3><p>Toque em <strong>Copiar Pix</strong>, copie o código na tela que abrir e cole em <strong>Pix → Copia e Cola</strong> no seu banco. Depois, aguarde o bot confirmar sua vaga.</p></div>
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="text-link">Começar agora <Icon name="arrow" /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
