import Image from "next/image";
import type { CSSProperties } from "react";

import { SectionTitle } from "@/components/ui/section-title";
import { skills } from "@/data/portfolio";

const bubblePositions = [
  { left: 2, top: 15, size: 105 },
  { left: 12, top: 4, size: 125 },
  { left: 22, top: 18, size: 95 },
  { left: 32, top: 2, size: 145 },
  { left: 42, top: 15, size: 130 },
  { left: 52, top: 3, size: 100 },
  { left: 62, top: 14, size: 125 },
  { left: 72, top: 2, size: 145 },
  { left: 82, top: 17, size: 90 },
  { left: 92, top: 17, size: 90 },
  { left: 102, top: 17, size: 90 },

  { left: 5, top: 49, size: 115 },
  { left: 15, top: 43, size: 90 },
  { left: 25, top: 53, size: 125 },
  { left: 35, top: 39, size: 100 },
  { left: 45, top: 51, size: 135 },
  { left: 55, top: 41, size: 105 },
  { left: 65, top: 50, size: 140 },
  { left: 75, top: 44, size: 120 },
  { left: 85, top: 44, size: 120 },

];

export function Skills() {
  return (
    <section className="section section--muted" id="habilidades">
      <div className="container">
        <SectionTitle
          eyebrow="Habilidades"
          title="Tecnologías y herramientas"
          description="Tecnologías que utilizo para desarrollar aplicaciones web modernas, escalables y mantenibles."
        />

        <div className="skills-space">
          {skills.map((skill, index) => {
            const position =
              bubblePositions[index % bubblePositions.length];

            const cycle = Math.floor(index / bubblePositions.length);

            const style = {
  "--bubble-left": `${position.left}%`,
  "--bubble-top": `${position.top}%`,
  "--bubble-size": `${position.size}px`,
  "--animation-delay": `${index * -0.7}s`,
  "--animation-duration": `${5 + (index % 5)}s`,
  "--movement-x": `${8 + (index % 4) * 4}px`,
  "--movement-y": `${10 + (index % 5) * 4}px`,
  "--rotation": `${index % 2 === 0 ? 4 : -4}deg`,
} as CSSProperties;

            return (
              <article
                className="skill-bubble"
                key={skill.name}
                style={style}
                title={skill.name}
              >
                <div className="skill-bubble__content">
                  <Image
                    src={skill.image}
                    alt={`Logo de ${skill.name}`}
                    width={80}
                    height={80}
                    className="skill-bubble__image"
                  />
                </div>

                <span className="skill-bubble__name">
                  {skill.name}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
