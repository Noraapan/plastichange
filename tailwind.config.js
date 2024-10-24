/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"],
  theme: {
    extend: {
      colors: {
        cerice_: "#FF1054",
        griphite_lighter: "#CACDD5",
        graphite_light: "#A3A6B4",
        graphite_: "#70727E",
        graphite_dark: "#1C1E23",
        pine_green: "#007C79",
      },
      fontFamily: {
        rubik: ["Rubik", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
