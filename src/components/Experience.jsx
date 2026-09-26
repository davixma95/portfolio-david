import { experience } from '../data'

export default function Experience() {
  return (
    <section id="experiencia" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Experiencia</h2>
        </div>

        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.company} className="timeline-item">
              <div className="timeline-rail">
                <span className={`timeline-dot ${job.current ? 'is-current' : ''}`} />
                <span className="timeline-line" />
              </div>

              <div className="timeline-content">
                <div className="timeline-heading">
                  <h3>{job.role}</h3>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <p className="timeline-company">{job.company}</p>
                <ul className="timeline-points">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .timeline {
          display: flex;
          flex-direction: column;
        }
        .timeline-item {
          display: grid;
          grid-template-columns: 24px 1fr;
          gap: 24px;
        }
        .timeline-rail {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .timeline-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--ink-faint);
          margin-top: 8px;
          flex-shrink: 0;
        }
        .timeline-dot.is-current {
          background: var(--accent);
          box-shadow: 0 0 0 4px var(--accent-soft);
        }
        .timeline-line {
          flex: 1;
          width: 1px;
          background: var(--line);
          margin: 6px 0;
        }
        .timeline-item:last-child .timeline-line {
          display: none;
        }
        .timeline-content {
          padding-bottom: 44px;
        }
        .timeline-item:last-child .timeline-content {
          padding-bottom: 0;
        }
        .timeline-heading {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .timeline-heading h3 {
          font-size: 1.2rem;
        }
        .timeline-period {
          font-size: 0.85rem;
          color: var(--ink-faint);
          white-space: nowrap;
        }
        .timeline-company {
          color: var(--gold);
          font-size: 0.92rem;
          font-weight: 500;
          margin: 4px 0 14px;
        }
        .timeline-points {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .timeline-points li {
          position: relative;
          padding-left: 18px;
          color: var(--ink-soft);
          font-size: 0.95rem;
        }
        .timeline-points li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.6em;
          width: 5px;
          height: 5px;
          background: var(--ink-faint);
          border-radius: 50%;
        }
      `}</style>
    </section>
  )
}
