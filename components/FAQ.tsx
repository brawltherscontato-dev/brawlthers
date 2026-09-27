import Reveal from "./Reveal";
import { CUP_MEMBER_GOAL, DISCORD_URL } from "@/lib/site";

const QUESTIONS = [
  { question: "Preciso pagar para jogar na Brawlthers?", answer: "Não. O 1v1 Amistoso é gratuito: escolha uma fila e toque em Entrar. O 1v1 Apostado e o Combate Solo têm entrada paga e premiação, com os valores informados antes da inscrição." },
  { question: "Posso escolher uma fila para jogar com um amigo?", answer: "Sim. Existem filas independentes: combinem de entrar na mesma fila vazia. No amistoso, o nome aparece assim que vocês entram. No apostado, cada jogador precisa ter o próprio pagamento confirmado." },
  { question: "Como pago pelo celular? Preciso ter Mercado Pago?", answer: "O bot disponibiliza o Pix Copia e Cola e o botão Copiar Pix. Abra o botão, copie o código e pague pela opção Pix Copia e Cola no aplicativo do seu banco. Você não precisa de uma conta Mercado Pago para pagar esse Pix. Gerar o código não confirma a inscrição: aguarde a mensagem do bot." },
  { question: "Quanto tempo tenho para pagar?", answer: "Use o prazo exibido pelo bot na sua inscrição. A reserva padrão é de até 5 minutos; no Combate Solo, ela também é limitada pelo encerramento das inscrições. Pague dentro desse prazo e não reutilize códigos de inscrições canceladas ou vencidas." },
  { question: "Quando o canal privado da partida é criado?", answer: "No 1v1 Amistoso, depois que os 2 jogadores entram. No 1v1 Apostado, depois dos 2 pagamentos confirmados. No Combate Solo, somente após os 9 pagamentos confirmados. O canal reúne os participantes e a Staff para organizar o confronto e registrar o resultado." },
  { question: "E se o Combate Solo não completar as 9 vagas?", answer: "Se a partida não completar as 9 inscrições confirmadas até o encerramento, ela é cancelada. O processo de devolução integral começa 10 minutos após o cancelamento. Esse é o início do processamento; o crédito depende da conclusão pela instituição de pagamento." },
  { question: "Paguei o 1v1, mas ainda não apareceu um adversário. E agora?", answer: "A fila de 1v1 continua aguardando o segundo jogador, sem um encerramento automático por falta de adversário. Antes de a dupla ser formada, você pode tocar em Sair e confirmar a saída com devolução integral. O processamento é agendado para 10 minutos depois da confirmação da saída. Com a dupla já formada, procure a Staff." },
  { question: "Quando acontece a Brawlthers Cup Season 2?", answer: `A Season 2 está prevista para quando a comunidade chegar a ${CUP_MEMBER_GOAL} membros no Discord. A data, o formato, a premiação e a abertura das inscrições serão anunciados nos canais oficiais. Entre no servidor para acompanhar.` },
];

export default function FAQ() {
  return (
    <section id="duvidas" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <Reveal><div className="faq-intro"><span className="eyebrow">05 / ANTES DE ENTRAR</span><h2 id="faq-title">Ficou alguma<br />dúvida?</h2><p>Entenda as filas, os pagamentos e o que acontece depois da inscrição.</p><a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="text-link">Converse com a Staff <span aria-hidden="true">↗</span></a></div></Reveal>
        <div className="faq-list">{QUESTIONS.map((item, index) => <details key={item.question}><summary><span className="faq-number">{String(index + 1).padStart(2, "0")}</span><span>{item.question}</span><span className="faq-toggle" aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>
      </div>
    </section>
  );
}
