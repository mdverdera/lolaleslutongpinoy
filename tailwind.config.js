/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        softBlue: "hsl(231, 69%, 60%)",
        softRed: "hsl(0, 94%, 66%)",
        grayishBlue: "hsl(229, 8%, 60%)",
        veryDarkBlue: "hsl(229, 31%, 21%)",
        lightRed: "#FF6363",
        veryLightYellowGreen: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      backgroundImage: () => ({
        dots: "url(/img/bg-dots.svg)",
      }),
    },
  },
  plugins: [],
};
