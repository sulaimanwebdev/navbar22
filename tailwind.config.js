module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'red': '#E30613',
      'blue': '#1900ff',
      'green': '#00ff3c',
      'grey': '#707070',
      'grey-light-fc': '#FCFCFC',
      'grey-light-f8': '#F8F8F8',
      'grey-light-6c': '#6C6C6C',
      'grey-light-f7': '#F7F7F7',
      'grey-light-b2': '#B2B2B2',
      'grey-dark': '#1D1D1D',
      'grey-dark-3f': '#3f3f3f',
      'grey-dark-7b': '#7b7b7b',
      'white': '#FFFFFF',
      'dark': '#030303',
      'dark-v2': '#191919',
      'dark-v3': '#171717'
    },
    boxShadow: {
      'card-img': '0px 0px 30px #000000',
      'button': '0px 0px 25px #000000'
    },
    fontFamily: {
      sans: ['Gotham', 'sans-serif'],
      serif: ['Times', 'serif'],
      gotham: 'Gotham',
      times: 'Times',
    },
  },
  plugins: [
  ],
}
