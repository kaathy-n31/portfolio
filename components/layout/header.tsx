"use client";

import { useState } from "react";
import { profile } from "@/data/portfolio";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import KNA from "@/assets/images/Me.jpeg";
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { useLanguage } from "@/components/providers/language-provider";

const navItems = [
  // { label: "Sobre mi", href: "#sobre-mi" },
  // { label: "Habilidades", href: "#habilidades" },
  { key: "projects", href: "#proyectos" },
  { key: "certificates", href: "#certificados" },
  { key: "experience", href: "#experiencia" },
  { key: "contact", href: "#contacto" },
] as const;

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="" href="#inicio" aria-label={t.nav.goHome}>
          <Image className="KNA" src={KNA} width={50} height={50} alt="Me" />
        </a>

        <button
          className="site-header__menu-button"
          type="button"
          aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-controls="site-navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>

        <nav
          className={`site-header__nav${isMenuOpen ? " site-header__nav--open" : ""}`}
          id="site-navigation"
          aria-label={t.nav.mainNavigation}
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {t.nav[item.key]}
            </a>
          ))}
          <a className="button button--ghost" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            <FaLinkedin size={25} className="iconsRedes" />
            LinkedIn
          </a>
          <a className="button button--ghost" href={profile.links.github} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            <FaGithub size={25} className="iconsRedes"/> 
            GitHub
          </a>
          <div className="site-header__toggles">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
