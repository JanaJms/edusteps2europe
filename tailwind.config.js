/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // must include all your React files
  ],
  theme: {
    ringWidth: {
      DEFAULT: '0px'
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },

      colors: {
        "body-color": "#F9F8F6",
        "black-metal": "#2C2C2C",
        "orange": "#D66349",
        "light-orange": "#FFA063",
        "reddish-orange": "#FBE8DF",
        "white-smoke": "#F5F5F5",
        "green": "#5A6B5B",
        "pastel-green": "#72B476",
        "green-cyan": "#6CA78C",
        "blue": "#65899C",
        "grey-goose": "#C8CFD3"

      }
    },
  },
  plugins: [],
}

