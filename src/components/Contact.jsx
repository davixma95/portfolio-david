import { Mail, Phone, Github, Linkedin } from 'lucide-react'
import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contacto" className="section">
      <div className="container contact-inner">
        <div className="section-head">
          <h2>Hablemos</h2>
        </div>

        <p className="contact-lede">
          Estoy buscando activamente nuevas oportunidades como desarrollador
          web. Si mi perfil encaja con lo que buscas, escríbeme.
        </p>

        <div className="contact-grid">
          <a className="contact-item" href={`mailto:${profile.email}`}>
            <Mail size={18} />
            <span>{profile.email}</span>
          </a>
          <a className="contact-item" href={`tel:${profile.phone.replace(/\s+/g, '')}`}>
            <Phone size={18} />
            <span>{profile.phone}</span>
          </a>
          <a className="contact-item" href={profile.github} target="_blank" rel="noreferrer">
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a className="contact-item" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <style>{`
        .contact-inner {
          max-width: 720px;
        }
        .contact-lede {
          color: var(--ink-soft);
          font-size: 1.02rem;
          max-width: 52ch;
          margin-bottom: 40px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px 20px;
          border: 1px solid var(--line);
          border-radius: 4px;
          background: var(--surface);
          font-size: 0.95rem;
          color: var(--ink);
        }
        .contact-item:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        @media (max-width: 560px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  )
}
