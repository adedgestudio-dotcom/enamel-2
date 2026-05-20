import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      colors: {
        navy: {
          50:  '#f0f4ff',
          100: '#dce6ff',
          200: '#c0d0f5',
          300: '#94aee8',
          400: '#6080d4',
          500: '#3d5db8',
          600: '#2c469a',
          700: '#1f3278',
          800: '#162558',
          900: '#1B2A4A',
          950: '#0d1829',
        },
        gold: {
          50:  '#fdfbf0',
          100: '#faf4d0',
          200: '#f5e89e',
          300: '#edd565',
          400: '#E2C97E',
          500: '#d4a832',
          600: '#b88520',
          700: '#8f6118',
          800: '#6b481a',
          900: '#573b1a',
        },
      },
      animation: {
        'fade-up':   'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-up-2': 'fadeUp 0.7s 0.15s cubic-bezier(0.16,1,0.3,1) both',
        'fade-up-3': 'fadeUp 0.7s 0.30s cubic-bezier(0.16,1,0.3,1) both',
        'fade-up-4': 'fadeUp 0.7s 0.45s cubic-bezier(0.16,1,0.3,1) both',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'wa-pulse': 'waPulse 2.5s ease infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        waPulse: {
          '0%,100%': { boxShadow: '0 8px 28px rgba(37,211,102,0.38)' },
          '50%':     { boxShadow: '0 8px 42px rgba(37,211,102,0.68)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #E2C97E, #d4a832)',
        'navy-gradient': 'linear-gradient(135deg, #1B2A4A, #0d1829)',
      },
    },
  },
  plugins: [],
}

export default config
