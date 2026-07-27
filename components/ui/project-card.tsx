import Image from "next/image";

type ProjectCardProps = {
  title: string;
  description: string;
  image: any; // Cambiado a 'any' para aceptar cualquier tipo de imagen
};

export function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <article className="card project-card">
      <div>
        <p className="project-card__label">Proyecto</p>
        <div className="project-card__image">
          <Image className="project_image" src={image} alt={`Imagen de ${title}`} width={200} height={200} />
        </div>
        <h3 className="project_title">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="project-card__btns">
        <button className="button project-button">Demo</button>
        <button className="button button--ghost project-button">GitHub</button>
      </div>
    </article>
  );
}
