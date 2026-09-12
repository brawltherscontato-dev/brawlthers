import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Divider from "@/components/Divider";
import Events from "@/components/Events";
import Rules from "@/components/Rules";
import DiscordCTA from "@/components/DiscordCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Events />
        <Divider />
        <Rules />
        <DiscordCTA />
      </main>
      <Footer />
    </>
  );
}
