/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        main: "#e5e5dc",
        transparentBlack: "rgba(0, 0, 0, 0.7)",
      },
    },
    screens: {
      ss: "480px",
      sm: "600px",
      md: "768px",
      lg: "1099px",
    },
  },
  plugins: [require("daisyui")],
};
