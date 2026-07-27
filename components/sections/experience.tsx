import Image from "next/image";
import { SectionTitle } from "@/components/ui/section-title";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section className="section experience-section" id="experiencia">
      <div className="container">
        <SectionTitle
          eyebrow="Experiencia"
          title="Linea de tiempo simple para la trayectoria."
          description="Estructura inicial para ordenar roles, organizaciones y responsabilidades relevantes."
        />

        <div className="experience-timeline">
          {experience.map((item) => (
            <article
              className="experience-timeline__item"
              key={`${item.period}-${item.role}`}
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
                        alt={`Logotipo de ${item.company}`}
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
                      <h3 className="experience-timeline__role">{item.role}</h3>
                      <p className="experience-timeline__location">{item.location}</p>
                      <p className="experience-timeline__at">{item.period}</p>
                    </header>

                    <p className="experience-timeline__description">
                      {item.description}
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
