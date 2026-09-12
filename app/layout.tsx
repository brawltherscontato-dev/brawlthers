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
  title: "Brawlthers — Organização Competitiva de Brawl Stars",
  description:
    "A Brawlthers é uma organização criada para reunir jogadores, promover competições e construir uma comunidade competitiva dentro do Brawl Stars.",
  metadataBase: new URL("https://brawlthers.vercel.app"),
  openGraph: {
    title: "Brawlthers",
    description:
      "Organização competitiva de Brawl Stars. Jogue. Compita. Evolua.",
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
