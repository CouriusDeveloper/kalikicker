/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#205645',
        'primary-dark': '#174034',
        'primary-light': '#E4F2ED',
        accent: '#FFB347',
        bg: '#F9FBFA',
        text: '#1F2933',
        muted: '#6B7280',
      },
      fontFamily: {
        sans: ['"Inter", "Nunito", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif'],
      },
      boxShadow: {
        card: '0 10px 30px rgba(23, 64, 52, 0.08)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

