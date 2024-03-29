/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        appear: "appear .2s ease-in-out 1",
        appear2: "appear2 .1s ease-in-out 1",
        colorize: "colorize .5s ease-in-out 1",
      },
      colors: {
        mainColor: "rgb(217 70 239)",
        cardColor: "#fff"
      },
    },
  },
  plugins: [],
};
