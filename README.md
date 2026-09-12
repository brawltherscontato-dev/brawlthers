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

## Adicionar a logo oficial

Nenhuma logo foi enviada ainda, então o site usa um wordmark provisório
("BRAWLTHERS" + um losango dourado) no arquivo `components/Logo.tsx`.

Quando você tiver o arquivo final da logo:

1. Salve-o em `public/logo.svg` (ou `public/logo.png`).
2. Abra `components/Logo.tsx` e troque o conteúdo do `<span className="logo">`
   por uma tag `<img src="/logo.svg" alt="Brawlthers" className="logo-mark-img" />`,
   ajustando o tamanho via CSS em `app/globals.css` se necessário.

## Estrutura

```
app/
  layout.tsx      → fontes, metadados
  page.tsx        → monta as seções da home
  globals.css     → todos os estilos (tokens de cor, tipografia, componentes)
components/
  Header.tsx      → navbar sticky + menu hambúrguer mobile
  Hero.tsx        → seção inicial
  About.tsx       → "Quem Somos" + 3 cards
  Events.tsx      → "Nossos Eventos" + BrawlthersCup
  Rules.tsx       → "Regras e Regulamento"
  DiscordCTA.tsx  → chamada final para o Discord
  Footer.tsx      → rodapé
  Logo.tsx        → wordmark/logo (trocar pela logo oficial — ver acima)
  Reveal.tsx      → animação leve de entrada ao rolar a página
  Divider.tsx     → linha divisória diagonal entre seções
```

## Conteúdo pendente (propositalmente não preenchido)

Por instrução do briefing, não foram inventados números, patrocinadores,
premiações ou estatísticas. Os espaços para isso já estão estruturados:

- `components/Events.tsx` — card "Novos eventos em breve" pronto para novos
  campeonatos além da BrawlthersCup.
- Seção "Quem Somos" pode receber números reais (membros, campeonatos
  realizados etc.) quando existirem — hoje traz só o texto institucional.
