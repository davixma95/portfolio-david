import { skillGroups } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Competencias técnicas</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.label} className="skills-group">
              <h3>{group.label}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }
        .skills-group h3 {
          font-family: var(--sans);
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--ink-faint);
          margin-bottom: 16px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--line);
        }
        .skills-group ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .skills-group li {
          font-size: 0.98rem;
          color: var(--ink);
        }
        @media (max-width: 800px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 32px;
          }
        }
        @media (max-width: 480px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
