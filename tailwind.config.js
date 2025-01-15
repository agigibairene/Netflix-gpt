/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "netflix-color": "#E50914",
      },
      backgroundImage: {
        "bgImage": 'url("/background-img.jpg")'
      }
    },
  },
  plugins: [],
}

