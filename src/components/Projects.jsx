import { Github, ExternalLink } from 'lucide-react'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Proyectos</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-stack">
                {project.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div className="project-links">
                <a href={project.repo || '#'} aria-label={`Repositorio de ${project.title}`}>
                  <Github size={16} />
                  Código
                </a>
                <a href={project.demo || '#'} aria-label={`Demo de ${project.title}`}>
                  <ExternalLink size={16} />
                  Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .projects-note {
          font-size: 0.88rem;
          color: var(--ink-faint);
          margin-bottom: 32px;
        }
        .projects-note code {
          background: var(--accent-soft);
          padding: 2px 6px;
          border-radius: 3px;
          color: var(--accent);
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .project-card {
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 4px;
          padding: 28px;
          display: flex;
          flex-direction: column;
        }
        .project-card h3 {
          font-size: 1.05rem;
          margin-bottom: 10px;
        }
        .project-card p {
          color: var(--ink-soft);
          font-size: 0.92rem;
          margin-bottom: 20px;
          flex: 1;
        }
        .project-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        .project-stack li {
          font-size: 0.75rem;
          color: var(--ink-faint);
          border: 1px solid var(--line);
          padding: 3px 9px;
          border-radius: 3px;
        }
        .project-links {
          display: flex;
          gap: 18px;
          padding-top: 16px;
          border-top: 1px solid var(--line);
        }
        .project-links a {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--ink-soft);
        }
        .project-links a:hover {
          color: var(--accent);
        }
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
