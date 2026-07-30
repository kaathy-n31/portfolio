"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

import { useLanguage } from "@/components/providers/language-provider";
import { SectionTitle } from "@/components/ui/section-title";
import { skills } from "@/data/portfolio";

const bubblePositions = [
  { left: 2, top: 15, size: 105 },
  { left: 11, top: 4, size: 125 },
  { left: 20, top: 18, size: 95 },
  { left: 29, top: 2, size: 145 },
  { left: 39, top: 15, size: 130 },
  { left: 49, top: 3, size: 100 },
  { left: 58, top: 14, size: 125 },
  { left: 68, top: 2, size: 145 },
  { left: 79, top: 17, size: 90 },
  { left: 88, top: 8, size: 96 },
  { left: 4, top: 49, size: 115 },
  { left: 14, top: 43, size: 90 },
  { left: 24, top: 53, size: 125 },
  { left: 34, top: 39, size: 100 },
  { left: 44, top: 51, size: 135 },
  { left: 54, top: 41, size: 105 },
  { left: 64, top: 50, size: 140 },
  { left: 75, top: 44, size: 120 },
  { left: 86, top: 52, size: 105 },
];

export function Skills() {
  const { t } = useLanguage();

  return (
    <section className="section section--muted" id="habilidades">
      <div className="container">
        <SectionTitle
          eyebrow={t.skills.eyebrow}
          title={t.skills.title}
          description={t.skills.description}
        />

        <div className="skills-space">
          {skills.map((skill, index) => {
            const position =
              bubblePositions[index % bubblePositions.length];

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
                    alt={`${t.skills.logoAlt} ${skill.name}`}
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
