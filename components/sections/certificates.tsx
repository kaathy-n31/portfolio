"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { SectionTitle } from "@/components/ui/section-title";
import { certificates } from "@/data/portfolio";

export function Certificates() {
  const carouselRef = useRef<HTMLDivElement>(null);

  function scrollCertificates(direction: "left" | "right") {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const card = carousel.querySelector<HTMLElement>(".certificate-card");
    const scrollAmount = card
      ? card.offsetWidth + 18
      : carousel.clientWidth * 0.85;

    carousel.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <section className="section certificates-section" id="certificados">
      <div className="container">
        <SectionTitle
          eyebrow="Certificados"
          title="Formacion y aprendizaje continuo."
          description="Un espacio para mostrar tus certificaciones, cursos y logros profesionales mas relevantes."
        />

        <div className="certificates-carousel">
          <button
            className="certificates-carousel__button certificates-carousel__button--prev"
            type="button"
            aria-label="Ver certificados anteriores"
            onClick={() => scrollCertificates("left")}
          >
            <FaChevronLeft size={16} />
          </button>

          <div
            className="certificates-grid"
            ref={carouselRef}
            aria-label="Carrusel de certificados"
          >
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

          <button
            className="certificates-carousel__button certificates-carousel__button--next"
            type="button"
            aria-label="Ver mas certificados"
            onClick={() => scrollCertificates("right")}
          >
            <FaChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
