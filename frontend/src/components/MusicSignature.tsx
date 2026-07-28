import { useId } from 'react'

interface Props {
  className?: string
  size?: number
}

/**
 * Music page signature graphic: a center waveform of varying amplitude,
 * surrounded by softly pulsing dashed resonance rings — a single tone
 * rippling outward. Replaces the Lissajous oscillator on this page only;
 * Home and Mentoring keep SignatureOscillator.
 */
export default function MusicSignature({ className = '', size = 420 }: Props) {
  const uid = useId().replace(/:/g, '')
  const glowId = `dof-glow-${uid}`

  return (
    <svg
      viewBox="0 0 800 800"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label="Animated sound waveform with concentric resonance rings, representing a single tone rippling outward"
    >
      <title>Degrees of Freedom — Music Signature</title>
      <desc>
        A center waveform of varying amplitude, surrounded by softly pulsing dashed
        resonance rings — visualizing a single sustained tone rippling outward.
      </desc>

      <defs>
        <radialGradient id={glowId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#7C9885" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#7C9885" stopOpacity="0" />
        </radialGradient>
      </defs>

      <style>{`
        .dof-ring {
          fill: none;
          stroke: #C9A24B;
          stroke-opacity: 0.35;
          stroke-dasharray: 1.5 7;
          transform-origin: 400px 400px;
          animation: dof-pulse 7s ease-in-out infinite;
        }
        .dof-ring--r2 { animation-delay: -1.6s; }
        .dof-ring--r3 { animation-delay: -3.2s; }
        .dof-ring--r4 { animation-delay: -4.8s; }

        .dof-bar {
          fill: #7C9885;
          transform-box: fill-box;
          transform-origin: center;
          animation: dof-breathe 3.6s ease-in-out infinite;
        }

        .dof-centerline {
          stroke: #EAE3D3;
          stroke-opacity: 0.5;
          stroke-width: 1.5;
        }

        @keyframes dof-pulse {
          0%, 100% { transform: scale(0.985); opacity: 0.55; }
          50% { transform: scale(1.015); opacity: 0.95; }
        }

        @keyframes dof-breathe {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.08); }
        }

        @media (prefers-reduced-motion: reduce) {
          .dof-ring, .dof-bar { animation: none; }
        }
      `}</style>

      <circle cx={400} cy={400} r={360} fill={`url(#${glowId})`} />

      <circle className="dof-ring" r={150} cx={400} cy={400} />
      <circle className="dof-ring dof-ring--r2" r={210} cx={400} cy={400} />
      <circle className="dof-ring dof-ring--r3" r={270} cx={400} cy={400} />
      <circle className="dof-ring dof-ring--r4" r={330} cx={400} cy={400} />

      <line className="dof-centerline" x1={80} y1={400} x2={720} y2={400} />

      <g>
          <rect key="bar-0" className="dof-bar" x={80.00} y={397.00} width={5.00} height={6.00} rx={2.50} style={{ animationDelay: '0.00s' }} />
          <rect key="bar-1" className="dof-bar" x={90.00} y={381.12} width={5.00} height={37.76} rx={2.50} style={{ animationDelay: '0.09s' }} />
          <rect key="bar-2" className="dof-bar" x={100.00} y={376.70} width={5.00} height={46.61} rx={2.50} style={{ animationDelay: '0.18s' }} />
          <rect key="bar-3" className="dof-bar" x={110.00} y={383.61} width={5.00} height={32.78} rx={2.50} style={{ animationDelay: '0.27s' }} />
          <rect key="bar-4" className="dof-bar" x={120.00} y={392.59} width={5.00} height={14.82} rx={2.50} style={{ animationDelay: '0.36s' }} />
          <rect key="bar-5" className="dof-bar" x={130.00} y={391.54} width={5.00} height={16.92} rx={2.50} style={{ animationDelay: '0.45s' }} />
          <rect key="bar-6" className="dof-bar" x={140.00} y={377.56} width={5.00} height={44.87} rx={2.50} style={{ animationDelay: '0.54s' }} />
          <rect key="bar-7" className="dof-bar" x={150.00} y={360.82} width={5.00} height={78.35} rx={2.50} style={{ animationDelay: '0.63s' }} />
          <rect key="bar-8" className="dof-bar" x={160.00} y={355.48} width={5.00} height={89.04} rx={2.50} style={{ animationDelay: '0.72s' }} />
          <rect key="bar-9" className="dof-bar" x={170.00} y={366.61} width={5.00} height={66.78} rx={2.50} style={{ animationDelay: '0.81s' }} />
          <rect key="bar-10" className="dof-bar" x={180.00} y={386.53} width={5.00} height={26.94} rx={2.50} style={{ animationDelay: '0.90s' }} />
          <rect key="bar-11" className="dof-bar" x={190.00} y={395.62} width={5.00} height={8.75} rx={2.50} style={{ animationDelay: '0.99s' }} />
          <rect key="bar-12" className="dof-bar" x={200.00} y={381.41} width={5.00} height={37.19} rx={2.50} style={{ animationDelay: '0.00s' }} />
          <rect key="bar-13" className="dof-bar" x={210.00} y={361.75} width={5.00} height={76.51} rx={2.50} style={{ animationDelay: '0.09s' }} />
          <rect key="bar-14" className="dof-bar" x={220.00} y={329.25} width={5.00} height={141.50} rx={2.50} style={{ animationDelay: '0.18s' }} />
          <rect key="bar-15" className="dof-bar" x={230.00} y={291.49} width={5.00} height={217.02} rx={2.50} style={{ animationDelay: '0.27s' }} />
          <rect key="bar-16" className="dof-bar" x={240.00} y={270.00} width={5.00} height={260.00} rx={2.50} style={{ animationDelay: '0.36s' }} />
          <rect key="bar-17" className="dof-bar" x={250.00} y={283.31} width={5.00} height={233.39} rx={2.50} style={{ animationDelay: '0.45s' }} />
          <rect key="bar-18" className="dof-bar" x={260.00} y={329.17} width={5.00} height={141.65} rx={2.50} style={{ animationDelay: '0.54s' }} />
          <rect key="bar-19" className="dof-bar" x={270.00} y={383.71} width={5.00} height={32.57} rx={2.50} style={{ animationDelay: '0.63s' }} />
          <rect key="bar-20" className="dof-bar" x={280.00} y={380.25} width={5.00} height={39.50} rx={2.50} style={{ animationDelay: '0.72s' }} />
          <rect key="bar-21" className="dof-bar" x={290.00} y={371.90} width={5.00} height={56.20} rx={2.50} style={{ animationDelay: '0.81s' }} />
          <rect key="bar-22" className="dof-bar" x={300.00} y={377.79} width={5.00} height={44.41} rx={2.50} style={{ animationDelay: '0.90s' }} />
          <rect key="bar-23" className="dof-bar" x={310.00} y={377.61} width={5.00} height={44.77} rx={2.50} style={{ animationDelay: '0.99s' }} />
          <rect key="bar-24" className="dof-bar" x={320.00} y={364.39} width={5.00} height={71.23} rx={2.50} style={{ animationDelay: '0.00s' }} />
          <rect key="bar-25" className="dof-bar" x={330.00} y={349.20} width={5.00} height={101.60} rx={2.50} style={{ animationDelay: '0.09s' }} />
          <rect key="bar-26" className="dof-bar" x={340.00} y={346.49} width={5.00} height={107.02} rx={2.50} style={{ animationDelay: '0.18s' }} />
          <rect key="bar-27" className="dof-bar" x={350.00} y={355.77} width={5.00} height={88.46} rx={2.50} style={{ animationDelay: '0.27s' }} />
          <rect key="bar-28" className="dof-bar" x={360.00} y={359.63} width={5.00} height={80.74} rx={2.50} style={{ animationDelay: '0.36s' }} />
          <rect key="bar-29" className="dof-bar" x={370.00} y={341.31} width={5.00} height={117.39} rx={2.50} style={{ animationDelay: '0.45s' }} />
          <rect key="bar-30" className="dof-bar" x={380.00} y={304.70} width={5.00} height={190.60} rx={2.50} style={{ animationDelay: '0.54s' }} />
          <rect key="bar-31" className="dof-bar" x={390.00} y={276.00} width={5.00} height={247.99} rx={2.50} style={{ animationDelay: '0.63s' }} />
          <rect key="bar-32" className="dof-bar" x={400.00} y={283.36} width={5.00} height={233.27} rx={2.50} style={{ animationDelay: '0.72s' }} />
          <rect key="bar-33" className="dof-bar" x={410.00} y={332.66} width={5.00} height={134.68} rx={2.50} style={{ animationDelay: '0.81s' }} />
          <rect key="bar-34" className="dof-bar" x={420.00} y={397.00} width={5.00} height={6.00} rx={2.50} style={{ animationDelay: '0.90s' }} />
          <rect key="bar-35" className="dof-bar" x={430.00} y={340.87} width={5.00} height={118.25} rx={2.50} style={{ animationDelay: '0.99s' }} />
          <rect key="bar-36" className="dof-bar" x={440.00} y={312.18} width={5.00} height={175.63} rx={2.50} style={{ animationDelay: '0.00s' }} />
          <rect key="bar-37" className="dof-bar" x={450.00} y={304.82} width={5.00} height={190.36} rx={2.50} style={{ animationDelay: '0.09s' }} />
          <rect key="bar-38" className="dof-bar" x={460.00} y={301.28} width={5.00} height={197.43} rx={2.50} style={{ animationDelay: '0.18s' }} />
          <rect key="bar-39" className="dof-bar" x={470.00} y={294.71} width={5.00} height={210.57} rx={2.50} style={{ animationDelay: '0.27s' }} />
          <rect key="bar-40" className="dof-bar" x={480.00} y={295.48} width={5.00} height={209.04} rx={2.50} style={{ animationDelay: '0.36s' }} />
          <rect key="bar-41" className="dof-bar" x={490.00} y={317.53} width={5.00} height={164.93} rx={2.50} style={{ animationDelay: '0.45s' }} />
          <rect key="bar-42" className="dof-bar" x={500.00} y={359.41} width={5.00} height={81.17} rx={2.50} style={{ animationDelay: '0.54s' }} />
          <rect key="bar-43" className="dof-bar" x={510.00} y={397.00} width={5.00} height={6.00} rx={2.50} style={{ animationDelay: '0.63s' }} />
          <rect key="bar-44" className="dof-bar" x={520.00} y={383.43} width={5.00} height={33.13} rx={2.50} style={{ animationDelay: '0.72s' }} />
          <rect key="bar-45" className="dof-bar" x={530.00} y={397.00} width={5.00} height={6.00} rx={2.50} style={{ animationDelay: '0.81s' }} />
          <rect key="bar-46" className="dof-bar" x={540.00} y={377.92} width={5.00} height={44.15} rx={2.50} style={{ animationDelay: '0.90s' }} />
          <rect key="bar-47" className="dof-bar" x={550.00} y={368.71} width={5.00} height={62.58} rx={2.50} style={{ animationDelay: '0.99s' }} />
          <rect key="bar-48" className="dof-bar" x={560.00} y={387.76} width={5.00} height={24.49} rx={2.50} style={{ animationDelay: '0.00s' }} />
          <rect key="bar-49" className="dof-bar" x={570.00} y={375.48} width={5.00} height={49.04} rx={2.50} style={{ animationDelay: '0.09s' }} />
          <rect key="bar-50" className="dof-bar" x={580.00} y={342.75} width={5.00} height={114.49} rx={2.50} style={{ animationDelay: '0.18s' }} />
          <rect key="bar-51" className="dof-bar" x={590.00} y={327.50} width={5.00} height={144.99} rx={2.50} style={{ animationDelay: '0.27s' }} />
          <rect key="bar-52" className="dof-bar" x={600.00} y={326.29} width={5.00} height={147.42} rx={2.50} style={{ animationDelay: '0.36s' }} />
          <rect key="bar-53" className="dof-bar" x={610.00} y={327.62} width={5.00} height={144.75} rx={2.50} style={{ animationDelay: '0.45s' }} />
          <rect key="bar-54" className="dof-bar" x={620.00} y={326.96} width={5.00} height={146.09} rx={2.50} style={{ animationDelay: '0.54s' }} />
          <rect key="bar-55" className="dof-bar" x={630.00} y={331.73} width={5.00} height={136.54} rx={2.50} style={{ animationDelay: '0.63s' }} />
          <rect key="bar-56" className="dof-bar" x={640.00} y={351.84} width={5.00} height={96.32} rx={2.50} style={{ animationDelay: '0.72s' }} />
          <rect key="bar-57" className="dof-bar" x={650.00} y={386.47} width={5.00} height={27.06} rx={2.50} style={{ animationDelay: '0.81s' }} />
          <rect key="bar-58" className="dof-bar" x={660.00} y={378.46} width={5.00} height={43.09} rx={2.50} style={{ animationDelay: '0.90s' }} />
          <rect key="bar-59" className="dof-bar" x={670.00} y={359.22} width={5.00} height={81.55} rx={2.50} style={{ animationDelay: '0.99s' }} />
          <rect key="bar-60" className="dof-bar" x={680.00} y={360.87} width={5.00} height={78.25} rx={2.50} style={{ animationDelay: '0.00s' }} />
          <rect key="bar-61" className="dof-bar" x={690.00} y={374.46} width={5.00} height={51.08} rx={2.50} style={{ animationDelay: '0.09s' }} />
          <rect key="bar-62" className="dof-bar" x={700.00} y={386.91} width={5.00} height={26.18} rx={2.50} style={{ animationDelay: '0.18s' }} />
          <rect key="bar-63" className="dof-bar" x={710.00} y={392.91} width={5.00} height={14.18} rx={2.50} style={{ animationDelay: '0.27s' }} />
      </g>
    </svg>
  )
}
