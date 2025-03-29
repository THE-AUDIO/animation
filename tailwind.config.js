/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'peche':'#CC6B49',
        'pomme':'#A67C00',
        'fraise':'#E63946',
        'poire':'#6A7B3B',
        'primary':'#0A0A0A',
        'secondary':'#808080'
      }
    },
  },
  plugins: [],
}