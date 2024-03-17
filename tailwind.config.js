/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      'screen550': {'max': '550px'},
      'screen500': {'max': '500px'},
      'screen450': {'max': '450px'},
      'screen400': {'max': '400px'},

      // 'screen2': {'max': '700px'},
      // 'screen1': {'max': '500px'},
    },

  },
  plugins: [],
}

