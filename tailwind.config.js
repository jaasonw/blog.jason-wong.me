const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{liquid,njk,md}", "./src/**/*.svg"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        mono: ["Source Code Pro", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
