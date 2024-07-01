/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1276FF",
        primaryHover: "#3B8EFF",
        background: "#F4F5FC",

        primaryBg: "#D6E7FF",
        secondaryBg: "#DCE2F0",
        tertiaryBg: "#ECF3FE",

        textPrimary: "#1B2D4F",
        yellow: "#FF8B00",

        borderPrimary: "#E9EAED",
      },
    },
  },
  plugins: [],
};
