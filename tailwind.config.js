/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#3854b0',
        'green': '#fa7758',
        'red': '#ed4649',
        'grey': '#ffe3e4',
      },
    },
  },
  plugins: [],
}
