import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Divider from "@/components/Divider";
import Rules from "@/components/Rules";
import DiscordCTA from "@/components/DiscordCTA";
import Footer from "@/components/Footer";
import GameModes from "@/components/GameModes";
import HowToPlay from "@/components/HowToPlay";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Divider />
        <GameModes />
        <HowToPlay />
        <Divider />
        <About />
        <Divider />
        <FAQ />
        <Rules />
        <DiscordCTA />
      </main>
      <Footer />
    </>
  );
}
