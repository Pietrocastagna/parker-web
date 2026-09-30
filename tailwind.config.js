/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: '#00C9A7',
        'teal-dark': '#008F78',
        'teal-soft': '#E8FBF7',
        ink: '#0B1220',
        'ink-soft': '#243244',
        paper: '#F5F7F8',
        border: '#E6EAED',
        muted: '#5A6570',
        success: '#16A34A',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
        mint: '#00C9A7',
      },
      maxWidth: {
        site: '1320px',
        prose: '840px',
      },
      borderRadius: {
        card: '24px',
        hero: '36px',
        pill: '999px',
      },
      fontFamily: {
        display: ['var(--font-sora)', 'Sora', 'system-ui', 'sans-serif'],
        sans: ['var(--font-manrope)', 'Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 30px rgba(11, 18, 32, 0.06)',
        card: '0 4px 20px rgba(11, 18, 32, 0.04)',
      },
    },
  },
  plugins: [],
};
