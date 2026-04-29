export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        /* ── Brand palette ── */
        brand: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        /* ── Violet accent ── */
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        /* ── Surface / ink ── */
        surface: {
          900: '#0f0f1a',
          800: '#141428',
          700: '#1a1a35',
          600: '#22223f',
          500: '#2d2d52',
        },
        ink: '#0f0f1a',
        /* ── Accent colours ── */
        rose:    '#f43f5e',
        emerald: '#10b981',
        amber:   '#f59e0b',
      },
      backgroundImage: {
        'gradient-brand':   'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #a855f7 100%)',
        'gradient-card':    'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)',
        'gradient-sidebar': 'linear-gradient(180deg, #0f0f1a 0%, #141428 60%, #1a1a35 100%)',
        'gradient-glow':    'radial-gradient(ellipse at top, rgba(99,102,241,0.18) 0%, transparent 70%)',
        'gradient-hero':    'linear-gradient(135deg, rgba(79,70,229,0.15) 0%, rgba(124,58,237,0.10) 50%, rgba(168,85,247,0.05) 100%)',
      },
      boxShadow: {
        soft:   '0 18px 60px rgba(15, 23, 42, 0.12)',
        card:   '0 4px 24px rgba(0,0,0,0.18), 0 1px 4px rgba(0,0,0,0.12)',
        glow:   '0 0 40px rgba(99,102,241,0.25)',
        'glow-sm': '0 0 20px rgba(99,102,241,0.18)',
        inner:  'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      borderColor: {
        glass: 'rgba(255,255,255,0.08)',
        'glass-md': 'rgba(255,255,255,0.12)',
      },
      animation: {
        'pulse-slow':  'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-in':     'fadeIn 0.3s ease-out',
        'slide-up':    'slideUp 0.35s ease-out',
      },
      keyframes: {
        fadeIn:  { from: { opacity: 0 }, to: { opacity: 1 } },
        slideUp: { from: { opacity: 0, transform: 'translateY(8px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      },
    }
  },
  plugins: []
};
