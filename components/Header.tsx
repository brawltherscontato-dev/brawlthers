"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { DISCORD_URL, NAV_LINKS } from "@/lib/site";

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
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    const onResize = () => { if (window.innerWidth >= 1100) setOpen(false); };
    document.body.style.overflow = open ? "hidden" : "";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#inicio" onClick={() => setOpen(false)} aria-label="Brawlthers — início">
          <Logo />
        </a>

        <nav className="nav-desktop" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
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
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-menu" className={`nav-mobile ${open ? "is-open" : ""}`}>
        <nav aria-label="Navegação móvel">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#duvidas" onClick={() => setOpen(false)}>Dúvidas frequentes</a>
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
