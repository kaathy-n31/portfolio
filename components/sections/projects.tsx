import { ProjectCard } from "@/components/ui/project-card";
import { SectionTitle } from "@/components/ui/section-title";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section className="section" id="proyectos">
      <div className="container">
        <SectionTitle
          eyebrow="Proyectos"
          title="Casos preparados para documentar impacto."
          description="Cada tarjeta puede crecer despues con imagenes, enlaces, metricas, proceso y resultados."
        />
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
