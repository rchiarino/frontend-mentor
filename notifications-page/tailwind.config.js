/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      xl: "1440px",
    },
    colors: {
      primaryRed: "hsl(1, 90%, 64%)",
      primaryBlue: "hsl(219, 85%, 26%)",
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      veryLightGrayBlue: "hsl(210, 60%, 98%)",
      lightGrayishBlue1: "hsl(211, 68%, 94%)",
      lightGrayishBlue2: "hsl(205, 33%, 90%)",
      grayishBlue: "hsl(219, 14%, 63%)",
      darkGrayishBlue: "hsl(219, 12%, 42%)",
      veryDarkBlue: "hsl(224, 21%, 14%)",
    },
  },
  plugins: [],
};
