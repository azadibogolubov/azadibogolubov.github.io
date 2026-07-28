import type { Testimonial } from '../data/testimonials'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const accent = testimonial.context === 'mentoring' ? 'text-brass' : 'text-sage'
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-graphite/30 bg-ink-raised/50 p-7">
      <blockquote className="font-serif text-lg italic leading-relaxed text-paper">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-paper">{testimonial.name}</p>
          <p className="text-xs text-paper-dim">{testimonial.role}</p>
        </div>
        {testimonial.linkedinUrl ? (
          <a
            href={testimonial.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className={`axis-label text-[10px] uppercase tracking-widest ${accent} hover:underline`}
          >
            LinkedIn ↗
          </a>
        ) : (
          <span className={`axis-label text-[10px] uppercase tracking-widest ${accent} opacity-60`}>
            LinkedIn
          </span>
        )}
      </figcaption>
    </figure>
  )
}
