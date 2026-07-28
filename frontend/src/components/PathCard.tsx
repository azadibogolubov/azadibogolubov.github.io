import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface Props {
  to: string
  eyebrow: string
  title: string
  description: string
  accent: 'brass' | 'sage'
  icon: ReactNode
}

const accentMap = {
  brass: {
    border: 'hover:border-brass/60',
    text: 'text-brass',
    ring: 'group-hover:ring-brass/30',
  },
  sage: {
    border: 'hover:border-sage/60',
    text: 'text-sage',
    ring: 'group-hover:ring-sage/30',
  },
}

export default function PathCard({ to, eyebrow, title, description, accent, icon }: Props) {
  const a = accentMap[accent]
  return (
    <Link
      to={to}
      className={`group relative flex flex-col justify-between rounded-2xl border border-graphite/40 bg-ink-raised/60 p-8 transition-all duration-300 ${a.border} hover:-translate-y-1`}
    >
      <div>
        <div className={`mb-6 flex h-11 w-11 items-center justify-center rounded-full ring-1 ring-graphite/40 transition-all ${a.ring}`}>
          {icon}
        </div>
        <p className={`axis-label text-xs uppercase tracking-widest ${a.text}`}>{eyebrow}</p>
        <h3 className="mt-3 font-display text-2xl font-semibold text-paper">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-paper-dim">{description}</p>
      </div>
      <span className={`mt-8 inline-flex items-center gap-2 text-sm font-medium ${a.text}`}>
        Explore
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  )
}
