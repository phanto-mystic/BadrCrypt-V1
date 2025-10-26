/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.3s ease-out',
        'gradient-move': 'gradientMove 15s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        gradientMove: {
          '0%, 100%': { 
            'background-size': '200% 200%',
            'background-position': 'center'
          },
          '50%': { 
            'background-size': '180% 220%',
            'background-position': '80% 30%'
          },
        }
      },
      colors: {
        slate: {
          850: '#1e293b',
          950: '#0f172a',
        }
      }
    },
  },
  plugins: [],
}