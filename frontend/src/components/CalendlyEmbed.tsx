import { useEffect, useRef, useState } from 'react'

interface Props {
  /** e.g. "https://calendly.com/your-handle/30min" */
  calendlyUrl?: string
}

/**
 * Drop-in Calendly widget.
 *
 * To activate:
 *   1. Set VITE_CALENDLY_URL in a .env file, or pass calendlyUrl directly.
 *   2. That's it — this component loads Calendly's inline-widget script and
 *      mounts the scheduler in place of the placeholder below.
 */
export default function CalendlyEmbed({ calendlyUrl }: Props) {
  const url = calendlyUrl ?? import.meta.env.VITE_CALENDLY_URL
  const containerRef = useRef<HTMLDivElement>(null)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    if (!url) return
    const existing = document.querySelector('script[data-calendly]')
    if (existing) {
      setScriptLoaded(true)
      return
    }
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.dataset.calendly = 'true'
    script.onload = () => setScriptLoaded(true)
    document.body.appendChild(script)
  }, [url])

  if (!url) {
    return (
      <div className="rounded-2xl border border-dashed border-brass/40 bg-ink-raised/40 p-10 text-center">
        <p className="axis-label text-xs uppercase tracking-widest text-brass">Scheduling — not yet connected</p>
        <p className="mx-auto mt-3 max-w-md text-sm text-paper-dim">
          Set <code className="rounded bg-ink px-1.5 py-0.5 text-xs text-paper">VITE_CALENDLY_URL</code> to your
          Calendly link and this space becomes a live booking widget.
        </p>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget overflow-hidden rounded-2xl border border-graphite/30"
      data-url={url}
      style={{ minWidth: '280px', height: '700px' }}
    >
      {!scriptLoaded && (
        <div className="flex h-full items-center justify-center text-sm text-paper-dim">
          Loading scheduler…
        </div>
      )}
    </div>
  )
}
