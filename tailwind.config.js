/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "900px",
        1000: "1000px",
        1100: "1100px",
        1200: "1200px",
        1300: "1300px",
      },

      fontSize: {
        xs: "10px",
        sm: "12px",
        md: "14px",
        lg: "16px",
        xl: "18px",
        "1xl": "20px",
      },
    },
  },
  plugins: [],
};
