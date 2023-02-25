/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/tw-elements/dist/js/**/*.js"],

  theme: {
    extend: {
      fontFamily: {
        koulen: ["Koulen", "cursive"],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide'),require("tw-elements/dist/plugin")],
};
