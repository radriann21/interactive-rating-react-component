/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          'orange': 'hsl(25, 97%, 53%)'
        },
        neutral: {
          'light-grey': 'hsl(217, 12%, 63%)',
          'dark-blue': 'hsl(213, 19%, 18%)',
          'very-dark-blue': 'hsl(216, 12%, 8%)'
        }
      },
      fontFamily: {
        'global': ['Overpass', 'sans-serif']
      }
    },
  },
  plugins: [],
}
