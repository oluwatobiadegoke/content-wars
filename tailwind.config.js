module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      main: "Roboto",
    },
    extend: {
      width: {
        w: "1px",
      },
      height: {
        h: "1px",
        h2: "2px",
      },
      colors: {
        deepGrey: {
          100: "#1E1E1E",
        },
        lightGrey: {
          100: "#404040",
        },
        appYellow: {
          100: "#EABF22",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
