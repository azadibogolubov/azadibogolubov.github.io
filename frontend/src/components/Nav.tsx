import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const linkBase =
  'axis-label text-xs uppercase tracking-widest transition-colors duration-200'

const navLinks = [
  { to: '/mentoring', label: 'Mentoring', activeColor: 'text-brass', hoverColor: 'hover:text-brass' },
  { to: '/music', label: 'Music', activeColor: 'text-sage', hoverColor: 'hover:text-sage' },
  { to: '/testimonials', label: 'Testimonials', activeColor: 'text-paper', hoverColor: 'hover:text-paper' },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-graphite/30 bg-ink/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
            <circle cx="11" cy="11" r="9.5" fill="none" stroke="#C9A24B" strokeWidth="1" strokeDasharray="1 3.2" />
            <path
              d="M2 11 C 6 3, 9 19, 11 11 S 16 3, 20 11"
              fill="none"
              stroke="#7C9885"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
          <span className="font-display text-sm font-semibold tracking-tight text-paper">
            Degrees of Freedom
          </span>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${linkBase} ${isActive ? link.activeColor : `text-paper-dim ${link.hoverColor}`}`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="/career"
            className={`${linkBase} text-paper-dim hover:text-paper`}
            title="Opens the standalone resume &amp; cover letter page"
          >
            Career ↗
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#book"
            className="axis-label hidden rounded-full border border-brass/60 px-4 py-2 text-xs uppercase tracking-widest text-brass transition-colors hover:bg-brass hover:text-ink md:inline-block"
          >
            Book time
          </a>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav-panel"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-graphite/40 text-paper md:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {isOpen ? (
                <path
                  d="M3 3 L15 15 M15 3 L3 15"
                  stroke="#EAE3D3"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <line x1="2" y1="5" x2="16" y2="5" stroke="#EAE3D3" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="2" y1="9" x2="16" y2="9" stroke="#EAE3D3" strokeWidth="1.6" strokeLinecap="round" />
                  <line x1="2" y1="13" x2="16" y2="13" stroke="#EAE3D3" strokeWidth="1.6" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown panel */}
      {isOpen && (
        <div
          id="mobile-nav-panel"
          className="border-t border-graphite/30 bg-ink px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? link.activeColor : `text-paper-dim ${link.hoverColor}`}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="/career"
              onClick={() => setIsOpen(false)}
              className={`${linkBase} text-paper-dim hover:text-paper`}
            >
              Career ↗
            </a>
            <a
              href="#book"
              onClick={() => setIsOpen(false)}
              className="axis-label mt-2 inline-block w-fit rounded-full border border-brass/60 px-4 py-2 text-xs uppercase tracking-widest text-brass transition-colors hover:bg-brass hover:text-ink"
            >
              Book time
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
