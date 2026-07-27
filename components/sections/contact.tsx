import { SectionTitle } from "@/components/ui/section-title";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section className="section contact" id="contacto">
      <div className="container contact__inner">
        <SectionTitle
          eyebrow="Contacto"
          title="Espacio listo para conectar."
          description="Reemplaza estos datos con correo, redes profesionales y una llamada a la accion mas especifica."
        />
        <div className="contact__actions">
          <a className="button" href={`mailto:${profile.email}`}>
            Enviar correo
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
