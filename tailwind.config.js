/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#3772FF",
        primaryWhite: "#FEFDFF",
        primaryViolet: "#DE59FF",
        primaryGray: "#E4E4E4",
        secondaryGray: "#F4F3F4",
      },
      fontFamily: {
        IRANYekan: ["IRANYekan"],
      },
      borderRadius: {
        blueButton: "64px",
        main: "32px",
        secondary: "24px",
      },
    },
  },
  plugins: [],
};
