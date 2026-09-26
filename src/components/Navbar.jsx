import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#skills', label: 'Skills' },
  { href: '#educacion', label: 'Educación' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-mark" aria-label="Ir al inicio">
          DG
        </a>

        <nav className="nav-links" aria-label="Navegación principal">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="nav-mobile" aria-label="Navegación móvil">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      )}

      <style>{`
        .nav {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(245, 246, 248, 0.9);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease;
        }
        .nav-scrolled {
          border-color: var(--line);
        }
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        .nav-mark {
          font-family: var(--serif);
          font-size: 1.15rem;
          font-weight: 600;
          color: var(--accent);
          border: 1px solid var(--accent);
          width: 40px;
          height: 40px;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nav-links {
          display: flex;
          gap: 32px;
          font-size: 0.92rem;
          color: var(--ink-soft);
        }
        .nav-links a:hover {
          color: var(--accent);
        }
        .nav-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--ink);
        }
        .nav-mobile {
          display: none;
        }
        @media (max-width: 800px) {
          .nav-links {
            display: none;
          }
          .nav-toggle {
            display: flex;
          }
          .nav-mobile {
            display: flex;
            flex-direction: column;
            padding: 8px 24px 24px;
            gap: 16px;
            border-top: 1px solid var(--line);
            background: var(--bg);
          }
        }
      `}</style>
    </header>
  )
}
