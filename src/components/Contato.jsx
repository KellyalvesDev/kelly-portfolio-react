// Contato.jsx — Formulário de contato controlado com React
import { useState } from 'react';

function Contato() {
  // Estado controlado do formulário
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Envia via mailto (igual ao original)
  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, email, mensagem } = form;
    const mailto =
      `mailto:kellytalvesp@gmail.com` +
      `?subject=${encodeURIComponent(`Contato via site - ${nome}`)}` +
      `&body=${encodeURIComponent(`De: ${nome}\nE-mail: ${email}\n\n${mensagem}`)}`;
    window.location.href = mailto;
  };

  return (
    <section className="section contato-section" id="contato">
      <div className="section-inner contato-inner">

        {/* Lado esquerdo — texto e links */}
        <div className="contato-text">
          <span className="label">Bora conversar?</span>
          <h2>Entre em <span className="accent">Contato</span></h2>
          <p>
            Estou aberta a oportunidades de emprego, freelas e colaborações.
            Se quiser bater um papo sobre tecnologia, design ou projetos,
            me manda uma mensagem!
          </p>
          <div className="contato-links">
            <a href="mailto:kellytalvesp@gmail.com">
              📧 kellytalvesp@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/kelly-tauane-alves-pitaluga"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 LinkedIn
            </a>
            <a
              href="https://github.com/kellyalvesDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 GitHub
            </a>
            <a
              href="https://www.behance.net/Kellypitalugaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              🎨 Behance
            </a>
          </div>
        </div>

        {/* Formulário controlado */}
        <form className="contato-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              name="nome"
              type="text"
              placeholder="Seu nome completo"
              value={form.nome}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="seu@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensagem">Mensagem</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="5"
              placeholder="Conta mais sobre o projeto ou oportunidade..."
              value={form.mensagem}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-primary">
            Enviar mensagem ✉️
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contato;
