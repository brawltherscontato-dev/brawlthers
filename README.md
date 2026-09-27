# Brawlthers — Site Oficial

Site institucional da Brawlthers, organização competitiva de Brawl Stars.
Feito em Next.js (App Router) + TypeScript, sem bibliotecas de UI pesadas —
apenas CSS puro para manter o site leve e rápido, especialmente no celular.

## Rodar localmente

```bash
npm install
npm run dev
```

Depois acesse http://localhost:3000

## Build de produção

```bash
npm run build
npm run start
```

## Publicar na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Em https://vercel.com, clique em "New Project" e importe o repositório.
3. A Vercel detecta o Next.js automaticamente — não é necessário configurar nada.
4. Clique em "Deploy".

## Atualizar o conteúdo

- `lib/site.ts` centraliza o convite do Discord, links da navegação, meta de
  membros da Cup e tabelas de valores. Valores são **centavos inteiros**.
- A Cup Season 2 está anunciada para o marco de **500 membros no Discord**.
  Esse número é uma meta, não uma contagem ao vivo. Data, formato, premiação e
  inscrições ainda serão anunciados pela organização.
- Os valores publicados refletem os planos do bot. Se a Staff alterar um
  plano no Discord, atualize também `DUEL_PLANS` ou `SOLO_PLANS` no site.
  Cada inscrição segue os valores e regras exibidos na respectiva fila.
- `components/FAQ.tsx` explica inscrição, Pix, prazos, criação de canais e
  devoluções. Ao alterar essas políticas no bot, revise essas respostas.
- A logo oficial está em `public/logo.jpg` e é reutilizada no cabeçalho,
  apresentação, Cup, chamada para o Discord e rodapé.

O site é institucional: as inscrições e os pagamentos acontecem pelo bot no
Discord. Este projeto não cria cobranças, não acessa o banco do bot e não
altera a configuração das modalidades.

## Estrutura

```
app/
  layout.tsx      → fontes, metadados
  page.tsx        → monta as seções da home
  globals.css     → todos os estilos (tokens de cor, tipografia, componentes)
components/
  Header.tsx      → navbar sticky + menu hambúrguer mobile
  Hero.tsx        → seção inicial
  GameModes.tsx   → amistoso, 1v1 apostado e Combate Solo com valores
  HowToPlay.tsx   → passo a passo de inscrição e Pix no celular
  Events.tsx      → Brawlthers Cup Season 2 e meta de 500 membros
  About.tsx       → comunidade, competição e evolução
  FAQ.tsx         → dúvidas frequentes em acordeões nativos
  Rules.tsx       → "Regras e Regulamento"
  DiscordCTA.tsx  → chamada final para o Discord
  Footer.tsx      → rodapé
  Logo.tsx        → logo oficial e assinatura da marca
  Icon.tsx        → ícones SVG leves
  Reveal.tsx      → animação leve de entrada ao rolar a página
  Divider.tsx     → linha divisória diagonal entre seções
lib/
  site.ts        → links, meta da Cup e planos publicados no site
```

## Verificação antes de publicar

Execute `npm run build`. Confira a página no desktop e no celular, o menu,
os acordeões, os links das seções e os botões do Discord. As animações
respeitam a preferência de movimento reduzido e o conteúdo principal
continua disponível mesmo sem JavaScript.
