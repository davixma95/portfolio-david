import { GraduationCap } from 'lucide-react'
import { education } from '../data'

export default function Education() {
  return (
    <section id="educacion" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Formación académica</h2>
        </div>

        <div className="edu-list">
          {education.map((item) => (
            <div key={item.title} className="edu-item">
              <GraduationCap size={20} className="edu-icon" />
              <div>
                <h3>{item.title}</h3>
                <p>
                  {item.school} · {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .edu-list {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .edu-item {
          display: grid;
          grid-template-columns: 20px 1fr;
          gap: 18px;
          padding-bottom: 28px;
          border-bottom: 1px solid var(--line);
        }
        .edu-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }
        .edu-icon {
          color: var(--accent);
          margin-top: 3px;
        }
        .edu-item h3 {
          font-size: 1.05rem;
          margin-bottom: 6px;
        }
        .edu-item p {
          color: var(--ink-faint);
          font-size: 0.92rem;
        }
      `}</style>
    </section>
  )
}
