/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#00C9A7',
        'brand-deep': '#007F6D',
        'brand-ink': '#052F2A',
        'brand-mist': '#E7FAF6',
        ink: '#07131F',
        'ink-2': '#132434',
        graphite: '#0C171C',
        paper: '#F4F6F4',
        'warm-paper': '#F7F4EE',
        line: 'rgba(7,19,31,0.10)',
        amber: '#F6B64A',
        success: '#22A66F',
        danger: '#E5574F',
        muted: '#5A6570',
        // aliases used in older components during transition
        teal: '#00C9A7',
        'teal-dark': '#007F6D',
        'teal-soft': '#E7FAF6',
        border: 'rgba(7,19,31,0.10)',
        mint: '#00C9A7',
      },
      maxWidth: {
        site: '1320px',
        canvas: '1440px',
        prose: '720px',
      },
      borderRadius: {
        card: '24px',
        stage: '36px',
        pill: '999px',
        float: '22px',
      },
      fontFamily: {
        display: ['var(--font-sora)', 'Sora', 'system-ui', 'sans-serif'],
        sans: ['var(--font-manrope)', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      boxShadow: {
        soft: '0 12px 40px rgba(7, 19, 31, 0.08)',
        float: '0 8px 32px rgba(7, 19, 31, 0.10)',
        device: '0 24px 80px rgba(7, 19, 31, 0.35)',
      },
      spacing: {
        section: '5.5rem',
        'section-lg': '7rem',
      },
    },
  },
  plugins: [],
};
