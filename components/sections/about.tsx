"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { SectionTitle } from "@/components/ui/section-title";
import { profile } from "@/data/portfolio";

export function About() {
  const { language, t } = useLanguage();

  return (
    <section className="section" id="sobre-mi">
      <div className="container about">
        <SectionTitle
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description={profile.bio[language]}
        />
        <div className="about__stats">
          <div className="card about__stat">
            <strong>01</strong>
            <span>{t.about.editableProfile}</span>
          </div>
          <div className="card about__stat">
            <strong>03</strong>
            <span>{t.about.baseProjects}</span>
          </div>
          <div className="card about__stat">
            <strong>02</strong>
            <span>{t.about.experienceBlocks}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
