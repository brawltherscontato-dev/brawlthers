"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { DISCORD_URL, NAV_LINKS } from "@/lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [showTop, setShowTop] = useState(false);
  const progress = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    const sections = ["inicio", ...NAV_LINKS.map((link) => link.href.slice(1)), "duvidas", "regras", "discord"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) progress.current.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, y / distance)) : 0})`;
      setScrolled(y > 12);
      setShowTop(y > window.innerHeight);
      const current = [...sections].reverse().find((section) => section.getBoundingClientRect().top <= 140);
      setActive(current ? `#${current.id}` : "");
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus(); }
    };
    const onResize = () => { if (window.innerWidth >= 1100) setOpen(false); };
    if (open) document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <>
      <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
        <div ref={progress} className="reading-progress" aria-hidden="true" />
        <div className="container header-inner">
          <a href="#inicio" onClick={() => setOpen(false)} aria-label="Brawlthers — início"><Logo /></a>
          <nav className="nav-desktop" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} aria-current={active === link.href ? "location" : undefined}>{link.label}</a>
            ))}
          </nav>
          <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">Entrar no Discord</a>
          <button ref={toggle} type="button" className={`menu-toggle ${open ? "is-open" : ""}`}
            aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}><span /><span /><span /></button>
        </div>
        <div id="mobile-menu" className={`nav-mobile ${open ? "is-open" : ""}`}>
          <nav aria-label="Navegação móvel">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} aria-current={active === link.href ? "location" : undefined}
                onClick={() => setOpen(false)}>{link.label}</a>
            ))}
            <a href="#duvidas" onClick={() => setOpen(false)}>Dúvidas frequentes</a>
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Discord</a>
          </nav>
        </div>
      </header>
      <a href="#inicio" className={`back-to-top ${showTop ? "is-visible" : ""}`}
        aria-label="Voltar ao início" tabIndex={showTop ? 0 : -1} aria-hidden={!showTop}>
        <span aria-hidden="true">↑</span>
      </a>
    </>
  );
}
