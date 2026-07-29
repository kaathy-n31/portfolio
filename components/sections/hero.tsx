import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero_title_name">Hi! I'm {profile.name}</p>
          
          <h1 className="hero__title">
            <span className="hero__title-line">Front End</span>
            <span className="hero__title-line">Developer</span>
          </h1>
          {/* <h1>{profile.name}</h1> */}
          <p className="hero__intro">{profile.summary}</p>
          <div className="hero__actions">
            <a className="button" href="#proyectos">
              Ver proyectos
            </a>
            <a className="button button--ghost" href="#contacto">
              Contacto
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
