import { ArrowUpRight, MapPin } from 'lucide-react'
import { profile, stats } from '../data'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-avail">
            <span className="dot" />
            {profile.availability}
          </p>

          <h1>
            {profile.name}
            <br />
            <span className="hero-role">{profile.role}</span>
          </h1>

          <p className="hero-lede">
            Construyo aplicaciones web de extremo a extremo — desde el
            backend en PHP y Node.js hasta interfaces en React — cuidando
            tanto la estabilidad en producción como la experiencia de uso.
          </p>

          <div className="hero-meta">
            <MapPin size={16} />
            {profile.location}
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#experiencia">
              Ver experiencia
            </a>
            <a className="btn btn-secondary" href="#contacto">
              Contactar
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-avatar" aria-hidden="true">
            <img src='src\images\Perfil foto.PNG'></img>
          </div>
          <ul className="hero-stats">
            {stats.map((stat) => (
              <li key={stat.label}>
                <span className="hero-stat-value">{stat.value}</span>
                <span className="hero-stat-label">{stat.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        .hero {
          padding: 72px 0 96px;
        }
        .hero-inner {
          display: grid;
          grid-template-columns: 1.3fr 0.9fr;
          gap: 64px;
          align-items: center;
        }
        .hero-avail {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: var(--ink-soft);
          margin-bottom: 24px;
        }
        .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #3f8f5f;
        }
        .hero h1 {
          font-size: clamp(2.2rem, 4.2vw, 3.4rem);
          margin-bottom: 20px;
        }
        .hero-role {
          color: var(--accent);
        }
        .hero-lede {
          max-width: 46ch;
          color: var(--ink-soft);
          font-size: 1.05rem;
          margin-bottom: 24px;
        }
        .hero-meta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: var(--ink-faint);
          margin-bottom: 32px;
        }
        .hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }
        .hero-panel {
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 4px;
          padding: 32px;
        }
        .hero-avatar {
          width: 96px;
          height: 96px;
          border-radius: 4px;
          background: var(--accent);
          color: #fff;
          font-family: var(--serif);
          font-size: 1.6rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
        }
        .hero-stats {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .hero-stats li {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          padding-bottom: 18px;
          border-bottom: 1px solid var(--line);
        }
        .hero-stats li:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .hero-stat-value {
          font-family: var(--serif);
          font-size: 1.2rem;
          color: var(--ink);
        }
        .hero-stat-label {
          font-size: 0.85rem;
          color: var(--ink-faint);
        }
        @media (max-width: 860px) {
          .hero-inner {
            grid-template-columns: 1fr;
          }
          .hero-panel {
            order: -1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
          }
          .hero-avatar {
            margin-bottom: 0;
            flex-shrink: 0;
          }
          .hero-stats {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 20px;
          }
          .hero-stats li {
            border-bottom: none;
            padding-bottom: 0;
            flex-direction: column;
            align-items: flex-start;
            gap: 2px;
          }
        }
      `}</style>
    </section>
  )
}
