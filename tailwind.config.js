/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: { max: "768px" },
        phone: { max: "480px" },
      },

      colors: {
        cyanLight: "#3cb4ac",
        cyanDark: "#147b74",
        grayLight: "#fafafa",
        grayDark: "#7a7a7a",
      },
    },
  },
  plugins: [],
};
