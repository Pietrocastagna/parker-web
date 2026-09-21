/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0B1220',
        teal: '#00C9A7',
        mark: '#F5C518',
        paper: '#F4F6F8',
        muted: '#5A6570',
        mint: '#00C9A7',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '14px',
        xl: '18px',
      },
      fontFamily: {
        display: ['Sora', 'Manrope', 'system-ui', 'sans-serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
