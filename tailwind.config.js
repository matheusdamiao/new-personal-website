/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Title: ["Share Tech Mono", "monospace"],
        Source: ["Source Code Pro", "monospace"],
      },
      colors: {
        darkBlack: "#1D1D1D",
        lightBlack: "#27272A",
        white: "#D9D9D9",
        darkGray: "#52525B",
        lightGray: "#A1A1AA",
        lightOrange: "#CE8669",
        darkOrange: "#FF7038",
      },
    },
  },
  plugins: [],
};
