"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/language-provider";
import { SectionTitle } from "@/components/ui/section-title";
import { experience } from "@/data/portfolio";

export function Experience() {
  const { language, t } = useLanguage();

  return (
    <section className="section experience-section" id="experiencia">
      <div className="container">
        <SectionTitle
          eyebrow={t.experience.eyebrow}
          title={t.experience.title}
          description={t.experience.description}
        />

        <div className="experience-timeline">
          {experience.map((item) => (
            <article
              className="experience-timeline__item"
              key={`${item.period.en}-${item.role.en}`}
            >
              <div className="experience-timeline__period">
                <time>{item.year}</time>
              </div>

              <div className="experience-timeline__marker" />

              <div className="experience-timeline__content">
                <div className="experience-timeline__main">
                  {item.image && (
                    <div className="experience-timeline__logo">
                      <Image
                        src={item.image}
                        alt={`${t.experience.logoAlt} ${item.company}`}
                        width={80}
                        height={80}
                      />
                    </div>
                  )}

                  <div className="experience-timeline__information">
                    <header className="experience-timeline__header">
                      <h4 className="logo-text">
                        {item.company}
                      </h4>
                      <h3 className="experience-timeline__role">
                        {item.role[language]}
                      </h3>
                      <p className="experience-timeline__location">{item.location[language]}</p>
                      <p className="experience-timeline__at">{item.period[language]}</p>
                    </header>

                    <p className="experience-timeline__description">
                      {item.description[language]}
                    </p>

                    {item.technologies?.length > 0 && (
                      <div className="experience-timeline__technologies">
                        {item.technologies.map((technology) => (
                          <span
                            className="experience-timeline__technology"
                            key={technology}
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
