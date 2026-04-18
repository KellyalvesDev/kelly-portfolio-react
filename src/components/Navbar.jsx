// Navbar.jsx — Navegação com scroll effect e menu mobile
import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detecta scroll para escurecer o nav
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloqueia scroll do body quando menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Fecha menu e rola suavemente até a seção
  const handleNav = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const links = [
    { label: 'Sobre', id: 'sobre' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projetos', id: 'projetos' },
    { label: 'Contato', id: 'contato' },
  ];

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="nav-inner">
        {/* Logo */}
        <span className="nav-logo" onClick={(e) => handleNav(e, 'hero')}>KP</span>

        {/* Links — visíveis só no desktop via CSS */}
        <ul className="nav-links-desktop">
          {links.map(({ label, id }) => (
            <li key={id}>
              <a href={`#${id}`} onClick={(e) => handleNav(e, id)}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Botão CTA — visível só no desktop via CSS */}
        <button className="btn-cta btn-cta-desktop" onClick={(e) => handleNav(e, 'contato')}>
          Fale comigo
        </button>

        {/* Hambúrguer — visível só no mobile via CSS */}
        <button
          className={`nav-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Menu mobile — fullscreen, controlado pelo estado menuOpen */}
      <ul className={`nav-links-mobile${menuOpen ? ' open' : ''}`}>
        {links.map(({ label, id }) => (
          <li key={id}>
            <a href={`#${id}`} onClick={(e) => handleNav(e, id)}>{label}</a>
          </li>
        ))}
        <li>
          <a
            href="#contato"
            onClick={(e) => handleNav(e, 'contato')}
            style={{ color: 'var(--accent)' }}
          >
            Fale comigo
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
