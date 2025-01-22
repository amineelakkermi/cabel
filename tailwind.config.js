/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
       pink: '#FE0060',
       blue: '#00BFFE',
       grey: "rgb(219, 219, 225)",
       mauve: "#9584ff",
       mauveBg: "rgba(106, 83, 255, 0.15)",
       textMauve: "#5E45FF",
       textBlue: "rgb(88, 184, 255)",
       green: "rgb(82, 229, 138)",

       blue1: "#2f1e73",
       blueNavbar: '#27376a',
       blue2: "#4d73a8",
       blueTitle: "#37247b",
       blueText: "#27223a",
       grey1: "#e6e7e8",
      },
      
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};