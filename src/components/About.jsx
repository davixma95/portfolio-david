import { profile } from '../data'

export default function About() {
  return (
    <section id="sobre-mi" className="section">
      <div className="container about-inner">
        <div className="section-head">
          <h2>Sobre mí</h2>
        </div>
        <p className="about-text">{profile.bio}</p>
      </div>

      <style>{`
        .about-inner {
          max-width: 720px;
        }
        .about-text {
          font-family: var(--serif);
          font-size: 1.3rem;
          line-height: 1.55;
          color: var(--ink);
          white-space: pre-line;
        }
      `}</style>
    </section>
  )
}
