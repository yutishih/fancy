/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#3854b0',
        'lightblue': '#00f9ff',
        'green': '#fa7758',
        'red': '#ed4649',
        'grey': '#ffe3e4',
        'lightskyblue':'#87cefa',
        'palegreen':'#98fb98',
        'brown': '#505050',
        'bronze': '#969696',
      },
    },
  },
  plugins: [],
}
