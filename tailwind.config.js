/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#040E22',
          900: '#071A3D', // Deep navy
          800: '#0B2859', // Dark blue
          700: '#0F377A',
          600: '#14469B',
        },
        electric: {
          DEFAULT: '#176BFF',
          hover: '#0A55E0',
          glow: 'rgba(23, 107, 255, 0.4)',
        },
        cyan: {
          DEFAULT: '#19C7E8',
          accent: '#19C7E8',
          glow: 'rgba(25, 199, 232, 0.4)',
        },
        gold: {
          DEFAULT: '#E9B949',
          light: '#F5CE68',
          glow: 'rgba(233, 185, 73, 0.4)',
        },
        light: {
          DEFAULT: '#F7FAFF',
          muted: '#C5D4EE',
          dim: '#8EA7CE',
        },
        darktext: '#10213F',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-reverse': 'float-reverse 7s ease-in-out infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-1.5deg)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 15px rgba(25, 199, 232, 0.4))' },
          '100%': { filter: 'drop-shadow(0 0 30px rgba(23, 107, 255, 0.7))' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(7, 26, 61, 0.37)',
        'glass-card': '0 10px 40px -10px rgba(0, 0, 0, 0.5), 0 0 20px 0 rgba(25, 199, 232, 0.1)',
        'glow-cyan': '0 0 25px -5px rgba(25, 199, 232, 0.3)',
        'glow-blue': '0 0 25px -5px rgba(23, 107, 255, 0.4)',
        'glow-gold': '0 0 25px -5px rgba(233, 185, 73, 0.3)',
      },
    },
  },
  plugins: [],
}
