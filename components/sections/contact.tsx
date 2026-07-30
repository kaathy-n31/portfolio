"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { SectionTitle } from "@/components/ui/section-title";
import { profile } from "@/data/portfolio";

const cvPath = "/cv.pdf";

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
          <a className="button" href={cvPath} download>
            {t.contact.cv}
          </a>
          <a className="button button--ghost" href={profile.links.linkedin}>
            LinkedIn
          </a>
          <a className="button button--ghost" href={profile.links.github}>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
