import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Hecho con React</span>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--line);
        }
        .footer-inner {
          padding: 28px 24px;
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          color: var(--ink-faint);
        }
        @media (max-width: 480px) {
          .footer-inner {
            flex-direction: column;
            gap: 6px;
          }
        }
      `}</style>
    </footer>
  )
}
