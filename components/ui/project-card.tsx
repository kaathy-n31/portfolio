"use client";

import Image from "next/image";
import { useLanguage } from "@/components/providers/language-provider";

type ProjectCardProps = {
  title: string;
  description: string;
  image: any; // Cambiado a 'any' para aceptar cualquier tipo de imagen
  page: string;
};

export function ProjectCard({ title, description, image, page }: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <article className="card project-card">
      <div>
        <p className="project-card__label">{t.projects.label}</p>
        <div className="project-card__image">
          <Image className="project_image" src={image} alt={`${t.projects.imageAlt} ${title}`} width={200} height={200} />
        </div>
        <h3 className="project_title">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="project-card__btns">
        <button className="button project-button">
          <a href={page} target="_blank">Demo</a>
        </button>
        <button className="button button--ghost project-button">GitHub</button>
      </div>
    </article>
  );
}
