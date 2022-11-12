module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7348",
        main: "#252525",
        sec: "#111111",
      },
      screens: {
        'xs': '400px'
      },
      boxShadow: {
        custom : "0px 0px 4px rgba(0, 0, 0, 0.15)"
      }
    },
  },
  plugins: [],
}
