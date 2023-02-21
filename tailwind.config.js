/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        neutral:{
          darkModeElement: "hsl(209, 23%, 22%)",
          darkModeBg:"hsl(207, 26%, 17%)",
          lightModeText:"hsl(200, 15%, 8%)",
          lightModeInput:"hsl(0, 0%, 52%)",
          lightModeBg:"hsl(0, 0%, 98%)",
          darkModeText:"hsl(0, 0%, 100%)"
        }
      },
      fontSize:{
        homePageItems:"14px",
        detailPage:"16px"
      },
      fontFamily:{
        body:["Nunito", "Sans"]
      }
    },
  },
  plugins: [],
}
