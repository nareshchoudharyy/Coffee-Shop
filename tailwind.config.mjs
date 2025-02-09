/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-beige': '#F5E6CA',
        'charcoal': '#333333',
        'coffee': '#8B5E3C',
        'olive': '#A3B18A',
        'gold': '#D4A373',
        'espresso': '#3B2F2F',
        'cream': '#F5E6CA',
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      backgroundColor: {
        'primary': '#F5E6CA', // warm-beige
        'secondary': '#FFFFFF',
        'accent': '#8B5E3C', // coffee
      },
      textColor: {
        'primary': '#333333', // charcoal
        'secondary': '#8B5E3C', // coffee
        'accent': '#D4A373', // gold
      },
      borderColor: {
        'primary': '#A3B18A', // olive
        'secondary': '#8B5E3C', // coffee
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'steam-1': 'steam 2s ease-out infinite',
        'steam-2': 'steam 2s ease-out 0.5s infinite',
        'steam-3': 'steam 2s ease-out 1s infinite',
      },
      keyframes: {
        steam: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.5' },
          '100%': { transform: 'translateY(-10px) scale(1.5)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
