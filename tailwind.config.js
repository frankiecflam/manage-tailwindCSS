/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "375px",
      desktop: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Be Vietnam Pro", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        darkBlue: {
          default: "hsl(228, 39%, 23%)",
          100: "hsl(233, 12%, 13%)",
        },
        grayBlue: "hsl(227, 12%, 61%)",
        paleRed: "hsl(13, 100%, 96%)",
        lightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
