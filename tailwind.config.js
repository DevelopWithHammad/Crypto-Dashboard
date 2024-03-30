/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "ubuntu": "ubuntu"
      },
      colors: {
        primary: "#5f00d9"
      },
      letterSpacing: {
        "wide": "0.060em"
      }
    },
  },
  plugins: [],
};