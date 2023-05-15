/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./about.html",
    "./techstack.html",
    "./contact.html",
    "./works.html",
    "./script/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        barcode: ['"Libre Barcode 128 Text"'],
        garamond: ['"Cormorant Garamond"'],
        baskerville: ['"Libre Baskerville"'],
        poppins: ["Poppins"],
      },
      boxShadow: {
        "3xl": "0px 27px 60px -7px",
      },
      fontSize: {
        md: "1.09rem",
        brand: "1.4rem",
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.25s ease-in forwards",
      },
    },
  },
  plugins: [],
};
