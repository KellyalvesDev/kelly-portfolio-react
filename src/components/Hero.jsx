// Hero.jsx — Seção inicial
import perfiill from '../assets/perfiill.jpg';

function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero">
      {/* Fundo decorativo */}
      <div className="hero-bg">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="grid-overlay" />
      </div>

      {/* Conteúdo de texto */}
      <div className="hero-content">
        <div className="hero-badge">Disponível para oportunidades</div>

        <h1 className="hero-title">
          <span className="line">Kelly</span>
          <span className="line accent">Pitaluga</span>
        </h1>

        <p className="hero-sub">
          Full Stack Developer Java<br />
          <em>& Designer Gráfico</em>
        </p>

        <p className="hero-desc">
          Construo aplicações web completas — do back-end em Java e Spring Boot
          até interfaces responsivas com HTML, CSS e JavaScript.
          Trago o olhar de designer para cada linha de código.
        </p>

        <div className="hero-actions">
          <a
            href="#projetos"
            className="btn-primary"
            onClick={(e) => { e.preventDefault(); scrollTo('projetos'); }}
          >
            Ver projetos
          </a>
          <a
            href="https://github.com/KellyalvesDev"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            GitHub →
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <span className="stat-n">7+</span>
            <span className="stat-l">Projetos</span>
          </div>
          <div className="stat-div" />
          <div className="stat">
            <span className="stat-n">2</span>
            <span className="stat-l">Stacks</span>
          </div>
          <div className="stat-div" />
          <div className="stat">
            <span className="stat-n">+4</span>
            <span className="stat-l">Anos em Marketing</span>
          </div>
        </div>
      </div>

      {/* Foto com anel e tags flutuantes */}
      <div className="hero-photo-wrap">
        <div className="hero-photo-ring" />
        <img src={perfiill} alt="Kelly Pitaluga" className="hero-photo" />
        <div className="hero-tag tag-1">Java ☕</div>
        <div className="hero-tag tag-2">Spring Boot 🍃</div>
        <div className="hero-tag tag-3">Figma ✏️</div>
      </div>
    </section>
  );
}

export default Hero;
