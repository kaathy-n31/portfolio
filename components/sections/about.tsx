import { SectionTitle } from "@/components/ui/section-title";
import { profile } from "@/data/portfolio";

export function About() {
  return (
    <section className="section" id="sobre-mi">
      <div className="container about">
        <SectionTitle
          eyebrow="About"
          title="Una base clara para contar la historia profesional."
          description={profile.bio}
        />
        <div className="about__stats">
          <div className="card about__stat">
            <strong>01</strong>
            <span>Perfil editable</span>
          </div>
          <div className="card about__stat">
            <strong>03</strong>
            <span>Proyectos base</span>
          </div>
          <div className="card about__stat">
            <strong>02</strong>
            <span>Bloques de experiencia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
