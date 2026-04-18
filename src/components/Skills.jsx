// Skills.jsx — Seção de habilidades técnicas

// Dados das skills organizados por grupo
const SKILL_GROUPS = [
  {
    icon: '⚙️',
    title: 'Back-End',
    skills: [
      { label: 'Java', w: '75%' },
      { label: 'Spring Boot', w: '65%' },
      { label: 'MySQL / SQL', w: '60%' },
      { label: 'API REST', w: '50%' },
      { label: 'Arquitetura MVC', w: '45%' },
    ],
  },
  {
    icon: '🖥️',
    title: 'Front-End',
    skills: [
      { label: 'HTML5 / CSS3', w: '85%' },
      { label: 'JavaScript', w: '65%' },
      { label: 'Design Responsivo', w: '70%' },
      { label: 'Flexbox / CSS Grid', w: '55%' },
      { label: 'React (iniciante)', w: '40%' },
    ],
  },
  {
    icon: '🎨',
    title: 'Design',
    skills: [
      { label: 'Figma', w: '90%' },
      { label: 'Adobe Illustrator', w: '88%' },
      { label: 'Adobe Photoshop', w: '85%' },
      { label: 'Canva', w: '80%' },
      { label: 'Identidade Visual', w: '75%' },
    ],
  },
  {
    icon: '🛠️',
    title: 'Ferramentas',
    skills: [
      { label: 'Git / GitHub', w: '75%' },
      { label: 'Scrum / Kanban', w: '60%' },
      { label: 'Google Ads / Meta Ads', w: '70%' },
      { label: 'Excel Avançado', w: '80%' },
      { label: 'CRM (Facilita)', w: '65%' },
    ],
  },
];

function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="section-inner">
        <span className="label">O que eu domino</span>
        <h2>Stack <span className="accent">Técnica</span></h2>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <div className="skill-group" key={group.title}>
              <div className="skill-group-icon">{group.icon}</div>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill.label}>
                    {/* Barra de progresso via CSS custom property */}
                    <span className="skill-bar" style={{ '--w': skill.w }} />
                    {skill.label}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
