/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        koulen: ["Koulen", "cursive"],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
