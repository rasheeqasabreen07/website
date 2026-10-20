/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFDF9',
          100: '#FAF8F5',
          200: '#F5F0E8',
          300: '#ECE5D8',
        },
        forest: {
          800: '#234936',
          900: '#1B382B',
          950: '#12251D',
        },
        sage: {
          100: '#EBF1ED',
          200: '#D5E2D9',
          300: '#B0C8B6',
          500: '#7E9987',
          600: '#64826E',
          700: '#4D6B57',
        },
        beige: {
          50: '#FAF8F6',
          100: '#F4EFEB',
          200: '#EAE2D8',
          300: '#DDD2C3',
          400: '#C7B7A2',
        },
        gold: {
          400: '#D6B485',
          500: '#C5A880',
          600: '#AD8F65',
        },
        charcoal: {
          800: '#2B302D',
          900: '#1D211F',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(27, 56, 43, 0.08)',
        'card': '0 14px 35px -12px rgba(27, 56, 43, 0.12)',
        'elevated': '0 20px 40px -15px rgba(27, 56, 43, 0.16)',
      }
    },
  },
  plugins: [],
}
