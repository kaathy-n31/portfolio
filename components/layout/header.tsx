import { profile } from "@/data/portfolio";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


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
        <a className="site-header__brand" href="#inicio" aria-label="Ir al inicio">
          {/* <img src={""}></img> */}
        </a>
        <nav className="site-header__nav" aria-label="Navegacion principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a className="button button--ghost" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={25} />
            LinkedIn
          </a>
          <a className="button button--ghost" href={profile.links.github} target="_blank" rel="noopener noreferrer">
            <FaGithub size={25}/> 
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
