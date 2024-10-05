const COLORS = require("./src/constants/colors");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: COLORS.primary,
        light1: COLORS.light1,
        light2: COLORS.light2,
        light3: COLORS.light3,
        light4: COLORS.light4,
        black1: COLORS.black1,
      },
    },
  },
  plugins: [],
};
