import { profile } from "@/data/portfolio";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import KNA from "@/assets/images/Me.jpeg"
import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  // { label: "Sobre mi", href: "#sobre-mi" },
  // { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Certificados", href: "#certificados" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="" href="#inicio" aria-label="Ir al inicio">
          <Image className="KNA" src={KNA} width={50} height={50} alt="Me" />
        </a>
        <nav className="site-header__nav" aria-label="Navegacion principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="button button--ghost" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={25} className="iconsRedes" />
            LinkedIn
          </a>
          <a className="button button--ghost" href={profile.links.github} target="_blank" rel="noopener noreferrer">
            <FaGithub size={25} className="iconsRedes"/> 
            GitHub
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
