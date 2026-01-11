/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'warm-beige': '#DDCDBE',
        'warm-dark': '#3D2F2F',
        'accent': '#A68B6F',
        'off-white': '#F9F5F1',
      },
      fontFamily: {
        'serif': ['DM Serif Display', 'serif'],
        'sans': ['IBM Plex Sans', 'sans-serif'],
        'handwritten': ['Reenie Beanie', 'cursive'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(166, 139, 111, 0.4)',
        'glow-lg': '0 0 50px rgba(166, 139, 111, 0.5)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}