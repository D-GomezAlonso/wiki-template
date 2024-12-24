/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "site-background": "url('./assets/background.jpg')",
      },
      borderColor: {
        body: "#6F6F6F",
        container: "#A4A4A4",
      },
      backgroundColor: {
        navbar: "rgb(10 10 10 / 0.65)",
        main: "rgb(10 10 10 / 0.95)",
        sectionHeader: "rgb(70 70 70 / 0.50)",
      },
    },
  },
  plugins: [],
};
