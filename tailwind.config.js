/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slateblue: "#614bc3",
        white: "#fff",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        pacifico: "Pacifico",
      },
      borderRadius: {
        mini: "15px",
      },
    },
    fontSize: {
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
