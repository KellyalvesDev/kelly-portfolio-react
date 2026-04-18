// Projetos.jsx — Seção de projetos com filtro interativo
import { useState } from 'react';

// Importação das imagens
import agencia from '../assets/agencia criativa web 1.png';
import ronaldo from '../assets/ronaldo.jpeg';
import beeCreat from '../assets/bee creat.png';
import amaro from '../assets/Amaro.png';
import oliva from '../assets/oliva studio.png';
import floratta from '../assets/floratta logo 2.png';
import kellyAlves from '../assets/Kelly Alves.png';
import kaoripaper from '../assets/kaoripaper.png';

// Lista de projetos
const PROJETOS = [

  {
    id: 1,
    cat: 'dev',
    featured: false,
    img: kaoripaper,
    alt: 'Papelaria - Kaori Paper',
    link: 'https://kaoripaper.netlify.app/',
    linkLabel: 'Visitar site →',
    tag: 'Dev',
    tagClass: 'tag-dev',
    title: 'Papelaria - Kaori Paper',
    desc: 'Loja virtual completa com catálogo de produtos, carrinho, lista de favoritos, sistema de pedidos via WhatsApp e painel administrativo. Dados em tempo real com Firebase Firestore.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'firebase', 'Netlify'],
  },
  {
    id: 2,
    cat: 'dev',
    featured: false,
    img: agencia,
    alt: 'Agência Criativa Web',
    link: 'https://kellyalvesdev.github.io/agencia-criativa-web/',
    linkLabel: 'Visitar site →',
    tag: 'Dev',
    tagClass: 'tag-dev',
    title: 'Agência Criativa Web',
    desc: 'Site institucional completo com HTML, CSS e JavaScript. Layout moderno, responsivo e voltado para conversão.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: 3,
    cat: 'dev',
    featured: false,
    img: ronaldo,
    alt: 'Corretor Ronaldo Peixoto',
    link: 'https://kellyalvesdev.github.io/Corretor-Ronaldo-Peixoto/index.html',
    linkLabel: 'Visitar site →',
    tag: 'Dev',
    tagClass: 'tag-dev',
    title: 'Site Corretor Ronaldo Peixoto',
    desc: 'Site de catálogo de imóveis com foco em conversão de vendas. Design que transmite credibilidade e segurança.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: 4,
    cat: 'design',
    featured: true,
    img: beeCreat,
    alt: 'Bee Creat',
    link: 'https://www.behance.net/gallery/230724715/Rebranding-Bee-creat',
    linkLabel: 'Ver no Behance →',
    tag: 'Design',
    tagClass: 'tag-design',
    title: 'Rebranding — Bee Creat',
    desc: 'Rebranding completo e aplicação de marca para agência de marketing digital. Nova identidade visual com manual de uso.',
    tech: ['Branding', 'Illustrator', 'Figma'],
  },
  {
    id: 5,
    cat: 'design',
    featured: false,
    img: amaro,
    alt: 'AMARO',
    link: 'https://www.behance.net/gallery/227790777/Tcc-eBAC',
    linkLabel: 'Ver no Behance →',
    tag: 'Design',
    tagClass: 'tag-design',
    title: 'ID Visual — AMARO',
    desc: 'Identidade visual e aplicação de marca para lançamento de moda feminina. TCC EBAC — Design Gráfico.',
    tech: ['Branding', 'Photoshop', 'Illustrator'],
  },
  {
    id: 6,
    cat: 'design',
    featured: false,
    img: oliva,
    alt: 'Oliva Studio',
    link: 'https://www.behance.net/gallery/231779913/Teste-de-manual-de-identidade-(-Marca-Ficticia-)',
    linkLabel: 'Ver no Behance →',
    tag: 'Design',
    tagClass: 'tag-design',
    title: 'ID Visual — Oliva Studio',
    desc: 'Design intimista e autêntico para agência criativa. Manual completo de identidade visual para marca fictícia.',
    tech: ['Branding', 'Illustrator'],
  },
  {
    id: 7,
    cat: 'design',
    featured: false,
    img: floratta,
    alt: 'Floratta Café',
    link: 'https://www.behance.net/gallery/234959563/Id-visual-Floratta-caf-bistro-(-portifolio)',
    linkLabel: 'Ver no Behance →',
    tag: 'Design',
    tagClass: 'tag-design',
    title: 'ID Visual — Floratta Café & Bistrô',
    desc: 'Estética casual, minimalista e artesanal para cafeteria moderna. Paleta, tipografia e aplicações completas.',
    tech: ['Branding', 'Illustrator'],
  },
  {
    id: 8,
    cat: 'design',
    featured: false,
    img: kellyAlves,
    alt: 'Kelly Alves',
    link: 'https://www.behance.net/gallery/234959227/Logo-ID-pessoal-ideias',
    linkLabel: 'Ver no Behance →',
    tag: 'Design',
    tagClass: 'tag-design',
    title: 'ID Pessoal — Kelly Alves',
    desc: 'Logo e identidade visual pessoal para portfólio de designer. Criatividade e clareza na apresentação profissional.',
    tech: ['Branding', 'Illustrator', 'Figma'],
  },
];

// Abas de filtro
const TABS = [
  { label: 'Todos', cat: 'todos' },
  { label: 'Dev', cat: 'dev' },
  { label: 'Design', cat: 'design' },
];

function Projetos() {
  // Estado do filtro ativo
  const [activeTab, setActiveTab] = useState('todos');

  // Filtra projetos conforme aba selecionada
  const filtered = PROJETOS.filter(
    (p) => activeTab === 'todos' || p.cat === activeTab
  );

  return (
    <section className="section projetos-section" id="projetos">
      <div className="section-inner">
        <span className="label">O que já construí</span>
        <h2>Projetos <span className="accent">em Destaque</span></h2>

        {/* Abas de filtro */}
        <div className="proj-tabs" role="tablist">
          {TABS.map(({ label, cat }) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeTab === cat}
              className={`proj-tab${activeTab === cat ? ' active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grade de projetos */}
        <div className="proj-grid">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              className={`proj-card${proj.featured ? ' featured' : ''}`}
            >
              {/* Imagem com overlay */}
              <div className="proj-img-wrap">
                <img src={proj.img} alt={proj.alt} />
                <div className="proj-overlay">
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link"
                  >
                    {proj.linkLabel}
                  </a>
                </div>
              </div>

              {/* Info do projeto */}
              <div className="proj-info">
                <span className={`proj-tag ${proj.tagClass}`}>{proj.tag}</span>
                <h3>{proj.title}</h3>
                <p>{proj.desc}</p>
                <div className="proj-tech">
                  {proj.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;
