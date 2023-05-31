/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // breakpoints

      xs: "600px",
      sm: "800px",
      md: "1000px",
      lg: "1250px"
    },
    extend: {
      colors: {
        //custom colors for the website
        bgColor: "#0F0E19",
        textColor: "#FFFFFF",
        ascentColor: "#32E5EB",
        btnColor:"hsl(240 33% 14%)"
      },
    },
  },
  plugins: [require("daisyui")],
};
