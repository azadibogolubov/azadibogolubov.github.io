import { useEffect, useRef } from 'react'

interface Props {
  className?: string
  /** Frequency ratio pair, e.g. [3, 2] — two independent oscillators (two degrees of freedom) */
  ratio?: [number, number]
  strokeColor?: string
  size?: number
}

/**
 * Two independent oscillators (x-axis and y-axis, each its own "degree of freedom")
 * traced together produce a single curve — a Lissajous figure. It's the literal
 * visual thesis of the site: independent parameters, combined, become one system.
 */
export default function SignatureOscillator({
  className = '',
  ratio = [3, 2],
  strokeColor = '#C9A24B',
  size = 420,
}: Props) {
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const el = pathRef.current
    if (!el) return
    const length = el.getTotalLength()
    el.style.strokeDasharray = `${length}`
    el.style.strokeDashoffset = `${length}`
    el.getBoundingClientRect() // force reflow
    el.style.transition = 'stroke-dashoffset 2.8s cubic-bezier(0.16, 1, 0.3, 1)'
    el.style.strokeDashoffset = '0'
  }, [ratio])

  const points: string[] = []
  const steps = 400
  const [a, b] = ratio
  const pad = 24
  const r = size / 2 - pad
  const cx = size / 2
  const cy = size / 2
  const delta = Math.PI / 2

  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2
    const x = cx + r * Math.sin(a * t + delta)
    const y = cy + r * Math.sin(b * t)
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`)
  }

  const d = `M ${points.join(' L ')}`

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      role="img"
      aria-label={`Lissajous curve, frequency ratio ${a} to ${b}, representing independent parameters combined into one system`}
    >
      <circle
        cx={cx}
        cy={cy}
        r={r}
        fill="none"
        stroke="#545F6B"
        strokeOpacity={0.25}
        strokeWidth={1}
        strokeDasharray="2 6"
      />
      <path
        ref={pathRef}
        d={d}
        fill="none"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
