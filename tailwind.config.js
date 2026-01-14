/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Sora"', '"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#2c2c6c',
        accent: '#f43f5e',
        soft: '#f6f8ff',
        midnight: '#0f172a',
        ink: '#111827',
        mist: '#e5e7eb',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(120deg, rgba(44,44,108,0.9), rgba(244,63,94,0.8)), url('/assets/images/office.jpg')",
        'mesh-rose': 'radial-gradient(circle at 20% 20%, rgba(244,63,94,0.08), transparent 25%), radial-gradient(circle at 80% 0%, rgba(44,44,108,0.1), transparent 25%), radial-gradient(circle at 40% 80%, rgba(99,102,241,0.08), transparent 30%)',
        'mesh-indigo': 'radial-gradient(circle at 10% 20%, rgba(99,102,241,0.08), transparent 25%), radial-gradient(circle at 70% 10%, rgba(14,165,233,0.08), transparent 30%), radial-gradient(circle at 90% 90%, rgba(244,63,94,0.06), transparent 25%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.02)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

