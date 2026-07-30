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

export type LocalizedText = {
  es: string;
  en: string;
};

export const profile = {
  name: "Katherine Negrete",
  role: "Front-End Developer",
  location: {
    es: "Ciudad de Mexico, Mexico",
    en: "Mexico City, Mexico",
  },
  email: "correo@ejemplo.com",
  summary: {
    es: "Con más de 2 años de experiencia construyendo aplicaciones web modernas, responsivas y centradas en el usuario. Me especializo en crear interfaces intuitivas, escribir código limpio y mantenible, y entregar experiencias digitales fluidas.",
    en: "2+ years of experience building modern, responsive, and user-centered web applications. I specialize in creating intuitive interfaces, writing clean and maintainable code, and delivering seamless digital experiences.",
  },
  bio: {
    es: "Desarrolladora Front-End especializada en la creación de aplicaciones web modernas y escalables utilizando React, JavaScript y tecnologias del ecosistema web. Cuento con experiencia en el desarrollo de interfaces dinamicas, optimizacion de la experiencia de usuario, integracion con APIs y mantenimiento de aplicaciones en entornos productivos.",
    en: "Front-End Developer specialized in building modern, scalable web applications with React, JavaScript, and the web ecosystem. I have experience developing dynamic interfaces, improving user experience, integrating APIs, and maintaining production applications.",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/katherine-negrete-07b65b240/",
    github: "https://github.com/kaathy-n31",
  },
};

export const skills = [
  { name: "JavaScript", image: logoJavascript },
  { name: "TypeScript", image: logoTypescript },
  { name: "HTML5", image: logoHtml },
  { name: "CSS3", image: logoCss },
  { name: "Bootstrap", image: logoBootstrap },
  { name: "Tailwind CSS", image: logoTailwind },
  { name: "Material UI", image: logoMui },
  { name: "Next.js", image: logoNext },
  { name: ".NET", image: logoNet },
  { name: "Node.js", image: logoNode },
  { name: "Git", image: logoGit },
  { name: "VTEX", image: logoVtex },
  { name: "AWS", image: logoAws },
  { name: "Firebase", image: logoFirebase },
  { name: "GraphQL", image: logoGraphql },
  { name: "SQL", image: logoSql },
  { name: "Sass", image: logoSass },
  { name: "Visual Studio", image: logoVisualStudio },
  { name: "Visual Studio Code", image: logoVisualStudioCode },
  { name: "React", image: logoReact },
];

export const projects = [
  {
    title: {
      es: "Puertas Automaticas SR",
      en: "Automatic Doors SR",
    },
    description: {
      es: "Creacion de sitio web para una empresa de puertas automaticas, incluyendo diseno, desarrollo y optimizacion de la experiencia de usuario.",
      en: "Website creation for an automatic doors company, including design, development, and user experience optimization.",
    },
    image: projectPuertas,
    page: "https://puertasautomaticasjesr.com/",
  },
  {
    title: {
      es: "Swimwear Store",
      en: "Swimwear Store",
    },
    description: {
      es: "Proyecto de tienda en linea para la venta de trajes de bano, con funcionalidades de carrito de compras, pasarela de pago y gestion de inventario.",
      en: "Online store project for swimwear sales, with shopping cart, payment gateway, and inventory management features.",
    },
    image: projectSwimwear,
    page: "",
  },
  {
    title: {
      es: "Libreria en Linea",
      en: "Online Bookstore",
    },
    description: {
      es: "Desarrollo de una plataforma para la venta de libros en linea, con catalogo de productos, sistema de busqueda y filtrado, y opciones de pago seguro.",
      en: "Development of a platform for online book sales, with a product catalog, search and filtering system, and secure payment options.",
    },
    image: projectLibreria,
    page: "https://katherine-na.github.io/gallery-project/",
  },
];

export const certificates = [
  {
    title: "Introduction to HTML5",
    issuer: "Coursera",
    date: "2022",
    description: {
      es: "Bases de HTML semantico para estructurar paginas web accesibles y bien organizadas.",
      en: "HTML semantic foundations for structuring accessible and well-organized web pages.",
    },
    url: "https://www.coursera.org/account/accomplishments/verify/NP4AMAFV3LXE?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Introduction to CSS3",
    issuer: "Coursera",
    date: "2022",
    description: {
      es: "Fundamentos de estilos, selectores, modelo de caja y diseno visual con CSS.",
      en: "Foundations of styles, selectors, the box model, and visual design with CSS.",
    },
    url: "https://www.coursera.org/account/accomplishments/verify/LAJKVHPMLVFY?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Responsive Design",
    issuer: "Coursera",
    date: "2022",
    description: {
      es: "Practicas para crear interfaces adaptables a distintos tamanos de pantalla.",
      en: "Practices for creating interfaces that adapt to different screen sizes.",
    },
    url: "https://www.coursera.org/account/accomplishments/verify/HQEN6SLXFFWE?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "Introduction to JavaScript",
    issuer: "Coursera",
    date: "2022",
    description: {
      es: "Conceptos iniciales de programacion web interactiva usando JavaScript.",
      en: "Introductory concepts for interactive web programming with JavaScript.",
    },
    url: "https://www.coursera.org/account/accomplishments/verify/M5VPPRTG3SRK?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    title: "ReactJs + TypeScript + NextJs",
    issuer: "Udemy",
    date: "2023",
    description: {
      es: "Desarrollo de aplicaciones modernas con React, tipado con TypeScript y rutas en Next.js.",
      en: "Modern application development with React, TypeScript typing, and routing in Next.js.",
    },
    url: "https://www.udemy.com/certificate/UC-52db33ad-74d2-4b35-87fa-8c9e754fa006/",
  },
  {
    title: "Google Analytics",
    issuer: "Udemy",
    date: "2023",
    description: {
      es: "Configuracion y lectura de metricas para analizar comportamiento de usuarios en sitios web.",
      en: "Setup and analysis of metrics to understand user behavior on websites.",
    },
    url: "https://drive.google.com/file/d/1wbr-jGfmRwL9Q89u-03qyZ56wPzUxgiR/view",
  },
  {
    title: "Google Tag Mannager",
    issuer: "Udemy",
    date: "2023",
    description: {
      es: "Implementacion de etiquetas y eventos para medicion digital sin cambios directos en codigo.",
      en: "Implementation of tags and events for digital measurement without direct code changes.",
    },
    url: "https://drive.google.com/file/d/1VIWeCbc7LoUrq1ohsQa8UosKEfqQlmU4/view",
  },
  {
    title: "VTEX IO",
    issuer: "VTEX TECH",
    date: "2023",
    description: {
      es: "Fundamentos de desarrollo y personalizacion de experiencias ecommerce en VTEX IO.",
      en: "Foundations for developing and customizing ecommerce experiences in VTEX IO.",
    },
    url: "https://drive.google.com/file/d/1E_e5zUTIpu7Sq7PftNyjbhG03ih6YYUV/view",
  },
  {
    title: "Cybersecurity Training",
    issuer: "Delta Protect",
    date: "2024",
    description: {
      es: "Buenas practicas de seguridad digital, prevencion de riesgos y proteccion de informacion.",
      en: "Digital security best practices, risk prevention, and information protection.",
    },
    url: "https://drive.google.com/file/d/1ZwFacSlJ-t6WP_8j_O3KuuAXlW0zzTT-/view",
  },
  {
    title: "APIs con .NET",
    issuer: "Platzi",
    date: "2025",
    description: {
      es: "Creacion de APIs con .NET, manejo de endpoints y estructura de servicios backend.",
      en: "API creation with .NET, endpoint management, and backend service structure.",
    },
    url: "https://drive.google.com/file/d/11jZ0LP9Bj87WB_Z9HfejIipL56_vRM0f/view?usp=sharing",
  },
  {
    title: {
      es: "Diseno para programadores",
      en: "Design for Programmers",
    },
    issuer: "Platzi",
    date: "2025",
    description: {
      es: "Principios de diseno visual aplicados a interfaces claras, consistentes y funcionales.",
      en: "Visual design principles applied to clear, consistent, and functional interfaces.",
    },
    url: "https://drive.google.com/file/d/16cmXURo0YqrxXW_J-wu_k3WGfKZqONoM/view?usp=sharing",
  },
  {
    title: "Fundamentos de Entity Framework",
    issuer: "Platzi",
    date: "2025",
    description: {
      es: "Uso de Entity Framework para modelar datos y trabajar con persistencia en .NET.",
      en: "Use of Entity Framework to model data and work with persistence in .NET.",
    },
    url: "https://drive.google.com/file/d/1uyH7tBY5tpiKrmgP3Lcd9C0xI__PncaC/view?usp=sharing",
  },
  {
    title: "Fundamentos de .NET",
    issuer: "Platzi",
    date: "2025",
    description: {
      es: "Bases del ecosistema .NET, estructura de proyectos y desarrollo con C#.",
      en: "Foundations of the .NET ecosystem, project structure, and development with C#.",
    },
    url: "https://drive.google.com/file/d/1B7_s1Vj_TFDXS6Ds6NPCa1P8TJhQbVQp/view?usp=sharing",
  },
  {
    title: {
      es: "Introduccion a React Native",
      en: "Introduction to React Native",
    },
    issuer: "Platzi",
    date: "2025",
    description: {
      es: "Primer acercamiento al desarrollo de aplicaciones moviles con componentes React Native.",
      en: "First approach to mobile application development with React Native components.",
    },
    url: "https://drive.google.com/file/d/1bgpZL1pwGTtfQqlVBFJ0FyKEZ6yszLzN/view?usp=sharing",
  },
];

export const experience = [
  {
    period: {
      es: "2026 - Presente",
      en: "2026 - Present",
    },
    role: {
      es: "Software Developer",
      en: "Software Developer",
    },
    company: "DR Security",
    description: {
      es: "Desarrolladora Frontend en proyectos como Visitax, SIVUFF e Intranet, creando interfaces responsivas, formularios dinamicos, paneles y componentes reutilizables. Participe en la integracion de pasarelas de pago, visualizacion de datos en tiempo real, gestion de roles y permisos, automatizacion de procesos internos y mejoras continuas en colaboracion con equipos de backend y usuarios.",
      en: "Frontend developer on projects such as Visitax, SIVUFF, and Intranet, creating responsive interfaces, dynamic forms, dashboards, and reusable components. I participated in payment gateway integrations, real-time data visualization, role and permission management, internal process automation, and continuous improvements in collaboration with backend teams and users.",
    },
    image: DRLogo,
    url: "https://drsecurity.net/",
    location: {
      es: "Ciudad de Mexico, Mexico",
      en: "Mexico City, Mexico",
    },
    year: 2026,
    technologies: ["React", "TypeScript", "Next", "APIs", "Tailwind", "UI/UX", "Testing", "Prototipos de comunicación", "Redes", "XAML", "C#", "WPF", "SQL"],
  },
  {
    period: {
      es: "Oct 2022 - Mar 2024",
      en: "Oct 2022 - Mar 2024",
    },
    role: {
      es: "Front-End Developer",
      en: "Front-End Developer",
    },
    company: "Vinneren Consulting",
    description: {
      es: "Desarrolladora Frontend con experiencia en plataformas de comercio electronico, creando interfaces responsivas y componentes reutilizables con React.js, Next.js, TypeScript y JavaScript. Participe en el ciclo completo de desarrollo, integracion de APIs, despliegues, mantenimiento, documentacion tecnica y revisiones de codigo, colaborando con equipos de diseno y backend.",
      en: "Frontend developer with ecommerce platform experience, creating responsive interfaces and reusable components with React.js, Next.js, TypeScript, and JavaScript. I participated in the full development cycle, API integrations, deployments, maintenance, technical documentation, and code reviews while collaborating with design and backend teams.",
    },
    image: VinnerenLogo,
    url: "https://www.vinneren.com/",
    location: {
      es: "Ciudad de Mexico, Mexico",
      en: "Mexico City, Mexico",
    },
    year: 2024,
    technologies: ["React", "JavaScript", "VTEX-IO", "Contentful", "CSS", "Tailwind", "Sass"],
  },
  {
    period: {
      es: "May 2022 - Oct 2022",
      en: "May 2022 - Oct 2022",
    },
    role: {
      es: "IT Intern",
      en: "IT Intern",
    },
    company: "Knowledgize",
    description: {
      es: "Experiencia en aseguramiento de calidad de software y soporte tecnico, incluyendo pruebas de funcionalidades, identificacion de errores, revision de documentacion y validacion de traducciones. Uso de Git y GitHub para control de versiones y colaboracion en equipo.",
      en: "Experience in software quality assurance and technical support, including feature testing, bug identification, documentation review, and translation validation. Skilled in Git and GitHub for version control and team collaboration.",
    },
    image: KnowledgizeLogo,
    url: "https://www.knowledgize.com",
    location: {
      es: "Playa del Carmen, Mexico",
      en: "Playa del Carmen, Mexico",
    },
    year: 2022,
    technologies: ["HTML", "CSS", "JavaScript", "Documentation"],
  },
  {
    period: {
      es: "Jul 2020 - Abr 2022",
      en: "Jul 2020 - Apr 2022",
    },
    role: {
      es: "Asistente Administrativa",
      en: "Administrative Assistant",
    },
    company: "Genial Labs LLC",
    description: {
      es: "Apoyo en edicion de imagenes, captura de datos, documentacion, administracion de WordPress y manejo de herramientas de Google y Microsoft.",
      en: "Support with image editing, data entry, documentation, WordPress administration, and Google and Microsoft tools.",
    },
    image: GenialLabsLogo,
    url: "https://genial-labs.com/",
    location: {
      es: "Ciudad de Mexico, Mexico",
      en: "Mexico City, Mexico",
    },
    year: 2022,
    technologies: ["Wordpress", "Microsoft Office", "Maintenance"],
  },
];
