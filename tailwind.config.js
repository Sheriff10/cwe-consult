/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#1a1a1a",
        lightGray: "#e5e5e5",
      },
      colors: {
        primary: "#a13523",
        accent: "#5c241c",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        SuprapowerSE: ["SuprapowerSE", "sans-serif"],
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
      },
      lineHeight: {
        "5xl": "2.75rem",
        "6xl": "3rem",
      },
    },
  },
  variants: {},
  plugins: [],
};
