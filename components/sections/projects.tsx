"use client";

import { localize, useLanguage } from "@/components/providers/language-provider";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionTitle } from "@/components/ui/section-title";
import { projects } from "@/data/portfolio";

export function Projects() {
  const { language, t } = useLanguage();

  return (
    <section className="section" id="proyectos">
      <div className="container">
        <SectionTitle
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={localize(project.title, language)}
              title={localize(project.title, language)}
              description={localize(project.description, language)}
              image={project.image}
              page={project.page}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
