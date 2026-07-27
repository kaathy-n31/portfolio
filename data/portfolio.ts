import logoCss from "@/assets/images/skills/css3.png";
import logoHtml from "@/assets/images/skills/html5.png";
import logoJavascript from "@/assets/images/skills/javascript.png";
import logoReact from "@/assets/images/skills/react.png";
import logoTypescript from "@/assets/images/skills/ts.png";
import logoBootstrap from "@/assets/images/skills/bootstrap.png";
import logoTailwind from "@/assets/images/skills/tailwind.webp";
import logoMui from "@/assets/images/skills/mui.webp";
import logoNet from "@/assets/images/skills/net.webp";
import logoNode from "@/assets/images/skills/node.png";
import logoGit from "@/assets/images/skills/git.png";
import logoVtex from "@/assets/images/skills/vtex.png";
import logoAws from "@/assets/images/skills/aws.png";
import logoFirebase from "@/assets/images/skills/firebase.webp";
import logoGraphql from "@/assets/images/skills/graph.png";
import logoNext from "@/assets/images/skills/next.png";
import logoSql from "@/assets/images/skills/sql.webp";
import logoSass from "@/assets/images/skills/sass.png";
import logoVisualStudio from "@/assets/images/skills/visualstudio.png";
import logoVisualStudioCode from "@/assets/images/skills/vscode.png";

import projectPuertas from "@/assets/images/projects/puertas-automaticas.png";
import projectSwimwear from "@/assets/images/projects/swimwear-store.png";
import projectLibreria from "@/assets/images/projects/libreria-en-linea.png";

import DRLogo from "@/assets/images/experience/drsec.png";
import VinnerenLogo from "@/assets/images/experience/vinn.png";
import KnowledgizeLogo from "@/assets/images/experience/know.png";
import GenialLabsLogo from "@/assets/images/experience/genial.png";

export const profile = {
  name: "Katherine Negrete",
  role: "Front-End Developer",
  location: "Ciudad de México, México",
  email: "correo@ejemplo.com",
  summary:
    "With over 2 years of experience in front-end development, I am committed to building intuitive and visually compelling user interfaces!",
  bio:
    "Desarrolladora Front-End especializada en la creación de aplicaciones web modernas y escalables utilizando React, JavaScript y tecnologías del ecosistema web. Cuento con experiencia en el desarrollo de interfaces dinámicas, optimización de la experiencia de usuario, integración con APIs y mantenimiento de aplicaciones en entornos productivos. 🚀 Manejo herramientas y tecnologías como HTML5, CSS3, Sass, Tailwind CSS, Git, Vitest y React Testing Library, aplicando buenas prácticas de desarrollo, testing, depuración y control de versiones para garantizar código limpio, mantenible y de alta calidad. 📚 Apasionada por el aprendizaje continuo, me mantengo actualizada con las últimas tendencias y tecnologías del desarrollo web para seguir aportando soluciones innovadoras y eficientes. 🤝 Busco formar parte de equipos donde pueda contribuir con mi experiencia, asumir nuevos retos y continuar creciendo profesionalmente mientras genero impacto a través de la tecnología.",
  links: {
    linkedin: "https://www.linkedin.com/",
    github: "https://github.com/",
  },
};

export const skills = [
  {
    name: "JavaScript",
    image: logoJavascript,
  },
  {
    name: "TypeScript",
    image: logoTypescript,
  },
  {
    name: "HTML5",
    image: logoHtml,
  },
  {
    name: "CSS3",
    image: logoCss,
  },
  {
    name: "Bootstrap",
    image: logoBootstrap,
  },
  {
    name: "Tailwind CSS",
    image: logoTailwind,
  },
  {
    name: "Material UI",
    image: logoMui,
  },
  {
    name: "Next.js",
    image: logoNext,
  },
  {
    name: ".NET",
    image: logoNet,
  },
  {
    name: "Node.js",
    image: logoNode,
  },
  {
    name: "Git",
    image: logoGit,
  },
  {
    name: "VTEX",
    image: logoVtex,
  },
  {
    name: "AWS",
    image: logoAws,
  },
  {
    name: "Firebase",
    image: logoFirebase,
  },
  {
    name: "GraphQL",
    image: logoGraphql,
  },
  {
    name: "SQL",
    image: logoSql,
  },
  {
    name: "Sass",
    image: logoSass,
  },
  {
    name: "Visual Studio",
    image: logoVisualStudio,
  },
  {
    name: "Visual Studio Code",
    image: logoVisualStudioCode,
  },
  {
    name: "React",
    image: logoReact,
  },
];

export const projects = [
  {
    title: "Puertas Automáticas SR",
    description:
      "Creación de sitio web para una empresa de puertas automáticas, incluyendo diseño, desarrollo y optimización de la experiencia de usuario.",
    image: projectPuertas,
  },
  {
    title: "Swimwear Store",
    description:
      "Proyecto de tienda en línea para la venta de trajes de baño, con funcionalidades de carrito de compras, pasarela de pago y gestión de inventario.",
    image: projectSwimwear,
  },
  {
    title: "Librería en Línea",
    description:
      "Desarrollo de una plataforma para la venta de libros en línea, con catálogo de productos, sistema de búsqueda y filtrado, y opciones de pago seguro.",
    image: projectLibreria,
  },
];

export const certificates = [
  {
    title: "Certificado Front-End",
    issuer: "Nombre de la institucion",
    date: "2026",
    description:
      "Espacio para agregar el certificado, la plataforma donde lo obtuviste y las habilidades principales.",
    url: "#",
  },
  {
    title: "Certificado React",
    issuer: "Nombre de la institucion",
    date: "2026",
    description:
      "Espacio para destacar conocimientos en componentes, hooks, estado, consumo de APIs y buenas practicas.",
    url: "#",
  },
  {
    title: "Certificado Web",
    issuer: "Nombre de la institucion",
    date: "2026",
    description:
      "Espacio para documentar cursos, bootcamps, diplomados o certificaciones profesionales.",
    url: "#",
  },
];

export const experience = [
  {
    period: "2026 - Presente",
    role: "Software Developer",
    company: "DR Security",
    description:
      "Desarrollo y mantenimiento de aplicaciones web, creación de interfaces de usuario e integración con servicios y APIs.",
    image: DRLogo,
    url: "https://drsecurity.net/",
    location: "Ciudad de México, México",
    year: 2026,
    technologies: ["React", "TypeScript", "APIs", "CSS"],
  },
  {
    period: "Oct 2022 - Mar 2024",
    role: "Front-End Developer",
    company: "Vinneren Consulting",
    description:
      "Front-End Developer para Elektra. Desarrollo de interfaces de usuario, componentes interactivos, pruebas y depuración de aplicaciones.",
    image: VinnerenLogo,
    url: "https://www.vinneren.com/",
    location: "Ciudad de México, México",
    year: 2024,
    technologies: ["React", "JavaScript", "Testing", "UI"],
  },
  {
    period: "May 2022 - Oct 2022",
    role: "IT Intern",
    company: "Knowledgize",
    description:
      "Actualización y mejora de la apariencia de la aplicación web, traducción de información y documentación, implementación de diseños, investigación y desarrollo.",
    image: KnowledgizeLogo,
    url: "https://www.knowledgize.com",
    location: "Playa del Carmen, México",
    year: 2022,
    technologies: ["HTML", "CSS", "JavaScript", "Documentacion"],
  },
  {
    period: "Jul 2020 - Apr 2022",
    role: "Software Developer",
    company: "Genial Labs LLC",
    description:
      "Participación en proyectos de desarrollo de software, implementación de interfaces y mantenimiento de aplicaciones.",
    image: GenialLabsLogo ,
    url: "https://genial-labs.com/",
    location: "Ciudad de México, México",
    year: 2022,
    technologies: ["Frontend", "Web", "Mantenimiento"],
  },
];
