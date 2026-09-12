"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const DISCORD_URL = "https://discord.gg/hwY4cv8met";

const LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#quem-somos", label: "Quem Somos" },
  { href: "#eventos", label: "Eventos" },
  { href: "#regras", label: "Regras" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#inicio" onClick={() => setOpen(false)} aria-label="Brawlthers — início">
          <Logo />
        </a>

        <nav className="nav-desktop" aria-label="Navegação principal">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
            Discord
          </a>
        </nav>

        <a
          href={DISCORD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary nav-cta"
        >
          Entrar no Discord
        </a>

        <button
          className={`menu-toggle ${open ? "is-open" : ""}`}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`nav-mobile ${open ? "is-open" : ""}`}>
        <nav aria-label="Navegação móvel">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Discord
          </a>
        </nav>
      </div>
    </header>
  );
}
