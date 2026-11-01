import type { Metadata } from "next";
import { Chakra_Petch, Inter } from "next/font/google";
import "./globals.css";

const display = Chakra_Petch({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brawlthers — Sua arena de Brawl Stars",
  description:
    "Sua arena de Brawl Stars: 1v1 amistoso e apostado, Combate Solo com 9 jogadores e Pix pelo Discord. Encontre sua próxima partida na Brawlthers.",
  metadataBase: new URL("https://brawlthers.vercel.app"),
  openGraph: {
    title: "Brawlthers — Seu jogo. Outro nível.",
    description:
      "Amistosos, apostados de 1v1 e Combate Solo. Entre na comunidade, encontre seu adversário e evolua com a Brawlthers.",
    locale: "pt_BR",
    images: [{ url: "/logo.jpg", width: 1280, height: 1280, alt: "Brawlthers" }],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
