"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { profile } from "@/data/portfolio";

export function Hero() {
  const { language, t } = useLanguage();

  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero_title_name">
            {t.hero.greeting} {profile.name}
          </p>
          
          <h1 className="hero__title">
            <span className="hero__title-line">{t.hero.titleTop}</span>
            <span className="hero__title-line">{t.hero.titleBottom}</span>
          </h1>
          {/* <h1>{profile.name}</h1> */}
          <p className="hero__intro">{profile.summary[language]}</p>
          <div className="hero__actions">
            <a className="button" href="#proyectos">
              {t.hero.primaryAction}
            </a>
            <a className="button button--ghost" href="#contacto">
              {t.hero.secondaryAction}
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero-illustration">
            <div className="hero-illustration__window">
              <div className="hero-illustration__toolbar">
                <span />
                <span />
                <span />
              </div>
              <div className="hero-illustration__code">
                <span className="hero-illustration__line hero-illustration__line--wide" />
                <span className="hero-illustration__line" />
                <span className="hero-illustration__line hero-illustration__line--short" />
                <span className="hero-illustration__line hero-illustration__line--medium" />
              </div>
              <div className="hero-illustration__preview">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="hero-illustration__badge hero-illustration__badge--react">
              React
            </div>
            <div className="hero-illustration__badge hero-illustration__badge--ui">
              UI
            </div>
            <div className="hero-illustration__badge hero-illustration__badge--next">
              Next.js
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
