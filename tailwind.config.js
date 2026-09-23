/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#244A91', // Standardized brand color for DATAINSIGHT 2027 and section headings
          'on-dark': '#8AB4FF', // High-contrast brand color for dark backgrounds (footer)
        },
        primary: {
          DEFAULT: '#0B2D6B', // Deep professional blue
          dark: '#08204D',
          light: '#0E3B8C',
        },
        secondary: {
          DEFAULT: '#174EA6', // Medium blue
          light: '#2563EB',
        },
        bodytext: {
          DEFAULT: '#1A2B4A', // Dark navy-blue
          muted: '#4A5E82',
          subtle: '#6B7E9E',
        },
        royal: {
          DEFAULT: '#176BFF', // Royal Blue
          hover: '#0A55E0',
          light: '#EBF2FF',
          glow: 'rgba(23, 107, 255, 0.25)',
        },
        electric: {
          DEFAULT: '#176BFF',
          hover: '#0A55E0',
          glow: 'rgba(23, 107, 255, 0.25)',
        },
        cyan: {
          DEFAULT: '#00A8E8', // Cyan
          accent: '#00A8E8',
          light: '#E6F7FD',
          glow: 'rgba(0, 168, 232, 0.25)',
        },
        gold: {
          DEFAULT: '#D9A441', // Gold
          light: '#F5CE68',
          glow: 'rgba(217, 164, 65, 0.25)',
        },
        bg: {
          white: '#FFFFFF',
          alt: '#F5F9FF', // Very light blue for alternating sections
          subtle: '#EDF4FC',
        },
        navy: {
          950: '#040E22',
          900: '#071A3D', // Footer deep navy
          800: '#0B2859',
          700: '#0F377A',
          600: '#14469B',
        },
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],    // 11px
        'xs': ['0.75rem', { lineHeight: '1.25rem' }],     // 12px
        'sm': ['0.875rem', { lineHeight: '1.4rem' }],     // 14px
        'base': ['1rem', { lineHeight: '1.6rem' }],       // 16px
        'lg': ['1.125rem', { lineHeight: '1.65rem' }],    // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],     // 20px
        '2xl': ['1.5rem', { lineHeight: '1.9rem' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],   // 30px
        '4xl': ['2.25rem', { lineHeight: '2.65rem' }],    // 36px
        '5xl': ['3rem', { lineHeight: '1.15' }],          // 48px
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
