"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { SectionTitle } from "@/components/ui/section-title";
import { profile } from "@/data/portfolio";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const cvPath = "/documents/CV_Katherine-Negrete.pdf";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section className="section contact" id="contacto">
      <div className="container contact__inner">
        <SectionTitle
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          description={t.contact.description}
        />
        <div className="contact__actions">
          <a className="button" href={cvPath} download="CV_Katherine-Negrete.pdf">
            {t.contact.cv}
          </a>
          <a className="button button--ghost" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Abrir LinkedIn">
            <FaLinkedin size={20} aria-hidden="true" />
            LinkedIn
          </a>
          <a className="button button--ghost" href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="Abrir GitHub">
            <FaGithub size={20} aria-hidden="true" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
