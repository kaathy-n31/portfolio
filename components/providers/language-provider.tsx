"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "es" | "en";

const storageKey = "portfolio-language";

const translations = {
  es: {
    nav: {
      projects: "Proyectos",
      certificates: "Certificados",
      experience: "Experiencia",
      contact: "Contacto",
      openMenu: "Abrir menu",
      closeMenu: "Cerrar menu",
      mainNavigation: "Navegacion principal",
      goHome: "Ir al inicio",
    },
    theme: {
      light: "Activar modo claro",
      dark: "Activar modo oscuro",
    },
    language: {
      label: "Cambiar idioma a ingles",
      short: "ES",
      next: "EN",
    },
    hero: {
      greeting: "Hola, soy",
      titleTop: "Front End",
      titleBottom: "Developer",
      primaryAction: "Ver proyectos",
      secondaryAction: "Contacto",
    },
    skills: {
      eyebrow: "Habilidades",
      title: "Tecnologias y herramientas",
      description:
        "Tecnologias que utilizo para desarrollar aplicaciones web modernas, escalables y mantenibles.",
      logoAlt: "Logo de",
    },
    projects: {
      eyebrow: "Proyectos",
      title: "Aplicaciones web y experiencias digitales.",
      description:
        "Proyectos desarrollados con enfoque front-end, interfaces responsivas, tiendas en linea y sitios optimizados para una navegacion clara.",
      label: "Proyecto",
      imageAlt: "Imagen de",
    },
    certificates: {
      eyebrow: "Certificados",
      title: "Certificaciones en desarrollo web y tecnologia.",
      description:
        "Cursos de HTML, CSS, JavaScript, React, Next.js, .NET, VTEX, analitica digital y buenas practicas de seguridad.",
      previous: "Ver certificados anteriores",
      next: "Ver mas certificados",
      carousel: "Carrusel de certificados",
      link: "Ver certificado",
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Trayectoria en desarrollo front-end.",
      description:
        "Experiencia creando interfaces responsivas, componentes reutilizables, integraciones con APIs, ecommerce, testing, documentacion y soporte a productos web.",
      logoAlt: "Logotipo de",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Conectemos para crear experiencias web.",
      description:
        "Estoy disponible para colaborar en proyectos front-end, productos digitales y equipos que busquen interfaces claras, modernas y mantenibles.",
      email: "Enviar correo",
    },
    about: {
      eyebrow: "Sobre mi",
      title: "Perfil front-end orientado a productos web.",
      editableProfile: "Perfil profesional",
      baseProjects: "Proyectos",
      experienceBlocks: "Experiencias",
    },
  },
  en: {
    nav: {
      projects: "Projects",
      certificates: "Certificates",
      experience: "Experience",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      mainNavigation: "Main navigation",
      goHome: "Go to home",
    },
    theme: {
      light: "Switch to light mode",
      dark: "Switch to dark mode",
    },
    language: {
      label: "Switch language to Spanish",
      short: "EN",
      next: "ES",
    },
    hero: {
      greeting: "Hi! I'm",
      titleTop: "Front End",
      titleBottom: "Developer",
      primaryAction: "View projects",
      secondaryAction: "Contact",
    },
    skills: {
      eyebrow: "Skills",
      title: "Technologies and tools",
      description:
        "Technologies I use to build modern, scalable, and maintainable web applications.",
      logoAlt: "Logo for",
    },
    projects: {
      eyebrow: "Projects",
      title: "Web applications and digital experiences.",
      description:
        "Projects built with a front-end focus, responsive interfaces, online stores, and websites optimized for clear navigation.",
      label: "Project",
      imageAlt: "Image for",
    },
    certificates: {
      eyebrow: "Certificates",
      title: "Certifications in web development and technology.",
      description:
        "Courses in HTML, CSS, JavaScript, React, Next.js, .NET, VTEX, digital analytics, and security best practices.",
      previous: "View previous certificates",
      next: "View more certificates",
      carousel: "Certificates carousel",
      link: "View certificate",
    },
    experience: {
      eyebrow: "Experience",
      title: "Front-end development career path.",
      description:
        "Experience building responsive interfaces, reusable components, API integrations, ecommerce, testing, documentation, and support for web products.",
      logoAlt: "Logo for",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build web experiences together.",
      description:
        "I am available to collaborate on front-end projects, digital products, and teams looking for clear, modern, and maintainable interfaces.",
      email: "Send email",
    },
    about: {
      eyebrow: "About",
      title: "Front-end profile focused on web products.",
      editableProfile: "Professional profile",
      baseProjects: "Projects",
      experienceBlocks: "Experience blocks",
    },
  },
} as const;

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (typeof translations)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return "es";
  }

  const storedLanguage = window.localStorage.getItem(storageKey);

  return storedLanguage === "en" || storedLanguage === "es"
    ? storedLanguage
    : "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    setLanguage(getInitialLanguage());
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(storageKey, language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () =>
        setLanguage((current) => (current === "es" ? "en" : "es")),
      t: translations[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}

type LocalizedValue = Record<Language, string>;

export function localize(
  value: string | LocalizedValue,
  language: Language,
) {
  return typeof value === "string" ? value : value[language];
}
