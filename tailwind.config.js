/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'primary': "#F7F6F0",
      'secondary': "#D4F176",
      'error': "#E63734",
      'white': "#FFFFFF",
      'black': "#24282C",
      'green': "#ABC379",
      'brown': "#473C33",
      'yellow': "#FEC868",
      'orange': "#FDA769",
      },
      
    },
  },
  plugins: [],
}
