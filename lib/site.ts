// Conteúdo público do site. Ao alterar os planos no bot, atualize os valores aqui.
// A mensagem de cada fila no Discord é a referência para aquela inscrição.
export const DISCORD_URL = "https://discord.gg/hwY4cv8met";
export const CUP_MEMBER_GOAL = 500;

export const NAV_LINKS = [
  { href: "#modalidades", label: "Modalidades" },
  { href: "#como-jogar", label: "Como jogar" },
  { href: "#eventos", label: "Cup Season 2" },
  { href: "#quem-somos", label: "A Brawlthers" },
];

export const DUEL_PLANS = [
  { entry: 200, victory: 350 },
  { entry: 500, victory: 900 },
  { entry: 1000, victory: 1850 },
];

export const SOLO_PLANS = [
  { entry: 500, elimination: 250, victory: 1100 },
  { entry: 750, elimination: 375, victory: 1650 },
  { entry: 1000, elimination: 500, victory: 2200 },
];

export function formatBRL(cents: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cents / 100);
}
