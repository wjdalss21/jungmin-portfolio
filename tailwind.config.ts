import type { Config } from 'tailwindcss'

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: token('bg'),
        surface: token('surface'),
        ink: token('ink'),
        'ink-soft': token('ink-soft'),
        muted: token('muted'),
        accent: token('accent'),
        'accent-ink': token('accent-ink'),
        mint: token('mint'),
        navy: token('navy'),
        line: token('line'),
        'on-navy': token('on-navy'),
      },
      fontFamily: {
        display: ['"Clash Display"', '"Pretendard Variable"', 'sans-serif'],
        sans: [
          '"Pretendard Variable"',
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif',
        ],
      },
      borderRadius: {
        card: '16px',
      },
      keyframes: {
        'tooltip-in': {
          from: { opacity: '0', transform: 'translateY(4px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
      },
      animation: {
        'tooltip-in': 'tooltip-in 180ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config
