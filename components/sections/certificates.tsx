import { SectionTitle } from "@/components/ui/section-title";
import { certificates } from "@/data/portfolio";

export function Certificates() {
  return (
    <section className="section certificates-section" id="certificados">
      <div className="container">
        <SectionTitle
          eyebrow="Certificados"
          title="Formacion y aprendizaje continuo."
          description="Un espacio para mostrar tus certificaciones, cursos y logros profesionales mas relevantes."
        />

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <article className="card certificate-card" key={certificate.title}>
              <div className="certificate-card__icon" aria-hidden="true">
                <span />
              </div>

              <div className="certificate-card__content">
                <p className="certificate-card__date">{certificate.date}</p>
                <h3>{certificate.title}</h3>
                <p className="certificate-card__issuer">{certificate.issuer}</p>
                <p className="certificate-card__description">
                  {certificate.description}
                </p>
              </div>

              <a className="certificate-card__link" href={certificate.url}>
                Ver certificado
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
