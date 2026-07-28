/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#10161F',
        'ink-raised': '#161E2B',
        paper: '#EAE3D3',
        'paper-dim': '#C9C2B0',
        brass: '#C9A24B',
        'brass-dim': '#8E7333',
        sage: '#7C9885',
        'sage-dim': '#56705E',
        graphite: '#545F6B',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        serif: ['"Fraunces"', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        trace: {
          '0%': { strokeDashoffset: '1' },
          '100%': { strokeDashoffset: '0' },
        },
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        drift: 'drift 6s ease-in-out infinite',
        fadeUp: 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}
